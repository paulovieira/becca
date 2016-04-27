// https://github.com/guyonroche/exceljs#reading-xlsx

var Fs = require("fs");
var Excel = require('exceljs');
var _ = require("underscore");


var workbook = new Excel.Workbook();


// the main array
var becca = [];


if(!process.argv[2]){
	console.log("excel file is missing in the argument");
	process.exit(1);
}
// the rows relative to the case-studies (4 to 19)
var rowStart = 4, rowEnd = 20;
//var rowStart = 5, rowEnd = 6;
workbook.xlsx
	.readFile(process.argv[2])

/*

1st pass - read the evaluation that each case study gave to each criteria; 

1) for each row in the spreadsheet create a caseStudy object; it will have the form:

	{
		_row: 4,
		_name: "Cascais Municipality",
		rates: {
            "Participation - Quality of the process": {
                "relevance": "5",
                "feasibility": "5",
                "availability of information": "5"
            },
            ...
		}

		// to be done in the 2nd pass...
		contextDimensions: {
			sectors: [..., ...],
			impatcs: [..., ...]
		}
	},


2) push to the array


This data is available in sheet1, but also on sheet 5, 9, etc (it is repeated, so we use sheet 1) 

*/

    .then(function() {

    	var workSheet1 = workbook.getWorksheet(1);

		var rows = _.range(rowStart, rowEnd);

		// the cells relative to the case-study and criteria names (11 to the end, except cell 12)
		var cells = _.range(11, workSheet1._columns.length + 1);
		cells.splice(1, 1);

		rows.forEach(function(row){

			// list of key-value pairs
			var pairs = [], caseStudy = {};

			caseStudy["_row"] = row;
			caseStudy["rates"] = {};

			cells.forEach(function(cell){

				var pair = [
					String(workSheet1.getRow(3).getCell(cell).value),
					String(workSheet1.getRow(row).getCell(cell).value)
				];


				if(cell>=12 && !_.contains(["1","2","3","4","5","n/a", "null"], pair[1])){
					console.log("cell: ", cell);
					console.log("pair: ", pair);
					
					throw new Error("Grade value is not correct");
				}

				pairs.push(cleanRates(pair, cell));
			});

			var obj = _.object(pairs);
			for(var key in obj){

				var array = key.split("-").map(s => s.trim());
				if(array.length===1){
					//caseStudy[key] = obj[key];
					caseStudy["_name"] = obj[key];
					continue;
				}

				var dimension = array.pop().toLowerCase();
				var criteriaName = array.join(" - ").trim();
				caseStudy["rates"][criteriaName] = caseStudy["rates"][criteriaName] || {};

				if(!_.contains(['relevance', 'feasibility', 'availability of information'], dimension)){
					throw new Error("Dimension should be one of: 'relevance', 'feasibility', 'availability of information'")
				}

				caseStudy["rates"][criteriaName][dimension] = Number(obj[key]);
			}

			// make sure that for all criteria we for the 3 dimensions
			for(var key in caseStudy["rates"]){

				var obj = caseStudy[key];
				if(typeof obj === "object" && Object.keys(obj).length!==3){
					throw new Error("The criteria does not have the 3 dimensions")
				}
			}

			// finally, all is good, append the object to the main array
			becca.push(caseStudy);
		});
    })

/*

2nd pass - for each sheet whose id is of the form 4*n + 1 (n=0,1,...),

a) iterate over all the rows and get the correct object from the becca array
b) iterate over all the cells from 1 to 10 (the different context dimensions); for those whose value is "x", append the respective value at row 3 to the array in the "contextDimension.xyz" property (where xyz is given by the sheetsMapping: "sectors", "impacts", etc)

Example:

[
	{
		"Case Study": "Cascais Municipality",
		...
		"contextDimension": ["Health and Social Policies", "Tourism", "retro- und prospective", ...]
	},
	{
		"Case Study": "Timmendorf",
		...
		"contextDimension": ["Coastal and Marine systems", ...]
	}
]


*/
	.then(function(){


		var sheetsMapping = {
			"sectors": "Original_Criter_Sectors",
			"impacts": "Original_Criter_Impacts",
			"perspective": "Original_Criter_Perspective",
			"integration": "Original_Criter_integration",
			"approach": "Original_Criter_approach",
			"orientation": "Original_Criter_Orientation",
			"setting": "Original_Criter_Setting"
		};

		for(var sheet in sheetsMapping){

	    	var workSheet = workbook.getWorksheet(sheetsMapping[sheet]);

	    	// the rows relative to the case-studies (4 to 19)
			var rows = _.range(rowStart, rowEnd);

			// the cells relative to the contextual dimensions; note that the interval for some sheets
			// is smaller (like 1 to 3), but the values are then ignored 
			var cells = _.range(1, 10);

			rows.forEach(function(row){

				// list of key-value pairs
				var pairs = [];
				var caseStudy = _.findWhere(becca, {_row: row});
				if(!caseStudy){
					throw new Error("case study not found");
				}

				cells.forEach(function(cell){

					var pair = [
						String(workSheet.getRow(3).getCell(cell).value),
						String(workSheet.getRow(row).getCell(cell).value)
					];

					if(pair[1]==="null"){
						pair[1] = "";
					}
					
					pair[0] = pair[0].trim();
					pair[1] = pair[1].trim();

					pair[0] = cleanContextDimension(pair[0]);

					if(pair[1] && pair[1] === "x"){
						pairs.push(pair);
					}

				});

				var obj = _.object(pairs);

				// finally, all is good now, add the object with the context dimensions properties to the case study
				caseStudy.contextDimensions = caseStudy.contextDimensions || {};
				debugger;
				caseStudy.contextDimensions[sheet] = Object.keys(obj);
			});

		}

	})

	.then(function(){

		// final check for the contextDimensions: make sure the non-exclusive fields (can have one, the other, or both) are coherent
		becca.forEach(function(cs){
			for(var dim in cs.contextDimensions){

				// this dimension allows the "both" option, so use it!
				if(dim==="perspective" || dim==="approach" || dim==="setting"){
					if(cs.contextDimensions[dim].length===2){
						cs.contextDimensions[dim] = ["Both"];
					}
				}

				// this dimension doesn't allow the "both" option in the sheet, so we use the first value in the array
				if(dim==="integration" || dim==="orientation"){
					if(cs.contextDimensions[dim].length===2){
						cs.contextDimensions[dim] = [cs.contextDimensions[dim][0]];
					}
				}

				if(cs.contextDimensions[dim].length===0){
					console.log(`contextDimension ${ dim } is empty (${ cs["_name"] })`);
				}
				
			}
		})

		// becca.forEach(o => {
		// 	console.log(o["_name"]);
		// 	console.log(o["contextDimensions"]);
		// 	console.log("\n\n");
		// })

		Fs.writeFileSync("becca.json", JSON.stringify(becca, null, 4))

	})
    .catch(function(err){
    	throw err;
    })




// clean the original data
function cleanRates(pair, cell){

	if(pair[0]==='Case Study:'){
		pair[0] = 'Case Study';
		return pair;
	}

	if(pair[1]==='n/a'){
		pair[1] = '0';
		return pair;
	}

	if(pair[1]==='null'){
		pair[1] = '0';
		console.log(`warning: cell ${ cell} does not have a value`)
		return pair;
	}

	var wrong, correct;

	wrong = "_x000D_";
	correct = "";
	if(pair[0].indexOf(wrong) >= 0){
		pair[0] = pair[0].replace(wrong, correct);
		return pair;
	}

	wrong = "Coherence - Interactions (conflicts/synergies) with other measures";
	correct = "Coherence - Integration with policy domains, programmes or projects";
	if(_.contains([128, 129, 131, 132, 134, 135], cell)){
		pair[0] = pair[0].replace(wrong, correct);	
		return pair;
	}

	// fallback
	return pair;
}

function cleanContextDimension(dimension){

	if(dimension === "retro- und prospective"){
		return "both";
	}

	// fallback
	return dimension;

}

// https://github.com/guyonroche/exceljs#reading-xlsx

var Excel = require('exceljs');
var _ = require("underscore");


var workbook = new Excel.Workbook();

/*

1st pass - read the evaluation that each case study gave to each criteria; will create an array of objects of the form:

[
	{
		"Case Study": "Cascais Municipality",
		"Effectiveness - General description - Relevance": 4,
		"Effectiveness - General description - Feasibility": 3,
		...
	},
	{
		...
	}
]

This data is available in sheet1, but also on sheet 5, 9, etc 

*/

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

				caseStudy["rates"][criteriaName][dimension] = obj[key];
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

	// 2nd pass
	.then(function(){


		var sheetsMapping = {
			"sectors": 1,
			"impacts": 5,
			"perspective": 9,
			"integration": 13,
			"approach": 17,
			"orientation": 21,
			"setting": 25
		};

		for(var sheet in sheetsMapping){

	    	var workSheet = workbook.getWorksheet(sheetsMapping[sheet]);

	    	// the rows relative to the case-studies (4 to 19)
			var rows = _.range(rowStart, rowEnd);

			// the cells relative to the contextual dimensions
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

					if(pair[1].indexOf("x")>=0){
						pairs.push(pair);	
					}
				});

				var obj = _.object(pairs);

				// finally, all is good, add the object with the context dimensions properties to the case study
				caseStudy.contextDimensions = caseStudy.contextDimensions || {};
				caseStudy.contextDimensions[sheet] = Object.keys(obj);
			});

		}

	})
	.then(function(){

		becca.forEach(o => {
			console.log(o["_name"]);
			console.log(o["contextDimensions"]);
			console.log("\n\n");
		})

	})
    .catch(function(err){
    	throw err;
    })


/*

2nd pass - for each sheet whose id is of the form 4*n + 1 (n=0,1,...),

a) find the cell id whose text is "Response ID"
b) iterate over all the rows and get the correct object from the becca array
c) iterate over all the cells from 1 until the one found in a) (the different context dimensions), and for those that have the "x", append to the array in the "contextDimension" property

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

	return pair;
}
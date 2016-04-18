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

workbook.xlsx
	.readFile("Survey_Assessment_26_09_2014.xlsx")
    .then(function() {

    	var sheet1 = workbook.getWorksheet(1);

    	// the rows relative to the case-studies (4 to 19)
		var rows = _.range(4,6);

		// the cells relative to the case-study and criteria names (11 to the end)
		var cells = _.range(11, sheet1._columns.length + 1);

		rows.forEach(function(row){

			// list of key-value pairs
			var pairs = [];

			cells.forEach(function(cell){

				var pair = cleanData([
					sheet1.getRow(3).getCell(cell).value,
					sheet1.getRow(row).getCell(cell).value,
				]);

				pairs.push(pair);
			});

			becca.push(_.object(pairs));
		});
    })
	.then(function(){

		console.log(becca)
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
function cleanData(pair){

	if(pair[0]==='Case Study:'){
		pair[0] = 'Case Study';
	}

	return pair;
}
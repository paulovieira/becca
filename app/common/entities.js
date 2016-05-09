var _ = require("underscore");
var Backbone = require("backbone");


var becca = require("../../survey/becca.json");
module.exports.becca = becca;

var selectedDimensions = {
	sector: [],  
	impact: [],
	perspective: [],
	integration: [],
	approach: [],
	orientation: [],
	setting: [],
};

module.exports.selectedDimensions = selectedDimensions;
window.selectedDimensions = selectedDimensions;


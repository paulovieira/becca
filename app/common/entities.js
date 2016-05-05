var _ = require("underscore");
var Backbone = require("backbone");


var becca = require("../../survey/becca.json");
module.exports.becca = becca;
//window.becca = becca;

/*
var CriteriaM = Backbone.Model.extend({
    defaults: {
	    type: undefined,
	    category: undefined,
	    criteria: undefined,
	    explanation: undefined,
	    evaluation: undefined,
	    wheight: 1,
    },

});

// todo: include also the criteria that have been excluded 
var CriteriaC = Backbone.Collection.extend({
    model: CriteriaM,
});

var criteriaC = new CriteriaC();
criteriaC.reset(require("./criteria-data.js"));

module.exports.criteriaC = criteriaC;
window.criteriaC = criteriaC;
*/

// var criteria = require("./criteria-data-2.js")
// module.exports.criteria = criteria;
// window.criteria = criteria;

/*
var selectedDimensionsM = new Backbone.Model({
	sector: [],  
	impact: [],
	perspective: undefined,
	integration: undefined,
	approach: undefined,
	orientation: undefined,
	setting: undefined,
});

module.exports.selectedDimensionsM = selectedDimensionsM;
window.selectedDimensionsM = selectedDimensionsM;
*/

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


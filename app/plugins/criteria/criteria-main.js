require("./criteria-main.css")
var _ = require("underscore");
var Backbone = require("backbone");
var Mn = require("backbone.marionette");

var DimensionsForm = require("./dimensions-form");
var Becca = require("../../../survey/becca.json");

var CriteriaMain = Mn.LayoutView.extend({
    template: require('./criteria-main.html'),
    initialize: function(){
        debugger;
        console.log("criteria main view");
    },
    ui: {
        "showCriteriaBtn": "button.btn-primary"
    },
    events: {
        "click @ui.showCriteriaBtn": function(e){
            
            var dimensionsForm = new DimensionsForm();
        }
    }

});

module.exports = CriteriaMain;

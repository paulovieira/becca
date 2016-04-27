require("./criteria-main.css")
var _ = require("underscore");
var Backbone = require("backbone");
var Mn = require("backbone.marionette");

var DimensionsForm = require("./dimensions-form");
var criteria = require("../../common/entities").criteria;

var selectedDimensions = require("../../common/entities").selectedDimensions;
var becca = require("../../common/entities").becca;

var CriteriaMain = Mn.LayoutView.extend({
    template: require('./criteria-main.html'),
    initialize: function(){
        //debugger;
        console.log("criteria main view");
    },
    ui: {
        "showCriteriaBtn": "button.btn-primary"
    },
    events: {
        "click @ui.showCriteriaBtn": function(e){
            
            // when initialized, the dimensionsForm view will read the selected values in the checkboxes/radios
            // and update the selectedDimensions model
            var dimensionsForm = new DimensionsForm();

            this.compute();
        }
    },

    compute: function(){
//debugger
        // sectors
        var dimensionNames = ["sectors", 
                            "impacts", 
                            "perspective",
                            "integration",
                            "approach",
                            "orientation",
                            "setting"
                            ];

        _.each(dimensionNames, function(dimension){

            _.each(selectedDimensions[dimension], function(value){
                //debugger
                _.each(becca, function(caseStudy){

                    if(_.contains(caseStudy.contextDimensions[dimension], value)){
                        console.log(value, caseStudy._row)
                    }
                });
            });

        })
    }

});

module.exports = CriteriaMain;

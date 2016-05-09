require("./criteria-main.css")
var _ = require("underscore");
var Backbone = require("backbone");
var Radio = require("backbone.radio");
var Mn = require("backbone.marionette");

var DimensionsForm = require("./dimensions-form");
var CriteriaList = require("./criteria-list")
//var criteria = require("../../common/entities").criteria;
var selectedDimensions = require("../../common/entities").selectedDimensions;
var becca = require("../../common/entities").becca;


var internals = {};

internals.cheapClone = function(obj){

    return JSON.parse(JSON.stringify(obj));
};


internals.getQualitativeScore = function(score){

    var qualitativeScore = "";
    if(score > 4 && score <= 5){
        qualitativeScore = "High relevance";
    }
    else if(score > 2 && score <= 4){
        qualitativeScore = "Medium relevance";
    }
    else if(score >= 0&& score <= 2){
        qualitativeScore = "Low relevance";
    }
    else {
        throw new Error("invalid score");
    }

    return qualitativeScore;
}


var CriteriaMain = Mn.LayoutView.extend({

    initialize: function(){

        Radio.channel("public").reply("updateShowCriteriaButton", function(){
            
            this.ui.showCriteria.find("h4").text("Update criteria");

        }, this);
    },

    template: require("./criteria-main.html"),

    ui: {
        "showCriteria": "button[data-ui='show-criteria']",
    },

    regions: {
        "criteriaList": "div[data-region='criteria-list']"
    },

    events: {
        "click @ui.showCriteria": "showCriteria"
    },

    showCriteria: function(){
//debugger;        
        // a DimensionsForm view is template-less; when initialized, it will simply read 
        // the selected values from the checkboxes/radios and update the selectedDimensions object
        new DimensionsForm();
        this.compute();
    },

    compute: function(){

        // make sure we have something selected
        var somethingSelected = false;

        _.each(selectedDimensions, function(dim){
            if(dim.length > 0){
                somethingSelected = true;
            }
        });

        if(!somethingSelected){
            alert("Plase select some properties from the list above");
            return;
        }

        // create a new criteria object
        var criteria = internals.cheapClone(require("../../common/criteria-data-2.js"));
        //internals.parseCriteria(criteria);
        window.criteria = criteria;

        _.each(criteria, function(obj){

            var a = obj.criteria.split(" - ");

            if(a.length !== 2){

                //debugger;

                if(a[0] === "Sustainability, Impacts and Side"){
                    a[0] = "Sustainability, Impacts and Side - effects";

                    a.splice(1,1);
                }
            }

            var s = "";
            for(var i=1; i<a.length; i++){
                s += (a[i] + " - ");
            }

            obj["category"] = a[0].trim();
            obj["criteriaShort"] = s.slice(0,-2).trim();
        });


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

            _.each(selectedDimensions[dimension], function(selectedDim){
                //debugger
                _.each(becca, function(caseStudy){

                    if(_.contains(caseStudy.contextDimensions[dimension], selectedDim)){
                        console.log(selectedDim, caseStudy._row)

                        for(var criteriaName in caseStudy.rates){

                            // get the corresponding object from the criteria array
                            //console.log(selectedDim, caseStudy)
                            var obj = _.findWhere(criteria, {criteria: criteriaName})
                            if(!obj){
                                console.log(caseStudy._row)
                                throw new Error(criteriaName + " not found in the criteria array")
                            }
                            //debugger;

                            obj.n++;
                            obj["relevance"] += caseStudy.rates[criteriaName]["relevance"];
                            obj["feasibility"] += caseStudy.rates[criteriaName]["feasibility"];
                            obj["availability of information"] += caseStudy.rates[criteriaName]["availability of information"];

                            
                        }
                    }
                });
            });
        });

        _.each(criteria, function(obj){

            obj["relevance"] /= obj.n;
            obj["feasibility"] /= obj.n;
            obj["availability of information"] /= obj.n;

            obj["grade"] = (2*obj["relevance"] + 1*obj["feasibility"] + 1*obj["availability of information"]) / 4;

            obj["qualitativeGrade"] = internals.getQualitativeScore(obj["grade"]);
        });

        var sortedCriteria = _.chain(criteria)
                                // descending order (the first element has the highest grade)
                                .sortBy(function(obj){ return -obj.grade })
                                .each(function(obj){ obj.grade = obj.grade.toFixed(1); })
                                .value();

        var criteriaList = new CriteriaList({
            model: new Backbone.Model({ 
                criteriaList: sortedCriteria
            })
        });

        this.getRegion("criteriaList").show(criteriaList);

    }

});

// internals.parseCriteria = function(array){

//     _.each(array, function(obj){
//         if(obj["criteria"].indexOf("Sustainability, Impacts and Side - effects") === 0){

//             var before = "Sustainability, Impacts and Side - effects";
//             var after = "Sustainability, Impacts and Side-effects"
//             obj["criteria"] = obj["criteria"].replace(before, after);

//         }
//     })
    
// }

module.exports = CriteriaMain;


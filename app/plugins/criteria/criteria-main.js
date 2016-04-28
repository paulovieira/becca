require("./criteria-main.css")
var _ = require("underscore");
var Backbone = require("backbone");
var Mn = require("backbone.marionette");

var DimensionsForm = require("./dimensions-form");
var CriteriaList = require("./criteria-list")
//var criteria = require("../../common/entities").criteria;
var selectedDimensions = require("../../common/entities").selectedDimensions;
var becca = require("../../common/entities").becca;

var CriteriaMain = Mn.LayoutView.extend({

    template: require('./criteria-main.html'),

    ui: {
        "showCriteriaBtn": "button.btn-primary",
        //"criteriaListRegion": "div#mn-r-criteria-list"
    },

    regions: {
        "criteriaList": "div#mn-r-criteria-list"
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

        // make sure we have something selected
        var somethingSelected = false;
        _.chain(selectedDimensions)
            .values()
            .compact()
            .each(function(array){ 
                if(array.length > 0){
                    somethingSelected = true;
                }
            })

        if(!somethingSelected){
            alert("Plase select some properties from the list above")
            return;
        }


        // create a new criteria object
        var criteria = require("../../common/criteria-data-2.js")
        criteria = JSON.parse(JSON.stringify(criteria));
        _.each(criteria, function(obj){
            var a = obj.criteria.split("-")
            obj["category"] = a[0].trim();
            obj["criteriaShort"] = a[1].trim();
        });

        window.criteria = criteria;


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

            obj["grade"] = (1*obj["relevance"] + 1*obj["feasibility"] + 1*obj["availability of information"]) / 3;
        });

        //var sortedCriteria = _.sortBy(criteria, "grade");
        //var temp = _.chain(criteria).sortBy("grade").rest(criteria.length - 10).value()
        var temp = _.sortBy(criteria, "grade");
        var sortedCriteria = [];

        var l = temp.length;
        for(var i=l-1; i>l-10; i--){
            temp[i]["grade"] = temp[i]["grade"].toFixed(1);
            sortedCriteria.push(temp[i]);

        }

        var criteriaList = new CriteriaList({
            model: new Backbone.Model({ 
                criteriaList: sortedCriteria
            })
        });

        this.getRegion("criteriaList").show(criteriaList);

    }

});

module.exports = CriteriaMain;

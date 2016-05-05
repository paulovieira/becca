var _ = require("underscore");
var $ = require("jquery");
var Backbone = require("backbone");
var Mn = require("backbone.marionette");

var selectedDimensions = require("../../common/entities").selectedDimensions;

var DimensionsForm = Mn.ItemView.extend({

    template: false,

    el: $("div#dimensions-form"),

    initialize: function(){
//debugger;
        var formData = Backbone.Syphon.serialize(this);

        var checkboxNames = ["impacts", "sectors"];

        var radioNames = ["perspective", 
						"integration", 
						"approach", 
						"orientation", 
						"setting"];

		selectedDimensions["sectors"] = [];
		selectedDimensions["impacts"] = [];

        _.each(formData, function(value, name){
//debugger;
            // the value of a checkbox is either true or false (the html doesn't have the "value" attribute)
            // the value of a radio is the corresponding "value" attribute in the html

            // the "name" attribute has this pattern: "groupName:optionName"
            var a = name.split(":");

            // checkbox 
            if(_.contains(checkboxNames, a[0]) && a[1] && value){
                selectedDimensions[a[0]].push(a[1]);
                return;
            }

            // radio 
            if(_.contains(radioNames, a[0]) && value){
                selectedDimensions[a[0]].push(value);
                return;
            }
        });

        // make sure the radio groups have at most 1 option
        _.each(radioNames, function(name){
            if(selectedDimensions[name].length>=2){
                throw new Error("invalid number of selections for radio group " + name)
            }
        });
        
    }

});

module.exports = DimensionsForm;

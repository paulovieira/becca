var _ = require("underscore");
var $ = require("jquery");
var Backbone = require("backbone");
var Mn = require("backbone.marionette");

var selectedDimensions = require("../../common/entities").selectedDimensions;

var DimensionsForm = Mn.ItemView.extend({

    template: false,

    el: $("div#dimensions-form"),

    initialize: function(){

        var data = Backbone.Syphon.serialize(this);

        var radioNames = ["perspective", 
						"integration", 
						"approach", 
						"orientation", 
						"setting"];

		selectedDimensions["sectors"] = [];
		selectedDimensions["impacts"] = [];

        _.each(data, function(value, name){

        	if(value===false){
        		return;
        	}

        	// checkbox options
        	var s = name.split(":");
        	if(s[1]){
        		selectedDimensions[s[0]].push(s[1]);
        		return;
        	}

        	// radio options
        	if(_.contains(radioNames, name)){
        		selectedDimensions[name] = [value];
        		return;
        	}

        });        


    }

});

module.exports = DimensionsForm;

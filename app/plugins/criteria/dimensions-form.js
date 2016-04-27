var $ = require("jquery");
var Backbone = require("backbone");
var Mn = require("backbone.marionette");

var DimensionsForm = Mn.ItemView.extend({
    template: false,
    el: $("div#dimensions-form"),
    initialize: function(){
        var data = Backbone.Syphon.serialize(this);
        data = _.omit(data, function(value){ return !value;})
        debugger;
    }

});

module.exports = DimensionsForm;

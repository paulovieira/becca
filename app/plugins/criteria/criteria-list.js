var _ = require("underscore");
var Backbone = require("backbone");
var Mn = require("backbone.marionette");

var CriteriaList = Mn.ItemView.extend({
    template: require('./criteria-list.html'),
});

module.exports = CriteriaList;
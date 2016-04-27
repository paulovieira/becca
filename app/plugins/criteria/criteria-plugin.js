var Mn = require("backbone.marionette");

var CriteriaMain = require("./criteria-main");
var DimensionsForm = require("./dimensions-form");

var criteriaPlugin = new Mn.Plugin({
    name: "criteria",
    views: [
        {
            viewName: "criteria-main",
            viewClass: CriteriaMain
        },
        {
            viewName: "dimensions-form",
            viewClass: DimensionsForm
        },
    ]
});

module.exports = criteriaPlugin;

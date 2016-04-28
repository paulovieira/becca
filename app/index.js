require("./_config/config");
var $ = require("jquery");
var Mn = require("backbone.marionette");
var criteriaPlugin = require("./plugins/criteria/criteria-plugin");

$("input[data-becca=context-dimension]").checkbox();


criteriaPlugin.start({
    region: new Mn.Region({ el: $("div#mn-r-container") }),
});

var Becca = require("../survey/becca.json");
console.log(Becca);
var x = 2;
require("./_config/config");
var $ = require("jquery");
$("input[data-becca=context-dimension]").checkbox();

var Mn = require("backbone.marionette");
var criteriaPlugin = require("./plugins/criteria/criteria-plugin");

criteriaPlugin.start({
    region: new Mn.Region({ el: $("div[data-region='main']") }),
});


function dummy(){
    return 'dummy';
}

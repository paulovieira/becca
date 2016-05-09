//var _ = require("underscore");
//var Backbone = require("backbone");
var Mn = require("backbone.marionette");

var CriteriaList = Mn.ItemView.extend({
    template: require('./criteria-list.html'),
    ui: {
        showRemainingCriteria: "button[data-ui='show-remaining']"
    },
    events: {
        "click @ui.showRemainingCriteria": function(e){

            this.$("div[data-id='container-show-remaining-button']").css("display", "none");
        }
    }
});

module.exports = CriteriaList;
var _ = require("underscore");
var Backbone = require("backbone");

var CriteriaM = Backbone.Model.extend({
    defaults: {
    },
    id: undefined,
    description: ""
});

// todo: include also the initiatives that have been excluded 
var CriteriaC = Backbone.Collection.extend({
    model: CriteriaM,
});

var initiativesC = new InitiativesC();


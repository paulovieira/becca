
var CriteriaV = Mn.ItemView.extend({
	template: "app/criteria.html",
	onBeforeAttach: function(){
		this.$(".js-criteria-weight").val("1")
	}
});



// outcome approaches (what has been achieved?)

var outcomeV = new CriteriaV({
	model: new Backbone.Model({
		criteria: [
			_.where(criteria, {type: "Outcome", category: "Effectiveness"}),
			_.where(criteria, {type: "Outcome", category: "Efficiency"}),
			_.where(criteria, {type: "Outcome", category: "Equity"})
		]
	})
});

var outcomeR = new Mn.Region({
	el: "#mn-r-outcome"
});

outcomeR.show(outcomeV);

// process-oriented approaches (how has this been done?)

var processV = new CriteriaV({
	model: new Backbone.Model({
		criteria: [
			_.where(criteria, {type: "Process", category: "Adaptive capacity"}),
			_.where(criteria, {type: "Process", category: "Dependencies"}),
		]
	})
});

var processR = new Mn.Region({
	el: "#mn-r-process"
});

processR.show(processV);

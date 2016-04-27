
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


var resultsR = new Mn.Region({
	el: "#mn-r-results"
});

var ResultsV = Mn.LayoutView.extend({
	template: "app/compute.html",
	events: {
		"click button": "compute"
	},
	compute: function(){
		console.log("compute")
		
		var grades = $("select.js-criteria-evaluation").map(function(){
			var val = Number($(this).val());
			if(_.isNaN(val)){
				val = 0;
			}
			return val;
		});

		var totalGrades = 0;
		var total = 0;
		for(var i=0; i<grades.length; i++){
			if(grades[i]>0){
				totalGrades += grades[i];
				total += 5;
			}
		}
		//debugger;
		var result = Math.round(totalGrades / total * 100);
		console.log(result)
		$("#grade-result").html("<h3>Evaluation for this action:</h3><h1> " + result + "%</h1>");
	}
});

resultsR.show(new ResultsV);

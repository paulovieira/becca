webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var $ = __webpack_require__(28)
	var criteriaPlugin = __webpack_require__(45);
	
	$("input[data-becca=context-dimension]").checkbox();
	
	
	criteriaPlugin.start({
	    region: new Mn.Region({ el: $("div#mn-r-container") }),
	});
	
	var Becca = __webpack_require__(49);
	console.log(Becca);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	__webpack_require__(11);
	__webpack_require__(13);
	__webpack_require__(13);
	__webpack_require__(15);
	__webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(21);
	
	var $ = __webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(32);
	__webpack_require__(33);
	
	// bootstrap javascript has to be imported using the imports loader
	// https://github.com/webpack/imports-loader
	__webpack_require__(36);
	
	
	var x = 1;
	
	/*
	$("select").dropdown();
	$("input[type=checkbox], input[type=radio]").checkbox();
	
	$("#bg").background({
	    source: "/public/images/9f8335c934d027c1e31c4f25ba6b511a_1360x765.jpg"
	});
	*/
	
	
	var _ = __webpack_require__(37);
	
	// initial configuration
	
	// the following require calls are necessary to call the code that makes the plugin 
	// attach to the respective objects (example: Marionette.Service)
	
	// backbone.marionette will require: backbone, underscore
	// backbone will require: underscore, jquery
	var Backbone = __webpack_require__(38);
	var Mn = __webpack_require__(39);
	var Radio = __webpack_require__(40);
	
	// backbone.base-router will require: underscore, backbone;
	// after the module is required, the backbone object will have a new property (Backbone.BaseRouter)
	var BaseRouter = __webpack_require__(41);
	
	// backbone.syphon will require: underscore, backbone, jquery
	// after the module is required, the backbone object will have a new property (Backbone.Syphon)
	var Syphon = __webpack_require__(42);
	
	// marionette.state will require: underscore, backbone, backbone.marionette
	// in this case we have to explicitely attach the state object to the marionette object
	var State = __webpack_require__(43);
	Mn.State = State;
	
	
	// override the default renderer (this works because Marionette.renderer has been
	// changed according to pr #2911 (add a custom renderer
	Mn.View.prototype.renderer = function(template, data) {
	    //debugger;
	    if (!template) {
	        throw new Mn.Error({
	            name: 'TemplateNotFoundError',
	            message: 'Cannot render the template since its false, null or undefined.'
	        });
	    }
	
	    try {
	        // nunjucks will look for the pre-compiled template at window.nunjucksPrecompiled;
	        // more details here: https://mozilla.github.io/nunjucks/api.html#browser-usage
	        // however here we are using webpack's "nunjucks-loader"
	        output = template.render(data);
	
	        return output;
	    } catch (err) {
	        throw new Mn.Error({
	            name: 'NunjucksError',
	            message: err.message
	        });
	    }
	};
	
	Mn.getClosestCid = function(el){
	    return $(el).closest('[data-mn-cid*="view"]').attr('data-mn-cid');
	};
	
	Mn.Router = BaseRouter.extend({
	    onNavigate: function(routeData) {
	        //debugger;
	        var routeObj = routeData.linked;
	        var keys = ['query', 'params', 'uriFragment', 'originalRoute'];
	        routeObj.onNavigate(_.pick(routeData, keys));
	    }
	});
	
	/*
	var modalRegion = new Mn.Region({ el: $("div.mn-r-modal-contents") });
	Radio.channel("public").reply("modalRegion", function(){
	    return modalRegion;
	});
	*/
	__webpack_require__(44);
	
	
	if (true) {
	    window.$ = $;
	    window._ = _;
	    window.Mn = Mn;
	    window.Backbone = Backbone;
	    window.Radio = Radio;
	    Radio.DEBUG = true;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./bootstrap.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./bootstrap.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap v3.3.5 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url(" + __webpack_require__(5) + ");\n  src: url(" + __webpack_require__(5) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(6) + ") format('woff2'), url(" + __webpack_require__(7) + ") format('woff'), url(" + __webpack_require__(8) + ") format('truetype'), url(" + __webpack_require__(9) + "#glyphicons_halflingsregular) format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"*\";\n}\n.glyphicon-plus:before {\n  content: \"+\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270F\";\n}\n.glyphicon-glass:before {\n  content: \"\\E001\";\n}\n.glyphicon-music:before {\n  content: \"\\E002\";\n}\n.glyphicon-search:before {\n  content: \"\\E003\";\n}\n.glyphicon-heart:before {\n  content: \"\\E005\";\n}\n.glyphicon-star:before {\n  content: \"\\E006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\E007\";\n}\n.glyphicon-user:before {\n  content: \"\\E008\";\n}\n.glyphicon-film:before {\n  content: \"\\E009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\E010\";\n}\n.glyphicon-th:before {\n  content: \"\\E011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\E012\";\n}\n.glyphicon-ok:before {\n  content: \"\\E013\";\n}\n.glyphicon-remove:before {\n  content: \"\\E014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\E015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\E016\";\n}\n.glyphicon-off:before {\n  content: \"\\E017\";\n}\n.glyphicon-signal:before {\n  content: \"\\E018\";\n}\n.glyphicon-cog:before {\n  content: \"\\E019\";\n}\n.glyphicon-trash:before {\n  content: \"\\E020\";\n}\n.glyphicon-home:before {\n  content: \"\\E021\";\n}\n.glyphicon-file:before {\n  content: \"\\E022\";\n}\n.glyphicon-time:before {\n  content: \"\\E023\";\n}\n.glyphicon-road:before {\n  content: \"\\E024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\E025\";\n}\n.glyphicon-download:before {\n  content: \"\\E026\";\n}\n.glyphicon-upload:before {\n  content: \"\\E027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\E028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\E029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\E030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\E031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\E032\";\n}\n.glyphicon-lock:before {\n  content: \"\\E033\";\n}\n.glyphicon-flag:before {\n  content: \"\\E034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\E035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\E036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\E037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\E038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\E039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\E040\";\n}\n.glyphicon-tag:before {\n  content: \"\\E041\";\n}\n.glyphicon-tags:before {\n  content: \"\\E042\";\n}\n.glyphicon-book:before {\n  content: \"\\E043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\E044\";\n}\n.glyphicon-print:before {\n  content: \"\\E045\";\n}\n.glyphicon-camera:before {\n  content: \"\\E046\";\n}\n.glyphicon-font:before {\n  content: \"\\E047\";\n}\n.glyphicon-bold:before {\n  content: \"\\E048\";\n}\n.glyphicon-italic:before {\n  content: \"\\E049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\E050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\E051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\E052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\E053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\E054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\E055\";\n}\n.glyphicon-list:before {\n  content: \"\\E056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\E057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\E058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\E059\";\n}\n.glyphicon-picture:before {\n  content: \"\\E060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\E062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\E063\";\n}\n.glyphicon-tint:before {\n  content: \"\\E064\";\n}\n.glyphicon-edit:before {\n  content: \"\\E065\";\n}\n.glyphicon-share:before {\n  content: \"\\E066\";\n}\n.glyphicon-check:before {\n  content: \"\\E067\";\n}\n.glyphicon-move:before {\n  content: \"\\E068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\E069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\E070\";\n}\n.glyphicon-backward:before {\n  content: \"\\E071\";\n}\n.glyphicon-play:before {\n  content: \"\\E072\";\n}\n.glyphicon-pause:before {\n  content: \"\\E073\";\n}\n.glyphicon-stop:before {\n  content: \"\\E074\";\n}\n.glyphicon-forward:before {\n  content: \"\\E075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\E076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\E077\";\n}\n.glyphicon-eject:before {\n  content: \"\\E078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\E079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\E080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\E081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\E082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\E083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\E084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\E085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\E086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\E087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\E088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\E089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\E090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\E091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\E092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\E093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\E094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\E095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\E096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\E097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\";\n}\n.glyphicon-gift:before {\n  content: \"\\E102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\E103\";\n}\n.glyphicon-fire:before {\n  content: \"\\E104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\E105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\E106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\E107\";\n}\n.glyphicon-plane:before {\n  content: \"\\E108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\E109\";\n}\n.glyphicon-random:before {\n  content: \"\\E110\";\n}\n.glyphicon-comment:before {\n  content: \"\\E111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\E112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\E113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\E114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\E115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\E117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\E118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\E121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\E122\";\n}\n.glyphicon-bell:before {\n  content: \"\\E123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\E124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\E127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\E128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\E129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\E130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\";\n}\n.glyphicon-globe:before {\n  content: \"\\E135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\E136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\E137\";\n}\n.glyphicon-filter:before {\n  content: \"\\E138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\E139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\E140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\E141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\E142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\E143\";\n}\n.glyphicon-link:before {\n  content: \"\\E144\";\n}\n.glyphicon-phone:before {\n  content: \"\\E145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\E146\";\n}\n.glyphicon-usd:before {\n  content: \"\\E148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\E149\";\n}\n.glyphicon-sort:before {\n  content: \"\\E150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\E157\";\n}\n.glyphicon-expand:before {\n  content: \"\\E158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\E159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\E160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\E161\";\n}\n.glyphicon-flash:before {\n  content: \"\\E162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\E163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\E164\";\n}\n.glyphicon-record:before {\n  content: \"\\E165\";\n}\n.glyphicon-save:before {\n  content: \"\\E166\";\n}\n.glyphicon-open:before {\n  content: \"\\E167\";\n}\n.glyphicon-saved:before {\n  content: \"\\E168\";\n}\n.glyphicon-import:before {\n  content: \"\\E169\";\n}\n.glyphicon-export:before {\n  content: \"\\E170\";\n}\n.glyphicon-send:before {\n  content: \"\\E171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\E175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\E176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\E177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\E178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\E179\";\n}\n.glyphicon-header:before {\n  content: \"\\E180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\E181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\E182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\E183\";\n}\n.glyphicon-tower:before {\n  content: \"\\E184\";\n}\n.glyphicon-stats:before {\n  content: \"\\E185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\E186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\E187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\E188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\E195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\E197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\";\n}\n.glyphicon-cd:before {\n  content: \"\\E201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\E202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\E203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\E204\";\n}\n.glyphicon-copy:before {\n  content: \"\\E205\";\n}\n.glyphicon-paste:before {\n  content: \"\\E206\";\n}\n.glyphicon-alert:before {\n  content: \"\\E209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\E210\";\n}\n.glyphicon-king:before {\n  content: \"\\E211\";\n}\n.glyphicon-queen:before {\n  content: \"\\E212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\E213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\E214\";\n}\n.glyphicon-knight:before {\n  content: \"\\E215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\E216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26FA\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\E218\";\n}\n.glyphicon-bed:before {\n  content: \"\\E219\";\n}\n.glyphicon-apple:before {\n  content: \"\\F8FF\";\n}\n.glyphicon-erase:before {\n  content: \"\\E221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231B\";\n}\n.glyphicon-lamp:before {\n  content: \"\\E223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\E224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\E226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\E227\";\n}\n.glyphicon-btc:before {\n  content: \"\\E227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\E227\";\n}\n.glyphicon-yen:before {\n  content: \"\\A5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\A5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20BD\";\n}\n.glyphicon-rub:before {\n  content: \"\\20BD\";\n}\n.glyphicon-scale:before {\n  content: \"\\E230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\";\n}\n.glyphicon-education:before {\n  content: \"\\E233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\E235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n.glyphicon-oil:before {\n  content: \"\\E238\";\n}\n.glyphicon-grain:before {\n  content: \"\\E239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\E240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\E241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\E242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\E243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\E244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\E247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\E249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\E250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\E251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\E253\";\n}\n.glyphicon-console:before {\n  content: \"\\E254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\E255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\E256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\E257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\E258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\E259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\E260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n       -o-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 14.333333px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled,\n.btn-info[disabled],\nfieldset[disabled] .btn-info,\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus,\n.btn-info.disabled:active,\n.btn-info[disabled]:active,\nfieldset[disabled] .btn-info:active,\n.btn-info.disabled.active,\n.btn-info[disabled].active,\nfieldset[disabled] .btn-info.active {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled,\n.btn-warning[disabled],\nfieldset[disabled] .btn-warning,\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus,\n.btn-warning.disabled:active,\n.btn-warning[disabled]:active,\nfieldset[disabled] .btn-warning:active,\n.btn-warning.disabled.active,\n.btn-warning[disabled].active,\nfieldset[disabled] .btn-warning.active {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled,\n.btn-danger[disabled],\nfieldset[disabled] .btn-danger,\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus,\n.btn-danger.disabled:active,\n.btn-danger[disabled]:active,\nfieldset[disabled] .btn-danger:active,\n.btn-danger.disabled.active,\n.btn-danger[disabled].active,\nfieldset[disabled] .btn-danger.active {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n       -o-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\A0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 3;\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 2;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n       -o-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n       -o-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n       -o-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n       -o-transition:      -o-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  min-height: 16.42857143px;\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  line-break: auto;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n\n  line-break: auto;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n       -o-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n         -o-transition:      -o-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -15px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -15px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -15px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./bootflat.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./bootflat.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * bootflat 2.0.4\n *\n * Description: BOOTFLAT is an open source Flat UI KIT based on Bootstrap 3.2.0 CSS framework. It provides a faster, easier and less repetitive way for web developers to create elegant web apps.\n *\n * Homepage: http://bootflat.github.com/\n *\n * By @Flathemes <info@flathemes.com>\n *\n * Last modify time: 2014-09-03\n *\n * Licensed under the MIT license. Please see LICENSE for more information.\n *\n * Copyright 2013 FLATHEMES.\n *\n */\n\n/**\n * typography\n * --------------------------------------------------\n */\nbody {\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  color: #434a54;\n  background-color: white;\n}\n\na {\n  color: #3bafda;\n  text-decoration: none;\n}\na:hover, a:focus {\n  color: #4fc1e9;\n  text-decoration: none;\n}\na:focus {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 700;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small {\n  color: #e7e9ec;\n}\n\nh1,\nh2,\nh3 {\n  margin-top: 30px;\n  margin-bottom: 15px;\n}\n\nh4,\nh5,\nh6 {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\nh6 {\n  font-weight: normal;\n}\n\nh1,\n.h1 {\n  font-size: 51px;\n}\n\nh2,\n.h2 {\n  font-size: 43px;\n}\n\nh3,\n.h3 {\n  font-size: 30px;\n}\n\nh4,\n.h4 {\n  font-size: 19px;\n}\n\nh5,\n.h5 {\n  font-size: 18px;\n}\n\nh6,\n.h6 {\n  font-size: 14px;\n}\n\nblockquote {\n  border-left: 3px solid #ccd1d9;\n}\n\n.img-rounded {\n          border-radius: 4px;\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n\n.img-comment {\n  margin: 24px 0;\n  font-size: 15px;\n  font-style: italic;\n  line-height: 1.2;\n}\n\n/**\n * button\n * --------------------------------------------------\n */\n.btn {\n  color: white;\n}\n.btn, .btn.disabled, .btn[disabled] {\n  background-color: #aab2bd;\n  border-color: #aab2bd;\n}\n.btn:hover, .btn:focus, .btn:active, .btn.active {\n  color: white;\n  background-color: #ccd1d9;\n  border-color: #ccd1d9;\n  outline: none !important;\n}\n.btn:active, .btn.active {\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .125);\n     -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .125);\n}\n.btn.disabled, .btn[disabled] {\n  filter: alpha(opacity=45);\n  opacity: .45;\n}\n.btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active, .btn-link.active, .btn-link.disabled, .btn-link[disabled] {\n  color: #3bafda;\n  background-color: transparent;\n  border-color: transparent;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link:hover, .btn-link:focus {\n  text-decoration: underline;\n}\n.btn-default {\n  color: #434a54;\n  border-color: #aab2bd !important;\n}\n.btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active {\n  background-color: #ccd1d9;\n  border-color: #ccd1d9;\n}\n.btn-default, .btn-default.disabled, .btn-default[disabled] {\n  background-color: white;\n}\n.open .dropdown-toggle.btn-default {\n  background-color: #ccd1d9;\n  border-color: #ccd1d9;\n}\n.btn-primary, .btn-primary:active, .btn-primary.active, .btn-primary.disabled, .btn-primary[disabled] {\n  background-color: #3bafda;\n  border-color: #3bafda;\n}\n.btn-primary:hover, .btn-primary:focus {\n  background-color: #4fc1e9;\n  border-color: #4fc1e9;\n}\n.open .dropdown-toggle.btn-primary {\n  background-color: #4fc1e9;\n  border-color: #4fc1e9;\n}\n.btn-info, .btn-info:active, .btn-info.active, .btn-info.disabled, .btn-info[disabled] {\n  background-color: #37bc9b;\n  border-color: #37bc9b;\n}\n.btn-info:hover, .btn-info:focus {\n  background-color: #48cfad;\n  border-color: #48cfad;\n}\n.open .dropdown-toggle.btn-info {\n  background-color: #48cfad;\n  border-color: #48cfad;\n}\n.btn-success, .btn-success:active, .btn-success.active, .btn-success.disabled, .btn-success[disabled] {\n  background-color: #8cc152;\n  border-color: #8cc152;\n}\n.btn-success:hover, .btn-success:focus {\n  background-color: #a0d468;\n  border-color: #a0d468;\n}\n.open .dropdown-toggle.btn-success {\n  background-color: #a0d468;\n  border-color: #a0d468;\n}\n.btn-warning, .btn-warning:active, .btn-warning.active, .btn-warning.disabled, .btn-warning[disabled] {\n  background-color: #f6bb42;\n  border-color: #f6bb42;\n}\n.btn-warning:hover, .btn-warning:focus {\n  background-color: #ffce54;\n  border-color: #ffce54;\n}\n.open .dropdown-toggle.btn-warning {\n  background-color: #ffce54;\n  border-color: #ffce54;\n}\n.btn-danger, .btn-danger:active, .btn-danger.active, .btn-danger.disabled, .btn-danger[disabled],\n.btn-danger .open .dropdown-toggle.btn {\n  background-color: #da4453;\n  border-color: #da4453;\n}\n.btn-danger:hover, .btn-danger:focus {\n  background-color: #ed5565;\n  border-color: #ed5565;\n}\n.open .dropdown-toggle.btn-danger {\n  background-color: #ed5565;\n  border-color: #ed5565;\n}\n\n/**\n * button-group\n * --------------------------------------------------\n */\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .125);\n     -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .125);\n}\n.btn-group .btn {\n  border-left-color: #96a0ad;\n}\n.btn-group.open .btn-default.dropdown-toggle, .btn-group .btn-default:focus, .btn-group .btn-default:active, .btn-group .btn-default.active {\n  color: white;\n}\n.btn-group .btn-primary, .btn-group .btn-primary:focus, .btn-group .btn-primary:active, .btn-group .btn-primary.active {\n  border-left-color: #269ecb;\n}\n.btn-group .btn-success, .btn-group .btn-success:focus, .btn-group .btn-success:active, .btn-group .btn-success.active {\n  border-left-color: #7ab03f;\n}\n.btn-group .btn-warning, .btn-group .btn-warning:focus, .btn-group .btn-warning:active, .btn-group .btn-warning.active {\n  border-left-color: #efa50b;\n}\n.btn-group .btn-danger, .btn-group .btn-danger:focus, .btn-group .btn-danger:active, .btn-group .btn-danger.active {\n  border-left-color: #d1293a;\n}\n.btn-group .btn-info, .btn-group .btn-info:focus, .btn-group .btn-info:active, .btn-group .btn-info.active {\n  border-left-color: #2fa084;\n}\n.btn-group .btn:first-child, .btn-group .btn-primary:first-child, .btn-group .btn-success:first-child, .btn-group .btn-warning:first-child, .btn-group .btn-danger:first-child, .btn-group .btn-info:first-child {\n  border-left-color: transparent;\n}\n\n.btn-group-vertical .btn, .btn-group-vertical .btn-group .btn-primary {\n  border-top-color: #96a0ad !important;\n}\n.btn-group-vertical .btn-primary, .btn-group-vertical .btn-primary:focus, .btn-group-vertical .btn-primary:active, .btn-group-vertical .btn-primary.active, .btn-group-vertical .btn-group .btn-primary {\n  border-top-color: #269ecb !important;\n}\n.btn-group-vertical .btn-success, .btn-group-vertical .btn-success:focus, .btn-group-vertical .btn-success:active, .btn-group-vertical .btn-success.active, .btn-group-vertical .btn-group .btn-success {\n  border-top-color: #7ab03f !important;\n}\n.btn-group-vertical .btn-warning, .btn-group-vertical .btn-warning:focus, .btn-group-vertical .btn-warning:active, .btn-group-vertical .btn-warning.active, .btn-group-vertical .btn-group .btn-warning {\n  border-top-color: #efa50b !important;\n}\n.btn-group-vertical .btn-danger, .btn-group-vertical .btn-danger:focus, .btn-group-vertical .btn-danger:active, .btn-group-vertical .btn-danger.active, .btn-group-vertical .btn-group .btn-danger {\n  border-top-color: #d1293a !important;\n}\n.btn-group-vertical .btn-info, .btn-group-vertical .btn-info:focus, .btn-group-vertical .btn-info:active, .btn-group-vertical .btn-info.active, .btn-group-vertical .btn-group .btn-info {\n  border-top-color: #2fa084 !important;\n}\n.btn-group-vertical .btn:not(.btn-default):first-child, .btn-group-vertical .btn-primary:first-child, .btn-group-vertical .btn-success:first-child, .btn-group-vertical .btn-warning:first-child, .btn-group-vertical .btn-danger:first-child, .btn-group-vertical .btn-info:first-child {\n  border-top: none;\n}\n\n/**\n * labels and badges\n * --------------------------------------------------\n */\n.label,\n.badge {\n  background-color: #aab2bd;\n}\n\n.label-default,\n.badge-default {\n  color: #434a54;\n  background-color: white;\n  border: 1px solid #aab2bd;\n}\n\n.label-primary,\n.badge-primary {\n  background-color: #3bafda;\n  border-color: #3bafda;\n}\n\n.label-success,\n.badge-success {\n  background-color: #8cc152;\n  border-color: #8cc152;\n}\n\n.label-danger,\n.badge-danger {\n  background-color: #da4453;\n  border-color: #da4453;\n}\n\n.label-warning,\n.badge-warning {\n  background-color: #f6bb42;\n  border-color: #f6bb42;\n}\n\n.label-info,\n.badge-info {\n  background-color: #37bc9b;\n  border-color: #37bc9b;\n}\n\n/**\n * tooltip\n * --------------------------------------------------\n */\n.tooltip-inner {\n  color: white;\n  background-color: #434a54;\n}\n.tooltip.top .tooltip-arrow, .tooltip.top-left .tooltip-arrow, .tooltip.top-right .tooltip-arrow {\n  border-top-color: #434a54;\n}\n.tooltip.right .tooltip-arrow {\n  border-right-color: #434a54;\n}\n.tooltip.left .tooltip-arrow {\n  border-left-color: #434a54;\n}\n.tooltip.bottom .tooltip-arrow, .tooltip.bottom-left .tooltip-arrow, .tooltip.bottom-right .tooltip-arrow {\n  border-bottom-color: #434a54;\n}\n\n/**\n * popover\n * --------------------------------------------------\n */\n.popover {\n  color: white;\n  background-color: #434a54;\n  border-color: #434a54;\n}\n.popover-title {\n  padding-bottom: 0;\n  font-weight: bold;\n  color: #aab2bd;\n  background-color: transparent;\n  border-bottom: none;\n}\n.popover.top .arrow, .popover.top .arrow:after {\n  border-top-color: #434a54;\n}\n.popover.right .arrow, .popover.right .arrow:after {\n  border-right-color: #434a54;\n}\n.popover.bottom .arrow, .popover.bottom .arrow:after {\n  border-bottom-color: #434a54;\n}\n.popover.left .arrow, .popover.left .arrow:after {\n  border-left-color: #434a54;\n}\n\n/**\n * progress\n * --------------------------------------------------\n */\n.progress {\n  background-color: #e6e9ed;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.progress-bar {\n  background-color: #3bafda;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.progress-bar-success {\n  background-color: #8cc152;\n}\n.progress-bar-info {\n  background-color: #37bc9b;\n}\n.progress-bar-warning {\n  background-color: #f6bb42;\n}\n.progress-bar-danger {\n  background-color: #da4453;\n}\n\n/**\n * breadcrumb\n * --------------------------------------------------\n */\n.breadcrumb {\n  color: #434a54;\n  background-color: #e6e9ed;\n}\n.breadcrumb > .active {\n  color: #434a54;\n}\n.breadcrumb a {\n  color: #3bafda;\n}\n\n.breadcrumb-arrow {\n  height: 36px;\n  padding: 0;\n  line-height: 36px;\n  list-style: none;\n  background-color: #e6e9ed;\n}\n.breadcrumb-arrow li:first-child a {\n          border-radius: 4px 0 0 4px;\n\n  -webkit-border-radius: 4px 0 0 4px;\n     -moz-border-radius: 4px 0 0 4px;\n}\n.breadcrumb-arrow li, .breadcrumb-arrow li a, .breadcrumb-arrow li span {\n  display: inline-block;\n  vertical-align: top;\n}\n.breadcrumb-arrow li:not(:first-child) {\n  margin-left: -5px;\n}\n.breadcrumb-arrow li + li:before {\n  padding: 0;\n  content: \"\";\n}\n.breadcrumb-arrow li span {\n  padding: 0 10px;\n}\n.breadcrumb-arrow li a, .breadcrumb-arrow li:not(:first-child) span {\n  height: 36px;\n  padding: 0 10px 0 25px;\n  line-height: 36px;\n}\n.breadcrumb-arrow li:first-child a {\n  padding: 0 10px;\n}\n.breadcrumb-arrow li a {\n  position: relative;\n  color: white;\n  text-decoration: none;\n  background-color: #3bafda;\n  border: 1px solid #3bafda;\n}\n.breadcrumb-arrow li:first-child a {\n  padding-left: 10px;\n}\n.breadcrumb-arrow li a:before, .breadcrumb-arrow li a:after {\n  position: absolute;\n  top: -1px;\n  width: 0;\n  height: 0;\n  content: '';\n  border-top: 18px solid transparent;\n  border-bottom: 18px solid transparent;\n}\n.breadcrumb-arrow li a:before {\n  right: -10px;\n  z-index: 3;\n  border-left-color: #3bafda;\n  border-left-style: solid;\n  border-left-width: 11px;\n}\n.breadcrumb-arrow li a:after {\n  right: -11px;\n  z-index: 2;\n  border-left: 11px solid #2494be;\n}\n.breadcrumb-arrow li a:hover, .breadcrumb-arrow li a:focus {\n  background-color: #4fc1e9;\n  border: 1px solid #4fc1e9;\n}\n.breadcrumb-arrow li a:hover:before, .breadcrumb-arrow li a:focus:before {\n  border-left-color: #4fc1e9;\n}\n.breadcrumb-arrow li a:active {\n  background-color: #2494be;\n  border: 1px solid #2494be;\n}\n.breadcrumb-arrow li a:active:before, .breadcrumb-arrow li a:active:after {\n  border-left-color: #2494be;\n}\n.breadcrumb-arrow li span {\n  color: #434a54;\n}\n\n/**\n * pagination\n * --------------------------------------------------\n */\n.pagination > li > a, .pagination > li > span {\n  color: #434a54;\n  background-color: white;\n  border-color: #ccd1d9;\n}\n.pagination > li > a:hover, .pagination > li > span:hover, .pagination > li > a:focus, .pagination > li > span:focus {\n  color: white;\n  background-color: #ccd1d9;\n  border-color: #ccd1d9;\n}\n.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {\n  color: white;\n  background-color: #8cc152;\n  border-color: #8cc152;\n}\n.pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {\n  color: #e6e9ed;\n  background-color: white;\n  border-color: #ccd1d9;\n}\n\n/**\n * pager\n * --------------------------------------------------\n */\n.pager li > a, .pager li > span {\n  color: white;\n  background-color: #8cc152;\n  border-color: #8cc152;\n}\n.pager li > a:hover, .pager li > a:focus {\n  background-color: #a0d468;\n  border-color: #a0d468;\n}\n.pager .disabled > a, .pager .disabled > a:hover, .pager .disabled > a:focus, .pager .disabled > span {\n  color: #e6e9ed;\n  background-color: white;\n  border-color: #e6e9ed;\n}\n\n/**\n * form\n * --------------------------------------------------\n */\n.form-control {\n  color: #434a54;\n  border-color: #aab2bd;\n}\n.form-control, .form-control:focus {\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.form-control:focus {\n  border-color: #3bafda;\n}\n.form-control::-moz-placeholder, .form-control:-ms-input-placeholder, .form-control::-webkit-input-placeholder {\n  color: #e6e9ed;\n}\n.form-control.disabled, .form-control[disabled] {\n  background-color: #e6e9ed;\n  border-color: #e6e9ed;\n}\n\n.input-group-btn .btn + .btn {\n  border-color: #96a0ad;\n  border-style: solid;\n  border-width: 1px;\n}\n.input-group-btn .btn + .btn.btn-default {\n  border-color: #ededed;\n}\n.input-group-btn .btn + .btn.btn-primary {\n  border-color: #269ecb;\n}\n.input-group-btn .btn + .btn.btn-info {\n  border-color: #2fa084;\n}\n.input-group-btn .btn + .btn.btn-success {\n  border-color: #7ab03f;\n}\n.input-group-btn .btn + .btn.btn-warning {\n  border-color: #f4af20;\n}\n.input-group-btn .btn + .btn.btn-danger {\n  border-color: #d1293a;\n}\n\n.input-group-addon {\n  color: white;\n  background-color: #aab2bd;\n  border-color: #96a0ad;\n}\n.input-group-addon .radio, .input-group-addon .checkbox {\n  margin: -3px 0 -4px !important;\n}\n\n.form-search .search-query, .form-search .search-query:first-child, .form-search .search-query:last-child {\n  padding: 0 17px;\n          border-radius: 17px;\n\n  -webkit-border-radius: 17px;\n     -moz-border-radius: 17px;\n}\n.input-group .form-control:last-child {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0;\n\n  -webkit-border-top-left-radius: 0;\n  -moz-border-radius-topleft: 0;\n  -webkit-border-bottom-left-radius: 0;\n  -moz-border-radius-bottomleft: 0;\n}\n.input-group .form-control:first-child {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0;\n\n  -webkit-border-top-right-radius: 0;\n  -moz-border-radius-topright: 0;\n  -webkit-border-bottom-right-radius: 0;\n  -moz-border-radius-bottomright: 0;\n}\n.form-search .btn {\n          border-radius: 17px;\n\n  -webkit-border-radius: 17px;\n     -moz-border-radius: 17px;\n}\n\n.search-only {\n  position: relative;\n}\n.search-only .search-icon {\n  position: absolute;\n  top: 2px;\n  left: 8.5px;\n  z-index: 20;\n  width: 30px;\n  font-size: 17px;\n  line-height: 30px;\n  color: #e6e9ed;\n  text-align: center;\n}\n.search-only .form-control:last-child {\n  padding-left: 40px;\n}\n\n.has-success .help-block, .has-success .control-label, .has-success .radio, .has-success .checkbox, .has-success .radio-inline, .has-success .checkbox-inline {\n  color: #8cc152;\n}\n.has-success .form-control {\n  border-color: #8cc152;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.has-success .form-control:focus {\n  border-color: #8cc152;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.has-success .input-group-addon {\n  background-color: #8cc152;\n  border-color: #8cc152;\n}\n.has-success .form-control-feedback {\n  color: #8cc152;\n}\n\n.has-warning .help-block, .has-warning .control-label, .has-warning .radio, .has-warning .checkbox, .has-warning .radio-inline, .has-warning .checkbox-inline {\n  color: #f6bb42;\n}\n.has-warning .form-control {\n  border-color: #f6bb42;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.has-warning .form-control:focus {\n  border-color: #f6bb42;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.has-warning .input-group-addon {\n  background-color: #f6bb42;\n  border-color: #f6bb42;\n}\n.has-warning .form-control-feedback {\n  color: #f6bb42;\n}\n\n.has-error .help-block, .has-error .control-label, .has-error .radio, .has-error .checkbox, .has-error .radio-inline, .has-error .checkbox-inline {\n  color: #da4453;\n}\n.has-error .form-control {\n  border-color: #da4453;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.has-error .form-control:focus {\n  border-color: #da4453;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.has-error .input-group-addon {\n  background-color: #da4453;\n  border-color: #da4453;\n}\n.has-error .form-control-feedback {\n  color: #da4453;\n}\n\n/**\n * stepper\n * --------------------------------------------------\n */\n.stepper .stepper-input {\n  overflow: hidden;\n\n  -moz-appearance: textfield;\n}\n.stepper .stepper-input::-webkit-inner-spin-button, .stepper .stepper-input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.stepper .stepper-arrow {\n  position: absolute;\n  right: 15px;\n  display: block;\n  width: 20px;\n  height: 50%;\n  text-indent: -99999px;\n  cursor: pointer;\n  background-color: #3bafda;\n}\n.stepper .stepper-arrow:hover, .stepper .stepper-arrow:active {\n  background-color: #4fc1e9;\n}\n.stepper .up {\n  top: 0;\n  border: 1px solid #269ecb;\n          border-top-right-radius: 3px;\n\n  -webkit-border-top-right-radius: 3px;\n  -moz-border-radius-topright: 3px;\n}\n.stepper .down {\n  bottom: 0;\n          border-bottom-right-radius: 3px;\n\n  -webkit-border-bottom-right-radius: 3px;\n  -moz-border-radius-bottomright: 3px;\n}\n.stepper .up::before, .stepper .down::before {\n  position: absolute;\n  width: 0;\n  height: 0;\n  content: \"\";\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.stepper .up::before {\n  top: 5px;\n  left: 5px;\n  border-bottom: 4px solid white;\n}\n.stepper .down:before {\n  bottom: 5px;\n  left: 6px;\n  border-top: 4px solid white;\n}\n.stepper.disabled .stepper-arrow {\n  background-color: #3bafda;\n  filter: alpha(opacity=45);\n  opacity: .45;\n}\n\n.selecter {\n  position: relative;\n  z-index: 1;\n  display: block;\n  max-width: 100%;\n  outline: none;\n  /* Open */\n  /* 'Cover' Positioning */\n  /* 'Bottom' Positioning */\n  /* 'Bottom' + 'Cover' Positioning */\n  /* Multiple Select */\n  /* 'Disabled' State */\n  /* Scroller Support */\n}\n.selecter .selecter-element {\n  position: absolute;\n  left: 0;\n  z-index: 0;\n  display: none;\n  width: 100%;\n  height: 100%;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  *left: -999999px;\n}\n.selecter .selecter-element, .selecter .selecter-element:focus {\n  outline: none;\n\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent;\n}\n.selecter .selecter-selected {\n  position: relative;\n  z-index: 2;\n  display: block;\n  padding: 6px 10px;\n  overflow: hidden;\n  text-overflow: clip;\n  cursor: pointer;\n  background-color: white;\n  border: 1px solid #aab2bd;\n          border-radius: 4px;\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.selecter .selecter-selected:after {\n  position: absolute;\n  top: 14px;\n  right: 10px;\n  width: 0;\n  height: 0;\n  content: \"\";\n  border-top: 4px solid black;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.selecter .selecter-options {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 50;\n  display: none;\n  width: 100%;\n  max-height: 260px;\n  overflow: auto;\n  overflow-x: hidden;\n  background-color: white;\n  border: 1px solid #aab2bd;\n  border-width: 0 1px 1px;\n          border-radius: 0 0 4px 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n     -moz-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n\n  -webkit-border-radius: 0 0 4px 4px;\n     -moz-border-radius: 0 0 4px 4px;\n  *width: auto;\n}\n.selecter .selecter-group {\n  display: block;\n  padding: 5px 10px 4px;\n  font-size: 11px;\n  color: #aab2bd;\n  text-transform: uppercase;\n  background-color: #f5f7fa;\n  border-bottom: 1px solid #e6e9ed;\n}\n.selecter .selecter-item {\n  display: block;\n  width: 100%;\n  padding: 6px 10px;\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  background-color: white;\n  border-bottom: 1px solid #e6e9ed;\n}\n.selecter .selecter-item.selected {\n  color: white;\n  background-color: #3bafda;\n  border-bottom-color: #4fc1e9;\n}\n.selecter .selecter-item.disabled {\n  color: #aab2bd;\n  cursor: default;\n}\n.selecter .selecter-item:first-child {\n          border-radius: 0;\n\n  -webkit-border-radius: 0;\n     -moz-border-radius: 0;\n}\n.selecter .selecter-item:last-child {\n  border-bottom: 0;\n          border-radius: 0 0 4px 4px;\n\n  -webkit-border-radius: 0 0 4px 4px;\n     -moz-border-radius: 0 0 4px 4px;\n}\n.selecter .selecter-item:hover {\n  background-color: #e6e9ed;\n}\n.selecter .selecter-item.selected:hover {\n  background-color: #3bafda;\n}\n.selecter .selecter-item.disabled:hover, .selecter:hover .selecter-selected, .selecter.disabled .selecter-item:hover {\n  background-color: white;\n}\n.selecter.open {\n  z-index: 3;\n  outline: 0;\n}\n.selecter.open .selecter-selected {\n  z-index: 51;\n  border: 1px solid #3bafda;\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.selecter.open .selecter-selected, .selecter.focus .selecter-selected {\n  background-color: white;\n}\n.selecter.cover .selecter-options {\n  top: 0;\n  border-width: 1px;\n          border-radius: 4px;\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.selecter.cover .selecter-options .selecter-item.first {\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.selecter.cover.open .selecter-selected {\n  z-index: 49;\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.selecter.bottom .selecter-options {\n  top: auto;\n  bottom: 100%;\n  border-width: 1px 1px 0;\n}\n.selecter.bottom .selecter-item:last-child {\n  border: none;\n          border-radius: 0;\n\n  -webkit-border-radius: 0;\n     -moz-border-radius: 0;\n}\n.selecter.bottom.open .selecter-selected {\n          border-radius: 0 0 4px 4px;\n\n  -webkit-border-radius: 0 0 4px 4px;\n     -moz-border-radius: 0 0 4px 4px;\n}\n.selecter.bottom.open .selecter-options {\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.selecter.bottom.cover .selecter-options {\n  top: auto;\n  bottom: 0;\n}\n.selecter.bottom.cover.open .selecter-selected, .selecter.bottom.cover.open .selecter-options {\n          border-radius: 4px;\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.selecter.multiple .selecter-options {\n  position: static;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n          border-radius: 4px;\n  box-shadow: none;\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.selecter.disabled .selecter-selected {\n  color: #aab2bd;\n  cursor: default;\n  background-color: #e6e9ed;\n  border-color: #e6e9ed;\n}\n.selecter.disabled .selecter-options {\n  background-color: #e6e9ed;\n  border-color: #e6e9ed;\n}\n.selecter.disabled .selecter-group, .selecter.disabled .selecter-item {\n  color: #aab2bd;\n  cursor: default;\n  background-color: #e6e9ed;\n  border-color: #e6e9ed;\n}\n.selecter.disabled .selecter-item.selected {\n  color: white;\n  background-color: #3bafda;\n  filter: alpha(opacity=45);\n  opacity: .45;\n}\n.selecter .selecter-options.scroller {\n  overflow: hidden;\n}\n.selecter .selecter-options.scroller .scroller-content {\n  max-height: 260px;\n  padding: 0;\n}\n\n/**\n * checkbox and radio\n * --------------------------------------------------\n */\n.checkbox, .radio {\n  padding-left: 0;\n  margin-top: 0;\n}\n\n.checkbox label, .radio label {\n  position: relative;\n  top: 2px;\n  padding-left: 5px;\n}\n\n.icheckbox_flat,\n.iradio_flat {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  padding: 0 !important;\n  margin: 0;\n  vertical-align: middle;\n  cursor: pointer;\n  /*background: url(\"../bootflat/img/check_flat/default.png\") no-repeat;*/\n  border: none;\n\n  *display: inline;\n}\n\n.icheckbox_flat {\n  background-position: 0 0;\n}\n.icheckbox_flat.checked {\n  background-position: -22px 0;\n}\n.icheckbox_flat.disabled {\n  cursor: default;\n  background-position: -44px 0;\n}\n.icheckbox_flat.checked.disabled {\n  background-position: -66px 0;\n}\n\n.iradio_flat {\n  background-position: -88px 0;\n}\n.iradio_flat.checked {\n  background-position: -110px 0;\n}\n.iradio_flat.disabled {\n  cursor: default;\n  background-position: -132px 0;\n}\n.iradio_flat.checked.disabled {\n  background-position: -154px 0;\n}\n\n/**\n * toggle\n * --------------------------------------------------\n */\n.toggle {\n  height: 32px;\n}\n.toggle input[type=\"checkbox\"], .toggle input[type=\"radio\"] {\n  width: 0;\n  height: 0;\n  padding: 0;\n  margin: 0;\n  text-indent: -100000px;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.toggle .handle {\n  position: relative;\n  top: -20px;\n  left: 0;\n  display: block;\n  width: 50px;\n  height: 32px;\n  background-color: white;\n          border-radius: 19px;\n  -webkit-box-shadow: inset 0 0 0 1px #b8bfc8;\n     -moz-box-shadow: inset 0 0 0 1px #b8bfc8;\n          box-shadow: inset 0 0 0 1px #b8bfc8;\n\n  -webkit-border-radius: 19px;\n     -moz-border-radius: 19px;\n}\n.toggle .handle:before, .toggle .handle:after {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  display: block;\n  width: 30px;\n  height: 30px;\n  content: \"\";\n  background-color: white;\n          border-radius: 30px;\n  -webkit-box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;\n     -moz-box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;\n          box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;\n  -webkit-transition: all .25s ease-in-out;\n     -moz-transition: all .25s ease-in-out;\n          transition: all .25s ease-in-out;\n\n  -webkit-border-radius: 30px;\n     -moz-border-radius: 30px;\n}\n.toggle input[type=\"checkbox\"]:disabled + .handle, .toggle input[type=\"radio\"]:disabled + .handle, .toggle input[type=\"checkbox\"]:disabled + .handle:before, .toggle input[type=\"radio\"]:disabled + .handle:before, .toggle input[type=\"checkbox\"]:disabled + .handle:after, .toggle input[type=\"radio\"]:disabled + .handle:after {\n  background-color: #e6e9ed;\n  filter: alpha(opacity=60);\n  opacity: .6;\n}\n.toggle input[type=\"checkbox\"]:checked + .handle:before, .toggle input[type=\"radio\"]:checked + .handle:before {\n  width: 50px;\n  background-color: #a0d468;\n}\n.toggle input[type=\"checkbox\"]:checked + .handle:after, .toggle input[type=\"radio\"]:checked + .handle:after {\n  left: 20px;\n  -webkit-box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;\n     -moz-box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;\n          box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;\n}\n\n/**\n * calendar\n * --------------------------------------------------\n */\n.calendar {\n  padding: 20px;\n  color: white;\n  background-color: #fd9883;\n          border-radius: 4px;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n     -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.calendar .unit {\n  float: left;\n  width: 14.28%;\n  text-align: center;\n}\n.calendar .years .prev {\n  text-align: left;\n}\n.calendar .years .next {\n  text-align: right;\n}\n.calendar .years .prev em, .calendar .years .next em {\n  position: relative;\n  display: inline-block;\n  width: 34px;\n  height: 34px;\n  cursor: pointer;\n  border: 1px solid white;\n          border-radius: 50%;\n\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n}\n.calendar .years .prev em:before, .calendar .years .next em:before {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  margin-top: 6px;\n  font-size: 0;\n  content: \"\";\n  border-style: solid;\n  border-width: 7px;\n}\n.calendar .years .prev em:before {\n  top: 3px;\n  left: 4px;\n  border-color: transparent white transparent transparent;\n}\n.calendar .years .next em:before {\n  top: 3px;\n  left: 13px;\n  border-color: transparent transparent transparent white;\n}\n.calendar .years .prev em:hover, .calendar .years .next em:hover, .calendar .years .prev em:active, .calendar .years .next em:active {\n  border-color: #e9573f;\n}\n.calendar .years .prev em:hover:before, .calendar .years .prev em:active:before {\n  border-color: transparent #e9573f transparent transparent;\n}\n.calendar .years .next em:hover:before, .calendar .years .next em:active:before {\n  border-color: transparent transparent transparent #e9573f;\n}\n.calendar .years .monyear {\n  float: left;\n  width: 71.42%;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n}\n.calendar .days {\n  padding-top: 15px;\n  margin-top: 15px;\n  border-top: 1px solid #ee7f6d;\n}\n.calendar .days .unit {\n  height: 34px;\n  margin-bottom: 3px;\n  line-height: 34px;\n  text-align: center;\n}\n.calendar .days .unit b {\n  width: 34px;\n  height: 34px;\n  font-weight: normal;\n          border-radius: 50%;\n\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n}\n.calendar .days .unit:hover b, .calendar .days .unit:active b, .calendar .days .unit.active b {\n  display: inline-block;\n  color: #e9573f;\n  cursor: pointer;\n  background-color: white;\n  -webkit-transition: all .2s ease-in-out;\n     -moz-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.calendar .days .unit.older b {\n  width: auto;\n  height: auto;\n  color: #e9573f;\n  cursor: default;\n  background-color: transparent;\n}\n\n/**\n * pricing\n * --------------------------------------------------\n */\n.pricing ul {\n  padding: 0;\n  list-style: none;\n}\n.pricing .unit {\n  position: relative;\n  display: inline-block;\n  min-width: 250px;\n  text-align: center;\n          border-radius: 4px;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n     -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.pricing .unit.active {\n  top: 5px;\n  z-index: 1;\n  margin-right: -36px;\n  margin-left: -36px;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .6);\n     -moz-box-shadow: 0 0 8px rgba(0, 0, 0, .6);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .6);\n}\n.pricing .unit.active .price-title h3 {\n  font-size: 40px;\n}\n@media screen and (max-width: 767px) {\n  .pricing .unit {\n    display: block;\n    margin-bottom: 20px;\n  }\n  .pricing .unit.active {\n    top: 0;\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .pricing .unit.active .price-title h3 {\n    font-size: 30px;\n  }\n}\n.pricing .price-title {\n  padding: 20px 20px 10px;\n  color: #fff;\n          border-top-left-radius: 4px;\n          border-top-right-radius: 4px;\n\n  -webkit-border-top-left-radius: 4px;\n  -moz-border-radius-topleft: 4px;\n  -webkit-border-top-right-radius: 4px;\n  -moz-border-radius-topright: 4px;\n}\n.pricing .price-title h3, .pricing .price-title h3 > p {\n  margin: 0;\n}\n.pricing .price-body {\n  padding: 20px 20px 10px;\n}\n.pricing .price-body ul {\n  padding-top: 10px;\n}\n.pricing .price-body li {\n  margin-bottom: 10px;\n}\n.pricing .price-body h4 {\n  margin: 0;\n}\n.pricing .price-foot {\n  padding: 20px;\n  background-color: #e6e9ed;\n          border-bottom-right-radius: 4px;\n          border-bottom-left-radius: 4px;\n\n  -webkit-border-bottom-left-radius: 4px;\n  -moz-border-radius-bottomleft: 4px;\n  -webkit-border-bottom-right-radius: 4px;\n  -moz-border-radius-bottomright: 4px;\n}\n.pricing .price-primary .price-title {\n  background-color: #4fc1e9;\n}\n.pricing .price-primary .price-body {\n  background-color: #d7f1fa;\n}\n.pricing .price-primary .price-body ul {\n  border-top: 1px solid #aae1f4;\n}\n.pricing .price-success .price-title {\n  background-color: #a0d468;\n}\n.pricing .price-success .price-body {\n  background-color: #ebf6df;\n}\n.pricing .price-success .price-body ul {\n  border-top: 1px solid #d2ebb7;\n}\n.pricing .price-warning .price-title {\n  background-color: #ffce54;\n}\n.pricing .price-warning .price-body {\n  background-color: #fffaed;\n}\n.pricing .price-warning .price-body ul {\n  border-top: 1px solid #ffebba;\n}\n\n/**\n * alert\n * --------------------------------------------------\n */\n.alert h4 {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.alert-dismissable .close {\n  color: black;\n}\n.alert-info {\n  background-color: #7cd1ef;\n  border: #4fc1e9;\n}\n.alert-warning {\n  background-color: #ffdd87;\n  border: #ffce54;\n}\n.alert-danger {\n  background-color: #f2838f;\n  border: #ed5565;\n}\n.alert-success {\n  background-color: #b9df90;\n  border: #a0d468;\n}\n.alert .alert-link {\n  text-decoration: underline;\n  cursor: pointer;\n  filter: alpha(opacity=65);\n  opacity: .65;\n}\n.alert .alert-link:hover, .alert .alert-link:focus {\n  filter: alpha(opacity=45);\n  opacity: .45;\n}\n.alert .btn-link, .alert .btn-link:hover, .alert .btn-link:focus {\n  color: black;\n  filter: alpha(opacity=65);\n  opacity: .65;\n}\n.alert .btn-link:focus, .alert .btn-link:hover {\n  text-decoration: none;\n  filter: alpha(opacity=40);\n  opacity: .4;\n}\n\n/**\n * tab\n * --------------------------------------------------\n */\n.nav-tabs {\n  background-color: #e6e9ed;\n  border-bottom: none;\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li {\n  margin-bottom: 0;\n  border-left: 1px solid #ccd1d9;\n}\n.nav-tabs > li:first-child {\n  border-left: none;\n}\n.nav-tabs > li > a {\n  margin-right: 0;\n  color: #434a54;\n  border: none;\n          border-radius: 0;\n\n  -webkit-border-radius: 0;\n     -moz-border-radius: 0;\n}\n.nav-tabs > li:first-child > a {\n          border-radius: 4px 0 0 0;\n\n  -webkit-border-radius: 4px 0 0 0;\n     -moz-border-radius: 4px 0 0 0;\n}\n.nav-tabs > li > a:focus, .nav-tabs > li > a:hover {\n  background-color: #f5f7fa;\n  border: none;\n}\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {\n  background-color: white !important;\n  border: none;\n}\n.nav-tabs .dropdown-toggle, .nav-tabs .dropdown-toggle:hover, .nav-tabs .dropdown-toggle:focus {\n  color: #434a54;\n}\n.nav-tabs li.dropdown.open .dropdown-toggle {\n  color: #434a54;\n  background-color: #f5f7fa;\n}\n.nav-tabs li.dropdown.active.open .dropdown-toggle {\n  color: #434a54;\n}\n.nav-tabs li.dropdown.active.open .dropdown-toggle .caret, .nav-tabs li.dropdown.active .dropdown-toggle .caret {\n  border-top-color: #434a54;\n  border-bottom-color: #434a54;\n}\n.nav-tabs li.dropdown.open .caret, .nav-tabs li.dropdown.open.active .caret, .nav-tabs li.dropdown.open a:hover .caret, .nav-tabs li.dropdown.open a:focus .caret, .nav-tabs .dropdown-toggle .caret, .nav-tabs .dropdown-toggle:hover .caret, .nav-tabs .dropdown-toggle:focus .caret {\n  border-top-color: #434a54;\n  border-bottom-color: #434a54;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 0;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n.nav-tabs.nav-justified > li > a {\n          border-radius: 0;\n\n  -webkit-border-radius: 0;\n     -moz-border-radius: 0;\n}\n.nav-tabs.nav-justified > li:first-child > a {\n          border-radius: 4px 0 0 0;\n\n  -webkit-border-radius: 4px 0 0 0;\n     -moz-border-radius: 4px 0 0 0;\n}\n.nav-tabs.nav-justified > li:last-child > a {\n          border-radius: 0 4px 0 0;\n\n  -webkit-border-radius: 0 4px 0 0;\n     -moz-border-radius: 0 4px 0 0;\n}\n.nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:focus {\n  border: none;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: none;\n            border-radius: 0;\n\n    -webkit-border-radius: 0;\n       -moz-border-radius: 0;\n  }\n  .nav-tabs.nav-justified > .active > a, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom: none;\n  }\n}\n.tab-content {\n  padding: 10px;\n}\n\n.tabs-below .nav-tabs {\n          border-radius: 0 0 4px 4px;\n\n  -webkit-border-radius: 0 0 4px 4px;\n     -moz-border-radius: 0 0 4px 4px;\n}\n.tabs-below .nav-tabs > li:first-child > a {\n          border-radius: 0 0 0 4px;\n\n  -webkit-border-radius: 0 0 0 4px;\n     -moz-border-radius: 0 0 0 4px;\n}\n.tabs-below .nav-tabs.nav-justified > li:last-child > a {\n          border-radius: 0 0 4px 0;\n\n  -webkit-border-radius: 0 0 4px 0;\n     -moz-border-radius: 0 0 4px 0;\n}\n\n.tabs-left .nav-tabs > li,\n.tabs-right .nav-tabs > li {\n  float: none;\n  border-top: 1px solid #ccd1d9;\n  border-left: none;\n}\n\n.tabs-left .nav-tabs > li:first-child,\n.tabs-right .nav-tabs > li:first-child {\n  border-top: none;\n}\n\n.tabs-left .nav-tabs > li > a,\n.tabs-right .nav-tabs > li > a {\n  min-width: 74px;\n  margin-right: 0;\n}\n\n.tabs-left .nav-tabs {\n  float: left;\n  margin-right: 19px;\n          border-radius: 4px 0 0 4px;\n\n  -webkit-border-radius: 4px 0 0 4px;\n     -moz-border-radius: 4px 0 0 4px;\n}\n.tabs-left .nav-tabs > li:first-child > a {\n          border-radius: 4px 0 0 0;\n\n  -webkit-border-radius: 4px 0 0 0;\n     -moz-border-radius: 4px 0 0 0;\n}\n.tabs-left .nav-tabs > li:last-child > a {\n          border-radius: 0 0 0 4px;\n\n  -webkit-border-radius: 0 0 0 4px;\n     -moz-border-radius: 0 0 0 4px;\n}\n\n.tabs-right .nav-tabs {\n  float: right;\n  margin-left: 19px;\n          border-radius: 0 4px 4px 0;\n\n  -webkit-border-radius: 0 4px 4px 0;\n     -moz-border-radius: 0 4px 4px 0;\n}\n.tabs-right .nav-tabs > li:first-child > a {\n          border-radius: 0 4px 0 0;\n\n  -webkit-border-radius: 0 4px 0 0;\n     -moz-border-radius: 0 4px 0 0;\n}\n.tabs-right .nav-tabs > li:last-child > a {\n          border-radius: 0 0 4px 0;\n\n  -webkit-border-radius: 0 0 4px 0;\n     -moz-border-radius: 0 0 4px 0;\n}\n\n/**\n * pill\n * --------------------------------------------------\n */\n.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n  color: white;\n  background-color: #3bafda;\n}\n.nav-pills > li > a {\n  color: #3bafda;\n}\n.nav-pills > li > a:hover {\n  color: #434a54;\n  background-color: #e6e9ed;\n}\n.nav-pills > .active > a > .badge {\n  color: #3bafda;\n}\n.nav-pills .open > a, .nav-pills .open > a:focus, .nav-pills .open > a:hover {\n  color: #434a54;\n  background-color: #e6e9ed;\n}\n\n/**\n * navbar\n * --------------------------------------------------\n */\n.navbar-form {\n  padding: 0 !important;\n}\n\n.navbar-default {\n  background-color: #37bc9b;\n  border-color: #37bc9b;\n}\n.navbar-default .navbar-brand, .navbar-default .navbar-link, .navbar-default .btn-link {\n  color: #26816a;\n}\n.navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus, .navbar-default .navbar-link:hover, .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n  color: white;\n  background-color: transparent;\n}\n.navbar-default .navbar-text, .navbar-default .navbar-nav > li > a {\n  color: #26816a;\n}\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n  color: white;\n}\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n  color: white;\n  background-color: #48cfad;\n}\n.navbar-default .btn-link[disabled]:hover, fieldset[disabled] .navbar-default .btn-link:hover, .navbar-default .btn-link[disabled]:focus, fieldset[disabled] .navbar-default .btn-link:focus, .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n  color: #2e9c81;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  background-color: #26816a;\n  border-color: #26816a;\n}\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n  background-color: #2b957a;\n  border-color: #2b957a;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #37bc9b;\n}\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n  border-color: #48cfad;\n}\n.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n  color: white;\n  background-color: #37bc9b;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n    background-color: #48cfad;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .divider {\n    background-color: #48cfad;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #26816a;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: white;\n    background-color: #48cfad;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .dropdown-header {\n    color: #26816a;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #2b957a;\n  }\n}\n\n.navbar-inverse {\n  background-color: #333;\n  border-color: #333;\n}\n.navbar-inverse .navbar-brand, .navbar-inverse .navbar-link, .navbar-inverse .btn-link {\n  color: #8c8c8c;\n}\n.navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-link:hover, .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n  color: white;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text, .navbar-inverse .navbar-nav > li > a {\n  color: #8c8c8c;\n}\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n  color: white;\n}\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n  color: white;\n  background-color: black;\n}\n.navbar-inverse .btn-link[disabled]:hover, fieldset[disabled] .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link[disabled]:focus, fieldset[disabled] .navbar-inverse .btn-link:focus, .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #666;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  background-color: black;\n  border-color: black;\n}\n.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n  background-color: #1a1a1a;\n  border-color: #1a1a1a;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #8c8c8c;\n}\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n  border-color: black;\n}\n.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n  color: white;\n  background-color: black;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n    background-color: black;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .divider {\n    background-color: black;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #8c8c8c;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: white;\n    background-color: black;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    color: #bfbfbf;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #666;\n  }\n}\n\n/**\n * list\n * --------------------------------------------------\n */\n.list-group {\n          border-radius: 4px;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n     -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.list-group-item {\n  border-color: transparent;\n  border-top-color: #e6e9ed;\n}\n.list-group-item:first-child {\n  border-top: none;\n}\n.list-group-item-heading {\n  color: #434a54;\n}\n\na.list-group-item {\n  color: #434a54;\n}\na.list-group-item .list-group-item-heading {\n  font-size: 16px;\n  color: #434a54;\n}\na.list-group-item:hover, a.list-group-item:focus {\n  background-color: #e6e9ed;\n}\na.list-group-item.active, a.list-group-item.active:hover, a.list-group-item.active:focus {\n  background-color: #4fc1e9;\n  border-color: #4fc1e9;\n}\na.list-group-item.active .list-group-item-text, a.list-group-item.active:hover .list-group-item-text, a.list-group-item.active:focus .list-group-item-text {\n  color: white;\n}\n\n.list-group-item-primary {\n  color: #22b1e3;\n  background-color: #4fc1e9;\n  border-color: #3bafda transparent transparent transparent;\n}\n.list-group-item-primary:first-child {\n  border-color: transparent;\n}\na.list-group-item-primary {\n  color: #126d8d;\n}\na.list-group-item-primary:hover, a.list-group-item-primary:focus {\n  color: white;\n  background-color: #3bafda;\n}\na.list-group-item-primary.active, a.list-group-item-primary:hover, a.list-group-item-primary:focus {\n  background-color: #3bafda;\n  border-color: #4fc1e9 transparent transparent transparent;\n}\n\n.list-group-item-success {\n  color: #87c940;\n  background-color: #a0d468;\n  border-color: #8cc152 transparent transparent transparent;\n}\n.list-group-item-success:first-child {\n  border-color: transparent;\n}\na.list-group-item-success {\n  color: #537f24;\n}\na.list-group-item-success:hover, a.list-group-item-success:focus {\n  color: white;\n  background-color: #8cc152;\n}\na.list-group-item-success.active, a.list-group-item-success:hover, a.list-group-item-success:focus {\n  background-color: #8cc152;\n  border-color: #a0d468 transparent transparent transparent;\n}\n\n.list-group-item-warning {\n  color: #ffbf21;\n  background-color: #ffce54;\n  border-color: #f6bb42 transparent transparent transparent;\n}\n.list-group-item-warning:first-child {\n  border-color: transparent;\n}\na.list-group-item-warning {\n  color: #876000;\n}\na.list-group-item-warning:hover, a.list-group-item-warning:focus {\n  color: white;\n  background-color: #f6bb42;\n}\na.list-group-item-warning.active, a.list-group-item-warning:hover, a.list-group-item-warning:focus {\n  background-color: #f6bb42;\n  border-color: #ffce54 transparent transparent transparent;\n}\n\n.list-group-item-info {\n  color: #2fb593;\n  background-color: #48cfad;\n  border-color: #37bc9b transparent transparent transparent;\n}\n.list-group-item-info:first-child {\n  border-color: transparent;\n}\na.list-group-item-info {\n  color: #1a6451;\n}\na.list-group-item-info:hover, a.list-group-item-info:focus {\n  color: white;\n  background-color: #37bc9b;\n}\na.list-group-item-info.active, a.list-group-item-info:hover, a.list-group-item-info:focus {\n  background-color: #37bc9b;\n  border-color: #48cfad transparent transparent transparent;\n}\n\n.list-group-item-danger {\n  color: #e8273b;\n  background-color: #ed5565;\n  border-color: #da4453 transparent transparent transparent;\n}\n.list-group-item-danger:first-child {\n  border-color: transparent;\n}\na.list-group-item-danger {\n  color: #99101f;\n}\na.list-group-item-danger:hover, a.list-group-item-danger:focus {\n  color: white;\n  background-color: #da4453;\n}\na.list-group-item-danger.active, a.list-group-item-danger:hover, a.list-group-item-danger:focus {\n  background-color: #da4453;\n  border-color: #ed5565 transparent transparent transparent;\n}\n\n/**\n * media list\n * --------------------------------------------------\n */\n.media-list {\n  color: #aab2bd;\n}\n.media-heading {\n  font-size: 14px;\n  color: #434a54;\n}\n\n/**\n * modal\n * --------------------------------------------------\n */\n.modal-content {\n  color: #434a54;\n  border: none;\n          border-radius: 4px;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n     -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.modal-header {\n  border-bottom: none;\n}\n.modal-body {\n  padding: 0 15px;\n}\n.modal-footer {\n  border-top: none;\n}\n\n/**\n * well\n * --------------------------------------------------\n */\n.well {\n  padding: 10px;\n  color: #434a54;\n  background-color: white;\n  border: none;\n          border-radius: 4px;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n     -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.well blockquote {\n  border-color: #ccd1d9;\n}\n.well-lg {\n  padding: 20px;\n}\n.well-sm {\n  padding: 5px;\n}\n\n/**\n * thumbnail\n * --------------------------------------------------\n */\n.thumbnail {\n  border: none;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n     -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n}\n.thumbnail a > img, .thumbnail > img {\n  width: 100%;\n}\n.thumbnail .caption {\n  font-size: 14px;\n}\n.thumbnail .caption h1, .thumbnail .caption h2, .thumbnail .caption h3, .thumbnail .caption h4, .thumbnail .caption h5, .thumbnail .caption h6 {\n  margin: 5px 0 10px;\n  font-size: 16px;\n}\n\n/**\n * jumbotron\n * --------------------------------------------------\n */\n.jumbotron {\n  padding: 0;\n  margin-bottom: 20px;\n  background-color: white;\n          border-radius: 4px;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n     -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.container .jumbotron {\n          border-radius: 4px;\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.jumbotron > .jumbotron-photo img {\n  width: 100%;\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.jumbotron .jumbotron-contents {\n  padding: 20px;\n  color: #434a54;\n}\n.jumbotron .carousel, .jumbotron .carousel-inner, .jumbotron .carousel-inner > .item.active img {\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.jumbotron .carousel-inner > .item > a > img,\n.jumbotron .carousel-inner > .item > img {\n  width: 100%;\n}\n.jumbotron .carousel-control.left {\n          border-radius: 4px 0 0 0;\n\n  -webkit-border-radius: 4px 0 0 0;\n     -moz-border-radius: 4px 0 0 0;\n}\n.jumbotron .carousel-control.right {\n          border-radius: 0 4px 0 0;\n\n  -webkit-border-radius: 0 4px 0 0;\n     -moz-border-radius: 0 4px 0 0;\n}\n.jumbotron h1, .jumbotron .h1, .jumbotron h2, .jumbotron .h2 {\n  font-weight: 400;\n}\n.jumbotron h1, .jumbotron .h1 {\n  font-size: 28px;\n}\n.jumbotron h2, .jumbotron .h2 {\n  font-size: 24px;\n}\n.jumbotron p {\n  font-size: 14px;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron, .container .jumbotron {\n    padding: 0;\n  }\n  .jumbotron h1, .jumbotron .h1 {\n    font-size: 28px;\n  }\n}\n\n/**\n * panel\n * --------------------------------------------------\n */\n.panel {\n  background-color: white;\n  border: none;\n          border-radius: 4px;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n     -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.panel .list-group {\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n}\n.panel .list-group-item:first-child {\n  border-top: 1px solid #e6e9ed;\n}\n.panel-heading {\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.panel-title {\n  font-size: 14px;\n  font-weight: normal;\n  color: #434a54;\n}\n.panel-footer {\n  background-color: #e6e9ed;\n  border-top-color: #e6e9ed;\n          border-radius: 0 0 4px 4px;\n\n  -webkit-border-radius: 0 0 4px 4px;\n     -moz-border-radius: 0 0 4px 4px;\n}\n.panel-default {\n  border-color: #e6e9ed;\n}\n.panel-default > .panel-heading {\n  color: #434a54;\n  background-color: #e6e9ed;\n  border-color: #e6e9ed;\n}\n.panel-primary {\n  border-color: #3bafda;\n}\n.panel-primary > .panel-heading {\n  color: white;\n  background-color: #3bafda;\n  border-color: #3bafda;\n}\n.panel-success {\n  border-color: #8cc152;\n}\n.panel-success > .panel-heading {\n  color: white;\n  background-color: #8cc152;\n  border-color: #8cc152;\n}\n.panel-info {\n  border-color: #37bc9b;\n}\n.panel-info > .panel-heading {\n  color: white;\n  background-color: #37bc9b;\n  border-color: #37bc9b;\n}\n.panel-warning {\n  border-color: #f6bb42;\n}\n.panel-warning > .panel-heading {\n  color: white;\n  background-color: #f6bb42;\n  border-color: #f6bb42;\n}\n.panel-danger {\n  border-color: #da4453;\n}\n.panel-danger > .panel-heading {\n  color: white;\n  background-color: #da4453;\n  border-color: #da4453;\n}\n.panel-primary > .panel-heading > .panel-title, .panel-success > .panel-heading > .panel-title, .panel-info > .panel-heading > .panel-title, .panel-warning > .panel-heading > .panel-title, .panel-danger > .panel-heading > .panel-title {\n  color: white;\n}\n.panel > .list-group:first-child .list-group-item:first-child, .panel > .table:first-child, .panel > .table-responsive:first-child > .table:first-child {\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.panel > .list-group:last-child .list-group-item:last-child {\n          border-radius: 0 0 4px 4px;\n\n  -webkit-border-radius: 0 0 4px 4px;\n     -moz-border-radius: 0 0 4px 4px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table:first-child > thead:first-child > tr:first-child th:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n          border-radius: 4px 0 0 0;\n\n  -webkit-border-radius: 4px 0 0 0;\n     -moz-border-radius: 4px 0 0 0;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table:first-child > thead:first-child > tr:first-child th:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n          border-radius: 0 4px 0 0;\n\n  -webkit-border-radius: 0 4px 0 0;\n     -moz-border-radius: 0 4px 0 0;\n}\n.panel > .table:last-child, .panel > .table-responsive:last-child > .table:last-child {\n          border-radius: 0 0 4px 4px;\n\n  -webkit-border-radius: 0 0 4px 4px;\n     -moz-border-radius: 0 0 4px 4px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n          border-radius: 0 0 0 4px;\n\n  -webkit-border-radius: 0 0 0 4px;\n     -moz-border-radius: 0 0 0 4px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n          border-radius: 0 0 4px 0;\n\n  -webkit-border-radius: 0 0 4px 0;\n     -moz-border-radius: 0 0 4px 0;\n}\n.panel > .panel-body + .table, .panel > .panel-body + .table-responsive {\n  border-top-color: #e6e9ed;\n}\n\n/**\n * accordion\n * --------------------------------------------------\n */\n.panel-group .panel {\n  background-color: transparent;\n          border-radius: 0;\n  -webkit-box-shadow: none;\n     -moz-box-shadow: none;\n          box-shadow: none;\n\n  -webkit-border-radius: 0;\n     -moz-border-radius: 0;\n}\n.panel-group .panel + .panel {\n  margin-top: 0;\n}\n.panel-group .panel-heading {\n  padding: 0;\n  border-bottom-color: transparent;\n}\n.panel-group .panel-heading + .panel-collapse .panel-body {\n  padding: 15px 0;\n  border-top-color: transparent;\n}\n.panel-group .panel-title a {\n  display: block;\n  padding: 10px 0;\n}\n\n.panel-group-lists .panel {\n  background-color: white;\n  border-bottom: 1px solid #e6e9ed;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n     -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n}\n.panel-group-lists .panel:first-child {\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n.panel-group-lists .panel:last-child {\n  border-bottom: none;\n          border-radius: 0 0 4px 4px;\n\n  -webkit-border-radius: 0 0 4px 4px;\n     -moz-border-radius: 0 0 4px 4px;\n}\n.panel-group-lists .panel-heading + .panel-collapse .panel-body {\n  padding: 15px;\n  border-top-color: #e6e9ed;\n}\n.panel-group-lists .panel-title a {\n  padding: 10px 15px;\n  color: #434a54;\n}\n.panel-group-lists .panel-title a:hover, .panel-group-lists .panel-title a:focus, .panel-group-lists .panel-title a:active {\n  color: #aab2bd;\n}\n\n/**\n * footer\n * --------------------------------------------------\n */\n.footer {\n  padding: 40px 0;\n  background-color: #434a54;\n}\n.footer-logo, .footer-nav {\n  float: left;\n  width: 20%;\n  padding: 0 20px;\n}\n@media (max-width: 768px) {\n  .footer-logo {\n    margin-bottom: 20px;\n  }\n  .footer-logo, .footer-nav {\n    display: block;\n    float: none;\n    width: 100%;\n  }\n}\n.footer-logo {\n  height: 32px;\n  margin-top: -5px;\n  line-height: 32px;\n}\n.footer-logo img {\n  margin-right: 10px;\n}\n.footer-logo a {\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n}\n.footer-logo a:hover, .footer-logo a:active {\n  text-decoration: none;\n}\n.footer-nav .nav-title {\n  margin-bottom: 15px;\n  color: #e6e9ed;\n}\n.footer-nav .nav-item {\n  line-height: 28px;\n}\n.footer-nav .nav-item > a {\n  color: #aab2bd;\n}\n.footer-nav .nav-item > a:hover, .footer-nav .nav-item > a:active {\n  color: #ccd1d9;\n  text-decoration: none;\n}\n.footer-copyright {\n  color: #aab2bd;\n}\n\n/**\n * timeline\n * --------------------------------------------------\n */\n.timeline dl {\n  position: relative;\n  top: 0;\n  padding: 20px 0;\n  margin: 0;\n}\n.timeline dl:before {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  z-index: 100;\n  width: 2px;\n  margin-left: -1px;\n  content: '';\n  background-color: #ccd1d9;\n}\n.timeline dl dt {\n  position: relative;\n  top: 30px;\n  z-index: 200;\n  width: 120px;\n  padding: 3px 5px;\n  margin: 0 auto 30px;\n  font-weight: normal;\n  color: white;\n  text-align: center;\n  background-color: #aab2bd;\n          border-radius: 4px;\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.timeline dl dd {\n  position: relative;\n  z-index: 200;\n}\n.timeline dl dd .circ {\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  z-index: 200;\n  width: 22px;\n  height: 22px;\n  margin-left: -11px;\n  background-color: #4fc1e9;\n  border: 4px solid #f5f7fa;\n          border-radius: 50%;\n\n  -webkit-border-radius: 50%;\n     -moz-border-radius: 50%;\n}\n.timeline dl dd .time {\n  position: absolute;\n  top: 31px;\n  left: 50%;\n  display: inline-block;\n  width: 100px;\n  padding: 10px 20px;\n  color: #4fc1e9;\n}\n.timeline dl dd .events {\n  position: relative;\n  width: 47%;\n  padding: 10px 10px 0;\n  margin-top: 31px;\n  background-color: white;\n          border-radius: 4px;\n\n  -webkit-border-radius: 4px;\n     -moz-border-radius: 4px;\n}\n.timeline dl dd .events:before {\n  position: absolute;\n  top: 12px;\n  width: 0;\n  height: 0;\n  content: '';\n  border-style: solid;\n  border-width: 6px;\n}\n.timeline dl dd .events .events-object {\n  margin-right: 10px;\n}\n.timeline dl dd .events .events-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.timeline dl dd .events .events-body .events-heading {\n  margin: 0 0 10px;\n  font-size: 14px;\n}\n.timeline dl dd.pos-right .time {\n  margin-left: -100px;\n  text-align: right;\n}\n.timeline dl dd.pos-right .events {\n  float: right;\n}\n.timeline dl dd.pos-right .events:before {\n  left: -12px;\n  border-color: transparent white transparent transparent;\n}\n.timeline dl dd.pos-left .time {\n  margin-left: 0;\n  text-align: left;\n}\n.timeline dl dd.pos-left .events {\n  float: left;\n}\n.timeline dl dd.pos-left .events:before {\n  right: -12px;\n  border-color: transparent transparent transparent white;\n}\n\n@media screen and (max-width: 767px) {\n  .timeline dl:before {\n    left: 60px;\n  }\n  .timeline dl dt {\n    margin: 0 0 30px;\n  }\n  .timeline dl dd .circ {\n    left: 60px;\n  }\n  .timeline dl dd .time {\n    left: 0;\n  }\n  .timeline dl dd.pos-left .time {\n    padding: 10px 0;\n    margin-left: 0;\n    text-align: left;\n  }\n  .timeline dl dd.pos-left .events {\n    float: right;\n    width: 84%;\n  }\n  .timeline dl dd.pos-left .events:before {\n    left: -12px;\n    border-color: transparent white transparent transparent;\n  }\n  .timeline dl dd.pos-right .time {\n    padding: 10px 0;\n    margin-left: 0;\n    text-align: left;\n  }\n  .timeline dl dd.pos-right .events {\n    float: right;\n    width: 84%;\n  }\n}\n/**\n * dropdown-menu\n * --------------------------------------------------\n */\n.dropdown-menu {\n  background-color: #434a54;\n  border: none;\n}\n.dropdown-menu .dropdown-header {\n  padding: 5px 20px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #aab2bd;\n}\n.dropdown-menu li a {\n  padding: 5px 20px;\n  color: white;\n}\n.dropdown-menu li a:hover, .dropdown-menu li a:focus, .dropdown-menu .active a, .dropdown-menu .active a:hover, .dropdown-menu .active a:focus {\n  color: white;\n  background-color: #656d78;\n  outline: none;\n}\n.dropdown-menu .disabled a, .dropdown-menu .disabled a:hover, .dropdown-menu .disabled a:focus {\n  color: #656d78;\n  cursor: default;\n}\n.dropdown-menu .divider {\n  background-color: #656d78;\n  border-bottom: none;\n}\n.dropup .dropdown-menu {\n  margin-bottom: 0;\n          border-radius: 4px 4px 0 0;\n\n  -webkit-border-radius: 4px 4px 0 0;\n     -moz-border-radius: 4px 4px 0 0;\n}\n\n/**\n * dropdown-submenu\n * --------------------------------------------------\n */\n.dropdown-submenu {\n  position: relative;\n}\n.dropdown-submenu .dropdown-menu {\n  top: 0;\n  left: 100%;\n  margin-top: -6px;\n  margin-left: -1px;\n          border-radius: 0 4px 4px 4px;\n\n  -webkit-border-radius: 0 4px 4px 4px;\n     -moz-border-radius: 0 4px 4px 4px;\n}\n.dropdown-submenu:hover .dropdown-menu {\n  display: block;\n}\n.dropup .dropdown-submenu .dropdown-menu {\n  top: auto;\n  bottom: 0;\n  margin-top: 0;\n  margin-bottom: -2px;\n          border-radius: 4px 4px 4px 0;\n\n  -webkit-border-radius: 4px 4px 4px 0;\n     -moz-border-radius: 4px 4px 4px 0;\n}\n.dropdown-submenu > a:after {\n  display: block;\n  float: right;\n  width: 0;\n  height: 0;\n  margin-top: 5px;\n  margin-right: -10px;\n  content: \" \";\n  border-color: transparent;\n  border-style: solid;\n  border-width: 5px 0 5px 5px;\n  border-left-color: white;\n}\n.dropdown-default .dropdown-submenu > a:after {\n  border-left-color: #434a54;\n}\n.dropdown-submenu:hover a:after {\n  border-left-color: white;\n}\n.dropdown-submenu.pull-left {\n  float: none;\n}\n.dropdown-submenu.pull-left .dropdown-menu {\n  left: -100%;\n  margin-left: 10px;\n          border-radius: 4px 0 4px 4px;\n\n  -webkit-border-radius: 4px 0 4px 4px;\n     -moz-border-radius: 4px 0 4px 4px;\n}\n\n/*# sourceMappingURL=bootflat.css.map */\n", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./background.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./background.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! formstone v1.0.0 [background.css] 2016-03-20 | MIT License | formstone.it */\n\n.fs-background{overflow:hidden;position:relative}.fs-background,.fs-background-container,.fs-background-media{-webkit-transition:none;transition:none}.fs-background-container{width:100%;height:100%;position:absolute;top:0;z-index:0;overflow:hidden}.fs-background-media{position:absolute;top:0;bottom:0;opacity:0}.fs-background-media.fs-background-animated{-webkit-transition:opacity .5s linear;transition:opacity .5s linear}.fs-background-media iframe,.fs-background-media img,.fs-background-media video{width:100%;height:100%;display:block;-webkit-user-drag:none}.fs-background-media.fs-background-fixed,.fs-background-media.fs-background-native{width:100%;height:100%}.fs-background-media.fs-background-fixed img,.fs-background-media.fs-background-native img{display:none}.fs-background-media.fs-background-native{background-position:center;background-size:cover}.fs-background-media.fs-background-fixed{background-position:center;background-attachment:fixed}.fs-background-embed.fs-background-ready:after{width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:''}.fs-background-embed.fs-background-ready iframe{z-index:0}", ""]);
	
	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./checkbox.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./checkbox.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! formstone v1.0.0 [checkbox.css] 2016-03-20 | MIT License | formstone.it */\n\n.fs-checkbox.fs-checkbox-enabled{cursor:pointer;overflow:hidden}.fs-checkbox,.fs-checkbox *,.fs-checkbox :after,.fs-checkbox :before,.fs-checkbox:after,.fs-checkbox:before{box-sizing:border-box;-webkit-transition:none;transition:none;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.fs-checkbox-element_wrapper{position:relative;border:0;height:0;margin:0;opacity:0;overflow:hidden;padding:0;width:0}.fs-checkbox-element{position:absolute;top:0;left:0;z-index:-1;pointer-events:none;-webkit-transition:none;transition:none}.fs-checkbox-label{cursor:pointer;display:block;line-height:20px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fs-checkbox-marker{width:20px;height:20px;border:1px solid;cursor:pointer;display:block;float:left}.fs-checkbox-flag{width:100%;height:100%;margin:0}.fs-checkbox-flag:before{width:5px;height:10px;border:2px solid;border-top:0;border-left:0;content:'';display:block;margin:3px 0 0 6px;-webkit-transition:-webkit-transform .15s ease;transition:-webkit-transform .15s ease;transition:transform .15s ease;transition:transform .15s ease, -webkit-transform .15s ease;-webkit-transform:rotate(45deg) scale(0);-ms-transform:rotate(45deg) scale(0);transform:rotate(45deg) scale(0)}.fs-checkbox-checked .fs-checkbox-flag:before{-webkit-transform:rotate(45deg) scale(1);-ms-transform:rotate(45deg) scale(1);transform:rotate(45deg) scale(1)}.no-csstransforms .fs-checkbox-flag:before{width:100%;height:100%;content:\"\\2713\";display:none;line-height:1;text-align:center}.no-csstransforms .fs-checkbox-checked .fs-checkbox-flag:before{display:block}.fs-checkbox-radio .fs-checkbox-marker{position:relative;border-radius:100%}.fs-checkbox-radio .fs-checkbox-flag{width:10px;height:10px;position:absolute;top:0;right:0;bottom:0;left:0;background:#666;border-radius:100%;margin:auto;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .15s ease;transition:-webkit-transform .15s ease;transition:transform .15s ease;transition:transform .15s ease, -webkit-transform .15s ease}.fs-checkbox-radio .fs-checkbox-flag:before{display:none}.fs-checkbox-radio.fs-checkbox-checked .fs-checkbox-flag{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.fs-checkbox-radio.fs-checkbox-checked .fs-checkbox-flag:before{display:none}.no-csstransforms .fs-checkbox-radio .fs-checkbox-flag:before{display:none}.no-csstransforms .fs-checkbox-radio.fs-checkbox-checked .fs-checkbox-flag:before{display:block}.fs-checkbox-disabled{cursor:default;opacity:.5}.fs-checkbox-disabled .fs-checkbox-label{cursor:default}.fs-checkbox-disabled .fs-checkbox-marker{cursor:default}.fs-checkbox-toggle{position:relative}.fs-checkbox-toggle .fs-checkbox-label{line-height:40px}.fs-checkbox-toggle .fs-checkbox-marker{width:75pt;height:40px;position:relative}.fs-checkbox-toggle .fs-checkbox-marker:after{clear:both;content:'';display:table}.fs-checkbox-toggle .fs-checkbox-flag{width:50%;height:100%;position:absolute;top:0;left:0;background:#666;display:block;-webkit-transition:left .15s ease;transition:left .15s ease}.no-touch .fs-checkbox-toggle:hover .fs-checkbox-flag:after{opacity:1}.fs-checkbox-toggle.fs-checkbox-checked .fs-checkbox-flag{left:50%}.fs-checkbox-toggle.fs-checkbox-checked .fs-checkbox-flag:before{display:none}.fs-checkbox-toggle.fs-checkbox-disabled .fs-checkbox-flag:after{display:none}.fs-checkbox-toggle .fs-checkbox-state{width:50%;display:block;line-height:40px;margin:0;text-align:center}.fs-checkbox-toggle .fs-checkbox-state_on{float:left}.fs-checkbox-toggle .fs-checkbox-state_off{float:right}", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./dropdown.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./dropdown.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! formstone v1.0.0 [dropdown.css] 2016-03-20 | MIT License | formstone.it */\n\n.fs-dropdown{position:relative;z-index:1;display:block;max-width:100%}.fs-dropdown,.fs-dropdown *,.fs-dropdown :after,.fs-dropdown :before,.fs-dropdown:after,.fs-dropdown:before{box-sizing:border-box;-webkit-transition:none;transition:none;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.fs-dropdown-element{width:100%;height:100%;position:absolute;left:0;z-index:-1;opacity:0;outline:0;-webkit-tap-highlight-color:rgba(255,255,255,0);-webkit-tap-highlight-color:transparent}.no-opacity .fs-dropdown-element{left:-999999px}.fs-dropdown-selected{border:none;padding:0;width:100%;position:relative;z-index:2;background:#fff;border:1px solid;color:#000;cursor:pointer;display:block;overflow:hidden;text-align:left;text-overflow:clip}.fs-dropdown-options{width:100%;max-height:260px;position:absolute;top:100%;left:0;z-index:5;background:#fff;border:1px solid;display:none;overflow:auto;overflow-x:hidden}.fs-dropdown-options.fs-scrollbar{position:absolute}.no-opacity .fs-dropdown-options{width:auto}.fs-dropdown-group{display:block;font-size:75%}.fs-dropdown-item{border:none;padding:0;width:100%;background:#fff;border-radius:0;color:#000;cursor:pointer;display:block;overflow:hidden;text-align:left;text-decoration:none;text-overflow:ellipsis}.fs-dropdown-item_placeholder{display:none}.fs-dropdown-item_selected{background:#ddd}.fs-dropdown-item_disabled{cursor:default;opacity:.5}.fs-dropdown-open{z-index:3}.fs-dropdown-open .fs-dropdown-options{display:block}.fs-dropdown-open .fs-dropdown-selected{z-index:6}.fs-dropdown-cover.fs-dropdown-open .fs-dropdown-selected{z-index:4}.fs-dropdown-cover .fs-dropdown-options{top:0}.fs-dropdown-bottom .fs-dropdown-options{top:auto;bottom:100%}.fs-dropdown-bottom.fs-dropdown-cover .fs-dropdown-options{top:auto;bottom:0}.fs-dropdown-multiple .fs-dropdown-options{width:100%;position:static;display:block}.fs-dropdown-disabled{opacity:.5}.fs-dropdown-disabled .fs-dropdown-selected{cursor:default}.fs-dropdown-disabled .fs-dropdown-group,.fs-dropdown-disabled .fs-dropdown-item{cursor:default}.fs-dropdown-options.fs-scrollbar{overflow:hidden}.fs-dropdown-options.fs-scrollbar .fs-scrollbar-bar{border:1px solid;border-width:0 0 0 1px}.fs-dropdown-options.fs-scrollbar .fs-scrollbar-content{max-height:260px;height:auto}.fs-dropdown-options.fs-scrollbar.fs-scrollbar-active .fs-scrollbar-content{padding:0}", ""]);
	
	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./light.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./light.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! formstone v1.0.0 [light.css] 2016-03-20 | MIT License | formstone.it */\n\n.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-canister{position:relative;-webkit-backface-visibility:hidden;backface-visibility:hidden;margin:0;overflow:hidden;-webkit-transition:-webkit-transform .5s ease;transition:-webkit-transform .5s ease;transition:transform .5s ease;transition:transform .5s ease, -webkit-transform .5s ease;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fs-carousel.fs-light.fs-carousel-enabled.fs-carousel-auto_height .fs-carousel-canister{-webkit-transition:height .5s ease,-webkit-transform .5s ease;transition:height .5s ease,-webkit-transform .5s ease;transition:height .5s ease,transform .5s ease;transition:height .5s ease,transform .5s ease,-webkit-transform .5s ease}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control{width:40px;height:40px;position:absolute;top:0;bottom:0;background:#fff;border-radius:100%;display:block;margin:auto;opacity:0;overflow:hidden;text-indent:200%;-webkit-transition:opacity .15s ease,visibility .15s ease;transition:opacity .15s ease,visibility .15s ease;visibility:hidden;white-space:nowrap}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control:before{width:0;height:0;position:absolute;top:0;right:0;bottom:0;left:0;content:'';margin:auto}.no-opacity .fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control{text-indent:-999px}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control.fs-carousel-visible{opacity:1;visibility:visible}.no-touchevents .fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control.fs-carousel-visible:hover{background:#cfd8dc}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control_previous,.fs-carousel.fs-light.fs-carousel-enabled.fs-carousel-rtl .fs-carousel-control_next{right:auto;left:20px}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control_previous:before,.fs-carousel.fs-light.fs-carousel-enabled.fs-carousel-rtl .fs-carousel-control_next:before{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:10.5px solid #263238;border-left:none;margin-left:13.7px;margin-right:auto}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control_next,.fs-carousel.fs-light.fs-carousel-enabled.fs-carousel-rtl .fs-carousel-control_previous{left:auto;right:20px}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control_next:before,.fs-carousel.fs-light.fs-carousel-enabled.fs-carousel-rtl .fs-carousel-control_previous:before{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:10.5px solid #263238;border-right:none;margin-right:13.7px;margin-left:auto}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-control_disabled{opacity:0}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-pagination{width:100%;margin:10px 0 0;padding:0;text-align:center}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-page{width:10px;height:10px;background:#263238;border-radius:100%;margin:0 3px;opacity:.5;overflow:hidden;text-indent:200%;white-space:nowrap}.no-opacity .fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-page{text-indent:-999px}.fs-carousel.fs-light.fs-carousel-enabled .fs-carousel-page.fs-carousel-active,.no-touchevents .fs-light.fs-carousel-enabled .fs-carousel-page:hover{opacity:1}.fs-checkbox.fs-light{margin:0 0 10px 0}.fs-checkbox.fs-light .fs-checkbox-label{color:#263238;font-size:14px;line-height:20px}.fs-checkbox.fs-light .fs-checkbox-marker{width:20px;height:20px;background:#fff;border:1px solid #546e7a;border-radius:2px;margin:0 10px 0 0}.fs-checkbox.fs-light .fs-checkbox-flag:before{width:5px;height:10px;border:2px solid #546e7a;border-top:0;border-left:0;margin:3px 0 0 6px}.fs-light.fs-checkbox-radio .fs-checkbox-marker{border-radius:100%}.fs-light.fs-checkbox-radio .fs-checkbox-flag{width:10px;height:10px;background:#546e7a}.fs-light.fs-checkbox-focus .fs-checkbox-label,.no-touchevents .fs-light:hover .fs-checkbox-label{color:#111}.fs-light.fs-checkbox-focus .fs-checkbox-marker,.no-touchevents .fs-light:hover .fs-checkbox-marker{border-color:#263238}.fs-light.fs-checkbox-focus .fs-checkbox-flag:before,.no-touchevents .fs-light:hover .fs-checkbox-flag:before{border-color:#263238}.fs-light.fs-checkbox-radio.fs-checkbox-focus .fs-checkbox-flag,.no-touchevents .fs-light.fs-checkbox-radio:hover .fs-checkbox-flag{background:#263238}.fs-light.fs-checkbox-disabled{opacity:.5}.fs-light.fs-checkbox-disabled .fs-checkbox-label,.no-touchevents .fs-light.fs-checkbox-disabled:hover .fs-checkbox-label{color:#263238}.fs-light.fs-checkbox-disabled .fs-checkbox-marker,.no-touchevents .fs-light.fs-checkbox-disabled:hover .fs-checkbox-marker{border-color:#546e7a}.fs-light.fs-checkbox-disabled .fs-checkbox-flag:before,.no-touchevents .fs-light.fs-checkbox-disabled:hover .fs-checkbox-flag:before{border-color:#546e7a}.fs-light.fs-checkbox-radio.fs-checkbox-disabled .fs-checkbox-flag,.no-touchevents .fs-light.fs-checkbox-radio.fs-checkbox-disabled:hover .fs-checkbox-flag{background:#546e7a}.fs-light.fs-checkbox-toggle .fs-checkbox-label{line-height:40px}.fs-light.fs-checkbox-toggle .fs-checkbox-marker{width:75pt;height:40px;border-radius:2px}.fs-light.fs-checkbox-toggle .fs-checkbox-flag{background:#546e7a;border:2px solid #fff;border-radius:4px}.fs-light.fs-checkbox-toggle .fs-checkbox-flag:before{display:none}.fs-light.fs-checkbox-toggle .fs-checkbox-flag:after{width:2px;height:10px;position:absolute;top:0;right:0;bottom:0;left:0;background:#fff;box-shadow:3px 0 0 #fff,-3px 0 0 #fff;content:'';margin:auto}.no-touchevents .fs-light.fs-checkbox-toggle:hover .fs-checkbox-flag:after{opacity:1}.fs-light.fs-checkbox-toggle .fs-checkbox-state{color:#455a64;font-size:9pt;line-height:40px;text-transform:uppercase}.fs-light.fs-checkbox-toggle.fs-checkbox-focus .fs-checkbox-flag,.no-touchevents .fs-light.fs-checkbox-toggle:hover .fs-checkbox-flag{background:#263238}.fs-light.fs-checkbox-toggle.fs-checkbox-disabled .fs-checkbox-flag,.no-touchevents .fs-light.fs-checkbox-toggle.fs-checkbox-disabled:hover .fs-checkbox-flag{background:#546e7a}.fs-dropdown.fs-light .fs-dropdown-selected{height:40px;background:#fff;border:1px solid #546e7a;border-radius:2px;color:#263238;font-size:14px;line-height:40px;margin:0;padding:0 40px 0 15px}.fs-dropdown.fs-light .fs-dropdown-selected:after{height:0;width:0;position:absolute;top:0;right:15px;bottom:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #546e7a;content:'';display:block;margin:auto 0}.fs-dropdown.fs-light.fs-dropdown-focus .fs-dropdown-selected,.no-touchevents .fs-dropdown.fs-light .fs-dropdown-selected:hover{background-color:#fff;border-color:#263238;color:#263238}.fs-dropdown.fs-light.fs-dropdown-focus .fs-dropdown-selected:after,.no-touchevents .fs-dropdown.fs-light .fs-dropdown-selected:hover:after{border-top-color:#263238}.fs-dropdown.fs-light .fs-dropdown-options{max-height:260px;border:1px solid #263238;border-width:0 1px 1px;border-radius:0 0 2px 2px;background-color:#fff;margin:0;padding:0}.fs-dropdown.fs-light .fs-dropdown-group{border-bottom:1px solid #78909c;color:#546e7a;font-size:11px;padding:10px 15px;text-transform:uppercase}.fs-dropdown.fs-light .fs-dropdown-item{background:#fff;color:#263238;font-size:14px;line-height:1.4;padding:10px 15px;text-align:left}.fs-dropdown.fs-light .fs-dropdown-item:first-child{border-radius:0}.fs-dropdown.fs-light .fs-dropdown-item:last-child{border-bottom:0;border-radius:0 0 2px 2px}.no-touchevents .fs-dropdown.fs-light .fs-dropdown-item:hover{color:#111;background-color:#cfd8dc}.fs-dropdown.fs-light .fs-dropdown-item_selected,.no-touchevents .fs-dropdown.fs-light .fs-dropdown-item_selected:hover{background:#b0bec5}.fs-dropdown.fs-light .fs-dropdown-item_disabled,.no-touchevents .fs-dropdown.fs-light .fs-dropdown-item_disabled:hover{color:#263238;background-color:#fff;border-color:#546e7a;opacity:.5}.fs-light.fs-dropdown-open .fs-dropdown-options{border-radius:0 0 2px 2px}.fs-light.fs-dropdown-open .fs-dropdown-selected{border-radius:2px 2px 0 0}.fs-light.fs-dropdown-open .fs-dropdown-selected{background-color:#fff}.fs-light.fs-dropdown-cover .fs-dropdown-options{border-radius:2px;border-width:1px}.fs-light.fs-dropdown-cover .fs-dropdown-item:first-child{border-radius:2px 2px 0 0}.fs-light.fs-dropdown-bottom .fs-dropdown-options{border-width:1px 1px 0}.fs-light.fs-dropdown-bottom .fs-dropdown-item:last-child{border:none}.fs-light.fs-dropdown-bottom.fs-dropdown-open .fs-dropdown-selected{border-radius:0 0 2px 2px}.fs-light.fs-dropdown-bottom.fs-dropdown-open .fs-dropdown-options{border-radius:2px 2px 0 0}.fs-light.fs-dropdown-bottom.fs-dropdown-cover.fs-dropdown-open .fs-dropdown-selected{border-radius:2px}.fs-light.fs-dropdown-bottom.fs-dropdown-cover.fs-dropdown-open .fs-dropdown-options{border-radius:2px}.fs-light.fs-dropdown-multiple{border:1px solid #546e7a;border-radius:2px}.fs-light.fs-dropdown-multiple .fs-dropdown-options{border:none;border-radius:2px}.fs-light.fs-dropdown-disabled{opacity:.5}.fs-light.fs-dropdown-disabled .fs-dropdown-selected,.no-touchevents .fs-light.fs-dropdown-disabled .fs-dropdown-selected:hover{background:#fff;border-color:#546e7a;color:#263238;cursor:default}.fs-light.fs-dropdown-disabled .fs-dropdown-selected:after,.no-touchevents .fs-light.fs-dropdown-disabled .fs-dropdown-selected:hover:after{border-top-color:#546e7a}.fs-light.fs-dropdown-disabled .fs-dropdown-options{background:#fff;border-color:#546e7a}.fs-light.fs-dropdown-disabled .fs-dropdown-group,.fs-light.fs-dropdown-disabled .fs-dropdown-item{border-color:#546e7a;color:#263238}.fs-light.fs-dropdown-disabled .fs-dropdown-item,.no-touchevents .fs-light.fs-dropdown-disabled .fs-dropdown-item:hover{color:#263238;background-color:#fff}.fs-light.fs-dropdown-disabled .fs-dropdown-item_selected,.no-touchevents .fs-light.fs-dropdown-disabled .fs-dropdown-item_selected:hover{background:#fff}.fs-light.fs-dropdown-options.fs-scrollbar{overflow:hidden}.fs-light.fs-dropdown-options.fs-scrollbar .fs-scrollbar-bar{border:1px solid #546e7a;border-width:0 0 0 1px}.fs-light.fs-dropdown-options.fs-scrollbar .fs-scrollbar-content{border:none;max-height:260px;height:auto}.fs-light.fs-dropdown-options.fs-scrollbar.fs-scrollbar-active .fs-scrollbar-content{padding:0}.fs-light.fs-dropdown-options.fs-scrollbar .fs-scrollbar-bar,.fs-light.fs-dropdown-options.fs-scrollbar .fs-scrollbar-track{border-radius:0 2px 2px 0}.fs-lightbox.fs-light{z-index:101;background:#fff;border-radius:2px;box-shadow:0 0 25px #111;padding:10px}.fs-light.fs-lightbox-inline{padding:30px}.fs-light.fs-lightbox-animating{-webkit-transition:height .25s ease,width .25s ease,opacity .25s linear,top .25s ease;transition:height .25s ease,width .25s ease,opacity .25s linear,top .25s ease}.fs-light.fs-lightbox-animating .fs-lightbox-container{-webkit-transition:opacity .25s linear .25s,visibility .25s linear .25s;transition:opacity .25s linear .25s,visibility .25s linear .25s}.fs-light.fs-lightbox-mobile.fs-lightbox-animating .fs-lightbox-image_container{-webkit-transition:height .25s ease,width .25s ease,top .25s ease,left .25s ease;transition:height .25s ease,width .25s ease,top .25s ease,left .25s ease}.fs-light.fs-lightbox-overlay{z-index:100;background:#111;-webkit-transition:opacity .25s linear;transition:opacity .25s linear}.fs-light.fs-lightbox-overlay.fs-lightbox-open{opacity:.75}.fs-lightbox.fs-light .fs-lightbox-close{width:30px;height:30px;top:-7.5px;right:-7.5px;z-index:105;background:#fff;border-radius:100%;text-indent:200%;white-space:nowrap}.fs-lightbox.fs-light .fs-lightbox-close:before{position:absolute;top:0;right:0;bottom:0;left:0;color:#263238;content:\"\\D7\";display:block;font-family:Helvetica,Arial,sans-serif;font-size:22px;font-weight:700;line-height:30px;margin:auto;text-align:center;text-indent:0;-webkit-transition:color .15s linear;transition:color .15s linear}.no-opacity .fs-lightbox.fs-light .fs-lightbox-close{text-indent:-999px}.fs-lightbox.fs-light .fs-lightbox-loading_icon{width:50px;height:50px;position:absolute;top:0;right:0;bottom:0;left:0;z-index:105;display:block;margin:auto;opacity:0;-webkit-transition:opacity .25s linear,visibility .25s linear;transition:opacity .25s linear,visibility .25s linear;visibility:hidden}.fs-lightbox.fs-light .fs-lightbox-loading_icon:after,.fs-lightbox.fs-light .fs-lightbox-loading_icon:before{width:100%;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;border-radius:110%;content:'';display:block}.fs-lightbox.fs-light .fs-lightbox-loading_icon:before{border:5px solid rgba(38,50,56,.25)}.fs-lightbox.fs-light .fs-lightbox-loading_icon:after{-webkit-animation:fs-lightbox-loading-spin .75s linear infinite;animation:fs-lightbox-loading-spin .75s linear infinite;border:5px solid transparent;border-top-color:#263238}@-webkit-keyframes fs-lightbox-loading-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fs-lightbox-loading-spin{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fs-lightbox.fs-light .fs-lightbox-container{z-index:103;background:#fff}.fs-lightbox.fs-light .fs-lightbox-content{background:#fff}.fs-lightbox.fs-light .fs-lightbox-meta{padding:10px 10px 0}.fs-lightbox.fs-light .fs-lightbox-control{width:40px;height:40px;z-index:105;background:#fff;border-radius:100%;box-shadow:0 0 5px rgba(17,17,17,.25);opacity:1;overflow:hidden;text-indent:200%;-webkit-transition:opacity .15s linear,visibility .15s linear;transition:opacity .15s linear,visibility .15s linear;visibility:visible}.fs-lightbox.fs-light .fs-lightbox-control:before{width:0;height:0;position:absolute;top:0;right:0;bottom:0;left:0;content:'';margin:auto}.no-opacity .fs-lightbox.fs-light .fs-lightbox-control{text-indent:-999px}.fs-lightbox.fs-light .fs-lightbox-control_previous{left:20px}.fs-lightbox.fs-light .fs-lightbox-control_previous:before{border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:10.4px solid #263238;margin-left:14px}.fs-lightbox.fs-light .fs-lightbox-control_next{right:20px}.fs-lightbox.fs-light .fs-lightbox-control_next:before{border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:10.4px solid #263238;margin-right:14px}.no-touchevents .fs-lightbox.fs-light .fs-lightbox-control{opacity:0;visibility:hidden}.no-touchevents .fs-lightbox.fs-light:hover .fs-lightbox-control{opacity:1;visibility:visible}.no-touchevents .fs-lightbox.fs-light .fs-lightbox-control_disabled,.no-touchevents .fs-lightbox.fs-light:hover .fs-lightbox-control_disabled{opacity:0;cursor:default;visibility:hidden}.fs-lightbox.fs-light .fs-lightbox-position{color:#78909c;font-size:9pt;margin:5px 0;padding:0}.fs-lightbox.fs-light .fs-lightbox-caption p{color:#546e7a;font-size:14px;margin:5px 0;padding:0}.fs-lightbox.fs-light .fs-lightbox-error{width:250px}.fs-lightbox.fs-light .fs-lightbox-error p{color:#900;font-size:14px;margin:0;padding:25px;text-align:center;text-transform:uppercase}.fs-light.fs-lightbox-loading .fs-lightbox-container{opacity:0;-webkit-transition:opacity .25s linear;transition:opacity .25s linear;visibility:hidden}.fs-light.fs-lightbox-loading .fs-lightbox-loading_icon{opacity:1;visibility:visible}.fs-light.fs-lightbox-mobile{background:#263238;border-radius:0;padding:40px 0 0}.fs-light.fs-lightbox-mobile .fs-lightbox-close{height:40px;width:40px;top:0;right:0;background:#263238;border-radius:0}.fs-light.fs-lightbox-mobile .fs-lightbox-close:before{color:#90a4ae;font-size:28px;font-weight:700;line-height:40px}.fs-light.fs-lightbox-mobile .fs-lightbox-loading_icon:before{border-color:rgba(144,164,174,.25)}.fs-light.fs-lightbox-mobile .fs-lightbox-loading_icon:after{border-top-color:#90a4ae}.fs-light.fs-lightbox-mobile .fs-lightbox-container{background:#263238}.fs-light.fs-lightbox-mobile .fs-lightbox-content{background-color:#263238;padding:0 15px}.fs-light.fs-lightbox-mobile .fs-lightbox-tools{background-color:#263238}.fs-light.fs-lightbox-mobile .fs-lightbox-control{width:50px;height:100%;min-height:50px;background:#263238;border-radius:0;box-shadow:none}.fs-light.fs-lightbox-mobile .fs-lightbox-control_previous{left:0}.fs-light.fs-lightbox-mobile .fs-lightbox-control_previous:before{border-right-color:#90a4ae;margin-left:19px}.fs-light.fs-lightbox-mobile .fs-lightbox-control_next{right:0}.fs-light.fs-lightbox-mobile .fs-lightbox-control_next:before{border-left-color:#90a4ae;margin-right:19px}.no-touchevents .fs-light.fs-lightbox-mobile .fs-lightbox-control,.no-touchevents .fs-light.fs-lightbox-mobile:hover .fs-lightbox-control{opacity:1;visibility:visible}.fs-light.fs-lightbox-mobile .fs-lightbox-control_disabled,.no-touchevents .fs-light.fs-lightbox-mobile .fs-lightbox-control_disabled,.no-touchevents .fs-light.fs-lightbox-mobile:hover .fs-lightbox-control_disabled{cursor:default!important;opacity:0;visibility:hidden}.fs-light.fs-lightbox-mobile .fs-lightbox-meta{padding:15px 65px}.fs-light.fs-lightbox-mobile .fs-lightbox-position{color:#90a4ae;font-size:9pt;margin:0;padding:0 15px 0 0}.fs-light.fs-lightbox-mobile .fs-lightbox-caption p{color:#cfd8dc;font-size:14px;margin:0;padding:0}.fs-light.fs-lightbox-mobile .fs-lightbox-image{-webkit-transition:none!important;transition:none!important;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.fs-light.fs-lightbox-mobile.fs-lightbox-animated .fs-lightbox-image{-webkit-transition:-webkit-transform .25s ease-out!important;transition:-webkit-transform .25s ease-out!important;transition:transform .25s ease-out!important;transition:transform .25s ease-out, -webkit-transform .25s ease-out!important}.fs-light.fs-lightbox-mobile.fs-lightbox-iframe .fs-lightbox-content,.fs-light.fs-lightbox-mobile.fs-lightbox-inline .fs-lightbox-content{height:100%;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.fs-light.fs-lightbox-mobile.fs-lightbox-touch .fs-lightbox-tools{width:auto;position:static;background:0 0}.fs-light.fs-lightbox-mobile.fs-lightbox-touch .fs-lightbox-controls{width:100%;height:50px;position:fixed;right:0;bottom:0;left:0;z-index:105;background-color:#263238;padding:0 65px}.fs-light.fs-lightbox-mobile.fs-lightbox-touch .fs-lightbox-caption_toggle{color:#90a4ae;display:block;font-size:9pt;line-height:50px}.fs-light.fs-lightbox-mobile.fs-lightbox-touch .fs-lightbox-meta{width:100%;height:80%;position:fixed;top:20%;right:0;bottom:0;left:0;z-index:104;background:#263238;box-shadow:0 0 25px #111;padding:15px 15px 65px;-webkit-transform:translate(0,100%);-ms-transform:translate(0,100%);transform:translate(0,100%);-webkit-transition:-webkit-transform .25s ease;transition:-webkit-transform .25s ease;transition:transform .25s ease;transition:transform .25s ease, -webkit-transform .25s ease}.fs-light.fs-lightbox-touch.fs-lightbox-caption_open .fs-lightbox-meta{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.fs-light.fs-navigation-enabled{margin:0}.fs-navigation,.fs-navigation *,.fs-navigation :after,.fs-navigation :before,.fs-navigation:after,.fs-navigation:before{box-sizing:border-box;-webkit-transition:none;transition:none;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.fs-light.fs-navigation-toggle-nav.fs-navigation-enabled{background:#fff;border:1px solid #607d8b;border-width:0 1px 1px;border-radius:0 0 2px 2px;padding:20px}.fs-light.fs-navigation-toggle-handle.fs-navigation-enabled{width:100%;background:#fff;border:1px solid #607d8b;border-radius:2px;color:#263238;cursor:pointer;display:block;font-size:14px;height:40px;line-height:40px;margin:0;padding:0 45px 0 15px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fs-light.fs-navigation-toggle-handle.fs-navigation-open{border-radius:2px 2px 0 0}.fs-light.fs-navigation-overlay-nav.fs-navigation-enabled,.fs-light.fs-navigation-push-nav.fs-navigation-enabled,.fs-light.fs-navigation-reveal-nav.fs-navigation-enabled{background:#fff;padding:20px}.fs-light.fs-navigation-push-nav.fs-navigation-enabled,.fs-light.fs-navigation-reveal-nav.fs-navigation-enabled{visibility:hidden}.fs-light.fs-navigation-reveal-nav.fs-navigation-animated{-webkit-transition:visibility 1ms linear .2s;transition:visibility 1ms linear .2s}.fs-light.fs-navigation-overlay-nav.fs-navigation-animated,.fs-light.fs-navigation-push-nav.fs-navigation-animated{-webkit-transition:visibility 1ms linear .2s,-webkit-transform .2s ease;transition:visibility 1ms linear .2s,-webkit-transform .2s ease;transition:transform .2s ease,visibility 1ms linear .2s;transition:transform .2s ease,visibility 1ms linear .2s,-webkit-transform .2s ease}.fs-light.fs-navigation-push-nav.fs-navigation-enabled,.fs-light.fs-navigation-reveal-nav.fs-navigation-enabled{z-index:0}.fs-light.fs-navigation-overlay-left-nav.fs-navigation-enabled,.fs-light.fs-navigation-push-left-nav.fs-navigation-enabled{-webkit-transform:translateX(-270px);-ms-transform:translateX(-270px);transform:translateX(-270px)}.csstransforms3d .fs-light.fs-navigation-overlay-left-nav.fs-navigation-enabled,.csstransforms3d .fs-light.fs-navigation-push-left-nav.fs-navigation-enabled{-webkit-transform:translate3D(-270px,0,0);-ms-transform:translate3D(-270px,0,0);transform:translate3D(-270px,0,0)}.fs-light.fs-navigation-overlay-right-nav.fs-navigation-enabled,.fs-light.fs-navigation-push-right-nav.fs-navigation-enabled{-webkit-transform:translateX(270px);-ms-transform:translateX(270px);transform:translateX(270px)}.csstransforms3d .fs-light.fs-navigation-overlay-right-nav.fs-navigation-enabled,.csstransforms3d .fs-light.fs-navigation-push-right-nav.fs-navigation-enabled{-webkit-transform:translate3D(270px,0,0);-ms-transform:translate3D(270px,0,0);transform:translate3D(270px,0,0)}.fs-light.fs-navigation-overlay-nav.fs-navigation-enabled{z-index:3}.fs-light.fs-navigation-overlay-left-nav.fs-navigation-open{box-shadow:2px 0 2px rgba(0,0,0,.15)}.fs-light.fs-navigation-overlay-right-nav.fs-navigation-open{box-shadow:-2px 0 2px rgba(0,0,0,.15)}.fs-light.fs-navigation-reveal-nav.fs-navigation-open{visibility:visible;-webkit-transition:visibility 1ms ease;transition:visibility 1ms ease}.fs-light.fs-navigation-overlay-nav.fs-navigation-open,.fs-light.fs-navigation-push-nav.fs-navigation-open{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-transition:visibility 1ms ease,-webkit-transform .2s ease;transition:visibility 1ms ease,-webkit-transform .2s ease;transition:transform .2s ease,visibility 1ms ease;transition:transform .2s ease,visibility 1ms ease,-webkit-transform .2s ease;visibility:visible}.csstransforms3d .fs-light.fs-navigation-overlay-nav.fs-navigation-open,.csstransforms3d .fs-light.fs-navigation-push-nav.fs-navigation-open{-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fs-light.fs-navigation-overlay-handle.fs-navigation-enabled,.fs-light.fs-navigation-push-handle.fs-navigation-enabled,.fs-light.fs-navigation-reveal-handle.fs-navigation-enabled{background:#fff;border:1px solid #607d8b;border-radius:2px;color:#263238;cursor:pointer;display:block;font-size:14px;height:40px;line-height:40px;margin:0;padding:0 45px 0 15px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fs-light.fs-navigation-overlay-content:before{background:#fff;background:rgba(255,255,255,.75);opacity:0;-webkit-transition:opacity .2s ease,visibility .2s ease;transition:opacity .2s ease,visibility .2s ease;visibility:hidden}.fs-light.fs-navigation-overlay-content.fs-navigation-open:before{opacity:1;visibility:visible}.fs-light.fs-navigation-push-content.fs-navigation-enabled,.fs-light.fs-navigation-reveal-content.fs-navigation-enabled{z-index:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.csstransforms3d .fs-light.fs-navigation-push-content.fs-navigation-enabled,.csstransforms3d .fs-light.fs-navigation-reveal-content.fs-navigation-enabled{-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fs-light.fs-navigation-push-content.fs-navigation-animated,.fs-light.fs-navigation-reveal-content.fs-navigation-animated{-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease}.fs-light.fs-navigation-push-left-content.fs-navigation-enabled,.fs-light.fs-navigation-reveal-left-content.fs-navigation-enabled{box-shadow:-2px 0 2px rgba(0,0,0,.15)}.fs-light.fs-navigation-push-right-content.fs-navigation-enabled,.fs-light.fs-navigation-reveal-right-content.fs-navigation-enabled{box-shadow:2px 0 2px rgba(0,0,0,.15)}.fs-light.fs-navigation-push-left-content.fs-navigation-open,.fs-light.fs-navigation-reveal-left-content.fs-navigation-open{-webkit-transform:translateX(270px);-ms-transform:translateX(270px);transform:translateX(270px)}.csstransforms3d .fs-light.fs-navigation-push-left-content.fs-navigation-open,.csstransforms3d .fs-light.fs-navigation-reveal-left-content.fs-navigation-open{-webkit-transform:translate3D(270px,0,0);-ms-transform:translate3D(270px,0,0);transform:translate3D(270px,0,0)}.fs-light.fs-navigation-push-right-content.fs-navigation-open,.fs-light.fs-navigation-reveal-right-content.fs-navigation-open{-webkit-transform:translateX(-270px);-ms-transform:translateX(-270px);transform:translateX(-270px)}.csstransforms3d .fs-light.fs-navigation-push-right-content.fs-navigation-open,.csstransforms3d .fs-light.fs-navigation-reveal-right-content.fs-navigation-open{-webkit-transform:translate3D(-270px,0,0);-ms-transform:translate3D(-270px,0,0);transform:translate3D(-270px,0,0)}.fs-light.fs-navigation-handle.fs-navigation-enabled{position:relative}.fs-light.fs-navigation-handle.fs-navigation-enabled:after{height:3px;width:15px;position:absolute;top:0;right:15px;bottom:0;background:#607d8b;box-shadow:0 5px 0 #607d8b,0 -5px 0 #607d8b;content:'';display:block;margin:auto 0}.fs-light.fs-navigation-handle.fs-navigation-open:after{width:15px;height:15px;background:0 0;border:none;box-shadow:none;color:#607d8b;content:\"\\D7\";font-size:22px;font-weight:700;line-height:13px;text-align:center}.fs-number.fs-light{position:relative;border-radius:2px;margin:0 0 10px 0}.fs-light .fs-number-element{width:100%;height:40px;background:#fff;border:1px solid #546e7a;border-radius:2px;color:#263238;font-size:15px;margin:0;padding:0 40px 0 15px}.fs-light .fs-number-arrow{width:25px;height:50%;position:absolute;right:1px;z-index:1;background:#fff;border:2px solid #fff;border-radius:4px;text-indent:200%;white-space:nowrap}.no-opacity .fs-light .fs-number-arrow{text-indent:-999999px}.fs-light .fs-number-arrow:after{width:0;height:0;position:absolute;top:0;right:0;bottom:0;left:0;border-left:5px solid transparent;border-right:5px solid transparent;content:'';display:block;margin:auto}.no-touchevents .fs-light .fs-number-arrow:hover{background:#cfd8dc}.fs-light .fs-number-arrow.fs-number-up{top:1px}.fs-light .fs-number-arrow.fs-number-up:after{border-bottom:5px solid #546e7a}.fs-light .fs-number-arrow.fs-number-down{bottom:1px}.fs-light .fs-number-arrow.fs-number-down:after{border-top:5px solid #546e7a}.fs-light.fs-number-focus .fs-number-element,.no-touchevents .fs-light:hover .fs-number-element{border-color:#263238}.fs-light.fs-number-focus .fs-number-arrow.fs-number-up:after,.no-touchevents .fs-light:hover .fs-number-arrow.fs-number-up:after{border-bottom-color:#263238}.fs-light.fs-number-focus .fs-number-arrow.fs-number-down:after,.no-touchevents .fs-light:hover .fs-number-arrow.fs-number-down:after{border-top-color:#263238}.fs-light.fs-number-disabled,.no-touchevents .fs-light.fs-number-disabled:hover{opacity:.5}.fs-light.fs-number-disabled .fs-number-element,.no-touchevents .fs-light.fs-number-disabled:hover .fs-number-element{border-color:#546e7a}.fs-light.fs-number-disabled .fs-number-arrow,.no-touchevents .fs-light.fs-number-disabled:hover .fs-number-arrow{background:#fff}.fs-light.fs-number-disabled .fs-number-arrow.fs-number-up:after,.no-touchevents .fs-light.fs-number-disabled:hover .fs-number-arrow.fs-number-up:after{border-bottom-color:#546e7a}.fs-light.fs-number-disabled .fs-number-arrow.fs-number-down:after,.no-touchevents .fs-light.fs-number-disabled:hover .fs-number-arrow.fs-number-down:after{border-top-color:#546e7a}.fs-pagination.fs-light{position:relative;background:#fff;border:1px solid #546e7a;border-radius:2px;margin:0 0 10px 0}.fs-pagination.fs-light .fs-pagination-pages{text-align:center}.fs-pagination-mobile.fs-light .fs-pagination-position,.fs-pagination.fs-light .fs-pagination-control,.fs-pagination.fs-light .fs-pagination-ellipsis,.fs-pagination.fs-light .fs-pagination-page{color:#546e7a;font-size:14px;text-decoration:none}.fs-pagination.fs-light .fs-pagination-ellipsis,.fs-pagination.fs-light .fs-pagination-page{height:30px;line-height:30px;margin:5px 0;padding:0 7px}.fs-pagination-mobile.fs-light .fs-pagination-position,.fs-pagination.fs-light .fs-pagination-control{height:40px;line-height:40px}.fs-pagination.fs-light .fs-pagination-page{border-radius:2px}.no-touchevents .fs-light .fs-pagination-page:hover{color:#263238}.fs-pagination.fs-light .fs-pagination-active{color:#263238;background:#cfd8dc}.fs-pagination.fs-light .fs-pagination-control{width:40px;position:relative;background:#fff;border:2px solid #fff;border-radius:4px;display:block;overflow:hidden;text-indent:200%;white-space:nowrap}.fs-pagination.fs-light .fs-pagination-control:before{height:0;width:0;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;content:''}.fs-pagination.fs-light .fs-pagination-control_previous{float:left}.fs-pagination.fs-light .fs-pagination-control_previous:before{border-top:7px solid transparent;border-bottom:7px solid transparent;border-right:10.5px solid #263238;border-left:none;margin-left:12.3px;margin-right:auto}.fs-pagination.fs-light .fs-pagination-control_next{float:right}.fs-pagination.fs-light .fs-pagination-control_next:before{border-top:7px solid transparent;border-bottom:7px solid transparent;border-left:10.5px solid #263238;border-right:none;margin-right:12.3px;margin-left:auto}.no-touchevents .fs-pagination.fs-light .fs-pagination-control:hover{background:#cfd8dc}.fs-pagination-mobile.fs-light .fs-pagination-position{text-align:center}.fs-pagination-mobile.fs-light .fs-pagination-current,.fs-pagination-mobile.fs-light .fs-pagination-total{color:#263238}.fs-range.fs-light .fs-range-track{height:20px;background:#fff;border:1px solid #546e7a;border-radius:2px;margin:10px 0}.fs-range.fs-light .fs-range-fill{background:#90a4ae}.fs-range.fs-light .fs-range-marker{width:30px;height:30px;position:relative;background:#546e7a;border-radius:2px;margin:-6px 0 0 -15px}.fs-range.fs-light .fs-range-marker:after{width:2px;height:10px;position:absolute;top:0;right:0;bottom:0;left:0;background:#fff;box-shadow:3px 0 0 #fff,-3px 0 0 #fff;content:'';margin:auto}.fs-light.fs-range-focus .fs-range-track,.no-touchevents .fs-light:hover .fs-range-track{border-color:#263238}.fs-light.fs-range-focus .fs-range-marker,.no-touchevents .fs-light:hover .fs-range-marker{background:#263238}.fs-range.fs-light .fs-range-label{color:#263238;font-size:14px;line-height:38px}.fs-light.fs-range-vertical{width:60px;height:300px}.fs-light.fs-range-vertical .fs-range-track{width:20px;height:75%;margin:0 auto}.fs-light.fs-range-vertical .fs-range-marker{margin:-15px 0 0 -6px}.fs-light.fs-range-disabled .fs-range-marker{cursor:default}.fs-scrollbar.fs-light{background:#fff;border:1px solid #546e7a;border-radius:2px}.fs-scrollbar.fs-light .fs-scrollbar-bar{width:20px;background:#fff;border:1px solid #546e7a;border-radius:0 2px 2px 0;border-width:0 0 0 1px}.fs-scrollbar.fs-light .fs-scrollbar-track{background:#fff;border-radius:0 2px 2px 0}.fs-scrollbar.fs-light .fs-scrollbar-handle{width:9pt;height:24px;right:4px;background:#546e7a;border:1px solid #fff;border-radius:10px}.fs-light.fs-scrollbar-horizontal .fs-scrollbar-content{padding:0 0 20px 0}.fs-light.fs-scrollbar-horizontal .fs-scrollbar-bar{width:100%;height:20px;border-width:1px 0 0 0}.fs-light.fs-scrollbar-horizontal .fs-scrollbar-handle{width:24px;height:9pt;bottom:4px}.fs-light.fs-scrollbar-active .fs-scrollbar-content,.fs-light.fs-scrollbar-setup .fs-scrollbar-content{padding:20px}.fs-light.fs-tabs-tab.fs-tabs-enabled,.fs-light.fs-tabs-tab_mobile{background:#b0bec5;border:1px solid #546e7a;border-radius:2px;color:#263238;display:block;float:left;font-size:14px;margin:0 5px 0 0;padding:10px 20px;text-transform:uppercase;text-decoration:none}.no-touchevents .fs-light.fs-tabs-tab.fs-tabs-enabled:hover,.no-touchevents .fs-light.fs-tabs-tab_mobile:hover{background:#cfd8dc}.fs-light.fs-tabs-tab.fs-tabs-active,.fs-light.fs-tabs-tab_mobile.fs-tabs-active,.no-touchevents .fs-light.fs-tabs-tab.fs-tabs-active:hover,.no-touchevents .fs-light.fs-tabs-tab_mobile.fs-tabs-active:hover{background:#fff;color:#263238}.fs-light.fs-tabs-tab.fs-tabs-mobile{display:none}.fs-light.fs-tabs-tab.fs-tabs-tab_mobile{width:100%;border-radius:2px;display:none;float:none;margin:10px 0}.fs-light.fs-tabs-tab_mobile.fs-tabs-mobile{display:block}.fs-light.fs-tabs-tab_mobile.fs-tabs-active{border-radius:2px 2px 0 0;margin:10px 0 0}.fs-light.fs-tabs-content.fs-tabs-mobile{border-radius:0 0 2px 2px}.fs-tooltip.fs-light{z-index:10;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.fs-tooltip.fs-light .fs-tooltip-content{background:#263238;border-radius:2px;color:#fff;float:left;font-size:9pt;margin:0;padding:10px 15px;position:relative}.fs-tooltip.fs-light .fs-tooltip-caret{width:0;height:0;content:'';display:block;margin:0;position:absolute}.fs-light.fs-tooltip-right .fs-tooltip-caret{top:0;left:-5px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #263238}.fs-light.fs-tooltip-left .fs-tooltip-caret{top:0;right:-5px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #263238}.fs-light.fs-tooltip-bottom .fs-tooltip-caret,.fs-light.fs-tooltip-top .fs-tooltip-caret{display:block;float:none;margin:0 auto}.fs-light.fs-tooltip-top .fs-tooltip-caret{bottom:-5px;left:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #263238}.fs-light.fs-tooltip-bottom .fs-tooltip-caret{top:-5px;left:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #263238}.fs-upload.fs-light .fs-upload-target{background:#fff;border:3px dashed #607d8b;border-radius:2px;color:#455a64;font-size:14px;margin:0;padding:25px;text-align:center;-webkit-transition:background .15s linear,border .15s linear,color .15s linear,opacity .15s linear;transition:background .15s linear,border .15s linear,color .15s linear,opacity .15s linear}.fs-light.fs-upload-dropping .fs-upload-target,.no-touchevents .fs-light:hover .fs-upload-target{background:#cfd8dc;border-color:#546e7a;color:#263238}.fs-light.fs-upload-disabled{opacity:.5}.fs-light.fs-upload-disabled .fs-upload-target,.fs-light.fs-upload-disabled.fs-upload-dropping .fs-upload-target,.no-touchevents .fs-light.fs-upload-disabled.fs-upload-dropping:hover .fs-upload-target,.no-touchevents .fs-light.fs-upload-disabled:hover .fs-upload-target{background:#fff;border-color:#607d8b;color:#455a64}", ""]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./font-awesome.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./font-awesome.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.5.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(23) + ");\n  src: url(" + __webpack_require__(23) + "?#iefix&v=4.5.0) format('embedded-opentype'), url(" + __webpack_require__(24) + ") format('woff2'), url(" + __webpack_require__(25) + ") format('woff'), url(" + __webpack_require__(26) + ") format('truetype'), url(" + __webpack_require__(27) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n", ""]);
	
	// exports


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "32400f4e08932a94d8bfd2422702c446.eot";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "db812d8a70a4e88e888744c1c9a27e89.woff2";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a35720c2fed2c7f043bc7e4ffb45e073.woff";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a3de2170e4e9df77161ea5d3f31b2668.ttf";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f775f9cca88e21d45bebe185b27c0e5b.svg";

/***/ },
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var Mn = __webpack_require__(39);
	var _ = __webpack_require__(37);
	var Radio = __webpack_require__(40);
	
	Mn.Plugin = Mn.Object.extend({
	
	    constructor: function(options){
	
	        //debugger;
	        var keys = ['name', 
	            'dependencies', 
	            'views', 
	            'routes', 
	            'region', 
	            'onBeforeRegister', 
	            'onRegister', 
	            'dev'];
	
	        this.mergeOptions(options, keys);
	        this._addChannel();
	
	        // copy the routes option to this._routes
	/*
	        this._routes = {};
	        this.routes = this.routes || [];
	        var i=0, l=this.routes.length, obj;
	        for(; i<l; i++){
	            //debugger;
	            obj = this.routes[i];
	
	            if(!_.isFunction(obj.handler.onNavigate)){
	                throw new Error('a route handler must have a "onNavigate" method');
	            }
	
	            this._routes[obj.path] = {};
	            this._routes[obj.path].onNavigate = _.bind(obj.handler.onNavigate, this);
	        }
	*/
	        // copy the views option to this._views
	        this._views = {};
	        this.views = this.views || [];
	        var i=0, l=this.views.length, obj;
	
	        if(l===0){
	            throw new Error('the plugin "' + this.name + '" does not have any views');
	        }
	
	        this._defaultViewName = this.views[0].viewName;
	        for(; i<l; i++){
	            //debugger;
	            obj = this.views[i];
	            this._views[obj.viewName] = obj.viewClass;
	        }
	
	        //this.region = undefined;
	        this.isRunning = false;
	        Mn.Object.call(this, options);
	    },
	
	
	    _addChannel: function(){
	        //debugger;
	        this.channel = Radio.channel(this.name);
	
	        if(this.dev){
	            Radio.tuneIn(this.name);    
	        }
	
	        this.channel.reply("start", this.start, this);
	        this.channel.reply("stop", this.stop, this);
	        this.channel.reply("showView", this.showView, this);
	        this.channel.reply("navigate", this.navigate, this);
	    },
	
	    start: function(options){
	        //debugger;
	
	        if(this.isRunning){ return; }
	
	        var region = options.region || this.region;
	        var view = options.view || this._defaultViewName; 
	        
	        var defaultView = this.showView({
	            region: region, 
	            view: view, 
	            viewOptions: _.extend({}, options.viewOptions),
	            //stateOptions: _.extend({}, options.stateOptions)
	        });                
	
	        //this.region = options.region;
	        //debugger;
	        //this.defaultRegion = defaultView.getRegion("default");
	
	        defaultView.once('destroy', this.stop, this);
	
	        this.isRunning = true;
	        return this.defaultView;
	    },
	
	    stop: function(){
	        //debugger;
	        this.isRunning = false;
	        //this.defaultRegion = undefined;
	
	        // TODO: when the plugin is stopped, it's channel should be stopped too (?)
	        //this.region = undefined;
	    },
	
	    showView: function(options){
	
	        //debugger;
	        var View = this._views[options.view];
	        if(!View){
	            throw new Error('The view "' + options.view + '" does not exist in the plugin "' + this.name + '"');
	        }
	
	        if(View !== Backbone.View && !(View.prototype instanceof Backbone.View)){
	            throw new Error("viewClass must be an instance of Backbone.View");
	        }
	
	        var v = new View(options.viewOptions || {});
	        v.$el.attr({'data-mn-cid': v.cid, 'data-mn-view-name': options.view});
	        
	        var region = options.region || this.region;
	        if(!(region instanceof Mn.Region)){
	            throw new Error('region must be an instance of Mn.Region');
	        }
	
	        // the view instance has access to the underlying plugin's channel
	        //debugger;
	        v.channel = this.channel;
	        //debugger;
	        v.plugin = this;
	/*
	        var stateClass = v.getOption("stateClass");
	        if (stateClass) {
	
	            options.stateOptions = options.stateOptions || {};
	            v.state = new stateClass({
	                component: v,
	                initialState: _.extend({}, stateClass.prototype.initialState, options.stateOptions.initialState)
	            });
	
	            // make the view listen to the events triggered by the state
	            if (v.stateEvents) {
	                Mn.State.syncEntityEvents(v, v.state, v.stateEvents, options.stateOptions.syncEvent || "before:attach");
	            } 
	
	            // make the state listen to the events triggered by the view
	            if(v.state.viewEvents){
	                Mn.State.syncEntityEvents(v.state, v, v.state.viewEvents);    
	            }
	
	            // make the state listen to the events triggered by the view's channel
	            // (which is the plugin's channel)
	            if(v.state.channelEvents){
	                Mn.State.syncEntityEvents(v.state, v.channel, v.state.channelEvents);    
	            }
	
	            // note: all these event handlers will all be erased when the view is destroyed
	        }
	*/
	        // when a view is instantiated via the request "showView", the plugin's channel is attached
	        // to the view; when the view is detroyed we remove that reference
	        // TODO: use the delete operator instead?
	        v.once('destroy', function(){
	            //debugger;
	            this.channel = undefined;
	            this.plugin = undefined;
	        }, v);
	
	        region.show(v);
	        //v.$el.addClass("mn-view-name-" + options.view);
	        //this.isRunning = true;
	        return v;
	    },
	
	    navigate: function(navigateOptions){
	        //debugger;
	        if(!this.router){
	            throw new Error('plugin "' + this.name + '" does not have a router');
	        }
	
	        var fragment = navigateOptions.fragment;
	        var options = navigateOptions.options || {};
	        this.router.navigate(fragment, options);
	    },
	
	});
	/*
	// object holding with all the registered plugins
	Mn._plugins = {};
	
	
	Mn.register = function(plugins){
	    //debugger;
	    if(!_.isArray(plugins)){
	        plugins = [plugins];
	    }
	
	    _.each(plugins, function(plugin){
	
	        plugin.triggerMethod('before:register');
	        
	        // TODO: plugin names must be unique
	        Mn._plugins[plugin.name] = plugin;
	
	        // create the plugin's router
	        //debugger;
	
	        // if(_.keys(plugin._routes).length){
	        //     plugin.router = new Mn.Router({ routes: plugin._routes});
	        // }
	
	        plugin.triggerMethod('register');
	
	
	    });
	
	};
	
	*/

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var Mn = __webpack_require__(39);
	
	var CriteriaMain = __webpack_require__(46);
	var DimensionsForm = __webpack_require__(54);
	
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


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(47)
	var _ = __webpack_require__(37);
	var Backbone = __webpack_require__(38);
	var Mn = __webpack_require__(39);
	
	var DimensionsForm = __webpack_require__(54);
	var Becca = __webpack_require__(49);
	
	var CriteriaMain = Mn.LayoutView.extend({
	    template: __webpack_require__(50),
	    initialize: function(){
	        debugger;
	        console.log("criteria main view");
	    },
	    ui: {
	        "showCriteriaBtn": "button.btn-primary"
	    },
	    events: {
	        "click @ui.showCriteriaBtn": function(e){
	            
	            var dimensionsForm = new DimensionsForm();
	        }
	    }
	
	});
	
	module.exports = CriteriaMain;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./criteria-main.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./criteria-main.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".dimension {\n    margin-top: 10px;\n}\n\n.dimension-title {\n    font-size: 16px;\n    font-weight: bold;\n    color: #3f3f3f;\n    margin-bottom: 10px;\n    \n}", ""]);
	
	// exports


/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = [
		{
			"_row": 4,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 4
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Avoided damage": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Windfall profit": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Scope of effect": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Level of resilience": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Vulnerability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Efficiency - Administrative burden": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Efficiency - Benefits": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 1,
					"feasibility": 3,
					"availability of information": 4
				},
				"Equity - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 4,
					"feasibility": 5,
					"availability of information": 3
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 2,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Acceptability - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Coherence - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Robustness - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 4
				},
				"Robustness - Regret / no - regret": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Adaptive capacity - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Institutional requirements": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Barriers": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Dependencies - Ease of implementation": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Deliverability and Feasibility - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 4
				},
				"Participation - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Quality of the process": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Lessons learnt - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Lessons learnt - Capacity building": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				}
			},
			"_name": "Cascais Municipality",
			"contextDimensions": {
				"sectors": [
					"Health and Social Policies",
					"Tourism"
				],
				"impacts": [
					"Extreme Temperature",
					"Water scarcity",
					"Coastal Erosion",
					"Damages from extreme weather related events (storms, ice and snow)"
				],
				"perspective": [
					"both"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Both"
				],
				"orientation": [
					"Process"
				],
				"setting": [
					"Consensual"
				]
			}
		},
		{
			"_row": 5,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Relevance": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Effectiveness - Avoided damage": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 2
				},
				"Effectiveness - Windfall profit": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Scope of effect": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Level of resilience": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Vulnerability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 4
				},
				"Efficiency - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Efficiency - Administrative burden": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 4
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Efficiency - Benefits": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 2
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 2
				},
				"Equity - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 3
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Acceptability - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Coherence - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Robustness - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Robustness - Regret / no - regret": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Adaptive capacity - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Institutional requirements": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Barriers": {
					"relevance": 5,
					"feasibility": 0,
					"availability of information": 4
				},
				"Dependencies - Ease of implementation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 3
				},
				"Participation - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Quality of the process": {
					"relevance": 5,
					"feasibility": 0,
					"availability of information": 5
				},
				"Lessons learnt - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Lessons learnt - Capacity building": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 2
				}
			},
			"_name": "Timmendorf",
			"contextDimensions": {
				"sectors": [
					"Coastal and Marine systems",
					"Tourism"
				],
				"impacts": [
					"Flooding",
					"Coastal Erosion"
				],
				"perspective": [
					"retrospective"
				],
				"integration": [
					"single measure"
				],
				"approach": [
					"Bottom-up"
				],
				"orientation": [
					"Analytically"
				],
				"setting": [
					"Conflictual"
				]
			}
		},
		{
			"_row": 6,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 5
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 4
				},
				"Effectiveness - Avoided damage": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Windfall profit": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 3
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 3,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Scope of effect": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Level of resilience": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Vulnerability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Efficiency - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 1
				},
				"Efficiency - Administrative burden": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 2
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Benefits": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 1
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Equity - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 4
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 4
				},
				"Robustness - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Robustness - Regret / no - regret": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Adaptive capacity - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Institutional requirements": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Barriers": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Dependencies - Ease of implementation": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 3
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 4
				},
				"Participation - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 5
				},
				"Participation - Quality of the process": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Lessons learnt - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Lessons learnt - Capacity building": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				}
			},
			"_name": "Aveiro Coast",
			"contextDimensions": {
				"sectors": [
					"Coastal and Marine systems",
					"Tourism"
				],
				"impacts": [
					"Flooding",
					"Coastal Erosion",
					"Damages from extreme weather related events (storms, ice and snow)"
				],
				"perspective": [
					"both"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Both"
				],
				"orientation": [
					"Process"
				],
				"setting": [
					"Both"
				]
			}
		},
		{
			"_row": 7,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 4
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 4
				},
				"Effectiveness - Avoided damage": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Windfall profit": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Scope of effect": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Level of resilience": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Vulnerability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Efficiency - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Administrative burden": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Total cost": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - Benefits": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Acceptability - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Robustness - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Robustness - Regret / no - regret": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Adaptive capacity - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Institutional requirements": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Barriers": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Ease of implementation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - Quality of the process": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Lessons learnt - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Lessons learnt - Capacity building": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				}
			},
			"_name": "Danish agriculture",
			"contextDimensions": {
				"sectors": [
					"Agriculture"
				],
				"impacts": [
					"Flooding"
				],
				"perspective": [
					"both"
				],
				"integration": [
					"single measure"
				],
				"approach": [
					"Both"
				],
				"orientation": [
					"Analytically"
				],
				"setting": [
					"Consensual"
				]
			}
		},
		{
			"_row": 8,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Avoided damage": {
					"relevance": 5,
					"feasibility": 1,
					"availability of information": 2
				},
				"Effectiveness - Windfall profit": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Scope of effect": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Level of resilience": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Effectiveness - Vulnerability": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 0
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 2
				},
				"Efficiency - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Administrative burden": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Efficiency - Total cost": {
					"relevance": 4,
					"feasibility": 0,
					"availability of information": 3
				},
				"Efficiency - Benefits": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 0
				},
				"Equity - General": {
					"relevance": 5,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 5,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 2
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 5,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 5,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 4,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Acceptability - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 5,
					"feasibility": 1,
					"availability of information": 1
				},
				"Coherence - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Robustness - General": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Robustness - Regret / no - regret": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Adaptive capacity - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Dependencies - Institutional requirements": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Barriers": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Ease of implementation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Deliverability and Feasibility - General": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 1,
					"feasibility": 0,
					"availability of information": 0
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 1,
					"feasibility": 0,
					"availability of information": 0
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Participation - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - Quality of the process": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Lessons learnt - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Lessons learnt - Capacity building": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				}
			},
			"_name": "Dartmoor",
			"contextDimensions": {
				"sectors": [
					"Agriculture",
					"Biodiversity & Ecosystems"
				],
				"impacts": [
					"Flooding",
					"Soil Erosion"
				],
				"perspective": [
					"both"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Both"
				],
				"orientation": [
					"Process"
				],
				"setting": [
					"Both"
				]
			}
		},
		{
			"_row": 9,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Relevance": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Avoided damage": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Windfall profit": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Scope of effect": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Level of resilience": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Vulnerability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - Administrative burden": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Total cost": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - Benefits": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Equity - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 4
				},
				"Robustness - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Robustness - Regret / no - regret": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Adaptive capacity - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Dependencies - Institutional requirements": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Barriers": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Ease of implementation": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 5
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Quality of the process": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 5
				},
				"Lessons learnt - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Lessons learnt - Capacity building": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				}
			},
			"_name": "Adaptation to Drought in Alentejo",
			"contextDimensions": {
				"sectors": [
					"Agriculture",
					"Biodiversity & Ecosystems",
					"Water resources"
				],
				"impacts": [
					"Extreme Temperature",
					"Water scarcity",
					"Droughts",
					"Soil Erosion"
				],
				"perspective": [
					"both"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Both"
				],
				"orientation": [
					"Process"
				],
				"setting": [
					"Consensual"
				]
			}
		},
		{
			"_row": 10,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Avoided damage": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Windfall profit": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Effectiveness - Scope of effect": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Level of resilience": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Vulnerability": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Efficiency - Administrative burden": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Total cost": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Efficiency - Benefits": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 2
				},
				"Equity - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 2
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Acceptability - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Coherence - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 3
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Robustness - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Robustness - Regret / no - regret": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Adaptive capacity - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 3
				},
				"Dependencies - Institutional requirements": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 3
				},
				"Dependencies - Barriers": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Ease of implementation": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - General": {
					"relevance": 0,
					"feasibility": 2,
					"availability of information": 2
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Participation - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Participation - Quality of the process": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Lessons learnt - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Lessons learnt - Capacity building": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				}
			},
			"_name": "Tagus Water District",
			"contextDimensions": {
				"sectors": [
					"Agriculture",
					"Biodiversity & Ecosystems",
					"Health and Social Policies",
					"Water resources"
				],
				"impacts": [
					"Extreme Temperature",
					"Water scarcity",
					"Droughts",
					"Vector Borne Diseases",
					"Damages from extreme weather related events (storms, ice and snow)"
				],
				"perspective": [
					"prospective"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Bottom-up"
				],
				"orientation": [
					"Process"
				],
				"setting": [
					"Conflictual"
				]
			}
		},
		{
			"_row": 11,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Avoided damage": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Effectiveness - Windfall profit": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Scope of effect": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Level of resilience": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Vulnerability": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Administrative burden": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Equity - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Coherence - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Robustness - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Robustness - Regret / no - regret": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Adaptive capacity - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Dependencies - Institutional requirements": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Dependencies - Barriers": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Ease of implementation": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Quality of the process": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Lessons learnt - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Lessons learnt - Capacity building": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				}
			},
			"_name": "Kalajoki River Basin",
			"contextDimensions": {
				"sectors": [
					"Biodiversity & Ecosystems",
					"Water resources"
				],
				"impacts": [
					"Flooding",
					"Damages from extreme weather related events (storms, ice and snow)"
				],
				"perspective": [
					"prospective"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Both"
				],
				"orientation": [
					"Process"
				],
				"setting": [
					"Consensual"
				]
			}
		},
		{
			"_row": 12,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Relevance": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Avoided damage": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Windfall profit": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Scope of effect": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Level of resilience": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Vulnerability": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Efficiency - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - Administrative burden": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - Total cost": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Benefits": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Acceptability - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 2
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - General": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 3,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 3,
					"feasibility": 4,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 3,
					"feasibility": 4,
					"availability of information": 4
				},
				"Robustness - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Robustness - Regret / no - regret": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Adaptive capacity - General": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Institutional requirements": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Dependencies - Barriers": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Ease of implementation": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 3,
					"feasibility": 4,
					"availability of information": 4
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - General": {
					"relevance": 1,
					"feasibility": 3,
					"availability of information": 5
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 1,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Quality of the process": {
					"relevance": 1,
					"feasibility": 5,
					"availability of information": 5
				},
				"Lessons learnt - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Lessons learnt - Capacity building": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				}
			},
			"_name": "Jena Winzerberge",
			"contextDimensions": {
				"sectors": [
					"Production Systems and Physical Infrastructures"
				],
				"impacts": [
					"Extreme Temperature"
				],
				"perspective": [
					"prospective"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Top-Down"
				],
				"orientation": [
					"Analytically"
				],
				"setting": [
					"Consensual"
				]
			}
		},
		{
			"_row": 13,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 2
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Avoided damage": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Windfall profit": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Scope of effect": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Level of resilience": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Vulnerability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 3
				},
				"Efficiency - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Administrative burden": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Equity - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Acceptability - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Coherence - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Robustness - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Robustness - Regret / no - regret": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Adaptive capacity - General": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Institutional requirements": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Dependencies - Barriers": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Ease of implementation": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Deliverability and Feasibility - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - Quality of the process": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Lessons learnt - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Lessons learnt - Capacity building": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				}
			},
			"_name": "Health: Cornwall UK",
			"contextDimensions": {
				"sectors": [
					"Health and Social Policies"
				],
				"impacts": [],
				"perspective": [],
				"integration": [],
				"approach": [],
				"orientation": [],
				"setting": []
			}
		},
		{
			"_row": 14,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 4,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Relevance": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Effectiveness - Avoided damage": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Effectiveness - Windfall profit": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 3,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Scope of effect": {
					"relevance": 5,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Level of resilience": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Vulnerability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 2
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Administrative burden": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Equity - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 3,
					"feasibility": 4,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Acceptability - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 2
				},
				"Coherence - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Robustness - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Robustness - Regret / no - regret": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 2
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Adaptive capacity - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Dependencies - Institutional requirements": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Dependencies - Barriers": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Dependencies - Ease of implementation": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Deliverability and Feasibility - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Participation - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - Quality of the process": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Lessons learnt - General": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Lessons learnt - Capacity building": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				}
			},
			"_name": "Leeds",
			"contextDimensions": {
				"sectors": [
					"Production Systems and Physical Infrastructures"
				],
				"impacts": [
					"Flooding"
				],
				"perspective": [
					"prospective"
				],
				"integration": [],
				"approach": [
					"Top-Down"
				],
				"orientation": [],
				"setting": []
			}
		},
		{
			"_row": 15,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 5,
					"feasibility": 1,
					"availability of information": 3
				},
				"Effectiveness - Relevance": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 1
				},
				"Effectiveness - Avoided damage": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Windfall profit": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Effectiveness - Scope of effect": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Level of resilience": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Vulnerability": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - Administrative burden": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - Benefits": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Equity - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Sustainability_x000D_": {
					"relevance": 0
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Acceptability - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - General": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Robustness - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Robustness - Regret / no - regret": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Adaptive capacity - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Dependencies - Institutional requirements": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Dependencies - Barriers": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Ease of implementation": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Participation - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Participation - Quality of the process": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 1
				},
				"Lessons learnt - General": {
					"relevance": 3,
					"feasibility": 1,
					"availability of information": 1
				},
				"Lessons learnt - Capacity building": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				}
			},
			"_name": "South Devon Coast/Dawlish",
			"contextDimensions": {
				"sectors": [
					"Coastal and Marine systems",
					"Transport",
					"Tourism"
				],
				"impacts": [
					"Flooding",
					"Coastal Erosion",
					"Soil Erosion",
					"Damages from extreme weather related events (storms, ice and snow)"
				],
				"perspective": [
					"prospective"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Both"
				],
				"orientation": [
					"Process"
				],
				"setting": [
					"Both"
				]
			}
		},
		{
			"_row": 16,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Avoided damage": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Windfall profit": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 0,
					"availability of information": 0
				},
				"Effectiveness - Triggering incentive _x000D_": {
					"feasibility": 0
				},
				"Effectiveness - Scope of effect": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Level of resilience": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Vulnerability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Administrative burden": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Equity - General": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Acceptability - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Coherence - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 5,
					"feasibility": 0,
					"availability of information": 0
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 0
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 0
				},
				"Coherence - Interactions (conflicts/synergies) with other measures - Vertical integration": {
					"feasibility": 0,
					"availability of information": 0
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 0
				},
				"Coherence - Interactions (conflicts/synergies) with other measures - Horizontal integration": {
					"feasibility": 0,
					"availability of information": 0
				},
				"Robustness - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Robustness - Regret / no - regret": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Adaptive capacity - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Dependencies - Institutional requirements": {
					"relevance": 1,
					"feasibility": 2,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Barriers": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Dependencies - Ease of implementation": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 2
				},
				"Deliverability and Feasibility - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 1
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 2
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Participation - Quality of the process": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Lessons learnt - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Lessons learnt - Capacity building": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				}
			},
			"_name": "Venice",
			"contextDimensions": {
				"sectors": [
					"Coastal and Marine systems"
				],
				"impacts": [
					"Flooding"
				],
				"perspective": [
					"retrospective"
				],
				"integration": [
					"single measure"
				],
				"approach": [
					"Both"
				],
				"orientation": [
					"Analytically"
				],
				"setting": []
			}
		},
		{
			"_row": 17,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 1,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 1,
					"availability of information": 4
				},
				"Effectiveness - Avoided damage": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 5
				},
				"Effectiveness - Windfall profit": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 1
				},
				"Effectiveness - Scope of effect": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Level of resilience": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 1
				},
				"Effectiveness - Vulnerability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - Administrative burden": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Benefits": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 4,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Acceptability - General": {
					"relevance": 3,
					"feasibility": 1,
					"availability of information": 1
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 5
				},
				"Coherence - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 0
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Robustness - General": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Robustness - Regret / no - regret": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Adaptive capacity - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Dependencies - Institutional requirements": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Barriers": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Dependencies - Ease of implementation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Quality of the process": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Lessons learnt - General": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Lessons learnt - Capacity building": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				}
			},
			"_name": "Copenhagen",
			"contextDimensions": {
				"sectors": [
					"Biodiversity & Ecosystems",
					"Transport",
					"Production Systems and Physical Infrastructures"
				],
				"impacts": [
					"Flooding",
					"Coastal Erosion",
					"Damages from extreme weather related events (storms, ice and snow)"
				],
				"perspective": [
					"both"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Bottom-up"
				],
				"orientation": [
					"Process"
				],
				"setting": [
					"Consensual"
				]
			}
		},
		{
			"_row": 18,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Effectiveness - Relevance": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Avoided damage": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Windfall profit_x000D_": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Scope of effect": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Level of resilience": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Vulnerability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Efficiency - General": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 4
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 5
				},
				"Efficiency - Administrative burden": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Total cost": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Equity - General": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 1,
					"feasibility": 1,
					"availability of information": 1
				},
				"Acceptability - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Coherence - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Robustness - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Robustness - Regret / no - regret": {
					"relevance": 0,
					"feasibility": 0,
					"availability of information": 0
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Adaptive capacity - General": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Dependencies - Institutional requirements": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Dependencies - Barriers": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Dependencies - Ease of implementation": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - General": {
					"relevance": 2,
					"feasibility": 2,
					"availability of information": 2
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 2,
					"feasibility": 3,
					"availability of information": 2
				},
				"Participation - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Participation - Quality of the process": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Lessons learnt - General": {
					"relevance": 5,
					"feasibility": 5,
					"availability of information": 5
				},
				"Lessons learnt - Capacity building": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				}
			},
			"_name": "Kalundborg",
			"contextDimensions": {
				"sectors": [
					"Biodiversity & Ecosystems",
					"Transport",
					"Production Systems and Physical Infrastructures"
				],
				"impacts": [
					"Flooding",
					"Coastal Erosion",
					"Damages from extreme weather related events (storms, ice and snow)"
				],
				"perspective": [
					"retrospective"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Bottom-up"
				],
				"orientation": [
					"Process"
				],
				"setting": [
					"Consensual"
				]
			}
		},
		{
			"_row": 19,
			"rates": {
				"Effectiveness - General description": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Relevance": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Effectiveness - Avoided damage": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Windfall profit": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Triggering incentive": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Effectiveness - Scope of effect": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Level of resilience": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Vulnerability": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Reduction of sensitivity": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Effectiveness - Reduction of exposure": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Effectiveness - Increased adaptive capacity": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - General": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Cost/benefit ratio": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Administrative burden": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - Total cost": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Efficiency - Benefits": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 2
				},
				"Efficiency - Uncertainty of evaluated costs and benefits": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Equity - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Equity - Proportion of beneficiaries": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Equity - Attention to the most vulnerable groups": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Equity - Supports fair allocation of risks": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Sustainability": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Impacts": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Side effects - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on innovation and competitive advantage": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Economic side effects - Effect on employment": {
					"relevance": 2,
					"feasibility": 1,
					"availability of information": 1
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Synergies with climate mitigation": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Positive environmental effect": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Sustainability, Impacts and Side - effects - Environmental side effects - Avoiding of maladaptation": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Social side effects - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Sustainability, Impacts and Side - effects - Social side effects - Distributional impacts": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Acceptability - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - Incorporation of local/ traditional knowledge": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Acceptability - Endorsement of political leaders and/or implementers": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 3
				},
				"Coherence - General": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Coherence - Interactions (conflicts/synergies) with other measures": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Integration with policy domains, programmes or projects": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Integration with policy domains, programmes or projects - Vertical integration": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Coherence - Integration with policy domains, programmes or projects - Horizontal integration": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Robustness - General": {
					"relevance": 5,
					"feasibility": 4,
					"availability of information": 4
				},
				"Robustness - Regret / no - regret": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 2
				},
				"Evaluating adaptation - Purpose of the evaluation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Evaluating adaptation - Evaluating capacity": {
					"relevance": 3,
					"feasibility": 4,
					"availability of information": 4
				},
				"Adaptive capacity - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of actors": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 2
				},
				"Adaptive capacity - Capacity of institutions/ organisations": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - (General) Prerequisite requirements": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 3
				},
				"Dependencies - Institutional requirements": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 3
				},
				"Dependencies - Institutional consistency (compatibility)": {
					"relevance": 2,
					"feasibility": 3,
					"availability of information": 4
				},
				"Dependencies - Barriers": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Dependencies - Ease of implementation": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Deliverability and Feasibility - General": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				},
				"Deliverability and Feasibility - Repeatability": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Stakeholder implementability": {
					"relevance": 5,
					"feasibility": 2,
					"availability of information": 2
				},
				"Deliverability and Feasibility - Existing window of opportunity": {
					"relevance": 3,
					"feasibility": 2,
					"availability of information": 3
				},
				"Deliverability and Feasibility - Level of autonomy": {
					"relevance": 3,
					"feasibility": 3,
					"availability of information": 3
				},
				"Flexibility - Potential for adjustments to different climate scenarios and socio - economic developments": {
					"relevance": 5,
					"feasibility": 3,
					"availability of information": 3
				},
				"Participation - General": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - Purpose of stakeholder participation": {
					"relevance": 4,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - Scope of stakeholder participation": {
					"relevance": 3,
					"feasibility": 4,
					"availability of information": 4
				},
				"Participation - Quality of the process": {
					"relevance": 3,
					"feasibility": 4,
					"availability of information": 4
				},
				"Lessons learnt - General": {
					"relevance": 4,
					"feasibility": 3,
					"availability of information": 3
				},
				"Lessons learnt - Capacity building": {
					"relevance": 4,
					"feasibility": 2,
					"availability of information": 2
				}
			},
			"_name": "Rotterdam",
			"contextDimensions": {
				"sectors": [
					"Water resources"
				],
				"impacts": [
					"Flooding",
					"Droughts"
				],
				"perspective": [
					"both"
				],
				"integration": [
					"integrated evaluation"
				],
				"approach": [
					"Both"
				],
				"orientation": [
					"Analytically"
				],
				"setting": [
					"Consensual"
				]
			}
		}
	];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var nunjucks = __webpack_require__(51);
	var env;
	if (!nunjucks.currentEnv){
		env = nunjucks.currentEnv = new nunjucks.Environment([], { autoescape: true });
	} else {
		env = nunjucks.currentEnv;
	}
	var configure = __webpack_require__(52)(env);
	var dependencies = nunjucks.webpackDependencies || (nunjucks.webpackDependencies = {});
	
	
	
	
	var shim = __webpack_require__(53);
	
	
	(function() {(nunjucks.nunjucksPrecompiled = nunjucks.nunjucksPrecompiled || {})["app/plugins/criteria/criteria-main.html"] = (function() {
	function root(env, context, frame, runtime, cb) {
	var lineno = null;
	var colno = null;
	var output = "";
	try {
	var parentTemplate = null;
	output += "<div class=\"row\">\n    <div class=\"col-sm-4 col-sm-offset-4\">\n        <button type=\"button\" class=\"btn btn-primary btn-block\"><h4 style=\"margin-top: 4px; margin-bottom: 4px; letter-spacing: 1px;\">Show criteria</h4></button>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-10 col-sm-offset-1\" id=\"mn-r-criteria-list\">\n    </div>\n</div>\n";
	if(parentTemplate) {
	parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
	} else {
	cb(null, output);
	}
	;
	} catch (e) {
	  cb(runtime.handleError(e, lineno, colno));
	}
	}
	return {
	root: root
	};
	
	})();
	})();
	
	
	
	module.exports = shim(nunjucks, env, nunjucks.nunjucksPrecompiled["app/plugins/criteria/criteria-main.html"] , dependencies)

/***/ },
/* 51 */
/***/ function(module, exports) {

	/*! Browser bundle of nunjucks 2.4.2 (slim, only works with precompiled templates) */
	var nunjucks =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var lib = __webpack_require__(1);
		var env = __webpack_require__(2);
		var Loader = __webpack_require__(11);
		var loaders = __webpack_require__(3);
		var precompile = __webpack_require__(3);
	
		module.exports = {};
		module.exports.Environment = env.Environment;
		module.exports.Template = env.Template;
	
		module.exports.Loader = Loader;
		module.exports.FileSystemLoader = loaders.FileSystemLoader;
		module.exports.PrecompiledLoader = loaders.PrecompiledLoader;
		module.exports.WebLoader = loaders.WebLoader;
	
		module.exports.compiler = __webpack_require__(3);
		module.exports.parser = __webpack_require__(3);
		module.exports.lexer = __webpack_require__(3);
		module.exports.runtime = __webpack_require__(8);
		module.exports.lib = lib;
		module.exports.nodes = __webpack_require__(3);
	
		module.exports.installJinjaCompat = __webpack_require__(12);
	
		// A single instance of an environment, since this is so commonly used
	
		var e;
		module.exports.configure = function(templatesPath, opts) {
		    opts = opts || {};
		    if(lib.isObject(templatesPath)) {
		        opts = templatesPath;
		        templatesPath = null;
		    }
	
		    var TemplateLoader;
		    if(loaders.FileSystemLoader) {
		        TemplateLoader = new loaders.FileSystemLoader(templatesPath, {
		            watch: opts.watch,
		            noCache: opts.noCache
		        });
		    }
		    else if(loaders.WebLoader) {
		        TemplateLoader = new loaders.WebLoader(templatesPath, {
		            useCache: opts.web && opts.web.useCache,
		            async: opts.web && opts.web.async
		        });
		    }
	
		    e = new env.Environment(TemplateLoader, opts);
	
		    if(opts && opts.express) {
		        e.express(opts.express);
		    }
	
		    return e;
		};
	
		module.exports.compile = function(src, env, path, eagerCompile) {
		    if(!e) {
		        module.exports.configure();
		    }
		    return new module.exports.Template(src, env, path, eagerCompile);
		};
	
		module.exports.render = function(name, ctx, cb) {
		    if(!e) {
		        module.exports.configure();
		    }
	
		    return e.render(name, ctx, cb);
		};
	
		module.exports.renderString = function(src, ctx, cb) {
		    if(!e) {
		        module.exports.configure();
		    }
	
		    return e.renderString(src, ctx, cb);
		};
	
		if(precompile) {
		    module.exports.precompile = precompile.precompile;
		    module.exports.precompileString = precompile.precompileString;
		}
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		'use strict';
	
		var ArrayProto = Array.prototype;
		var ObjProto = Object.prototype;
	
		var escapeMap = {
		    '&': '&amp;',
		    '"': '&quot;',
		    '\'': '&#39;',
		    '<': '&lt;',
		    '>': '&gt;'
		};
	
		var escapeRegex = /[&"'<>]/g;
	
		var lookupEscape = function(ch) {
		    return escapeMap[ch];
		};
	
		var exports = module.exports = {};
	
		exports.prettifyError = function(path, withInternals, err) {
		    // jshint -W022
		    // http://jslinterrors.com/do-not-assign-to-the-exception-parameter
		    if (!err.Update) {
		        // not one of ours, cast it
		        err = new exports.TemplateError(err);
		    }
		    err.Update(path);
	
		    // Unless they marked the dev flag, show them a trace from here
		    if (!withInternals) {
		        var old = err;
		        err = new Error(old.message);
		        err.name = old.name;
		    }
	
		    return err;
		};
	
		exports.TemplateError = function(message, lineno, colno) {
		    var err = this;
	
		    if (message instanceof Error) { // for casting regular js errors
		        err = message;
		        message = message.name + ': ' + message.message;
	
		        try {
		            if(err.name = '') {}
		        }
		        catch(e) {
		            // If we can't set the name of the error object in this
		            // environment, don't use it
		            err = this;
		        }
		    } else {
		        if(Error.captureStackTrace) {
		            Error.captureStackTrace(err);
		        }
		    }
	
		    err.name = 'Template render error';
		    err.message = message;
		    err.lineno = lineno;
		    err.colno = colno;
		    err.firstUpdate = true;
	
		    err.Update = function(path) {
		        var message = '(' + (path || 'unknown path') + ')';
	
		        // only show lineno + colno next to path of template
		        // where error occurred
		        if (this.firstUpdate) {
		            if(this.lineno && this.colno) {
		                message += ' [Line ' + this.lineno + ', Column ' + this.colno + ']';
		            }
		            else if(this.lineno) {
		                message += ' [Line ' + this.lineno + ']';
		            }
		        }
	
		        message += '\n ';
		        if (this.firstUpdate) {
		            message += ' ';
		        }
	
		        this.message = message + (this.message || '');
		        this.firstUpdate = false;
		        return this;
		    };
	
		    return err;
		};
	
		exports.TemplateError.prototype = Error.prototype;
	
		exports.escape = function(val) {
		  return val.replace(escapeRegex, lookupEscape);
		};
	
		exports.isFunction = function(obj) {
		    return ObjProto.toString.call(obj) === '[object Function]';
		};
	
		exports.isArray = Array.isArray || function(obj) {
		    return ObjProto.toString.call(obj) === '[object Array]';
		};
	
		exports.isString = function(obj) {
		    return ObjProto.toString.call(obj) === '[object String]';
		};
	
		exports.isObject = function(obj) {
		    return ObjProto.toString.call(obj) === '[object Object]';
		};
	
		exports.groupBy = function(obj, val) {
		    var result = {};
		    var iterator = exports.isFunction(val) ? val : function(obj) { return obj[val]; };
		    for(var i=0; i<obj.length; i++) {
		        var value = obj[i];
		        var key = iterator(value, i);
		        (result[key] || (result[key] = [])).push(value);
		    }
		    return result;
		};
	
		exports.toArray = function(obj) {
		    return Array.prototype.slice.call(obj);
		};
	
		exports.without = function(array) {
		    var result = [];
		    if (!array) {
		        return result;
		    }
		    var index = -1,
		    length = array.length,
		    contains = exports.toArray(arguments).slice(1);
	
		    while(++index < length) {
		        if(exports.indexOf(contains, array[index]) === -1) {
		            result.push(array[index]);
		        }
		    }
		    return result;
		};
	
		exports.extend = function(obj, obj2) {
		    for(var k in obj2) {
		        obj[k] = obj2[k];
		    }
		    return obj;
		};
	
		exports.repeat = function(char_, n) {
		    var str = '';
		    for(var i=0; i<n; i++) {
		        str += char_;
		    }
		    return str;
		};
	
		exports.each = function(obj, func, context) {
		    if(obj == null) {
		        return;
		    }
	
		    if(ArrayProto.each && obj.each === ArrayProto.each) {
		        obj.forEach(func, context);
		    }
		    else if(obj.length === +obj.length) {
		        for(var i=0, l=obj.length; i<l; i++) {
		            func.call(context, obj[i], i, obj);
		        }
		    }
		};
	
		exports.map = function(obj, func) {
		    var results = [];
		    if(obj == null) {
		        return results;
		    }
	
		    if(ArrayProto.map && obj.map === ArrayProto.map) {
		        return obj.map(func);
		    }
	
		    for(var i=0; i<obj.length; i++) {
		        results[results.length] = func(obj[i], i);
		    }
	
		    if(obj.length === +obj.length) {
		        results.length = obj.length;
		    }
	
		    return results;
		};
	
		exports.asyncIter = function(arr, iter, cb) {
		    var i = -1;
	
		    function next() {
		        i++;
	
		        if(i < arr.length) {
		            iter(arr[i], i, next, cb);
		        }
		        else {
		            cb();
		        }
		    }
	
		    next();
		};
	
		exports.asyncFor = function(obj, iter, cb) {
		    var keys = exports.keys(obj);
		    var len = keys.length;
		    var i = -1;
	
		    function next() {
		        i++;
		        var k = keys[i];
	
		        if(i < len) {
		            iter(k, obj[k], i, len, next);
		        }
		        else {
		            cb();
		        }
		    }
	
		    next();
		};
	
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
		exports.indexOf = Array.prototype.indexOf ?
		    function (arr, searchElement, fromIndex) {
		        return Array.prototype.indexOf.call(arr, searchElement, fromIndex);
		    } :
		    function (arr, searchElement, fromIndex) {
		        var length = this.length >>> 0; // Hack to convert object.length to a UInt32
	
		        fromIndex = +fromIndex || 0;
	
		        if(Math.abs(fromIndex) === Infinity) {
		            fromIndex = 0;
		        }
	
		        if(fromIndex < 0) {
		            fromIndex += length;
		            if (fromIndex < 0) {
		                fromIndex = 0;
		            }
		        }
	
		        for(;fromIndex < length; fromIndex++) {
		            if (arr[fromIndex] === searchElement) {
		                return fromIndex;
		            }
		        }
	
		        return -1;
		    };
	
		if(!Array.prototype.map) {
		    Array.prototype.map = function() {
		        throw new Error('map is unimplemented for this js engine');
		    };
		}
	
		exports.keys = function(obj) {
		    if(Object.prototype.keys) {
		        return obj.keys();
		    }
		    else {
		        var keys = [];
		        for(var k in obj) {
		            if(obj.hasOwnProperty(k)) {
		                keys.push(k);
		            }
		        }
		        return keys;
		    }
		};
	
		exports.inOperator = function (key, val) {
		    if (exports.isArray(val)) {
		        return exports.indexOf(val, key) !== -1;
		    } else if (exports.isObject(val)) {
		        return key in val;
		    } else if (exports.isString(val)) {
		        return val.indexOf(key) !== -1;
		    } else {
		        throw new Error('Cannot use "in" operator to search for "'
		            + key + '" in unexpected types.');
		    }
		};
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var path = __webpack_require__(3);
		var asap = __webpack_require__(4);
		var lib = __webpack_require__(1);
		var Obj = __webpack_require__(6);
		var compiler = __webpack_require__(3);
		var builtin_filters = __webpack_require__(7);
		var builtin_loaders = __webpack_require__(3);
		var runtime = __webpack_require__(8);
		var globals = __webpack_require__(9);
		var Frame = runtime.Frame;
		var Template;
	
		// Unconditionally load in this loader, even if no other ones are
		// included (possible in the slim browser build)
		builtin_loaders.PrecompiledLoader = __webpack_require__(10);
	
		// If the user is using the async API, *always* call it
		// asynchronously even if the template was synchronous.
		function callbackAsap(cb, err, res) {
		    asap(function() { cb(err, res); });
		}
	
		var Environment = Obj.extend({
		    init: function(loaders, opts) {
		        // The dev flag determines the trace that'll be shown on errors.
		        // If set to true, returns the full trace from the error point,
		        // otherwise will return trace starting from Template.render
		        // (the full trace from within nunjucks may confuse developers using
		        //  the library)
		        // defaults to false
		        opts = this.opts = opts || {};
		        this.opts.dev = !!opts.dev;
	
		        // The autoescape flag sets global autoescaping. If true,
		        // every string variable will be escaped by default.
		        // If false, strings can be manually escaped using the `escape` filter.
		        // defaults to true
		        this.opts.autoescape = opts.autoescape != null ? opts.autoescape : true;
	
		        // If true, this will make the system throw errors if trying
		        // to output a null or undefined value
		        this.opts.throwOnUndefined = !!opts.throwOnUndefined;
		        this.opts.trimBlocks = !!opts.trimBlocks;
		        this.opts.lstripBlocks = !!opts.lstripBlocks;
	
		        this.loaders = [];
	
		        if(!loaders) {
		            // The filesystem loader is only available server-side
		            if(builtin_loaders.FileSystemLoader) {
		                this.loaders = [new builtin_loaders.FileSystemLoader('views')];
		            }
		            else if(builtin_loaders.WebLoader) {
		                this.loaders = [new builtin_loaders.WebLoader('/views')];
		            }
		        }
		        else {
		            this.loaders = lib.isArray(loaders) ? loaders : [loaders];
		        }
	
		        // It's easy to use precompiled templates: just include them
		        // before you configure nunjucks and this will automatically
		        // pick it up and use it
		        if((true) && window.nunjucksPrecompiled) {
		            this.loaders.unshift(
		                new builtin_loaders.PrecompiledLoader(window.nunjucksPrecompiled)
		            );
		        }
	
		        this.initCache();
	
		        this.globals = globals();
		        this.filters = {};
		        this.asyncFilters = [];
		        this.extensions = {};
		        this.extensionsList = [];
	
		        for(var name in builtin_filters) {
		            this.addFilter(name, builtin_filters[name]);
		        }
		    },
	
		    initCache: function() {
		        // Caching and cache busting
		        lib.each(this.loaders, function(loader) {
		            loader.cache = {};
	
		            if(typeof loader.on === 'function') {
		                loader.on('update', function(template) {
		                    loader.cache[template] = null;
		                });
		            }
		        });
		    },
	
		    addExtension: function(name, extension) {
		        extension._name = name;
		        this.extensions[name] = extension;
		        this.extensionsList.push(extension);
		        return this;
		    },
	
		    removeExtension: function(name) {
		        var extension = this.getExtension(name);
		        if (!extension) return;
	
		        this.extensionsList = lib.without(this.extensionsList, extension);
		        delete this.extensions[name];
		    },
	
		    getExtension: function(name) {
		        return this.extensions[name];
		    },
	
		    hasExtension: function(name) {
		        return !!this.extensions[name];
		    },
	
		    addGlobal: function(name, value) {
		        this.globals[name] = value;
		        return this;
		    },
	
		    getGlobal: function(name) {
		        if(typeof this.globals[name] === 'undefined') {
		            throw new Error('global not found: ' + name);
		        }
		        return this.globals[name];
		    },
	
		    addFilter: function(name, func, async) {
		        var wrapped = func;
	
		        if(async) {
		            this.asyncFilters.push(name);
		        }
		        this.filters[name] = wrapped;
		        return this;
		    },
	
		    getFilter: function(name) {
		        if(!this.filters[name]) {
		            throw new Error('filter not found: ' + name);
		        }
		        return this.filters[name];
		    },
	
		    resolveTemplate: function(loader, parentName, filename) {
		        var isRelative = (loader.isRelative && parentName)? loader.isRelative(filename) : false;
		        return (isRelative && loader.resolve)? loader.resolve(parentName, filename) : filename;
		    },
	
		    getTemplate: function(name, eagerCompile, parentName, ignoreMissing, cb) {
		        var that = this;
		        var tmpl = null;
		        if(name && name.raw) {
		            // this fixes autoescape for templates referenced in symbols
		            name = name.raw;
		        }
	
		        if(lib.isFunction(parentName)) {
		            cb = parentName;
		            parentName = null;
		            eagerCompile = eagerCompile || false;
		        }
	
		        if(lib.isFunction(eagerCompile)) {
		            cb = eagerCompile;
		            eagerCompile = false;
		        }
	
		        if (name instanceof Template) {
		             tmpl = name;
		        }
		        else if(typeof name !== 'string') {
		            throw new Error('template names must be a string: ' + name);
		        }
		        else {
		            for (var i = 0; i < this.loaders.length; i++) {
		                var _name = this.resolveTemplate(this.loaders[i], parentName, name);
		                tmpl = this.loaders[i].cache[_name];
		                if (tmpl) break;
		            }
		        }
	
		        if(tmpl) {
		            if(eagerCompile) {
		                tmpl.compile();
		            }
	
		            if(cb) {
		                cb(null, tmpl);
		            }
		            else {
		                return tmpl;
		            }
		        } else {
		            var syncResult;
		            var _this = this;
	
		            var createTemplate = function(err, info) {
		                if(!info && !err) {
		                    if(!ignoreMissing) {
		                        err = new Error('template not found: ' + name);
		                    }
		                }
	
		                if (err) {
		                    if(cb) {
		                        cb(err);
		                    }
		                    else {
		                        throw err;
		                    }
		                }
		                else {
		                    var tmpl;
		                    if(info) {
		                        tmpl = new Template(info.src, _this,
		                                            info.path, eagerCompile);
	
		                        if(!info.noCache) {
		                            info.loader.cache[name] = tmpl;
		                        }
		                    }
		                    else {
		                        tmpl = new Template('', _this,
		                                            '', eagerCompile);
		                    }
	
		                    if(cb) {
		                        cb(null, tmpl);
		                    }
		                    else {
		                        syncResult = tmpl;
		                    }
		                }
		            };
	
		            lib.asyncIter(this.loaders, function(loader, i, next, done) {
		                function handle(err, src) {
		                    if(err) {
		                        done(err);
		                    }
		                    else if(src) {
		                        src.loader = loader;
		                        done(null, src);
		                    }
		                    else {
		                        next();
		                    }
		                }
	
		                // Resolve name relative to parentName
		                name = that.resolveTemplate(loader, parentName, name);
	
		                if(loader.async) {
		                    loader.getSource(name, handle);
		                }
		                else {
		                    handle(null, loader.getSource(name));
		                }
		            }, createTemplate);
	
		            return syncResult;
		        }
		    },
	
		    express: function(app) {
		        var env = this;
	
		        function NunjucksView(name, opts) {
		            this.name          = name;
		            this.path          = name;
		            this.defaultEngine = opts.defaultEngine;
		            this.ext           = path.extname(name);
		            if (!this.ext && !this.defaultEngine) throw new Error('No default engine was specified and no extension was provided.');
		            if (!this.ext) this.name += (this.ext = ('.' !== this.defaultEngine[0] ? '.' : '') + this.defaultEngine);
		        }
	
		        NunjucksView.prototype.render = function(opts, cb) {
		          env.render(this.name, opts, cb);
		        };
	
		        app.set('view', NunjucksView);
		        return this;
		    },
	
		    render: function(name, ctx, cb) {
		        if(lib.isFunction(ctx)) {
		            cb = ctx;
		            ctx = null;
		        }
	
		        // We support a synchronous API to make it easier to migrate
		        // existing code to async. This works because if you don't do
		        // anything async work, the whole thing is actually run
		        // synchronously.
		        var syncResult = null;
	
		        this.getTemplate(name, function(err, tmpl) {
		            if(err && cb) {
		                callbackAsap(cb, err);
		            }
		            else if(err) {
		                throw err;
		            }
		            else {
		                syncResult = tmpl.render(ctx, cb);
		            }
		        });
	
		        return syncResult;
		    },
	
		    renderString: function(src, ctx, opts, cb) {
		        if(lib.isFunction(opts)) {
		            cb = opts;
		            opts = {};
		        }
		        opts = opts || {};
	
		        var tmpl = new Template(src, this, opts.path);
		        return tmpl.render(ctx, cb);
		    }
		});
	
		var Context = Obj.extend({
		    init: function(ctx, blocks, env) {
		        // Has to be tied to an environment so we can tap into its globals.
		        this.env = env || new Environment();
	
		        // Make a duplicate of ctx
		        this.ctx = {};
		        for(var k in ctx) {
		            if(ctx.hasOwnProperty(k)) {
		                this.ctx[k] = ctx[k];
		            }
		        }
	
		        this.blocks = {};
		        this.exported = [];
	
		        for(var name in blocks) {
		            this.addBlock(name, blocks[name]);
		        }
		    },
	
		    lookup: function(name) {
		        // This is one of the most called functions, so optimize for
		        // the typical case where the name isn't in the globals
		        if(name in this.env.globals && !(name in this.ctx)) {
		            return this.env.globals[name];
		        }
		        else {
		            return this.ctx[name];
		        }
		    },
	
		    setVariable: function(name, val) {
		        this.ctx[name] = val;
		    },
	
		    getVariables: function() {
		        return this.ctx;
		    },
	
		    addBlock: function(name, block) {
		        this.blocks[name] = this.blocks[name] || [];
		        this.blocks[name].push(block);
		        return this;
		    },
	
		    getBlock: function(name) {
		        if(!this.blocks[name]) {
		            throw new Error('unknown block "' + name + '"');
		        }
	
		        return this.blocks[name][0];
		    },
	
		    getSuper: function(env, name, block, frame, runtime, cb) {
		        var idx = lib.indexOf(this.blocks[name] || [], block);
		        var blk = this.blocks[name][idx + 1];
		        var context = this;
	
		        if(idx === -1 || !blk) {
		            throw new Error('no super block available for "' + name + '"');
		        }
	
		        blk(env, context, frame, runtime, cb);
		    },
	
		    addExport: function(name) {
		        this.exported.push(name);
		    },
	
		    getExported: function() {
		        var exported = {};
		        for(var i=0; i<this.exported.length; i++) {
		            var name = this.exported[i];
		            exported[name] = this.ctx[name];
		        }
		        return exported;
		    }
		});
	
		Template = Obj.extend({
		    init: function (src, env, path, eagerCompile) {
		        this.env = env || new Environment();
	
		        if(lib.isObject(src)) {
		            switch(src.type) {
		            case 'code': this.tmplProps = src.obj; break;
		            case 'string': this.tmplStr = src.obj; break;
		            }
		        }
		        else if(lib.isString(src)) {
		            this.tmplStr = src;
		        }
		        else {
		            throw new Error('src must be a string or an object describing ' +
		                            'the source');
		        }
	
		        this.path = path;
	
		        if(eagerCompile) {
		            var _this = this;
		            try {
		                _this._compile();
		            }
		            catch(err) {
		                throw lib.prettifyError(this.path, this.env.opts.dev, err);
		            }
		        }
		        else {
		            this.compiled = false;
		        }
		    },
	
		    render: function(ctx, parentFrame, cb) {
		        if (typeof ctx === 'function') {
		            cb = ctx;
		            ctx = {};
		        }
		        else if (typeof parentFrame === 'function') {
		            cb = parentFrame;
		            parentFrame = null;
		        }
	
		        var forceAsync = true;
		        if(parentFrame) {
		            // If there is a frame, we are being called from internal
		            // code of another template, and the internal system
		            // depends on the sync/async nature of the parent template
		            // to be inherited, so force an async callback
		            forceAsync = false;
		        }
	
		        var _this = this;
		        // Catch compile errors for async rendering
		        try {
		            _this.compile();
		        } catch (_err) {
		            var err = lib.prettifyError(this.path, this.env.opts.dev, _err);
		            if (cb) return callbackAsap(cb, err);
		            else throw err;
		        }
	
		        var context = new Context(ctx || {}, _this.blocks, _this.env);
		        var frame = parentFrame ? parentFrame.push(true) : new Frame();
		        frame.topLevel = true;
		        var syncResult = null;
	
		        _this.rootRenderFunc(
		            _this.env,
		            context,
		            frame || new Frame(),
		            runtime,
		            function(err, res) {
		                if(err) {
		                    err = lib.prettifyError(_this.path, _this.env.opts.dev, err);
		                }
	
		                if(cb) {
		                    if(forceAsync) {
		                        callbackAsap(cb, err, res);
		                    }
		                    else {
		                        cb(err, res);
		                    }
		                }
		                else {
		                    if(err) { throw err; }
		                    syncResult = res;
		                }
		            }
		        );
	
		        return syncResult;
		    },
	
	
		    getExported: function(ctx, parentFrame, cb) {
		        if (typeof ctx === 'function') {
		            cb = ctx;
		            ctx = {};
		        }
	
		        if (typeof parentFrame === 'function') {
		            cb = parentFrame;
		            parentFrame = null;
		        }
	
		        // Catch compile errors for async rendering
		        try {
		            this.compile();
		        } catch (e) {
		            if (cb) return cb(e);
		            else throw e;
		        }
	
		        var frame = parentFrame ? parentFrame.push() : new Frame();
		        frame.topLevel = true;
	
		        // Run the rootRenderFunc to populate the context with exported vars
		        var context = new Context(ctx || {}, this.blocks, this.env);
		        this.rootRenderFunc(this.env,
		                            context,
		                            frame,
		                            runtime,
		                            function(err) {
		        		        if ( err ) {
		        			    cb(err, null);
		        		        } else {
		        			    cb(null, context.getExported());
		        		        }
		                            });
		    },
	
		    compile: function() {
		        if(!this.compiled) {
		            this._compile();
		        }
		    },
	
		    _compile: function() {
		        var props;
	
		        if(this.tmplProps) {
		            props = this.tmplProps;
		        }
		        else {
		            var source = compiler.compile(this.tmplStr,
		                                          this.env.asyncFilters,
		                                          this.env.extensionsList,
		                                          this.path,
		                                          this.env.opts);
	
		            /* jslint evil: true */
		            var func = new Function(source);
		            props = func();
		        }
	
		        this.blocks = this._getBlocks(props);
		        this.rootRenderFunc = props.root;
		        this.compiled = true;
		    },
	
		    _getBlocks: function(props) {
		        var blocks = {};
	
		        for(var k in props) {
		            if(k.slice(0, 2) === 'b_') {
		                blocks[k.slice(2)] = props[k];
		            }
		        }
	
		        return blocks;
		    }
		});
	
		module.exports = {
		    Environment: Environment,
		    Template: Template
		};
	
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
	
		// rawAsap provides everything we need except exception management.
		var rawAsap = __webpack_require__(5);
		// RawTasks are recycled to reduce GC churn.
		var freeTasks = [];
		// We queue errors to ensure they are thrown in right order (FIFO).
		// Array-as-queue is good enough here, since we are just dealing with exceptions.
		var pendingErrors = [];
		var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);
	
		function throwFirstError() {
		    if (pendingErrors.length) {
		        throw pendingErrors.shift();
		    }
		}
	
		/**
		 * Calls a task as soon as possible after returning, in its own event, with priority
		 * over other events like animation, reflow, and repaint. An error thrown from an
		 * event will not interrupt, nor even substantially slow down the processing of
		 * other events, but will be rather postponed to a lower priority event.
		 * @param {{call}} task A callable object, typically a function that takes no
		 * arguments.
		 */
		module.exports = asap;
		function asap(task) {
		    var rawTask;
		    if (freeTasks.length) {
		        rawTask = freeTasks.pop();
		    } else {
		        rawTask = new RawTask();
		    }
		    rawTask.task = task;
		    rawAsap(rawTask);
		}
	
		// We wrap tasks with recyclable task objects.  A task object implements
		// `call`, just like a function.
		function RawTask() {
		    this.task = null;
		}
	
		// The sole purpose of wrapping the task is to catch the exception and recycle
		// the task object after its single use.
		RawTask.prototype.call = function () {
		    try {
		        this.task.call();
		    } catch (error) {
		        if (asap.onerror) {
		            // This hook exists purely for testing purposes.
		            // Its name will be periodically randomized to break any code that
		            // depends on its existence.
		            asap.onerror(error);
		        } else {
		            // In a web browser, exceptions are not fatal. However, to avoid
		            // slowing down the queue of pending tasks, we rethrow the error in a
		            // lower priority turn.
		            pendingErrors.push(error);
		            requestErrorThrow();
		        }
		    } finally {
		        this.task = null;
		        freeTasks[freeTasks.length] = this;
		    }
		};
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
		// Use the fastest means possible to execute a task in its own turn, with
		// priority over other events including IO, animation, reflow, and redraw
		// events in browsers.
		//
		// An exception thrown by a task will permanently interrupt the processing of
		// subsequent tasks. The higher level `asap` function ensures that if an
		// exception is thrown by a task, that the task queue will continue flushing as
		// soon as possible, but if you use `rawAsap` directly, you are responsible to
		// either ensure that no exceptions are thrown from your task, or to manually
		// call `rawAsap.requestFlush` if an exception is thrown.
		module.exports = rawAsap;
		function rawAsap(task) {
		    if (!queue.length) {
		        requestFlush();
		        flushing = true;
		    }
		    // Equivalent to push, but avoids a function call.
		    queue[queue.length] = task;
		}
	
		var queue = [];
		// Once a flush has been requested, no further calls to `requestFlush` are
		// necessary until the next `flush` completes.
		var flushing = false;
		// `requestFlush` is an implementation-specific method that attempts to kick
		// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
		// the event queue before yielding to the browser's own event loop.
		var requestFlush;
		// The position of the next task to execute in the task queue. This is
		// preserved between calls to `flush` so that it can be resumed if
		// a task throws an exception.
		var index = 0;
		// If a task schedules additional tasks recursively, the task queue can grow
		// unbounded. To prevent memory exhaustion, the task queue will periodically
		// truncate already-completed tasks.
		var capacity = 1024;
	
		// The flush function processes all tasks that have been scheduled with
		// `rawAsap` unless and until one of those tasks throws an exception.
		// If a task throws an exception, `flush` ensures that its state will remain
		// consistent and will resume where it left off when called again.
		// However, `flush` does not make any arrangements to be called again if an
		// exception is thrown.
		function flush() {
		    while (index < queue.length) {
		        var currentIndex = index;
		        // Advance the index before calling the task. This ensures that we will
		        // begin flushing on the next task the task throws an error.
		        index = index + 1;
		        queue[currentIndex].call();
		        // Prevent leaking memory for long chains of recursive calls to `asap`.
		        // If we call `asap` within tasks scheduled by `asap`, the queue will
		        // grow, but to avoid an O(n) walk for every task we execute, we don't
		        // shift tasks off the queue after they have been executed.
		        // Instead, we periodically shift 1024 tasks off the queue.
		        if (index > capacity) {
		            // Manually shift all values starting at the index back to the
		            // beginning of the queue.
		            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
		                queue[scan] = queue[scan + index];
		            }
		            queue.length -= index;
		            index = 0;
		        }
		    }
		    queue.length = 0;
		    index = 0;
		    flushing = false;
		}
	
		// `requestFlush` is implemented using a strategy based on data collected from
		// every available SauceLabs Selenium web driver worker at time of writing.
		// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	
		// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
		// have WebKitMutationObserver but not un-prefixed MutationObserver.
		// Must use `global` instead of `window` to work in both frames and web
		// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
		var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;
	
		// MutationObservers are desirable because they have high priority and work
		// reliably everywhere they are implemented.
		// They are implemented in all modern browsers.
		//
		// - Android 4-4.3
		// - Chrome 26-34
		// - Firefox 14-29
		// - Internet Explorer 11
		// - iPad Safari 6-7.1
		// - iPhone Safari 7-7.1
		// - Safari 6-7
		if (typeof BrowserMutationObserver === "function") {
		    requestFlush = makeRequestCallFromMutationObserver(flush);
	
		// MessageChannels are desirable because they give direct access to the HTML
		// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
		// 11-12, and in web workers in many engines.
		// Although message channels yield to any queued rendering and IO tasks, they
		// would be better than imposing the 4ms delay of timers.
		// However, they do not work reliably in Internet Explorer or Safari.
	
		// Internet Explorer 10 is the only browser that has setImmediate but does
		// not have MutationObservers.
		// Although setImmediate yields to the browser's renderer, it would be
		// preferrable to falling back to setTimeout since it does not have
		// the minimum 4ms penalty.
		// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
		// Desktop to a lesser extent) that renders both setImmediate and
		// MessageChannel useless for the purposes of ASAP.
		// https://github.com/kriskowal/q/issues/396
	
		// Timers are implemented universally.
		// We fall back to timers in workers in most engines, and in foreground
		// contexts in the following browsers.
		// However, note that even this simple case requires nuances to operate in a
		// broad spectrum of browsers.
		//
		// - Firefox 3-13
		// - Internet Explorer 6-9
		// - iPad Safari 4.3
		// - Lynx 2.8.7
		} else {
		    requestFlush = makeRequestCallFromTimer(flush);
		}
	
		// `requestFlush` requests that the high priority event queue be flushed as
		// soon as possible.
		// This is useful to prevent an error thrown in a task from stalling the event
		// queue if the exception handled by Node.js’s
		// `process.on("uncaughtException")` or by a domain.
		rawAsap.requestFlush = requestFlush;
	
		// To request a high priority event, we induce a mutation observer by toggling
		// the text of a text node between "1" and "-1".
		function makeRequestCallFromMutationObserver(callback) {
		    var toggle = 1;
		    var observer = new BrowserMutationObserver(callback);
		    var node = document.createTextNode("");
		    observer.observe(node, {characterData: true});
		    return function requestCall() {
		        toggle = -toggle;
		        node.data = toggle;
		    };
		}
	
		// The message channel technique was discovered by Malte Ubl and was the
		// original foundation for this library.
		// http://www.nonblocking.io/2011/06/windownexttick.html
	
		// Safari 6.0.5 (at least) intermittently fails to create message ports on a
		// page's first load. Thankfully, this version of Safari supports
		// MutationObservers, so we don't need to fall back in that case.
	
		// function makeRequestCallFromMessageChannel(callback) {
		//     var channel = new MessageChannel();
		//     channel.port1.onmessage = callback;
		//     return function requestCall() {
		//         channel.port2.postMessage(0);
		//     };
		// }
	
		// For reasons explained above, we are also unable to use `setImmediate`
		// under any circumstances.
		// Even if we were, there is another bug in Internet Explorer 10.
		// It is not sufficient to assign `setImmediate` to `requestFlush` because
		// `setImmediate` must be called *by name* and therefore must be wrapped in a
		// closure.
		// Never forget.
	
		// function makeRequestCallFromSetImmediate(callback) {
		//     return function requestCall() {
		//         setImmediate(callback);
		//     };
		// }
	
		// Safari 6.0 has a problem where timers will get lost while the user is
		// scrolling. This problem does not impact ASAP because Safari 6.0 supports
		// mutation observers, so that implementation is used instead.
		// However, if we ever elect to use timers in Safari, the prevalent work-around
		// is to add a scroll event listener that calls for a flush.
	
		// `setTimeout` does not call the passed callback if the delay is less than
		// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
		// even then.
	
		function makeRequestCallFromTimer(callback) {
		    return function requestCall() {
		        // We dispatch a timeout with a specified delay of 0 for engines that
		        // can reliably accommodate that request. This will usually be snapped
		        // to a 4 milisecond delay, but once we're flushing, there's no delay
		        // between events.
		        var timeoutHandle = setTimeout(handleTimer, 0);
		        // However, since this timer gets frequently dropped in Firefox
		        // workers, we enlist an interval handle that will try to fire
		        // an event 20 times per second until it succeeds.
		        var intervalHandle = setInterval(handleTimer, 50);
	
		        function handleTimer() {
		            // Whichever timer succeeds will cancel both timers and
		            // execute the callback.
		            clearTimeout(timeoutHandle);
		            clearInterval(intervalHandle);
		            callback();
		        }
		    };
		}
	
		// This is for `asap.js` only.
		// Its name will be periodically randomized to break any code that depends on
		// its existence.
		rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
	
		// ASAP was originally a nextTick shim included in Q. This was factored out
		// into this ASAP package. It was later adapted to RSVP which made further
		// amendments. These decisions, particularly to marginalize MessageChannel and
		// to capture the MutationObserver implementation in a closure, were integrated
		// back into ASAP proper.
		// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		'use strict';
	
		// A simple class system, more documentation to come
	
		function extend(cls, name, props) {
		    // This does that same thing as Object.create, but with support for IE8
		    var F = function() {};
		    F.prototype = cls.prototype;
		    var prototype = new F();
	
		    // jshint undef: false
		    var fnTest = /xyz/.test(function(){ xyz; }) ? /\bparent\b/ : /.*/;
		    props = props || {};
	
		    for(var k in props) {
		        var src = props[k];
		        var parent = prototype[k];
	
		        if(typeof parent === 'function' &&
		           typeof src === 'function' &&
		           fnTest.test(src)) {
		            /*jshint -W083 */
		            prototype[k] = (function (src, parent) {
		                return function() {
		                    // Save the current parent method
		                    var tmp = this.parent;
	
		                    // Set parent to the previous method, call, and restore
		                    this.parent = parent;
		                    var res = src.apply(this, arguments);
		                    this.parent = tmp;
	
		                    return res;
		                };
		            })(src, parent);
		        }
		        else {
		            prototype[k] = src;
		        }
		    }
	
		    prototype.typename = name;
	
		    var new_cls = function() {
		        if(prototype.init) {
		            prototype.init.apply(this, arguments);
		        }
		    };
	
		    new_cls.prototype = prototype;
		    new_cls.prototype.constructor = new_cls;
	
		    new_cls.extend = function(name, props) {
		        if(typeof name === 'object') {
		            props = name;
		            name = 'anonymous';
		        }
		        return extend(new_cls, name, props);
		    };
	
		    return new_cls;
		}
	
		module.exports = extend(Object, 'Object', {});
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var lib = __webpack_require__(1);
		var r = __webpack_require__(8);
	
		function normalize(value, defaultValue) {
		    if(value === null || value === undefined || value === false) {
		        return defaultValue;
		    }
		    return value;
		}
	
		var filters = {
		    abs: function(n) {
		        return Math.abs(n);
		    },
	
		    batch: function(arr, linecount, fill_with) {
		        var i;
		        var res = [];
		        var tmp = [];
	
		        for(i = 0; i < arr.length; i++) {
		            if(i % linecount === 0 && tmp.length) {
		                res.push(tmp);
		                tmp = [];
		            }
	
		            tmp.push(arr[i]);
		        }
	
		        if(tmp.length) {
		            if(fill_with) {
		                for(i = tmp.length; i < linecount; i++) {
		                    tmp.push(fill_with);
		                }
		            }
	
		            res.push(tmp);
		        }
	
		        return res;
		    },
	
		    capitalize: function(str) {
		        str = normalize(str, '');
		        var ret = str.toLowerCase();
		        return r.copySafeness(str, ret.charAt(0).toUpperCase() + ret.slice(1));
		    },
	
		    center: function(str, width) {
		        str = normalize(str, '');
		        width = width || 80;
	
		        if(str.length >= width) {
		            return str;
		        }
	
		        var spaces = width - str.length;
		        var pre = lib.repeat(' ', spaces/2 - spaces % 2);
		        var post = lib.repeat(' ', spaces/2);
		        return r.copySafeness(str, pre + str + post);
		    },
	
		    'default': function(val, def, bool) {
		        if(bool) {
		            return val ? val : def;
		        }
		        else {
		            return (val !== undefined) ? val : def;
		        }
		    },
	
		    dictsort: function(val, case_sensitive, by) {
		        if (!lib.isObject(val)) {
		            throw new lib.TemplateError('dictsort filter: val must be an object');
		        }
	
		        var array = [];
		        for (var k in val) {
		            // deliberately include properties from the object's prototype
		            array.push([k,val[k]]);
		        }
	
		        var si;
		        if (by === undefined || by === 'key') {
		            si = 0;
		        } else if (by === 'value') {
		            si = 1;
		        } else {
		            throw new lib.TemplateError(
		                'dictsort filter: You can only sort by either key or value');
		        }
	
		        array.sort(function(t1, t2) {
		            var a = t1[si];
		            var b = t2[si];
	
		            if (!case_sensitive) {
		                if (lib.isString(a)) {
		                    a = a.toUpperCase();
		                }
		                if (lib.isString(b)) {
		                    b = b.toUpperCase();
		                }
		            }
	
		            return a > b ? 1 : (a === b ? 0 : -1);
		        });
	
		        return array;
		    },
	
		    dump: function(obj) {
		        return JSON.stringify(obj);
		    },
	
		    escape: function(str) {
		        if(typeof str === 'string') {
		            return r.markSafe(lib.escape(str));
		        }
		        return str;
		    },
	
		    safe: function(str) {
		        return r.markSafe(str);
		    },
	
		    first: function(arr) {
		        return arr[0];
		    },
	
		    groupby: function(arr, attr) {
		        return lib.groupBy(arr, attr);
		    },
	
		    indent: function(str, width, indentfirst) {
		        str = normalize(str, '');
	
		        if (str === '') return '';
	
		        width = width || 4;
		        var res = '';
		        var lines = str.split('\n');
		        var sp = lib.repeat(' ', width);
	
		        for(var i=0; i<lines.length; i++) {
		            if(i === 0 && !indentfirst) {
		                res += lines[i] + '\n';
		            }
		            else {
		                res += sp + lines[i] + '\n';
		            }
		        }
	
		        return r.copySafeness(str, res);
		    },
	
		    join: function(arr, del, attr) {
		        del = del || '';
	
		        if(attr) {
		            arr = lib.map(arr, function(v) {
		                return v[attr];
		            });
		        }
	
		        return arr.join(del);
		    },
	
		    last: function(arr) {
		        return arr[arr.length-1];
		    },
	
		    length: function(val) {
		        var value = normalize(val, '');
	
		        if(value !== undefined) {
		            if(
		                (typeof Map === 'function' && value instanceof Map) ||
		                (typeof Set === 'function' && value instanceof Set)
		            ) {
		                // ECMAScript 2015 Maps and Sets
		                return value.size;
		            }
		            return value.length;
		        }
		        return 0;
		    },
	
		    list: function(val) {
		        if(lib.isString(val)) {
		            return val.split('');
		        }
		        else if(lib.isObject(val)) {
		            var keys = [];
	
		            if(Object.keys) {
		                keys = Object.keys(val);
		            }
		            else {
		                for(var k in val) {
		                    keys.push(k);
		                }
		            }
	
		            return lib.map(keys, function(k) {
		                return { key: k,
		                         value: val[k] };
		            });
		        }
		        else if(lib.isArray(val)) {
		          return val;
		        }
		        else {
		            throw new lib.TemplateError('list filter: type not iterable');
		        }
		    },
	
		    lower: function(str) {
		        str = normalize(str, '');
		        return str.toLowerCase();
		    },
	
		    random: function(arr) {
		        return arr[Math.floor(Math.random() * arr.length)];
		    },
	
		    rejectattr: function(arr, attr) {
		      return arr.filter(function (item) {
		        return !item[attr];
		      });
		    },
	
		    selectattr: function(arr, attr) {
		      return arr.filter(function (item) {
		        return !!item[attr];
		      });
		    },
	
		    replace: function(str, old, new_, maxCount) {
		        var originalStr = str;
	
		        if (old instanceof RegExp) {
		            return str.replace(old, new_);
		        }
	
		        if(typeof maxCount === 'undefined'){
		            maxCount = -1;
		        }
	
		        var res = '';  // Output
	
		        // Cast Numbers in the search term to string
		        if(typeof old === 'number'){
		            old = old + '';
		        }
		        else if(typeof old !== 'string') {
		            // If it is something other than number or string,
		            // return the original string
		            return str;
		        }
	
		        // Cast numbers in the replacement to string
		        if(typeof str === 'number'){
		            str = str + '';
		        }
	
		        // If by now, we don't have a string, throw it back
		        if(typeof str !== 'string' && !(str instanceof r.SafeString)){
		            return str;
		        }
	
		        // ShortCircuits
		        if(old === ''){
		            // Mimic the python behaviour: empty string is replaced
		            // by replacement e.g. "abc"|replace("", ".") -> .a.b.c.
		            res = new_ + str.split('').join(new_) + new_;
		            return r.copySafeness(str, res);
		        }
	
		        var nextIndex = str.indexOf(old);
		        // if # of replacements to perform is 0, or the string to does
		        // not contain the old value, return the string
		        if(maxCount === 0 || nextIndex === -1){
		            return str;
		        }
	
		        var pos = 0;
		        var count = 0; // # of replacements made
	
		        while(nextIndex  > -1 && (maxCount === -1 || count < maxCount)){
		            // Grab the next chunk of src string and add it with the
		            // replacement, to the result
		            res += str.substring(pos, nextIndex) + new_;
		            // Increment our pointer in the src string
		            pos = nextIndex + old.length;
		            count++;
		            // See if there are any more replacements to be made
		            nextIndex = str.indexOf(old, pos);
		        }
	
		        // We've either reached the end, or done the max # of
		        // replacements, tack on any remaining string
		        if(pos < str.length) {
		            res += str.substring(pos);
		        }
	
		        return r.copySafeness(originalStr, res);
		    },
	
		    reverse: function(val) {
		        var arr;
		        if(lib.isString(val)) {
		            arr = filters.list(val);
		        }
		        else {
		            // Copy it
		            arr = lib.map(val, function(v) { return v; });
		        }
	
		        arr.reverse();
	
		        if(lib.isString(val)) {
		            return r.copySafeness(val, arr.join(''));
		        }
		        return arr;
		    },
	
		    round: function(val, precision, method) {
		        precision = precision || 0;
		        var factor = Math.pow(10, precision);
		        var rounder;
	
		        if(method === 'ceil') {
		            rounder = Math.ceil;
		        }
		        else if(method === 'floor') {
		            rounder = Math.floor;
		        }
		        else {
		            rounder = Math.round;
		        }
	
		        return rounder(val * factor) / factor;
		    },
	
		    slice: function(arr, slices, fillWith) {
		        var sliceLength = Math.floor(arr.length / slices);
		        var extra = arr.length % slices;
		        var offset = 0;
		        var res = [];
	
		        for(var i=0; i<slices; i++) {
		            var start = offset + i * sliceLength;
		            if(i < extra) {
		                offset++;
		            }
		            var end = offset + (i + 1) * sliceLength;
	
		            var slice = arr.slice(start, end);
		            if(fillWith && i >= extra) {
		                slice.push(fillWith);
		            }
		            res.push(slice);
		        }
	
		        return res;
		    },
	
		    sum: function(arr, attr, start) {
		        var sum = 0;
	
		        if(typeof start === 'number'){
		            sum += start;
		        }
	
		        if(attr) {
		            arr = lib.map(arr, function(v) {
		                return v[attr];
		            });
		        }
	
		        for(var i = 0; i < arr.length; i++) {
		            sum += arr[i];
		        }
	
		        return sum;
		    },
	
		    sort: r.makeMacro(['value', 'reverse', 'case_sensitive', 'attribute'], [], function(arr, reverse, caseSens, attr) {
		         // Copy it
		        arr = lib.map(arr, function(v) { return v; });
	
		        arr.sort(function(a, b) {
		            var x, y;
	
		            if(attr) {
		                x = a[attr];
		                y = b[attr];
		            }
		            else {
		                x = a;
		                y = b;
		            }
	
		            if(!caseSens && lib.isString(x) && lib.isString(y)) {
		                x = x.toLowerCase();
		                y = y.toLowerCase();
		            }
	
		            if(x < y) {
		                return reverse ? 1 : -1;
		            }
		            else if(x > y) {
		                return reverse ? -1: 1;
		            }
		            else {
		                return 0;
		            }
		        });
	
		        return arr;
		    }),
	
		    string: function(obj) {
		        return r.copySafeness(obj, obj);
		    },
	
		    striptags: function(input, preserve_linebreaks) {
		        input = normalize(input, '');
		        preserve_linebreaks = preserve_linebreaks || false;
		        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
		        var trimmedInput = filters.trim(input.replace(tags, ''));
		        var res = '';
		        if (preserve_linebreaks) {
		            res = trimmedInput
		                .replace(/^ +| +$/gm, '')     // remove leading and trailing spaces
		                .replace(/ +/g, ' ')          // squash adjacent spaces
		                .replace(/(\r\n)/g, '\n')     // normalize linebreaks (CRLF -> LF)
		                .replace(/\n\n\n+/g, '\n\n'); // squash abnormal adjacent linebreaks
		        } else {
		            res = trimmedInput.replace(/\s+/gi, ' ');
		        }
		        return r.copySafeness(input, res);
		    },
	
		    title: function(str) {
		        str = normalize(str, '');
		        var words = str.split(' ');
		        for(var i = 0; i < words.length; i++) {
		            words[i] = filters.capitalize(words[i]);
		        }
		        return r.copySafeness(str, words.join(' '));
		    },
	
		    trim: function(str) {
		        return r.copySafeness(str, str.replace(/^\s*|\s*$/g, ''));
		    },
	
		    truncate: function(input, length, killwords, end) {
		        var orig = input;
		        input = normalize(input, '');
		        length = length || 255;
	
		        if (input.length <= length)
		            return input;
	
		        if (killwords) {
		            input = input.substring(0, length);
		        } else {
		            var idx = input.lastIndexOf(' ', length);
		            if(idx === -1) {
		                idx = length;
		            }
	
		            input = input.substring(0, idx);
		        }
	
		        input += (end !== undefined && end !== null) ? end : '...';
		        return r.copySafeness(orig, input);
		    },
	
		    upper: function(str) {
		        str = normalize(str, '');
		        return str.toUpperCase();
		    },
	
		    urlencode: function(obj) {
		        var enc = encodeURIComponent;
		        if (lib.isString(obj)) {
		            return enc(obj);
		        } else {
		            var parts;
		            if (lib.isArray(obj)) {
		                parts = obj.map(function(item) {
		                    return enc(item[0]) + '=' + enc(item[1]);
		                });
		            } else {
		                parts = [];
		                for (var k in obj) {
		                    if (obj.hasOwnProperty(k)) {
		                        parts.push(enc(k) + '=' + enc(obj[k]));
		                    }
		                }
		            }
		            return parts.join('&');
		        }
		    },
	
		    urlize: function(str, length, nofollow) {
		        if (isNaN(length)) length = Infinity;
	
		        var noFollowAttr = (nofollow === true ? ' rel="nofollow"' : '');
	
		        // For the jinja regexp, see
		        // https://github.com/mitsuhiko/jinja2/blob/f15b814dcba6aa12bc74d1f7d0c881d55f7126be/jinja2/utils.py#L20-L23
		        var puncRE = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/;
		        // from http://blog.gerv.net/2011/05/html5_email_address_regexp/
		        var emailRE = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
		        var httpHttpsRE = /^https?:\/\/.*$/;
		        var wwwRE = /^www\./;
		        var tldRE = /\.(?:org|net|com)(?:\:|\/|$)/;
	
		        var words = str.split(/(\s+)/).filter(function(word) {
		          // If the word has no length, bail. This can happen for str with
		          // trailing whitespace.
		          return word && word.length;
		        }).map(function(word) {
		          var matches = word.match(puncRE);
		          var possibleUrl = matches && matches[1] || word;
	
		          // url that starts with http or https
		          if (httpHttpsRE.test(possibleUrl))
		            return '<a href="' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0, length) + '</a>';
	
		          // url that starts with www.
		          if (wwwRE.test(possibleUrl))
		            return '<a href="http://' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0, length) + '</a>';
	
		          // an email address of the form username@domain.tld
		          if (emailRE.test(possibleUrl))
		            return '<a href="mailto:' + possibleUrl + '">' + possibleUrl + '</a>';
	
		          // url that ends in .com, .org or .net that is not an email address
		          if (tldRE.test(possibleUrl))
		            return '<a href="http://' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0, length) + '</a>';
	
		          return word;
	
		        });
	
		        return words.join('');
		    },
	
		    wordcount: function(str) {
		        str = normalize(str, '');
		        var words = (str) ? str.match(/\w+/g) : null;
		        return (words) ? words.length : null;
		    },
	
		    'float': function(val, def) {
		        var res = parseFloat(val);
		        return isNaN(res) ? def : res;
		    },
	
		    'int': function(val, def) {
		        var res = parseInt(val, 10);
		        return isNaN(res) ? def : res;
		    }
		};
	
		// Aliases
		filters.d = filters['default'];
		filters.e = filters.escape;
	
		module.exports = filters;
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var lib = __webpack_require__(1);
		var Obj = __webpack_require__(6);
	
		// Frames keep track of scoping both at compile-time and run-time so
		// we know how to access variables. Block tags can introduce special
		// variables, for example.
		var Frame = Obj.extend({
		    init: function(parent, isolateWrites) {
		        this.variables = {};
		        this.parent = parent;
		        this.topLevel = false;
		        // if this is true, writes (set) should never propagate upwards past
		        // this frame to its parent (though reads may).
		        this.isolateWrites = isolateWrites;
		    },
	
		    set: function(name, val, resolveUp) {
		        // Allow variables with dots by automatically creating the
		        // nested structure
		        var parts = name.split('.');
		        var obj = this.variables;
		        var frame = this;
	
		        if(resolveUp) {
		            if((frame = this.resolve(parts[0], true))) {
		                frame.set(name, val);
		                return;
		            }
		        }
	
		        for(var i=0; i<parts.length - 1; i++) {
		            var id = parts[i];
	
		            if(!obj[id]) {
		                obj[id] = {};
		            }
		            obj = obj[id];
		        }
	
		        obj[parts[parts.length - 1]] = val;
		    },
	
		    get: function(name) {
		        var val = this.variables[name];
		        if(val !== undefined && val !== null) {
		            return val;
		        }
		        return null;
		    },
	
		    lookup: function(name) {
		        var p = this.parent;
		        var val = this.variables[name];
		        if(val !== undefined && val !== null) {
		            return val;
		        }
		        return p && p.lookup(name);
		    },
	
		    resolve: function(name, forWrite) {
		        var p = (forWrite && this.isolateWrites) ? undefined : this.parent;
		        var val = this.variables[name];
		        if(val !== undefined && val !== null) {
		            return this;
		        }
		        return p && p.resolve(name);
		    },
	
		    push: function(isolateWrites) {
		        return new Frame(this, isolateWrites);
		    },
	
		    pop: function() {
		        return this.parent;
		    }
		});
	
		function makeMacro(argNames, kwargNames, func) {
		    return function() {
		        var argCount = numArgs(arguments);
		        var args;
		        var kwargs = getKeywordArgs(arguments);
		        var i;
	
		        if(argCount > argNames.length) {
		            args = Array.prototype.slice.call(arguments, 0, argNames.length);
	
		            // Positional arguments that should be passed in as
		            // keyword arguments (essentially default values)
		            var vals = Array.prototype.slice.call(arguments, args.length, argCount);
		            for(i = 0; i < vals.length; i++) {
		                if(i < kwargNames.length) {
		                    kwargs[kwargNames[i]] = vals[i];
		                }
		            }
	
		            args.push(kwargs);
		        }
		        else if(argCount < argNames.length) {
		            args = Array.prototype.slice.call(arguments, 0, argCount);
	
		            for(i = argCount; i < argNames.length; i++) {
		                var arg = argNames[i];
	
		                // Keyword arguments that should be passed as
		                // positional arguments, i.e. the caller explicitly
		                // used the name of a positional arg
		                args.push(kwargs[arg]);
		                delete kwargs[arg];
		            }
	
		            args.push(kwargs);
		        }
		        else {
		            args = arguments;
		        }
	
		        return func.apply(this, args);
		    };
		}
	
		function makeKeywordArgs(obj) {
		    obj.__keywords = true;
		    return obj;
		}
	
		function getKeywordArgs(args) {
		    var len = args.length;
		    if(len) {
		        var lastArg = args[len - 1];
		        if(lastArg && lastArg.hasOwnProperty('__keywords')) {
		            return lastArg;
		        }
		    }
		    return {};
		}
	
		function numArgs(args) {
		    var len = args.length;
		    if(len === 0) {
		        return 0;
		    }
	
		    var lastArg = args[len - 1];
		    if(lastArg && lastArg.hasOwnProperty('__keywords')) {
		        return len - 1;
		    }
		    else {
		        return len;
		    }
		}
	
		// A SafeString object indicates that the string should not be
		// autoescaped. This happens magically because autoescaping only
		// occurs on primitive string objects.
		function SafeString(val) {
		    if(typeof val !== 'string') {
		        return val;
		    }
	
		    this.val = val;
		    this.length = val.length;
		}
	
		SafeString.prototype = Object.create(String.prototype, {
		    length: { writable: true, configurable: true, value: 0 }
		});
		SafeString.prototype.valueOf = function() {
		    return this.val;
		};
		SafeString.prototype.toString = function() {
		    return this.val;
		};
	
		function copySafeness(dest, target) {
		    if(dest instanceof SafeString) {
		        return new SafeString(target);
		    }
		    return target.toString();
		}
	
		function markSafe(val) {
		    var type = typeof val;
	
		    if(type === 'string') {
		        return new SafeString(val);
		    }
		    else if(type !== 'function') {
		        return val;
		    }
		    else {
		        return function() {
		            var ret = val.apply(this, arguments);
	
		            if(typeof ret === 'string') {
		                return new SafeString(ret);
		            }
	
		            return ret;
		        };
		    }
		}
	
		function suppressValue(val, autoescape) {
		    val = (val !== undefined && val !== null) ? val : '';
	
		    if(autoescape && typeof val === 'string') {
		        val = lib.escape(val);
		    }
	
		    return val;
		}
	
		function ensureDefined(val, lineno, colno) {
		    if(val === null || val === undefined) {
		        throw new lib.TemplateError(
		            'attempted to output null or undefined value',
		            lineno + 1,
		            colno + 1
		        );
		    }
		    return val;
		}
	
		function memberLookup(obj, val) {
		    obj = obj || {};
	
		    if(typeof obj[val] === 'function') {
		        return function() {
		            return obj[val].apply(obj, arguments);
		        };
		    }
	
		    return obj[val];
		}
	
		function callWrap(obj, name, context, args) {
		    if(!obj) {
		        throw new Error('Unable to call `' + name + '`, which is undefined or falsey');
		    }
		    else if(typeof obj !== 'function') {
		        throw new Error('Unable to call `' + name + '`, which is not a function');
		    }
	
		    // jshint validthis: true
		    return obj.apply(context, args);
		}
	
		function contextOrFrameLookup(context, frame, name) {
		    var val = frame.lookup(name);
		    return (val !== undefined && val !== null) ?
		        val :
		        context.lookup(name);
		}
	
		function handleError(error, lineno, colno) {
		    if(error.lineno) {
		        return error;
		    }
		    else {
		        return new lib.TemplateError(error, lineno, colno);
		    }
		}
	
		function asyncEach(arr, dimen, iter, cb) {
		    if(lib.isArray(arr)) {
		        var len = arr.length;
	
		        lib.asyncIter(arr, function(item, i, next) {
		            switch(dimen) {
		            case 1: iter(item, i, len, next); break;
		            case 2: iter(item[0], item[1], i, len, next); break;
		            case 3: iter(item[0], item[1], item[2], i, len, next); break;
		            default:
		                item.push(i, next);
		                iter.apply(this, item);
		            }
		        }, cb);
		    }
		    else {
		        lib.asyncFor(arr, function(key, val, i, len, next) {
		            iter(key, val, i, len, next);
		        }, cb);
		    }
		}
	
		function asyncAll(arr, dimen, func, cb) {
		    var finished = 0;
		    var len, i;
		    var outputArr;
	
		    function done(i, output) {
		        finished++;
		        outputArr[i] = output;
	
		        if(finished === len) {
		            cb(null, outputArr.join(''));
		        }
		    }
	
		    if(lib.isArray(arr)) {
		        len = arr.length;
		        outputArr = new Array(len);
	
		        if(len === 0) {
		            cb(null, '');
		        }
		        else {
		            for(i = 0; i < arr.length; i++) {
		                var item = arr[i];
	
		                switch(dimen) {
		                case 1: func(item, i, len, done); break;
		                case 2: func(item[0], item[1], i, len, done); break;
		                case 3: func(item[0], item[1], item[2], i, len, done); break;
		                default:
		                    item.push(i, done);
		                    // jshint validthis: true
		                    func.apply(this, item);
		                }
		            }
		        }
		    }
		    else {
		        var keys = lib.keys(arr);
		        len = keys.length;
		        outputArr = new Array(len);
	
		        if(len === 0) {
		            cb(null, '');
		        }
		        else {
		            for(i = 0; i < keys.length; i++) {
		                var k = keys[i];
		                func(k, arr[k], i, len, done);
		            }
		        }
		    }
		}
	
		module.exports = {
		    Frame: Frame,
		    makeMacro: makeMacro,
		    makeKeywordArgs: makeKeywordArgs,
		    numArgs: numArgs,
		    suppressValue: suppressValue,
		    ensureDefined: ensureDefined,
		    memberLookup: memberLookup,
		    contextOrFrameLookup: contextOrFrameLookup,
		    callWrap: callWrap,
		    handleError: handleError,
		    isArray: lib.isArray,
		    keys: lib.keys,
		    SafeString: SafeString,
		    copySafeness: copySafeness,
		    markSafe: markSafe,
		    asyncEach: asyncEach,
		    asyncAll: asyncAll,
		    inOperator: lib.inOperator
		};
	
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		'use strict';
	
		function cycler(items) {
		    var index = -1;
	
		    return {
		        current: null,
		        reset: function() {
		            index = -1;
		            this.current = null;
		        },
	
		        next: function() {
		            index++;
		            if(index >= items.length) {
		                index = 0;
		            }
	
		            this.current = items[index];
		            return this.current;
		        },
		    };
	
		}
	
		function joiner(sep) {
		    sep = sep || ',';
		    var first = true;
	
		    return function() {
		        var val = first ? '' : sep;
		        first = false;
		        return val;
		    };
		}
	
		// Making this a function instead so it returns a new object
		// each time it's called. That way, if something like an environment
		// uses it, they will each have their own copy.
		function globals() {
		    return {
		        range: function(start, stop, step) {
		            if(typeof stop === 'undefined') {
		                stop = start;
		                start = 0;
		                step = 1;
		            }
		            else if(!step) {
		                step = 1;
		            }
	
		            var arr = [];
		            var i;
		            if (step > 0) {
		                for (i=start; i<stop; i+=step) {
		                    arr.push(i);
		                }
		            } else {
		                for (i=start; i>stop; i+=step) {
		                    arr.push(i);
		                }
		            }
		            return arr;
		        },
	
		        // lipsum: function(n, html, min, max) {
		        // },
	
		        cycler: function() {
		            return cycler(Array.prototype.slice.call(arguments));
		        },
	
		        joiner: function(sep) {
		            return joiner(sep);
		        }
		    };
		}
	
		module.exports = globals;
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var Loader = __webpack_require__(11);
	
		var PrecompiledLoader = Loader.extend({
		    init: function(compiledTemplates) {
		        this.precompiled = compiledTemplates || {};
		    },
	
		    getSource: function(name) {
		        if (this.precompiled[name]) {
		            return {
		                src: { type: 'code',
		                       obj: this.precompiled[name] },
		                path: name
		            };
		        }
		        return null;
		    }
		});
	
		module.exports = PrecompiledLoader;
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var path = __webpack_require__(3);
		var Obj = __webpack_require__(6);
		var lib = __webpack_require__(1);
	
		var Loader = Obj.extend({
		    on: function(name, func) {
		        this.listeners = this.listeners || {};
		        this.listeners[name] = this.listeners[name] || [];
		        this.listeners[name].push(func);
		    },
	
		    emit: function(name /*, arg1, arg2, ...*/) {
		        var args = Array.prototype.slice.call(arguments, 1);
	
		        if(this.listeners && this.listeners[name]) {
		            lib.each(this.listeners[name], function(listener) {
		                listener.apply(null, args);
		            });
		        }
		    },
	
		    resolve: function(from, to) {
		        return path.resolve(path.dirname(from), to);
		    },
	
		    isRelative: function(filename) {
		        return (filename.indexOf('./') === 0 || filename.indexOf('../') === 0);
		    }
		});
	
		module.exports = Loader;
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		function installCompat() {
		  'use strict';
	
		  // This must be called like `nunjucks.installCompat` so that `this`
		  // references the nunjucks instance
		  var runtime = this.runtime; // jshint ignore:line
		  var lib = this.lib; // jshint ignore:line
	
		  var orig_contextOrFrameLookup = runtime.contextOrFrameLookup;
		  runtime.contextOrFrameLookup = function(context, frame, key) {
		    var val = orig_contextOrFrameLookup.apply(this, arguments);
		    if (val === undefined) {
		      switch (key) {
		      case 'True':
		        return true;
		      case 'False':
		        return false;
		      case 'None':
		        return null;
		      }
		    }
	
		    return val;
		  };
	
		  var orig_memberLookup = runtime.memberLookup;
		  var ARRAY_MEMBERS = {
		    pop: function(index) {
		      if (index === undefined) {
		        return this.pop();
		      }
		      if (index >= this.length || index < 0) {
		        throw new Error('KeyError');
		      }
		      return this.splice(index, 1);
		    },
		    remove: function(element) {
		      for (var i = 0; i < this.length; i++) {
		        if (this[i] === element) {
		          return this.splice(i, 1);
		        }
		      }
		      throw new Error('ValueError');
		    },
		    count: function(element) {
		      var count = 0;
		      for (var i = 0; i < this.length; i++) {
		        if (this[i] === element) {
		          count++;
		        }
		      }
		      return count;
		    },
		    index: function(element) {
		      var i;
		      if ((i = this.indexOf(element)) === -1) {
		        throw new Error('ValueError');
		      }
		      return i;
		    },
		    find: function(element) {
		      return this.indexOf(element);
		    },
		    insert: function(index, elem) {
		      return this.splice(index, 0, elem);
		    }
		  };
		  var OBJECT_MEMBERS = {
		    items: function() {
		      var ret = [];
		      for(var k in this) {
		        ret.push([k, this[k]]);
		      }
		      return ret;
		    },
		    values: function() {
		      var ret = [];
		      for(var k in this) {
		        ret.push(this[k]);
		      }
		      return ret;
		    },
		    keys: function() {
		      var ret = [];
		      for(var k in this) {
		        ret.push(k);
		      }
		      return ret;
		    },
		    get: function(key, def) {
		      var output = this[key];
		      if (output === undefined) {
		        output = def;
		      }
		      return output;
		    },
		    has_key: function(key) {
		      return this.hasOwnProperty(key);
		    },
		    pop: function(key, def) {
		      var output = this[key];
		      if (output === undefined && def !== undefined) {
		        output = def;
		      } else if (output === undefined) {
		        throw new Error('KeyError');
		      } else {
		        delete this[key];
		      }
		      return output;
		    },
		    popitem: function() {
		      for (var k in this) {
		        // Return the first object pair.
		        var val = this[k];
		        delete this[k];
		        return [k, val];
		      }
		      throw new Error('KeyError');
		    },
		    setdefault: function(key, def) {
		      if (key in this) {
		        return this[key];
		      }
		      if (def === undefined) {
		        def = null;
		      }
		      return this[key] = def;
		    },
		    update: function(kwargs) {
		      for (var k in kwargs) {
		        this[k] = kwargs[k];
		      }
		      return null;  // Always returns None
		    }
		  };
		  OBJECT_MEMBERS.iteritems = OBJECT_MEMBERS.items;
		  OBJECT_MEMBERS.itervalues = OBJECT_MEMBERS.values;
		  OBJECT_MEMBERS.iterkeys = OBJECT_MEMBERS.keys;
		  runtime.memberLookup = function(obj, val, autoescape) { // jshint ignore:line
		    obj = obj || {};
	
		    // If the object is an object, return any of the methods that Python would
		    // otherwise provide.
		    if (lib.isArray(obj) && ARRAY_MEMBERS.hasOwnProperty(val)) {
		      return function() {return ARRAY_MEMBERS[val].apply(obj, arguments);};
		    }
	
		    if (lib.isObject(obj) && OBJECT_MEMBERS.hasOwnProperty(val)) {
		      return function() {return OBJECT_MEMBERS[val].apply(obj, arguments);};
		    }
	
		    return orig_memberLookup.apply(this, arguments);
		  };
		}
	
		module.exports = installCompat;
	
	
	/***/ }
	/******/ ]);
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = nunjucks;

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = function(env){
	
	    env.addGlobal("lang", "pt");
	};


/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function (nunjucks, env, obj, dependencies){
	
	    var oldRoot = obj.root;
	
	    obj.root = function( env, context, frame, runtime, ignoreMissing, cb ) {
	        var oldGetTemplate = env.getTemplate;
	        env.getTemplate = function (name, ec, parentName, ignoreMissing, cb) {
	            if( typeof ec === "function" ) {
	                cb = ec = false;
	            }
	            var _require = function (name) {
	                try {
	                    // add a reference to the already resolved dependency here
	                    return dependencies[name];
	                }
	                catch (e) {
	                    if (frame.get("_require")) {
	                        return frame.get("_require")(name);
	                    }
	                    else {
	                        console.warn('Could not load template "%s"', name);
	                    }
	                }
	            };
	
	            var tmpl = _require(name);
	            frame.set("_require", _require);
	
	            if( ec ) tmpl.compile();
	            cb( null, tmpl );
	        };
	
	        oldRoot(env, context, frame, runtime, ignoreMissing, function (err, res) {
	            env.getTemplate = oldGetTemplate;
	            cb( err, res );
	        });
	    };
	
	    var src = {
	        obj: obj,
	        type: 'code'
	    };
	
	    return new nunjucks.Template(src, env);
	
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(28);
	var Backbone = __webpack_require__(38);
	var Mn = __webpack_require__(39);
	
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


/***/ }
]);
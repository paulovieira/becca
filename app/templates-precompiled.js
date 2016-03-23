(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/compute.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<button  type=\"button\" class=\"btn btn-default btn-lg btn-block\">\n<b>Calculate evaluation</b>\n</button>\n\n<div id=\"grade-result\" class=\"text-center\" style=\"margin-top: 30px;\"></div>";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["app/criteria.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "criteria");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("category", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\" style=\"display: inline;\"><b>CATEGORY: ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),0)),"category"), env.opts.autoescape);
output += "</b></h3>\n    </div>\n    <div class=\"panel-body\">\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th style=\"width: 20%\">Subcategory/Criteria</th>\n          <th style=\"width: 60%\">Explanation</th>\n          <th style=\"width: 10%\">Evaluation grade</th>\n          <th style=\"width: 10%\">Weight factor</th>\n        </tr>\n      </thead>\n      <tbody>\n\n        \n        ";
frame = frame.push();
var t_7 = t_4;
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("item", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n        <tr>\n            <td>\n             ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"criteria"), env.opts.autoescape);
output += "\n            </td>\n            <td>\n             ";
output += runtime.suppressValue(runtime.memberLookup((t_8),"explanation"), env.opts.autoescape);
output += "\n            </td>\n            <td>\n                <select class=\"form-control js-criteria-evaluation\">\n                  <option value=\"0\">&mdash;</option>\n                  <option value=\"1\">1</option>\n                  <option value=\"2\">2</option>\n                  <option value=\"3\">3</option>\n                  <option value=\"4\">4</option>\n                  <option value=\"5\">5</option>\n                </select>    \n            </td>\n            <td>\n            <input type=\"text\" class=\"form-control js-criteria-weight\">\n            </td>\n        </tr>\n        ";
;
}
}
frame = frame.pop();
output += "\n\n      </tbody>\n    </table>\n\n    </div>\n</div>\n\n";
;
}
}
frame = frame.pop();
output += "\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->\n    <title>BECCA | BASE Evaluation Criteria for Climate Adaptation</title>\n    <link rel=\"stylesheet\" href=\"/_lib/bootstrap/3.3.1/css/bootstrap.css\">\n    <link rel=\"stylesheet\" href=\"/_lib/bootstrap/bootflat/bootflat.css\">\n    <link rel=\"stylesheet\" href=\"/_lib/font-awesome/4.4.0/css/font-awesome.css\">\n\n</head>\n\n<body>\n    <div style=\"background-color:#00A1A8\">\n        <h1 class=\"text-center\" style=\"font-size: 400%; margin-bottom: 0px; margin-top: 0px; padding-top: 30px; color: white;\">BECCA</h1>\n        <p class=\"text-center\" style=\"font-size: 200%; margin-top: 0px; font-weight: bold; padding-bottom: 40px;\">BASE Evaluation Criteria for Climate Adaptation</p>\n    </div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-10 col-sm-offset-1\">\n                <div style=\"margin-top: 30px;\" class=\"well\">\n                    <p>\n                        BECCA is meant to be used as a check list of topics and issues to be considered in evaluations of concrete adaptation situations.\n                    </p>\n                    <p>\n                        We do not suggest applying all criteria but a reasonable selection thereof. Climate adaptation is highly context-specific and, therefore, there is no one-size-fits-all criteria set for evaluating climate actions.\n                    </p>\n                    <div class=\"collapse\" id=\"intro-read-more\">\n                        <p>\n                            We provide guidance on which criteria to use in which adaptation situations. On this basis, the user is free to tailor their own set of evaluation criteria with specific weights of certain dimensions depending on the context.\n                        </p>\n                    </div>\n                    <button class=\"btn btn-default\" type=\"button\" data-toggle=\"collapse\" data-target=\"#intro-read-more\" aria-expanded=\"false\" aria-controls=\"intro-read-more\">\n                        READ MORE\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-10 col-sm-offset-1\">\n                <h3>OUTCOME CRITERIA</h3>\n                <div id=\"mn-r-outcome\"></div>\n\n                <hr style=\"margin: 60px 0px;\">\n                <h3>PROCESS-ORIENTED CRITERIA</h3>\n                <div id=\"mn-r-process\"></div>\n\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"margin-top: 30px;\">\n            <div class=\"col-sm-4 col-sm-offset-4\">\n                <div id=\"mn-r-results\"></div>\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"margin-top: 50px;\">\n        </div>\n    </div>\n    <!-- bootstrap -->\n    <script src=\"/_lib/jquery/jquery-1.11.2.js\"></script>\n    <script src=\"/_lib/bootstrap/3.3.1/js/bootstrap.js\"></script>\n    <!-- jquery plugins used by bootflat -->\n    <script src=\"/_lib/bootstrap/bootflat/icheck.min.js\"></script>\n    <script src=\"/_lib/bootstrap/bootflat/jquery.fs.selecter.min.js\"></script>\n    <script src=\"/_lib/bootstrap/bootflat/jquery.fs.stepper.min.js\"></script>\n    <script src=\"/_lib/underscore/underscore-1.8.3.js\"></script>\n    <script src=\"/_lib/backbone/backbone-1.2.3.js\"></script>\n    <script src=\"/_lib/backbone/backbone.marionette-2.4.4.js\"></script>\n    <script src=\"/_lib/backbone/renderer-nunjucks.js\"></script>\n\n    <script src=\"/_lib/nunjucks/nunjucks-slim-2.4.1.js\"></script>\n    <script src=\"/app/templates-precompiled.js\"></script>\n    <script src=\"/app/criteria.js\"></script>\n    <script src=\"/app/index.js\"></script>\n    </div>\n</body>\n\n</html>";
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


(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sliderW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAoBcQAAALgMAJQgMAIgQAAQgQAAgLgIQgMgJAAgLIAAi3QAAgLAMgJQALgIAQAAQAQAAAMAIQAMAJAAALg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#DBF0FD","#D3CDE2","#CCA6C4","#C681A9","#C06294","#BC4884","#BA377B","#B82B76","#B72674"],[0,0.11,0.239,0.369,0.498,0.627,0.753,0.878,1],0,0,0,0,0,12.4).s().p("AgbBvQgMgIAAgLIAAi3QAAgLAMgJQAMgIAPAAQAQAAANAIQALAJAAALIAAC3QAAALgLAIQgNAJgQAAQgPAAgMgJg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliderW, rect = new cjs.Rectangle(-5,-13,10,26), [rect]);


(lib.sliderV = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAoBcQAAAMgMAHQgMAJgQAAQgQAAgLgJQgMgHAAgMIAAi3QAAgMAMgIQALgIAQAAQAQAAAMAIQAMAIAAAMg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#DBF0FD","#C3E2D9","#A6D3AF","#8CC58A","#73BA6C","#5DB356","#4BAE49","#3FAB42","#3BAA40"],[0,0.106,0.235,0.369,0.498,0.627,0.753,0.878,1],0,0,0,0,0,12.4).s().p("AgbBwQgMgJAAgLIAAi3QAAgMAMgIQAMgIAPAAQAQAAANAIQALAIAAAMIAAC3QAAALgLAJQgNAIgQAAQgPAAgMgIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliderV, rect = new cjs.Rectangle(-5,-13,10,26), [rect]);


(lib.sliderU = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAoBcQAAAMgMAIQgMAIgQAAQgQAAgLgIQgMgIAAgMIAAi3QAAgLAMgJQALgIAQAAQAQAAAMAIQAMAJAAALg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#DBF0FD","#E0EFE2","#E6ECBA","#EBEA93","#EEE86D","#F1E74C","#F2E62F","#F3E614","#F3E603"],[0,0.086,0.22,0.353,0.486,0.62,0.749,0.875,1],0,0,0,0,0,12.4).s().p("AgbBwQgMgJAAgLIAAi3QAAgMAMgIQAMgIAPAAQAQAAANAIQALAIAAAMIAAC3QAAALgLAJQgNAIgQAAQgPAAgMgIg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliderU, rect = new cjs.Rectangle(-5,-13,10,26), [rect]);


(lib.sliderBarWp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737372").s().p("AvJAWIAAgrIeTAAIAAArg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("APnAWQAAALgJAJQgIAIgMAAI+UAAQgLAAgJgIQgIgJAAgLIAAgrQAAgLAIgJQAJgIALAAIeUAAQAMAAAIAIQAJAJAAALg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBF0FD","#D3C9DF","#C995B7","#C16898","#BC4482","#B83078","#B72674"],[0,0.169,0.396,0.6,0.776,0.914,1],-99.8,0,99.9,0).s().p("AvKAyQgLAAgJgJQgIgIAAgMIAAgqQAAgMAIgIQAJgIALAAIeUAAQAMAAAIAIQAJAIAAAMIAAAqQAAAMgJAIQgIAJgMAAg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliderBarWp, rect = new cjs.Rectangle(-100.8,-6,201.8,12), [rect]);


(lib.sliderBarW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737372").s().p("AvJAWIAAgrIeTAAIAAArg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("APnAWQAAALgJAJQgIAIgMAAI+UAAQgLAAgJgIQgIgJAAgLIAAgrQAAgLAIgJQAJgIALAAIeUAAQAMAAAIAIQAJAJAAALg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#DBF0FD","#B72674"],[0,1],0,0,0,0,0,70.7).s().p("AvKAyQgLAAgJgJQgIgIAAgMIAAgqQAAgMAIgIQAJgIALAAIeUAAQAMAAAIAIQAJAIAAAMIAAAqQAAAMgJAIQgIAJgMAAg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliderBarW, rect = new cjs.Rectangle(-100.8,-6,201.8,12), [rect]);


(lib.sliderBarVp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737372").s().p("AvJAWIAAgrIeTAAIAAArg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("APnAWQAAALgJAJQgIAIgMAAI+UAAQgLAAgJgIQgIgJAAgLIAAgrQAAgLAIgJQAJgIALAAIeUAAQAMAAAIAIQAJAJAAALg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBF0FD","#C1E1D5","#9ACC9E","#77BC71","#59B254","#44AC45","#3BAA40"],[0,0.165,0.392,0.6,0.776,0.914,1],-99.8,0,99.9,0).s().p("AvJAyQgMAAgJgJQgIgIAAgLIAAgrQAAgLAIgJQAJgIAMAAIeTAAQAMAAAIAIQAJAJAAALIAAArQAAALgJAIQgIAJgMAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliderBarVp, rect = new cjs.Rectangle(-100.9,-6,201.8,12), [rect]);


(lib.sliderBarV = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737372").s().p("AvJAWIAAgrIeTAAIAAArg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("APnAVQAAAMgJAIQgIAJgMAAI+UAAQgLAAgJgJQgIgIAAgMIAAgqQAAgMAIgIQAJgIALAAIeUAAQAMAAAIAIQAJAIAAAMg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#DBF0FD","#3BAA40"],[0,1],0,0,0,0,0,70.7).s().p("AvKAyQgLAAgJgJQgIgIAAgLIAAgrQAAgLAIgJQAJgIALAAIeUAAQAMAAAIAIQAJAJAAALIAAArQAAALgJAIQgIAJgMAAg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliderBarV, rect = new cjs.Rectangle(-100.8,-6,201.8,12), [rect]);


(lib.sliderBarUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737372").s().p("AvJAWIAAgrIeTAAIAAArg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("APnAWQAAALgJAJQgIAIgMAAI+UAAQgLAAgJgIQgIgJAAgLIAAgrQAAgLAIgJQAJgIALAAIeUAAQAMAAAIAIQAJAJAAALg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DBF0FD","#E1EEDE","#E8EBA8","#EDE974","#F1E747","#F3E621","#F3E603"],[0,0.141,0.376,0.588,0.769,0.914,1],-99.8,0,99.9,0).s().p("AvKAyQgLAAgJgIQgIgJAAgLIAAgrQAAgLAIgJQAJgIALAAIeUAAQAMAAAIAIQAJAJAAALIAAArQAAALgJAJQgIAIgMAAg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliderBarUp, rect = new cjs.Rectangle(-100.8,-6,201.8,12), [rect]);


(lib.sliderBarU = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737372").s().p("AvJAVIAAgpIeTAAIAAApg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("APnAVQAAALgJAJQgIAIgMAAI+UAAQgLAAgJgIQgIgJAAgLIAAgpQAAgMAIgIQAJgIALAAIeUAAQAMAAAIAIQAJAIAAAMg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#DBF0FD","#F3E603"],[0,1],0,0,0,0,0,70.7).s().p("AvKAxQgLAAgJgIQgIgJAAgLIAAgpQAAgLAIgJQAJgIALAAIeUAAQAMAAAIAIQAJAJAAALIAAApQAAALgJAJQgIAIgMAAg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliderBarU, rect = new cjs.Rectangle(-100.8,-5.9,201.8,11.8), [rect]);


(lib.FrameGo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E63F24").ss(2.1,0,0,4).p("AD/AVQAAAkgZAYQgYAZgkAAIlTAAQgjAAgZgZQgZgZAAgjIAAgpQAAgjAZgZQAZgZAjAAIFTAAQAkAAAYAZQAZAZAAAjg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrameGo, rect = new cjs.Rectangle(-26.5,-11.6,53.2,23.4), [rect]);


(lib.BtnStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2A").s().p("AgsA7IAAh1IAsAAIARABQAJACAGADQAGAEAEAIQADAHAAAJQAAAPgJAKQgKAKgZAAIgdAAIAAAwgAgcgCIAdAAQAPAAAHgFQAGgGAAgLQAAgHgEgFQgDgFgHgCIgOgBIgdAAg");
	this.shape.setTransform(17.325,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgdA1QgNgIgHgOQgHgOAAgQQAAgcAQgQQAQgRAYAAQAQAAANAIQAOAHAGAOQAIAOAAARQgBASgHAOQgHAOgNAIQgOAHgPAAQgPAAgOgIgAgbgjQgMALgBAZQAAAWAMANQAMAMAQgBQASAAALgMQALgMAAgXQAAgOgEgKQgGgLgJgGQgJgGgMAAQgQAAgLAMg");
	this.shape_1.setTransform(5.15,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2A").s().p("AgHA7IAAhnIgnAAIAAgOIBdAAIAAAOIgnAAIAABng");
	this.shape_2.setTransform(-6.025,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2A").s().p("AgWA4QgMgFgGgIQgGgKAAgMIAPgBQAAAIAEAHQAFAFAIAEQAHADAKAAQAIAAAIgCQAGgDAEgFQADgEAAgGQAAgFgDgEQgEgFgHgDIgUgGQgRgEgGgCQgIgFgFgGQgDgHAAgHQAAgKAEgHQAGgIAJgEQAKgEAMAAQAMAAAKAEQAKAEAGAJQAFAIAAAKIgOABQgCgLgGgGQgIgFgNAAQgOgBgGAGQgHAFAAAIQAAAGAFAEQAFAEASAFQASAEAIADQAKADAFAIQAFAHAAAKQAAAJgGAJQgFAHgKAFQgKAFgMAAQgQAAgKgFg");
	this.shape_3.setTransform(-16.65,-0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AD/AVQAAAkgZAYQgZAZgjAAIlTAAQgjAAgZgZQgZgYAAgkIAAgpQAAgjAZgZQAZgZAjAAIFTAAQAjAAAZAZQAZAZAAAjg");
	this.shape_4.setTransform(0,0.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6CA19").s().p("AipBqQgjAAgZgZQgZgYAAgkIAAgpQAAgjAZgZQAZgZAjAAIFTAAQAjAAAZAZQAZAZAAAjIAAApQAAAkgZAYQgZAZgjAAg");
	this.shape_5.setTransform(0,0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BtnStop, rect = new cjs.Rectangle(-26.5,-11.4,53,23.3), [rect]);


(lib.BtnGo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2A").s().p("AgHA7IAAgQIAPAAIAAAQgAgDAdIgFg9IAAgaIARAAIAAAaIgEA9g");
	this.shape.setTransform(12.95,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgdA1QgNgIgHgOQgHgOAAgQQAAgcAQgQQAQgRAYAAQAQAAANAIQAOAHAGAOQAIAOgBARQAAASgHAOQgHAOgNAIQgOAHgPAAQgPAAgOgIgAgbgjQgMALgBAZQAAAWAMANQAMAMAQgBQASAAALgMQALgMAAgXQAAgOgEgKQgGgLgJgGQgJgGgMAAQgQAAgLAMg");
	this.shape_1.setTransform(4.25,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2A").s().p("AgZA2QgOgIgHgOQgIgOABgRQgBgRAIgPQAGgOAOgIQAOgHAQAAQANAAALAEQAKAEAGAIQAGAHADAMIgPAEQgCgJgEgFQgEgGgHgCQgIgEgJAAQgJAAgIAEQgIADgEAFQgFAGgDAGQgFAKABANQgBAPAGALQAFALALAFQAKAFAKAAQALAAAKgEQAJgEAFgEIAAgXIgjAAIAAgMIAzAAIAAArQgMAIgMAFQgNAFgNAAQgQAAgOgHg");
	this.shape_2.setTransform(-8.7,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AD/AVQAAAkgZAYQgZAZgjAAIlTAAQgjAAgZgZQgZgYAAgkIAAgpQAAgjAZgZQAZgZAjAAIFTAAQAjAAAZAZQAZAZAAAjg");
	this.shape_3.setTransform(0,0.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6CA19").s().p("AipBqQgjAAgZgZQgZgYAAgkIAAgpQAAgjAZgZQAZgZAjAAIFTAAQAkAAAYAZQAZAZAAAjIAAApQAAAkgZAYQgYAZgkAAg");
	this.shape_4.setTransform(0,0.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BtnGo, rect = new cjs.Rectangle(-26.5,-11.4,53,23.3), [rect]);


(lib.type_13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgBgiIA1AAQADAbAnAAQASAAAKgHQAKgHAAgMQAAgTgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAXgSQAYgTAnAAQApAAAYARQAYARACAhIg0AAQgCgZgmAAQgPAAgKAGQgKAGAAALQAAATAgADIAhAFQAeADARARQAQAQAAAaQAAAggZATQgZATgqAAIgBABQgqAAgYgRg");
	this.shape.setTransform(249.325,19.8507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgpCZIg9AAIhAjTIA2AAIAqCZIApiZIA7AAIApCZIApiZIA3AAIhADTg");
	this.shape_1.setTransform(222.575,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgUAAgNAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAUgXAlAAQAnAAAWAXQAXAYAAAqIAACCg");
	this.shape_2.setTransform(194.525,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAYCKQgcgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFALAAIAtAAIAAAug");
	this.shape_3.setTransform(173.175,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(160.975,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgxAfggQAfgfAwAAQAxAAAfAfQAfAgAAAxQAAAzgfAfQgfAfgxAAQgxAAgegfgAgpguQgPASAAAcQAAAeAPASQAQASAZAAQAZAAAQgSQAQgTAAgdQAAgcgQgSQgQgTgZAAQgZAAgQATg");
	this.shape_5.setTransform(143.575,19.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("ABhBuIAAiDQAAgpgiABQgRAAgKALQgLAMAAATIAACBIgyAAIAAiDQAAgpgjABQgQgBgLAMQgLANAAASIAACBIgzAAIAAjUIAuAAIAAAXQARgeAnAAQAqAAAPAjQAWgjAoAAQAmAAAUAWQAUAWAAApIAACGg");
	this.shape_6.setTransform(114.1,19.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AhKBRQgeggAAgyQABgzAdgeQAcgeAvAAQAvAAAdAdQAcAdAAAyIgCAWIiaAAQACAYAOAOQAPANAXAAQAhAAALgZIA1AAQgKAhgYASQgaASgmAAQgvgBgdgfgAgkg5QgPANgBAWIBoAAIAAgBQAAgWgOgMQgNgNgZAAQgWAAgOANg");
	this.shape_7.setTransform(85.1,19.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_8.setTransform(65.5,17.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AhcBqIAAguIAAAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB1AAIAAAug");
	this.shape_9.setTransform(47.2,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAVAAIAtAAIAAAug");
	this.shape_10.setTransform(27.15,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AAXCKQgcgBgMgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAVAAIAsAAIAAAug");
	this.shape_11.setTransform(8.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_13, rect = new cjs.Rectangle(0,0,258.7,31.3), [rect]);


(lib.type_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgBgiIA1AAQADAbAnAAQASAAAKgHQAKgHAAgMQAAgTgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAXgSQAYgTAoAAQApAAAXARQAYARACAhIg0AAQgCgZgmAAQgPAAgKAGQgKAGAAALQAAATAgADIAhAFQAeADARARQAQAQAAAaQAAAggYATQgZATgqAAIgCABQgqAAgYgRg");
	this.shape.setTransform(249.325,19.8507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgpCZIg9AAIhAjTIA2AAIAqCZIApiZIA7AAIApCZIAqiZIA2AAIhADTg");
	this.shape_1.setTransform(222.575,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgUAAgNAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAUgXAlAAQAnAAAWAXQAXAYAAAqIAACCg");
	this.shape_2.setTransform(194.525,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAYCKQgcgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFALAAIAtAAIAAAug");
	this.shape_3.setTransform(173.175,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(160.975,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgxAfggQAfgfAwAAQAxAAAfAfQAfAgAAAxQAAAzgfAfQgfAfgxAAQgxAAgegfgAgpguQgPASAAAcQAAAeAPASQAQASAZAAQAZAAAQgSQAQgTAAgdQAAgcgQgSQgQgTgZAAQgZAAgQATg");
	this.shape_5.setTransform(143.575,19.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("ABhBuIAAiDQAAgpgiABQgRAAgKALQgLAMAAATIAACBIgyAAIAAiDQAAgpgjABQgQgBgLAMQgLANAAASIAACBIgzAAIAAjUIAuAAIAAAXQARgeAnAAQAqAAAPAjQAWgjAoAAQAmAAAUAWQAUAWAAApIAACGg");
	this.shape_6.setTransform(114.1,19.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AhKBRQgeggAAgyQABgzAdgeQAcgeAvAAQAvAAAdAdQAcAdAAAyIgBAWIibAAQACAYAOAOQAPANAXAAQAhAAALgZIA1AAQgKAhgYASQgaASgmAAQgvgBgdgfgAgkg5QgPANgBAWIBoAAIAAgBQAAgWgOgMQgNgNgZAAQgWAAgOANg");
	this.shape_7.setTransform(85.1,19.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_8.setTransform(65.5,17.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AhcBqIAAguIAAAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB1AAIAAAug");
	this.shape_9.setTransform(47.2,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAUAAIAtAAIAAAug");
	this.shape_10.setTransform(27.175,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AAXCKQgcgBgMgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAVAAIAsAAIAAAug");
	this.shape_11.setTransform(8.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_12, rect = new cjs.Rectangle(0,0,258.7,31.3), [rect]);


(lib.type_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgCgiIA2AAQADAbAnAAQASAAAKgHQAKgHAAgLQAAgUgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAYgSQAXgTAoAAQApAAAXARQAYASACAgIg0AAQgCgZglAAQgRAAgJAGQgKAHAAALQAAASAfAEIAiAEQAeADARARQARAQAAAaQAAAggaATQgYATgqAAIgEABQgpAAgXgRg");
	this.shape.setTransform(249.3,19.8527);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgoCZIg+AAIhAjTIA3AAIApCaIApiaIA7AAIApCaIAqiaIA2AAIhADTg");
	this.shape_1.setTransform(222.525,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgVAAgMAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAVgXAkAAQAnAAAXAYQAWAYAAAqIAACBg");
	this.shape_2.setTransform(194.5,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhwIg3AAIAAguIA3AAIAAg+IAzAAIAAA+IBBAAIAAAuIhBAAIAABkQAAAVAUAAIAtAAIAAAug");
	this.shape_3.setTransform(173.15,16.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(160.975,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgyAfgfQAfgfAwAAQAxAAAfAfQAfAfAAAyQAAAzgfAfQgfAfgxAAQgwAAgfgfgAgogvQgQATAAAcQAAAeAQASQAPARAZABQAagBAPgRQAQgSAAgeQAAgcgQgTQgPgSgaAAQgZAAgPASg");
	this.shape_5.setTransform(143.525,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("ABiBuIAAiDQAAgpgjABQgRAAgKALQgKAMAAATIAACBIgzAAIAAiDQAAgpgjABQgRgBgKAMQgKAMAAATIAACBIg0AAIAAjUIAuAAIAAAYQASgfAmAAQAqAAAPAjQAXgjAoAAQAlAAAUAWQAUAXAAAoIAACGg");
	this.shape_6.setTransform(114.075,19.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AhKBRQgdgfAAgzQAAgzAdgeQAdgeAuAAQAvAAAcAdQAcAdAAAyIgBAWIiaAAQACAYAOAOQAPAOAXAAQAhAAALgZIA1AAQgJAggZASQgaASglAAQgvAAgegggAglg5QgOAOgBAVIBnAAIAAgBQAAgVgNgNQgOgNgYAAQgWAAgPANg");
	this.shape_7.setTransform(85.075,19.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_8.setTransform(65.475,17.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AhdBqIAAguIABAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB2AAIAAAug");
	this.shape_9.setTransform(47.175,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhwIg3AAIAAguIA3AAIAAg+IAzAAIAAA+IBBAAIAAAuIhBAAIAABkQAAALAEAFQAFAFAKAAIAtAAIAAAug");
	this.shape_10.setTransform(27.125,16.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhwIg3AAIAAguIA3AAIAAg+IAzAAIAAA+IBBAAIAAAuIhBAAIAABkQAAALAEAFQAFAFAKAAIAtAAIAAAug");
	this.shape_11.setTransform(8.575,16.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_11, rect = new cjs.Rectangle(0,0,258.7,31.3), [rect]);


(lib.type_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgyAfgfQAfgfAwAAQAxAAAfAfQAfAfAAAyQAAAzgfAfQgfAfgxAAQgwAAgfgfgAgogvQgQATAAAcQAAAdAQATQAPARAZAAQAaAAAPgRQAQgTAAgdQAAgcgQgTQgPgSgaAAQgZAAgPASg");
	this.shape.setTransform(143.525,16.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("ABiBuIAAiDQAAgpgjABQgRAAgKALQgKAMAAATIAACBIgzAAIAAiDQAAgpgjABQgRgBgKAMQgKAMAAATIAACBIg0AAIAAjUIAuAAIAAAYQASgfAmAAQAqAAAPAkQAXgkAoAAQAlAAAUAWQAUAWAAAoIAACHg");
	this.shape_1.setTransform(114.075,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AhKBRQgdgfAAgzQAAgzAdgeQAdgeAuAAQAvAAAcAdQAcAdAAAyIgBAWIiaAAQACAYAOAOQAPAOAXAAQAhAAALgZIA1AAQgJAggZASQgaASglAAQgvAAgegggAglg5QgOAOgBAVIBnAAIAAgBQAAgVgNgNQgOgNgYAAQgWAAgPANg");
	this.shape_2.setTransform(85.075,16.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_3.setTransform(65.475,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AhdBrIAAgvIABAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB2AAIAAAvg");
	this.shape_4.setTransform(47.175,16.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhwIg3AAIAAguIA3AAIAAg+IAzAAIAAA+IBBAAIAAAuIhBAAIAABkQAAALAEAFQAFAFAKAAIAtAAIAAAug");
	this.shape_5.setTransform(27.125,13.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhwIg3AAIAAguIA3AAIAAg+IAzAAIAAA+IBBAAIAAAuIhBAAIAABkQAAALAEAFQAFAFAKAAIAtAAIAAAug");
	this.shape_6.setTransform(8.575,13.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_10, rect = new cjs.Rectangle(0,0,154.6,28.3), [rect]);


(lib.type_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgCgiIA2AAQADAbAoAAQARAAAKgHQAKgHAAgLQAAgUgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAYgSQAXgTAoAAQApAAAXARQAYASACAgIg0AAQgCgZglAAQgQAAgJAGQgKAHAAALQAAASAfAEIAhAEQAeADARARQARAQAAAaQAAAggaATQgYATgqAAIgEABQgpAAgXgRg");
	this.shape.setTransform(91.35,19.8527);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgoCZIg+AAIg/jTIA2AAIAoCaIAqiaIA7AAIApCaIAqiaIA2AAIg/DTg");
	this.shape_1.setTransform(64.6,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgVAAgMAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAVgXAjAAQAoAAAXAYQAWAYAAAqIAACBg");
	this.shape_2.setTransform(36.55,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAYCKQgcgBgNgMQgNgNAAgdIAAhwIg3AAIAAguIA3AAIAAg+IAyAAIAAA+IBBAAIAAAuIhBAAIAABkQAAAVAVAAIAsAAIAAAug");
	this.shape_3.setTransform(15.25,16.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(3.075,27.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_9, rect = new cjs.Rectangle(0,0,100.7,31.1), [rect]);


(lib.type_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgBgiIA1AAQADAbAnAAQASAAAKgHQAKgHAAgMQAAgTgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAXgSQAYgTAnAAQApAAAYARQAYARACAhIg0AAQgCgZgmAAQgPAAgKAGQgKAGAAALQAAATAgADIAhAFQAeADARARQAQAQAAAaQAAAggZATQgZATgqAAIgBABQgqAAgYgRg");
	this.shape.setTransform(249.325,19.8507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgpCZIg9AAIhAjTIA2AAIAqCZIApiZIA7AAIApCZIApiZIA3AAIhADTg");
	this.shape_1.setTransform(222.575,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgUAAgNAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAUgXAlAAQAnAAAWAXQAXAYAAAqIAACCg");
	this.shape_2.setTransform(194.525,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAYCKQgcgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFALAAIAtAAIAAAug");
	this.shape_3.setTransform(173.175,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(160.975,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgxAfggQAfgfAwAAQAxAAAfAfQAfAgAAAxQAAAzgfAfQgfAfgxAAQgxAAgegfgAgpguQgPASAAAcQAAAeAPASQAQASAZAAQAZAAAQgSQAQgTAAgdQAAgcgQgSQgQgTgZAAQgZAAgQATg");
	this.shape_5.setTransform(143.575,19.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("ABhBuIAAiDQAAgpgiABQgRAAgKALQgLAMAAATIAACBIgyAAIAAiDQAAgpgjABQgQgBgLAMQgLANAAASIAACBIgzAAIAAjUIAuAAIAAAXQARgeAnAAQAqAAAPAjQAWgjAoAAQAmAAAUAWQAUAWAAAoIAACHg");
	this.shape_6.setTransform(114.1,19.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AhKBRQgeggAAgyQABgzAdgeQAcgeAvAAQAvAAAdAdQAcAdAAAyIgCAWIiaAAQACAYAOAOQAPANAXAAQAhAAALgZIA1AAQgKAhgYASQgaASgmAAQgvgBgdgfgAgkg5QgPANgBAWIBoAAIAAgBQAAgWgOgMQgNgNgZAAQgWAAgOANg");
	this.shape_7.setTransform(85.1,19.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_8.setTransform(65.5,17.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AhcBqIAAguIAAAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB1AAIAAAug");
	this.shape_9.setTransform(47.2,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAVAAIAtAAIAAAug");
	this.shape_10.setTransform(27.15,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AAXCKQgcgBgMgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAVAAIAsAAIAAAug");
	this.shape_11.setTransform(8.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_8, rect = new cjs.Rectangle(0,0,258.7,31.3), [rect]);


(lib.type_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgBgiIA1AAQADAbAnAAQASAAAKgHQAKgHAAgMQAAgTgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAXgSQAYgTAoAAQApAAAXARQAYARACAhIg0AAQgCgZgmAAQgPAAgKAGQgKAGAAALQAAATAgADIAhAFQAeADARARQAQAQAAAaQAAAggYATQgZATgqAAIgCABQgqAAgYgRg");
	this.shape.setTransform(249.325,19.8507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgpCZIg9AAIhAjTIA2AAIAqCZIApiZIA7AAIApCZIAqiZIA2AAIhADTg");
	this.shape_1.setTransform(222.575,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgUAAgNAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAUgXAlAAQAnAAAWAXQAXAYAAAqIAACCg");
	this.shape_2.setTransform(194.525,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAYCKQgcgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFALAAIAtAAIAAAug");
	this.shape_3.setTransform(173.175,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(160.975,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgxAfggQAfgfAwAAQAxAAAfAfQAfAgAAAxQAAAzgfAfQgfAfgxAAQgxAAgegfgAgpguQgPASAAAcQAAAeAPASQAQASAZAAQAZAAAQgSQAQgTAAgdQAAgcgQgSQgQgTgZAAQgZAAgQATg");
	this.shape_5.setTransform(143.575,19.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("ABhBuIAAiDQAAgpgiABQgRAAgKALQgLAMAAATIAACBIgyAAIAAiDQAAgpgjABQgQgBgLAMQgLANAAASIAACBIgzAAIAAjUIAuAAIAAAXQARgeAnAAQAqAAAPAjQAWgjAoAAQAmAAAUAWQAUAWAAAoIAACHg");
	this.shape_6.setTransform(114.1,19.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AhKBRQgeggAAgyQABgzAdgeQAcgeAvAAQAvAAAdAdQAcAdAAAyIgBAWIibAAQACAYAOAOQAPANAXAAQAhAAALgZIA1AAQgKAhgYASQgaASgmAAQgvgBgdgfgAgkg5QgPANgBAWIBoAAIAAgBQAAgWgOgMQgNgNgZAAQgWAAgOANg");
	this.shape_7.setTransform(85.1,19.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_8.setTransform(65.5,17.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AhcBqIAAguIAAAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB1AAIAAAug");
	this.shape_9.setTransform(47.2,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAUAAIAtAAIAAAug");
	this.shape_10.setTransform(27.175,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AAXCKQgcgBgMgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAVAAIAsAAIAAAug");
	this.shape_11.setTransform(8.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_7, rect = new cjs.Rectangle(0,0,258.7,31.3), [rect]);


(lib.type_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgCgiIA2AAQADAbAnAAQASAAAKgHQAKgHAAgLQAAgUgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAYgSQAXgTAoAAQApAAAXARQAYASACAgIg0AAQgCgZglAAQgRAAgJAGQgKAGAAALQAAATAfAEIAiAEQAeADARARQARAQAAAaQAAAggaATQgYATgqAAIgEABQgpAAgXgRg");
	this.shape.setTransform(249.3,19.8527);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgoCZIg+AAIhAjTIA3AAIApCZIApiZIA7AAIApCZIAqiZIA2AAIhADTg");
	this.shape_1.setTransform(222.525,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgVAAgMAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAVgXAkAAQAnAAAXAYQAWAYAAAqIAACBg");
	this.shape_2.setTransform(194.5,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgMAAgeIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAVAUAAIAtAAIAAAug");
	this.shape_3.setTransform(173.15,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(160.975,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgyAfgfQAfgfAwAAQAxAAAfAfQAfAfAAAyQAAAzgfAfQgfAfgxAAQgwAAgfgfgAgogvQgQATAAAcQAAAeAQASQAPARAZABQAagBAPgRQAQgSAAgeQAAgcgQgTQgPgSgaAAQgZAAgPASg");
	this.shape_5.setTransform(143.525,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("ABiBuIAAiDQAAgpgjABQgRAAgKALQgKAMAAATIAACBIgzAAIAAiDQAAgpgjABQgRgBgKAMQgKAMAAATIAACBIg0AAIAAjUIAuAAIAAAYQASgfAmAAQAqAAAPAjQAXgjAoAAQAlAAAUAWQAUAXAAAoIAACGg");
	this.shape_6.setTransform(114.075,19.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AhKBRQgdgfAAgzQAAgzAdgeQAdgeAuAAQAvAAAcAdQAcAdAAAyIgBAWIiaAAQACAYAOAOQAPAOAXAAQAhAAALgZIA1AAQgJAggZASQgaASglAAQgvAAgegggAglg5QgOAOgBAVIBnAAIAAgBQAAgVgNgNQgOgNgYAAQgWAAgPANg");
	this.shape_7.setTransform(85.075,19.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_8.setTransform(65.475,17.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AhdBqIAAguIABAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB2AAIAAAug");
	this.shape_9.setTransform(47.175,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgMAAgeIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFAKAAIAtAAIAAAug");
	this.shape_10.setTransform(27.125,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgMAAgeIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFAKAAIAtAAIAAAug");
	this.shape_11.setTransform(8.575,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_6, rect = new cjs.Rectangle(0,0,258.7,31.3), [rect]);


(lib.type_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgyAfgfQAfgfAwAAQAxAAAfAfQAfAfAAAyQAAAzgfAfQgfAfgxAAQgwAAgfgfgAgogvQgQASAAAdQAAAdAQATQAPASAZAAQAaAAAPgSQAQgTAAgdQAAgdgQgSQgPgSgaAAQgZAAgPASg");
	this.shape.setTransform(143.525,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("ABiBuIAAiDQAAgpgjAAQgRAAgKAMQgKAMAAATIAACBIgzAAIAAiDQAAgpgjAAQgRAAgKANQgKALAAATIAACBIg0AAIAAjUIAuAAIAAAYQASgfAmAAQAqAAAPAjQAXgjAoAAQAlAAAUAWQAUAXAAAoIAACGg");
	this.shape_1.setTransform(114.075,16.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AhKBRQgdgfAAgzQAAgzAdgeQAdgeAuAAQAvAAAcAdQAcAdAAAyIgBAWIiaAAQACAYAOAOQAPAOAXAAQAhAAALgZIA1AAQgJAggZASQgaASglAAQgvAAgegggAglg5QgOAOgBAVIBnAAIAAgBQAAgVgNgNQgOgNgYAAQgWAAgPANg");
	this.shape_2.setTransform(85.075,16.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_3.setTransform(65.475,14.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AhdBqIAAguIABAAIBxh3IhvAAIAAgvICzAAIAAAvIhxB3IB2AAIAAAug");
	this.shape_4.setTransform(47.175,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AAXCKQgbAAgNgNQgNgNAAgdIAAhvIg3AAIAAgvIA3AAIAAg+IAzAAIAAA+IBBAAIAAAvIhBAAIAABkQAAALAEAEQAFAFAKAAIAtAAIAAAug");
	this.shape_5.setTransform(27.125,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AAXCKQgbAAgNgNQgNgNAAgdIAAhvIg3AAIAAgvIA3AAIAAg+IAzAAIAAA+IBBAAIAAAvIhBAAIAABkQAAALAEAEQAFAFAKAAIAtAAIAAAug");
	this.shape_6.setTransform(8.575,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_5, rect = new cjs.Rectangle(0,0,154.6,28.3), [rect]);


(lib.type_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgCgiIA2AAQADAbAoAAQARAAAKgHQAKgHAAgLQAAgUgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAYgSQAXgTAoAAQApAAAXARQAYASACAgIg0AAQgCgZglAAQgQAAgJAGQgKAGAAALQAAATAfAEIAhAEQAeADARARQARAQAAAaQAAAggaATQgYATgqAAIgEABQgpAAgXgRg");
	this.shape.setTransform(91.35,19.8527);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgoCZIg+AAIg/jTIA2AAIAoCZIAqiZIA7AAIApCZIAqiZIA2AAIg/DTg");
	this.shape_1.setTransform(64.6,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgVAAgMAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAVgXAjAAQAoAAAXAYQAWAYAAAqIAACBg");
	this.shape_2.setTransform(36.55,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAYCKQgcgBgNgMQgNgMAAgeIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAVAVAAIAsAAIAAAug");
	this.shape_3.setTransform(15.25,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(3.075,27.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_4, rect = new cjs.Rectangle(0,0,100.7,31.1), [rect]);


(lib.type_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgBgiIA1AAQADAbAnAAQASAAAKgHQAKgHAAgMQAAgTgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAXgSQAYgTAnAAQApAAAYARQAYARACAhIg0AAQgCgZgmAAQgPAAgKAGQgKAGAAALQAAATAgADIAhAFQAeADARARQAQAQAAAaQAAAggZATQgZATgqAAIgBABQgqAAgYgRg");
	this.shape.setTransform(249.325,19.8507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgpCZIg9AAIhAjTIA2AAIAqCZIApiZIA7AAIApCZIApiZIA3AAIhADTg");
	this.shape_1.setTransform(222.575,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgUAAgNAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAUgXAlAAQAnAAAWAXQAXAYAAAqIAACCg");
	this.shape_2.setTransform(194.525,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAYCKQgcgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFALAAIAtAAIAAAug");
	this.shape_3.setTransform(173.175,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(160.975,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgxAfggQAfgfAwAAQAxAAAfAfQAfAgAAAxQAAAzgfAfQgfAfgxAAQgxAAgegfgAgpguQgPASAAAcQAAAeAPASQAQASAZAAQAZAAAQgSQAQgTAAgdQAAgcgQgSQgQgTgZAAQgZAAgQATg");
	this.shape_5.setTransform(143.575,19.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("ABhBuIAAiDQAAgpgiABQgRAAgKALQgLAMAAATIAACBIgyAAIAAiDQAAgpgjABQgQgBgLAMQgLANAAASIAACBIgzAAIAAjUIAuAAIAAAXQARgeAnAAQAqAAAPAjQAWgjAoAAQAmAAAUAWQAUAWAAAoIAACHg");
	this.shape_6.setTransform(114.1,19.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AhKBRQgeggAAgyQABgzAdgeQAcgeAvAAQAvAAAdAdQAcAdAAAyIgCAWIiaAAQACAYAOAOQAPANAXAAQAhAAALgZIA1AAQgKAhgYASQgaASgmAAQgvgBgdgfgAgkg5QgPANgBAWIBoAAIAAgBQAAgWgOgMQgNgNgZAAQgWAAgOANg");
	this.shape_7.setTransform(85.1,19.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_8.setTransform(65.5,17.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AhcBqIAAguIAAAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB1AAIAAAug");
	this.shape_9.setTransform(47.2,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAVAAIAtAAIAAAug");
	this.shape_10.setTransform(27.15,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AAXCKQgcgBgMgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAVAAIAsAAIAAAug");
	this.shape_11.setTransform(8.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_3, rect = new cjs.Rectangle(0,0,258.7,31.3), [rect]);


(lib.type_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgBgiIA1AAQADAbAnAAQASAAAKgHQAKgHAAgMQAAgTgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAXgSQAYgTAoAAQApAAAXARQAYARACAhIg0AAQgCgZgmAAQgPAAgKAGQgKAGAAALQAAATAgADIAhAFQAeADARARQAQAQAAAaQAAAggYATQgZATgqAAIgCABQgqAAgYgRg");
	this.shape.setTransform(249.325,19.8507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgpCZIg9AAIhAjTIA2AAIAqCZIApiZIA7AAIApCZIAqiZIA2AAIhADTg");
	this.shape_1.setTransform(222.575,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgUAAgNAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAUgXAlAAQAnAAAWAXQAXAYAAAqIAACCg");
	this.shape_2.setTransform(194.525,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAYCKQgcgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFALAAIAtAAIAAAug");
	this.shape_3.setTransform(173.175,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(160.975,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgxAfggQAfgfAwAAQAxAAAfAfQAfAgAAAxQAAAzgfAfQgfAfgxAAQgxAAgegfgAgpguQgPASAAAcQAAAeAPASQAQASAZAAQAZAAAQgSQAQgTAAgdQAAgcgQgSQgQgTgZAAQgZAAgQATg");
	this.shape_5.setTransform(143.575,19.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("ABhBuIAAiDQAAgpgiABQgRAAgKALQgLAMAAATIAACBIgyAAIAAiDQAAgpgjABQgQgBgLAMQgLANAAASIAACBIgzAAIAAjUIAuAAIAAAXQARgeAnAAQAqAAAPAjQAWgjAoAAQAmAAAUAWQAUAWAAAoIAACHg");
	this.shape_6.setTransform(114.1,19.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AhKBRQgeggAAgyQABgzAdgeQAcgeAvAAQAvAAAdAdQAcAdAAAyIgBAWIibAAQACAYAOAOQAPANAXAAQAhAAALgZIA1AAQgKAhgYASQgaASgmAAQgvgBgdgfgAgkg5QgPANgBAWIBoAAIAAgBQAAgWgOgMQgNgNgZAAQgWAAgOANg");
	this.shape_7.setTransform(85.1,19.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_8.setTransform(65.5,17.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AhcBqIAAguIAAAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB1AAIAAAug");
	this.shape_9.setTransform(47.2,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAUAAIAtAAIAAAug");
	this.shape_10.setTransform(27.175,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AAXCKQgcgBgMgMQgNgNAAgdIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBCAAIAAAuIhCAAIAABjQAAAVAVAAIAsAAIAAAug");
	this.shape_11.setTransform(8.6,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_2, rect = new cjs.Rectangle(0,0,258.7,31.3), [rect]);


(lib.type_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgCgiIA2AAQADAbAnAAQASAAAKgHQAKgHAAgLQAAgUgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAYgSQAXgTAoAAQApAAAXARQAYASACAgIg0AAQgCgZglAAQgRAAgJAGQgKAGAAALQAAATAfAEIAiAEQAeADARARQARAQAAAaQAAAggaATQgYATgqAAIgEABQgpAAgXgRg");
	this.shape.setTransform(249.3,19.8527);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgoCZIg+AAIhAjTIA3AAIApCZIApiZIA7AAIApCZIAqiZIA2AAIhADTg");
	this.shape_1.setTransform(222.525,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgVAAgMAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAVgXAkAAQAnAAAXAYQAWAYAAAqIAACBg");
	this.shape_2.setTransform(194.5,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgMAAgeIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAVAUAAIAtAAIAAAug");
	this.shape_3.setTransform(173.15,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(160.975,27.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgyAfgfQAfgfAwAAQAxAAAfAfQAfAfAAAyQAAAzgfAfQgfAfgxAAQgwAAgfgfgAgogvQgQATAAAcQAAAeAQASQAPARAZABQAagBAPgRQAQgSAAgeQAAgcgQgTQgPgSgaAAQgZAAgPASg");
	this.shape_5.setTransform(143.525,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("ABiBuIAAiDQAAgpgjABQgRAAgKALQgKAMAAATIAACBIgzAAIAAiDQAAgpgjABQgRgBgKAMQgKAMAAATIAACBIg0AAIAAjUIAuAAIAAAYQASgfAmAAQAqAAAPAjQAXgjAoAAQAlAAAUAWQAUAXAAAoIAACGg");
	this.shape_6.setTransform(114.075,19.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AhKBRQgdgfAAgzQAAgzAdgeQAdgeAuAAQAvAAAcAdQAcAdAAAyIgBAWIiaAAQACAYAOAOQAPAOAXAAQAhAAALgZIA1AAQgJAggZASQgaASglAAQgvAAgegggAglg5QgOAOgBAVIBnAAIAAgBQAAgVgNgNQgOgNgYAAQgWAAgPANg");
	this.shape_7.setTransform(85.075,19.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_8.setTransform(65.475,17.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AhdBqIAAguIABAAIBxh3IhvAAIAAguICzAAIAAAuIhxB3IB2AAIAAAug");
	this.shape_9.setTransform(47.175,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgMAAgeIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFAKAAIAtAAIAAAug");
	this.shape_10.setTransform(27.125,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AAXCKQgbgBgNgMQgNgMAAgeIAAhvIg3AAIAAguIA3AAIAAg/IAzAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAMAEAEQAFAFAKAAIAtAAIAAAug");
	this.shape_11.setTransform(8.575,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_1, rect = new cjs.Rectangle(0,0,258.7,31.3), [rect]);


(lib.type_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhPBSQgfgfAAgzQAAgyAfgfQAfgfAwAAQAxAAAfAfQAfAfAAAyQAAAzgfAfQgfAfgxAAQgwAAgfgfgAgogvQgQASAAAdQAAAdAQATQAPASAZAAQAaAAAPgSQAQgTAAgdQAAgdgQgSQgPgSgaAAQgZAAgPASg");
	this.shape.setTransform(143.525,16.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("ABiBuIAAiDQAAgpgjAAQgRAAgKAMQgKAMAAATIAACBIgzAAIAAiDQAAgpgjAAQgRAAgKANQgKALAAATIAACBIg0AAIAAjUIAuAAIAAAYQASgfAmAAQAqAAAPAjQAXgjAoAAQAlAAAUAWQAUAXAAAoIAACGg");
	this.shape_1.setTransform(114.075,16.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AhKBRQgdgfAAgzQAAgzAdgeQAdgeAuAAQAvAAAcAdQAcAdAAAyIgBAWIiaAAQACAYAOAOQAPAOAXAAQAhAAALgZIA1AAQgJAggZASQgaASglAAQgvAAgegggAglg5QgOAOgBAVIBnAAIAAgBQAAgVgNgNQgOgNgYAAQgWAAgPANg");
	this.shape_2.setTransform(85.075,16.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AhAAXIAAgtICBAAIAAAtg");
	this.shape_3.setTransform(65.475,14.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AhdBqIAAguIABAAIBxh3IhvAAIAAgvICzAAIAAAvIhxB3IB2AAIAAAug");
	this.shape_4.setTransform(47.175,16.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AAXCKQgbAAgNgNQgNgNAAgdIAAhvIg3AAIAAgvIA3AAIAAg+IAzAAIAAA+IBBAAIAAAvIhBAAIAABkQAAALAEAEQAFAFAKAAIAtAAIAAAug");
	this.shape_5.setTransform(27.125,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AAXCKQgbAAgNgNQgNgNAAgdIAAhvIg3AAIAAgvIA3AAIAAg+IAzAAIAAA+IBBAAIAAAvIhBAAIAABkQAAALAEAEQAFAFAKAAIAtAAIAAAug");
	this.shape_6.setTransform(8.575,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type_0, rect = new cjs.Rectangle(0,0,154.6,28.3), [rect]);


(lib.type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AhCBgQgZgSgCgiIA2AAQADAbAoAAQARAAAKgHQAKgHAAgLQAAgUgdgDIghgDQgegEgRgQQgRgQAAgbQAAggAYgSQAXgTAoAAQApAAAXARQAYASACAgIg0AAQgCgZglAAQgQAAgJAGQgKAGAAALQAAATAfAEIAhAEQAeADARARQARAQAAAaQAAAggaATQgYATgqAAIgEABQgpAAgXgRg");
	this.shape.setTransform(91.35,19.8527);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AAqBqIgqiZIgoCZIg+AAIg/jTIA2AAIAoCZIAqiZIA7AAIApCZIAqiZIA2AAIg/DTg");
	this.shape_1.setTransform(64.6,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AAtCZIAAh8QAAgwgrAAQgVAAgMAOQgNANAAAXIAAB6Ig0AAIAAkxIA0AAIAABtQAVgXAjAAQAoAAAXAYQAWAYAAAqIAACBg");
	this.shape_2.setTransform(36.55,15.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AAYCKQgcgBgNgMQgNgMAAgeIAAhvIg3AAIAAguIA3AAIAAg/IAyAAIAAA/IBBAAIAAAuIhBAAIAABjQAAAVAVAAIAsAAIAAAug");
	this.shape_3.setTransform(15.25,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgeAhIAAhBIA9AAIAABBg");
	this.shape_4.setTransform(3.075,27.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.type, rect = new cjs.Rectangle(0,0,100.7,31.1), [rect]);


(lib.image_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgEgBgEgDQgDgDAAgEIAAgxQAAgFADgCQAEgDAEAAIANAAQAEAAAEADQADADAAAEIAAAxQAAAEgDADQgDADgFABg");
	this.shape.setTransform(33.675,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgEAAgDgDQgDgDAAgEIAAgOQAAgFADgDQADgDAEAAIAOAAQAFAAADgDQACgEAAgEIAAibQAAgFADgDQADgCAEAAIAPAAQAEAAADACQADADAAAFIAACbQAAAEgDAEQgDADgEAAIgPAAQgEAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgFAAg");
	this.shape_1.setTransform(24.825,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgFAAgCgDQgDgDAAgFIAAgNQAAgFADgDQACgDAFAAIANAAQAEAAADADQADADABAFIAAANQgBAFgDADQgDADgEAAg");
	this.shape_2.setTransform(23.05,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgEAAgEgDQgCgEAAgEIAAh4QAAgEACgDQAEgDAEAAIAPAAQAEAAADgDQACgEAAgEIAAgOQAAgFADgDQAEgDAEAAIAOAAQAEAAADADQAEADAAAFIAAAPQAAAEgEADQgDADgEAAIgOAAQgEAAgEADQgDADAAAFIAAB3QAAAEgCAEQgDADgEAAg");
	this.shape_3.setTransform(17.75,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgEAAgEIAAgOQAAgEADgDQADgDAFAAIANAAQAFAAADADQADADAAAEIAAAOQAAAEgDAEQgDADgFAAg");
	this.shape_4.setTransform(15.9286,47.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgGA1QgEAAgEgDQgDgDAAgFIAAhTQAAgFADgDQAEgDAEAAIANAAQAEAAAEADQADAEAAAEIAABTQAAAFgDADQgDADgFAAg");
	this.shape_5.setTransform(1.775,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgpA1QgFAAgDgDQgDgEAAgFIAAgwQAAgEADgDQADgDAFAAIAOAAQAFAAACgDQADgEAAgEIAAgOQAAgEAEgDQADgDAEAAIAwAAQAFAAADADQADADAAAEIAAAPQAAAEgDADQgDADgFAAIgwAAQgEAAgDADQgEADAAAFIAAAxQAAAEgDADQgCADgFAAg");
	this.shape_6.setTransform(12.4,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgEAAgEgDQgCgDAAgEIAAhVQAAgEACgDQAEgDAEAAIAPAAQAEAAADADQACADAAAEIAAAyQAAAEADADQAEADADAAIAPAAQAEAAADADQAEADAAAEIAAAPQAAAEgEADQgDADgEAAg");
	this.shape_7.setTransform(10.65,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgEAAgDgDQgEgDAAgEIAAgPQAAgEAEgDQADgDAEAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQAEgDADAAIAPAAQAEAAAEADQADADAAAFIAAAxQAAAEgDADQgDADgFAAIgPAAQgDAAgEADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.6,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AAKA1QgDAAgEgDQgDgDAAgEIAAgxQAAgFgCgDQgDgDgEAAIgPAAQgEAAgEgDQgDgDABgEIAAgPQgBgEADgDQAEgDAEAAIAxAAQAFAAADADQADADAAAFIAABUQAAAEgDADQgDADgFAAg");
	this.shape_9.setTransform(31.9,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_10.setTransform(40.775,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgEgDQgDgDABgFIAAgNQgBgFADgDQAEgDAEAAIAxAAQAEAAAEADQADAEAAAEIAAANQAAAFgDADQgDADgFAAg");
	this.shape_11.setTransform(31.9,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_10, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgEgBgEgDQgDgDAAgEIAAgxQAAgFADgCQAEgDAEAAIANAAQAEAAAEADQADADAAAEIAAAxQAAAEgDADQgDADgFABg");
	this.shape.setTransform(33.675,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgEAAgEgDQgDgDAAgEIAAgOQAAgFADgDQAEgDAEAAIAPAAQAEAAADgDQACgEAAgEIAAibQAAgFADgDQADgCAEAAIAPAAQAEAAAEACQACADABAFIAACbQgBAEgCAEQgEADgEAAIgPAAQgEAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgEAAg");
	this.shape_1.setTransform(24.8,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgEAAgEgDQgDgDAAgFIAAgNQAAgFADgDQAEgDAEAAIANAAQAFAAADADQADADAAAFIAAANQAAAFgDADQgDADgFAAg");
	this.shape_2.setTransform(23.025,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgEAAgDgDQgEgEAAgEIAAh4QAAgEAEgDQADgDAEAAIAOAAQAFAAADgDQACgEAAgEIAAgOQAAgFADgDQADgDAEAAIAPAAQAFAAADADQACADAAAFIAAAPQAAAEgCADQgDADgFAAIgPAAQgEAAgDADQgDADAAAFIAAB3QAAAEgCAEQgDADgFAAg");
	this.shape_3.setTransform(17.7,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgEAAgEgDQgDgEAAgEIAAgOQAAgEADgDQAEgDAEAAIANAAQAFAAADADQADADAAAEIAAAOQAAAEgDAEQgDADgFAAg");
	this.shape_4.setTransform(15.8786,47.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgHA1QgDAAgEgDQgCgDgBgFIAAhTQABgFACgDQAEgDADAAIAPAAQADAAAEADQADAEAAAEIAABTQAAAFgDADQgEADgDAAg");
	this.shape_5.setTransform(1.75,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgqA1QgDAAgEgDQgDgEAAgFIAAgwQAAgEADgDQAEgDADAAIAPAAQAEAAADgDQAEgEAAgEIAAgOQAAgEACgDQAEgDAEAAIAwAAQAFAAADADQADADAAAEIAAAPQAAAEgDADQgDADgFAAIgwAAQgEAAgEADQgCADAAAFIAAAxQAAAEgEADQgDADgEAAg");
	this.shape_6.setTransform(12.35,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgEAAgDgDQgEgDAAgEIAAhVQAAgEAEgDQADgDAEAAIAOAAQAFAAADADQACADAAAEIAAAyQAAAEADADQADADAEAAIAPAAQAFAAADADQACADAAAEIAAAPQAAAEgCADQgDADgFAAg");
	this.shape_7.setTransform(10.6,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgEAAgEgDQgDgDAAgEIAAgPQAAgEADgDQAEgDAEAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQAEgDAEAAIAOAAQAEAAAEADQADADAAAFIAAAxQAAAEgDADQgDADgFAAIgOAAQgEAAgEADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.575,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AAKA1QgDAAgEgDQgDgDAAgEIAAgxQAAgFgCgDQgDgDgEAAIgPAAQgEAAgEgDQgDgDABgEIAAgPQgBgEADgDQAEgDAEAAIAxAAQAFAAADADQADADAAAFIAABUQAAAEgDADQgDADgFAAg");
	this.shape_9.setTransform(31.9,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgEAAgEgDQgDgEAAgEIAAhTQAAgFADgDQAEgDAEAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_10.setTransform(40.775,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgEgDQgDgDABgFIAAgNQgBgFADgDQAEgDAEAAIAxAAQAEAAAEADQADAEAAAEIAAANQAAAFgDADQgDADgFAAg");
	this.shape_11.setTransform(31.9,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_9, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgFgBgDgDQgDgDAAgEIAAgxQAAgFADgCQADgDAFAAIANAAQAEAAADADQAEADAAAEIAAAxQAAAEgDADQgEADgEABg");
	this.shape.setTransform(33.725,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgFAAgCgDQgDgDAAgEIAAgOQAAgFADgDQACgDAFAAIAOAAQAFAAADgDQACgDAAgFIAAibQAAgFADgDQADgCAFAAIAOAAQAEAAADACQADADABAFIAACbQgBAFgDADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgFAAg");
	this.shape_1.setTransform(24.85,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAFAAIANAAQAEAAAEADQADADAAAFIAAANQAAAFgDADQgEADgEAAg");
	this.shape_2.setTransform(23.075,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgFAAgDgDQgCgDAAgFIAAh4QAAgEACgDQADgDAFAAIAPAAQAEAAADgDQACgDAAgFIAAgOQAAgFADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAPQAAAEgEADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAB3QAAAFgCADQgDADgEAAg");
	this.shape_3.setTransform(17.75,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgEAAgEIAAgNQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAAANQAAAEgDAEQgEADgEAAg");
	this.shape_4.setTransform(15.9286,47.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAEAAADADQAEAEAAAEIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_5.setTransform(1.775,37.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgpA1QgLAAAAgLIAAgxQAAgEADgDQADgDAFAAIAOAAQAFAAACgDQADgDAAgFIAAgOQAAgEAEgDQADgDAEAAIAwAAQAEAAAEADQADADAAAEIAAAPQAAAEgDADQgEADgEAAIgwAAQgEAAgDADQgEADAAAFIAAAxQAAAEgDADQgCADgFAAg");
	this.shape_6.setTransform(12.4,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgFAAgDgDQgCgDAAgEIAAhVQAAgEACgDQADgDAFAAIAPAAQAEAAADADQACADAAAEIAAAyQAAAEADADQADADAEAAIAPAAQAEAAADADQAEADAAAEIAAAPQAAAEgEADQgDADgEAAg");
	this.shape_7.setTransform(10.65,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgFAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAFAAIB4AAQAEAAADgDQADgDAAgFIAAgxQAAgEADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAxQAAAEgDADQgEADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.625,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AALA1QgFAAgDgDQgDgDAAgEIAAgxQAAgFgCgDQgEgDgEAAIgOAAQgEAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAEAAIAxAAQAEAAADADQADADAAAFIAABUQAAAEgDADQgDADgEAAg");
	this.shape_9.setTransform(31.95,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgDAAgFIAAhTQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAABTQAAAFgDADQgEADgEAAg");
	this.shape_10.setTransform(40.825,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAEAAIAxAAQAEAAADAEQADADAAAEIAAANQAAAFgDADQgDADgEAAg");
	this.shape_11.setTransform(31.95,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_8, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgFgBgDgDQgDgDAAgEIAAgxQAAgFADgCQADgDAFAAIANAAQAEAAADADQAEADAAAEIAAAxQAAAEgDADQgEADgEABg");
	this.shape.setTransform(33.725,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgFAAgCgDQgDgDAAgEIAAgOQAAgFADgDQACgDAFAAIAOAAQAFAAADgDQACgDAAgFIAAibQAAgFADgDQADgCAFAAIAOAAQAEAAADACQADADABAFIAACbQgBAFgDADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgFAAg");
	this.shape_1.setTransform(24.85,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAFAAIANAAQAEAAAEADQADADAAAFIAAANQAAAFgDADQgEADgEAAg");
	this.shape_2.setTransform(23.075,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgFAAgDgDQgCgDAAgFIAAh4QAAgEACgDQADgDAFAAIAPAAQAEAAADgDQACgDAAgFIAAgOQAAgFADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAPQAAAEgEADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAB3QAAAFgCADQgDADgEAAg");
	this.shape_3.setTransform(17.75,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgEAAgEIAAgNQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAAANQAAAEgDAEQgEADgEAAg");
	this.shape_4.setTransform(15.9286,47.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAEAAADADQAEAEAAAEIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_5.setTransform(1.775,37.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgpA1QgLAAAAgLIAAgxQAAgEADgDQADgDAFAAIAOAAQAFAAACgDQADgDAAgFIAAgOQAAgEAEgDQADgDAEAAIAwAAQAEAAAEADQADADAAAEIAAAPQAAAEgDADQgEADgEAAIgwAAQgEAAgDADQgEADAAAFIAAAxQAAAEgDADQgCADgFAAg");
	this.shape_6.setTransform(12.4,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgFAAgDgDQgCgDAAgEIAAhVQAAgEACgDQADgDAFAAIAPAAQAEAAADADQACADAAAEIAAAyQAAAEADADQADADAEAAIAPAAQAEAAADADQAEADAAAEIAAAPQAAAEgEADQgDADgEAAg");
	this.shape_7.setTransform(10.65,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgFAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAFAAIB4AAQAEAAADgDQADgDAAgFIAAgxQAAgEADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAxQAAAEgDADQgEADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.625,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AALA1QgFAAgDgDQgDgDAAgEIAAgxQAAgFgCgDQgEgDgEAAIgOAAQgEAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAEAAIAxAAQAEAAADADQADADAAAFIAABUQAAAEgDADQgDADgEAAg");
	this.shape_9.setTransform(31.95,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgDAAgFIAAhTQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAABTQAAAFgDADQgEADgEAAg");
	this.shape_10.setTransform(40.825,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAEAAIAxAAQAEAAADAEQADADAAAEIAAANQAAAFgDADQgDADgEAAg");
	this.shape_11.setTransform(31.95,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_7, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgEgBgEgDQgDgDAAgEIAAgxQAAgFADgCQAEgDAEAAIANAAQAEAAAEADQADADAAAEIAAAxQAAAEgDADQgDADgFABg");
	this.shape.setTransform(33.675,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgEAAgDgDQgDgDAAgEIAAgOQAAgFADgDQADgDAEAAIAOAAQAFAAADgDQACgEAAgEIAAibQAAgFADgDQADgCAEAAIAPAAQAEAAADACQADADAAAFIAACbQAAAEgDAEQgDADgEAAIgPAAQgEAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgFAAg");
	this.shape_1.setTransform(24.825,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgFAAgCgDQgDgDAAgFIAAgNQAAgFADgDQACgDAFAAIANAAQAEAAADADQADADABAFIAAANQgBAFgDADQgDADgEAAg");
	this.shape_2.setTransform(23.05,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgEAAgEgDQgCgEAAgEIAAh4QAAgEACgDQAEgDAEAAIAPAAQAEAAADgDQACgEAAgEIAAgOQAAgFADgDQAEgDAEAAIAOAAQAEAAADADQAEADAAAFIAAAPQAAAEgEADQgDADgEAAIgOAAQgEAAgEADQgDADAAAFIAAB3QAAAEgCAEQgDADgEAAg");
	this.shape_3.setTransform(17.75,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgEQgDgDAAgDIAAgOQAAgEADgEQADgCAFAAIANAAQAFAAADACQADAEAAAEIAAAOQAAADgDADQgDAEgFAAg");
	this.shape_4.setTransform(15.9286,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgGA1QgEAAgEgDQgDgDAAgFIAAhTQAAgFADgDQAEgDAEAAIANAAQAEAAAEADQADAEAAAEIAABTQAAAFgDADQgDADgFAAg");
	this.shape_5.setTransform(1.775,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgpA1QgFAAgDgDQgDgEAAgFIAAgwQAAgEADgDQADgDAFAAIAOAAQAFAAACgDQADgEAAgEIAAgOQAAgEAEgDQADgDAEAAIAwAAQAFAAADADQADADAAAEIAAAPQAAAEgDADQgDADgFAAIgwAAQgEAAgDADQgEADAAAFIAAAxQAAAEgDADQgCADgFAAg");
	this.shape_6.setTransform(12.4,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgEAAgEgDQgCgDAAgEIAAhVQAAgEACgDQAEgDAEAAIAPAAQAEAAADADQACADAAAEIAAAyQAAAEADADQAEADADAAIAPAAQAEAAADADQAEADAAAEIAAAPQAAAEgEADQgDADgEAAg");
	this.shape_7.setTransform(10.65,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgEAAgDgDQgEgDAAgEIAAgPQAAgEAEgDQADgDAEAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQAEgDADAAIAPAAQAEAAAEADQADADAAAFIAAAxQAAAEgDADQgDADgFAAIgPAAQgDAAgEADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.6,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AAKA1QgDAAgEgDQgDgDAAgEIAAgxQAAgFgCgDQgDgDgEAAIgPAAQgEAAgEgDQgDgDABgEIAAgPQgBgEADgDQAEgDAEAAIAxAAQAFAAADADQADADAAAFIAABUQAAAEgDADQgDADgFAAg");
	this.shape_9.setTransform(31.9,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_10.setTransform(40.775,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgEgDQgDgDABgFIAAgNQgBgFADgDQAEgDAEAAIAxAAQAEAAAEADQADAEAAAEIAAANQAAAFgDADQgDADgFAAg");
	this.shape_11.setTransform(31.9,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_6, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgEgBgEgDQgDgDAAgEIAAgxQAAgFADgCQAEgDAEAAIANAAQAEAAAEADQADADAAAEIAAAxQAAAEgDADQgDADgFABg");
	this.shape.setTransform(33.675,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgEAAgEgDQgDgDAAgEIAAgOQAAgFADgDQAEgDAEAAIAPAAQAEAAADgDQACgEAAgEIAAibQAAgFADgDQADgCAEAAIAPAAQAEAAAEACQACADABAFIAACbQgBAEgCAEQgEADgEAAIgPAAQgEAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgEAAg");
	this.shape_1.setTransform(24.8,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgEAAgEgDQgDgDAAgFIAAgNQAAgFADgDQAEgDAEAAIANAAQAFAAADADQADADAAAFIAAANQAAAFgDADQgDADgFAAg");
	this.shape_2.setTransform(23.025,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgEAAgDgDQgEgEAAgEIAAh4QAAgEAEgDQADgDAEAAIAOAAQAFAAADgDQACgEAAgEIAAgOQAAgFADgDQADgDAEAAIAPAAQAFAAADADQACADAAAFIAAAPQAAAEgCADQgDADgFAAIgPAAQgEAAgDADQgDADAAAFIAAB3QAAAEgCAEQgDADgFAAg");
	this.shape_3.setTransform(17.7,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgEAAgEgEQgDgDAAgDIAAgOQAAgEADgEQAEgCAEAAIANAAQAFAAADACQADAEAAAEIAAAOQAAADgDADQgDAEgFAAg");
	this.shape_4.setTransform(15.8786,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgHA1QgDAAgEgDQgCgDgBgFIAAhTQABgFACgDQAEgDADAAIAPAAQADAAAEADQADAEAAAEIAABTQAAAFgDADQgEADgDAAg");
	this.shape_5.setTransform(1.75,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgqA1QgDAAgEgDQgDgEAAgFIAAgwQAAgEADgDQAEgDADAAIAPAAQAEAAADgDQAEgEAAgEIAAgOQAAgEACgDQAEgDAEAAIAwAAQAFAAADADQADADAAAEIAAAPQAAAEgDADQgDADgFAAIgwAAQgEAAgEADQgCADAAAFIAAAxQAAAEgEADQgDADgEAAg");
	this.shape_6.setTransform(12.35,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgEAAgDgDQgEgDAAgEIAAhVQAAgEAEgDQADgDAEAAIAOAAQAFAAADADQACADAAAEIAAAyQAAAEADADQADADAEAAIAPAAQAFAAADADQACADAAAEIAAAPQAAAEgCADQgDADgFAAg");
	this.shape_7.setTransform(10.6,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgEAAgEgDQgDgDAAgEIAAgPQAAgEADgDQAEgDAEAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQAEgDAEAAIAOAAQAEAAAEADQADADAAAFIAAAxQAAAEgDADQgDADgFAAIgOAAQgEAAgEADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.575,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AAKA1QgDAAgEgDQgDgDAAgEIAAgxQAAgFgCgDQgDgDgEAAIgPAAQgEAAgEgDQgDgDABgEIAAgPQgBgEADgDQAEgDAEAAIAxAAQAFAAADADQADADAAAFIAABUQAAAEgDADQgDADgFAAg");
	this.shape_9.setTransform(31.9,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgEAAgEgDQgDgEAAgEIAAhTQAAgFADgDQAEgDAEAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_10.setTransform(40.775,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgEgDQgDgDABgFIAAgNQgBgFADgDQAEgDAEAAIAxAAQAEAAAEADQADAEAAAEIAAANQAAAFgDADQgDADgFAAg");
	this.shape_11.setTransform(31.9,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_5, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgFgBgDgDQgDgDAAgEIAAgxQAAgFADgCQADgDAFAAIANAAQAEAAADADQAEADAAAEIAAAxQAAAEgDADQgEADgEABg");
	this.shape.setTransform(33.725,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgFAAgCgDQgDgDAAgEIAAgOQAAgFADgDQACgDAFAAIAOAAQAFAAADgDQACgDAAgFIAAibQAAgFADgDQADgCAFAAIAOAAQAEAAADACQADADABAFIAACbQgBAFgDADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgFAAg");
	this.shape_1.setTransform(24.85,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAFAAIANAAQAEAAAEADQADADAAAFIAAANQAAAFgDADQgEADgEAAg");
	this.shape_2.setTransform(23.075,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgFAAgDgDQgCgDAAgFIAAh4QAAgEACgDQADgDAFAAIAPAAQAEAAADgDQACgDAAgFIAAgOQAAgFADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAPQAAAEgEADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAB3QAAAFgCADQgDADgEAAg");
	this.shape_3.setTransform(17.75,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgEAAgEIAAgNQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAAANQAAAEgDAEQgEADgEAAg");
	this.shape_4.setTransform(15.9286,47.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAEAAADADQAEAEAAAEIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_5.setTransform(1.775,37.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgpA1QgLAAAAgLIAAgxQAAgEADgDQADgDAFAAIAOAAQAFAAACgDQADgDAAgFIAAgOQAAgEAEgDQADgDAEAAIAwAAQAEAAAEADQADADAAAEIAAAPQAAAEgDADQgEADgEAAIgwAAQgEAAgDADQgEADAAAFIAAAxQAAAEgDADQgCADgFAAg");
	this.shape_6.setTransform(12.4,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgFAAgDgDQgCgDAAgEIAAhVQAAgEACgDQADgDAFAAIAPAAQAEAAADADQACADAAAEIAAAyQAAAEADADQADADAEAAIAPAAQAEAAADADQAEADAAAEIAAAPQAAAEgEADQgDADgEAAg");
	this.shape_7.setTransform(10.65,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgFAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAFAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAxQAAAEgDADQgEADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.625,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AALA1QgFAAgDgDQgDgDAAgEIAAgxQAAgFgCgDQgEgDgEAAIgOAAQgEAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAEAAIAxAAQAEAAADADQADADAAAFIAABUQAAAEgDADQgDADgEAAg");
	this.shape_9.setTransform(31.95,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgEADgEAAg");
	this.shape_10.setTransform(40.825,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAEAAIAxAAQAEAAADAEQADADAAAEIAAANQAAAFgDADQgDADgEAAg");
	this.shape_11.setTransform(31.95,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_4, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgFgBgDgDQgDgDAAgEIAAgxQAAgFADgCQADgDAFAAIANAAQAEAAADADQAEADAAAEIAAAxQAAAEgDADQgEADgEABg");
	this.shape.setTransform(33.725,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgFAAgCgDQgDgDAAgEIAAgOQAAgFADgDQACgDAFAAIAOAAQAFAAADgDQACgDAAgFIAAibQAAgFADgDQADgCAFAAIAOAAQAEAAADACQADADABAFIAACbQgBAFgDADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgFAAg");
	this.shape_1.setTransform(24.85,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAFAAIANAAQAEAAAEADQADADAAAFIAAANQAAAFgDADQgEADgEAAg");
	this.shape_2.setTransform(23.075,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgFAAgDgDQgCgDAAgFIAAh4QAAgEACgDQADgDAFAAIAPAAQAEAAADgDQACgDAAgFIAAgOQAAgFADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAPQAAAEgEADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAB3QAAAFgCADQgDADgEAAg");
	this.shape_3.setTransform(17.75,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgEAAgEIAAgNQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAAANQAAAEgDAEQgEADgEAAg");
	this.shape_4.setTransform(15.9286,47.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAEAAADADQAEAEAAAEIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_5.setTransform(1.775,37.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgpA1QgLAAAAgLIAAgxQAAgEADgDQADgDAFAAIAOAAQAFAAACgDQADgDAAgFIAAgOQAAgEAEgDQADgDAEAAIAwAAQAEAAAEADQADADAAAEIAAAPQAAAEgDADQgEADgEAAIgwAAQgEAAgDADQgEADAAAFIAAAxQAAAEgDADQgCADgFAAg");
	this.shape_6.setTransform(12.4,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgFAAgDgDQgCgDAAgEIAAhVQAAgEACgDQADgDAFAAIAPAAQAEAAADADQACADAAAEIAAAyQAAAEADADQADADAEAAIAPAAQAEAAADADQAEADAAAEIAAAPQAAAEgEADQgDADgEAAg");
	this.shape_7.setTransform(10.65,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgFAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAFAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAxQAAAEgDADQgEADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.625,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AALA1QgFAAgDgDQgDgDAAgEIAAgxQAAgFgCgDQgEgDgEAAIgOAAQgEAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAEAAIAxAAQAEAAADADQADADAAAFIAABUQAAAEgDADQgDADgEAAg");
	this.shape_9.setTransform(31.95,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgEADgEAAg");
	this.shape_10.setTransform(40.825,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAEAAIAxAAQAEAAADAEQADADAAAEIAAANQAAAFgDADQgDADgEAAg");
	this.shape_11.setTransform(31.95,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_3, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgEgBgEgDQgDgDAAgEIAAgxQAAgFADgCQAEgDAEAAIANAAQAEAAAEADQADADAAAEIAAAxQAAAEgDADQgDADgFABg");
	this.shape.setTransform(33.675,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgEAAgDgDQgDgDAAgEIAAgOQAAgFADgDQADgDAEAAIAOAAQAFAAADgDQACgEAAgEIAAibQAAgFADgDQADgCAEAAIAPAAQAEAAADACQADADAAAFIAACbQAAAEgDAEQgDADgEAAIgPAAQgEAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgFAAg");
	this.shape_1.setTransform(24.825,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgFAAgCgDQgDgDAAgFIAAgNQAAgFADgDQACgDAFAAIANAAQAEAAADADQADADABAFIAAANQgBAFgDADQgDADgEAAg");
	this.shape_2.setTransform(23.05,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgEAAgEgDQgCgEAAgEIAAh4QAAgEACgDQAEgDAEAAIAPAAQAEAAADgDQACgEAAgEIAAgOQAAgFADgDQAEgDAEAAIAOAAQAEAAADADQAEADAAAFIAAAPQAAAEgEADQgDADgEAAIgOAAQgEAAgEADQgDADAAAFIAAB3QAAAEgCAEQgDADgEAAg");
	this.shape_3.setTransform(17.75,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgEQgDgDAAgDIAAgOQAAgEADgEQADgCAFAAIANAAQAFAAADACQADAEAAAEIAAAOQAAADgDADQgDAEgFAAg");
	this.shape_4.setTransform(15.9286,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgGA1QgEAAgEgDQgDgDAAgFIAAhTQAAgFADgDQAEgDAEAAIANAAQAEAAAEADQADAEAAAEIAABTQAAAFgDADQgDADgFAAg");
	this.shape_5.setTransform(1.775,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgpA1QgFAAgDgDQgDgEAAgFIAAgwQAAgEADgDQADgDAFAAIAOAAQAFAAACgDQADgEAAgEIAAgOQAAgEAEgDQADgDAEAAIAwAAQAFAAADADQADADAAAEIAAAPQAAAEgDADQgDADgFAAIgwAAQgEAAgDADQgEADAAAFIAAAxQAAAEgDADQgCADgFAAg");
	this.shape_6.setTransform(12.4,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgEAAgEgDQgCgDAAgEIAAhVQAAgEACgDQAEgDAEAAIAPAAQAEAAADADQACADAAAEIAAAyQAAAEADADQAEADADAAIAPAAQAEAAADADQAEADAAAEIAAAPQAAAEgEADQgDADgEAAg");
	this.shape_7.setTransform(10.65,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgEAAgDgDQgEgDAAgEIAAgPQAAgEAEgDQADgDAEAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQAEgDADAAIAPAAQAEAAAEADQADADAAAFIAAAxQAAAEgDADQgDADgFAAIgPAAQgDAAgEADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.6,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AAKA1QgDAAgEgDQgDgDAAgEIAAgxQAAgFgCgDQgDgDgEAAIgPAAQgEAAgEgDQgDgDABgEIAAgPQgBgEADgDQAEgDAEAAIAxAAQAFAAADADQADADAAAFIAABUQAAAEgDADQgDADgFAAg");
	this.shape_9.setTransform(31.9,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_10.setTransform(40.775,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgEgDQgDgDABgFIAAgNQgBgFADgDQAEgDAEAAIAxAAQAEAAAEADQADAEAAAEIAAANQAAAFgDADQgDADgFAAg");
	this.shape_11.setTransform(31.9,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_2, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgEgBgEgDQgDgDAAgEIAAgxQAAgFADgCQAEgDAEAAIANAAQAEAAAEADQADADAAAEIAAAxQAAAEgDADQgDADgFABg");
	this.shape.setTransform(33.675,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgEAAgEgDQgDgDAAgEIAAgOQAAgFADgDQAEgDAEAAIAPAAQAEAAADgDQACgEAAgEIAAibQAAgFADgDQADgCAEAAIAPAAQAEAAAEACQACADABAFIAACbQgBAEgCAEQgEADgEAAIgPAAQgEAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgEAAg");
	this.shape_1.setTransform(24.8,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgEAAgEgDQgDgDAAgFIAAgNQAAgFADgDQAEgDAEAAIANAAQAFAAADADQADADAAAFIAAANQAAAFgDADQgDADgFAAg");
	this.shape_2.setTransform(23.025,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgEAAgDgDQgEgEAAgEIAAh4QAAgEAEgDQADgDAEAAIAOAAQAFAAADgDQACgEAAgEIAAgOQAAgFADgDQADgDAEAAIAPAAQAFAAADADQACADAAAFIAAAPQAAAEgCADQgDADgFAAIgPAAQgEAAgDADQgDADAAAFIAAB3QAAAEgCAEQgDADgFAAg");
	this.shape_3.setTransform(17.7,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgEAAgEgEQgDgDAAgDIAAgOQAAgEADgEQAEgCAEAAIANAAQAFAAADACQADAEAAAEIAAAOQAAADgDADQgDAEgFAAg");
	this.shape_4.setTransform(15.8786,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgHA1QgDAAgEgDQgCgDgBgFIAAhTQABgFACgDQAEgDADAAIAPAAQADAAAEADQADAEAAAEIAABTQAAAFgDADQgEADgDAAg");
	this.shape_5.setTransform(1.75,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgqA1QgDAAgEgDQgDgEAAgFIAAgwQAAgEADgDQAEgDADAAIAPAAQAEAAADgDQAEgEAAgEIAAgOQAAgEACgDQAEgDAEAAIAwAAQAFAAADADQADADAAAEIAAAPQAAAEgDADQgDADgFAAIgwAAQgEAAgEADQgCADAAAFIAAAxQAAAEgEADQgDADgEAAg");
	this.shape_6.setTransform(12.35,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgEAAgDgDQgEgDAAgEIAAhVQAAgEAEgDQADgDAEAAIAOAAQAFAAADADQACADAAAEIAAAyQAAAEADADQADADAEAAIAPAAQAFAAADADQACADAAAEIAAAPQAAAEgCADQgDADgFAAg");
	this.shape_7.setTransform(10.6,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgEAAgEgDQgDgDAAgEIAAgPQAAgEADgDQAEgDAEAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQAEgDAEAAIAOAAQAEAAAEADQADADAAAFIAAAxQAAAEgDADQgDADgFAAIgOAAQgEAAgEADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.575,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AAKA1QgDAAgEgDQgDgDAAgEIAAgxQAAgFgCgDQgDgDgEAAIgPAAQgEAAgEgDQgDgDABgEIAAgPQgBgEADgDQAEgDAEAAIAxAAQAFAAADADQADADAAAFIAABUQAAAEgDADQgDADgFAAg");
	this.shape_9.setTransform(31.9,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgEAAgEgDQgDgEAAgEIAAhTQAAgFADgDQAEgDAEAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_10.setTransform(40.775,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgEgDQgDgDABgFIAAgNQgBgFADgDQAEgDAEAAIAxAAQAEAAAEADQADAEAAAEIAAANQAAAFgDADQgDADgFAAg");
	this.shape_11.setTransform(31.9,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_1, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgFgBgDgDQgDgDAAgEIAAgxQAAgFADgCQADgDAFAAIANAAQAEAAADADQAEADAAAEIAAAxQAAAEgDADQgEADgEABg");
	this.shape.setTransform(33.725,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgFAAgCgDQgDgDAAgEIAAgOQAAgFADgDQACgDAFAAIAOAAQAFAAADgDQACgDAAgFIAAibQAAgFADgDQADgCAFAAIAOAAQAEAAADACQADADABAFIAACbQgBAFgDADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgFAAg");
	this.shape_1.setTransform(24.85,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAFAAIANAAQAEAAAEADQADADAAAFIAAANQAAAFgDADQgEADgEAAg");
	this.shape_2.setTransform(23.075,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgFAAgDgDQgCgDAAgFIAAh4QAAgEACgDQADgDAFAAIAPAAQAEAAADgDQACgDAAgFIAAgOQAAgFADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAPQAAAEgEADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAB3QAAAFgCADQgDADgEAAg");
	this.shape_3.setTransform(17.75,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgEAAgEIAAgNQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAAANQAAAEgDAEQgEADgEAAg");
	this.shape_4.setTransform(15.9286,47.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAEAAADADQAEAEAAAEIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_5.setTransform(1.775,37.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgpA1QgLAAAAgLIAAgxQAAgEADgDQADgDAFAAIAOAAQAFAAACgDQADgDAAgFIAAgOQAAgEAEgDQADgDAEAAIAwAAQAEAAAEADQADADAAAEIAAAPQAAAEgDADQgEADgEAAIgwAAQgEAAgDADQgEADAAAFIAAAxQAAAEgDADQgCADgFAAg");
	this.shape_6.setTransform(12.4,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgFAAgDgDQgCgDAAgEIAAhVQAAgEACgDQADgDAFAAIAPAAQAEAAADADQACADAAAEIAAAyQAAAEADADQADADAEAAIAPAAQAEAAADADQAEADAAAEIAAAPQAAAEgEADQgDADgEAAg");
	this.shape_7.setTransform(10.65,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgFAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAFAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAxQAAAEgDADQgEADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.625,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AALA1QgFAAgDgDQgDgDAAgEIAAgxQAAgFgCgDQgEgDgEAAIgOAAQgEAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAEAAIAxAAQAEAAADADQADADAAAFIAABUQAAAEgDADQgDADgEAAg");
	this.shape_9.setTransform(31.95,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgEADgEAAg");
	this.shape_10.setTransform(40.825,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAEAAIAxAAQAEAAADAEQADADAAAEIAAANQAAAFgDADQgDADgEAAg");
	this.shape_11.setTransform(31.95,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image_0, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F56C1C").s().p("AgGAkQgFgBgDgDQgDgDAAgEIAAgxQAAgFADgCQADgDAFAAIANAAQAEAAADADQAEADAAAEIAAAxQAAAEgDADQgEADgEABg");
	this.shape.setTransform(33.725,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F56C1C").s().p("AgYBqQgFAAgCgDQgDgDAAgEIAAgOQAAgFADgDQACgDAFAAIAOAAQAFAAADgDQACgDAAgFIAAibQAAgFADgDQADgCAFAAIAOAAQAEAAADACQADADABAFIAACbQgBAFgDADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgCADQgDADgFAAg");
	this.shape_1.setTransform(24.85,24.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAFAAIANAAQAEAAAEADQADADAAAFIAAANQAAAFgDADQgEADgEAAg");
	this.shape_2.setTransform(23.075,1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F56C1C").s().p("AgYBZQgFAAgDgDQgCgDAAgFIAAh4QAAgEACgDQADgDAFAAIAPAAQAEAAADgDQACgDAAgFIAAgOQAAgFADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAPQAAAEgEADQgDADgEAAIgOAAQgFAAgDADQgDADAAAFIAAB3QAAAFgCADQgDADgEAAg");
	this.shape_3.setTransform(17.75,23.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F56C1C").s().p("AgGASQgFAAgDgDQgDgEAAgEIAAgNQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAAANQAAAEgDAEQgEADgEAAg");
	this.shape_4.setTransform(15.9286,47.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAEAAADADQAEAEAAAEIAABTQAAAEgDAEQgDADgFAAg");
	this.shape_5.setTransform(1.775,37.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F56C1C").s().p("AgpA1QgLAAAAgLIAAgxQAAgEADgDQADgDAFAAIAOAAQAFAAACgDQADgDAAgFIAAgOQAAgEAEgDQADgDAEAAIAwAAQAEAAAEADQADADAAAEIAAAPQAAAEgDADQgEADgEAAIgwAAQgEAAgDADQgEADAAAFIAAAxQAAAEgDADQgCADgFAAg");
	this.shape_6.setTransform(12.4,12.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F56C1C").s().p("AgYA1QgFAAgDgDQgCgDAAgEIAAhVQAAgEACgDQADgDAFAAIAPAAQAEAAADADQACADAAAEIAAAyQAAAEADADQADADAEAAIAPAAQAEAAADADQAEADAAAEIAAAPQAAAEgEADQgDADgEAAg");
	this.shape_7.setTransform(10.65,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F56C1C").s().p("AhNA1QgFAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAFAAIB4AAQAEAAADgDQADgEAAgEIAAgxQAAgEADgDQADgDAFAAIAOAAQAEAAADADQAEADAAAFIAAAxQAAAEgDADQgEADgEAAIgOAAQgFAAgDADQgDADAAAFIAAAOQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(26.625,37.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F56C1C").s().p("AALA1QgFAAgDgDQgDgDAAgEIAAgxQAAgFgCgDQgEgDgEAAIgOAAQgEAAgDgDQgDgDAAgEIAAgPQAAgEADgDQADgDAEAAIAxAAQAEAAADADQADADAAAFIAABUQAAAEgDADQgDADgEAAg");
	this.shape_9.setTransform(31.95,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F56C1C").s().p("AgGA1QgFAAgDgDQgDgEAAgEIAAhTQAAgFADgDQADgDAFAAIANAAQAFAAADADQADADAAAFIAABTQAAAEgDAEQgEADgEAAg");
	this.shape_10.setTransform(40.825,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F56C1C").s().p("AgYASQgEAAgDgDQgDgDAAgFIAAgNQAAgFADgDQADgDAEAAIAxAAQAEAAADAEQADADAAAEIAAANQAAAFgDADQgDADgEAAg");
	this.shape_11.setTransform(31.95,1.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image, rect = new cjs.Rectangle(0,0,42.6,49.7), [rect]);


(lib.vecW = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AgxgBQgLAlgUAwIgFANQgFAMAHALQAHALAOAAIB9AAQAOAAAHgLQAHgMgFgMQgFgLgLgcQgMgggIgaQgTg+gGgtQgBgJgHgGQgHgHgKAAQgIAAgIAHQgHAGgBAJQgGAtgTA+g");
	this.shape.setTransform(0.033,-96.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B82775").s().p("Ag+CDQgOAAgHgLQgHgLAFgNIAFgMQAUgxALglQATg+AGgsQABgKAHgFQAIgHAIAAQAKAAAHAHQAHAFABAKQAGAsATA+QAIAaAMAhIAQAmQAFAMgHANQgHALgOAAg");
	this.shape_1.setTransform(0.033,-96.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AgYnGIAANwQAAAKAIAHQAHAIAJgBQAKAAAIgHQAHgHAAgLIAAtv");
	this.shape_2.setTransform(0.025,-45.0236);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B82775").s().p("AgQG+QgIgHAAgLIAAtwIAxAAIAANwQAAAKgHAIQgIAHgKAAIAAAAQgKAAgGgHg");
	this.shape_3.setTransform(0.025,-45.2734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecW, rect = new cjs.Rectangle(-9.8,-111,19.7,112), [rect]);


(lib.vecV = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AgxgCQgLAlgUAxIgFAMQgFANAHALQAHALAOAAIB9AAQAOAAAHgMQAHgMgFgMQgFgLgLgbQgMghgIgaQgTg+gGgsQgBgKgHgGQgHgGgKAAQgIAAgIAGQgHAGgBAKQgGAsgTA+g");
	this.shape.setTransform(0.033,-96.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3CAA41").s().p("Ag+CDQgOAAgHgLQgHgLAFgNIAFgMQAUgxALglQATg+AGgsQABgKAHgGQAIgGAIAAQAKAAAHAGQAHAGABAKQAGAsATA+QAIAaAMAhIAQAmQAFAMgHAMQgHAMgOAAg");
	this.shape_1.setTransform(0.033,-96.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AgYnGIAANwQAAAKAIAHQAHAIAJgBQAKAAAIgHQAHgHAAgLIAAtv");
	this.shape_2.setTransform(0.025,-45.0236);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3CAA41").s().p("AgQG+QgIgHAAgLIAAtwIAxAAIAANwQAAAKgHAIQgIAHgKAAIAAAAQgKAAgGgHg");
	this.shape_3.setTransform(0.025,-45.2734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecV, rect = new cjs.Rectangle(-9.8,-110.9,19.7,112), [rect]);


(lib.vecU = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AgxgCQgLAlgUAxIgFAMQgFANAHALQAHALAOAAIB9AAQAOAAAHgMQAHgLgFgNQgFgLgLgbQgMghgIgaQgTg+gGgsQgBgKgHgGQgHgGgKAAQgIAAgIAGQgHAGgBAKQgGAsgTA+g");
	this.shape.setTransform(0.033,-96.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1E624").s().p("Ag+CDQgOAAgHgLQgHgLAFgNIAFgMQAUgwALgmQATg9AGgtQABgKAHgFQAIgHAIAAQAKAAAHAHQAHAFABAKQAGAtATA9QAIAaAMAhIAQAmQAFAMgHANQgHALgOAAg");
	this.shape_1.setTransform(0.033,-96.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AgYnGIAANwQAAAKAIAHQAHAIAJgBQAKAAAIgHQAHgHAAgLIAAtv");
	this.shape_2.setTransform(0.025,-45.0236);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1E624").s().p("AgQG+QgIgHAAgLIAAtwIAxAAIAANwQAAAKgHAIQgIAHgKAAIAAAAQgKAAgGgHg");
	this.shape_3.setTransform(0.025,-45.2734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecU, rect = new cjs.Rectangle(-9.8,-111,19.7,112), [rect]);


(lib.vecSum = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AgxgCQgLAlgUAxIgFAMQgFANAHALQAHALAOAAIB9AAQAOAAAHgMQAHgLgFgNQgFgLgLgbQgMghgIgaQgTg+gGgsQgBgKgHgGQgHgGgKAAQgIAAgIAGQgHAGgBAKQgGAsgTA+g");
	this.shape.setTransform(0.033,-176.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676767").s().p("Ag+CDQgOAAgHgLQgHgLAFgNIAFgMQAUgxALglQATg+AGgsQABgKAHgFQAIgHAIAAQAKAAAHAHQAHAFABAKQAGAsATA+QAIAaAMAhIAQAmQAFAMgHAMQgHAMgOAAg");
	this.shape_1.setTransform(0.033,-176.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AgYtWIAAaQQAAAKAIAHQAHAIAJgBQAKAAAIgHQAHgHAAgLIAA6P");
	this.shape_2.setTransform(0.025,-85.0235);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#676767").s().p("AgQNOQgIgHAAgLIAA6QIAxAAIAAaQQAAAKgHAIQgIAHgKAAIAAAAQgKAAgGgHg");
	this.shape_3.setTransform(0.025,-85.2734);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecSum, rect = new cjs.Rectangle(-9.8,-191,19.7,192), [rect]);


(lib.locusPt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAyAAQAAAWgPANQgNAPgWAAQgTAAgPgPQgPgNAAgWQAAgTAPgPQAPgPATAAQAWAAANAPQAPAPAAATg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676767").s().p("AgiAjQgPgNAAgWQAAgTAPgPQAPgPATAAQAWAAANAPQAPAPAAATQAAAWgPANQgNAPgWAAQgTAAgPgPg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.locusPt, rect = new cjs.Rectangle(-6,-6,12,12), [rect]);


(lib.iWp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("AiMCNIEZkZ");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("AiMiMIEZEZ");
	this.shape_1.setTransform(-0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("ADIAAQAABTg7A6Qg6A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B82775").s().p("AiNCNQg6g6AAhTQAAhSA6g6QA7g7BSAAQBSAAA7A7QA7A6AABSQAABTg7A6Qg7A7hSAAQhSAAg7g7g");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iWp, rect = new cjs.Rectangle(-21,-20.9,42,42), [rect]);


(lib.iWm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("AAAgxQAVAAAOAPQAPAOAAAUQAAAVgPAPQgOAOgVAAQgUAAgPgOQgOgPAAgVQAAgUAOgOQAPgPAUAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgjAkQgOgPAAgVQAAgUAOgOQAQgPATAAQAVAAAOAPQAPAOAAAUQAAAVgPAPQgOAOgVAAQgTAAgQgOg");
	this.shape_1.setTransform(0,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("ADIAAQAABTg7A6Qg6A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSg");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B82775").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");
	this.shape_3.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iWm, rect = new cjs.Rectangle(-20.9,-20.9,42,42), [rect]);


(lib.iVp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("AiMCNIEZkZ");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("AiMiMIEZEZ");
	this.shape_1.setTransform(-0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("ADIAAQAABTg7A6Qg6A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3CAA41").s().p("AiNCNQg6g6AAhTQAAhSA6g6QA7g7BSAAQBSAAA7A7QA7A6AABSQAABTg7A6Qg7A7hSAAQhSAAg7g7g");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iVp, rect = new cjs.Rectangle(-21,-20.9,42,42), [rect]);


(lib.iVm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("AAAgxQAVAAAOAOQAPAPAAAUQAAAVgPAPQgOAOgVAAQgUAAgPgOQgOgPAAgVQAAgUAOgPQAPgOAUAAg");
	this.shape.setTransform(0,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgjAkQgOgPAAgVQAAgUAOgOQAQgPATAAQAVAAAOAPQAPAOAAAUQAAAVgPAPQgOAOgVAAQgTAAgQgOg");
	this.shape_1.setTransform(0,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("ADIAAQAABTg7A6Qg6A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSg");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3CAA41").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSQAABTg7A6Qg6A7hTAAQhSAAg6g7g");
	this.shape_3.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iVm, rect = new cjs.Rectangle(-20.9,-20.9,42,42), [rect]);


(lib.iUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("AiMCNIEZkZ");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("AiMiMIEZEZ");
	this.shape_1.setTransform(-0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("ADIAAQAABTg7A6Qg6A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g6QA6g7BSAAQBTAAA6A7QA7A6AABSg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1E624").s().p("AiMCNQg7g6AAhTQAAhSA7g6QA6g7BSAAQBSAAA7A7QA7A6AABSQAABTg7A6Qg7A7hSAAQhSAAg6g7g");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iUp, rect = new cjs.Rectangle(-21,-21,42,42.1), [rect]);


(lib.iUm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("AAAgxQAVAAAPAOQAOAPAAAUQAAAVgOAPQgPAOgVAAQgTAAgPgOQgPgPAAgVQAAgUAPgPQAPgOATAAg");
	this.shape.setTransform(-0.05,0.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgjAkQgOgPAAgVQAAgUAOgOQAQgPATAAQAVAAAOAPQAPAOAAAUQAAAVgPAPQgOAOgVAAQgTAAgQgOg");
	this.shape_1.setTransform(-0.05,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(2,0,0,4).p("ADIAAQAABTg6A6Qg7A7hTAAQhSAAg7g7Qg6g6AAhTQAAhSA6g6QA7g7BSAAQBTAAA7A7QA6A6AABSg");
	this.shape_2.setTransform(0,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1E624").s().p("AiNCNQg6g6AAhTQAAhSA6g6QA7g7BSAAQBTAAA7A7QA6A6AABSQAABTg6A6Qg7A7hTAAQhSAAg7g7g");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iUm, rect = new cjs.Rectangle(-21,-21,42,42.1), [rect]);


(lib.stYoke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("ArEAAQAAiPA4iEQA2h/BihiQDQjPEkAAQEmAADPDPQBiBiA2B/QA4CEAACPQAACQg4CEQg2B/hiBiQjPDPkmAAQiPAAiEg3Qh/g2hihiQhihig2h/Qg4iEAAiQgAAAHFQC8AACFiFQCFiEAAi8QAAi7iFiEQiFiFi8AAQi7AAiECFQiFCEAAC7QAAC8CFCEQCECFC7AAg");
	this.shape.setTransform(0.0144,-0.0025,3.1746,3.1771);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CCCC1").s().p("AkTKNQh/g2hihiQhihig2h/Qg4iEAAiQQAAiPA4iEQA2h/BihiQDQjPEkAAQEmAADPDPQBiBiA2B/QA4CEAACPQAACQg4CEQg2B/hiBiQjPDPkmAAQiPAAiEg3gAk/k/QiFCEAAC7QAAC8CFCEQCECFC7AAQC8AACFiFQCFiEAAi8QAAi7iFiEQiFiFi8AAQi7AAiECFg");
	this.shape_1.setTransform(0.0144,-0.0025,3.1746,3.1771);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stYoke, rect = new cjs.Rectangle(-226,-226,452,452), [rect]);


(lib.bckGrndTTZthws = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAfQgHgGAAgJIAJgBQABAIADADQAEADAFAAQAFAAAFgEQAEgEAAgHQAAgGgEgEQgEgEgGAAIgFABIABgGIACAAQAEAAAFgDQAEgDAAgGQAAgFgDgDQgEgDgEAAQgFAAgDADQgEADAAAGIgJgBQABgJAGgFQAFgFAJAAQAFAAAFADQAFACACAFQADAEAAAFQAAAFgDADQgCAEgFACQAHACADAEQADAEABAHQAAAJgHAHQgHAHgKAAQgJAAgGgGg");
	this.shape.setTransform(196.35,589.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAkIABgGQACgFAEgEQAEgGAIgFQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgEgGAAQgFAAgEAEQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAGAAAIQAAAEgBAFIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_1.setTransform(190.725,589.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAdQgHgIAAgVQAAgLAEgIQACgIAFgEQAFgEAHgBQAGABAEACQAFADADADQACAFABAGQACAHAAAJQAAANgDAHQgCAIgFAFQgFADgIAAQgJABgHgIgAgJgXQgEAGgBARQABASAEAGQAEAFAFAAQAGAAAEgFQAFgGgBgSQABgRgFgFQgEgGgGAAQgFAAgEAFg");
	this.shape_2.setTransform(185.25,589.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAkIABgGQACgFAEgEQAEgGAIgFQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgEgGAAQgFAAgEAEQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAGAAAIQAAAEgBAFIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_3.setTransform(179.625,589.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAlIAUhJIAHAAIgUBJg");
	this.shape_4.setTransform(175.55,589.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGAkIAAgRIgeAAIAAgIIAgguIAHAAIAAAuIAKAAIAAAIIgKAAIAAARgAgPALIAVAAIAAggg");
	this.shape_5.setTransform(171.225,589.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAdQgIgIAAgVQAAgLADgIQADgIAFgEQAFgEAHgBQAGABAEACQAEADAEADQACAFABAGQACAHAAAJQAAANgDAHQgCAIgFAFQgFADgIAAQgKABgFgIgAgJgXQgEAGgBARQABASAEAGQAEAFAFAAQAGAAAEgFQAFgGgBgSQABgRgFgFQgEgGgGAAQgFAAgEAFg");
	this.shape_6.setTransform(165.8,589.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAXQgFgEgCgIIAJgCQABAGAEACQACADAGAAQAGAAADgCQACgDAAgDQABgDgDgCIgJgDIgNgEQgDgBgCgDQgCgEAAgDQAAgDACgDQABgEADgCIAGgCIAHgBQAFAAAFACQAEABADADQACAEABAEIgJABQgBgEgCgBQgDgDgFAAQgGAAgCACQgDACAAADIACADIADADIAHABIANAFQAEAAACADQABAEAAAEQABAEgDAEQgDAEgFACQgEACgGAAQgKAAgFgEg");
	this.shape_7.setTransform(157.7,590.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgMAHgIQAHgHAJAAQALAAAGAHQAHAHAAAMIAAACIgmAAQAAAJAFAEQAFAFAFAAQAFAAADgCQADgDACgFIAKABQgCAHgHAFQgFAEgJAAQgLAAgGgHgAgJgPQgEAEAAAHIAbAAQAAgHgCgDQgFgFgHAAQgEAAgFAEg");
	this.shape_8.setTransform(152.45,590.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AALAkIgQgbIgHAGIAAAVIgJAAIAAhHIAJAAIAAAoIAUgUIAMAAIgUASIAWAhg");
	this.shape_9.setTransform(147.5,589.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWAkIAAhHIAIAAIAAAHQADgDAEgDQAEgCAEAAQAGABAFADQAFADADAHQACAGAAAHQAAAIgCAGQgDAGgGAEQgFACgGAAQgDABgEgCQgEgCgCgDIAAAZgAgJgXQgEAFgBAKQAAAJAFAFQADAEAGAAQAGAAAEgEQADgGAAgJQAAgKgDgEQgEgGgGAAQgFAAgEAGg");
	this.shape_10.setTransform(142.05,591.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaAaIAAgfIAAgHQgBgDgDgCQgCgBgDAAQgFAAgEAEQgEADAAAJIAAAcIgHAAIAAggQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBAEAAAGIAAAaIgJAAIAAgzIAIAAIAAAIQACgEAEgCQAEgDAFAAQAGAAAEADQADACABAEQAGgIAKgBQAIABAEAEQAEAEAAAJIAAAig");
	this.shape_11.setTransform(134.975,590.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAUQgHgHAAgMQAAgMAHgIQAHgHAKAAQAKAAAHAHQAGAHAAAMIAAACIgmAAQABAJAEAEQAEAFAGAAQAFAAADgCQADgDACgFIAJABQgBAHgHAFQgFAEgJAAQgLAAgGgHgAgIgPQgFAEgBAHIAcAAQAAgHgDgDQgEgFgGAAQgGAAgDAEg");
	this.shape_12.setTransform(128,590.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AARAkIgZgkIgLALIAAAZIgKAAIAAhHIAKAAIAAAjIAigjIANAAIgdAdIAfAqg");
	this.shape_13.setTransform(122.3,589.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAaAaIAAgfIAAgHQgBgDgDgCQgCgBgDAAQgFAAgEAEQgEADAAAJIAAAcIgHAAIAAggQAAgGgCgDQgDgDgFAAQgDAAgDACQgEACgBAEQgBAEAAAGIAAAaIgJAAIAAgzIAIAAIAAAIQACgEAEgCQAEgDAFAAQAGAAAEADQADACABAEQAGgIAKgBQAIABAEAEQAEAEAAAJIAAAig");
	this.shape_14.setTransform(111.625,590.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgDAkIAAgzIAIAAIAAAzgAgDgZIAAgKIAIAAIAAAKg");
	this.shape_15.setTransform(106.35,589.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAMAkIAAghQAAgGgDgDQgCgDgGAAQgDAAgDACQgDACgCAEQgBACAAAGIAAAdIgJAAIAAhHIAJAAIAAAaQAGgHAIAAQAGAAAEACQAEACACAEQACAEAAAHIAAAhg");
	this.shape_16.setTransform(102.475,589.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPAUQgHgGABgNQAAgIACgHQADgFAGgEQAFgDAGAAQAIAAAGAEQAFAEACAJIgJABQgBgGgDgCQgDgDgFAAQgGAAgEAFQgDAEAAAKQAAALADAEQAEAFAGAAQAFAAADgDQAEgEABgGIAJABQgCAJgFAFQgHAFgIAAQgKAAgGgHg");
	this.shape_17.setTransform(97.35,590.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAXQgEgEAAgHQAAgDACgEQABgDAEgBIAFgDIAIgBQAKgBAFgCIAAgCQAAgGgCgCQgEgDgGAAQgGAAgCADQgEACgBAFIgJgBQACgFADgEQACgDAFgCQAGgCAFAAQAHAAAEACQAEABACACQACADABADIAAAJIAAAKIAAAQIADAGIgKAAIgBgGQgFAEgFACQgDABgFAAQgIAAgGgEgAgBADIgIACIgEADIgBAEQABAEACACQADACAFAAQAEAAAEgCQAEgCACgEIABgJIAAgDQgEACgJABg");
	this.shape_18.setTransform(91.9,590.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgNAIgIQAGgFAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_19.setTransform(86.375,590.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOAfQgFgFABgLIAIgBQABAIACADQADADAEAAQADAAADgCQADgBABgDIABgJIAAgwIAJAAIAAAvQAAAJgCAFQgCAFgFADQgFACgGAAQgJAAgFgFg");
	this.shape_20.setTransform(80.8477,589.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_21.setTransform(74.4,592.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPAhQgFgEAAgJIAIABQABAEADADQADACAFAAQAFAAAEgCQADgDABgFIABgLQgGAHgIAAQgKAAgGgHQgGgJAAgJQAAgHADgHQACgGAFgEQAGgDAGAAQAJAAAGAIIAAgHIAIAAIAAAsQAAAMgDAFQgCAFgGADQgFADgHAAQgJAAgGgEgAgIgYQgFAFAAAJQAAAKAFAEQADAEAGABQAFgBAEgEQAEgEAAgJQAAgKgEgFQgEgFgFAAQgGAAgDAFg");
	this.shape_22.setTransform(70.05,591.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAMAaIAAgeIgBgIIgDgFQgDgBgEAAQgEAAgEADQgEAEAAAKIAAAbIgJAAIAAgzIAIAAIAAAIQAFgJAKAAQAFABAEABQAEACACADQACADAAADIABAJIAAAeg");
	this.shape_23.setTransform(64.65,590.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_24.setTransform(60.525,589.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMAEIAAgIIAaAAIAAAIg");
	this.shape_25.setTransform(57.4,590.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_26.setTransform(54.35,592.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgNAaIAAgzIAIAAIAAAIQADgFACgCQACgBADgBQAEAAAFAEIgDAHQgDgCgEAAQgCAAgCACQgCACgBADIgBAKIAAAag");
	this.shape_27.setTransform(52.2,590.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAkIAAhHIAZAAIAMABQAGACAEADQAGAFADAIQADAHAAAJQAAAIgCAGQgCAGgDAEQgDAFgEACQgDACgFACIgLABgAgTAbIAPAAQAGAAAEgBQAEgBADgDQADgDACgGQACgFAAgIQAAgLgEgGQgDgGgGgCQgEgBgHAAIgPAAg");
	this.shape_28.setTransform(46.675,589.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAFIAAgJIAJAAIAAAJg");
	this.shape_29.setTransform(38.75,592.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgHAkIAAgsIgHAAIAAgHIAHAAIAAgFIABgHQACgEADgCQACgCAGgBIAIABIgBAIIgFAAQgEAAgCABQgCACAAAFIAAAEIAKAAIAAAHIgKAAIAAAsg");
	this.shape_30.setTransform(36.175,589.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRAUQgGgHAAgNQAAgNAIgIQAGgFAJAAQALAAAGAHQAHAHAAAMQAAAJgDAGQgDAGgGADQgFADgHAAQgKAAgHgHgAgKgOQgEAFAAAJQAAAKAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgKQAAgJgEgFQgFgFgGAAQgGAAgEAFg");
	this.shape_31.setTransform(31.775,590.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgNAaIAAgzIAIAAIAAAIQADgFACgCQACgBADgBQAFAAAEAEIgDAHQgDgCgDAAQgDAAgCACQgCACgBADIgBAKIAAAag");
	this.shape_32.setTransform(27.7,590.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgbAkIAAhHIAbAAIALABQAFABAEACQADADACAEQADAFAAAFQgBAJgFAFQgHAHgOAAIgSAAIAAAdgAgRgBIASAAQAJAAAEgDQADgEAAgGQAAgEgCgEQgCgDgDgBIgJAAIgSAAg");
	this.shape_33.setTransform(22.5,589.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgLAvQAOgXAAgYQAAgIgCgJQgBgHgDgHIgIgPIAHAAQAIANAEAMQAEALAAAKQAAANgFANQgFAMgGAJg");
	this.shape_34.setTransform(14.625,590.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgPAUQgHgGABgNQAAgIACgHQADgFAGgEQAFgDAGAAQAIAAAGAEQAFAEACAJIgJABQgBgGgDgCQgDgDgFAAQgGAAgEAFQgDAEAAAKQAAALADAEQAEAFAGAAQAFAAADgDQAEgEABgGIAJABQgCAJgFAFQgHAFgIAAQgKAAgGgHg");
	this.shape_35.setTransform(10.5,590.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAGAvQgHgJgFgMQgFgNAAgNQAAgKAEgLQAEgMAJgNIAGAAIgIAOIgEAPQgCAJAAAIQAAAYAOAXg");
	this.shape_36.setTransform(6.275,590.6);

	this.instance = new lib.image_10();
	this.instance.setTransform(24.35,51.35,1,1,0,0,0,21.2,24.9);
	this.instance.alpha = 0.1484;

	this.instance_1 = new lib.type_13();
	this.instance_1.setTransform(186.8,47.1,1,1,0,0,0,129.3,15.7);
	this.instance_1.alpha = 0.1484;

	this.instance_2 = new lib.image_9();
	this.instance_2.setTransform(449.2,51.35,1,1,0,0,0,21.2,24.9);
	this.instance_2.alpha = 0.1484;

	this.instance_3 = new lib.type_12();
	this.instance_3.setTransform(611.65,47.1,1,1,0,0,0,129.3,15.7);
	this.instance_3.alpha = 0.1484;

	this.instance_4 = new lib.image_8();
	this.instance_4.setTransform(237.05,151.2,1,1,0,0,0,21.3,24.9);
	this.instance_4.alpha = 0.1484;

	this.instance_5 = new lib.type_11();
	this.instance_5.setTransform(399.45,146.95,1,1,0,0,0,129.3,15.7);
	this.instance_5.alpha = 0.1484;

	this.instance_6 = new lib.image_7();
	this.instance_6.setTransform(662.05,151.2,1,1,0,0,0,21.3,24.9);
	this.instance_6.alpha = 0.1484;

	this.instance_7 = new lib.type_10();
	this.instance_7.setTransform(772.45,148.4,1,1,0,0,0,77.3,14.1);
	this.instance_7.alpha = 0.1484;

	this.instance_8 = new lib.type_9();
	this.instance_8.setTransform(54.4,146.85,1,1,0,0,0,50.4,15.6);
	this.instance_8.alpha = 0.1484;

	this.instance_9 = new lib.image_6();
	this.instance_9.setTransform(24.35,251.15,1,1,0,0,0,21.2,24.8);
	this.instance_9.alpha = 0.1484;

	this.instance_10 = new lib.type_8();
	this.instance_10.setTransform(186.8,247,1,1,0,0,0,129.3,15.7);
	this.instance_10.alpha = 0.1484;

	this.instance_11 = new lib.image_5();
	this.instance_11.setTransform(449.2,251.15,1,1,0,0,0,21.2,24.8);
	this.instance_11.alpha = 0.1484;

	this.instance_12 = new lib.type_7();
	this.instance_12.setTransform(611.65,247,1,1,0,0,0,129.3,15.7);
	this.instance_12.alpha = 0.1484;

	this.instance_13 = new lib.image_4();
	this.instance_13.setTransform(237.05,351.1,1,1,0,0,0,21.3,24.9);
	this.instance_13.alpha = 0.1484;

	this.instance_14 = new lib.type_6();
	this.instance_14.setTransform(399.45,346.85,1,1,0,0,0,129.3,15.7);
	this.instance_14.alpha = 0.1484;

	this.instance_15 = new lib.image_3();
	this.instance_15.setTransform(662.05,351.1,1,1,0,0,0,21.3,24.9);
	this.instance_15.alpha = 0.1484;

	this.instance_16 = new lib.type_5();
	this.instance_16.setTransform(772.45,348.35,1,1,0,0,0,77.3,14.2);
	this.instance_16.alpha = 0.1484;

	this.instance_17 = new lib.type_4();
	this.instance_17.setTransform(54.4,346.75,1,1,0,0,0,50.4,15.6);
	this.instance_17.alpha = 0.1484;

	this.instance_18 = new lib.image_2();
	this.instance_18.setTransform(24.35,451.15,1,1,0,0,0,21.2,24.8);
	this.instance_18.alpha = 0.1484;

	this.instance_19 = new lib.type_3();
	this.instance_19.setTransform(186.8,447,1,1,0,0,0,129.3,15.7);
	this.instance_19.alpha = 0.1484;

	this.instance_20 = new lib.image_1();
	this.instance_20.setTransform(449.2,451.15,1,1,0,0,0,21.2,24.8);
	this.instance_20.alpha = 0.1484;

	this.instance_21 = new lib.type_2();
	this.instance_21.setTransform(611.65,447,1,1,0,0,0,129.3,15.7);
	this.instance_21.alpha = 0.1484;

	this.instance_22 = new lib.image_0();
	this.instance_22.setTransform(237.05,551.1,1,1,0,0,0,21.3,24.9);
	this.instance_22.alpha = 0.1484;

	this.instance_23 = new lib.type_1();
	this.instance_23.setTransform(399.45,546.85,1,1,0,0,0,129.3,15.7);
	this.instance_23.alpha = 0.1484;

	this.instance_24 = new lib.image();
	this.instance_24.setTransform(662.05,551.1,1,1,0,0,0,21.3,24.9);
	this.instance_24.alpha = 0.1484;

	this.instance_25 = new lib.type_0();
	this.instance_25.setTransform(772.45,548.35,1,1,0,0,0,77.3,14.2);
	this.instance_25.alpha = 0.1484;

	this.instance_26 = new lib.type();
	this.instance_26.setTransform(54.4,546.75,1,1,0,0,0,50.4,15.6);
	this.instance_26.alpha = 0.1484;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FAF7CD").s().p("EhCZAu4MAAAhdvMCEzAAAMAAABdvg");
	this.shape_37.setTransform(425,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bckGrndTTZthws, rect = new cjs.Rectangle(0,0,850,600), [rect]);


// stage content:
(lib.animatePhasor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		////////////////////////////////////////////////////////////////////////
		// animatePhasor.fla
		////////////////////////////////////////////////////////////////////////
		var c; 					// CreateJS-bib
		var r; 					// Device Pixel Ratio
		var w, h; 				// width, height
		var root = this;
		var backGround;			// reference to all the static stuff
		var header; 			// title
		var omegatText;
		var game; 				// it's just a kind of game...
		var inGame = false; 	// game stopped
		const title = "rotating field of a 3 phase machine";
		const centerX = 275, centerY = 300, rWinding = 170; // rotor center + outer radius
		const posX = 725; 		// x-center of all sliders
		const scaleVec = 1.38;
		const scaleVecSum = scaleVec * 110.0/190.0;
		var phNom = 110; 		// phasor nominal length = 1 p.u.
		var barLength = 200; 	// 200px? set in createSlider()
		const W32 = Math.sqrt(3.0) / 2.0;
		var posWdgs = [ 	// default values, maybe changed by sliderPos[]
			[
				[centerX, centerY - rWinding], // U1
				[centerX, centerY + rWinding] // U2
			],
			[
				[centerX + W32 * rWinding, centerY + rWinding / 2], // V1
				[centerX - W32 * rWinding, centerY - rWinding / 2] // V2
			],
			[
				[centerX - W32 * rWinding, centerY + rWinding / 2], // W1
				[centerX + W32 * rWinding, centerY - rWinding / 2] // W2
			]
		];
		let current = []; 	// U1, V1, W1, U2, V2, W2
		let phasor = [], phasorSum; // 4 phasors: U/V/W/U+V+W
		let sliderBarPos = [], sliderBarPhase = [], sliderBarAmp = [];
		let sliderPos = [],    sliderPhase = [], 	sliderAmp = [];
		let txtPos = [], 	   txtPhase = [], 		txtAmp = [];
		let status = [ 					// status[type][phase]
			[+1.0,   +1.0,   +1.0], 	// amplitudes UVW
			[+0.0, +120.0, -120.0], 	// phase shift UVW
			[+0.0, +120.0, -120.0] 		// coil position UVW
		]; // e.g. state[2][0] = coil_position_phaseU, state[0][1] = amplitude_phaseV;
		let omega_t = +0.0;				// time in radians
		let counter = 0;
		let locus = [];
		
		// stuff for GUI
		var startBtn, stopBtn, touch; //
		const DEBUG = true;
		const DEBUG1 = false;
		const DEBUG2 = false;
		
		function init() {
			c = createjs;
			r = window.devicePixelRatio;
			w = 850; //stage.canvas.width / r;
			h = 600; // stage.canvas.height / r;
		
			if (DEBUG2) console.log("stage.canvas.width: " + stage.canvas.width.toFixed(3) +
				", stage.canvas.height: " + stage.canvas.height.toFixed(0));
			if (DEBUG2) console.log("r: " + r.toFixed(3) + ", w: " + w.toFixed(0) +
				", h: " + h.toFixed(0));
		
			createBackground();
			createSlotAT();
			createTouchControl();
		
			c.Ticker.addEventListener("tick", gameCore);
			stage.enableMouseOver(30);
		
			initStartStop();
			for (let phase = 0; phase < 3; phase++) {
				initSlider(+0.0, +1.0, sliderAmp[phase],   txtAmp[phase],   +0, phase);
				initSlider(-180, +180, sliderPhase[phase], txtPhase[phase], +1, phase);
				initSlider(-180, +180, sliderPos[phase],   txtPos[phase],   +2, phase);
			}
		
			function initSlider(minValue, maxValue, slider, txt, type, phase) {
				slider.addEventListener("pressmove", function (e) { 
					let p = stage.globalToLocal(e.stageX, e.stageY);
					slider.x = limitIt(p.x, posX - barLength / 2, posX + barLength / 2);
					if (DEBUG2) console.log("pressmove: sliderBarPos[0].x: " + sliderBarPos[0].x.toFixed(0) +
						", posX: " + posX + ", p.x: " + p.x +
						", sliderBarPos[0]].nominalBounds.width: " + sliderBarPos[0].nominalBounds.width);
					txt.x = slider.x;
					let value = minValue + (0.5 + (slider.x - posX) / barLength) * (+maxValue - minValue);
					if (Math.abs(+maxValue - minValue) > 99) {
						txt.text = (value / 5).toFixed(0) * 5;
					} else {
						txt.text = ((value * 50.0).toFixed(0) / 50).toFixed(2);
					}
					status[type][phase] = parseFloat(txt.text);
					// consequences for changed value by sliderPos[phase]: 
					// current[phase + 3*side].x/.y AND posWdgs[phase][side][0] have to be changed
					if (type == 2){
						posWdgs[phase][0][0] = centerX + rWinding*Math.sin(status[type][phase]*Math.PI/180.0);
						posWdgs[phase][0][1] = centerY - rWinding*Math.cos(status[type][phase]*Math.PI/180.0);
						posWdgs[phase][1][0] = centerX - rWinding*Math.sin(status[type][phase]*Math.PI/180.0);
						posWdgs[phase][1][1] = centerY + rWinding*Math.cos(status[type][phase]*Math.PI/180.0);
						let amp = status[0][phase] * Math.cos(omega_t + status[1][phase] * Math.PI /180.0); 				
						for (let side = 0; side < 2; side++) {
							if (amp < 0) {
								current[phase + (1 - side) * 3].x = posWdgs[phase][side][0];
								current[phase + (1 - side) * 3].y = posWdgs[phase][side][1];
							} else {
								current[phase + side * 3].x = posWdgs[phase][side][0];
								current[phase + side * 3].y = posWdgs[phase][side][1];
							}
						}
					} 
				});
			}
		
			function limitIt(val, minVal, maxVal) {
				if (DEBUG2) console.log("limitIt: value: " + val + ", min: " + minVal + ", max: " + maxVal);
				if (val < minVal)
					return minVal;
				else if (val > maxVal)
					return maxVal;
				else
					return val;
			}
			function initStartStop() { // event-listener start/stop
				// start-button
				startBtn.addEventListener("mousedown", function (event) {
					startBtn.visible = false;
					stopBtn.visible = true;
					inGame = true;
				});
				startBtn.addEventListener("mouseover", function (event) {
					goFrame.visible = true;
				});
				startBtn.addEventListener("mouseout", function (event) {
					goFrame.visible = false;
				});
		
				// stop-button
				stopBtn.addEventListener("mousedown", stopTheGame);
				stopBtn.addEventListener("mouseover", function (event) {
					goFrame.visible = true;
				});
				stopBtn.addEventListener("mouseout", function (event) {
					goFrame.visible = false;
				});
			}
		
		}
		
		function stopTheGame() { // also workaround for debugging
			stopBtn.visible = false;
			startBtn.visible = true;
			inGame = false;
		}
		
		function gameCore(event) { // infinite loop
			if (inGame) {
				if (omega_t > 1.997*Math.PI) { // > 359.46°
					omega_t = Math.PI/180.0;
				} else {
					omega_t += Math.PI/180.0;
				} 
				counter = (omega_t*180.0/Math.PI).toFixed(0);
				omegatText.text = "omega*t = " + counter + "°";
				updateSlotAT(); 
			}
		}
		
		function createTouchControl() { // button- & slider-stuff
			touch = new c.Container();
			stage.addChild(touch);
			let BTN_SCALE = 1.2;
		
			createStartStop();
			createSlider();
		
			function createSlider() { // 3x3 sliders
				const posXLabel = posX - 210;
				let posY = centerY + 230 - 5;
				const delY = 40;
		
				// 1. 3 sliders for coil-positions:
				sliderBarPos[0] = new lib.sliderBarU();
				sliderBarPos[1] = new lib.sliderBarV();
				sliderBarPos[2] = new lib.sliderBarW();
				sliderPos[0] = new lib.sliderU();
				sliderPos[1] = new lib.sliderV();
				sliderPos[2] = new lib.sliderW();
				txtPos[0] = new c.Text("0", "normal 10px Arial", "#000000");
				txtPos[1] = new c.Text("120", "normal 10px Arial", "#000000");
				txtPos[2] = new c.Text("-120", "normal 10px Arial", "#000000");
				let labelPos = new c.Text("position/°:", "bold 14px Arial", "#000000");
				labelPos.textAlign = "left";
				labelPos.x = posXLabel;
				labelPos.y = posY - 2 * delY - 9;
				labelPos.width = 50;
				backGround.addChild(labelPos);
				barLength = sliderBarPos[0].nominalBounds.width;
		
				for (let phase = 0; phase < 3; phase++) {
					sliderBarPos[phase].x = posX;
					sliderBarPos[phase].y = posY - delY * (2 - phase);
					touch.addChild(sliderBarPos[phase]);
					sliderPos[phase].x = posX + parseFloat((barLength * txtPos[phase].text / 360.0).toFixed(0));
					sliderPos[phase].y = posY - delY * (2 - phase);
					touch.addChild(sliderPos[phase]);
					txtPos[phase].textAlign = "center";
					txtPos[phase].x = sliderPos[phase].x;
					txtPos[phase].y = sliderPos[phase].y - 23;
					txtPos[phase].width = 40;
					touch.addChild(txtPos[phase]);
				}
		
				// 2. 3 slider for phase-shifts:
				posY -= delY * 4;
				sliderBarPhase[0] = new lib.sliderBarU();
				sliderBarPhase[1] = new lib.sliderBarV();
				sliderBarPhase[2] = new lib.sliderBarW();
				sliderPhase[0] = new lib.sliderU();
				sliderPhase[1] = new lib.sliderV();
				sliderPhase[2] = new lib.sliderW();
				txtPhase[0] = new c.Text("0", "normal 10px Arial", "#000000");
				txtPhase[1] = new c.Text("120", "normal 10px Arial", "#000000");
				txtPhase[2] = new c.Text("-120", "normal 10px Arial", "#000000");
				let labelPhase = new c.Text("phase/°:", "bold 14px Arial", "#000000");
				labelPhase.textAlign = "left";
				labelPhase.x = posXLabel;
				labelPhase.y = posY - 2 * delY - 9;
				labelPhase.width = 50;
				backGround.addChild(labelPhase);
		
				for (let phase = 0; phase < 3; phase++) {
					sliderBarPhase[phase].x = posX;
					sliderBarPhase[phase].y = posY - delY * (2 - phase);
					touch.addChild(sliderBarPhase[phase]);
					sliderPhase[phase].x = posX + parseFloat((barLength * txtPhase[phase].text / 360.0).toFixed(0));
					sliderPhase[phase].y = posY - delY * (2 - phase);
					touch.addChild(sliderPhase[phase]);
					txtPhase[phase].textAlign = "center";
					txtPhase[phase].x = sliderPhase[phase].x;
					txtPhase[phase].y = sliderPhase[phase].y - 23;
					txtPhase[phase].width = 40;
					touch.addChild(txtPhase[phase]);
				}
		
				// 2. 3 slider for amplitudes:
				posY -= delY * 4;
				sliderBarAmp[0] = new lib.sliderBarUp();
				sliderBarAmp[1] = new lib.sliderBarVp();
				sliderBarAmp[2] = new lib.sliderBarWp();
				sliderAmp[0] = new lib.sliderU();
				sliderAmp[1] = new lib.sliderV();
				sliderAmp[2] = new lib.sliderW();
				let labelAmp = new c.Text("amplitude/p.u.:", "bold 14px Arial", "#000000");
				labelAmp.textAlign = "left";
				labelAmp.x = posXLabel;
				labelAmp.y = posY - 2 * delY - 9;
				labelAmp.width = 50;
				backGround.addChild(labelAmp);
		
				for (let phase = 0; phase < 3; phase++) {
					sliderBarAmp[phase].x = posX;
					sliderBarAmp[phase].y = posY - delY * (2 - phase);
					touch.addChild(sliderBarAmp[phase]);
					sliderAmp[phase].x = posX + parseFloat((barLength / 2.0).toFixed(0));
					sliderAmp[phase].y = posY - delY * (2 - phase);
					touch.addChild(sliderAmp[phase]);
					txtAmp[phase] = new c.Text("1.0", "normal 10px Arial", "#000000");
					txtAmp[phase].textAlign = "center";
					txtAmp[phase].x = sliderAmp[phase].x;
					txtAmp[phase].y = sliderAmp[phase].y - 23;
					txtAmp[phase].width = 40;
					touch.addChild(txtAmp[phase]);
				}
			}
		
			function createStartStop() { // start-/stop-button + mouseover-frame
				startBtn = new lib.BtnGo();
				startBtn.x = centerX;
				startBtn.y = (h + centerY) / 2 + 450 / 4;
				startBtn.scale = BTN_SCALE;
		
				stopBtn = new lib.BtnStop();
				stopBtn.x = centerX;
				stopBtn.y = (h + centerY) / 2 + 450 / 4;
				stopBtn.scale = BTN_SCALE;
				stopBtn.visible = false;
				touch.addChild(startBtn);
				touch.addChild(stopBtn);
		
				goFrame = new lib.FrameGo();
				goFrame.x = startBtn.x;
				goFrame.y = stopBtn.y;
				goFrame.scale = BTN_SCALE;
				goFrame.visible = false;
				touch.addChild(goFrame);
			}
		}
		
		function createBackground() { // header
			// create background-container
			backGround = new c.Container();
			stage.addChild(backGround);
			// background with different logos
			// TTZ-logo:
			back = new lib.bckGrndTTZthws();
			back.x = 0;
			back.y = 0;
			backGround.addChild(back);
			// core:
			core = new lib.stYoke();
			core.x = centerX;
			core.y = centerY;
			backGround.addChild(core);
			// create game-container
			game = new c.Container();
			stage.addChild(game);
			// title
			header = new c.Text(title, "bold 24px Arial", "#000000");
			header.textAlign = "center";
			header.x = centerX;
			header.y = 35;
			header.width = 300;
			backGround.addChild(header);
			// time
			omegatText = new c.Text("omega*t = 0°", "bold 16px Arial", "#000000");
			omegatText.textAlign = "center";
			omegatText.x = posX;
			omegatText.y = 35;
			omegatText.width = 300;
			backGround.addChild(omegatText);
		}
		
		function createSlotAT() { // armature ampere turns
			let amp = [1.0, -0.5, -0.5];
			current[0] = new lib.iUp();
			current[1] = new lib.iVp();
			current[2] = new lib.iWp();
			current[3] = new lib.iUm();
			current[4] = new lib.iVm();
			current[5] = new lib.iWm();
			phasor[0] = new lib.vecU();
			phasor[1] = new lib.vecV();
			phasor[2] = new lib.vecW();
			phasorSum = new lib.vecSum();
			phasorSum.x = centerX;
			phasorSum.y = centerY;
			let sumReal = 0, sumImag = 0;
			for (let phase = 0; phase < 3; phase++) {
				phasor[phase].x = centerX;
				phasor[phase].y = centerY;
				phasor[phase].scale = scaleVec * Math.abs(amp[phase]);
				phasor[phase].rotation = ( amp[phase] > 0 ? -90.0 + status[2][phase] : +90.0 + status[2][phase]);
				sumReal += Math.abs(amp[phase]) * Math.cos(phasor[phase].rotation*Math.PI/180.0);
				sumImag += Math.abs(amp[phase]) * Math.sin(phasor[phase].rotation*Math.PI/180.0);
				if (DEBUG) console.log("createSlotAT: sumReal: " + sumReal + ", sumImag: " + sumImag);
				tmp = phasor[phase]; game.addChild(tmp);
				for (let side = 0; side < 2; side++) {
					if (amp[phase] < 0) {
						current[phase + (1 - side) * 3].x = posWdgs[phase][side][0];
						current[phase + (1 - side) * 3].y = posWdgs[phase][side][1];
		
					} else {
						current[phase + side * 3].x = posWdgs[phase][side][0];
						current[phase + side * 3].y = posWdgs[phase][side][1];
					}
					current[phase + side * 3].scale = Math.sqrt(Math.abs(amp[phase]));
					tmp = current[phase + side * 3];
					game.addChild(tmp);
				}
			}
			phasorSum.scale = scaleVecSum * Math.sqrt(sumReal*sumReal + sumImag*sumImag);
			phasorSum.rotation = Math.atan2(sumImag, sumReal)*180.0/Math.PI;
			game.addChild(phasorSum);
			if (DEBUG) console.log("createSlotAT: phasorSum.nominalBounds.height: " + phasorSum.nominalBounds.height + 
							", phasorSum.scale: " + phasorSum.scale);
			for (let cnt = 0; cnt < 361; cnt++) {
				locus[cnt] = new lib.locusPt();
				locus[cnt].x = centerX;
				locus[cnt].y = centerY;
				locus[cnt].scale = 0.4;
				tmp = locus[cnt];
				game.addChild(tmp);
			}
		}
		
		function updateSlotAT() { 
			let amp = 0.0, sumReal = 0.0, sumImag = 0.0; // init tmp vars
			for (let phase = 0; phase < 3; phase++) {
				amp = status[0][phase] * Math.cos(omega_t + status[1][phase] * Math.PI /180.0);
				phasor[phase].scale = scaleVec * Math.abs(amp);
				phasor[phase].rotation = ( amp > 0 ? -90.0 + status[2][phase] : +90.0 + status[2][phase]);
				sumReal += Math.abs(amp) * Math.cos(phasor[phase].rotation*Math.PI/180.0);
				sumImag += Math.abs(amp) * Math.sin(phasor[phase].rotation*Math.PI/180.0);
				for (let side = 0; side < 2; side++) {
					if (amp < 0) {
						current[phase + (1 - side) * 3].x = posWdgs[phase][side][0];
						current[phase + (1 - side) * 3].y = posWdgs[phase][side][1];
					} else {
						current[phase + side * 3].x = posWdgs[phase][side][0];
						current[phase + side * 3].y = posWdgs[phase][side][1];
					}
					current[phase + side * 3].scale = Math.sqrt(Math.abs(amp));
				}
			}
			phasorSum.scale = scaleVecSum * Math.sqrt(sumReal*sumReal + sumImag*sumImag);
			phasorSum.rotation = Math.atan2(sumImag, sumReal)*180.0/Math.PI;
			locus[counter].x = centerX + sumImag * scaleVecSum * phasorSum.nominalBounds.height;
			locus[counter].y = centerY - sumReal * scaleVecSum * phasorSum.nominalBounds.height;
		}
		
		init();
		
		////////////////////////////////////////////////////////////////////////
		// end of animatePhasor.fla
		////////////////////////////////////////////////////////////////////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '5E9E90C37572F94BB48FE60E0BD08EBD',
	width: 850,
	height: 600,
	fps: 30,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5E9E90C37572F94BB48FE60E0BD08EBD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
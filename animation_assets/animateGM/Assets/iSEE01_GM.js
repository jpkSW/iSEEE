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


(lib.tqCCWFrame = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#E63F24").ss(2.1,0,0,4).p("AiUAVQAAAkAZAYQAZAZAjAAIB/AAQAjAAAZgZQAZgYAAgkIAAgpQAAgjgZgZQgZgZgjAAIh/AAQgjAAgZAZQgZAZAAAjg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tqCCWFrame, rect = new cjs.Rectangle(-15.9,-11.6,31.9,23.5), [rect]);


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
	this.shape.graphics.f().s("#000000").ss(0.8,0,0,4).p("AriZqIAAlkQAAhzhhhuQg8hAghglQg8hBgog7QguhFgLhVQgLhMAUg4QATg5AmAAQAqABAtBNQCODvD3CMQD7CPEkAAQElAAD7iPQD2iMCOjvQAuhNApgBQAmAAATA5QAUA4gKBMQgMBVgtBFQgoA7g8BBQghAlg8BAQhhBuAABzIAAFkQHdjXEgm2QEonBAAocQAAobkonAQkgm1ndjXIAAFiQAABzBhBuQAcAgBBBFQA8BBAoA7QAtBFAMBVQAKBMgUA5QgTA4gmAAQgpgBguhNQiOjvj2iMQj7iPklAAQkkAAj7CPQj3CMiODvQgtBNgqABQgmAAgTg4QgUg5ALhMQALhVAuhFQAog7A8hBQBBhFAcggQBhhuAAhzIAAliQndDXkhG1QkoHAAAIbQAAIcEoHBQEhG2HdDXgEgjJAAAQAAnJCxmiQCqmUE4k3QE3k4GUiqQGiixHJAAQHKAAGiCxQGUCqE3E4QE4E3CqGUQCxGiAAHJQAAHKixGiQiqGUk4E3Qk3E4mUCqQmiCxnKAAQnJAAmiixQmUiqk3k4Qk4k3iqmUQixmiAAnKg");
	this.shape.setTransform(0,-0.0097,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#88CAC0").s().p("EgNrAgZQmUiqk3k4Qk3k3irmUQixmiAAnKQAAnJCxmiQCrmUE3k3QE3k4GUiqQGiixHJAAQHJAAGiCxQGUCqE4E4QE3E3CrGUQCxGiAAHJQAAHKixGiQirGUk3E3Qk4E4mUCqQmiCxnJAAQnJAAmiixgAQ1ImQATA4gKBMQgMBVguBFQgnA7g8BBIhdBlQhhBuAABzIAAFkQHcjXEhm2QEonBAAocQAAobkonAQkhm1ncjXIAAFiQAABzBhBuQAbAgBCBFQA8BBAnA7QAuBFAMBVQAKBMgTA5QgUA4gmAAQgqgBgthNQiOjvj3iMQj7iPkkAAQkjAAj8CPQj2CMiPDvQgtBNgqABQgmAAgTg4QgUg5ALhMQAMhVAthFQAng7A9hBQBBhFAcggQBhhuAAhzIAAliQndDXkgG1QkpHAAAIbQAAIcEpHBQEgG2HdDXIAAlkQAAhzhhhuIhdhlQg9hBgng7QgthFgMhVQgLhMAUg4QATg5AmAAQAqABAtBNQCPDvD2CMQD8CPEjAAQEkAAD7iPQD3iMCOjvQAthNAqgBIABAAQAlAAAUA5g");
	this.shape_1.setTransform(0,-0.0097,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stYoke, rect = new cjs.Rectangle(-226,-226,452,452), [rect]);


(lib.PhifS = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.6,0,0,4).p("Ag/gDQgMAngdBIIgHARQgGAQAJAOQAKAOARAAICjAAQASAAAJgPQAKgPgIgQQgHgPgNgiQgQgrgLgiQgZhVgHg0QgBgNgJgIQgKgIgMAAQgLAAgJAIQgKAIgBANQgHA0gZBVg");
	this.shape.setTransform(0.0258,-78.4653,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4AB7D6").s().p("AhRCpQgRAAgKgOQgJgOAGgQIAHgRQAdhHAMgnQAZhWAHg0QABgMAKgJQAJgHALgBQAMABAKAHQAJAJABAMQAHA0AZBWQALAhAQArQANAiAHAQQAIAPgKAPQgJAPgSAAg");
	this.shape_1.setTransform(0.0258,-78.4653,1,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.6,0,0,4).p("AgglhIABKdQAAAOAJAJQAKAKAMAAQANAAAKgKQAJgJAAgOIAAqd");
	this.shape_2.setTransform(0,-34.8451,1,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4AB7D6").s().p("AgWFWQgJgKAAgNIAAqdIA/AAIAAKdQAAANgJAKQgJAJgNAAQgNAAgKgJg");
	this.shape_3.setTransform(0,-35.0949,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PhifS, rect = new cjs.Rectangle(-12.4,-96.4,24.9,97.4), [rect]);


(lib.PhifN = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.6,0,0,4).p("Ag/gCQgMAngdBIIgHAQQgGARAJAOQAKANARAAICjAAQASAAAJgPQAKgPgIgPQgHgPgNgjQgQgrgLghQgZhVgHg1QgBgMgJgIQgKgIgMAAQgLAAgJAIQgKAIgBAMQgHA1gZBVg");
	this.shape.setTransform(0.0258,16.9525,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4AB7D6").s().p("AhRCqQgRAAgKgPQgJgOAGgQIAHgQQAdhIAMgoQAZhUAHg1QABgNAKgHQAJgJALABQAMgBAKAJQAJAHABANQAHA1AZBUQALAiAQArQANAiAHAQQAIAQgKAOQgJAQgSAAg");
	this.shape_1.setTransform(0.0258,16.9525,1,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.6,0,0,4).p("AgglhIABKdQAAAOAJAJQAKAKAMAAQANAAAKgKQAJgJAAgOIAAqd");
	this.shape_2.setTransform(0,60.5727,1,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4AB7D6").s().p("AgWFWQgJgKAAgNIAAqdIA/AAIAAKdQAAANgJAKQgJAJgNAAQgNAAgKgJg");
	this.shape_3.setTransform(0,60.3229,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PhifN, rect = new cjs.Rectangle(-12.4,-1,24.9,97.5), [rect]);


(lib.ifp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.8,0,0,4).p("ABbBbIi1i1");
	this.shape.setTransform(0.025,0.029,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.8,0,0,4).p("AhaBbIC1i1");
	this.shape_1.setTransform(0.025,0.029,1,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,0,0,4).p("ACBAAQAAg0gmgmQglglg2AAQg0AAgmAlQgmAmAAA0QAAA1AmAmQAmAlA0AAQA2AAAlglQAmgmAAg1g");
	this.shape_2.setTransform(0.025,0.029,1,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4AB7D6").s().p("AhaBbQgmglAAg2QAAg1AmglQAmgmA0AAQA2AAAlAmQAmAmAAA0QAAA2gmAlQglAlg2AAQg0AAgmglg");
	this.shape_3.setTransform(0.025,0.029,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ifp, rect = new cjs.Rectangle(-13.8,-13.8,27.8,27.7), [rect]);


(lib.ifm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.8,0,0,4).p("AAgAAQAAgMgJgJQgKgKgNAAQgMAAgKAKQgJAJAAAMQAAAOAJAJQAKAJAMAAQANAAAKgJQAJgJAAgOg");
	this.shape.setTransform(-0.125,0.029,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_1.setTransform(-0.125,0.029,1,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,0,0,4).p("ACBAAQAAg0gmgmQglglg2AAQg0AAgmAlQgmAmAAA0QAAA1AmAmQAmAlA0AAQA2AAAlglQAmgmAAg1g");
	this.shape_2.setTransform(-0.125,0.029,1,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4AB7D6").s().p("AhaBbQgmgmAAg1QAAg0AmgmQAmgmA0AAQA2AAAlAmQAmAmAAA0QAAA2gmAlQglAlg2AAQg0AAgmglg");
	this.shape_3.setTransform(-0.125,0.029,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ifm, rect = new cjs.Rectangle(-14,-13.8,27.8,27.7), [rect]);


(lib.roShaft = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.8,0,0,4).p("ABkk2IAAhAIjHAAIAABAQhuAhhFBcQhHBdAAB1QAACRBmBnQBnBmCQAAQCRAABnhmQBmhnAAiRQAAh1hHhdQhFhchughg");
	this.shape.setTransform(0.05,-2.4344,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCEECC").s().p("Aj2EQQhnhmAAiRQAAh1BHhdQBFhcBughIAAhAIDHAAIAABAQBuAhBFBcQBHBdAAB1QAACRhmBmQhnBniRAAQiQAAhmhng");
	this.shape_1.setTransform(0.05,-2.4344,1,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,0,0,4).p("AAAPEQDEAAC0hLQCthKCFiFQCFiGBKitQBLizAAjEQAAjDhLi0QhKitiFiFQiFiFithKQi0hLjEAAQjDAAizBLQitBKiGCFQiFCFhJCtQhMC0AADDQAADEBMCzQBJCtCFCGQCGCFCtBKQCzBLDDAAg");
	this.shape_2.setTransform(0.025,0.0403,1,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88CAC0").s().p("Al2N5QithKiGiFQiFiGhJitQhMizAAjEQAAjDBMi0QBJitCFiFQCGiFCthKQCzhLDDAAQDEAAC0BLQCtBKCFCFQCFCFBKCtQBLC0AADDQAADEhLCzQhKCtiFCGQiFCFitBKQi0BLjEAAQjDAAizhLg");
	this.shape_3.setTransform(0.025,0.0403,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roShaft, rect = new cjs.Rectangle(-97.4,-97.4,194.9,194.9), [rect]);


(lib.PhiA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.6,0,0,4).p("AAEg/QgugPhBgaIgRgHQgQgGgOAJQgPAKAAARIAACjQAAARAQAKQAOAKARgIQAPgHAigNQArgQAigLQBVgZA0gHQAMgBAJgKQAIgJAAgMQAAgLgIgJQgJgKgMgBQg0gHhVgZg");
	this.shape.setTransform(85.125,0.0411,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB6608").s().p("AiZBtQgQgKAAgRIAAijQAAgRAPgKQAOgJAQAGIARAHQBBAaAuAPQBVAZA0AHQAMABAJAKQAIAJAAALQAAAMgIAJQgJAKgMABQg0AHhVAZQgiALgrAQQgiANgPAHQgIADgHAAQgIAAgIgFg");
	this.shape_1.setTransform(85.125,0.0411,1,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.6,0,0,4).p("AOBggI7cABQgOAAgJAJQgKAKAAAMQAAANAKAKQAJAJAOAAIbcAA");
	this.shape_2.setTransform(-12.8499,0.0153,1,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB6608").s().p("AteAhQgNAAgJgKQgKgKAAgNQAAgMAKgJQAJgKANAAIbdgBIAABBg");
	this.shape_3.setTransform(-12.6,0.0153,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PhiA, rect = new cjs.Rectangle(-103.1,-12.4,206.2,24.9), [rect]);


(lib.iAp = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.8,0,0,4).p("ABbBbIi1i1");
	this.shape.setTransform(0,0.0064,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.8,0,0,4).p("AhaBbIC1i1");
	this.shape_1.setTransform(0,0.0064,1,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,0,0,4).p("ACBAAQAAg0gmgmQglglg2AAQg0AAgmAlQgmAmAAA0QAAA2AmAlQAmAmA0AAQA2AAAlgmQAmglAAg2g");
	this.shape_2.setTransform(0,0.0064,1,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB6608").s().p("AhaBbQglglAAg2QAAg0AlgmQAmgmA0AAQA2AAAlAmQAlAmAAA0QAAA2glAlQglAmg2AAQg0AAgmgmg");
	this.shape_3.setTransform(0,0.0064,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iAp, rect = new cjs.Rectangle(-13.8,-13.8,27.7,27.7), [rect]);


(lib.iAm = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(3.2,0,0,4).p("AAgAAQAAgMgJgKQgKgJgNAAQgMAAgKAJQgJAKAAAMQAAANAJAKQAKAJAMAAQANAAAKgJQAJgKAAgNg");
	this.shape.setTransform(-0.025,0.0242,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_1.setTransform(-0.025,0.0242,1,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,0,0,4).p("ACBAAQAAg0gmgmQglglg2AAQg0AAgmAlQgmAmAAA0QAAA1AmAmQAmAlA0AAQA2AAAlglQAmgmAAg1g");
	this.shape_2.setTransform(0,0.0242,1,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB6608").s().p("AhaBbQglglAAg2QAAg0AlgmQAmglA0AAQA2AAAlAlQAlAmAAA0QAAA2glAlQglAlg2AAQg0AAgmglg");
	this.shape_3.setTransform(0,0.0242,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iAm, rect = new cjs.Rectangle(-13.8,-13.8,27.7,27.7), [rect]);


(lib.goFrame = function(mode,startPosition,loop,reversed) {
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

}).prototype = getMCSymbolPrototype(lib.goFrame, rect = new cjs.Rectangle(-26.5,-11.6,53.2,23.4), [rect]);


(lib.VecUi = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2B2B2A").ss(1,1,1).p("AAQgCQAIgZAOgkIhLAAQALAYAMAlQAMAoACAaQAEgaAMgog");
	this.shape.setTransform(0,55.2,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgOgCQgMglgLgYIBLAAQgOAkgIAZQgMAogEAaQgCgagMgog");
	this.shape_1.setTransform(0,55.2,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(1,1,1).p("AAAkgIAAJB");
	this.shape_2.setTransform(0.05,-10.2,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VecUi, rect = new cjs.Rectangle(-8.5,-68.9,17.1,137.9), [rect]);


(lib.VecUBr = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2B2B2A").ss(1,1,1).p("AgCgOQgXgHgmgQIAABLQAdgMAggKQAogMAZgEQgZgCgogMg");
	this.shape.setTransform(25.55,0,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("Ag+glQAlAQAXAHQAoAMAaACQgaAEgoAMQggAKgcAMg");
	this.shape_1.setTransform(25.55,0,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(1,1,1).p("AiLAAIEXAA");
	this.shape_2.setTransform(-10.2,0.05,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VecUBr, rect = new cjs.Rectangle(-39.2,-8.5,78.5,17.1), [rect]);


(lib.VecUA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2B2B2A").ss(1,1,1).p("AAQgCQAGgUAQgpIhLAAQALAYALAlQANAoACAaQADgaANgog");
	this.shape.setTransform(0,55.2,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgPgCQgLglgLgYIBLAAQgQApgHAUQgLAogEAaQgCgagNgog");
	this.shape_1.setTransform(0,55.2,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(1,1,1).p("AAAkgIAAJB");
	this.shape_2.setTransform(0,-10.2,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VecUA, rect = new cjs.Rectangle(-8.6,-68.9,17.2,137.9), [rect]);


(lib.VecIA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2B2B2A").ss(1,1,1).p("AgCgOQgTgGgqgRIAABLQAVgLAogMQApgMAYgDQgZgCgogMg");
	this.shape.setTransform(0,0,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("Ag/glQAqARAUAGQAnAMAZACQgYADgoAMQgoAMgWALg");
	this.shape_1.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VecIA, rect = new cjs.Rectangle(-13.7,-8.5,27.4,17.1), [rect]);


(lib.CircuitFrame = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#666666").ss(1,0,2).p("A4w0QMAxiAAAQAVAAAAAcMAAAAnpQAAAcgVAAMgxiAAAQgWAAAAgcMAAAgnpQAAgcAWAAg");
	this.shape.setTransform(160.7,129.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAF8D0").s().p("A4wURQgWAAAAgcMAAAgnpQAAgcAWAAMAxiAAAQAVAAAAAcMAAAAnpQAAAcgVAAg");
	this.shape_1.setTransform(160.7,129.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CircuitFrame, rect = new cjs.Rectangle(-1,-1,323.4,261.4), [rect]);


(lib.BaseCircuit = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2B2B2A").ss(1,1,2).p("ACOAAQAAA7gqApQgpAqg7AAQg6AAgpgqQgqgpAAg7QAAg6AqgpQApgpA6AAQA7AAApApQAqApAAA6g");
	this.shape.setTransform(273.05,148.3,2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhjBkQgqgpAAg7QAAg6AqgpQApgpA6AAQA7AAApApQAqApAAA6QAAA7gqApQgpApg7AAQg6AAgpgpg");
	this.shape_1.setTransform(273.05,148.3,2,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(1,1,2).p("ACqA5IAAhxIlTAAIAABxg");
	this.shape_2.setTransform(97.3,63.35,2,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AipA5IAAhxIFTAAIAABxg");
	this.shape_3.setTransform(97.3,63.35,2,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2B2A").s().p("AAQA9IAAgDQAHAAADgDQACgCAAgCQAAgEgDgJIgHgRIguAAIgIATQgDAHAAAEQAAACADACQADACAIABIAAADIglAAIAAgDQAHgCACgCQAFgEAFgNIAqhhIACAAIAqBiQAFAMAEAEQAEAEAHAAIAAADgAgZAPIAoAAIgTgvg");
	this.shape_4.setTransform(105.675,43);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B2A").s().p("AAeBJIgXhHQgHAAgJgCIgMAsQgDAJAAAGQAAAEADADQADACAKABIgBAEIg4AAIABgEIALgCQAEgCACgDQAEgFADgNIAahXQACgIAAgFQAAgFgEgEQgEgDgHAAIABgEIAuAAQAYAAALAJQAKAJAAAPQAAAOgKAMQgLALgTACIAOArQAFAQAGAEQAFAFALABIgBAEgAAJg/IgQA6IALABQATAAAKgKQALgKAAgQQAAgMgHgGQgGgGgOAAIgIABg");
	this.shape_5.setTransform(93.825,34.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2A").s().p("AAQA9IAAgDQAHAAADgCQACgDAAgDQAAgDgDgJIgHgRIguAAIgIATQgDAHAAADQAAADADACQADACAIABIAAADIglAAIAAgDQAHgBACgDQAFgEAFgNIAqhhIACAAIAqBiQAFAMAEAEQAEADAHABIAAADgAgZAPIAoAAIgTgvg");
	this.shape_6.setTransform(258.675,48.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2A").s().p("AgwBJIACgEQAJAAADgCQAFgCACgDQAEgFADgNIAZhXQADgLAAgFQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgDgDIgLgBIACgEIA3AAIgBAEQgIAAgCACQgGACgCAEQgDAEgDANIgZBXIgDAQIABAEQACACABABIANACIgBAEg");
	this.shape_7.setTransform(251.45,40.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAAAcQAMAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgMAAQgLAAgIAIQgIAIAAALQAAAMAIAIQAIAIALAAg");
	this.shape_8.setTransform(35.05,63.35,2,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_9.setTransform(35.05,63.35,2,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2B2A").s().p("AAQA9IAAgDQAHgBADgBQACgDAAgDQAAgDgDgJIgHgRIguAAIgIATQgDAHAAADQAAADADACQADACAIABIAAADIglAAIAAgDQAHgBACgCQAFgFAFgNIAqhhIACAAIAqBiQAFAMAEAEQAEADAHABIAAADgAgZAOIAoAAIgTgug");
	this.shape_10.setTransform(24.275,149.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B2B2A").s().p("Ag/A+QgOgNAAgQIABgNIAFgQIAOgxQADgLAAgEQAAgEgDgDQgDgCgNAAIACgFIA9AAIgBAFQgKAAgEABQgEABgCAEQgDAFgDAKIgPAzIgFASIgBAMQAAANAJAKQAKAIAQABQALgBAIgEQAIgEAGgGQAGgIAEgMIAJgZIANgsQAFgRAAgEQAAgEgDgCQgEgDgKAAIACgFIAuAAIgBAFQgJAAgDABQgEABgCAEQgDAFgDALIgQA1QgIAbgHAMQgGANgNAIQgMAJgTAAQgWAAgNgNg");
	this.shape_11.setTransform(14.525,141.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B2B2A").s().p("AgcApIAAgCQAGgBADgBQADgCAAgDIAAgJIAAgeIAAgRIgCgDIgEgCIgGACIgBgEIAYgKIAEAAIAAASQAJgRALgBQAFAAADADQADAEAAADQAAAEgCACQgDADgCgBQgEAAgDgCIgGgEQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgFAEgDAIIAAAlQAAAIABADIAEAEQADABAFABIAAACg");
	this.shape_12.setTransform(189.5,26.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B2B2A").s().p("Ag1A7IAAgDIAFAAQAIAAADgFQABgCAAgLIAAhMQAAgKgCgDQgDgEgHgBIgFAAIAAgDIA0AAQANAAAJACQAOAEAGAIQAHAHAAALQAAAJgFAHQgGAHgLAEQANACAGAFQAIAIAAAMQAAAJgFAIQgGAIgJAEQgKAEgVgBgAgMACIgGAAIAAAxQAKADAIAAQARAAAIgIQAJgHAAgKQAAgIgFgGQgDgHgJgDQgIgEgMAAIgJABgAgSgzIAAAuIAHABIAJAAQAMAAAHgCQAGgDADgGQAEgGAAgGQAAgLgJgHQgIgIgPAAQgKAAgGACg");
	this.shape_13.setTransform(180.05,24.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B2B2A").s().p("Ag/A+QgOgNAAgPIABgOIAFgRIAOgwQADgLAAgFQAAgDgDgDQgDgCgNgBIACgDIA9AAIgBADQgKABgEABQgEABgCAFQgDAEgDAKIgPAzIgFASIgBANQAAANAJAIQAKAKAQgBQALAAAIgDQAIgFAGgHQAGgHAEgMIAJgaIANgrQAFgRAAgFQAAgDgDgDQgEgCgKgBIACgDIAuAAIgBADQgJABgDABQgEABgCAFQgDADgDAMIgQA1QgIAagHANQgGAMgNAJQgMAIgTAAQgWAAgNgMg");
	this.shape_14.setTransform(171.025,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B2B2A").s().p("AgSA/IAAgDQAGAAACgCQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQABgDAAgHIAAggQAAgNgBgCQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBIgDAAIgGAAIgBgCIAXgKIAEAAIAABAIABAKQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQABACAGAAIAAADgAgEguQgEgDAAgDQAAgEAEgDQACgCACgBQAFABACACQADADgBAEQABADgDADQgCACgFAAQgCAAgCgCg");
	this.shape_15.setTransform(218.85,149.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B2B2A").s().p("Ag/A+QgOgNAAgQIABgNIAFgQIAOgxQADgLAAgEQAAgEgDgDQgDgCgNAAIACgFIA9AAIgBAFQgKAAgEABQgEABgCAEQgDAFgDAKIgPAzIgFASIgBAMQAAANAJAKQAKAIAQABQALgBAIgEQAIgEAGgGQAGgIAEgMIAJgZIANgsQAFgRAAgEQAAgEgDgCQgEgDgKAAIACgFIAuAAIgBAFQgJAAgDABQgEABgCAEQgDAFgDALIgQA1QgIAbgHAMQgGANgNAIQgMAJgTAAQgWAAgNgNg");
	this.shape_16.setTransform(212.925,141.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAAAdQAMAAAIgJQAIgJAAgLQAAgKgIgJQgIgJgMAAQgLAAgIAJQgIAJAAAKQAAALAIAJQAIAJALAAg");
	this.shape_17.setTransform(33.9,233.7,2,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTAUQgJgJABgLQgBgKAJgJQAJgIAKAAQAMAAAIAIQAJAJAAAKQAAALgJAJQgIAIgMAAQgKAAgJgIg");
	this.shape_18.setTransform(33.9,233.7,2,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2B2B2A").ss(1,1,2).p("ApVmpISrAAIAANTIyrAA");
	this.shape_19.setTransform(153.5,148.55,2,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAjAkIAAhHIhFAAIAABHg");
	this.shape_20.setTransform(273.05,180.9,2,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B2B2A").s().p("AgiAkIAAhGIBFAAIAABGg");
	this.shape_21.setTransform(273.05,180.9,2,2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAjAjIAAhFIhFAAIAABFg");
	this.shape_22.setTransform(273.05,115.75,2,2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B2B2A").s().p("AgiAjIAAhFIBFAAIAABFg");
	this.shape_23.setTransform(273.05,115.75,2,2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#2B2B2A").ss(1,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");
	this.shape_24.setTransform(176.7,63.35,2,2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_25.setTransform(176.7,63.35,2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BaseCircuit, rect = new cjs.Rectangle(0,0,302.4,240.4), [rect]);


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
	this.shape_4.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AD/AVQAAAkgZAZQgZAZgjAAIlTAAQgjAAgZgZQgZgZAAgkIAAgqQAAgjAZgZQAZgZAjAAIFTAAQAjAAAZAZQAZAZAAAjg");
	this.shape_4.setTransform(0.025,0.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F6CA19").s().p("AipBqQgjAAgZgYQgZgZAAgkIAAgqQAAgiAZgaQAZgYAjAAIFTAAQAjAAAZAYQAZAaAAAiIAAAqQAAAkgZAZQgZAYgjAAg");
	this.shape_5.setTransform(0.025,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BtnStop, rect = new cjs.Rectangle(-26.5,-11.5,53.1,23.3), [rect]);


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
	this.shape.graphics.f("#2B2B2A").s().p("AgHA7IAAgQIAQAAIAAAQgAgEAdIgEg9IAAgaIARAAIAAAaIgEA9g");
	this.shape.setTransform(13,-0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgdA1QgNgIgHgOQgGgOgBgQQABgcAQgQQAPgRAYAAQARAAANAIQANAHAHAOQAGAOABARQAAASgIAOQgHAOgOAIQgNAHgPAAQgPAAgOgIgAgcgjQgMALABAZQAAAWALANQALAMARgBQARAAAMgMQAMgMAAgXQAAgOgGgKQgEgLgKgGQgJgGgMAAQgPAAgNAMg");
	this.shape_1.setTransform(4.3,-0.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B2A").s().p("AgZA2QgOgIgIgOQgGgOgBgRQABgRAGgPQAIgOANgIQAOgHARAAQAMAAAKAEQALAEAGAIQAGAHADAMIgOAEQgDgJgEgFQgEgGgHgCQgHgEgJAAQgKAAgIAEQgIADgFAFQgFAGgCAGQgEAKgBANQABAPAFALQAGALAJAFQALAFALAAQAKAAAJgEQAKgEAFgEIAAgXIgiAAIAAgMIAxAAIAAArQgLAIgMAFQgNAFgNAAQgQAAgOgHg");
	this.shape_2.setTransform(-8.65,-0.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AD/AVQAAAkgZAZQgZAZgjAAIlTAAQgjAAgZgZQgZgZAAgkIAAgqQAAgjAZgZQAZgZAjAAIFTAAQAjAAAZAZQAZAZAAAjg");
	this.shape_3.setTransform(0,0.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6CA19").s().p("AipBqQgjAAgZgYQgZgZAAgkIAAgqQAAgiAZgaQAZgYAjAAIFTAAQAjAAAZAYQAZAaAAAiIAAAqQAAAkgZAZQgZAYgjAAg");
	this.shape_4.setTransform(0,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BtnGo, rect = new cjs.Rectangle(-26.5,-11.5,53,23.3), [rect]);


(lib.BtnCW = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2B2B2A").ss(0.5,1,1).p("AgOAAQABgMAAgUIAiAPQgHAGgOARQgPASgFAJQADgLADgWg");
	this.shape.setTransform(6.025,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgOAAQABgNAAgTIAiAPQgHAFgOARQgPATgFAJQADgMADgVg");
	this.shape_1.setTransform(6.025,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(1,1,1).p("Ag3AvQgIgOAAgQQAAgZATgTQATgTAZAAQAaAAATATQATASAAAaQAAAMgFAN");
	this.shape_2.setTransform(0.025,-1.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AiUAVQAAAkAZAYQAZAZAjAAIB/AAQAjAAAZgZQAZgYAAgkIAAgpQAAgjgZgZQgZgZgjAAIh/AAQgjAAgZAZQgZAZAAAjg");
	this.shape_3.setTransform(0.025,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6CA19").s().p("Ag/BqQgjAAgZgZQgZgYAAgkIAAgpQAAgjAZgZQAZgZAjAAIB/AAQAjAAAZAZQAZAZAAAjIAAApQAAAkgZAYQgZAZgjAAg");
	this.shape_4.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BtnCW, rect = new cjs.Rectangle(-15.8,-11.6,31.8,23.3), [rect]);


(lib.BtnCCW = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#2B2B2A").ss(0.5,1,1).p("AAPAAIgCggIghAPQAFAEAQATQANAPAHAMQgEgQgCgRg");
	this.shape.setTransform(-6,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AABAFQgQgSgFgEIAhgPIACAgQACARAEAQQgHgMgNgQg");
	this.shape_1.setTransform(-6,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(1,1,1).p("AA4AvQAIgPAAgPQAAgagTgSQgTgTgaAAQgZAAgTATQgTATAAAZQAAAOAFAL");
	this.shape_2.setTransform(0.025,-1.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("ACVAVQAAAkgZAYQgZAZgjAAIh/AAQgjAAgZgZQgZgZAAgjIAAgpQAAgjAZgZQAZgZAjAAIB/AAQAjAAAZAZQAZAZAAAjg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6CA19").s().p("Ag/BqQgjAAgZgZQgZgZAAgjIAAgpQAAgjAZgZQAZgZAjAAIB/AAQAkAAAYAZQAZAZAAAjIAAApQAAAkgZAYQgYAZgkAAg");
	this.shape_4.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BtnCCW, rect = new cjs.Rectangle(-15.9,-11.6,31.8,23.3), [rect]);


(lib.Rectangle_35 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_35, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_34 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABBQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_34, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_33 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgRQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_33, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_32 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_32, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_31 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABBQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_31, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_30 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgRQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_30, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_29 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_29, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_28 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_28, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_27 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_27, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_26 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_26, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_25 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_25, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_24, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_23, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_22, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_21, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_20, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_19, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_18, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_17, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhCQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABCQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_16, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_15, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_14, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhCQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABCQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_13, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_12, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_11, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_10, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_9, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_8, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_6, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_5, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhCQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABCQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_4, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_3, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape.setTransform(6.75,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_2, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhCQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABCQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Path_131 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_131, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_130 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_130, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_129 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_129, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_128 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA0Ih5AAIAABMICOAAIAAA2g");
	this.shape.setTransform(10.2,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_128, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_127 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_127, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_124 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAWQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIhXAAIAABeQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_124, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_123 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAheIhTAAIAABeQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAjRQAAgEAEAAIAaAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAABaIBTAAIAAhZQAAgEAEAAIAaAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAADSQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_123, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_122 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgjhuIgiBuQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIgThtIgFhmQABAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIADBoIAJA8IAehfIAjAAIAfBfIAJg8IAChoQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgEBmIgSBtQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_122, rect = new cjs.Rectangle(0,0,18.3,21.7), [rect]);


(lib.Path_121 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgDgTgOQgJgIgEgRQgDgLAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAHQACAJACADQAJAKAJACQAWAFAYgFQAQgIACgLQACgJgCgPQgBgPgUgFQgGgDgMgCIgagFQgRgFgPgJQgJgHgGgKQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAIAAAKADQAIADADABQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgLgLgUAAQgWAAgKAHQgLAIAAARQAAARAOAIQALAHAdAFQAbAFAMAHQAWANACAbQABAOgBAHQAAARgMAOQgRASgfABIgVABIgPgBg");
	this.shape.setTransform(7.5889,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_121, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_120 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_120, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_119 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_119, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_118 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_118, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_117 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA0Ih5AAIAABMICOAAIAAA2g");
	this.shape.setTransform(10.2,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_117, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_116 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_116, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_113 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAWQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIhXAAIAABeQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_113, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_112 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAheIhTAAIAABeQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAjRQAAgEAEAAIAaAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAABaIBTAAIAAhZQAAgEAEAAIAaAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAADSQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_112, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_111 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgjhuIgiBuQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIgThtIgFhmQABAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIADBoIAJA8IAehfIAjAAIAfBfIAJg8IAChoQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgEBmIgSBtQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_111, rect = new cjs.Rectangle(0,0,18.3,21.7), [rect]);


(lib.Path_110 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgDgTgOQgJgIgEgRQgDgLAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAHQACAJACADQAJAKAJACQAWAFAYgFQAQgIACgLQACgJgCgPQgBgPgUgFQgGgDgMgCIgagFQgRgFgPgJQgJgHgGgKQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAIAAAKADQAIADADABQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgLgLgUAAQgWAAgKAHQgLAIAAARQAAARAOAIQALAHAdAFQAbAFAMAHQAWANACAbQABAOgBAHQAAARgMAOQgRASgfABIgVABIgPgBg");
	this.shape.setTransform(7.5889,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_110, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_109 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_109, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_108 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_108, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_107 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_107, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_106 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_106, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_105 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_105, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_102 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_102, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_101 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAheIhTAAIAABeQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAjRQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADTQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_101, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_100 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_100, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_99 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgHgEgRQgDgMAAgLIABgCIACgBIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgsgJQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgagBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgMgHgJQgKgLgVAAQgWABgKAGQgLAHAAARQAAARAOAJQALAHAdAFQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape.setTransform(7.5917,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_99, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_98 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_98, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_97 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_97, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_96 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_96, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_95 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_95, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_94 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_94, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_91 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_91, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_90 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAheIhTAAIAABeQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAjRQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADTQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_90, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_89 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_89, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_88 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgHgEgRQgDgMAAgLIABgCIACgBIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgsgJQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgagBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgMgHgJQgKgLgVAAQgWABgKAGQgLAHAAARQAAARAOAJQALAHAdAFQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape.setTransform(7.5917,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_88, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_87 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_87, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_86 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_86, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_85 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_85, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_84 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_84, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_83 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_83, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_80 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_80, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_79 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_79, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_78 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_78, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_77 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgHgEgRQgDgMAAgLIABgCIACgBIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgsgJQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgagBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgKgLgVAAQgWABgKAGQgLAHAAARQAAARAOAJQALAHAdAFQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape.setTransform(7.5917,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_77, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_76 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_76, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_75 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_75, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_74 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_74, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_73 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_73, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_72 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_72, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_69 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_69, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_68 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_68, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_67 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_67, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_66 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgHgEgRQgDgMAAgLIABgCIACgBIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgsgJQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgagBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgKgLgVAAQgWABgKAGQgLAHAAARQAAARAOAJQALAHAdAFQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape.setTransform(7.5917,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_66, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_65 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_65, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_64 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_64, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_63 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjPIh+AAIAAg0IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_63, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_62 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_62, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_61 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_61, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_58 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAjQQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIhpAAIAABCIBXAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABeQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_58, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_57 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_57, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_56 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIgjhtIgiBtQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgThsIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBsQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_56, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_55 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgIgEgQQgDgMAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAQAGAIQAIAKAKACQAUAFAagGQAQgHACgLQACgKgCgOQgBgPgUgGIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgPQARgMAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgNgHgIQgLgLgUAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAbAFAMAIQAWANACAaQABAOgBAHQAAARgMAOQgRASgfABIgVABIgPgBg");
	this.shape.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_55, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_54 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_54, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_53 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_53, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_52 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjPIh+AAIAAg0IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_52, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_51 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_51, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_50, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_47 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAjQQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIhpAAIAABCIBXAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABeQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_47, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_46 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_46, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_45 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIgjhtIgiBtQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgThsIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBsQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_45, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_44 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgIgEgQQgDgMAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAQAGAIQAIAKAKACQAUAFAagGQAQgHACgLQACgKgCgOQgBgPgUgGIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgPQARgMAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgNgHgIQgLgLgUAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAbAFAMAIQAWANACAaQABAOgBAHQAAARgMAOQgRASgfABIgVABIgPgBg");
	this.shape.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_44, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_43 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_42 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_41 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_40 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_39 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_36 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_35 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_34 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_33 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgIgEgQQgDgMAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAOAJAHAMQAHAMABASQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgKgLgVAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_32 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_31 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_30 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_29 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_28 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_25 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgIgEgQQgDgMAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAOAJAHAMQAHAMABASQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgKgLgVAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjPIh+AAIAAg0IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAjQQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIhpAAIAABCIBXAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABeQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAheIhTAAIAABeQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIgjhtIgiBtQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgThtIgFhkQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBkIgSBtQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgVgCgSgQQgJgHgEgRQgDgLAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAHQACAJACADQAIAKAKACQAWAEAYgFQAQgHACgLQACgKgCgOQgBgPgUgGIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgPQARgMAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgNgHgIQgLgLgUAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAbAFAMAIQAWANACAaQABAOgBAHQAAAQgMAPQgRASgfABIgVABIgPgBg");
	this.shape.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjPIh+AAIAAg0IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape.setTransform(10.175,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAjQQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIhpAAIAABCIBXAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABeQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAheIhTAAIAABeQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIgjhtIgiBtQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgThtIgFhkQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBkIgSBtQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F0841A").s().p("AgUBtQgVgCgSgQQgJgHgEgRQgDgLAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAHQACAJACADQAIAKAKACQAWAEAYgFQAQgHACgLQACgKgCgOQgBgPgUgGIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgPQARgMAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgNgHgIQgLgLgUAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAbAFAMAIQAWANACAaQABAOgBAHQAAAQgMAPQgRASgfABIgVABIgPgBg");
	this.shape.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.CompoundPath_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_11, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_10, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_9, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_8, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQghAhg1ABQg0gBggghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_7, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQghAhg1ABQg0gBggghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_6, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhfQAAguAjgeQAigcAsAAQAtAAAiAcQAjAeAAAuIAABfQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhRQgLAQgBAgIAABDQABAnAQAQQAOAPAXAAQAXAAAPgPQARgQgBgnIAAhDQAAgggKgQQgOgVgeAAQgdAAgNAVg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhfQAAguAjgeQAigcAsAAQAtAAAiAcQAjAeAAAuIAABfQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhRQgLAQgBAgIAABDQABAnAQAQQAOAPAXAAQAXAAAPgPQARgQgBgnIAAhDQAAgggKgQQgOgVgeAAQgdAAgNAVg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgeAAg1IAAhfQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABfQAAA0gcAfQghAhg1ABQg0gBggghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgeAAg1IAAhfQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABfQAAA0gcAfQghAhg1ABQg0gBggghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhfQAAguAjgeQAigcAsAAQAtAAAiAcQAjAeAAAuIAABfQAAAzgcAfQggAhg2ABQg1gBgfghgAAmBZQARgQgBgnIAAhDQAAgggKgRQgOgUgegBQgdABgNAUQgLARgBAgIAABDQABAnAQAQQAPAPAWAAQAXAAAPgPg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhfQAAguAjgeQAigcAsAAQAtAAAiAcQAjAeAAAuIAABfQAAAzgcAfQggAhg2ABQg1gBgfghgAAmBZQARgQgBgnIAAhDQAAgggKgRQgOgUgegBQgdABgNAUQgLARgBAgIAABDQABAnAQAQQAPAPAWAAQAXAAAPgPg");
	this.shape.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.Rectangle_35_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_35_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_34_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABBQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_34_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_33_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgRQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_33_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_32_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_32_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_31_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABBQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_31_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_30_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgRQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAARQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_30_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_29_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_29_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_28_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_28_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_27_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_27_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_26_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_26_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_25_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_25_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_24_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_24_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_23_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_23_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_22_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_22_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_21_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_21_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_20_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_20_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_19_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_19_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_18_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_18_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_17_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_17_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_16_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhCQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABCQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_16_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_15_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_15_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_14_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_14_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_13_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhCQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABCQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_13_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_12_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_12_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_11_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_11_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_10_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_10_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_9_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_9_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_8_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.675);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_8_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_7_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAhCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIARAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAABCQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_7_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_6_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_6_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_5_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_5_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_4_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhCQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABCQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_4_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_3_1, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Rectangle_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhDAbIAAg1ICHAAIAAA1g");
	this.shape_1.setTransform(6.75,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_2_1, rect = new cjs.Rectangle(0,0,13.5,5.4), [rect]);


(lib.Rectangle_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgIAkQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAIAAhCQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIARAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAABCQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape_1.setTransform(1.1,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_1_1, rect = new cjs.Rectangle(0,0,2.2,7.2), [rect]);


(lib.Rectangle_36 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgeALQgBAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgQQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAABAAIA+AAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAQQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(3.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle_36, rect = new cjs.Rectangle(0,0,6.8,2.2), [rect]);


(lib.Path_131_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_131_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_130_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_130_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_129_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_129_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_128_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA0Ih5AAIAABMICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_128_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_127_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_127_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_124_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAWQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIhXAAIAABeQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_124_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_123_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAheIhTAAIAABeQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAjRQAAgEAEAAIAaAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAABaIBTAAIAAhZQAAgEAEAAIAaAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAADSQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_123_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_122_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgjhuIgiBuQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIgThtIgFhmQABAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIADBoIAJA8IAehfIAjAAIAfBfIAJg8IAChoQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgEBmIgSBtQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_122_1, rect = new cjs.Rectangle(0,0,18.3,21.7), [rect]);


(lib.Path_121_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgDgTgOQgJgIgEgRQgDgLAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAHQACAJACADQAJAKAJACQAWAFAYgFQAQgIACgLQACgJgCgPQgBgPgUgFQgGgDgMgCIgagFQgRgFgPgJQgJgHgGgKQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAIAAAKADQAIADADABQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgLgLgUAAQgWAAgKAHQgLAIAAARQAAARAOAIQALAHAdAFQAbAFAMAHQAWANACAbQABAOgBAHQAAARgMAOQgRASgfABIgVABIgPgBg");
	this.shape_1.setTransform(7.5889,11);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_121_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_120_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_120_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_119_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_119_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_118_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_118_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_117_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA0Ih5AAIAABMICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_117_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_116_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_116_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_113_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAAAWQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIhXAAIAABeQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_113_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_112_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAheIhTAAIAABeQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAjRQAAgEAEAAIAaAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAABaIBTAAIAAhZQAAgEAEAAIAaAAQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABIAADSQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_112_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_111_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgjhuIgiBuQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIgThtIgFhmQABAAAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAIADBoIAJA8IAehfIAjAAIAfBfIAJg8IAChoQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgEBmIgSBtQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_111_1, rect = new cjs.Rectangle(0,0,18.3,21.7), [rect]);


(lib.Path_110_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgDgTgOQgJgIgEgRQgDgLAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAHQACAJACADQAJAKAJACQAWAFAYgFQAQgIACgLQACgJgCgPQgBgPgUgFQgGgDgMgCIgagFQgRgFgPgJQgJgHgGgKQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAIAAAKADQAIADADABQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgLgLgUAAQgWAAgKAHQgLAIAAARQAAARAOAIQALAHAdAFQAbAFAMAHQAWANACAbQABAOgBAHQAAARgMAOQgRASgfABIgVABIgPgBg");
	this.shape_1.setTransform(7.5889,11);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_110_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_109_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_109_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_108_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_108_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_107_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_107_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_106_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_106_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_105_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_105_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_102_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_102_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_101_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAheIhTAAIAABeQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAjRQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADTQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_101_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_100_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_100_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_99_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgHgEgRQgDgMAAgLIABgCIACgBIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgsgJQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgagBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgMgHgJQgKgLgVAAQgWABgKAGQgLAHAAARQAAARAOAJQALAHAdAFQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape_1.setTransform(7.5917,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_99_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_98_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_98_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_97_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_97_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_96_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_96_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_95_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_95_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_94_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_94_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_91_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_91_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_90_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAheIhTAAIAABeQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAAjRQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADTQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_90_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_89_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_89_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_88_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgHgEgRQgDgMAAgLIABgCIACgBIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgsgJQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgagBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgMgHgJQgKgLgVAAQgWABgKAGQgLAHAAARQAAARAOAJQALAHAdAFQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape_1.setTransform(7.5917,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_88_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_87_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_87_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_86_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_86_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_85_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_85_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_84_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_84_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_83_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_83_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_80_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_80_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_79_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_79_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_78_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_78_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_77_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgHgEgRQgDgMAAgLIABgCIACgBIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgsgJQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgagBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgKgLgVAAQgWABgKAGQgLAHAAARQAAARAOAJQALAHAdAFQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape_1.setTransform(7.5917,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_77_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_76_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_76_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_75_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_75_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_74_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_74_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_73_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_73_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_72_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_72_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_69_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_69_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_68_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_68_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_67_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_67_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_66_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgHgEgRQgDgMAAgLIABgCIACgBIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgsgJQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAIgagBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgKgLgVAAQgWABgKAGQgLAHAAARQAAARAOAJQALAHAdAFQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape_1.setTransform(7.5917,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_66_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_65_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_65_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_64_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_64_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_63_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjPIh+AAIAAg0IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_63_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_62_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_62_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_61_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_61_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_58_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAjQQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIhpAAIAABCIBXAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABeQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_58_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_57_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_57_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_56_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIgjhtIgiBtQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgThsIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBsQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_56_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_55_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgIgEgQQgDgMAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAQAGAIQAIAKAKACQAUAFAagGQAQgHACgLQACgKgCgOQgBgPgUgGIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgPQARgMAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgNgHgIQgLgLgUAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAbAFAMAIQAWANACAaQABAOgBAHQAAARgMAOQgRASgfABIgVABIgPgBg");
	this.shape_1.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_55_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_54_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_54_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_53_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_53_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_52_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjPIh+AAIAAg0IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_52_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_51_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_51_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_50_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_50_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_47_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAjQQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIhpAAIAABCIBXAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABeQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_47_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_46_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_46_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_45_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIgjhtIgiBtQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgThsIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBsQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_45_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_44_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgIgEgQQgDgMAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAQAGAIQAIAKAKACQAUAFAagGQAQgHACgLQACgKgCgOQgBgPgUgGIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgPQARgMAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgNgHgIQgLgLgUAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAbAFAMAIQAWANACAaQABAOgBAHQAAARgMAOQgRASgfABIgVABIgPgBg");
	this.shape_1.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_44_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_43_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_42_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_41_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_40_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_39_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_36_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_35_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_34_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_33_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgIgEgQQgDgMAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAOAJAHAMQAHAMABASQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgKgLgVAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape_1.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_32_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_31_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_30_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjOIh+AAIAAg1IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_29_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_28_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h0IAACzIg8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_25_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAjRQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAXQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIhpAAIAABBIBXAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABfQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_24_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAhdIhTAAIAABdQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_23_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIgjhuIgiBuQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIgThtIgFhlQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBlIgSBtQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_22_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgUgCgTgPQgJgIgEgQQgDgMAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAIQACAIACADQAIALAKABQAVAEAZgEQAQgHACgMQACgKgCgOQgBgOgUgHIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgOQARgNAWAAIAaAAQAOAAAPAHQAOAJAHAMQAHAMABASQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgMgHgJQgKgLgVAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAcAGALAHQAWANACAaQABAPgBAGQAAARgMAOQgQASggABIgVABIgPgBg");
	this.shape_1.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_21_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_20_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_19_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjPIh+AAIAAg0IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_18_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_17_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_14_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAjQQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIhpAAIAABCIBXAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABeQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_13_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAheIhTAAIAABeQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_12_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIgjhtIgiBtQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgThtIgFhkQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBkIgSBtQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_11_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgVgCgSgQQgJgHgEgRQgDgLAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAHQACAJACADQAIAKAKACQAWAEAYgFQAQgHACgLQACgKgCgOQgBgPgUgGIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgPQARgMAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgNgHgIQgLgLgUAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAbAFAMAIQAWANACAaQABAOgBAHQAAAQgMAPQgRASgfABIgVABIgPgBg");
	this.shape_1.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.Path_10_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_9_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AgeCbIAAj/IhRAAIAAg2IDfAAIAAA1IhSAAIAAEAg");
	this.shape_1.setTransform(11.15,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_1, rect = new cjs.Rectangle(0,0,22.3,31), [rect]);


(lib.Path_8_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAgyICEjPIh+AAIAAg0IDFAAIAAAvIiEDQICEABIAAA1g");
	this.shape_1.setTransform(10.175,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_7_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhlCbIAAk1IDLAAIAAA1IiPAAIAABKIB6AAIAAA1Ih5AAIAABLICOAAIAAA2g");
	this.shape_1.setTransform(10.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, rect = new cjs.Rectangle(0,0,20.4,31), [rect]);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("ABPCbIAAiyIg6BzIgpAAIg8h1IAAC0Ig8AAIAAk1IA8AAIBQCmIBRimIA8AAIAAE1g");
	this.shape_1.setTransform(14.1,15.525);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, rect = new cjs.Rectangle(0,0,28.2,31.1), [rect]);


(lib.Path_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AhDBsQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAjQQAAgEAEAAICFAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAAAWQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIhpAAIAABCIBXAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAWQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIhXAAIAABeQAAABAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, rect = new cjs.Rectangle(0,0,14,21.6), [rect]);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAsBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIAAheIhTAAIAABeQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAIgcAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBIAAjQQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAABaIBTAAIAAhYQAAgEAEAAIAaAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABIAADSQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(7.45,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, rect = new cjs.Rectangle(0,0,14.9,21.6), [rect]);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AAlBsQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAgBIgjhtIgiBtQAAABAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgdAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAgBIgThtIgFhkQABgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAaAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIADBmIAJA9IAehfIAjAAIAfBfIAJg9IAChmQAAgBAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAbAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgEBkIgSBtQAAABgBABQAAAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(9.15,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, rect = new cjs.Rectangle(0,0,18.3,21.6), [rect]);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0841A").s().p("AgUBtQgVgCgSgQQgJgHgEgRQgDgLAAgLQAAgBAAAAQAAgBAAAAQABAAAAAAQABgBABAAIAZAAQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQAAAFACAHQACAJACADQAIAKAKACQAWAEAYgFQAQgHACgLQACgKgCgOQgBgPgUgGIgSgEIgagFQgPgEgRgKQgJgGgGgLQgFgKAAgIIAAgTQAAgWAVgPQARgMAWAAIAaAAQAOAAAPAHQAcARABAiQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgaAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgNgHgIQgLgLgUAAQgWAAgKAHQgLAHAAARQAAARAOAJQALAGAdAGQAbAFAMAIQAWANACAaQABAOgBAHQAAAQgMAPQgRASgfABIgVABIgPgBg");
	this.shape_1.setTransform(7.5889,11.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, rect = new cjs.Rectangle(0,0,15.2,22), [rect]);


(lib.CompoundPath_11_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_11_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_10_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_10_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_9_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_9_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_8_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_8_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_7_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQghAhg1ABQg0gBggghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_7_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_6_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhgQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABgQAAAzgcAfQghAhg1ABQg0gBggghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_6_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_5_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhfQAAguAjgeQAigcAsAAQAtAAAiAcQAjAeAAAuIAABfQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhRQgLAQgBAgIAABDQABAnAQAQQAOAPAXAAQAXAAAPgPQARgQgBgnIAAhDQAAgggKgQQgOgVgeAAQgdAAgNAVg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_4_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhfQAAguAjgeQAigcAsAAQAtAAAiAcQAjAeAAAuIAABfQAAAzgcAfQggAhg2ABQg1gBgfghgAgqhRQgLAQgBAgIAABDQABAnAQAQQAOAPAXAAQAXAAAPgPQARgQgBgnIAAhDQAAgggKgQQgOgVgeAAQgdAAgNAVg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgeAAg1IAAhfQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABfQAAA0gcAfQghAhg1ABQg0gBggghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgeAAg1IAAhfQAAgtAjgeQAigbAsgBQAtABAiAbQAjAeAAAtIAABfQAAA0gcAfQghAhg1ABQg0gBggghgAgqhSQgLARgBAgIAABDQABAmAQAQQAOAPAXABQAYgBAOgPQARgQgBgmIAAhDQAAgggKgRQgOgUgegBQgdABgNAUg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhfQAAguAjgeQAigcAsAAQAtAAAiAcQAjAeAAAuIAABfQAAAzgcAfQggAhg2ABQg1gBgfghgAAmBZQARgQgBgnIAAhDQAAgggKgRQgOgUgegBQgdABgNAUQgLARgBAgIAABDQABAnAQAQQAPAPAWAAQAXAAAPgPg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_1, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.CompoundPath_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhUB8QgdgfAAgzIAAhfQAAguAjgeQAigcAsAAQAtAAAiAcQAjAeAAAuIAABfQAAAzgcAfQggAhg2ABQg1gBgfghgAAmBZQARgQgBgnIAAhDQAAgggKgRQgOgUgegBQgdABgNAUQgLARgBAgIAABDQABAnAQAQQAPAPAWAAQAXAAAPgPg");
	this.shape_1.setTransform(11.4,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_12, rect = new cjs.Rectangle(0,0,22.8,31.5), [rect]);


(lib.BGTTZ1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAEAkIAAg3IgHAGIgJAFIAAgJQAHgEAFgEQAFgFACgFIAGAAIAABHg");
	this.shape.setTransform(196.025,589.6);

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
	this.shape_5.graphics.f("#000000").s().p("AgXAkIABgGQACgFAEgEQAEgGAIgFQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgEgGAAQgFAAgEAEQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAGAAAIQAAAEgBAFIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape_5.setTransform(171.275,589.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAEAkIAAg3IgHAGIgJAFIAAgJQAHgEAFgEQAFgFACgFIAGAAIAABHg");
	this.shape_6.setTransform(165.475,589.6);

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

	this.instance = new lib.Path_4();
	this.instance.setTransform(824.75,576.6,1,1,0,0,0,7.6,11);
	this.instance.alpha = 0.1484;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(799,576.6,1,1,0,0,0,9.2,10.8);
	this.instance_1.alpha = 0.1484;

	this.instance_2 = new lib.Rectangle_36();
	this.instance_2.setTransform(813.15,577.35,1,1,0,0,0,3.4,1.1);
	this.instance_2.alpha = 0.1484;

	this.instance_3 = new lib.Rectangle_1_1();
	this.instance_3.setTransform(786.1,577.35,1,1,0,0,0,1.1,3.6);
	this.instance_3.alpha = 0.1484;

	this.instance_4 = new lib.Path_2_1();
	this.instance_4.setTransform(774.25,576.6,1,1,0,0,0,7.5,10.8);
	this.instance_4.alpha = 0.1484;

	this.instance_5 = new lib.Path_3_1();
	this.instance_5.setTransform(756.9,576.6,1,1,0,0,0,7,10.8);
	this.instance_5.alpha = 0.1484;

	this.instance_6 = new lib.CompoundPath_12();
	this.instance_6.setTransform(820.95,530.4,1,1,0,0,0,11.4,15.8);
	this.instance_6.alpha = 0.1484;

	this.instance_7 = new lib.Path_6_1();
	this.instance_7.setTransform(789.2,530.35,1,1,0,0,0,14.1,15.5);
	this.instance_7.alpha = 0.1484;

	this.instance_8 = new lib.Path_7_1();
	this.instance_8.setTransform(758.95,530.35,1,1,0,0,0,10.2,15.5);
	this.instance_8.alpha = 0.1484;

	this.instance_9 = new lib.Rectangle_2_1();
	this.instance_9.setTransform(735.85,533.45,1,1,0,0,0,6.8,2.7);
	this.instance_9.alpha = 0.1484;

	this.instance_10 = new lib.Path_8_1();
	this.instance_10.setTransform(714.65,530.35,1,1,0,0,0,10.2,15.5);
	this.instance_10.alpha = 0.1484;

	this.instance_11 = new lib.Path_9_1();
	this.instance_11.setTransform(690.25,530.35,1,1,0,0,0,11.2,15.5);
	this.instance_11.alpha = 0.1484;

	this.instance_12 = new lib.Path_10_1();
	this.instance_12.setTransform(665.35,530.35,1,1,0,0,0,11.2,15.5);
	this.instance_12.alpha = 0.1484;

	this.instance_13 = new lib.Path_11_1();
	this.instance_13.setTransform(399.75,576.6,1,1,0,0,0,7.6,11);
	this.instance_13.alpha = 0.1484;

	this.instance_14 = new lib.Path_12_1();
	this.instance_14.setTransform(374,576.6,1,1,0,0,0,9.2,10.8);
	this.instance_14.alpha = 0.1484;

	this.instance_15 = new lib.Rectangle_3_1();
	this.instance_15.setTransform(388.15,577.35,1,1,0,0,0,3.4,1.1);
	this.instance_15.alpha = 0.1484;

	this.instance_16 = new lib.Rectangle_4_1();
	this.instance_16.setTransform(361.1,577.35,1,1,0,0,0,1.1,3.6);
	this.instance_16.alpha = 0.1484;

	this.instance_17 = new lib.Path_13_1();
	this.instance_17.setTransform(349.25,576.6,1,1,0,0,0,7.5,10.8);
	this.instance_17.alpha = 0.1484;

	this.instance_18 = new lib.Path_14_1();
	this.instance_18.setTransform(331.9,576.6,1,1,0,0,0,7,10.8);
	this.instance_18.alpha = 0.1484;

	this.instance_19 = new lib.CompoundPath_1_1();
	this.instance_19.setTransform(395.95,530.4,1,1,0,0,0,11.4,15.8);
	this.instance_19.alpha = 0.1484;

	this.instance_20 = new lib.Path_17_1();
	this.instance_20.setTransform(364.2,530.35,1,1,0,0,0,14.1,15.5);
	this.instance_20.alpha = 0.1484;

	this.instance_21 = new lib.Path_18_1();
	this.instance_21.setTransform(333.95,530.35,1,1,0,0,0,10.2,15.5);
	this.instance_21.alpha = 0.1484;

	this.instance_22 = new lib.Rectangle_5_1();
	this.instance_22.setTransform(310.85,533.45,1,1,0,0,0,6.8,2.7);
	this.instance_22.alpha = 0.1484;

	this.instance_23 = new lib.Path_19_1();
	this.instance_23.setTransform(289.65,530.35,1,1,0,0,0,10.2,15.5);
	this.instance_23.alpha = 0.1484;

	this.instance_24 = new lib.Path_20_1();
	this.instance_24.setTransform(265.25,530.35,1,1,0,0,0,11.2,15.5);
	this.instance_24.alpha = 0.1484;

	this.instance_25 = new lib.Path_21_1();
	this.instance_25.setTransform(240.35,530.35,1,1,0,0,0,11.2,15.5);
	this.instance_25.alpha = 0.1484;

	this.instance_26 = new lib.Path_22_1();
	this.instance_26.setTransform(612.25,476.15,1,1,0,0,0,7.6,11);
	this.instance_26.alpha = 0.1484;

	this.instance_27 = new lib.Path_23_1();
	this.instance_27.setTransform(586.5,476.15,1,1,0,0,0,9.2,10.8);
	this.instance_27.alpha = 0.1484;

	this.instance_28 = new lib.Rectangle_6_1();
	this.instance_28.setTransform(600.65,476.9,1,1,0,0,0,3.4,1.1);
	this.instance_28.alpha = 0.1484;

	this.instance_29 = new lib.Rectangle_7_1();
	this.instance_29.setTransform(573.6,476.95,1,1,0,0,0,1.1,3.6);
	this.instance_29.alpha = 0.1484;

	this.instance_30 = new lib.Path_24_1();
	this.instance_30.setTransform(561.75,476.15,1,1,0,0,0,7.5,10.8);
	this.instance_30.alpha = 0.1484;

	this.instance_31 = new lib.Path_25_1();
	this.instance_31.setTransform(544.4,476.15,1,1,0,0,0,7,10.8);
	this.instance_31.alpha = 0.1484;

	this.instance_32 = new lib.CompoundPath_2_1();
	this.instance_32.setTransform(608.45,430,1,1,0,0,0,11.4,15.8);
	this.instance_32.alpha = 0.1484;

	this.instance_33 = new lib.Path_28_1();
	this.instance_33.setTransform(576.7,429.9,1,1,0,0,0,14.1,15.5);
	this.instance_33.alpha = 0.1484;

	this.instance_34 = new lib.Path_29_1();
	this.instance_34.setTransform(546.45,429.9,1,1,0,0,0,10.2,15.5);
	this.instance_34.alpha = 0.1484;

	this.instance_35 = new lib.Rectangle_8_1();
	this.instance_35.setTransform(523.35,432.95,1,1,0,0,0,6.8,2.6);
	this.instance_35.alpha = 0.1484;

	this.instance_36 = new lib.Path_30_1();
	this.instance_36.setTransform(502.15,429.95,1,1,0,0,0,10.2,15.5);
	this.instance_36.alpha = 0.1484;

	this.instance_37 = new lib.Path_31_1();
	this.instance_37.setTransform(477.75,429.95,1,1,0,0,0,11.2,15.5);
	this.instance_37.alpha = 0.1484;

	this.instance_38 = new lib.Path_32_1();
	this.instance_38.setTransform(452.85,429.95,1,1,0,0,0,11.2,15.5);
	this.instance_38.alpha = 0.1484;

	this.instance_39 = new lib.Path_33_1();
	this.instance_39.setTransform(187.25,476.15,1,1,0,0,0,7.6,11);
	this.instance_39.alpha = 0.1484;

	this.instance_40 = new lib.Path_34_1();
	this.instance_40.setTransform(161.5,476.15,1,1,0,0,0,9.2,10.8);
	this.instance_40.alpha = 0.1484;

	this.instance_41 = new lib.Rectangle_9_1();
	this.instance_41.setTransform(175.65,476.9,1,1,0,0,0,3.4,1.1);
	this.instance_41.alpha = 0.1484;

	this.instance_42 = new lib.Rectangle_10_1();
	this.instance_42.setTransform(148.6,476.95,1,1,0,0,0,1.1,3.6);
	this.instance_42.alpha = 0.1484;

	this.instance_43 = new lib.Path_35_1();
	this.instance_43.setTransform(136.75,476.15,1,1,0,0,0,7.5,10.8);
	this.instance_43.alpha = 0.1484;

	this.instance_44 = new lib.Path_36_1();
	this.instance_44.setTransform(119.4,476.15,1,1,0,0,0,7,10.8);
	this.instance_44.alpha = 0.1484;

	this.instance_45 = new lib.CompoundPath_3_1();
	this.instance_45.setTransform(183.45,430,1,1,0,0,0,11.4,15.8);
	this.instance_45.alpha = 0.1484;

	this.instance_46 = new lib.Path_39_1();
	this.instance_46.setTransform(151.7,429.9,1,1,0,0,0,14.1,15.5);
	this.instance_46.alpha = 0.1484;

	this.instance_47 = new lib.Path_40_1();
	this.instance_47.setTransform(121.45,429.9,1,1,0,0,0,10.2,15.5);
	this.instance_47.alpha = 0.1484;

	this.instance_48 = new lib.Rectangle_11_1();
	this.instance_48.setTransform(98.35,432.95,1,1,0,0,0,6.8,2.6);
	this.instance_48.alpha = 0.1484;

	this.instance_49 = new lib.Path_41_1();
	this.instance_49.setTransform(77.15,429.95,1,1,0,0,0,10.2,15.5);
	this.instance_49.alpha = 0.1484;

	this.instance_50 = new lib.Path_42_1();
	this.instance_50.setTransform(52.75,429.95,1,1,0,0,0,11.2,15.5);
	this.instance_50.alpha = 0.1484;

	this.instance_51 = new lib.Path_43_1();
	this.instance_51.setTransform(27.85,429.95,1,1,0,0,0,11.2,15.5);
	this.instance_51.alpha = 0.1484;

	this.instance_52 = new lib.Path_44_1();
	this.instance_52.setTransform(824.75,376.15,1,1,0,0,0,7.6,11);
	this.instance_52.alpha = 0.1484;

	this.instance_53 = new lib.Path_45_1();
	this.instance_53.setTransform(799,376.15,1,1,0,0,0,9.2,10.8);
	this.instance_53.alpha = 0.1484;

	this.instance_54 = new lib.Rectangle_12_1();
	this.instance_54.setTransform(813.15,376.9,1,1,0,0,0,3.4,1.1);
	this.instance_54.alpha = 0.1484;

	this.instance_55 = new lib.Rectangle_13_1();
	this.instance_55.setTransform(786.1,376.9,1,1,0,0,0,1.1,3.6);
	this.instance_55.alpha = 0.1484;

	this.instance_56 = new lib.Path_46_1();
	this.instance_56.setTransform(774.25,376.15,1,1,0,0,0,7.5,10.8);
	this.instance_56.alpha = 0.1484;

	this.instance_57 = new lib.Path_47_1();
	this.instance_57.setTransform(756.9,376.15,1,1,0,0,0,7,10.8);
	this.instance_57.alpha = 0.1484;

	this.instance_58 = new lib.CompoundPath_4_1();
	this.instance_58.setTransform(820.95,329.95,1,1,0,0,0,11.4,15.8);
	this.instance_58.alpha = 0.1484;

	this.instance_59 = new lib.Path_50_1();
	this.instance_59.setTransform(789.2,329.9,1,1,0,0,0,14.1,15.5);
	this.instance_59.alpha = 0.1484;

	this.instance_60 = new lib.Path_51_1();
	this.instance_60.setTransform(758.95,329.9,1,1,0,0,0,10.2,15.5);
	this.instance_60.alpha = 0.1484;

	this.instance_61 = new lib.Rectangle_14_1();
	this.instance_61.setTransform(735.85,333,1,1,0,0,0,6.8,2.7);
	this.instance_61.alpha = 0.1484;

	this.instance_62 = new lib.Path_52_1();
	this.instance_62.setTransform(714.65,329.9,1,1,0,0,0,10.2,15.5);
	this.instance_62.alpha = 0.1484;

	this.instance_63 = new lib.Path_53_1();
	this.instance_63.setTransform(690.25,329.9,1,1,0,0,0,11.2,15.5);
	this.instance_63.alpha = 0.1484;

	this.instance_64 = new lib.Path_54_1();
	this.instance_64.setTransform(665.35,329.9,1,1,0,0,0,11.2,15.5);
	this.instance_64.alpha = 0.1484;

	this.instance_65 = new lib.Path_55_1();
	this.instance_65.setTransform(399.75,376.15,1,1,0,0,0,7.6,11);
	this.instance_65.alpha = 0.1484;

	this.instance_66 = new lib.Path_56_1();
	this.instance_66.setTransform(374,376.15,1,1,0,0,0,9.2,10.8);
	this.instance_66.alpha = 0.1484;

	this.instance_67 = new lib.Rectangle_15_1();
	this.instance_67.setTransform(388.15,376.9,1,1,0,0,0,3.4,1.1);
	this.instance_67.alpha = 0.1484;

	this.instance_68 = new lib.Rectangle_16_1();
	this.instance_68.setTransform(361.1,376.9,1,1,0,0,0,1.1,3.6);
	this.instance_68.alpha = 0.1484;

	this.instance_69 = new lib.Path_57_1();
	this.instance_69.setTransform(349.25,376.15,1,1,0,0,0,7.5,10.8);
	this.instance_69.alpha = 0.1484;

	this.instance_70 = new lib.Path_58_1();
	this.instance_70.setTransform(331.9,376.15,1,1,0,0,0,7,10.8);
	this.instance_70.alpha = 0.1484;

	this.instance_71 = new lib.CompoundPath_5_1();
	this.instance_71.setTransform(395.95,329.95,1,1,0,0,0,11.4,15.8);
	this.instance_71.alpha = 0.1484;

	this.instance_72 = new lib.Path_61_1();
	this.instance_72.setTransform(364.2,329.9,1,1,0,0,0,14.1,15.5);
	this.instance_72.alpha = 0.1484;

	this.instance_73 = new lib.Path_62_1();
	this.instance_73.setTransform(333.95,329.9,1,1,0,0,0,10.2,15.5);
	this.instance_73.alpha = 0.1484;

	this.instance_74 = new lib.Rectangle_17_1();
	this.instance_74.setTransform(310.85,333,1,1,0,0,0,6.8,2.7);
	this.instance_74.alpha = 0.1484;

	this.instance_75 = new lib.Path_63_1();
	this.instance_75.setTransform(289.65,329.9,1,1,0,0,0,10.2,15.5);
	this.instance_75.alpha = 0.1484;

	this.instance_76 = new lib.Path_64_1();
	this.instance_76.setTransform(265.25,329.9,1,1,0,0,0,11.2,15.5);
	this.instance_76.alpha = 0.1484;

	this.instance_77 = new lib.Path_65_1();
	this.instance_77.setTransform(240.35,329.9,1,1,0,0,0,11.2,15.5);
	this.instance_77.alpha = 0.1484;

	this.instance_78 = new lib.Path_66_1();
	this.instance_78.setTransform(612.25,275.7,1,1,0,0,0,7.6,11);
	this.instance_78.alpha = 0.1484;

	this.instance_79 = new lib.Path_67_1();
	this.instance_79.setTransform(586.5,275.7,1,1,0,0,0,9.2,10.8);
	this.instance_79.alpha = 0.1484;

	this.instance_80 = new lib.Rectangle_18_1();
	this.instance_80.setTransform(600.65,276.45,1,1,0,0,0,3.4,1.1);
	this.instance_80.alpha = 0.1484;

	this.instance_81 = new lib.Rectangle_19_1();
	this.instance_81.setTransform(573.6,276.5,1,1,0,0,0,1.1,3.6);
	this.instance_81.alpha = 0.1484;

	this.instance_82 = new lib.Path_68_1();
	this.instance_82.setTransform(561.75,275.7,1,1,0,0,0,7.5,10.8);
	this.instance_82.alpha = 0.1484;

	this.instance_83 = new lib.Path_69_1();
	this.instance_83.setTransform(544.4,275.7,1,1,0,0,0,7,10.8);
	this.instance_83.alpha = 0.1484;

	this.instance_84 = new lib.CompoundPath_6_1();
	this.instance_84.setTransform(608.45,229.55,1,1,0,0,0,11.4,15.8);
	this.instance_84.alpha = 0.1484;

	this.instance_85 = new lib.Path_72_1();
	this.instance_85.setTransform(576.7,229.45,1,1,0,0,0,14.1,15.5);
	this.instance_85.alpha = 0.1484;

	this.instance_86 = new lib.Path_73_1();
	this.instance_86.setTransform(546.45,229.45,1,1,0,0,0,10.2,15.5);
	this.instance_86.alpha = 0.1484;

	this.instance_87 = new lib.Rectangle_20_1();
	this.instance_87.setTransform(523.35,232.5,1,1,0,0,0,6.8,2.6);
	this.instance_87.alpha = 0.1484;

	this.instance_88 = new lib.Path_74_1();
	this.instance_88.setTransform(502.15,229.5,1,1,0,0,0,10.2,15.5);
	this.instance_88.alpha = 0.1484;

	this.instance_89 = new lib.Path_75_1();
	this.instance_89.setTransform(477.75,229.5,1,1,0,0,0,11.2,15.5);
	this.instance_89.alpha = 0.1484;

	this.instance_90 = new lib.Path_76_1();
	this.instance_90.setTransform(452.85,229.5,1,1,0,0,0,11.2,15.5);
	this.instance_90.alpha = 0.1484;

	this.instance_91 = new lib.Path_77_1();
	this.instance_91.setTransform(187.25,275.7,1,1,0,0,0,7.6,11);
	this.instance_91.alpha = 0.1484;

	this.instance_92 = new lib.Path_78_1();
	this.instance_92.setTransform(161.5,275.7,1,1,0,0,0,9.2,10.8);
	this.instance_92.alpha = 0.1484;

	this.instance_93 = new lib.Rectangle_21_1();
	this.instance_93.setTransform(175.65,276.45,1,1,0,0,0,3.4,1.1);
	this.instance_93.alpha = 0.1484;

	this.instance_94 = new lib.Rectangle_22_1();
	this.instance_94.setTransform(148.6,276.5,1,1,0,0,0,1.1,3.6);
	this.instance_94.alpha = 0.1484;

	this.instance_95 = new lib.Path_79_1();
	this.instance_95.setTransform(136.75,275.7,1,1,0,0,0,7.5,10.8);
	this.instance_95.alpha = 0.1484;

	this.instance_96 = new lib.Path_80_1();
	this.instance_96.setTransform(119.4,275.7,1,1,0,0,0,7,10.8);
	this.instance_96.alpha = 0.1484;

	this.instance_97 = new lib.CompoundPath_7_1();
	this.instance_97.setTransform(183.45,229.55,1,1,0,0,0,11.4,15.8);
	this.instance_97.alpha = 0.1484;

	this.instance_98 = new lib.Path_83_1();
	this.instance_98.setTransform(151.7,229.45,1,1,0,0,0,14.1,15.5);
	this.instance_98.alpha = 0.1484;

	this.instance_99 = new lib.Path_84_1();
	this.instance_99.setTransform(121.45,229.45,1,1,0,0,0,10.2,15.5);
	this.instance_99.alpha = 0.1484;

	this.instance_100 = new lib.Rectangle_23_1();
	this.instance_100.setTransform(98.35,232.5,1,1,0,0,0,6.8,2.6);
	this.instance_100.alpha = 0.1484;

	this.instance_101 = new lib.Path_85_1();
	this.instance_101.setTransform(77.15,229.5,1,1,0,0,0,10.2,15.5);
	this.instance_101.alpha = 0.1484;

	this.instance_102 = new lib.Path_86_1();
	this.instance_102.setTransform(52.75,229.5,1,1,0,0,0,11.2,15.5);
	this.instance_102.alpha = 0.1484;

	this.instance_103 = new lib.Path_87_1();
	this.instance_103.setTransform(27.85,229.5,1,1,0,0,0,11.2,15.5);
	this.instance_103.alpha = 0.1484;

	this.instance_104 = new lib.Path_88_1();
	this.instance_104.setTransform(824.75,176.35,1,1,0,0,0,7.6,11);
	this.instance_104.alpha = 0.1484;

	this.instance_105 = new lib.Path_89_1();
	this.instance_105.setTransform(799,176.35,1,1,0,0,0,9.2,10.8);
	this.instance_105.alpha = 0.1484;

	this.instance_106 = new lib.Rectangle_24_1();
	this.instance_106.setTransform(813.15,177.1,1,1,0,0,0,3.4,1.1);
	this.instance_106.alpha = 0.1484;

	this.instance_107 = new lib.Rectangle_25_1();
	this.instance_107.setTransform(786.1,177.15,1,1,0,0,0,1.1,3.6);
	this.instance_107.alpha = 0.1484;

	this.instance_108 = new lib.Path_90_1();
	this.instance_108.setTransform(774.25,176.35,1,1,0,0,0,7.5,10.8);
	this.instance_108.alpha = 0.1484;

	this.instance_109 = new lib.Path_91_1();
	this.instance_109.setTransform(756.9,176.35,1,1,0,0,0,7,10.8);
	this.instance_109.alpha = 0.1484;

	this.instance_110 = new lib.CompoundPath_8_1();
	this.instance_110.setTransform(820.95,130.2,1,1,0,0,0,11.4,15.8);
	this.instance_110.alpha = 0.1484;

	this.instance_111 = new lib.Path_94_1();
	this.instance_111.setTransform(789.2,130.1,1,1,0,0,0,14.1,15.5);
	this.instance_111.alpha = 0.1484;

	this.instance_112 = new lib.Path_95_1();
	this.instance_112.setTransform(758.95,130.1,1,1,0,0,0,10.2,15.5);
	this.instance_112.alpha = 0.1484;

	this.instance_113 = new lib.Rectangle_26_1();
	this.instance_113.setTransform(735.85,133.15,1,1,0,0,0,6.8,2.6);
	this.instance_113.alpha = 0.1484;

	this.instance_114 = new lib.Path_96_1();
	this.instance_114.setTransform(714.65,130.15,1,1,0,0,0,10.2,15.5);
	this.instance_114.alpha = 0.1484;

	this.instance_115 = new lib.Path_97_1();
	this.instance_115.setTransform(690.25,130.15,1,1,0,0,0,11.2,15.5);
	this.instance_115.alpha = 0.1484;

	this.instance_116 = new lib.Path_98_1();
	this.instance_116.setTransform(665.35,130.15,1,1,0,0,0,11.2,15.5);
	this.instance_116.alpha = 0.1484;

	this.instance_117 = new lib.Path_99_1();
	this.instance_117.setTransform(399.75,176.35,1,1,0,0,0,7.6,11);
	this.instance_117.alpha = 0.1484;

	this.instance_118 = new lib.Path_100_1();
	this.instance_118.setTransform(374,176.35,1,1,0,0,0,9.2,10.8);
	this.instance_118.alpha = 0.1484;

	this.instance_119 = new lib.Rectangle_27_1();
	this.instance_119.setTransform(388.15,177.1,1,1,0,0,0,3.4,1.1);
	this.instance_119.alpha = 0.1484;

	this.instance_120 = new lib.Rectangle_28_1();
	this.instance_120.setTransform(361.1,177.15,1,1,0,0,0,1.1,3.6);
	this.instance_120.alpha = 0.1484;

	this.instance_121 = new lib.Path_101_1();
	this.instance_121.setTransform(349.25,176.35,1,1,0,0,0,7.5,10.8);
	this.instance_121.alpha = 0.1484;

	this.instance_122 = new lib.Path_102_1();
	this.instance_122.setTransform(331.9,176.35,1,1,0,0,0,7,10.8);
	this.instance_122.alpha = 0.1484;

	this.instance_123 = new lib.CompoundPath_9_1();
	this.instance_123.setTransform(395.95,130.2,1,1,0,0,0,11.4,15.8);
	this.instance_123.alpha = 0.1484;

	this.instance_124 = new lib.Path_105_1();
	this.instance_124.setTransform(364.2,130.1,1,1,0,0,0,14.1,15.5);
	this.instance_124.alpha = 0.1484;

	this.instance_125 = new lib.Path_106_1();
	this.instance_125.setTransform(333.95,130.1,1,1,0,0,0,10.2,15.5);
	this.instance_125.alpha = 0.1484;

	this.instance_126 = new lib.Rectangle_29_1();
	this.instance_126.setTransform(310.85,133.15,1,1,0,0,0,6.8,2.6);
	this.instance_126.alpha = 0.1484;

	this.instance_127 = new lib.Path_107_1();
	this.instance_127.setTransform(289.65,130.15,1,1,0,0,0,10.2,15.5);
	this.instance_127.alpha = 0.1484;

	this.instance_128 = new lib.Path_108_1();
	this.instance_128.setTransform(265.25,130.15,1,1,0,0,0,11.2,15.5);
	this.instance_128.alpha = 0.1484;

	this.instance_129 = new lib.Path_109_1();
	this.instance_129.setTransform(240.35,130.15,1,1,0,0,0,11.2,15.5);
	this.instance_129.alpha = 0.1484;

	this.instance_130 = new lib.Path_110_1();
	this.instance_130.setTransform(612.25,75.95,1,1,0,0,0,7.6,11);
	this.instance_130.alpha = 0.1484;

	this.instance_131 = new lib.Path_111_1();
	this.instance_131.setTransform(586.5,75.9,1,1,0,0,0,9.2,10.8);
	this.instance_131.alpha = 0.1484;

	this.instance_132 = new lib.Rectangle_30_1();
	this.instance_132.setTransform(600.65,76.7,1,1,0,0,0,3.4,1.1);
	this.instance_132.alpha = 0.1484;

	this.instance_133 = new lib.Rectangle_31_1();
	this.instance_133.setTransform(573.6,76.7,1,1,0,0,0,1.1,3.6);
	this.instance_133.alpha = 0.1484;

	this.instance_134 = new lib.Path_112_1();
	this.instance_134.setTransform(561.75,75.9,1,1,0,0,0,7.5,10.8);
	this.instance_134.alpha = 0.1484;

	this.instance_135 = new lib.Path_113_1();
	this.instance_135.setTransform(544.4,75.9,1,1,0,0,0,7,10.8);
	this.instance_135.alpha = 0.1484;

	this.instance_136 = new lib.CompoundPath_10_1();
	this.instance_136.setTransform(608.45,29.75,1,1,0,0,0,11.4,15.8);
	this.instance_136.alpha = 0.1484;

	this.instance_137 = new lib.Path_116_1();
	this.instance_137.setTransform(576.7,29.7,1,1,0,0,0,14.1,15.5);
	this.instance_137.alpha = 0.1484;

	this.instance_138 = new lib.Path_117_1();
	this.instance_138.setTransform(546.45,29.7,1,1,0,0,0,10.2,15.5);
	this.instance_138.alpha = 0.1484;

	this.instance_139 = new lib.Rectangle_32_1();
	this.instance_139.setTransform(523.35,32.7,1,1,0,0,0,6.8,2.6);
	this.instance_139.alpha = 0.1484;

	this.instance_140 = new lib.Path_118_1();
	this.instance_140.setTransform(502.15,29.7,1,1,0,0,0,10.2,15.5);
	this.instance_140.alpha = 0.1484;

	this.instance_141 = new lib.Path_119_1();
	this.instance_141.setTransform(477.75,29.7,1,1,0,0,0,11.2,15.5);
	this.instance_141.alpha = 0.1484;

	this.instance_142 = new lib.Path_120_1();
	this.instance_142.setTransform(452.85,29.7,1,1,0,0,0,11.2,15.5);
	this.instance_142.alpha = 0.1484;

	this.instance_143 = new lib.Path_121_1();
	this.instance_143.setTransform(187.25,75.95,1,1,0,0,0,7.6,11);
	this.instance_143.alpha = 0.1484;

	this.instance_144 = new lib.Path_122_1();
	this.instance_144.setTransform(161.5,75.9,1,1,0,0,0,9.2,10.8);
	this.instance_144.alpha = 0.1484;

	this.instance_145 = new lib.Rectangle_33_1();
	this.instance_145.setTransform(175.65,76.7,1,1,0,0,0,3.4,1.1);
	this.instance_145.alpha = 0.1484;

	this.instance_146 = new lib.Rectangle_34_1();
	this.instance_146.setTransform(148.6,76.7,1,1,0,0,0,1.1,3.6);
	this.instance_146.alpha = 0.1484;

	this.instance_147 = new lib.Path_123_1();
	this.instance_147.setTransform(136.75,75.9,1,1,0,0,0,7.5,10.8);
	this.instance_147.alpha = 0.1484;

	this.instance_148 = new lib.Path_124_1();
	this.instance_148.setTransform(119.4,75.9,1,1,0,0,0,7,10.8);
	this.instance_148.alpha = 0.1484;

	this.instance_149 = new lib.CompoundPath_11_1();
	this.instance_149.setTransform(183.45,29.75,1,1,0,0,0,11.4,15.8);
	this.instance_149.alpha = 0.1484;

	this.instance_150 = new lib.Path_127_1();
	this.instance_150.setTransform(151.7,29.7,1,1,0,0,0,14.1,15.5);
	this.instance_150.alpha = 0.1484;

	this.instance_151 = new lib.Path_128_1();
	this.instance_151.setTransform(121.45,29.7,1,1,0,0,0,10.2,15.5);
	this.instance_151.alpha = 0.1484;

	this.instance_152 = new lib.Rectangle_35_1();
	this.instance_152.setTransform(98.35,32.7,1,1,0,0,0,6.8,2.6);
	this.instance_152.alpha = 0.1484;

	this.instance_153 = new lib.Path_129_1();
	this.instance_153.setTransform(77.15,29.7,1,1,0,0,0,10.2,15.5);
	this.instance_153.alpha = 0.1484;

	this.instance_154 = new lib.Path_130_1();
	this.instance_154.setTransform(52.75,29.7,1,1,0,0,0,11.2,15.5);
	this.instance_154.alpha = 0.1484;

	this.instance_155 = new lib.Path_131_1();
	this.instance_155.setTransform(27.85,29.7,1,1,0,0,0,11.2,15.5);
	this.instance_155.alpha = 0.1484;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FBF7CC").s().p("EhCZAu4MAAAhdvMCEzAAAMAAABdvg");
	this.shape_37.setTransform(425,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BGTTZ1, rect = new cjs.Rectangle(0,0,850,600), [rect]);


(lib.BGTTZ = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AADAjIAAg/IgMAIIAAgIIAJgHIAKAAIAABGg");
	this.shape.setTransform(193.5,589.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAkIAAgGIAZgiIAEgHIABgFIAAgBQAAgFgDgDQgDgDgGAAQgFAAgDADQgEADAAAGIgHAAQAAgGADgEQADgEAEgDQAFgCAEAAQAGAAAEACQAFACADAFQACAEAAAGQAAADgCAEIgGAJIgWAdIAeAAIAAAHg");
	this.shape_1.setTransform(189.5,589.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAfQgFgFAAgKIAAgfQAAgKAFgFQAFgFAJAAQAKAAAFAFQAFAFAAAKIAAAfQAAAKgFAFQgFAFgKAAQgJAAgFgFgAgJgZQgDADAAAHIAAAfQAAAHADADQADAEAGAAQAHAAADgEQADgDAAgHIAAgfQAAgHgDgDQgDgEgHAAQgGAAgDAEg");
	this.shape_2.setTransform(184.175,589.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAkIAAgGIAZgiIAEgHIABgFIAAgBQAAgFgDgDQgDgDgGAAQgFAAgDADQgEADgBAGIgHAAQACgGACgEQADgEAEgDQAEgCAFAAQAGAAAFACQAEACADAFQACAEAAAGQAAADgCAEIgGAJIgWAdIAeAAIAAAHg");
	this.shape_3.setTransform(178.85,589.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAuIAihbIAHAAIgiBbg");
	this.shape_4.setTransform(174.525,589.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAkIAAgGIAagiIAEgHIACgFIAAgBQAAgFgEgDQgDgDgGAAQgFAAgDADQgDADgBAGIgIAAQACgGACgEQACgEAFgDQAEgCAFAAQAGAAAEACQAFACACAFQADAEAAAGQAAADgCAEIgFAJIgXAdIAfAAIAAAHg");
	this.shape_5.setTransform(169.9,589.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AADAjIAAg/IgMAIIAAgIIAJgHIAKAAIAABGg");
	this.shape_6.setTransform(165.4,589.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAZIgHgCIgHgEIAFgEIAJADIAHACQAHAAAEgDQAEgCAAgFQAAgDgCgBIgFgCIgIgBIAAAAIgBAAIgBAAIgIgCQgDgBgDgCQgCgDAAgFQAAgEADgEQABgEAGgBQAEgCAFAAIAHABIAGACIAGACIgEAGIgIgEIgHgBQgGAAgDACQgEADAAAEQAAADADACIAEACIAHABIAAAAIABAAIAAAAIAJABQAEABADACQADADgBAFQABAGgDADQgDADgEACQgFACgHAAIgHgBg");
	this.shape_7.setTransform(158.6,590.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAYQgFgDgCgFQgDgGAAgGIAAgFQAAgIADgFQACgGAFgCQAFgDAFAAQAHAAAEADQAFACACAGQADAFAAAHIAAAFIgiAAIAAgFIAAAAIAbAAIAAAAQAAgIgEgEQgDgEgHgBQgGABgEAEQgDAEAAAIIgCAAIAAAFIACAAIAAABQAAAHAEAFQAEADAGAAIAHgBQAEgBACgDIAFAEQgEAFgEABQgFACgFAAQgGAAgFgCgAgNADIgCAAIAAgFIACAAIAAAAIAAAFgAgNgCQAAgIADgEQAEgEAGgBQAHABADAEQAEAEAAAIIAAAAgAgNgCg");
	this.shape_8.setTransform(153.425,590.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOAjIgPgaIAEgFIgCgDIgDAHIABABIgNAPIAAgIIgCACIgCAKIAEgEIAAALIgHAAIAAhGIAHAAIAAAzIAZgeIAJAAIgRASIATAfgAgQASIACgCIAAAIIgEAEgAgBAJgAgBAJIgBgBIADgHIACADIgEAFg");
	this.shape_9.setTransform(148.475,589.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAkIAAhGIAHAAIAAAHIgBABIABAKIAAgLQACgEAEgBQAEgDAFAAQAFAAAEADQAEACACAEQACAFAAAHIAAALQAAAFgCAFQgCAEgEADQgEACgGAAQgFAAgEgCQgDgCgCgDIAAgLIgBAJIABACIgBgCIABgJIAAALIAAAbgAgMgCIACAGQABACADACQADACADAAQAGAAADgEQAEgDAAgGIAAgLQAAgHgEgEQgDgEgGAAQgDAAgDACQgDACgBADIgCAGIAAAAIAAAOIAAAAgAgGAIQgDgCgBgCIgCgGIAAAAIAAgOIAAAAIACgGQABgDADgCQADgCADAAQAGAAADAEQAEAEAAAHIAAALQAAAGgEADQgDAEgGAAQgDAAgDgCgAgMgQIAAAAgAgMgQgAgNgaIABgBIAAALg");
	this.shape_10.setTransform(142.8,591.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcAaIAAgeQAAgHgDgDQgDgEgGAAQgGAAgDADQgEAEAAAHQAAgGgBgEQACgFADgCQAEgEAHAAQAFAAAEADQAEACACAFQACAEAAAHIAAAegAgDAaIAAgeQAAgHgDgDQgDgEgGAAQgGAAgDADQgDAEAAAFIAAgLIgBACIABAKIAAAfIgHAAIAAgyIAHAAIAAAHQACgEADgBQAEgDAGAAQAFAAAEADQADACABAFIABABIgCACIADAIIAAAegAAAgMIACgCQABAEAAAGIAAAAgAADgEIAAAAgAgcgPIABgCIAAALIAAABgAgbgGgAACgOIAAAAg");
	this.shape_11.setTransform(135.775,590.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAYQgFgDgCgFQgDgGAAgGIAAgFQAAgIADgFQACgGAFgCQAFgDAFAAQAHAAAEADQAFACACAGQADAFAAAHIAAAFIgiAAIAAgFIAAAAIgCAAIAAAFIACAAIAAABQAAAHAEAFQAEADAGAAIAHgBQAEgBACgDIAFAEQgEAFgEABQgFACgFAAQgGAAgFgCgAAOgCIAAAAQAAgIgEgEQgDgEgHgBQgGABgEAEQgDAEAAAIIAbAAgAgNADgAgPADIAAgFIACAAIAAAAIAAAFgAAOgCIgbAAQAAgIADgEQAEgEAGgBQAHABADAEQAEAEAAAIIAAAAgAgNgCg");
	this.shape_12.setTransform(128.825,590.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATAjIgWgkIAFgGIgFAGIgQATIgBABIgDgFIAEgFIAAAJIAAgJIgEAFIADAFIABgBIAAARIgHAAIAAhGIAHAAIAAAsIAigsIAJAAIgWAcIgBgCIgEAIIAAAAIAAAAIAEgIIABACIAZAqg");
	this.shape_13.setTransform(123.3,589.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAcAaIAAgeQAAgHgDgDQgDgEgGAAQgGAAgDADQgEAEAAAHQAAgGgCgEQADgFADgCQAEgEAHAAQAFAAAEADQAEACACAFQACAEAAAHIAAAegAgDAaIAAgeQAAgHgDgDQgDgEgGAAQgGAAgDADQgDAEAAAFIAAgLQACgEADgBQAEgDAGAAQAFAAAEADQADACABAFIAAABIgBACIADAIIAAAegAgiAaIAAgyIAHAAIAAAHIgBACIABAKIgBgKIABgCIAAALIAAABIAAAfgAAAgMIABgCQACAEAAAGIAAAAgAABgOIAAAAgAABgOIAAAAg");
	this.shape_14.setTransform(112.775,590.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCAjIAAgxIAGAAIAAAxgAgCgcIAAgHIAGAAIAAAHg");
	this.shape_15.setTransform(107.25,589.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AANAjIAAgeQAAgGgDgDQgEgFgGAAQgGABgDADQgDADAAAFIgBgJIABgBIAAAKIAAgKIgBABIABAJIAAABIAAAfIgHAAIAAhGIAHAAIAAAcQACgEAEgBQAEgDAFAAQAIAAAFAFQAEAGAAAJIAAAeg");
	this.shape_16.setTransform(103.175,589.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgKAYQgEgDgDgFQgCgEAAgIIAAgHQAAgIACgEQADgFAEgCQAGgDAGAAIAHABIAGADIAFAEIgFAFQgDgDgDgCQgDgBgEgBQgGAAgFAFQgDADAAAIIAAAHQAAAIADAEQAFADAGAAQAEAAADgBQAEgBACgDIAFAEIgFAFIgGACIgHABQgGAAgGgCg");
	this.shape_17.setTransform(98,590.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOAWQgFgEAAgIQAAgHAEgDQAFgDAIAAIAPAAIAAgCQAAgHgDgDQgDgDgHgBIgGABIgGAEIgFgEQADgDAFgCQAEgCAFAAQAGAAAFADQAEACADAEQACAEAAAGIAAAfIgHAAIAAgDIgDACIgFABIgGABQgJAAgEgEgAANAWIABgBIgBgGIAAgNIgPAAQgFAAgDADQgCABAAAEQAAAFADACQADACAGAAIAKgBQADgBAAgCIAAAHgAANACIABAAIAAgFIgBAAIABAAIAAAFIgBAAIAAgFIAAAFgAANAPIABAGIgBABgAgJARQgDgCAAgFQAAgEACgBQADgDAFAAIAPAAIAAANQAAACgDABIgKABQgGAAgDgCgAANACg");
	this.shape_18.setTransform(92.675,590.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKAYQgFgDgCgFQgDgFAAgHIAAgHQAAgHADgFQACgFAFgCQAEgDAGAAQAHAAAEADQAFACACAFQADAFAAAHIAAAIQAAAGgDAFQgCAFgFADQgEACgHAAQgGAAgEgCgAgJgOQgEAEAAAHIAAAIQAAAGAEAFQADADAGAAQAHAAADgDQAEgFAAgGIAAgIQAAgHgEgEQgDgFgHAAQgGAAgDAFg");
	this.shape_19.setTransform(87.375,590.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMAiQgEgCgDgEIAEgFIAHAFQADABAFAAQAGAAAEgEQADgFAAgIIAAgvIAHAAIAAAvQAAAHgCAGQgDAFgFADQgFADgGAAQgGAAgFgCg");
	this.shape_20.setTransform(81.75,589.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_21.setTransform(75.8,592.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLAiQgFgCgCgEIAFgEQACACADADQADABAEAAQAGAAAEgEQAEgEAAgHIAAgGQgCADgEACQgDACgGAAQgFAAgEgCQgEgDgCgEQgCgFAAgFIAAgLQAAgHACgFQACgEAEgCQADgDAGAAQAEAAAFADQAEABACAEIAAALIgBgGQgCgDgDgCQgDgCgEAAQgFAAgEAEQgDAEAAAHIAAALQAAAGADADQAEAEAFAAQAEAAADgCQADgCACgCIABgGIAAALIABgCIgBgJIABAJIgBACIAAgLIgBAGQgCACgDACQgDACgEAAQgFAAgEgEQgDgDAAgGIAAgLQAAgHADgEQAEgEAFAAQAEAAADACQADACACADIABAGIAAAAIAAAOIAAAAIAAAAIAAgOIAAAAIABgKIgBgBIAAgHIAHAAIAAAwQAAAHgDAFQgCAFgFACQgFADgGAAQgFAAgFgCgAANAJgAANgQIAAAAgAANgbIABABIgBAKg");
	this.shape_22.setTransform(71.9,591.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AANAaIAAgeQAAgHgDgDQgEgEgGAAQgGAAgDADQgDADAAAGIAAgLIgBACIABAJIAAABIAAAfIgHAAIAAgyIAHAAIAAAHQACgEAEgBQAEgDAFAAQAIAAAFAGQAEAFAAAKIAAAegAgMgGgAgNgPIABgCIAAALg");
	this.shape_23.setTransform(66.475,590.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDAjIAAhGIAGAAIAABGg");
	this.shape_24.setTransform(62.3,589.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPADIAAgFIAfAAIAAAFg");
	this.shape_25.setTransform(58.525,590.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_26.setTransform(55,592.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAaIAAgyIAHAAIAAAHQACgDAEgCQAEgDAFAAIAHABIAEADIgEAGIgFgCIgFgBQgFAAgDADQgEAEAAAGIgBgKIABgCIAAAMIAAgMIgBACIABAKIAAAAIAAAfg");
	this.shape_27.setTransform(52.1,590.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgRAjIAAgGIAAAGIAAAAIAAgGIAAAAIAQAAQAJAAAFgEQAFgGAAgJIAAgUQAAgIgFgGQgFgEgJAAIgQAAIAAgHIAQAAQAIAAAGAEQAGACADAGQADAFAAAJIAAATQAAAIgDAGQgDAGgGADQgGACgIAAgAgYAjIAAhGIAHAAIAAAAIAAAHIAAAAIAAgHIAAAHIAAAAIAQAAQAJAAAFAEQAFAGAAAIIAAAUQAAAJgFAGQgFAEgJAAIgQAAIAAg5IAAA5IAAAAIAAAGgAgRAdgAgRgcg");
	this.shape_28.setTransform(46.425,589.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgDAEIAAgHIAHAAIAAAHg");
	this.shape_29.setTransform(39.25,592.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGAjIAAgrIAGAAIAAArgAAAgIIAAgGIANAAIAAAGgAgGgIIAAgGIAGAAIAAAGgAAAgIgAgLgIIAAgGIAFAAIAAAGgAAAgOIgGAAIAAgHQAAgHADgDQACgDAGgBIAIAAIAAAHIgHAAQgBAAgBAAQAAAAgBAAQgBABAAAAQAAAAgBABQgBACAAADIAAAHgAgGgOg");
	this.shape_30.setTransform(36.6,589.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgKAYQgFgDgCgFQgDgFAAgHIAAgHQAAgHADgFQACgFAFgCQAEgDAGAAQAHAAAEADQAFACACAFQADAFAAAHIAAAIQAAAGgDAFQgCAFgFADQgEACgHAAQgGAAgEgCgAgJgOQgEAEAAAHIAAAIQAAAGAEAFQADADAGAAQAHAAADgDQAEgFAAgGIAAgIQAAgHgEgEQgDgFgHAAQgGAAgDAFg");
	this.shape_31.setTransform(32.225,590.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAaIAAgyIAHAAIAAAHQACgDAEgCQAEgDAFAAIAGABIAFADIgFAGIgDgCIgGgBQgFAAgEADQgDAEAAAGIAAgMIgBACIABAKIAAAAIAAAfgAgKgPIABgCIAAAMg");
	this.shape_32.setTransform(27.75,590.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAjIAAhGIAFAAIAAAHIACAAIgCAAIAAgHIACAAIAAAHIAAAdIAAgdIAAgHIATAAQAGABAFACQAFADADAFQACAFAAAHQAAAFgCAGQgDAEgFADQgFACgGAAIgTAAIAAgHIgCAAIAAAHIACAAIAAAbgAADABQAFAAADgBQADgCACgDQABgDAAgEQAAgGgBgCQgCgEgDgCQgDgCgFAAIgTAAIATAAQAFAAADACQADACACAEQABACAAAGQAAAEgBADQgCADgDACQgDABgFAAIgTAAIATAAgAgQAIIgCAAIAAgHIACAAIAAAHg");
	this.shape_33.setTransform(22.325,589.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgKAqQAIgIADgLQADgLABgMQAAgMgFgKQgCgMgIgIIAFgEQAHAKAFALQAEAMAAANQAAAOgEALQgFANgHAJg");
	this.shape_34.setTransform(14.3,590.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgJAYQgGgDgBgFQgDgEAAgIIAAgHQAAgIADgEQABgFAGgCQAFgDAGAAIAIABIAFADIAFAEIgFAFQgDgDgDgCQgDgBgEgBQgGAAgEAFQgEADAAAIIAAAHQAAAIAEAEQAEADAGAAQAEAAAEgBQADgBACgDIAFAEIgFAFIgFACIgIABQgGAAgFgCg");
	this.shape_35.setTransform(10.55,590.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAZQgEgLAAgOQAAgNAEgMQAFgLAHgKIAFAEQgIAIgDAMQgDAKgBAMQABAMADALQADALAIAIIgFAFQgHgJgFgNg");
	this.shape_36.setTransform(6.5,590.05);

	this.instance = new lib.Path();
	this.instance.setTransform(824.75,576.6,1,1,0,0,0,7.6,11);
	this.instance.alpha = 0.1484;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(799,576.6,1,1,0,0,0,9.2,10.8);
	this.instance_1.alpha = 0.1484;

	this.instance_2 = new lib.Rectangle();
	this.instance_2.setTransform(813.15,577.35,1,1,0,0,0,3.4,1.1);
	this.instance_2.alpha = 0.1484;

	this.instance_3 = new lib.Rectangle_1();
	this.instance_3.setTransform(786.1,577.35,1,1,0,0,0,1.1,3.6);
	this.instance_3.alpha = 0.1484;

	this.instance_4 = new lib.Path_2();
	this.instance_4.setTransform(774.25,576.6,1,1,0,0,0,7.5,10.8);
	this.instance_4.alpha = 0.1484;

	this.instance_5 = new lib.Path_3();
	this.instance_5.setTransform(756.9,576.6,1,1,0,0,0,7,10.8);
	this.instance_5.alpha = 0.1484;

	this.instance_6 = new lib.CompoundPath();
	this.instance_6.setTransform(820.95,530.4,1,1,0,0,0,11.4,15.8);
	this.instance_6.alpha = 0.1484;

	this.instance_7 = new lib.Path_6();
	this.instance_7.setTransform(789.2,530.35,1,1,0,0,0,14.1,15.5);
	this.instance_7.alpha = 0.1484;

	this.instance_8 = new lib.Path_7();
	this.instance_8.setTransform(758.95,530.35,1,1,0,0,0,10.2,15.5);
	this.instance_8.alpha = 0.1484;

	this.instance_9 = new lib.Rectangle_2();
	this.instance_9.setTransform(735.85,533.45,1,1,0,0,0,6.8,2.7);
	this.instance_9.alpha = 0.1484;

	this.instance_10 = new lib.Path_8();
	this.instance_10.setTransform(714.65,530.35,1,1,0,0,0,10.2,15.5);
	this.instance_10.alpha = 0.1484;

	this.instance_11 = new lib.Path_9();
	this.instance_11.setTransform(690.25,530.35,1,1,0,0,0,11.2,15.5);
	this.instance_11.alpha = 0.1484;

	this.instance_12 = new lib.Path_10();
	this.instance_12.setTransform(665.35,530.35,1,1,0,0,0,11.2,15.5);
	this.instance_12.alpha = 0.1484;

	this.instance_13 = new lib.Path_11();
	this.instance_13.setTransform(399.75,576.6,1,1,0,0,0,7.6,11);
	this.instance_13.alpha = 0.1484;

	this.instance_14 = new lib.Path_12();
	this.instance_14.setTransform(374,576.6,1,1,0,0,0,9.2,10.8);
	this.instance_14.alpha = 0.1484;

	this.instance_15 = new lib.Rectangle_3();
	this.instance_15.setTransform(388.15,577.35,1,1,0,0,0,3.4,1.1);
	this.instance_15.alpha = 0.1484;

	this.instance_16 = new lib.Rectangle_4();
	this.instance_16.setTransform(361.1,577.35,1,1,0,0,0,1.1,3.6);
	this.instance_16.alpha = 0.1484;

	this.instance_17 = new lib.Path_13();
	this.instance_17.setTransform(349.25,576.6,1,1,0,0,0,7.5,10.8);
	this.instance_17.alpha = 0.1484;

	this.instance_18 = new lib.Path_14();
	this.instance_18.setTransform(331.9,576.6,1,1,0,0,0,7,10.8);
	this.instance_18.alpha = 0.1484;

	this.instance_19 = new lib.CompoundPath_1();
	this.instance_19.setTransform(395.95,530.4,1,1,0,0,0,11.4,15.8);
	this.instance_19.alpha = 0.1484;

	this.instance_20 = new lib.Path_17();
	this.instance_20.setTransform(364.2,530.35,1,1,0,0,0,14.1,15.5);
	this.instance_20.alpha = 0.1484;

	this.instance_21 = new lib.Path_18();
	this.instance_21.setTransform(333.95,530.35,1,1,0,0,0,10.2,15.5);
	this.instance_21.alpha = 0.1484;

	this.instance_22 = new lib.Rectangle_5();
	this.instance_22.setTransform(310.85,533.45,1,1,0,0,0,6.8,2.7);
	this.instance_22.alpha = 0.1484;

	this.instance_23 = new lib.Path_19();
	this.instance_23.setTransform(289.65,530.35,1,1,0,0,0,10.2,15.5);
	this.instance_23.alpha = 0.1484;

	this.instance_24 = new lib.Path_20();
	this.instance_24.setTransform(265.25,530.35,1,1,0,0,0,11.2,15.5);
	this.instance_24.alpha = 0.1484;

	this.instance_25 = new lib.Path_21();
	this.instance_25.setTransform(240.35,530.35,1,1,0,0,0,11.2,15.5);
	this.instance_25.alpha = 0.1484;

	this.instance_26 = new lib.Path_22();
	this.instance_26.setTransform(612.25,476.15,1,1,0,0,0,7.6,11);
	this.instance_26.alpha = 0.1484;

	this.instance_27 = new lib.Path_23();
	this.instance_27.setTransform(586.5,476.15,1,1,0,0,0,9.2,10.8);
	this.instance_27.alpha = 0.1484;

	this.instance_28 = new lib.Rectangle_6();
	this.instance_28.setTransform(600.65,476.9,1,1,0,0,0,3.4,1.1);
	this.instance_28.alpha = 0.1484;

	this.instance_29 = new lib.Rectangle_7();
	this.instance_29.setTransform(573.6,476.95,1,1,0,0,0,1.1,3.6);
	this.instance_29.alpha = 0.1484;

	this.instance_30 = new lib.Path_24();
	this.instance_30.setTransform(561.75,476.15,1,1,0,0,0,7.5,10.8);
	this.instance_30.alpha = 0.1484;

	this.instance_31 = new lib.Path_25();
	this.instance_31.setTransform(544.4,476.15,1,1,0,0,0,7,10.8);
	this.instance_31.alpha = 0.1484;

	this.instance_32 = new lib.CompoundPath_2();
	this.instance_32.setTransform(608.45,430,1,1,0,0,0,11.4,15.8);
	this.instance_32.alpha = 0.1484;

	this.instance_33 = new lib.Path_28();
	this.instance_33.setTransform(576.7,429.9,1,1,0,0,0,14.1,15.5);
	this.instance_33.alpha = 0.1484;

	this.instance_34 = new lib.Path_29();
	this.instance_34.setTransform(546.45,429.9,1,1,0,0,0,10.2,15.5);
	this.instance_34.alpha = 0.1484;

	this.instance_35 = new lib.Rectangle_8();
	this.instance_35.setTransform(523.35,432.95,1,1,0,0,0,6.8,2.6);
	this.instance_35.alpha = 0.1484;

	this.instance_36 = new lib.Path_30();
	this.instance_36.setTransform(502.15,429.95,1,1,0,0,0,10.2,15.5);
	this.instance_36.alpha = 0.1484;

	this.instance_37 = new lib.Path_31();
	this.instance_37.setTransform(477.75,429.95,1,1,0,0,0,11.2,15.5);
	this.instance_37.alpha = 0.1484;

	this.instance_38 = new lib.Path_32();
	this.instance_38.setTransform(452.85,429.95,1,1,0,0,0,11.2,15.5);
	this.instance_38.alpha = 0.1484;

	this.instance_39 = new lib.Path_33();
	this.instance_39.setTransform(187.25,476.15,1,1,0,0,0,7.6,11);
	this.instance_39.alpha = 0.1484;

	this.instance_40 = new lib.Path_34();
	this.instance_40.setTransform(161.5,476.15,1,1,0,0,0,9.2,10.8);
	this.instance_40.alpha = 0.1484;

	this.instance_41 = new lib.Rectangle_9();
	this.instance_41.setTransform(175.65,476.9,1,1,0,0,0,3.4,1.1);
	this.instance_41.alpha = 0.1484;

	this.instance_42 = new lib.Rectangle_10();
	this.instance_42.setTransform(148.6,476.95,1,1,0,0,0,1.1,3.6);
	this.instance_42.alpha = 0.1484;

	this.instance_43 = new lib.Path_35();
	this.instance_43.setTransform(136.75,476.15,1,1,0,0,0,7.5,10.8);
	this.instance_43.alpha = 0.1484;

	this.instance_44 = new lib.Path_36();
	this.instance_44.setTransform(119.4,476.15,1,1,0,0,0,7,10.8);
	this.instance_44.alpha = 0.1484;

	this.instance_45 = new lib.CompoundPath_3();
	this.instance_45.setTransform(183.45,430,1,1,0,0,0,11.4,15.8);
	this.instance_45.alpha = 0.1484;

	this.instance_46 = new lib.Path_39();
	this.instance_46.setTransform(151.7,429.9,1,1,0,0,0,14.1,15.5);
	this.instance_46.alpha = 0.1484;

	this.instance_47 = new lib.Path_40();
	this.instance_47.setTransform(121.45,429.9,1,1,0,0,0,10.2,15.5);
	this.instance_47.alpha = 0.1484;

	this.instance_48 = new lib.Rectangle_11();
	this.instance_48.setTransform(98.35,432.95,1,1,0,0,0,6.8,2.6);
	this.instance_48.alpha = 0.1484;

	this.instance_49 = new lib.Path_41();
	this.instance_49.setTransform(77.15,429.95,1,1,0,0,0,10.2,15.5);
	this.instance_49.alpha = 0.1484;

	this.instance_50 = new lib.Path_42();
	this.instance_50.setTransform(52.75,429.95,1,1,0,0,0,11.2,15.5);
	this.instance_50.alpha = 0.1484;

	this.instance_51 = new lib.Path_43();
	this.instance_51.setTransform(27.85,429.95,1,1,0,0,0,11.2,15.5);
	this.instance_51.alpha = 0.1484;

	this.instance_52 = new lib.Path_44();
	this.instance_52.setTransform(824.75,376.15,1,1,0,0,0,7.6,11);
	this.instance_52.alpha = 0.1484;

	this.instance_53 = new lib.Path_45();
	this.instance_53.setTransform(799,376.15,1,1,0,0,0,9.2,10.8);
	this.instance_53.alpha = 0.1484;

	this.instance_54 = new lib.Rectangle_12();
	this.instance_54.setTransform(813.15,376.9,1,1,0,0,0,3.4,1.1);
	this.instance_54.alpha = 0.1484;

	this.instance_55 = new lib.Rectangle_13();
	this.instance_55.setTransform(786.1,376.9,1,1,0,0,0,1.1,3.6);
	this.instance_55.alpha = 0.1484;

	this.instance_56 = new lib.Path_46();
	this.instance_56.setTransform(774.25,376.15,1,1,0,0,0,7.5,10.8);
	this.instance_56.alpha = 0.1484;

	this.instance_57 = new lib.Path_47();
	this.instance_57.setTransform(756.9,376.15,1,1,0,0,0,7,10.8);
	this.instance_57.alpha = 0.1484;

	this.instance_58 = new lib.CompoundPath_4();
	this.instance_58.setTransform(820.95,329.95,1,1,0,0,0,11.4,15.8);
	this.instance_58.alpha = 0.1484;

	this.instance_59 = new lib.Path_50();
	this.instance_59.setTransform(789.2,329.9,1,1,0,0,0,14.1,15.5);
	this.instance_59.alpha = 0.1484;

	this.instance_60 = new lib.Path_51();
	this.instance_60.setTransform(758.95,329.9,1,1,0,0,0,10.2,15.5);
	this.instance_60.alpha = 0.1484;

	this.instance_61 = new lib.Rectangle_14();
	this.instance_61.setTransform(735.85,333,1,1,0,0,0,6.8,2.7);
	this.instance_61.alpha = 0.1484;

	this.instance_62 = new lib.Path_52();
	this.instance_62.setTransform(714.65,329.9,1,1,0,0,0,10.2,15.5);
	this.instance_62.alpha = 0.1484;

	this.instance_63 = new lib.Path_53();
	this.instance_63.setTransform(690.25,329.9,1,1,0,0,0,11.2,15.5);
	this.instance_63.alpha = 0.1484;

	this.instance_64 = new lib.Path_54();
	this.instance_64.setTransform(665.35,329.9,1,1,0,0,0,11.2,15.5);
	this.instance_64.alpha = 0.1484;

	this.instance_65 = new lib.Path_55();
	this.instance_65.setTransform(399.75,376.15,1,1,0,0,0,7.6,11);
	this.instance_65.alpha = 0.1484;

	this.instance_66 = new lib.Path_56();
	this.instance_66.setTransform(374,376.15,1,1,0,0,0,9.2,10.8);
	this.instance_66.alpha = 0.1484;

	this.instance_67 = new lib.Rectangle_15();
	this.instance_67.setTransform(388.15,376.9,1,1,0,0,0,3.4,1.1);
	this.instance_67.alpha = 0.1484;

	this.instance_68 = new lib.Rectangle_16();
	this.instance_68.setTransform(361.1,376.9,1,1,0,0,0,1.1,3.6);
	this.instance_68.alpha = 0.1484;

	this.instance_69 = new lib.Path_57();
	this.instance_69.setTransform(349.25,376.15,1,1,0,0,0,7.5,10.8);
	this.instance_69.alpha = 0.1484;

	this.instance_70 = new lib.Path_58();
	this.instance_70.setTransform(331.9,376.15,1,1,0,0,0,7,10.8);
	this.instance_70.alpha = 0.1484;

	this.instance_71 = new lib.CompoundPath_5();
	this.instance_71.setTransform(395.95,329.95,1,1,0,0,0,11.4,15.8);
	this.instance_71.alpha = 0.1484;

	this.instance_72 = new lib.Path_61();
	this.instance_72.setTransform(364.2,329.9,1,1,0,0,0,14.1,15.5);
	this.instance_72.alpha = 0.1484;

	this.instance_73 = new lib.Path_62();
	this.instance_73.setTransform(333.95,329.9,1,1,0,0,0,10.2,15.5);
	this.instance_73.alpha = 0.1484;

	this.instance_74 = new lib.Rectangle_17();
	this.instance_74.setTransform(310.85,333,1,1,0,0,0,6.8,2.7);
	this.instance_74.alpha = 0.1484;

	this.instance_75 = new lib.Path_63();
	this.instance_75.setTransform(289.65,329.9,1,1,0,0,0,10.2,15.5);
	this.instance_75.alpha = 0.1484;

	this.instance_76 = new lib.Path_64();
	this.instance_76.setTransform(265.25,329.9,1,1,0,0,0,11.2,15.5);
	this.instance_76.alpha = 0.1484;

	this.instance_77 = new lib.Path_65();
	this.instance_77.setTransform(240.35,329.9,1,1,0,0,0,11.2,15.5);
	this.instance_77.alpha = 0.1484;

	this.instance_78 = new lib.Path_66();
	this.instance_78.setTransform(612.25,275.7,1,1,0,0,0,7.6,11);
	this.instance_78.alpha = 0.1484;

	this.instance_79 = new lib.Path_67();
	this.instance_79.setTransform(586.5,275.7,1,1,0,0,0,9.2,10.8);
	this.instance_79.alpha = 0.1484;

	this.instance_80 = new lib.Rectangle_18();
	this.instance_80.setTransform(600.65,276.45,1,1,0,0,0,3.4,1.1);
	this.instance_80.alpha = 0.1484;

	this.instance_81 = new lib.Rectangle_19();
	this.instance_81.setTransform(573.6,276.5,1,1,0,0,0,1.1,3.6);
	this.instance_81.alpha = 0.1484;

	this.instance_82 = new lib.Path_68();
	this.instance_82.setTransform(561.75,275.7,1,1,0,0,0,7.5,10.8);
	this.instance_82.alpha = 0.1484;

	this.instance_83 = new lib.Path_69();
	this.instance_83.setTransform(544.4,275.7,1,1,0,0,0,7,10.8);
	this.instance_83.alpha = 0.1484;

	this.instance_84 = new lib.CompoundPath_6();
	this.instance_84.setTransform(608.45,229.55,1,1,0,0,0,11.4,15.8);
	this.instance_84.alpha = 0.1484;

	this.instance_85 = new lib.Path_72();
	this.instance_85.setTransform(576.7,229.45,1,1,0,0,0,14.1,15.5);
	this.instance_85.alpha = 0.1484;

	this.instance_86 = new lib.Path_73();
	this.instance_86.setTransform(546.45,229.45,1,1,0,0,0,10.2,15.5);
	this.instance_86.alpha = 0.1484;

	this.instance_87 = new lib.Rectangle_20();
	this.instance_87.setTransform(523.35,232.5,1,1,0,0,0,6.8,2.6);
	this.instance_87.alpha = 0.1484;

	this.instance_88 = new lib.Path_74();
	this.instance_88.setTransform(502.15,229.5,1,1,0,0,0,10.2,15.5);
	this.instance_88.alpha = 0.1484;

	this.instance_89 = new lib.Path_75();
	this.instance_89.setTransform(477.75,229.5,1,1,0,0,0,11.2,15.5);
	this.instance_89.alpha = 0.1484;

	this.instance_90 = new lib.Path_76();
	this.instance_90.setTransform(452.85,229.5,1,1,0,0,0,11.2,15.5);
	this.instance_90.alpha = 0.1484;

	this.instance_91 = new lib.Path_77();
	this.instance_91.setTransform(187.25,275.7,1,1,0,0,0,7.6,11);
	this.instance_91.alpha = 0.1484;

	this.instance_92 = new lib.Path_78();
	this.instance_92.setTransform(161.5,275.7,1,1,0,0,0,9.2,10.8);
	this.instance_92.alpha = 0.1484;

	this.instance_93 = new lib.Rectangle_21();
	this.instance_93.setTransform(175.65,276.45,1,1,0,0,0,3.4,1.1);
	this.instance_93.alpha = 0.1484;

	this.instance_94 = new lib.Rectangle_22();
	this.instance_94.setTransform(148.6,276.5,1,1,0,0,0,1.1,3.6);
	this.instance_94.alpha = 0.1484;

	this.instance_95 = new lib.Path_79();
	this.instance_95.setTransform(136.75,275.7,1,1,0,0,0,7.5,10.8);
	this.instance_95.alpha = 0.1484;

	this.instance_96 = new lib.Path_80();
	this.instance_96.setTransform(119.4,275.7,1,1,0,0,0,7,10.8);
	this.instance_96.alpha = 0.1484;

	this.instance_97 = new lib.CompoundPath_7();
	this.instance_97.setTransform(183.45,229.55,1,1,0,0,0,11.4,15.8);
	this.instance_97.alpha = 0.1484;

	this.instance_98 = new lib.Path_83();
	this.instance_98.setTransform(151.7,229.45,1,1,0,0,0,14.1,15.5);
	this.instance_98.alpha = 0.1484;

	this.instance_99 = new lib.Path_84();
	this.instance_99.setTransform(121.45,229.45,1,1,0,0,0,10.2,15.5);
	this.instance_99.alpha = 0.1484;

	this.instance_100 = new lib.Rectangle_23();
	this.instance_100.setTransform(98.35,232.5,1,1,0,0,0,6.8,2.6);
	this.instance_100.alpha = 0.1484;

	this.instance_101 = new lib.Path_85();
	this.instance_101.setTransform(77.15,229.5,1,1,0,0,0,10.2,15.5);
	this.instance_101.alpha = 0.1484;

	this.instance_102 = new lib.Path_86();
	this.instance_102.setTransform(52.75,229.5,1,1,0,0,0,11.2,15.5);
	this.instance_102.alpha = 0.1484;

	this.instance_103 = new lib.Path_87();
	this.instance_103.setTransform(27.85,229.5,1,1,0,0,0,11.2,15.5);
	this.instance_103.alpha = 0.1484;

	this.instance_104 = new lib.Path_88();
	this.instance_104.setTransform(824.75,176.35,1,1,0,0,0,7.6,11);
	this.instance_104.alpha = 0.1484;

	this.instance_105 = new lib.Path_89();
	this.instance_105.setTransform(799,176.35,1,1,0,0,0,9.2,10.8);
	this.instance_105.alpha = 0.1484;

	this.instance_106 = new lib.Rectangle_24();
	this.instance_106.setTransform(813.15,177.1,1,1,0,0,0,3.4,1.1);
	this.instance_106.alpha = 0.1484;

	this.instance_107 = new lib.Rectangle_25();
	this.instance_107.setTransform(786.1,177.15,1,1,0,0,0,1.1,3.6);
	this.instance_107.alpha = 0.1484;

	this.instance_108 = new lib.Path_90();
	this.instance_108.setTransform(774.25,176.35,1,1,0,0,0,7.5,10.8);
	this.instance_108.alpha = 0.1484;

	this.instance_109 = new lib.Path_91();
	this.instance_109.setTransform(756.9,176.35,1,1,0,0,0,7,10.8);
	this.instance_109.alpha = 0.1484;

	this.instance_110 = new lib.CompoundPath_8();
	this.instance_110.setTransform(820.95,130.2,1,1,0,0,0,11.4,15.8);
	this.instance_110.alpha = 0.1484;

	this.instance_111 = new lib.Path_94();
	this.instance_111.setTransform(789.2,130.1,1,1,0,0,0,14.1,15.5);
	this.instance_111.alpha = 0.1484;

	this.instance_112 = new lib.Path_95();
	this.instance_112.setTransform(758.95,130.1,1,1,0,0,0,10.2,15.5);
	this.instance_112.alpha = 0.1484;

	this.instance_113 = new lib.Rectangle_26();
	this.instance_113.setTransform(735.85,133.15,1,1,0,0,0,6.8,2.6);
	this.instance_113.alpha = 0.1484;

	this.instance_114 = new lib.Path_96();
	this.instance_114.setTransform(714.65,130.15,1,1,0,0,0,10.2,15.5);
	this.instance_114.alpha = 0.1484;

	this.instance_115 = new lib.Path_97();
	this.instance_115.setTransform(690.25,130.15,1,1,0,0,0,11.2,15.5);
	this.instance_115.alpha = 0.1484;

	this.instance_116 = new lib.Path_98();
	this.instance_116.setTransform(665.35,130.15,1,1,0,0,0,11.2,15.5);
	this.instance_116.alpha = 0.1484;

	this.instance_117 = new lib.Path_99();
	this.instance_117.setTransform(399.75,176.35,1,1,0,0,0,7.6,11);
	this.instance_117.alpha = 0.1484;

	this.instance_118 = new lib.Path_100();
	this.instance_118.setTransform(374,176.35,1,1,0,0,0,9.2,10.8);
	this.instance_118.alpha = 0.1484;

	this.instance_119 = new lib.Rectangle_27();
	this.instance_119.setTransform(388.15,177.1,1,1,0,0,0,3.4,1.1);
	this.instance_119.alpha = 0.1484;

	this.instance_120 = new lib.Rectangle_28();
	this.instance_120.setTransform(361.1,177.15,1,1,0,0,0,1.1,3.6);
	this.instance_120.alpha = 0.1484;

	this.instance_121 = new lib.Path_101();
	this.instance_121.setTransform(349.25,176.35,1,1,0,0,0,7.5,10.8);
	this.instance_121.alpha = 0.1484;

	this.instance_122 = new lib.Path_102();
	this.instance_122.setTransform(331.9,176.35,1,1,0,0,0,7,10.8);
	this.instance_122.alpha = 0.1484;

	this.instance_123 = new lib.CompoundPath_9();
	this.instance_123.setTransform(395.95,130.2,1,1,0,0,0,11.4,15.8);
	this.instance_123.alpha = 0.1484;

	this.instance_124 = new lib.Path_105();
	this.instance_124.setTransform(364.2,130.1,1,1,0,0,0,14.1,15.5);
	this.instance_124.alpha = 0.1484;

	this.instance_125 = new lib.Path_106();
	this.instance_125.setTransform(333.95,130.1,1,1,0,0,0,10.2,15.5);
	this.instance_125.alpha = 0.1484;

	this.instance_126 = new lib.Rectangle_29();
	this.instance_126.setTransform(310.85,133.15,1,1,0,0,0,6.8,2.6);
	this.instance_126.alpha = 0.1484;

	this.instance_127 = new lib.Path_107();
	this.instance_127.setTransform(289.65,130.15,1,1,0,0,0,10.2,15.5);
	this.instance_127.alpha = 0.1484;

	this.instance_128 = new lib.Path_108();
	this.instance_128.setTransform(265.25,130.15,1,1,0,0,0,11.2,15.5);
	this.instance_128.alpha = 0.1484;

	this.instance_129 = new lib.Path_109();
	this.instance_129.setTransform(240.35,130.15,1,1,0,0,0,11.2,15.5);
	this.instance_129.alpha = 0.1484;

	this.instance_130 = new lib.Path_110();
	this.instance_130.setTransform(612.25,75.95,1,1,0,0,0,7.6,11);
	this.instance_130.alpha = 0.1484;

	this.instance_131 = new lib.Path_111();
	this.instance_131.setTransform(586.5,75.9,1,1,0,0,0,9.2,10.8);
	this.instance_131.alpha = 0.1484;

	this.instance_132 = new lib.Rectangle_30();
	this.instance_132.setTransform(600.65,76.7,1,1,0,0,0,3.4,1.1);
	this.instance_132.alpha = 0.1484;

	this.instance_133 = new lib.Rectangle_31();
	this.instance_133.setTransform(573.6,76.7,1,1,0,0,0,1.1,3.6);
	this.instance_133.alpha = 0.1484;

	this.instance_134 = new lib.Path_112();
	this.instance_134.setTransform(561.75,75.9,1,1,0,0,0,7.5,10.8);
	this.instance_134.alpha = 0.1484;

	this.instance_135 = new lib.Path_113();
	this.instance_135.setTransform(544.4,75.9,1,1,0,0,0,7,10.8);
	this.instance_135.alpha = 0.1484;

	this.instance_136 = new lib.CompoundPath_10();
	this.instance_136.setTransform(608.45,29.75,1,1,0,0,0,11.4,15.8);
	this.instance_136.alpha = 0.1484;

	this.instance_137 = new lib.Path_116();
	this.instance_137.setTransform(576.7,29.7,1,1,0,0,0,14.1,15.5);
	this.instance_137.alpha = 0.1484;

	this.instance_138 = new lib.Path_117();
	this.instance_138.setTransform(546.45,29.7,1,1,0,0,0,10.2,15.5);
	this.instance_138.alpha = 0.1484;

	this.instance_139 = new lib.Rectangle_32();
	this.instance_139.setTransform(523.35,32.7,1,1,0,0,0,6.8,2.6);
	this.instance_139.alpha = 0.1484;

	this.instance_140 = new lib.Path_118();
	this.instance_140.setTransform(502.15,29.7,1,1,0,0,0,10.2,15.5);
	this.instance_140.alpha = 0.1484;

	this.instance_141 = new lib.Path_119();
	this.instance_141.setTransform(477.75,29.7,1,1,0,0,0,11.2,15.5);
	this.instance_141.alpha = 0.1484;

	this.instance_142 = new lib.Path_120();
	this.instance_142.setTransform(452.85,29.7,1,1,0,0,0,11.2,15.5);
	this.instance_142.alpha = 0.1484;

	this.instance_143 = new lib.Path_121();
	this.instance_143.setTransform(187.25,75.95,1,1,0,0,0,7.6,11);
	this.instance_143.alpha = 0.1484;

	this.instance_144 = new lib.Path_122();
	this.instance_144.setTransform(161.5,75.9,1,1,0,0,0,9.2,10.8);
	this.instance_144.alpha = 0.1484;

	this.instance_145 = new lib.Rectangle_33();
	this.instance_145.setTransform(175.65,76.7,1,1,0,0,0,3.4,1.1);
	this.instance_145.alpha = 0.1484;

	this.instance_146 = new lib.Rectangle_34();
	this.instance_146.setTransform(148.6,76.7,1,1,0,0,0,1.1,3.6);
	this.instance_146.alpha = 0.1484;

	this.instance_147 = new lib.Path_123();
	this.instance_147.setTransform(136.75,75.9,1,1,0,0,0,7.5,10.8);
	this.instance_147.alpha = 0.1484;

	this.instance_148 = new lib.Path_124();
	this.instance_148.setTransform(119.4,75.9,1,1,0,0,0,7,10.8);
	this.instance_148.alpha = 0.1484;

	this.instance_149 = new lib.CompoundPath_11();
	this.instance_149.setTransform(183.45,29.75,1,1,0,0,0,11.4,15.8);
	this.instance_149.alpha = 0.1484;

	this.instance_150 = new lib.Path_127();
	this.instance_150.setTransform(151.7,29.7,1,1,0,0,0,14.1,15.5);
	this.instance_150.alpha = 0.1484;

	this.instance_151 = new lib.Path_128();
	this.instance_151.setTransform(121.45,29.7,1,1,0,0,0,10.2,15.5);
	this.instance_151.alpha = 0.1484;

	this.instance_152 = new lib.Rectangle_35();
	this.instance_152.setTransform(98.35,32.7,1,1,0,0,0,6.8,2.6);
	this.instance_152.alpha = 0.1484;

	this.instance_153 = new lib.Path_129();
	this.instance_153.setTransform(77.15,29.7,1,1,0,0,0,10.2,15.5);
	this.instance_153.alpha = 0.1484;

	this.instance_154 = new lib.Path_130();
	this.instance_154.setTransform(52.75,29.7,1,1,0,0,0,11.2,15.5);
	this.instance_154.alpha = 0.1484;

	this.instance_155 = new lib.Path_131();
	this.instance_155.setTransform(27.85,29.7,1,1,0,0,0,11.2,15.5);
	this.instance_155.alpha = 0.1484;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FBF7CC").s().p("EhCZAu4MAAAhdvMCEzAAAMAAABdvg");
	this.shape_37.setTransform(425,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BGTTZ, rect = new cjs.Rectangle(0,0,850,600), [rect]);


// stage content:
(lib.animateGM = function(mode,startPosition,loop,reversed) {
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
		// animateGM.fla: start JS
		////////////////////////////////////////////////////////////////////////
		var c; // CreateJS-bib
		var r; // Device Pixel Ratio
		var w, h; // width, height
		var root = this;
		var backGround; // reference to all the static stuff
		var shaft; // rotating shaft
		var header; // title
		var game; // it's just a kind of game...
		var inGame = false; // game stopped
		var centerX = root.shaft.x,
			centerY = root.shaft.y; // rotor center
		var rRe = root.shaft.nominalBounds.width / 2; // rotor outer radius
		let iF = new Array(4); // field AT
		let QA = 16; // number of slots
		let iA = new Array(QA); // QA armature slot AT
		var phifN, phifS, phiA; // direction of flux
		var vecUA, vecUi, vecIA, vecUBr;
		let state = {
			theta: 0,
			speed: 1,
			torque: 1,
			load: 1
		};
		
		let DEBUG = true;
		
		function init() {
			c = createjs;
			r = window.devicePixelRatio;
			w = stage.canvas.width / r;
			h = stage.canvas.height / r;
			let titGen = "Gleichstromgenerator";
			let titMot = "Gleichstrommotor";
		
			if (DEBUG) console.log("r: " + r + ", w: " + w + ", h: " + h);
		
			createBackground();
			createFieldAT();
			createArmatureAT();
		
			game = new c.Container();
			stage.addChild(game);
			c.Ticker.addEventListener("tick", gameCore);
			stage.enableMouseOver(3);
		
			initStartStop();
			initSpeedCtrl();
			initTorqCntrl();
		
			function initStartStop() {
				root.goFrame.visible = false;
				root.startBtn.addEventListener("mousedown", function (event) {
					root.startBtn.visible = false;
					root.stopBtn.visible = true;
					inGame = true;
				});
				root.startBtn.addEventListener("mouseover", function (event) {
					root.goFrame.visible = true;
					//root.cursor = 'pointer';
				});
				root.startBtn.addEventListener("mouseout", function (event) {
					root.goFrame.visible = false;
					//root.cursor = 'default';
				});
				root.stopBtn.addEventListener("mousedown", function (event) {
					root.stopBtn.visible = false;
					root.startBtn.visible = true;
					inGame = false;
				});
				root.stopBtn.addEventListener("mouseover", function (event) {
					root.goFrame.visible = true;
					//root.cursor = 'pointer';
				});
				root.stopBtn.addEventListener("mouseout", function (event) {
					root.goFrame.visible = false;
					//root.cursor = 'default';
				});
			}
			function initSpeedCtrl() {	// control-buttons speed
				root.spCWFrame.visible = false;
				root.speedCW.alpha = 0.5;
				root.speedCW.addEventListener("mousedown", function (event) {
					root.speedCW.alpha = 1.0;
					root.speedCCW.alpha = 0.5;
					state.speed = -Math.abs(state.speed);
					header.text = ((state.speed * state.torque < 0) ? titGen : titMot);
					setVoltage(180);
					enableSpCW(false);
					root.spCWFrame.visible = false;
				});
				root.spCCWFrame.visible = false;
				root.speedCCW.addEventListener("mousedown", function (event) {
					root.speedCCW.alpha = 1.0;
					root.speedCW.alpha = 0.5;
					state.speed = Math.abs(state.speed);
					header.text = ((state.speed * state.torque < 0) ? titGen : titMot);
					setVoltage(0);
					enableSpCW(true);
					spCCWFrame.visible = false;
				});
				enableSpCW(true);
				root.speedCW.addEventListener("mouseout", function (event) {
					root.spCWFrame.visible = false;
					//root.cursor = 'default';
				});
				root.speedCCW.addEventListener("mouseout", function (event) {
					root.spCCWFrame.visible = false;
					//root.cursor = 'default';
				});
		
				function enableSpCW(cw) {
					if (cw) {
						root.speedCW.addEventListener("mouseover", function (event) {
							root.spCWFrame.visible = true;
							//root.cursor = 'pointer';
						});
						root.speedCCW.addEventListener("mouseover", function (event) {
							root.spCCWFrame.visible = false;
						});
					} else {
						root.speedCW.addEventListener("mouseover", function (event) {
							root.spCWFrame.visible = false;
						});
						root.speedCCW.addEventListener("mouseover", function (event) {
							root.spCCWFrame.visible = true;
							//root.cursor = 'pointer';
						});
					}
				}
			}
			function initTorqCntrl() {	// control-buttons torque
				root.tqCWFrame.visible = false;
				root.torqCW.alpha = 0.5;
				root.torqCW.addEventListener("mousedown", function (event) {
					root.torqCW.alpha = 1.0;
					root.torqCCW.alpha = 0.5;
					state.torque = -Math.abs(state.torque);
					header.text = ((state.speed * state.torque < 0) ? titGen : titMot);
					vecIA.rotation = 180;
					vecUBr.rotation = 180;
					setVoltage(vecUi.rotation);
					enableTqCW(false);
					root.tqCWFrame.visible = false;
				});
				root.tqCCWFrame.visible = false;
				root.torqCCW.addEventListener("mousedown", function (event) {
					root.torqCCW.alpha = 1.0;
					root.torqCW.alpha = 0.5;
					state.torque = Math.abs(state.torque);
					header.text = ((state.speed * state.torque < 0) ? titGen : titMot);
					vecIA.rotation = 0;
					vecUBr.rotation = 0;
					setVoltage(vecUi.rotation);
					enableTqCW(true);
					root.tqCCWFrame.visible = false;
				});
				
				enableTqCW(true);
				root.torqCW.addEventListener("mouseout", function (event) {
					root.tqCWFrame.visible = false;
					//root.cursor = 'default';
				});
				root.torqCCW.addEventListener("mouseout", function (event) {
					root.tqCCWFrame.visible = false;
					//root.cursor = 'default';
				});
				function enableTqCW(cw) {
					if (cw) {
						root.torqCW.addEventListener("mouseover", function (event) {
							root.tqCWFrame.visible = true;
							//root.cursor = 'pointer';
						});
						root.torqCCW.addEventListener("mouseover", function (event) {
							root.tqCCWFrame.visible = false;
						});
					} else {
						root.torqCW.addEventListener("mouseover", function (event) {
							root.tqCWFrame.visible = false;
						});
						root.torqCCW.addEventListener("mouseover", function (event) {
							root.tqCCWFrame.visible = true;
							//root.cursor = 'pointer';
						});
					}
				}
			}
		}
		function setVoltage(direction) {
			if (state.speed * state.torque < 0) { // generator: U_i > U_A
				vecUi.scale = 1.0;
				vecUA.scale = 0.8;
			} else { // motor: U_A > U_i
				vecUi.scale = 0.8;
				vecUA.scale = 1.0;
			}
			vecUi.rotation = direction;
			vecUA.rotation = direction;
		}
		function stopTheGame() {
			root.stopBtn.visible = false;
			root.startBtn.visible = true;
			inGame = false;
		}
		function gameCore(event) { // infinite loop
			if (inGame) {
				rotateArmature();
			}
		}
		function createBackground() { // logos, yoke, shaft, text!!!
			// TTZ
			backGround = new c.Container();
			stage.addChild(backGround);
			
			vecUA = new lib.VecUA();
			vecUA.x = 553.9;
			vecUA.y = 168.4;
			backGround.addChild(vecUA);
			vecUi = new lib.VecUi();
			vecUi.x = 752.9;
			vecUi.y = 168.4;
			vecUi.scale = 0.8;
			backGround.addChild(vecUi);
			vecIA = new lib.VecIA();
			vecIA.x = 767.1;
			vecIA.y = 83.4;
			backGround.addChild(vecIA);
			vecUBr = new lib.VecUBr();
			vecUBr.x = 706.6;
			vecUBr.y = 58.2;
			backGround.addChild(vecUBr);
		
			// title
			header = new c.Text("Gleichstrommotor", "bold 24px Arial", "#000000");
			header.textAlign = "center";
			header.x = centerX;
			header.y = 35;
			header.width = 300;
			backGround.addChild(header);
		
			var text1 = new c.Text("Drehrichtung:", "bold 18px Arial", "#000000");
			text1.textAlign = "left";
			text1.x = w / 2 + 100;
			text1.y = (h + centerY) / 2 + 450 / 4 - 8;
			text1.width = 200;
			backGround.addChild(text1);
		
			var text2 = new c.Text("Drehmomentrichtung:", "bold 18px Arial", "#000000");
			text2.textAlign = "left";
			text2.x = text1.x;
			text2.y = (h + centerY) / 2 + 450 / 4 - 55;
			text2.width = 200;
			backGround.addChild(text2);
		
		}
		function createFieldAT() { // field ampere turns / flux vector
			var offsetX = 95;
			var offsetY = 130;
		
			// field ampere turns: top to bottom, left to right 
		
			iF[0] = new lib.ifm();
			iF[0].x = centerX - offsetX;
			iF[0].y = centerY - offsetY;
			var tmp = iF[0];
			backGround.addChild(tmp);
		
			iF[1] = new lib.ifm();
			iF[1].x = centerX - offsetX;
			iF[1].y = centerY + offsetY;
			tmp = iF[1];
			backGround.addChild(tmp);
		
			iF[2] = new lib.ifp();
			iF[2].x = centerX + offsetX;
			iF[2].y = centerY - offsetY;
			tmp = iF[2];
			backGround.addChild(tmp);
		
			iF[3] = new lib.ifp();
			iF[3].x = centerX + offsetX;
			iF[3].y = centerY + offsetY;
			tmp = iF[3];
			backGround.addChild(tmp);
		
			phifN = new lib.PhifN();
			phifN.x = centerX;
			phifN.y = centerY + rRe * 1.07;
			backGround.addChild(phifN);
		
			phifS = new lib.PhifS();
			phifS.x = centerX;
			phifS.y = centerY - rRe * 1.07;
			backGround.addChild(phifS);
		}
		function createArmatureAT() { // armature ampere turns / flux vector
			let angle = Math.PI / QA;
			//let rRe = root.shaft.nominalBounds.width / 2;
			for (let i = 0; i < QA / 2; i++) {
				//let angle = Math.PI/QA*(2*i+1);
				iA[i] = new lib.iAm();
				if (i == 0) {
					rRe -= iA[i].nominalBounds.width / 2;
				}
				iA[i].x = centerX + rRe * Math.cos(angle);
				iA[i].y = centerY - rRe * Math.sin(angle);
				tmp = iA[i];
				backGround.addChild(tmp);
				iA[i + QA / 2] = new lib.iAp();
				iA[i + QA / 2].x = centerX - rRe * Math.cos(angle);
				iA[i + QA / 2].y = centerY + rRe * Math.sin(angle);
				tmp = iA[i + QA / 2];
				backGround.addChild(tmp);
				angle += 2 * Math.PI / QA; // diff between 2 coils
			}
			rRe += iA[0].nominalBounds.width / 2;
			phiA = new lib.PhiA();
			phiA.x = centerX;
			phiA.y = centerY;
			backGround.addChild(phiA);
		}
		function rotateArmature() { // shaft, AT, flux
			// shaft:
			state.theta += state.speed; // nominal speed: 1°/step
			if (state.theta > 360) {
				state.theta -= 360;
			} else if (state.theta < -360) {
				state.theta += 360;
			}
			root.shaft.rotation = -state.theta;
		
			// slot ampere turns:
			angle = ((state.theta + 180 / QA) % (360 / QA)) * Math.PI / 180;
			if (angle < 0) {
				angle += (360 / QA) * Math.PI / 180;
			}
		
			let ampl = Math.abs(state.torque);
			let tmp = ((state.torque > 0) ? rRe - iA[0].nominalBounds.width / 2 : -rRe + iA[0].nominalBounds.width / 2); // rRe := sign(torque) * rRe;
			let meanAngle = 0;
			let mmf = 0;
		
			for (let i = 0; i < QA / 2; i++) {
				iA[i].x = centerX + tmp * Math.cos(angle);
				iA[i].y = centerY - tmp * Math.sin(angle);
				iA[i + QA / 2].x = centerX - tmp * Math.cos(angle);
				iA[i + QA / 2].y = centerY + tmp * Math.sin(angle);
				if ((angle < Math.PI / QA) || (Math.PI - angle < Math.PI / QA)) {
					amplComm = ((angle < Math.PI / QA) ? angle : Math.PI - angle);
					amplComm *= (ampl / (Math.PI / QA));
					meanAngle += amplComm * ((state.torque < 0) ? angle + Math.PI : angle);
					mmf += amplComm;
					iA[i].scale = Math.sqrt(amplComm);
					iA[i + QA / 2].scale = Math.sqrt(amplComm);
					if (DEBUG) console.log("i: " + i + ", angle: " + (angle * 180 / Math.PI).toFixed(1) + ", amplComm: " + amplComm.toFixed(3) +
						", meanAngle: " + (meanAngle * 180 / Math.PI).toFixed(1));
				} else {
					meanAngle += ampl * ((state.torque < 0) ? angle + Math.PI : angle);
					mmf += ampl;
					iA[i].scale = Math.sqrt(ampl);
					iA[i + QA / 2].scale = Math.sqrt(ampl);
					if (DEBUG) console.log("i: " + i + ", angle: " + (angle * 180 / Math.PI).toFixed(1) + ", ampl: " + ampl.toFixed(3) +
						", meanAngle: " + (meanAngle * 180 / Math.PI).toFixed(1));
				}
				if (DEBUG) console.log("i: " + i + ", angle: " + (angle * 180 / Math.PI).toFixed(1) + ", meanAngle: " + (meanAngle * 180 / Math.PI).toFixed(1) + ", mmf: " + mmf.toFixed(2));
				angle += 2 * Math.PI / QA; // diff between 2 coils
			}
			if (DEBUG) console.log("meanAngle: " + (meanAngle * 180 / Math.PI).toFixed(1) + ", mmf: " + mmf.toFixed(2) +
				", meanAngle/mmf: " + ((meanAngle / mmf) * 180 / Math.PI).toFixed(1) +
				", torque: " + state.torque);
			//stopTheGame();
			meanAngle = meanAngle / mmf - Math.PI / 2;
			phiA.rotation = meanAngle * 180 / Math.PI;
			phiA.scale = mmf / (QA / 2);
		
		}
		
		init();
		
		////////////////////////////////////////////////////////////////////////
		// animateGM.fla: end JS
		////////////////////////////////////////////////////////////////////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// game
	this.shaft = new lib.roShaft();
	this.shaft.name = "shaft";
	this.shaft.setTransform(275,300);

	this.timeline.addTween(cjs.Tween.get(this.shaft).wait(1));

	// cntrlGo
	this.speedCCW = new lib.BtnCCW();
	this.speedCCW.name = "speedCCW";
	this.speedCCW.setTransform(750,560,1.5101,1.5082);

	this.torqCCW = new lib.BtnCCW();
	this.torqCCW.name = "torqCCW";
	this.torqCCW.setTransform(750,510,1.5101,1.5082);

	this.torqCW = new lib.BtnCW();
	this.torqCW.name = "torqCW";
	this.torqCW.setTransform(800,510,1.5126,1.5106);

	this.speedCW = new lib.BtnCW();
	this.speedCW.name = "speedCW";
	this.speedCW.setTransform(800,560,1.5126,1.5106);

	this.startBtn = new lib.BtnGo();
	this.startBtn.name = "startBtn";
	this.startBtn.setTransform(275,560,1.4706,1.4699);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startBtn},{t:this.speedCW},{t:this.torqCW},{t:this.torqCCW},{t:this.speedCCW}]}).wait(1));

	// cntrlStop
	this.stopBtn = new lib.BtnStop();
	this.stopBtn.name = "stopBtn";
	this.stopBtn.setTransform(275,560,1.4691,1.4677);

	this.timeline.addTween(cjs.Tween.get(this.stopBtn).wait(1));

	// cntrlAnim
	this.spCWFrame = new lib.tqCCWFrame();
	this.spCWFrame.name = "spCWFrame";
	this.spCWFrame.setTransform(800,560,1.5798,1.6);

	this.spCCWFrame = new lib.tqCCWFrame();
	this.spCCWFrame.name = "spCCWFrame";
	this.spCCWFrame.setTransform(750,560,1.5798,1.6);

	this.tqCCWFrame = new lib.tqCCWFrame();
	this.tqCCWFrame.name = "tqCCWFrame";
	this.tqCCWFrame.setTransform(750,510,1.5798,1.6);

	this.tqCWFrame = new lib.tqCCWFrame();
	this.tqCWFrame.name = "tqCWFrame";
	this.tqCWFrame.setTransform(800,510,1.5798,1.6);

	this.goFrame = new lib.goFrame();
	this.goFrame.name = "goFrame";
	this.goFrame.setTransform(274.95,560,1.5083,1.647);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.goFrame},{t:this.tqCWFrame},{t:this.tqCCWFrame},{t:this.spCCWFrame},{t:this.spCWFrame}]}).wait(1));

	// backGround
	this.stYoke = new lib.stYoke();
	this.stYoke.name = "stYoke";
	this.stYoke.setTransform(275,300);

	this.baseCircuit = new lib.BaseCircuit();
	this.baseCircuit.name = "baseCircuit";
	this.baseCircuit.setTransform(671,140,1,1,0,0,0,151,120);

	this.instance = new lib.BGTTZ1();
	this.instance.setTransform(425,300,1,1,0,0,0,425,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.baseCircuit},{t:this.stYoke}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(425,300,850,600);
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
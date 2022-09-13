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
	this.shape.setTransform(0.0177,-0.0231,3.1746,3.1768);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CCCC1").s().p("AkTKNQh/g2hihiQhihig2h/Qg4iEAAiQQAAiPA4iEQA2h/BihiQDQjPEkAAQEmAADPDPQBiBiA2B/QA4CEAACPQAACQg4CEQg2B/hiBiQjPDPkmAAQiPAAiEg3gAk/k/QiFCEAAC7QAAC8CFCEQCECFC7AAQC8AACFiFQCFiEAAi8QAAi7iFiEQiFiFi8AAQi7AAiECFg");
	this.shape_1.setTransform(0.0177,-0.0231,3.1746,3.1768);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stYoke, rect = new cjs.Rectangle(-226,-226,452,452), [rect]);


(lib.PhiStS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgTAAIgOAnQgDAEAEAFQACAEAGAAIAxAAQAGAAADgEQADgFgDgFQgIgRgGgVQgHgXgDgTQgBgJgJAAQgCAAgDACQgDADgBAEQgDATgHAXg");
	this.shape.setTransform(0.0078,-64.8751,3.1743,3.1767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6A20").s().p("AgYA0QgGAAgCgEQgEgFADgEIAOgnQAHgXADgTQABgEADgDQADgCACAAQAJAAABAJQADATAHAXQAGAVAIARQADAFgDAFQgDAEgGAAg");
	this.shape_1.setTransform(0.0078,-64.8751,3.1743,3.1767);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgJhbIAACoQAAAEADADQADADADAAQAEAAADgDQADgDAAgEIAAio");
	this.shape_2.setTransform(0.0515,-27.5524,3.174,3.1765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC6A20").s().p("AgGBWQgDgDAAgEIAAinIATAAIAACnQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(0.0515,-28.3466,3.174,3.1765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PhiStS, rect = new cjs.Rectangle(-12.2,-82.4,24.4,83.5), [rect]);


(lib.PhiStN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgTAAQgHAVgFANIgCAFQgDAEAEAFQACAEAGAAIAxAAQAGAAADgEQADgFgDgFQgIgRgGgVQgHgXgDgTQgBgJgJAAQgCAAgDACQgDADgBAEQgDATgHAXg");
	this.shape.setTransform(0.0078,16.5714,3.1743,3.1767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6A20").s().p("AgYA0QgGAAgCgEQgEgFADgEIACgFIAMgiQAHgXADgTQABgEADgDQADgCACAAQAJAAABAJQADATAHAXQAGAVAIARQADAFgDAFQgDAEgGAAg");
	this.shape_1.setTransform(0.0078,16.5714,3.1743,3.1767);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgJhWIAACeQAAAEADADQADADADAAQAEAAADgDQADgDAAgEIAAie");
	this.shape_2.setTransform(0.0515,52.3625,3.174,3.1765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC6A20").s().p("AgGBRQgDgCAAgFIAAidIATAAIAACdQAAAFgDACQgDADgEABQgDgBgDgDg");
	this.shape_3.setTransform(0.0515,51.5684,3.174,3.1765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PhiStN, rect = new cjs.Rectangle(-12.2,-1,24.4,80.5), [rect]);


(lib.iSp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAoAoIhPhP");
	this.shape.setTransform(-0.0736,-0.0134,3.1743,3.1767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAognIhPBP");
	this.shape_1.setTransform(-0.0736,-0.0134,3.1743,3.1767);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("Ag4AAQAAgWARgRQAQgQAXAAQAXAAARAQQARARAAAWQAAAYgRAQQgRARgXAAQgXAAgQgRQgRgQAAgYg");
	this.shape_2.setTransform(0.0058,-0.0134,3.1743,3.1767);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC6A20").s().p("AgnAoQgRgQAAgYQAAgWARgRQAQgQAXAAQAXAAARAQQARARAAAWQAAAYgRAQQgRAQgXAAQgXAAgQgQg");
	this.shape_3.setTransform(0.0058,-0.0134,3.1743,3.1767);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iSp, rect = new cjs.Rectangle(-19,-18.9,38,37.9), [rect]);


(lib.iSm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AgNAAQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGg");
	this.shape.setTransform(-0.0908,-0.0134,3.1743,3.1767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(-0.0908,-0.0134,3.1743,3.1767);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("Ag4AAQAAgWARgRQAQgQAXAAQAXAAARAQQARARAAAWQAAAYgRAQQgRARgXAAQgXAAgQgRQgRgQAAgYg");
	this.shape_2.setTransform(-0.0469,-0.0274,3.174,3.1765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC6A20").s().p("AgnAoQgRgQAAgYQAAgWARgRQAQgQAXAAQAXAAARAQQARARAAAWQAAAYgRAQQgRAQgXAAQgXAAgQgQg");
	this.shape_3.setTransform(-0.0469,-0.0274,3.174,3.1765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iSm, rect = new cjs.Rectangle(-19,-18.9,38,37.8), [rect]);


(lib.roShaftPoles = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AA5hzIAAgnIhxAAIAAAnQgmARgXAiQgYAkAAAqQAAA7AqApQApApA6AAQA7AAApgpQAqgpAAg7QAAgqgYgkQgXgigmgRg");
	this.shape.setTransform(-1.0946,-4.5168,3.1758,3.1783);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBDBDA").s().p("AhjByQgqgpAAg7QAAgqAYgkQAXgiAmgRIAAgoIBxAAIAAAoQAmARAXAiQAYAkAAAqQAAA7gqApQgpAqg7AAQg6AAgpgqg");
	this.shape_1.setTransform(-1.0946,-4.5168,3.1758,3.1783);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("ADjD/IAAn9IBxAAQg7hPhYgtQhaguhnAAQhmAAhaAuQhYAtg7BPIBxAAIAAH9IhxAAQA7BPBYAtQBaAuBmAAQBnAABaguQBYgtA7hPg");
	this.shape_2.setTransform(0.0169,0.0123,3.1758,3.1783);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CCCC1").s().p("AjAF7QhYgtg7hPIBxAAIAAn9IhxAAQA7hPBYgtQBaguBmAAQBnAABaAuQBYAtA7BPIhxAAIAAH9IBxAAQg7BPhYAtQhaAuhnAAQhmAAhagug");
	this.shape_3.setTransform(0.0169,0.0123,3.1758,3.1783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AFUD/QAkgwAMhHQAJgvAAhZQAAhYgJgwQgMhGgkgwIqnAAQgkAwgNBGQgIAvAABZQAABZAIAvQANBHAkAwg");
	this.shape_4.setTransform(0.0169,0.0123,3.1758,3.1783);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2E5E1").s().p("AlTD/QgkgwgNhHQgIgvAAhZQAAhZAIgvQANhGAkgwIKnAAQAkAwAMBGQAJAwAABYQAABZgJAvQgMBHgkAwg");
	this.shape_5.setTransform(0.0169,0.0123,3.1758,3.1783);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roShaftPoles, rect = new cjs.Rectangle(-127,-136,254,272), [rect]);


(lib.phiRo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgTAAQgHAVgFANIgCAFQgDAEAEAFQACAEAGAAIAxAAQAGAAADgEQADgFgDgFQgIgRgGgVQgHgXgDgTQgBgJgJAAQgCAAgDACQgDADgBAEQgDATgHAXg");
	this.shape.setTransform(-0.0258,-121.3829,3.1738,3.1765);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADE7").s().p("AgYA0QgGAAgCgEQgEgFADgEIACgFIAMgiQAHgXADgTQABgEADgDQADgCACAAQAJAAABAJQADATAHAXQAGAVAIARQADAFgDAFQgDAEgGAAg");
	this.shape_1.setTransform(-0.0258,-121.3829,3.1738,3.1765);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgJmNIAAMMQAAAEADADQADADADAAQAEAAADgDQADgDAAgEIAAsM");
	this.shape_2.setTransform(-0.0037,13.1077,3.1732,3.176);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("AgGGIQgDgDAAgEIAAsLIATAAIAAMLQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(-0.0037,12.3137,3.1732,3.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.phiRo, rect = new cjs.Rectangle(-12.2,-139,24.5,277.9), [rect]);


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
	this.shape.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAoAoIhPhP");
	this.shape.setTransform(-0.1225,0.0611,3.1743,3.1781);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAognIhPBP");
	this.shape_1.setTransform(-0.1225,0.0611,3.1743,3.1781);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("Ag4AAQAAgWARgRQARgRAWAAQAXAAARARQARARAAAWQAAAXgRARQgRARgXAAQgXAAgQgRQgRgRAAgXg");
	this.shape_2.setTransform(-0.0432,-0.0184,3.1743,3.1781);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("AgnAoQgRgRAAgXQAAgWARgRQARgQAWgBQAXABARAQQARAQAAAXQAAAXgRARQgRAQgXABQgXgBgQgQg");
	this.shape_3.setTransform(-0.0432,-0.0184,3.1743,3.1781);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ifp, rect = new cjs.Rectangle(-19,-18.9,38,37.9), [rect]);


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
	this.shape.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AgLgGQADgFAFgCQAFgBAFADQAFADACAFQABAFgDAFQgDAFgFACQgFABgFgDQgFgDgCgFQgBgFADgFg");
	this.shape.setTransform(0.0003,0.0611,3.1743,3.1781);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgGAMQgFgDgCgFQgBgFADgFQADgFAFgCQAFgBAFADQAFADACAFQABAFgDAFQgDAFgFACIgEAAQgDAAgDgCg");
	this.shape_1.setTransform(0.0003,0.0611,3.1743,3.1781);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AgwgbQAMgUAWgHQAWgFAUALQAVAMAGAWQAGAWgMAUQgMAUgWAHQgWAFgUgLQgVgLgGgXQgGgWAMgUg");
	this.shape_2.setTransform(-0.0193,-0.0307,3.174,3.1779);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("AgbAxQgVgLgGgXQgGgWAMgUQAMgUAWgGQAWgHAUAMQAVAMAGAWQAGAWgMAVQgMATgWAHQgIACgHAAQgOAAgNgIg");
	this.shape_3.setTransform(-0.0193,-0.0307,3.174,3.1779);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ifm, rect = new cjs.Rectangle(-19,-19,38.1,38), [rect]);


(lib.VecXSIS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#EC6A20").ss(2,1,1).p("AgUAEQgIAZgVA3IBjAAQgOgegPgyQgRgzgEgkQgDAkgRAzg");
	this.shape.setTransform(-0.0649,-111.0977,1.0599,1.0581);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6A20").s().p("AgxBUQAWg3AIgZQAPgzAEgkQAEAkAQAzQAQAzAOAdg");
	this.shape_1.setTransform(-0.0649,-111.0977,1.0599,1.0581);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EC6A20").ss(2.1,1,1).p("AAAI3IAAxt");
	this.shape_2.setTransform(-0.0814,-60.0695,1.0598,1.058);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VecXSIS, rect = new cjs.Rectangle(-6.3,-121.1,12.6,122.1), [rect]);


(lib.VecUS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#25A740").ss(2,1,1).p("AgUAEQgIAagVA2IBkAAQgQgggOgwQgRg2gEghQgFAngPAwg");
	this.shape.setTransform(-0.0334,-111.0724,0.99,1.0594);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25A740").s().p("AgxBUQAVg2AIgbQAPgvAFgoQAEAiARA1QAOAxAPAgg");
	this.shape_1.setTransform(-0.0334,-111.0724,0.99,1.0594);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#25A740").ss(2.1,1,1).p("AAAI2IAAxr");
	this.shape_2.setTransform(-0.0334,-60.0357,0.99,1.0594);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VecUS, rect = new cjs.Rectangle(-6,-121,12,122.1), [rect]);


(lib.VecUP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#00ADE7").ss(2,1,1).p("AgUAEQgIAagVA2IBjAAQgOgegPgyQgQgzgFgkQgFAngPAwg");
	this.shape.setTransform(-0.0399,-111.1004,0.9949,1.0593);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADE7").s().p("AgxBUQAVg2AIgbQAPgvAFgoQAFAlAQAyQAPAzAOAeg");
	this.shape_1.setTransform(-0.0399,-111.1004,0.9949,1.0593);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00ADE7").ss(2.1,1,1).p("AAAI2IAAxr");
	this.shape_2.setTransform(-0.0341,-60.0899,0.9949,1.0593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.VecUP, rect = new cjs.Rectangle(-6,-121.1,12,122.1), [rect]);


(lib.ESB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#EC6A20").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape.setTransform(-86.8901,-58.9302,1.824,1.8285);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6A20").s().p("AgEAtIgJgDIgIgCIgCABIgBAEIgDAAIAAgdIADAAQABAJADAFQADAEAGADQAFADAGAAQAIAAAFgEQAEgEAAgGQAAgDgBgDQgCgEgEgCIgMgJIgQgIQgFgEgCgFQgDgEAAgGQAAgJAIgHQAHgGALAAQAGAAAHADIAFACIADgBIACgEIACAAIAAAeIgCAAQgBgJgDgFQgDgFgGgDQgFgDgFAAQgHAAgEAEQgEAEAAAFQAAAEACADQAEAFAOAIIARAJQAEAEACAEQADAFAAAFQAAAKgIAHQgHAHgMAAIgGAAg");
	this.shape_1.setTransform(-77.775,-64.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC6A20").s().p("AgrBDIABgEIALgCQAEgBACgDQADgEAEgMIAWhQQADgKAAgFIgBgEIgEgDIgJgBIABgEIAzAAIgCAEQgGAAgDACQgEABgCAEQgDAEgEAMIgVBQIgEANQAAABAAABQAAAAAAABQABAAAAABQAAAAAAABQACABACABIAKACIgBAEg");
	this.shape_2.setTransform(-84.3,-68.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#EC6A20").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_3.setTransform(8.7806,-74.5635,1.824,1.8285);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC6A20").s().p("AgEAtIgJgDIgIgCIgCABIgBAEIgDAAIAAgdIADAAQABAJADAFQADAEAGADQAFADAGAAQAIAAAFgEQAEgEAAgGQAAgDgBgDQgCgEgEgCIgMgJIgQgIQgFgEgCgFQgDgEAAgGQAAgJAIgHQAHgGALAAQAGAAAHADIAFACIADgBIACgEIACAAIAAAeIgCAAQgBgJgDgFQgDgFgGgDQgFgDgFAAQgHAAgEAEQgEAEAAAFQAAAEACADQAEAFAOAIIARAJQAEAEACAEQADAFAAAFQAAAKgIAHQgHAHgMAAIgGAAg");
	this.shape_4.setTransform(16.525,-79.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC6A20").s().p("AgrBCIABgDIALgBQAFgCACgDQADgFADgMIAWhPQADgKAAgFIgBgFIgEgCIgJgBIABgEIAzAAIgCAEQgGAAgDACQgEACgCADQgDADgEANIgWBPIgDAPQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQABACADACIALABIgBADg");
	this.shape_5.setTransform(10,-83.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC6A20").s().p("AgEAtIgJgDIgIgCIgCABIgBAEIgDAAIAAgdIADAAQABAJADAFQADAEAGADQAFADAGAAQAIAAAFgEQAEgEAAgGQAAgDgBgDQgCgEgEgCIgMgJIgQgIQgFgEgCgFQgDgEAAgGQAAgJAIgHQAHgGALAAQAGAAAHADIAFACIADgBIACgEIACAAIAAAeIgCAAQgBgJgDgFQgDgFgGgDQgFgDgFAAQgHAAgEAEQgEAEAAAFQAAAEACADQAEAFAOAIIARAJQAEAEACAEQADAFAAAFQAAAKgIAHQgHAHgMAAIgGAAg");
	this.shape_6.setTransform(-0.925,-79.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC6A20").s().p("AgHBCIABgDQAIgBADgCQADgCAAgDIgDgNIgIghIgfAfIgLANIgBADQAAADADACIAIACIAAADIgtAAIABgDQAJgBAFgDQAIgFANgOIAmgmIgKglQgEgSgEgFQgEgEgIAAIABgEIAuAAIgBAEQgHAAgCABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIADALIAIAhIAUgVQAMgMAFgHIACgGQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgIAAIABgEIAtAAIgBAEQgJACgHAEQgIAEgMANIgiAjIAJAjIAGAQIAEAJQADADADACQADABAIABIgBADg");
	this.shape_7.setTransform(-10.05,-83.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC6A20").s().p("AgWBYQgEgDAAgDQAAgEACgCQADgDADAAIAFACIAHAFQAEAEACAAIAFgCQACgCABgEQACgEAAgPIAAg/QAAgOgBgFIgDgEIgEgBIgFABIgCgDIAagLIAFAAIAABZQAAAXgKALQgKAMgPAAQgJAAgEgEgAAKhJQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_8.setTransform(-22.375,-82.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00ADE7").ss(0.5,1,1).p("AgcAAIA5AA");
	this.shape_9.setTransform(127.8678,24.5505,1.824,1.8285);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#25A740").ss(0.5,1,1).p("AgbAAIA3AA");
	this.shape_10.setTransform(-136.3071,23.1677,1.824,1.8285);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#EC6A20").ss(1,1,1).p("AgBgJQgCgBgngOIAAAxQAPgHAagIQAYgHAUgDQgOgBgegIg");
	this.shape_11.setTransform(-81.004,-51.0417,1.8243,1.8286);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC6A20").s().p("AgpgYIAoAPQAeAIANABQgTADgYAHQgaAIgOAHg");
	this.shape_12.setTransform(-81.004,-51.0417,1.8243,1.8286);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00ADE7").ss(1,1,1).p("AAKgBQACgHANghIgxAAQAGALAJAdQAHAYACATQACgNAIgeg");
	this.shape_13.setTransform(116.2891,70.4217,1.8238,1.8284);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00ADE7").s().p("AgJgBQgJgdgGgLIAxAAIgPAoQgIAegCANQgCgTgHgYg");
	this.shape_14.setTransform(116.2891,70.4217,1.8238,1.8284);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#00ADE7").ss(1,1,1).p("AAAkVIAAIr");
	this.shape_15.setTransform(116.2903,14.8919,1.8237,1.8282);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#25A740").ss(1,1,1).p("AAKgBQAEgNALgbIgxAAQAHAQAHAYQAIAYACATQADgTAHgYg");
	this.shape_16.setTransform(-116.2046,70.4217,1.8238,1.8284);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#25A740").s().p("AgKgBQgHgYgHgQIAxAAIgOAoQgIAYgDATQgCgTgIgYg");
	this.shape_17.setTransform(-116.2046,70.4217,1.8238,1.8284);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#25A740").ss(1,1,1).p("AAAkVIAAIr");
	this.shape_18.setTransform(-116.2314,14.8919,1.8237,1.8282);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#EC6A20").ss(1,1,1).p("AgBgJQgOgFgbgKIAAAxQAYgJARgFQAZgIATgDQgTgBgZgIg");
	this.shape_19.setTransform(44.4755,-67.2533,1.8238,1.8284);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EC6A20").s().p("AgpgYQAaAKAOAFQAZAIASABQgSADgZAIIgoAOg");
	this.shape_20.setTransform(44.4755,-67.2533,1.8238,1.8284);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#EC6A20").ss(1,1,1).p("AjuAAIHeAA");
	this.shape_21.setTransform(-3.8915,-67.2851,1.8237,1.8282);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#2B2B2A").ss(1,1,2).p("ACqA5IAAhxIlTAAIAABxg");
	this.shape_22.setTransform(-6.0268,-51.0417,1.8243,1.8286);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2B2B2A").s().p("AipA5IAAhxIFTAAIAABxg");
	this.shape_23.setTransform(-6.0268,-51.0417,1.8243,1.8286);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2B2B2A").s().p("AgEAtIgJgDIgIgCIgCABIgBAEIgDAAIAAgdIADAAQABAJADAFQADAEAGADQAFADAGAAQAIAAAFgEQAEgEAAgGQAAgDgBgDQgCgEgEgCIgMgJIgQgIQgFgEgCgFQgDgEAAgGQAAgJAIgHQAHgGALAAQAGAAAHADIAFACIADgBIACgEIACAAIAAAeIgCAAQgBgJgDgFQgDgFgGgDQgFgDgFAAQgHAAgEAEQgEAEAAAFQAAAEACADQAEAFAOAIIARAJQAEAEACAEQADAFAAAFQAAAKgIAHQgHAHgMAAIgGAAg");
	this.shape_24.setTransform(5.625,-23.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B2B2A").s().p("AgHBCIABgDQAIgBAEgCQACgCAAgDIgCgNIgJghIgfAfIgLANIgBADQAAADADACIAIACIgBADIgsAAIABgDQAIgBAGgDQAIgFANgOIAmgmIgKglQgFgSgDgFQgEgEgIAAIAAgEIAvAAIgCAEQgGAAgCABQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQAAABAAAAIADALIAIAhIAUgVQAMgMAFgHIACgGQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgDgCgHAAIABgEIAtAAIgBAEQgJACgIAEQgGAEgNANIgjAjIAKAjIAGAQIAEAJQACADAEACQAEABAHABIgBADg");
	this.shape_25.setTransform(-3.55,-27.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2B2B2A").s().p("AgWBYQgEgDAAgDQAAgEACgCQADgDADAAIAFACIAHAFQAEAEACAAIAFgCQACgCABgEQACgEAAgPIAAg/QAAgOgBgFIgDgEIgEgBIgFABIgCgDIAagLIAFAAIAABZQAAAXgKALQgKAMgPAAQgJAAgEgEgAAKhJQgDgDAAgEQAAgFADgDQADgDAEAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_26.setTransform(-15.875,-25.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAAAcQAMAAAIgIQAIgJAAgLQAAgLgIgIQgIgJgMAAQgLAAgIAJQgIAIAAALQAAALAIAJQAIAIALAAg");
	this.shape_27.setTransform(-116.0299,-51.636,1.8243,1.8286);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgIAKAAQALAAAJAIQAIAJAAAKQAAALgIAJQgJAIgLAAQgKAAgJgIg");
	this.shape_28.setTransform(-116.0299,-51.636,1.8243,1.8286);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#25A740").s().p("AgEAtIgJgDIgIgCIgCABIgBAEIgDAAIAAgdIADAAQABAJADAFQADAEAGADQAFADAGAAQAIAAAFgEQAEgEAAgGQAAgDgBgDQgCgEgEgCIgMgJIgQgIQgFgEgCgFQgDgEAAgGQAAgJAIgHQAHgGALAAQAGAAAHADIAFACIADgBIACgEIACAAIAAAeIgCAAQgBgJgDgFQgDgFgGgDQgFgDgFAAQgHAAgEAEQgEAEAAAFQAAAEACADQAEAFAOAIIARAJQAEAEACAEQADAFAAAFQAAAKgIAHQgHAHgMAAIgGAAg");
	this.shape_29.setTransform(-124.425,18.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#25A740").s().p("Ag6A5QgMgLAAgQIABgMIAEgPIANgsQACgKABgEQgBgEgCgCQgDgCgLAAIABgEIA4AAIgBAEQgJgBgDACQgEACgDADQgDAEgCAJIgOAuIgEARIgCAMQABAMAIAIQAJAIAPAAQAKAAAHgEQAHgDAFgHQAGgGAFgMIAHgWIAMgoQAFgPgBgFQAAgEgCgCQgEgCgIAAIABgEIAqAAIgCAEQgGgBgEACQgDACgDADQgCADgDALIgPAxQgGAXgGAMQgHALgLAJQgLAHgRAAQgVAAgMgLg");
	this.shape_30.setTransform(-132.75,14.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00ADE7").s().p("AggArIAAgCIADAAQAGAAACgEQABgCAAgHIAAg3QAAgIgBgCQgDgDgFAAIgDAAIAAgCIAgAAQALAAAGACQAHACAEAGQAFAGAAAIQAAAKgHAHQgHAGgNAAIgGgBIgIgBIAAAZQAAAIADACQACADAEAAIADAAIAAACgAgIgkIAAAkIAHAAIADAAQAHAAAFgEQAEgFAAgIQAAgGgCgFQgCgEgFgDQgEgCgFAAIgIABg");
	this.shape_31.setTransform(139.3,19.475);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00ADE7").s().p("Ag6A5QgMgMAAgOIABgNIAEgOIANgtQADgJgBgGQABgDgDgCQgDgCgLgBIABgDIA4AAIgBADQgJABgEABQgDABgDAEQgCAEgDAJIgOAvIgEAQIgBAMQAAAMAJAIQAIAIAPAAQAKAAAHgDQAHgEAGgHQAFgGAFgMIAIgWIALgpQAFgPgBgEQAAgEgDgBQgDgDgIgBIABgDIAqAAIgCADQgGABgEABQgDABgCAEQgDAEgDALIgPAvQgHAZgGALQgGAMgMAHQgLAIgQAAQgVAAgMgLg");
	this.shape_32.setTransform(131.15,15.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAAAcQAMAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgMAAQgLAAgIAIQgIAIAAALQAAAMAIAIQAIAIALAAg");
	this.shape_33.setTransform(-117.0789,93.8759,1.8243,1.8286);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_34.setTransform(-117.0789,93.8759,1.8243,1.8286);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#2B2B2A").ss(1,1,2).p("AodmLIQ7AAIAAMXIw7AA");
	this.shape_35.setTransform(-18.1125,21.3714,1.8243,1.8286);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#2B2B2A").ss(1,1,2).p("ACOAAQAAA7gqApQgpAqg7AAQg6AAgpgqQgqgpAAg7QAAg6AqgpQApgqA6AAQA7AAApAqQAqApAAA6g");
	this.shape_36.setTransform(80.8538,20.9142,1.8243,1.8286);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhjBkQgqgpAAg7QAAg6AqgpQApgqA6AAQA7AAApAqQAqApAAA6QAAA7gqApQgpAqg7AAQg6AAgpgqg");
	this.shape_37.setTransform(80.8538,20.9142,1.8243,1.8286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ESB, rect = new cjs.Rectangle(-146,-99,292,199.1), [rect]);


(lib.SliderBarP = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f("#737372").s().p("Av8AcIAAg3If4AAIAAA3g");
	this.shape.setTransform(0.0217,-0.0169,0.9535,0.881);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AQZAcQAAAMgIAIQgJAJgLAAI/4AAQgMAAgIgJQgJgIAAgMIAAg3QAAgMAJgIQAIgJAMAAIf4AAQALAAAJAJQAIAIAAAMg");
	this.shape_1.setTransform(-0.0021,-0.0169,0.9535,0.881);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#92D4F6","#8ED3F6","#81CEF4","#67C5F1","#36BAED","#00ADE7"],[0,0.235,0.443,0.643,0.831,1],-104.8,0,104.9,0).s().p("Av7A5QgMAAgIgJQgJgIAAgMIAAg3QAAgMAJgIQAIgJAMAAIf4AAQALAAAJAJQAIAIAAAMIAAA3QAAAMgIAIQgJAJgLAAg");
	this.shape_2.setTransform(-0.0021,-0.0169,0.9535,0.881);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderBarP, rect = new cjs.Rectangle(-101,-6,202,12), [rect]);


(lib.SliderBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f("#737372").s().p("Av8AcIAAg3If5AAIAAA3g");
	this.shape.setTransform(0.0134,0.0061,0.9535,0.8833);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AQZAcQAAAMgIAIQgJAJgLAAI/4AAQgMAAgIgJQgJgIAAgMIAAg3QAAgMAJgIQAIgJAMAAIf4AAQALAAAJAJQAIAIAAAMg");
	this.shape_1.setTransform(-0.0104,0.0061,0.9535,0.8833);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#92D4F6","#76CAF3","#00B1E9","#00ADE7"],[0,0.298,0.91,1],0,0,0,0,0,74.3).s().p("Av7A5QgMAAgIgJQgJgIAAgMIAAg3QAAgMAJgIQAIgJAMAAIf4AAQALAAAJAJQAIAIAAAMIAAA3QAAAMgIAIQgJAJgLAAg");
	this.shape_2.setTransform(-0.0104,0.0061,0.9535,0.8833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderBar, rect = new cjs.Rectangle(-101,-6,202,12), [rect]);


(lib.Slider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AArBjQAAAOgNAKQgMAJgSAAQgRAAgMgJQgNgKAAgOIAAjFQAAgOANgKQAMgJARAAQASAAAMAJQANAKAAAOg");
	this.shape.setTransform(0.0052,-0.0043,0.9417,0.9073);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#DBF0FD","#B1DDF8","#83CCF3","#52BEEE","#08B4EA","#00AFE8","#00ADE7"],[0,0.169,0.353,0.529,0.702,0.863,1],0,0,0,0,0,12.4).s().p("AgdB7QgNgKAAgOIAAjFQAAgOANgKQANgJAQAAQASAAAMAJQANAKAAAOIAADFQAAAOgNAKQgMAJgSAAQgQAAgNgJg");
	this.shape_1.setTransform(0.0052,-0.0043,0.9417,0.9073);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slider, rect = new cjs.Rectangle(-5,-13,10,26), [rect]);


(lib.FrameUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#E63F24").ss(2.1,0,0,4).p("AhxAcQAAAkAZAYQAZAZAkAAIA3AAQAkAAAYgZQAZgYAAgkIAAg3QAAgjgZgZQgYgZgkAAIg3AAQgkAAgZAZQgZAZAAAjg");
	this.shape.setTransform(0.0327,0.0109,0.6586,0.6622);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FrameUp, rect = new cjs.Rectangle(-8.5,-8.5,17.1,18.1), [rect]);


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


(lib.BtnUp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f().s("#2B2B2A").ss(1.4,1,1).p("Ag4A5IA4hxIA5BxIg5gdg");
	this.shape.setTransform(0.0455,0.0109,0.66,0.6622);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AAAAcIg4AdIA4hxIA5Bxg");
	this.shape_1.setTransform(0.0455,0.0109,0.66,0.6622);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AhwAcQAAAkAZAYQAZAZAjAAIA3AAQAkAAAYgZQAZgYAAgkIAAg3QAAgjgZgZQgYgZgkAAIg3AAQgjAAgZAZQgZAZAAAjg");
	this.shape_2.setTransform(0.0455,0.0109,0.66,0.6622);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6CA19").s().p("AgbBxQgjAAgZgZQgZgYAAgkIAAg3QAAgjAZgZQAZgZAjAAIA3AAQAkAAAYAZQAZAZAAAjIAAA3QAAAkgZAYQgYAZgkAAg");
	this.shape_3.setTransform(0.0455,0.0109,0.66,0.6622);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BtnUp, rect = new cjs.Rectangle(-8.4,-8.5,17,17), [rect]);


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


(lib.phiSt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.PhiStN();
	this.instance.setTransform(0,180.65,1,1,0,0,0,0,39.1);

	this.instance_1 = new lib.PhiStS();
	this.instance_1.setTransform(0,-179.25,1,1,0,0,0,0,-40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.phiSt, rect = new cjs.Rectangle(-11.2,-219.9,22.5,440), [rect]);


(lib.bckGrndTTZ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
	this.shape.graphics.f("#000000").s().p("AgXAkIABgGQACgFAEgEQAEgGAIgFQAKgKAEgFQAEgFAAgFQAAgFgDgEQgEgEgGAAQgFAAgEAEQgEAEAAAHIgJgBQABgKAGgGQAGgFAJAAQAKAAAGAGQAGAGAAAIQAAAEgBAFIgGAHQgEAFgKAIIgJAJIgEAFIAjAAIAAAIg");
	this.shape.setTransform(196.275,589.6);

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
	this.shape_5.graphics.f("#000000").s().p("AgMAjQAAgIADgMQADgMAGgKQAFgLAHgIIgiAAIAAgIIAtAAIAAAGQgHAIgGAMQgHALgDANQgCAJgBAKg");
	this.shape_5.setTransform(171.375,589.675);

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

}).prototype = getMCSymbolPrototype(lib.bckGrndTTZ, rect = new cjs.Rectangle(0,0,850,600), [rect]);


// stage content:
(lib.animateSMGrid = function(mode,startPosition,loop,reversed) {
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
		// animateSMGrid.fla
		////////////////////////////////////////////////////////////////////////
		// global declarations
		var c, // CreateJS-bib
			r, // Device Pixel Ratio
			w, h; // width, height
		var root = this;
		var backGround, // reference to all the static stuff
			header, // title
			game; // it's just a kind of game...
		var inGame = false; // game stopped
		const titGen = "synchronous generator", titMot = "synchronous motor";
		const centerX = 275, centerY = 300, rRe = 165; // rotor center + outer radius
		const xSmin = 1.05, xSmax = 1.5, xSdel = 0.05; // range for xS
		var phBaseX, phBaseY;
		var uXn = 1.3,
			uSn = 1,
			uPn = 2.0; // nominal voltages
		var psi = 0.0; // arc (I_S -> U_P)
		var phNom = 160; // phasor nominal length = 1 p.u.
		const W32 = Math.sqrt(3.0) / 2.0;
		const rad2deg = 180.0 / Math.PI;
		const posWdgs = [ // positions for coil-sides:
			[
				[centerX, centerY - rRe], // U1
				[centerX, centerY + rRe] // U2
			],
			[
				[centerX + W32 * rRe, centerY + rRe / 2], // V1
				[centerX - W32 * rRe, centerY - rRe / 2] // V2
			],
			[
				[centerX - W32 * rRe, centerY + rRe / 2], // W1
				[centerX + W32 * rRe, centerY - rRe / 2] // W2
			]
		];
		var current = []; // objects for U1, V1, W1, U2, V2, W2
		const base = 245 - 3, offset = 36 + 3, lft = 176 + 4, rgt = 374 - 4;
		var posFldWdgs = [
			[lft, base],
			[lft, base + offset],
			[lft, base + 2 * offset],
			[lft, base + 3 * offset],
			[rgt, base],
			[rgt, base + offset],
			[rgt, base + 2 * offset],
			[rgt, base + 3 * offset]
		];
		var fldCurrent = []; // objects for 1F1, 1F2, 2F1, ... 4F1, 4F2,  
		var vecUS, vecUP, vecXSIS; // objects for phasor-diagram
		var roShaft, phiRo, phiSt;
		var sliderBarField, sliderBarTorque, sliderField, sliderTorque, txtSpeed, txtTorque;
		var infoXS, infoParam;
		var state = { // state-values
			theta: 0.0,
			thetaL: 0.0,
			speed: 1.0,
			psi: 0.0,
			torque: 1.0, // inner torque
			iS: 1.0,
			torqueNom: 1.0 // constant(!) nominal torque (i=1, uSn=1, uPn=2.0), =f(uXn)
		};
		
		// stuff for start&stop, direction of speed&torque
		var startBtn, stopBtn, touch; // speedCW, speedCCW, torqCW, torqCCW, 
		const DEBUG = false, DEBUG1 = false, DEBUG2 = false;
		
		
		function init() {
			c = createjs;
			r = window.devicePixelRatio;
			w = 850; //stage.canvas.width / r;
			h = 600; // stage.canvas.height / r;
			phBaseX = w - 160; // = 690
			phBaseY = h - 180; // = 420
			// TTZ-Logos & static stuff
			backGround = new c.Container();
			stage.addChild(backGround);
			// dynamic stuff
			game = new c.Container();
			stage.addChild(game);
		
			if (DEBUG2) console.log("stage.canvas.width: " + stage.canvas.width.toFixed(3) +
				", stage.canvas.height: " + stage.canvas.height.toFixed(0));
			if (DEBUG2) console.log("r: " + r.toFixed(3) + ", w: " + w.toFixed(0) +
				", h: " + h.toFixed(0));
			if (DEBUG2) console.log("phBaseX: " + phBaseX + ", phBaseY: " + phBaseY);
		
			createBackground();
			createSlotAT();
			createRotorAT();
			createTouchControl();
			createPhasorDiag();
		
			c.Ticker.addEventListener("tick", gameCore);
			stage.enableMouseOver(30);
		
			initStartStop();
			initUpDn();
			initSlider();
		
			function initSlider() {
				sliderField.addEventListener("pressmove", function (e) {
					// update GUI, uPn & vecUP.scale => updatePhasors
					let p = stage.globalToLocal(e.stageX, e.stageY);
					sliderField.x = limitIt(p.x, sliderBarField.x - sliderBarField.nominalBounds.width / 2,
						sliderBarField.x + sliderBarField.nominalBounds.width / 2)
					txtField.x = sliderField.x;
					uPn = 1.0 + (2.0 * (sliderField.x - sliderBarField.x) / sliderBarField.nominalBounds.width);
					if (uPn < Math.abs(state.torque * state.torqueNom)) uPn = Math.abs(state.torque * state.torqueNom);
					txtField.text = uPn.toFixed(2);
					for (let phase = 0; phase < 8; phase++) {
						fldCurrent[phase].scale = Math.sqrt(uPn / 2.0);
					}
					vecUP.scale = uPn * phNom;
					updatePhasors();
				});
				sliderTorque.addEventListener("pressmove", function (e) {
					// update GUI & state.torque => updatePhasors
					let p = stage.globalToLocal(e.stageX, e.stageY);
					sliderTorque.x = limitIt(p.x, sliderBarTorque.x - sliderBarTorque.nominalBounds.width / 2,
						sliderBarTorque.x + sliderBarTorque.nominalBounds.width / 2)
					txtTorque.x = sliderTorque.x;
					state.torque = (2 * (sliderTorque.x - sliderBarTorque.x) / sliderBarTorque.nominalBounds.width);
					if (Math.abs(state.torque * state.torqueNom) > uPn) {
						state.torque = (state.torque > 0 ? 0.999999*uPn/state.torqueNom : -0.99999*uPn/state.torqueNom)
					}
					txtTorque.text = state.torque.toFixed(2);
					if (state.speed * state.torque < 0) { // generator
						header.text = titGen;
					} else {
						header.text = titMot;
					}
					updatePhasors();
					if (DEBUG2) console.log("pressmove: sliderBarTorque.x: " + sliderBarTorque.x.toFixed(0) +
						", e.localX: " + e.localX.toFixed(0) +
						", e.stageX: " + e.stageX.toFixed(0) +
						", sliderTorque.x: " + sliderTorque.x.toFixed(0));
				});
			}
			function updatePhasors() {
				// direction of phasor u_P
				state.thetaL = Math.asin(state.torque * state.torqueNom / uPn) * rad2deg;
				vecUP.rotation = state.thetaL;
				let vecUPlength = vecUP.nominalBounds.height * vecUP.scale * 0.99;
				// tip of u_P is base of j*XS*IS:
				vecXSIS.x = vecUP.x + vecUPlength * Math.sin(state.thetaL / rad2deg);
				vecXSIS.y = vecUP.y - vecUPlength * Math.cos(state.thetaL / rad2deg);
				// length of j*XS*IS:
				let uX = Math.sqrt(1 + uPn*uPn - 2*uPn*Math.cos(state.thetaL / rad2deg));
				vecXSIS.scale = uX * phNom;
				state.iS = uX/uXn;
				// direction of j*XS*IS:
				let phi = Math.acos(Math.abs(state.torque)*state.torqueNom / uX) * rad2deg; // = -90°...+90°
				if (state.torque > 0){	// motor
					if (uPn*Math.cos(state.thetaL / rad2deg) < 1.0){	// underexc. mot.
						vecXSIS.rotation = -90.0 + phi; 
						state.psi = 180.0 -state.thetaL + phi;
					} else {	// overexc. mot.
						vecXSIS.rotation = -90.0 - phi; 
						state.psi = 180.0 -state.thetaL - phi;
					}
				} else {	// generator
					if (uPn*Math.cos(state.thetaL / rad2deg) < 1.0){	// underexc. gen.
						vecXSIS.rotation = +90.0 - phi; 
						state.psi = -state.thetaL - phi;
					} else {	// overexc. gen.
						vecXSIS.rotation = +90.0 + phi; 
						state.psi = -state.thetaL + phi;
					}
				}
				//root.infoParam.text = "thetaL = " + state.thetaL.toFixed(1) + "; phi = " + phi.toFixed(1)
				//		+ "; psi = " + state.psi.toFixed(1);
				infoParam.text = "uS = " + uSn.toFixed(2) + "; iS = " + state.iS.toFixed(2) + 
					"; xS = " + (Math.abs(state.speed) * uXn).toFixed(2) + "; uP = " + uPn.toFixed(2);
				//console.log("updatePhasors: infoParam.text: " + infoParam.text);
			}
			function limitTorque(mLimit) {
				state.torque = mLimit;
				txtTorque.text = state.torque.toFixed(2);
				sliderTorque.x = state.torque * sliderBarTorque.nominalBounds.width / 2 + sliderBarTorque.x;
				txtTorque.x = sliderTorque.x;
			}
			function limitIt(value, min, max) {
				if (DEBUG2) console.log("limitIt: value: " + value + ", min: " + min + ", max: " + max);
				if (value < min)
					return min;
				else if (value > max)
					return max;
				else
					return value;
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
			function initUpDn() { // event-listener start/stop
				infoXS = new c.Text(uXn.toFixed(2), "normal 12px Arial", "#000000");
				infoXS.textAlign = "center";
				infoXS.x = 709;
				infoXS.y = 92;
				infoXS.width = 50;
				game.addChild(infoXS);
				infoParam = new c.Text("tmp", "normal 12px Arial", "#000000");
				infoParam.textAlign = "left";
				infoParam.x = 615;
				infoParam.y = 5;
				infoParam.width = 235;
				game.addChild(infoParam);
				infoParam.text = "uS = " + uSn.toFixed(2) + "; iS = " + state.iS.toFixed(2) + 
					"; xS = " + (Math.abs(state.speed) * uXn).toFixed(2) + "; uP = " + uPn.toFixed(2);
				// Down-Button
				dnBtn.addEventListener("mousedown", function (event) {
					uXn = (uXn < xSmin + xSdel / 10 ? xSmin : uXn - xSdel);
					resetGUI();
				});
				dnBtn.addEventListener("mouseover", function (event) {
					dnFrame.visible = true;
				});
				dnBtn.addEventListener("mouseout", function (event) {
					dnFrame.visible = false;
				});
				// Up-Button
				upBtn.addEventListener("mousedown", function (event) {
					uXn = (uXn > xSmax - xSdel / 10 ? xSmax : uXn + xSdel);
					resetGUI();
				});
				upBtn.addEventListener("mouseover", function (event) {
					upFrame.visible = true;
				});
				upBtn.addEventListener("mouseout", function (event) {
					upFrame.visible = false;
				});
				// default-values
				// uXn = 1.30;
				// root.infoXS.text = uXn.toFixed(2);
		
				function resetGUI() {
					stopTheGame();
					infoXS.text = uXn.toFixed(2);
					uPn = 2.0;
					// reset sliders to max
					txtField.x = sliderBarField.x + sliderBarField.nominalBounds.width / 2;
					txtField.text = "2.0";
					sliderField.x = txtField.x;
					txtTorque.x = sliderBarTorque.x - sliderBarTorque.nominalBounds.width / 2;
					txtTorque.text = "-1.00";
					sliderTorque.x = txtTorque.x;
		
					state.thetaL = Math.acos((uSn * uSn + uPn * uPn - uXn * uXn) / (2 * uSn * uPn)) * rad2deg; // > 0: generator!
					state.torqueNom = uPn * Math.sin(state.thetaL / rad2deg); // > 0: reference value
					let phi = Math.acos(state.torqueNom / uXn) * rad2deg; // = -90°...+90°
		
					// reset vecUP
					vecUP.scale = uPn * phNom;
					vecUP.rotation = -state.thetaL;
		
					// reset vecXSIS
					let vecUPlength = vecUP.nominalBounds.height * vecUP.scale * 0.99;
					vecXSIS.x = vecUP.x - vecUPlength * Math.sin(state.thetaL / rad2deg);
					vecXSIS.y = vecUP.y - vecUPlength * Math.cos(state.thetaL / rad2deg);
					vecXSIS.scale = uXn * phNom;
					vecXSIS.rotation = +90.0 + phi;
		
					state.psi = state.thetaL + phi; // same as in createPhasorDiag(){..}, 13.09.2022
					//state.psi = 180.0 - state.thetaL - phi;
					state.theta = state.thetaL - state.speed;
					rotateArmature();
					setSlotAT(state.psi);
					let uX = Math.sqrt(1 + uPn*uPn - 2*uPn*Math.cos(state.thetaL / rad2deg));
					state.iS = uX/uXn;
					infoParam.text = "uS = " + uSn.toFixed(2) + "; iS = " + state.iS.toFixed(2) + 
					"; xS = " + (Math.abs(state.speed) * uXn).toFixed(2) + "; uP = " + uPn.toFixed(2);
				}
		
			}
		}
		
		function stopTheGame() { // workaround for debugging
			stopBtn.visible = false;
			startBtn.visible = true;
			inGame = false;
		}
		
		function gameCore(event) { // infinite loop
			if (inGame) {
				rotateArmature();
				setSlotAT(state.psi); // psi = f(speed)
			}
		}
		
		function createTouchControl() { // button- & slider-stuff
			touch = new c.Container();
			stage.addChild(touch);
			let BTN_SCALE = 1.2;
		
			createStartStop();
			createSlider();
			createUpDn();
		
			function createSlider() { // 2 sliders
		
				// 1. slider for field-current:
				sliderBarField = new lib.SliderBarP();
				sliderField = new lib.Slider();
				sliderBarField.x = sliderField.x = phBaseX;
				sliderBarField.y = sliderField.y = stopBtn.y;
				touch.addChild(sliderBarField);
				touch.addChild(sliderField);
				txtField = new c.Text("2.00", "normal 10px Arial", "#000000");
				txtField.textAlign = "center";
				txtField.x = sliderBarField.x + sliderBarField.nominalBounds.width / 2;
				sliderField.x = txtField.x;
				txtField.y = sliderField.y - 23;
				txtField.width = 40;
				touch.addChild(txtField);
				let labelFld = new c.Text("field (p.u.):", "normal 16px Arial", "#000000");
				labelFld.textAlign = "left";
				labelFld.x = phBaseX - 210;
				labelFld.y = sliderBarField.y - 9;
				labelFld.width = 50;
				backGround.addChild(labelFld);
		
				// 2. slider for torque:
				sliderBarTorque = new lib.SliderBar();
				sliderTorque = new lib.Slider();
				sliderBarTorque.x = sliderTorque.x = phBaseX;
				sliderBarTorque.y = sliderTorque.y = stopBtn.y - 50;
				touch.addChild(sliderBarTorque);
				touch.addChild(sliderTorque);
				txtTorque = new c.Text("-1.00", "normal 10px Arial", "#000000");
				txtTorque.textAlign = "center";
				txtTorque.x = sliderBarTorque.x - sliderBarTorque.nominalBounds.width / 2;
				sliderTorque.x = txtTorque.x;
				txtTorque.y = sliderTorque.y - 23;
				txtTorque.width = 40;
				touch.addChild(txtTorque);
				let labelTrq = new c.Text("torque (p.u.):", "normal 16px Arial", "#000000");
				labelTrq.textAlign = "left";
				labelTrq.x = labelFld.x;
				labelTrq.y = sliderBarTorque.y - 9;
				labelTrq.width = 50;
				backGround.addChild(labelTrq);
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
			function createUpDn() { // Up/Down für input XS
				dnBtn = new lib.BtnUp;
				dnBtn.x = 683;
				dnBtn.y = 97;
				dnBtn.rotation = 180;
				touch.addChild(dnBtn);
				upBtn = new lib.BtnUp;
				upBtn.x = 733;
				upBtn.y = 97;
				touch.addChild(upBtn);
				dnFrame = new lib.FrameUp;
				dnFrame.x = dnBtn.x;
				dnFrame.y = dnBtn.y;
				dnFrame.visible = false;
				touch.addChild(dnFrame);
				upFrame = new lib.FrameUp;
				upFrame.x = upBtn.x;
				upFrame.y = upBtn.y;
				upFrame.visible = false;
				touch.addChild(upFrame);
			}
		}
		
		function createPhasorDiag() { // phasors & header: ok
		
			state.thetaL = Math.acos((uSn * uSn + uPn * uPn - uXn * uXn) / (2 * uSn * uPn)) * rad2deg; // > 0: generator!
			state.torqueNom = uPn * Math.sin(state.thetaL / rad2deg); // > 0: reference value
			let phi = Math.acos(state.torqueNom / uXn) * rad2deg; // = -90°...+90°
			state.torque = -1.0;
		
			vecUP = new lib.VecUP();
			vecUP.x = phBaseX;
			vecUP.y = phBaseY;
			phNom /= vecUP.nominalBounds.height;
			vecUP.scale = uPn * phNom;
			vecUP.rotation = -state.thetaL;
			game.addChild(vecUP);
		
			vecXSIS = new lib.VecXSIS();
			let vecUPlength = vecUP.nominalBounds.height * vecUP.scale * 0.99;
			vecXSIS.x = vecUP.x - vecUPlength * Math.sin(state.thetaL / rad2deg);
			vecXSIS.y = vecUP.y - vecUPlength * Math.cos(state.thetaL / rad2deg);
			if (DEBUG) console.log("vecUP.nominalBounds: " + vecUP.nominalBounds);
			vecXSIS.scale = uXn * phNom;
			vecXSIS.rotation = +90.0 + phi;
			game.addChild(vecXSIS);
		
			vecUS = new lib.VecUS();
			vecUS.x = vecUP.x;
			vecUS.y = vecUP.y;
			game.addChild(vecUS);
			vecUS.scale = uSn * phNom; // will never be changed (grid voltage)
		
			state.psi = state.thetaL + phi;
			state.theta = state.thetaL - state.speed;
			rotateArmature();
			setSlotAT(state.psi);
		
			// title
			header = new c.Text(titGen, "bold 24px Arial", "#000000");
			header.textAlign = "center";
			header.x = centerX;
			header.y = 35;
			header.width = 300;
			game.addChild(header);
		
		
		}
		
		function createBackground() { 	// background, stator-yoke, equiv. circuit
			// TTZ
			/*backGround = new c.Container();
			stage.addChild(backGround);
		
			game = new c.Container();
			stage.addChild(game);*/
			// TTZ-logo:
			back = new lib.bckGrndTTZ();
			back.x = 0;
			back.y = 0;
			backGround.addChild(back);
			
			eqCirc = new lib.ESB();
			eqCirc.x = 713;
			eqCirc.y = 100;
			eqCirc.scale = 0.8;
			console.log("eqCirc.scale: " + eqCirc.scale);
			//eqCirc.scale = 140;
			backGround.addChild(eqCirc);
			
			core = new lib.stYoke();
			core.x = centerX;
			core.y = centerY;
			backGround.addChild(core);
		}
		
		function createSlotAT() { // armature ampere turns
			let amp = [1.0, -0.5, -0.5];
			for (let phase = 0; phase < 3; phase++) {
				current[phase] = new lib.iSp();
				current[phase + 3] = new lib.iSm();
				for (let side = 0; side < 2; side++) {
					if (amp[phase] < 0) {
						current[phase + (1 - side) * 3].x = posWdgs[phase][side][0];
						if (DEBUG) console.log("posWdgs: " + posWdgs[phase][side][1]);
						current[phase + (1 - side) * 3].y = posWdgs[phase][side][1];
						if (DEBUG) console.log("posWdgs: " + posWdgs[phase][side][1]);
		
					} else {
						current[phase + side * 3].x = posWdgs[phase][side][0];
						if (DEBUG) console.log("posWdgs: " + posWdgs[phase][side][0]);
						current[phase + side * 3].y = posWdgs[phase][side][1];
						if (DEBUG) console.log("posWdgs: " + posWdgs[phase][side][1]);
					}
					current[phase + side * 3].scale = Math.sqrt(Math.abs(amp[phase]));
					tmp = current[phase + side * 3];
					game.addChild(tmp);
				}
			}
			phiSt = new lib.phiSt();	
			phiSt.x = centerX;			
			phiSt.y = centerY;			
			phiSt.rotation = -90;
			game.addChild(phiSt);		
			phiSt.rotation = -90;
		}
		
		function createRotorAT() {
			// rotor with poles
			roShaft = new lib.roShaftPoles();
			roShaft.x = centerX;
			roShaft.y = centerY;
			game.addChild(roShaft);
			
			for (let phase = 0; phase < 4; phase++) {
				fldCurrent[phase] = new lib.ifm();
				fldCurrent[phase + 4] = new lib.ifp();
			}
			for (let phase = 0; phase < 8; phase++) {
				fldCurrent[phase].x = posFldWdgs[phase][0];
				fldCurrent[phase].y = posFldWdgs[phase][1];
				tmp = fldCurrent[phase];
				game.addChild(tmp);
			}
			phiRo = new lib.phiRo();
			phiRo.x = centerX;
			phiRo.y = centerY;
			game.addChild(phiRo);
		}
		
		function setSlotAT(psi) { // psi = arc(IS -> UP)
			let amp = 0.0; //ampMax = 0.0; // init tmp vars
			let phi = 0;
			
			phiSt.rotation = 90.0 - state.theta + psi;
			phi = (-phiSt.rotation-90.0) * Math.PI / 180;
			
			if (DEBUG1 && Math.abs(psi) > 1.0) console.log("setSlotAT, phi: " + (phi * 190 / Math.PI).toFixed(1) +
				", psi: " + psi.toFixed(1) +
				", torque: " + state.torque.toFixed(3)); //phi: -221.9, psi: 64.4, torque: -1.000
			for (let phase = 0; phase < 3; phase++) {
				amp = state.iS * Math.cos(phi + phase * Math.PI * 2 / 3);
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
		}
		
		function rotateArmature() { // shaft, AT, flux
			// shaft:
			state.theta += state.speed; // nominal speed: 1°/step
			if (state.theta > 360) {
				state.theta -= 360;
			} else if (state.theta < -360) {
				state.theta += 360;
			}
			roShaft.rotation = -state.theta;
			phiRo.rotation = -state.theta;
			let co = Math.cos(-state.theta / rad2deg),
			si = Math.sin(-state.theta / rad2deg);
			for (let phase = 0; phase < 8; phase++) {
				let x1 = posFldWdgs[phase][0],
				y1 = posFldWdgs[phase][1];
				fldCurrent[phase].x = (x1 - centerX) * co + (centerY - y1) * si + centerX;
				fldCurrent[phase].y = (x1 - centerX) * si + (y1 - centerY) * co + centerY;
				fldCurrent[phase].rotation = -state.theta;
			}
		}
		
		init();
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
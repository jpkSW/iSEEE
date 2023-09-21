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


(lib.eqCirc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
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

}).prototype = getMCSymbolPrototype(lib.eqCirc, rect = new cjs.Rectangle(0,0,302.4,240.4), [rect]);


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


(lib.FrameDir = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
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

}).prototype = getMCSymbolPrototype(lib.FrameDir, rect = new cjs.Rectangle(-15.9,-11.6,31.9,23.5), [rect]);


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
		// animateGM.fla: globals
		////////////////////////////////////////////////////////////////////////
		var c; // CreateJS-bib
		var r; // Device Pixel Ratio
		var w, h; // width, height
		var root = this;
		var backGround; // reference to all the static stuff
		var shaft; // rotating shaft
		var header; // title
		var game; // it's just a kind of game...
		var touch, startBtn, stopBtn, goFrame; // GUI-stuff
		var speedCW, speedCCW, speedCWFrame, speedCCWFrame;
		var torqCW, torqCCW, torqCWFrame, torqCCWFrame;
		let BTN_SCALE = 1.4;
		var inGame = false; // game stopped
		const centerX = 275, centerY = 300;
		var rRe; // = root.shaft.nominalBounds.width / 2; // rotor outer radius
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
		
		////////////////////////////////////////////////////////////////////////
		// animateGM.fla: JS-Code
		////////////////////////////////////////////////////////////////////////
		function init() {
			c = createjs;
			r = window.devicePixelRatio;
			w = stage.canvas.width / r;
			h = stage.canvas.height / r;
			let titGen = "DC-Generator";
			let titMot = "DC-Motor";
		
			if (DEBUG) console.log("r: " + r + ", w: " + w + ", h: " + h);
		
			backGround = new c.Container();
			stage.addChild(backGround);
			touch = new c.Container();
			stage.addChild(touch);
			game = new c.Container();
			stage.addChild(game);
			c.Ticker.addEventListener("tick", gameCore);
			stage.enableMouseOver(3);
		
			createBackground();
			createArmatureAT();
			createFieldAT();
		
			initStartStop();
			initSpeedCtrl();
			initTorqCtrl();
		
			function initStartStop() {
				// first generate buttons
				startBtn = new lib.BtnGo();
				startBtn.x = centerX;
				startBtn.y = (h + centerY) / 2 + 450 / 4;
				startBtn.scale = BTN_SCALE;
		
				stopBtn = new lib.BtnStop();
				stopBtn.x = centerX;
				stopBtn.y = (h + centerY) / 2 + 450 / 4;
				stopBtn.scale = BTN_SCALE;
				stopBtn.visible = false;
		
				goFrame = new lib.FrameGo();
				goFrame.x = startBtn.x;
				goFrame.y = stopBtn.y;
				goFrame.scale = BTN_SCALE;
				goFrame.visible = false;
		
				touch.addChild(startBtn);
				touch.addChild(stopBtn);
				touch.addChild(goFrame);
		
				// init event-listener
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
			function initSpeedCtrl() { // control-buttons speed
				speedCW = new lib.BtnCW();
				speedCCW = new lib.BtnCCW();
				speedCWFrame = new lib.FrameDir();
				speedCCWFrame = new lib.FrameDir();
				touch.addChild(speedCW);
				touch.addChild(speedCCW);
				touch.addChild(speedCWFrame);
				touch.addChild(speedCCWFrame);
				speedCW.x = 800;
				speedCW.y = 560;
				speedCWFrame.x = 800;
				speedCWFrame.y = 560;
				speedCCW.x = 750;
				speedCCW.y = 560;
				speedCCWFrame.x = 750;
				speedCCWFrame.y = 560;
				speedCWFrame.visible = false;
				speedCCWFrame.visible = false;
				speedCW.scale = BTN_SCALE;
				speedCCW.scale = BTN_SCALE;
				speedCWFrame.scale = BTN_SCALE;
				speedCCWFrame.scale = BTN_SCALE;
				speedCW.alpha = 0.5;
				// mousedown-event
				speedCW.addEventListener("mousedown", function (event) {
					speedCW.alpha = 1.0;
					speedCCW.alpha = 0.5;
					state.speed = -Math.abs(state.speed);
					header.text = ((state.speed * state.torque < 0) ? titGen : titMot);
					setVoltage(180);
					enableSpeedCW(false);
					speedCWFrame.visible = false;
				});
				speedCCW.addEventListener("mousedown", function (event) {
					speedCCW.alpha = 1.0;
					speedCW.alpha = 0.5;
					state.speed = Math.abs(state.speed);
					header.text = ((state.speed * state.torque < 0) ? titGen : titMot);
					setVoltage(0);
					enableSpeedCW(true);
					speedCCWFrame.visible = false;
				});
				// init mouseover-events
				enableSpeedCW(true);
				// init mouseout-events
				speedCW.addEventListener("mouseout", function (event) {
					speedCWFrame.visible = false;
				});
				speedCCW.addEventListener("mouseout", function (event) {
					speedCCWFrame.visible = false;
				});
		
				function enableSpeedCW(cw) {
					if (cw) {
						speedCW.addEventListener("mouseover", function (event) {
							speedCWFrame.visible = true;
						});
						speedCCW.addEventListener("mouseover", function (event) {
							speedCCWFrame.visible = false;
						});
					} else {
						speedCW.addEventListener("mouseover", function (event) {
							speedCWFrame.visible = false;
						});
						speedCCW.addEventListener("mouseover", function (event) {
							speedCCWFrame.visible = true;
						});
					}
				}
			}
			function initTorqCtrl() { // control-buttons torque
				torqCW = new lib.BtnCW();			torqCCW = new lib.BtnCCW();
				torqCWFrame = new lib.FrameDir();	torqCCWFrame = new lib.FrameDir();
				touch.addChild(torqCW);				touch.addChild(torqCCW);
				touch.addChild(torqCWFrame);		touch.addChild(torqCCWFrame);
				torqCW.x = 800;						torqCW.y = 510;
				torqCWFrame.x = 800;				torqCWFrame.y = 510;
				torqCCW.x = 750;					torqCCW.y = 510;
				torqCCWFrame.x = 750;				torqCCWFrame.y = 510;
				torqCWFrame.visible = false;		torqCCWFrame.visible = false;
				torqCW.scale = BTN_SCALE;			torqCCW.scale = BTN_SCALE;
				torqCWFrame.scale = BTN_SCALE;		torqCCWFrame.scale = BTN_SCALE;
				torqCW.alpha = 0.5;
				// mousedown-event
				torqCW.addEventListener("mousedown", function (event) {
					torqCW.alpha = 1.0;
					torqCCW.alpha = 0.5;
					state.torque = -Math.abs(state.torque);
					header.text = ((state.speed * state.torque < 0) ? titGen : titMot);
					vecIA.rotation = 180;
					vecUBr.rotation = 180;
					setVoltage(vecUi.rotation);
					enableTorqCW(false);
					torqCWFrame.visible = false;
				});
				torqCCW.addEventListener("mousedown", function (event) {
					torqCCW.alpha = 1.0;
					torqCW.alpha = 0.5;
					state.torque = Math.abs(state.torque);
					header.text = ((state.speed * state.torque < 0) ? titGen : titMot);
					vecIA.rotation = 0;
					vecUBr.rotation = 0;
					setVoltage(vecUi.rotation);
					enableTorqCW(true);
					torqCCWFrame.visible = false;
				});
				// init mouseover-events
				enableTorqCW(true);
				// init mouseout-events
				torqCW.addEventListener("mouseout", function (event) {
					torqCWFrame.visible = false;
				});
				torqCCW.addEventListener("mouseout", function (event) {
					torqCCWFrame.visible = false;
				});
		
				function enableTorqCW(cw) {
					if (cw) {
						torqCW.addEventListener("mouseover", function (event) {
							torqCWFrame.visible = true;
						});
						torqCCW.addEventListener("mouseover", function (event) {
							torqCCWFrame.visible = false;
						});
					} else {
						torqCW.addEventListener("mouseover", function (event) {
							torqCWFrame.visible = false;
						});
						torqCCW.addEventListener("mouseover", function (event) {
							torqCCWFrame.visible = true;
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
			stopBtn.visible = false;
			startBtn.visible = true;
			inGame = false;
		}
		function gameCore(event) { // infinite loop
			if (inGame) {
				rotateArmature();
			}
		}
		function createBackground() { // logos, yoke, shaft, text!!!
		
			// background with different logos
			// TTZ-logo:
			let back = new lib.bckGrndTTZthws();
			back.x = 0;
			back.y = 0;
			backGround.addChild(back);
			
			let yoke = new lib.stYoke();
			yoke.x = centerX;
			yoke.y = centerY;
			backGround.addChild(yoke);
		
			let eqc = new lib.eqCirc();
			eqc.x = 520;
			eqc.y = 20;
			backGround.addChild(eqc);
		
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
			header = new c.Text("DC-Motor", "bold 24px Arial", "#000000");
			header.textAlign = "center";
			header.x = centerX;
			header.y = 35;
			header.width = 300;
			backGround.addChild(header);
		
			var text1 = new c.Text("direction of rotation:", "bold 18px Arial", "#000000");
			text1.textAlign = "left";
			text1.x = w / 2 + 100;
			text1.y = (h + centerY) / 2 + 450 / 4 - 8;
			text1.width = 200;
			backGround.addChild(text1);
		
			var text2 = new c.Text("direction of torque:", "bold 18px Arial", "#000000");
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
			shaft = new lib.roShaft();
			shaft.x = centerX;
			shaft.y = centerY;
			game.addChild(shaft);
			let tmp = 0.0;
		
			rRe = shaft.nominalBounds.width / 2;
		
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
				game.addChild(tmp);
				iA[i + QA / 2] = new lib.iAp();
				iA[i + QA / 2].x = centerX - rRe * Math.cos(angle);
				iA[i + QA / 2].y = centerY + rRe * Math.sin(angle);
				tmp = iA[i + QA / 2];
				game.addChild(tmp);
				angle += 2 * Math.PI / QA; // diff between 2 coils
			}
			rRe += iA[0].nominalBounds.width / 2;
			phiA = new lib.PhiA();
			phiA.x = centerX;
			phiA.y = centerY;
			game.addChild(phiA);
		}
		function rotateArmature() { // shaft, AT, flux
			// shaft:
			state.theta += state.speed; // nominal speed: 1°/step
			if (state.theta > 360) {
				state.theta -= 360;
			} else if (state.theta < -360) {
				state.theta += 360;
			}
			shaft.rotation = -state.theta;
		
			// slot ampere turns:
			let angle = ((state.theta + 180 / QA) % (360 / QA)) * Math.PI / 180;
			if (angle < 0) {
				angle += (360 / QA) * Math.PI / 180;
			}
		
			let ampl = Math.abs(state.torque);
			let tmp = ((state.torque > 0) ? rRe - iA[0].nominalBounds.width / 2 : -rRe + iA[0].nominalBounds.width / 2); // rRe := sign(torque) * rRe;
			let meanAngle = 0;
			let mmf = 0;
			let amplComm = 0.0;
		
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
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
	this.shape.setTransform(-0.0019,-64.8753,3.1741,3.1767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6A20").s().p("AgYA0QgGAAgCgEQgEgFADgEIAOgnQAHgXADgTQABgEADgDQADgCACAAQAJAAABAJQADATAHAXQAGAVAIARQADAFgDAFQgDAEgGAAg");
	this.shape_1.setTransform(-0.0019,-64.8753,3.1741,3.1767);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgJhbIAACoQAAAEADADQADADADAAQAEAAADgDQADgDAAgEIAAio");
	this.shape_2.setTransform(0.0342,-27.5541,3.1737,3.1764);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC6A20").s().p("AgGBWQgDgDAAgEIAAinIATAAIAACnQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(0.0342,-28.3482,3.1737,3.1764);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PhiStS, rect = new cjs.Rectangle(-12.2,-82.4,24.5,83.5), [rect]);


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
	this.shape.setTransform(-0.0019,16.5659,3.1741,3.1767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6A20").s().p("AgYA0QgGAAgCgEQgEgFADgEIACgFIAMgiQAHgXADgTQABgEADgDQADgCACAAQAJAAABAJQADATAHAXQAGAVAIARQADAFgDAFQgDAEgGAAg");
	this.shape_1.setTransform(-0.0019,16.5659,3.1741,3.1767);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgJhWIAACeQAAAEADADQADADADAAQAEAAADgDQADgDAAgEIAAie");
	this.shape_2.setTransform(0.0342,52.3504,3.1737,3.1764);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC6A20").s().p("AgGBRQgDgCAAgFIAAidIATAAIAACdQAAAFgDACQgDADgEABQgDgBgDgDg");
	this.shape_3.setTransform(0.0342,51.5563,3.1737,3.1764);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PhiStN, rect = new cjs.Rectangle(-12.2,-1,24.5,80.5), [rect]);


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


(lib.roShaftPM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AAAhMQBxAABaBDQBZBBAhBpIBRgaQgpiChvhSQhxhUiNAAQiMAAhxBUQhvBSgpCCIBRAaQAhhpBYhBQBbhDBwAAg");
	this.shape.setTransform(-0.0643,-83.4147,3.174,3.1765);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADE7").s().p("ADLgIQhahEhxAAQhwAAhbBEQhYBBghBpIhRgaQApiCBvhSQBxhVCMABQCNgBBxBVQBvBSApCCIhRAaQghhphZhBg");
	this.shape_1.setTransform(-0.0669,-83.6173,3.174,3.1765);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AFFigQghBphZBBQhaBDhxAAQhwAAhbhDQhYhBghhpIhRAZQApCDBvBSQBxBUCMAAQCNAABxhUQBvhSApiDg");
	this.shape_2.setTransform(-0.0643,83.3454,3.174,3.1765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("Aj9BNQhvhRgpiDIBRgaQAhBpBYBBQBbBEBwAAQBxAABahEQBZhBAhhpIBRAaQgpCDhvBRQhxBViNAAQiMAAhxhVg");
	this.shape_3.setTransform(-0.0669,83.5483,3.174,3.1765);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AA5hzIAAgnIhxAAIAAAnQgmARgXAjQgYAjAAAqQAAA7AqApQApApA6AAQA7AAApgpQAqgpAAg7QAAgqgYgjQgXgjgmgRg");
	this.shape_4.setTransform(-1.1323,-4.5001,3.1746,3.1768);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DBDBDA").s().p("AhjByQgqgpAAg7QAAgqAYgkQAXgiAmgRIAAgnIBxAAIAAAnQAmARAXAiQAYAkAAAqQAAA7gqApQgpAqg7AAQg6AAgpgqg");
	this.shape_5.setTransform(-1.1323,-4.5001,3.1746,3.1768);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAAGpQCwAAB9h9QB8h8AAiwQAAivh8h8Qh9h9iwAAQivAAh9B9Qh8B8AACvQAACwB8B8QB9B9CvAAg");
	this.shape_6.setTransform(-0.0212,0.0269,3.1746,3.1768);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8CCCC1").s().p("AksEsQh8h8AAiwQAAivB8h8QB9h9CvAAQCwAAB9B9QB8B8AACvQAACwh8B8Qh9B9iwAAQivAAh9h9g");
	this.shape_7.setTransform(-0.0212,0.0269,3.1746,3.1768);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roShaftPM, rect = new cjs.Rectangle(-136,-135.9,272,271.9), [rect]);


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
	this.shape.setTransform(-0.0128,-121.3799,3.174,3.1765);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADE7").s().p("AgYA0QgGAAgCgEQgEgFADgEIACgFIAMgiQAHgXADgTQABgEADgDQADgCACAAQAJAAABAJQADATAHAXQAGAVAIARQADAFgDAFQgDAEgGAAg");
	this.shape_1.setTransform(-0.0128,-121.3799,3.174,3.1765);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgJmNIAAMMQAAAEADADQADADADAAQAEAAADgDQADgDAAgEIAAsM");
	this.shape_2.setTransform(0.0104,13.118,3.1734,3.1762);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("AgGGIQgDgDAAgEIAAsLIATAAIAAMLQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(0.0104,12.324,3.1734,3.1762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.phiRo, rect = new cjs.Rectangle(-12.2,-139,24.5,277.9), [rect]);


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

}).prototype = getMCSymbolPrototype(lib.phiSt, rect = new cjs.Rectangle(-11.3,-219.9,22.6,440), [rect]);


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
(lib.animatePSMxS = function(mode,startPosition,loop,reversed) {
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
		// animatePSMxS.fla  		// global declarations
		////////////////////////////////////////////////////////////////////////
								
		var c, // CreateJS-bib
			r, // Device Pixel Ratio
			w, h; // width, height
		var root = this;
		var backGround, // reference to all the static stuff
			header, // title
			game; // it's just a kind of game...
		var inGame = false; // game stopped
		const titGen = "synchronous generator";
		const titMot = "synchronous motor";
		const centerX = 275, centerY = 300, rRe = 165; // rotor center + outer radius
		const xSmin = 0.3, xSmax = 0.9, xSdel = 0.05;
		var phBaseX, phBaseY;
		var uXn = 0.75,
			uSn = 1,
			uPn = Math.sqrt(uSn * uSn - uXn * uXn); // nominal values
		//var psi = 0.0; // arc (I_S -> U_P)
		var phNom = 160; // phasor nominal length = 1 p.u.
		const W32 = Math.sqrt(3.0) / 2.0;
		const posWdgs = [
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
		var current = []; // U1, V1, W1, U2, V2, W2
		var vecUS, vecUP, vecXSIS;
		var roShaft, phiSt, phiRo;
		var infoXS, infoParam;
		var sliderBarSpeed, sliderBarTorque, sliderSpeed, sliderTorque, txtSpeed, txtTorque;
		var state = {
			theta: 0.0,
			speed: 1.0,
			psi: 0.0,
			torque: 1.0,
			load: 1.0,
			iS: 1.0
		};
		
		// stuff for start&stop, direction of speed&torque
		var startBtn, stopBtn, touch, goFrame; // speedCW, speedCCW, torqCW, torqCCW, 
		var dnBtn, upBtn, dnFrame, upFrame;
		const DEBUG = false, DEBUG1 = false, DEBUG2 = false;
		
		////////////////////////////////////////////////////////////////////////
		// animatePSMxS.fla  		// JS-code
		////////////////////////////////////////////////////////////////////////
		function init() {
			c = createjs;
			r = window.devicePixelRatio;
			w = 850; //stage.canvas.width / r;
			h = 600; // stage.canvas.height / r;
			phBaseX = w - 160; // = 690
			phBaseY = h - 180; // = 420
		
			if (DEBUG2) console.log("stage.canvas.width: " + stage.canvas.width.toFixed(3) +
				", stage.canvas.height: " + stage.canvas.height.toFixed(0));
			if (DEBUG2) console.log("r: " + r.toFixed(3) + ", w: " + w.toFixed(0) +
				", h: " + h.toFixed(0));
			if (DEBUG2) console.log("phBaseX: " + phBaseX + ", phBaseY: " + phBaseY);
		
			createBackground();
			createSlotAT();
			//createArmatureAT();
			createTouchControl();
		
			c.Ticker.addEventListener("tick", gameCore);
			stage.enableMouseOver(30);
		
			initStartStop();
			initUpDn();
			initSlider();
		
			function initSlider() {
				sliderSpeed.addEventListener("pressmove", function (e) {
					let p = stage.globalToLocal(e.stageX, e.stageY);
					sliderSpeed.x = limitIt(p.x, sliderBarSpeed.x - sliderBarSpeed.nominalBounds.width / 2,
						sliderBarSpeed.x + sliderBarSpeed.nominalBounds.width / 2)
					txtSpeed.x = sliderSpeed.x;
					state.speed = (4 * (sliderSpeed.x - sliderBarSpeed.x) / sliderBarSpeed.nominalBounds.width);
					txtSpeed.text = state.speed.toFixed(2);
					if (state.speed * state.torque < 0) { // generator
						header.text = titGen;
					} else {
						header.text = titMot;
					}
					state.psi = updatePhasors();
					setSlotAT(state.psi); // psi = f(speed)
		
					if (DEBUG2) console.log("pressmove: sliderBarSpeed.x: " + sliderBarSpeed.x.toFixed(0) +
						", e.localX: " + e.localX.toFixed(0) +
						", e.stageX: " + e.stageX.toFixed(0) +
						", sliderSpeed.x: " + sliderSpeed.x.toFixed(0));
				});
				sliderTorque.addEventListener("pressmove", function (e) {
					let p = stage.globalToLocal(e.stageX, e.stageY);
					sliderTorque.x = limitIt(p.x, sliderBarTorque.x - sliderBarTorque.nominalBounds.width / 2,
						sliderBarTorque.x + sliderBarTorque.nominalBounds.width / 2)
					txtTorque.x = sliderTorque.x;
					state.torque = (2 * (sliderTorque.x - sliderBarTorque.x) / sliderBarTorque.nominalBounds.width);
					txtTorque.text = state.torque.toFixed(2);
					if (state.speed * state.torque < 0) { // generator
						header.text = titGen;
					} else {
						header.text = titMot;
					}
					state.psi = updatePhasors();
					setSlotAT(state.psi); // psi = f(speed)
		
					if (DEBUG2) console.log("pressmove: sliderBarTorque.x: " + sliderBarTorque.x.toFixed(0) +
						", e.localX: " + e.localX.toFixed(0) +
						", e.stageX: " + e.stageX.toFixed(0) +
						", sliderTorque.x: " + sliderTorque.x.toFixed(0));
				});
			}
			function updatePhasors() {
				let psi = 0.0;
				let uP = Math.abs(state.speed) * uPn;
				let uX = Math.abs(state.speed * state.torque) * uXn;
				let uS = Math.sqrt(uP * uP + uX * uX);
				let thetaL = 0.0;
				if (uS <= 1.0) {
					vecUP.scaleY = uP * phNom;
		
					vecXSIS.y = vecUP.y - vecUP.nominalBounds.height * vecUP.scaleY;
					vecXSIS.scaleY = uX * phNom;
					vecXSIS.rotation = (state.torque * state.speed > 0 ? -90 : +90);
		
					vecUS.scaleY = uS * phNom;
					thetaL = Math.asin(uX / uS) * 180 / Math.PI;
					vecUS.rotation = (state.torque * state.speed > 0 ? -thetaL : thetaL);
					state.iS = state.torque;
				} else { // active field-weakening
					let mKipp = 0.999999*uSn / (Math.abs(state.speed) * uXn); ///////////////////////////////////////////////////////
					if (DEBUG1) console.log("updatePhasors1: uP: " + uP.toFixed(3) + ////////////////////////////
						", uX: " + uX.toFixed(3) +
						", speed: " + state.speed.toFixed(3) +
						", mKipp: " + mKipp.toFixed(3) +
						", torque: " + state.torque.toFixed(3)); ///////////////////////////////////////////////////////
					if (mKipp < Math.abs(state.torque)) {
						state.torque = (state.torque >= 0.0 ? mKipp : -mKipp);
						limitTorque(state.torque);
					}
					let X_iq = Math.abs(state.speed * state.torque) * uXn;
					thetaL = Math.asin(X_iq / uSn) * 180 / Math.PI;
					let X_id = uP - uSn * Math.cos(thetaL * Math.PI / 180);
					uX = Math.sqrt(X_iq * X_iq + X_id * X_id);
					if (uX > 0.0) psi = Math.acos(X_iq / uX) * 180 / Math.PI;
					state.iS = uX / Math.abs(state.speed) / uXn;
					let cospsi = X_iq / uX;
		
					if (DEBUG1) console.log("updatePhasors2: uP: " + uP.toFixed(3) + ////////////////////////////
						", X_iq: " + X_iq.toFixed(3) +
						", X_id: " + X_id.toFixed(3) +
						", psi: " + psi.toFixed(1) +
						", thetaL: " + thetaL.toFixed(1) +
						", cospsi: " + cospsi.toFixed(3) +
						", uX: " + uX.toFixed(3) +
						", speed: " + state.speed.toFixed(3) +
						", mKipp: " + mKipp.toFixed(3) +
						", torque: " + state.torque.toFixed(3) +
						", iS: " + state.iS.toFixed(3)); ///////////////////////////////////////////////////////
		
					vecUP.scaleY = uP * phNom;
					vecXSIS.y = vecUP.y - vecUP.nominalBounds.height * vecUP.scaleY;
					vecXSIS.scaleY = uX * phNom;
					vecXSIS.rotation = (state.torque * state.speed > 0 ? -90 - psi : +90 + psi);
					vecUS.rotation = (state.torque * state.speed > 0 ? -thetaL : thetaL);
					vecUS.scaleY = uSn * phNom;
					uS = uSn;
				}
				infoParam.text = "uS = " + uS.toFixed(2) 
							+ "; iS = " + state.iS.toFixed(2)
							+ "; xS = " + (Math.abs(state.speed) * uXn).toFixed(2)
							+ "; uP = " + uP.toFixed(2);
				return psi;
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
				infoXS = new c.Text("tmp", "normal 12px Arial", "#000000");
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
				// default-values
				uXn = 0.70;
				infoXS.text = uXn.toFixed(2);
				uPn = Math.sqrt(uSn * uSn - uXn * uXn);
				state.psi = updatePhasors();
				// Down-Button
				dnBtn.addEventListener("mousedown", function (event) {
					if (DEBUG2) console.log("dnBtn, uXn: " + uXn.toFixed(2) +
						", xSmin: " + xSmin.toFixed(2) + 
						", xSdel: " + xSdel.toFixed(2));
					uXn =(uXn < xSmin+xSdel/10 ? xSmin : uXn - xSdel);
					infoXS.text = uXn.toFixed(2);
					uPn = Math.sqrt(uSn * uSn - uXn * uXn);
					if (DEBUG2) console.log("dnBtn, uXn: " + uXn + ", uPn: " + uPn);
					state.psi = updatePhasors();
				});
				dnBtn.addEventListener("mouseover", function (event) {
					dnFrame.visible = true;
				});
				dnBtn.addEventListener("mouseout", function (event) {
					dnFrame.visible = false;
				});
				// Up-Button
				upBtn.addEventListener("mousedown", function (event) {
					if (DEBUG) console.log("upBtn, uXn: " + uXn.toFixed(2) +
						", xSmax: " + xSmin.toFixed(2) + 
						", xSdel: " + xSdel.toFixed(2));
					uXn =(uXn > xSmax-xSdel/10 ? xSmax : uXn + xSdel);
					infoXS.text = uXn.toFixed(2);
					uPn = Math.sqrt(uSn * uSn - uXn * uXn);
					if (DEBUG2) console.log("upBtn, uXn: " + uXn + ", uPn: " + uPn);
					state.psi = updatePhasors();
				});
				upBtn.addEventListener("mouseover", function (event) {
					upFrame.visible = true;
				});
				upBtn.addEventListener("mouseout", function (event) {
					upFrame.visible = false;
				});		
			}
		}
		
		function stopTheGame() { 		// workaround for debugging
			stopBtn.visible = false;
			startBtn.visible = true;
			inGame = false;
		}
		
		function gameCore(event) { 		// infinite loop
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
			createUpDn();9
		
			function createSlider() { // 2 sliders
		
				// 1. slider for speed:
				sliderBarSpeed = new lib.SliderBar();
				sliderSpeed = new lib.Slider();
				sliderBarSpeed.x = sliderSpeed.x = phBaseX;
				sliderBarSpeed.y = sliderSpeed.y = stopBtn.y;
				touch.addChild(sliderBarSpeed);
				touch.addChild(sliderSpeed);
				txtSpeed = new c.Text("1.0", "normal 10px Arial", "#000000");
				txtSpeed.textAlign = "center";
				txtSpeed.x = sliderBarSpeed.x + sliderBarSpeed.nominalBounds.width / 4;
				sliderSpeed.x = txtSpeed.x
				txtSpeed.y = sliderSpeed.y - 23;
				txtSpeed.width = 40;
				touch.addChild(txtSpeed);
				let labelSpd = new c.Text("speed (p.u.):", "normal 16px Arial", "#000000");
				labelSpd.textAlign = "left";
				labelSpd.x = phBaseX - 210;
				labelSpd.y = sliderBarSpeed.y - 9;
				labelSpd.width = 50;
				backGround.addChild(labelSpd);
		
				// 2. slider for torque:
				sliderBarTorque = new lib.SliderBar();
				sliderTorque = new lib.Slider();
				sliderBarTorque.x = sliderTorque.x = phBaseX;
				sliderBarTorque.y = sliderTorque.y = stopBtn.y - 50;
				touch.addChild(sliderBarTorque);
				touch.addChild(sliderTorque);
				txtTorque = new c.Text("1.0", "normal 10px Arial", "#000000");
				txtTorque.textAlign = "center";
				txtTorque.x = sliderBarTorque.x + sliderBarTorque.nominalBounds.width / 2;
				sliderTorque.x = txtTorque.x;
				txtTorque.y = sliderTorque.y - 23;
				txtTorque.width = 40;
				touch.addChild(txtTorque);
				let labelTrq = new c.Text("torque (p.u.):", "normal 16px Arial", "#000000");
				labelTrq.textAlign = "left";
				labelTrq.x = labelSpd.x;
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
		
		function createBackground() { 	// + several game-elements: phasors & header
			// TTZ
			backGround = new c.Container();
			stage.addChild(backGround);
		
			game = new c.Container();
			stage.addChild(game);
			// TTZ-logo:
			let back = new lib.bckGrndTTZthws();
			back.x = 0;
			back.y = 0;
			backGround.addChild(back);
			
			let eqCirc = new lib.ESB();
			eqCirc.x = 713;
			eqCirc.y = 100;
			eqCirc.scale = 0.8;
			console.log("eqCirc.scale: " + eqCirc.scale);
			//eqCirc.scale = 140;
			backGround.addChild(eqCirc);
			
			let core = new lib.stYoke();
			core.x = centerX;
			core.y = centerY;
			backGround.addChild(core);
		
			vecUP = new lib.VecUP();
			vecUP.x = phBaseX;
			vecUP.y = phBaseY;
			phNom /= vecUP.nominalBounds.height;
			vecUP.scaleY = uPn * phNom;
			game.addChild(vecUP);
		
			vecXSIS = new lib.VecXSIS();
			vecXSIS.x = vecUP.x;
			vecXSIS.y = vecUP.y - vecUP.nominalBounds.height * vecUP.scaleY;
			if (DEBUG) console.log("vecUP.nominalBounds: " + vecUP.nominalBounds);
			vecXSIS.rotation = -90;
			vecXSIS.scaleY = uXn * phNom;
			game.addChild(vecXSIS);
		
			vecUS = new lib.VecUS();
			vecUS.x = vecUP.x;
			vecUS.y = vecUP.y;
			game.addChild(vecUS);
			vecUS.scaleY = uSn * phNom;
			let theta = Math.asin(uXn / uSn) * 180 / Math.PI;
			vecUS.rotation = -theta;
		
			// title
			header = new c.Text(titMot, "bold 24px Arial", "#000000");
			header.textAlign = "center";
			header.x = centerX;
			header.y = 35;
			header.width = 300;
			game.addChild(header);
		}
		
		function createSlotAT() { 		// pm-rotor, armature ampere turns, vectors
			roShaft = new lib.roShaftPM();
			roShaft.x = centerX;
			roShaft.y = centerY;
			game.addChild(roShaft);
			let amp = [1.0, -0.5, -0.5];
			let tmp = 0.0;
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
					backGround.addChild(tmp);
				}
			}
		
			phiSt = new lib.phiSt();	phiRo = new lib.phiRo();
			phiSt.x = centerX;			phiRo.x = centerX;
			phiSt.y = centerY;			phiRo.y = centerY;
			phiSt.rotation = -90;
			game.addChild(phiSt);		game.addChild(phiRo);
		}
		
		function setSlotAT(psi) { 		// psi = arc(IS -> UP)
			let amp = 0.0; //ampMax = 0.0; // init tmp vars
			//ampMax = state.torque / Math.cos(psi * Math.PI / 180); ////////////////////////////////////////////////////////////////////////
			let phi = 0;
			if (state.torque < 0) {
				phi = (-psi + state.theta) * Math.PI / 180;
			} else {
				phi = (psi + state.theta) * Math.PI / 180;
			}
			if (DEBUG1 && Math.abs(psi) >1.0 ) console.log(", phi: "       + (phi*190/Math.PI).toFixed(1) + 
						", psi: "	    + psi.toFixed(1) +
						", torque: "    + state.torque.toFixed(3));///////////////////////////////////////////////////////
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
			if (state.torque < 0) {
				phiSt.rotation = 90 - state.theta + psi;
			} else {
				phiSt.rotation = -90 - state.theta - psi;
			}
		}
		
		function rotateArmature() { 	// shaft, AT, flux
			// shaft:
			state.theta += state.speed; // nominal speed: 1°/step
			if (state.theta > 360) {
				state.theta -= 360;
			} else if (state.theta < -360) {
				state.theta += 360;
			}
			roShaft.rotation = -state.theta;
			phiRo.rotation = -state.theta;		
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
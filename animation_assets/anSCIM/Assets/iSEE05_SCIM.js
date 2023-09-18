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
	this.shape.setTransform(0.05,-2.4394,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCEECC").s().p("Aj2EQQhnhmAAiRQAAh1BHhdQBFhcBughIAAhAIDHAAIAABAQBuAhBFBcQBHBdAAB1QAACRhmBmQhnBniRAAQiQAAhmhng");
	this.shape_1.setTransform(0.05,-2.4394,1,0.9999);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,0,0,4).p("AAAPEQDEAAC0hLQCthKCFiFQCFiGBKitQBLizAAjEQAAjDhLi0QhKitiFiFQiFiFithKQi0hLjEAAQjDAAizBLQitBKiGCFQiFCFhJCtQhMC0AADDQAADEBMCzQBJCtCFCGQCGCFCtBKQCzBLDDAAg");
	this.shape_2.setTransform(0.025,0.0353,1,0.9999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88CAC0").s().p("Al2N5QithKiGiFQiFiGhJitQhMizAAjEQAAjDBMi0QBJitCFiFQCGiFCthKQCzhLDDAAQDEAAC0BLQCtBKCFCFQCFCFBKCtQBLC0AADDQAADEhLCzQhKCtiFCGQiFCFitBKQi0BLjEAAQjDAAizhLg");
	this.shape_3.setTransform(0.025,0.0353,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roShaft, rect = new cjs.Rectangle(-97.4,-97.4,194.9,194.9), [rect]);


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


(lib.iRp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
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
	this.shape.setTransform(-0.1405,0.0524,3.1741,3.178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAognIhPBP");
	this.shape_1.setTransform(-0.1405,0.0524,3.1741,3.178);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("Ag4AAQAAgWARgRQARgRAWAAQAXAAARARQARARAAAWQAAAXgRARQgRARgXAAQgXAAgQgRQgRgRAAgXg");
	this.shape_2.setTransform(-0.0612,-0.027,3.1741,3.178);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("AgnAoQgRgRAAgXQAAgWARgRQARgQAWgBQAXABARAQQARAQAAAXQAAAXgRARQgRAQgXABQgXgBgQgQg");
	this.shape_3.setTransform(-0.0612,-0.027,3.1741,3.178);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iRp, rect = new cjs.Rectangle(-19,-19,38,38), [rect]);


(lib.iRm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
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
	this.shape.setTransform(-0.009,0.0524,3.1741,3.178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgGAMQgFgDgCgFQgBgFADgFQADgFAFgCQAFgBAFADQAFADACAFQABAFgDAFQgDAFgFACIgEAAQgDAAgDgCg");
	this.shape_1.setTransform(-0.009,0.0524,3.1741,3.178);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AgwgbQAMgUAWgHQAWgFAUALQAVAMAGAWQAGAWgMAUQgMAUgWAHQgWAFgUgLQgVgLgGgXQgGgWAMgUg");
	this.shape_2.setTransform(-0.0358,-0.0418,3.1737,3.1778);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("AgbAxQgVgLgGgXQgGgWAMgUQAMgUAWgGQAWgHAUAMQAVAMAGAWQAGAWgMAVQgMATgWAHQgIACgHAAQgOAAgNgIg");
	this.shape_3.setTransform(-0.0358,-0.0418,3.1737,3.1778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iRm, rect = new cjs.Rectangle(-19,-19,38.1,38), [rect]);


(lib.vecUS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
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
	this.shape.setTransform(-0.0453,-111.1004,0.99,1.0593);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25A740").s().p("AgxBUQAVg2AIgbQAPgvAFgoQAEAiARA1QAOAxAPAgg");
	this.shape_1.setTransform(-0.0453,-111.1004,0.99,1.0593);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#25A740").ss(2.1,1,1).p("AAAI2IAAxr");
	this.shape_2.setTransform(-0.0453,-60.0666,0.99,1.0593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecUS, rect = new cjs.Rectangle(-6,-121.1,12,122.1), [rect]);


(lib.vecIS = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
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
	this.shape.setTransform(-0.0814,-111.1187,1.0598,1.058);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6A20").s().p("AgxBUQAWg3AIgZQAPgzAEgkQAEAkAQAzQAQAzAOAdg");
	this.shape_1.setTransform(-0.0814,-111.1187,1.0598,1.058);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EC6A20").ss(2.1,1,1).p("AAAI3IAAxt");
	this.shape_2.setTransform(-0.1089,-60.1082,1.0598,1.0579);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecIS, rect = new cjs.Rectangle(-6.4,-121.1,12.6,122.1), [rect]);


(lib.vecIR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
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
	this.shape.setTransform(-0.0526,-111.1284,0.9949,1.0593);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADE7").s().p("AgxBUQAVg2AIgbQAPgvAFgoQAFAlAQAyQAPAzAOAeg");
	this.shape_1.setTransform(-0.0526,-111.1284,0.9949,1.0593);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00ADE7").ss(2.1,1,1).p("AAAI2IAAxr");
	this.shape_2.setTransform(-0.0596,-60.1286,0.9948,1.0592);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecIR, rect = new cjs.Rectangle(-6,-121.1,12,122.1), [rect]);


(lib.vecI0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#25A740").ss(1,1,1).p("AgBgJQgOgEgagLIAAAxQAOgHAagIQAbgIAQgCQgQAAgbgJg");
	this.shape.setTransform(15.925,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25A740").s().p("AgpgYQAaAKAOAFQAbAIAQABQgQABgbAJQgaAIgOAHg");
	this.shape_1.setTransform(15.925,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#25A740").ss(1,1,1).p("AhkAAIDJAA");
	this.shape_2.setTransform(10.075,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecI0, rect = new cjs.Rectangle(-1,-3.5,22.2,7), [rect]);


(lib.locus = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ANFAAQAAFbj2D1Qj1D1laAAQlaAAj1j1Qj1j1AAlbQAAlaD1j1QD1j1FaAAQFaAAD1D1QD2D1AAFag");
	this.shape.setTransform(83.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.locus, rect = new cjs.Rectangle(-1,-84.7,169.4,169.4), [rect]);


(lib.ESB_IM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC6A20").s().p("AgDAfIgLgDIgCAAIgBADIgBAAIAAgUIABAAIADAJQACADAEADQAEACAEAAQAGAAADgDQADgDAAgEIgBgEIgEgFIgIgFIgLgGQgDgCgCgEQgCgDAAgDQAAgHAFgEQAFgFAIAAQADAAAGACIADABIACAAIABgDIACAAIAAAVIgCAAQgBgHgCgDQgCgDgEgDIgGgCQgFAAgDADQgDADAAAEQAAADACACQADADAJAFIALAGIAFAGIACAHQAAAHgGAEQgFAFgIAAg");
	this.shape.setTransform(-41.9316,-41.413,1.3385,1.3385);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADE7").s().p("AgRAOQgHgGAAgJQAAgGADgEQADgEAEgCQAFgDAIAAIAaAAIAAAHIgUAAQAHAEADAEQADAEAAAFQAAAHgFAFQgGAFgIAAQgKAAgGgHgAgMgKQgEAEAAAGQAAAIAFAFQAEAFAGAAQAEAAAEgEQADgDAAgIQAAgJgJgHIgCAAQgGAAgFADg");
	this.shape_1.setTransform(1.9191,-39.9748,1.3385,1.3385);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00ADE7").s().p("AANAeIgTgcIgGAAIAAARQAAAGACABQABACADAAIADAAIAAACIgZAAIAAgCIACAAQAEAAABgCQABgCAAgFIAAglQAAgGgCgCQgBgBgDAAIgCAAIAAgCIAVAAQAJAAAEACQAFABACADQAEAEAAAFQAAAGgEAEQgEAEgHAAIAMASQAGAGABACQAEACAEAAIAAACgAgMgZIAAAZIADAAQAJAAACgDQAFgEAAgGQAAgFgEgEQgDgDgFgBg");
	this.shape_2.setTransform(-5.7101,-41.3467,1.3385,1.3385);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2A").s().p("AgYAeIAAgCIABAAQAEAAACgBQABgCAAgEIAAgpQAAgEgBgCQgCgBgEAAIgBAAIAAgCIAxAAIAAAOIgCAAQAAgFgDgDQgCgCgHAAIgSAAIAAAuQAAAEACACQABABAEAAIABAAIAAACg");
	this.shape_3.setTransform(50.2039,-47.0686,1.3385,1.3385);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2B2A").s().p("AgRAPQgGgIgBgHQAAgGADgEQADgFAEgCQAFgDAJAAIAZAAIAAAHIgUAAQAGADAEAFQADAEABAFQgBAIgFAEQgGAFgHAAQgJAAgIgGgAgMgJQgDACgBAHQABAIAEAEQAEAGAHAAQAEAAADgEQADgDABgIQAAgIgKgIIgBAAQgIAAgEAEg");
	this.shape_4.setTransform(43.0766,-45.6967,1.3385,1.3385);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B2A").s().p("AgYAeIAAgCIABAAQAEAAACgBQACgCAAgEIAAgpQAAgEgCgBQgCgCgEAAIgBAAIAAgCIAxAAIAAAPIgBAAQgBgGgDgDQgCgCgHAAIgSAAIAAAuQAAAEACACQABABAEAAIABAAIAAACg");
	this.shape_5.setTransform(65.1946,8.6112,1.3385,1.3385);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2A").s().p("AAOAeIgTgcIgHAAIAAARQAAAGACABQABACAEAAIACAAIAAACIgaAAIAAgCIADAAQADAAACgCQABgBAAgGIAAglIgBgHQgCgCgDAAIgDAAIAAgCIAWAAQAJAAAEACQAFABADAEQADAEAAAFQAAAFgEAEQgEAEgHABIAMARQAFAHADABIAIACIAAACgAgMgZIAAAZIADAAQAJAAADgDQAEgEAAgGQAAgGgEgDQgDgDgFAAg");
	this.shape_6.setTransform(57.7662,8.6112,1.3385,1.3385);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2A").s().p("AgPAfIgEgBQgDAAgBADIgEAAIAFgXIACAAQABALAEAFQAFAEAGAAQAFAAADgDQAEgDgBgEQAAgDgBgDQgCgEgGgIIgIgKQgCgEAAgEQAAgHAGgEQAFgFAGAAIAFAAIAEACIAGABQACAAACgDIAEAAIgFAWIgCAAQgBgKgEgEQgEgFgFAAQgFAAgCADQgBACgBAEIABAEIAEAGQAJAKADAFQACAFAAAEQAAAIgFAGQgHAFgIAAQgFAAgHgCg");
	this.shape_7.setTransform(57.6,20.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B2B2A").s().p("AgDAeIgLgCIgCABIgBACIgBAAIAAgUIABAAIADAJIAGAGQAEACAEAAQAFgBAEgCQADgDAAgEIgBgFIgEgDIgIgHQgGgCgFgDIgFgFIgCgIQAAgGAFgEQAFgFAIAAQAEAAAFACIADABIACAAIABgDIACAAIAAAVIgCAAQAAgGgDgEQgCgDgEgCQgDgCgDAAQgEAAgEACQgDADAAAEQAAACACACQACADAKAGIALAGIAFAGIACAGQAAAIgGAEQgFAFgIAAg");
	this.shape_8.setTransform(3.6454,17.3151,1.3385,1.3385);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#25A740").s().p("AgOAVQgEgIAAgNQAAgJADgHQADgIAFgDQAEgDADAAQAHAAAFAHQAHAJAAAOQAAAKgDAHQgDAHgEAEQgFADgEAAQgIAAgGgKgAgEgYQgDAEgCAHIgBAPQAAAMADAIQADAGAEAAIAFgCQADgDAAgEQADgJAAgLQAAgKgDgHQgBgFgDgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgCAAgCADg");
	this.shape_9.setTransform(-34.8374,-12.6346,1.3385,1.3385);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#25A740").s().p("AgDAfIgLgDIgCAAIgBADIgBAAIAAgUIABAAIADAJQADAEADACQAEACAEAAQAGAAADgDQADgDAAgEIgBgEIgEgFIgIgFIgLgGQgEgDgBgDQgCgDAAgDQAAgHAFgFQAFgEAIAAQADAAAGACIADABIACAAIABgDIACAAIAAAUIgCAAQgBgGgCgDQgCgEgDgCIgHgCQgFAAgDADQgDADAAAEQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACAEAKAFIALAGQAEADABADQACADAAAEQAAAHgFAEQgFAFgJAAg");
	this.shape_10.setTransform(-72.4501,13.7345,1.3385,1.3385);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AhZAAICzAA");
	this.shape_11.setTransform(56.2435,14.8835,1.3386,1.3386);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#25A740").ss(1,1,1).p("AAKgBQAEgOALgaIgxAAQAHAOAIAaQAIAbABAQQACgQAIgbg");
	this.shape_12.setTransform(-25.2117,-17.3439,1.3386,1.3386);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#25A740").s().p("AgJgBQgIgagHgOIAxAAQgKAagFAOQgIAbgCAQQAAgQgJgbg");
	this.shape_13.setTransform(-25.2117,-17.3439,1.3386,1.3386);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00ADE7").ss(1,1,1).p("AACAKQASAGAWAJIAAgxQgLAGgdAJQgaAJgRAAQARACAaAIg");
	this.shape_14.setTransform(-4.3626,-31.9683,1.3386,1.3386);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00ADE7").s().p("AACAKQgagJgRgBQARgBAagIQAdgJALgGIAAAxQgWgKgSgFg");
	this.shape_15.setTransform(-4.3626,-31.9683,1.3386,1.3386);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAOAAQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFg");
	this.shape_16.setTransform(-25.2117,59.0581,1.3386,1.3386);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B2B2A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_17.setTransform(-25.2117,59.0581,1.3386,1.3386);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAOAAQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEg");
	this.shape_18.setTransform(-25.2117,-31.9683,1.3386,1.3386);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2B2B2A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_19.setTransform(-25.2117,-31.9683,1.3386,1.3386);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#2B2B2A").ss(1,1,2).p("Ag4COIBxAAIAAkbIhxAAg");
	this.shape_20.setTransform(80.9746,13.7791,1.3386,1.3386);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4COIAAkbIBxAAIAAEbg");
	this.shape_21.setTransform(80.9746,13.7791,1.3386,1.3386);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#00ADE7").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_22.setTransform(-13.4653,-39.2638,1.3386,1.3386);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00ADE7").s().p("AggAxIABgDIAIgBIAFgDQACgEADgIIAQg6IACgLIgBgDIgCgCIgHgBIAAgDIAlAAIgBADIgGABQgDABgCADQgCADgDAJIgPA6IgDAKIABADIACACIAJABIgBADg");
	this.shape_23.setTransform(-12.85,-46.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#25A740").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_24.setTransform(-40.9405,-10.6842,1.3386,1.3386);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#25A740").s().p("AgfAxIAAgDIAJgBIAEgDQACgEADgIIAQg6IACgLIgBgDIgCgCIgHgBIABgDIAkAAIgBADIgGABQgDABgCADQgCADgDAJIgQA6IgCAKIABADIACACIAIABIgBADg");
	this.shape_25.setTransform(-40.05,-17.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#EC6A20").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_26.setTransform(-49.1262,-39.3048,1.3385,1.3385);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#25A740").ss(0.5,1,1).p("AgbAAIA3AA");
	this.shape_27.setTransform(-80.5303,15.2182,1.3386,1.3386);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#EC6A20").ss(1,1,1).p("AgBgJQgSgFgWgKIAAAxQALgGAdgJQAagIARgCQgRAAgagJg");
	this.shape_28.setTransform(-46.2615,-31.9683,1.3386,1.3386);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EC6A20").s().p("AgpgYQAWAJASAGQAaAIARABQgRABgaAJQgdAJgLAGg");
	this.shape_29.setTransform(-46.2615,-31.9683,1.3386,1.3386);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#25A740").ss(1,1,1).p("AAKgBQAFgOAKgbIgxAAQALAdAEAMQAJAfAAANQACgTAIgZg");
	this.shape_30.setTransform(-66.2417,45.7198,1.3385,1.3385);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#25A740").s().p("AgJgBQgEgNgLgcIAxAAQgKAagFAPQgIAYgCAUQAAgOgJgeg");
	this.shape_31.setTransform(-66.2417,45.7198,1.3385,1.3385);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#25A740").ss(1,1,1).p("AAAj4IAAHx");
	this.shape_32.setTransform(-66.2878,8.8828,1.3384,1.3384);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B2B2A").s().p("AgEAxIABgDQAEAAADgCQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIgCgJIgGgYIgXAXIgIAJIgBACQAAABABAAQAAABAAAAQAAABABAAQAAABABAAIAGABIgBADIggAAIABgDQAFAAAFgDQAFgDAKgKIAdgdIgIgbQgEgNgDgDQgCgDgHAAIABgDIAiAAIgBADIgHABIgBABIgBADIACAIIAGAYIAOgPQAKgJADgGIABgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgHgBIAAgDIAiAAIgBADQgHABgGADQgFADgIAKIgaAaIAHAZIAEALQABAFADADQABACADABIAIABIgBADg");
	this.shape_33.setTransform(34.35,-52.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B2B2A").s().p("AgQBBQgDgDAAgCQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABIAEADQAEADACAAIADgBIADgEIAAgOIAAguIAAgOIgCgDIgDgBIgEABIgBgCIATgJIADAAIAABCQAAARgHAIQgIAIgKAAQgHAAgDgCgAAIg1QgCgDgBgDQABgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_34.setTransform(25.05,-50.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B2B2A").s().p("AAUAxIgQgwIgJgBIgJAeIgBAJQAAADACACQABACAHAAIAAADIgmAAIABgDIAGgBIAFgDIAEgMIASg6IACgJQAAgEgDgCQgDgCgFAAIABgDIAeAAQAQAAAIAGQAHAGAAAKQAAAKgHAHQgIAIgNABIAKAdQADAKAEADQAEAEAHAAIgBADgAAGgqIgKAnIAHABQAMAAAHgHQAIgHAAgKQgBgIgEgEQgFgFgIAAIgGABg");
	this.shape_35.setTransform(48.15,3.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B2B2A").s().p("AgEAxIABgDQAEAAADgCQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBIgCgJIgGgYIgWAXIgIAJIgBACQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIAGABIgBADIggAAIABgDQAFAAAEgDQAGgDAKgKIAdgdIgJgbQgDgNgDgDQgCgDgHAAIABgDIAiAAIgBADIgHABIgBABIgBADIACAIIAFAYIAQgPQAJgJADgGIABgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgHgBIAAgDIAiAAIgBADQgHABgFADQgGADgJAKIgZAaIAHAZIAEALQACAFACADQABACADABIAHABIAAADg");
	this.shape_36.setTransform(-4.6,12.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B2B2A").s().p("AgQBBQgDgDAAgCQAAgBAAAAQAAgBAAgBQABAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABIAFADQADADABAAIAEgBIADgEIAAgOIAAguIAAgOIgCgDIgDgBIgEABIgBgCIATgJIADAAIAABCQAAARgHAIQgIAIgKAAQgGAAgEgCgAAHg1QgBgDAAgDQAAgDABgCQADgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgDgCg");
	this.shape_37.setTransform(-14.25,13.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EC6A20").s().p("AggAxIABgDIAIgBIAFgDQACgEADgIIAQg6IACgLIgBgDIgDgCIgGgBIAAgDIAlAAIgBADIgGABQgDABgCADQgCADgCAJIgQA6IgDAKIABADIACACIAJABIgBADg");
	this.shape_38.setTransform(-47.85,-46.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAAAcQAMAAAIgIQAIgJAAgLQAAgLgIgIQgIgIgMAAQgLAAgIAIQgIAIAAALQAAALAIAJQAIAIALAAg");
	this.shape_39.setTransform(-66.9098,-31.7006,1.3386,1.3386);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgTAUQgJgIAAgMQAAgKAJgJQAIgIALAAQAMAAAIAIQAJAJAAAKQAAAMgJAIQgIAIgMAAQgLAAgIgIg");
	this.shape_40.setTransform(-66.9098,-31.7006,1.3386,1.3386);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#25A740").s().p("AgqAqQgJgJAAgKIABgJIADgLIAJggIACgLQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgIAAIABgDIApAAIgBADIgJABIgFAEQgCACgCAIIgKAhIgDAMIgBAJQAAAJAHAGQAGAGALAAQAHAAAGgDQAEgDAEgFQAEgFAEgIIAGgRIAIgcIADgPQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAAAgBgBQgCgCgHAAIABgDIAfAAIgBADQgFAAgDABIgEAEQgCACgCAIIgKAjQgFASgFAIQgFAJgIAFQgIAGgMAAQgPAAgJgIg");
	this.shape_41.setTransform(-79.175,8.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAAAdQAMAAAIgJQAIgJAAgLQAAgKgIgJQgIgJgMAAQgLAAgIAJQgIAJAAAKQAAALAIAJQAIAJALAAg");
	this.shape_42.setTransform(-66.9098,59.3258,1.3386,1.3386);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgTAUQgJgJAAgLQAAgKAJgJQAIgIALAAQAMAAAIAIQAJAJAAAKQAAALgJAJQgIAIgMAAQgLAAgIgIg");
	this.shape_43.setTransform(-66.9098,59.3258,1.3386,1.3386);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#2B2B2A").ss(1,1,2).p("AgblTIAADGQAXAAAQALQAQAKAAAPQAAAOgQALQgPAKgXAAQAXAAAPALQAQAKAAAPQAAAOgQALQgPAJgXAAQAXAAAPALQAQAKAAAPQAAAOgQALQgPAKgXAAQAXAAAPAKQAQALAAAOQAAAPgQALQgQAKgXAAIAADG");
	this.shape_44.setTransform(-21.4301,13.5449,1.3386,1.3386);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#2B2B2A").ss(1,1,2).p("Aook4IKLAAQAAgXAKgRQALgQAOAAQAPAAAKAQQALARAAAWQAAgXAKgQQAKgQAPAAQAPAAAKAQQAKAQAAAXQABgWAKgRQAKgQAPAAQAOAAALAQQAKARAAAWQABgWAKgRQALgQAOAAQAOAAALAQQALARAAAXICqACIAAKnIxRAA");
	this.shape_45.setTransform(7.0491,9.8971,1.3386,1.3386);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ESB_IM, rect = new cjs.Rectangle(-88.7,-63.2,178.3,127.4), [rect]);


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
	this.shape_5.graphics.f("#000000").s().p("AgOAgQgGgFgBgIIAJgBQAAAGADADQAEACAEAAQAEAAACgCQADgBADgDQACgEABgEIABgLIAAgCQgDAEgEACQgFADgEAAQgJAAgGgGQgGgFAAgLQAAgLAGgGQAGgIAKAAQAGAAAGAFQAFADAEAHQACAHAAANQAAANgCAIQgDAIgGAFQgGADgHAAQgJABgEgFgAgJgYQgFAGABAHQgBAHAFAEQAEAEAFAAQAGAAAEgEQAEgEAAgHQAAgIgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_5.setTransform(171.35,589.65);

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
(lib.animateSCIM01 = function(mode,startPosition,loop,reversed) {
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
		// animateSCIM.fla
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
		const titGen = "induction generator", titMot = "induction motor", titBrake = "induction brake";
		const centerX = 240, centerY = 300;
		const rSi = 165, rRe = 165 - 50; // center + stator inner radius
		const xSmin = 1.05, xSmax = 1.5, xSdel = 0.05; // range for xS
		var phBaseX, phBaseY;
		var phNom = 160; // phasor nominal length = 1 p.u.
		const W32 = Math.sqrt(3.0) / 2.0;
		const rad2deg = 180.0 / Math.PI;
		const posStWdgs = [ // positions for stator coil-sides:
			[
				[centerX, centerY - rSi], // U1
				[centerX, centerY + rSi] // U2
			],
			[
				[centerX + W32 * rSi, centerY + rSi / 2], // V1
				[centerX - W32 * rSi, centerY - rSi / 2] // V2
			],
			[
				[centerX - W32 * rSi, centerY + rSi / 2], // W1
				[centerX + W32 * rSi, centerY - rSi / 2] // W2
			]
		];
		const posRoWdgs = [ // init-positions for rotor coil-sides:
			[
				[centerX, centerY - rRe], // u1
				[centerX, centerY + rRe] // u2
			],
			[
				[centerX + W32 * rRe, centerY + rRe / 2], // v1
				[centerX - W32 * rRe, centerY - rRe / 2] // v2
			],
			[
				[centerX - W32 * rRe, centerY + rRe / 2], // w1
				[centerX + W32 * rRe, centerY - rRe / 2] // w2
			]
		];
		var stCurrent = []; // objects for U1, V1, W1, U2, V2, W2
		var roCurrent = []; // objects for u1, u2, v1, v2, w1, w2
		const CURR_SCALE = 1.4;
		var vecUS, vecIS, vecIR, vecI0, locus; // objects for phasor-diagram
		var roShaft, phiRo, phiSt;
		var sliderBarRR, sliderRR, txtRR;
		var sliderBarSpeed, sliderSpeed, txtSpeed;
		var infoXS, infoParam;
		var scim = { // params & status of the SCIM
			sigma: 0.15,
			x: 3,
			xsig: 3 * 0.15 / (1 - 0.15),
			rR: 0.0,
			theta: 0.0, // rotor-position
			omt: 0.0, // position PhiS
			thetaL: 0.0,
			speed: 0.0,
			uS: 0.15 * 3.0, // I_Soo = reference value
			iS: [1.0, 90], // amp, phase
			iR: [0.9, 90]
		};
		// stuff for start&stop, direction of speed&torque
		var startBtn, stopBtn, touch; // speedCW, speedCCW, torqCW, torqCCW, 
		const DBG_CREATE = false, DBG_ECD = true;
		
		init();
		
		function init() {
			c = createjs;
			r = window.devicePixelRatio;
			w = 850; //stage.canvas.width / r;
			h = 600; // stage.canvas.height / r;
			c.Touch.enable(stage);
			phBaseX = w - 160; // = 690
			phBaseY = h - 180; // = 420
		
			// TTZ-Logos & static stuff
			backGround = new c.Container();
			stage.addChild(backGround);
			// dynamic stuff
			game = new c.Container();
			stage.addChild(game);
			if (DBG_CREATE) console.log("scim: sigma=" + scim.sigma + ", x=" + scim.x + ", xsig=" + scim.xsig +
				", rR=" + scim.rR);
		
			createBackground(); // background, stator-yoke, equiv. circuit
			createStatorAT(); // stator ampere turns, phiSt
			createRotorAT(); // roShaft, rotor ampere turns, phiRo
			createTouchControl(); // button- & slider-stuff
			createPhasorDiag(); // phasors & header
		
			c.Ticker.addEventListener("tick", gameCore); // init infinite loop
			stage.enableMouseOver(30);
		
			initStartStop(); // event-listener start/stop
			initSlider(); // sliderRR + -Speed
		
			function createBackground() { // background, stator-yoke, equiv. circuit
				// TTZ-logo:
				back = new lib.bckGrndTTZthws();
				back.x = 0;
				back.y = 0;
				backGround.addChild(back);
		
				eqCirc = new lib.ESB_IM();
				eqCirc.x = 713;
				eqCirc.y = 90;
				eqCirc.scale = 1.1;
				backGround.addChild(eqCirc);
		
				core = new lib.stYoke();
				core.x = centerX;
				core.y = centerY;
				backGround.addChild(core);
			}
			function createStatorAT() { // stator ampere turns
				//let amp = [-1.0, 0.5, 0.5];
				for (let phase = 0; phase < 3; phase++) {
					stCurrent[phase] = new lib.iSp();
					stCurrent[phase + 3] = new lib.iSm();
					tmp = stCurrent[phase];
					game.addChild(tmp);
					tmp = stCurrent[phase + 3];
					game.addChild(tmp);
				}
				phiSt = new lib.phiSt();
				phiSt.x = centerX;
				phiSt.y = centerY;
				game.addChild(phiSt);
				setStatorAT(scim.iS);
			}
			function createRotorAT() { // roShaft, rotor ampere turns, phiRo
				const ROTOR_SCALE = 1.4;
				roShaft = new lib.roShaft();
				roShaft.x = centerX;
				roShaft.y = centerY;
				roShaft.scale = ROTOR_SCALE;
				game.addChild(roShaft);
		
				for (let phase = 0; phase < 3; phase++) {
					roCurrent[phase] = new lib.iRp();
					tmp = roCurrent[phase];
					game.addChild(tmp);
					roCurrent[phase + 3] = new lib.iRm();
					tmp = roCurrent[phase + 3];
					game.addChild(tmp);
				}
		
				phiRo = new lib.phiRo();
				phiRo.x = centerX;
				phiRo.y = centerY;
				game.addChild(phiRo);
				setRotor(90);
				setRotorAT(scim.iR);
			}
			function createTouchControl() { // button- & slider-stuff
				touch = new c.Container();
				stage.addChild(touch);
				const BTN_SCALE = 1.2;
		
				createStartStop();
				createSlider();
		
				function createSlider() { // 2 sliders
		
					// 1. slider for R_R:
					/*sliderBarRR = new lib.SliderBarP();
					sliderRR = new lib.Slider();
					sliderBarRR.x = sliderRR.x = phBaseX;
					sliderBarRR.y = sliderRR.y = stopBtn.y;
					touch.addChild(sliderBarRR);
					touch.addChild(sliderRR);
					txtRR = new c.Text("0.00", "normal 10px Arial", "#000000");
					txtRR.textAlign = "center";
					txtRR.x = sliderBarRR.x - sliderBarRR.nominalBounds.width / 2;
					sliderRR.x = txtRR.x;
					txtRR.y = sliderRR.y - 23;
					txtRR.width = 40;
					touch.addChild(txtRR);
					let labelRR = new c.Text("R_R\u0393/X_\u03C3\u0393:", "normal 16px Arial", "#000000");
					// http://www.javascripter.net/faq/greekletters.htm
					labelRR.textAlign = "left";
					labelRR.x = phBaseX - 210;
					labelRR.y = sliderBarRR.y - 9;
					labelRR.width = 50;
					backGround.addChild(labelRR);*/
		
					sliderRR = new createSliderObj(phBaseX, stopBtn.y, "R_R\u0393/X_\u03C3\u0393:");
					// http://www.javascripter.net/faq/greekletters.htm
					//touch.addChild(sliderRR);
		
					// 2. slider for torque:
					/*sliderBarSpeed = new lib.SliderBar();
					sliderSpeed = new lib.Slider();
					sliderBarSpeed.x = sliderSpeed.x = phBaseX;
					sliderBarSpeed.y = sliderSpeed.y = stopBtn.y - 50;
					touch.addChild(sliderBarSpeed);
					touch.addChild(sliderSpeed);
					txtSpeed = new c.Text("0.00", "normal 10px Arial", "#000000");
					txtSpeed.textAlign = "center";
					txtSpeed.x = sliderBarSpeed.x - sliderBarSpeed.nominalBounds.width / 6;
					sliderSpeed.x = txtSpeed.x;
					txtSpeed.y = sliderSpeed.y - 23;
					txtSpeed.width = 40;
					touch.addChild(txtSpeed);
					let labelSpd = new c.Text("speed (p.u.):", "normal 16px Arial", "#000000");
					labelSpd.textAlign = "left";
					labelSpd.x = phBaseX - 210;
					labelSpd.y = sliderBarSpeed.y - 9;
					labelSpd.width = 50;
					backGround.addChild(labelSpd);*/
					
					sliderSpeed = new createSliderObj(phBaseX, stopBtn.y - 50, "speed (p.u.):");
					sliderSpeed.slider.x += sliderSpeed.bar.nominalBounds.width / 3;
					sliderSpeed.txt.x = sliderSpeed.slider.x;
		
					function createSliderObj(x, y, description) {
						this.bar = new lib.SliderBarP(); //sliderBarRR
						this.slider = new lib.Slider(); // sliderRR
						this.bar.x = this.slider.x = x;
						this.bar.y = this.slider.y = y;
						let tmp = this.bar; touch.addChild(tmp);
						tmp = this.slider; touch.addChild(tmp);
						this.txt = new c.Text("0.00", "normal 10px Arial", "#000000"); // txtRR
						this.txt.textAlign = "center";
						this.txt.x = this.bar.x - this.bar.nominalBounds.width / 2;
						this.slider.x = this.txt.x;
						this.txt.y = this.slider.y - 23;
						this.txt.width = 40;
						tmp = this.txt; touch.addChild(tmp);
						this.label = new c.Text(description, "normal 16px Arial", "#000000");
						this.label.textAlign = "left";
						this.label.x = x - 210;
						this.label.y = this.bar.y - 9;
						this.label.width = 50;
						tmp = this.label; backGround.addChild(tmp);
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
			function createPhasorDiag() { // phasors & header
				// first, define the locus as background:
				locusIS = new lib.locus();
				game.addChild(locusIS);
		
				// vecUS stays constant
				vecUS = new lib.vecUS();
				vecUS.x = 2.1 * centerX;
				vecUS.y = centerY + 30;
				game.addChild(vecUS);
		
				// init I_S = I_Soo
				vecIS = new lib.vecIS();
				vecIS.x = vecUS.x;
				vecIS.y = vecUS.y;
				vecIS.rotation = 90;
				phNom = (w - vecUS.x - 10) / vecIS.nominalBounds.height;
				vecIS.scale = phNom;
				game.addChild(vecIS);
		
				// vec I_0 stays constant
				vecI0 = new lib.vecI0();
				vecI0.x = vecUS.x;
				vecI0.y = vecUS.y;
				//vecI0.rotation = 90;
				vecI0.scale = scim.sigma * vecIS.nominalBounds.height * vecIS.scale / vecI0.nominalBounds.width;
				game.addChild(vecI0);
		
				// vec I_R = I_Roo
				vecIR = new lib.vecIR();
				let vecISlength = vecIS.nominalBounds.height * vecIS.scale;
				vecIR.x = vecUS.x + vecISlength;
				vecIR.y = vecUS.y;
				vecIR.rotation = -90;
				vecIR.scale = (1 - scim.sigma) * phNom;
				game.addChild(vecIR);
		
				// params for locus itself:
				locusIS.y = vecI0.y;
				locusIS.x = vecI0.x + vecI0.nominalBounds.width * vecI0.scale;
				locusIS.scale = vecIR.nominalBounds.height * vecIR.scale / locusIS.nominalBounds.height;
		
				// title
				header = new c.Text(titMot, "bold 24px Arial", "#000000");
				header.textAlign = "center";
				header.x = centerX;
				header.y = 35;
				header.width = 300;
				game.addChild(header);
			}
		
			function gameCore(event) { // init infinite loop
				if (inGame) {
					setRotor(scim.theta - scim.speed); // speed > 0 => CCW, speed < 0 => CW
					scim.omt -= 1.0; // 1°/step CCW 
					if (scim.omt < -180.0) {
						scim.omt += 360.0;
					}
					setStatorAT(scim.iS); // psi = f(speed)
					setRotorAT(scim.iR);
				}
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
			function initSlider() { // sliderField + -Torque
				sliderRR.slider.addEventListener("pressmove", function (e) {
					// update GUI, uPn & vecUP.scale => updatePhasors
					let p = stage.globalToLocal(e.stageX, e.stageY);
					sliderRR.slider.x = limitIt(p.x, sliderRR.bar.x - sliderRR.bar.nominalBounds.width / 2,
						sliderRR.bar.x + sliderRR.bar.nominalBounds.width / 2)
					sliderRR.txt.x = sliderRR.slider.x;
					scim.rR = (0.5 + (sliderRR.slider.x - sliderRR.bar.x) / sliderRR.bar.nominalBounds.width);
					scim.rR = step(scim.rR, 0.05);
					sliderRR.txt.text = scim.rR.toFixed(2);
					scim.rR *= scim.xsig;
					calcECD();
				});
				sliderSpeed.slider.addEventListener("pressmove", function (e) {
					// update GUI & state.torque => updatePhasors
					let p = stage.globalToLocal(e.stageX, e.stageY);
					sliderSpeed.slider.x = limitIt(p.x, sliderSpeed.bar.x - sliderSpeed.bar.nominalBounds.width / 2,
						sliderSpeed.bar.x + sliderSpeed.bar.nominalBounds.width / 2)
					sliderSpeed.txt.x = sliderSpeed.slider.x;
					scim.speed = (0.5 + 3.0 * (sliderSpeed.slider.x - sliderSpeed.bar.x) / sliderSpeed.bar.nominalBounds.width);
					scim.speed = step(scim.speed, 0.05);
					sliderSpeed.txt.text = scim.speed.toFixed(2);
					if (scim.speed > 1) { // generator
						header.text = titGen;
					} else if (scim.speed < 0.0) {
						header.text = titBrake;
					} else {
						header.text = titMot;
					}
					calcECD();
				});
		
				/*sliderRR.addEventListener("pressmove", function (e) {
					// update GUI, uPn & vecUP.scale => updatePhasors
					let p = stage.globalToLocal(e.stageX, e.stageY);
					sliderRR.x = limitIt(p.x, sliderBarRR.x - sliderBarRR.nominalBounds.width / 2,
						sliderBarRR.x + sliderBarRR.nominalBounds.width / 2)
					txtRR.x = sliderRR.x;
					scim.rR = (0.5 + (sliderRR.x - sliderBarRR.x) / sliderBarRR.nominalBounds.width);
					scim.rR = step(scim.rR, 0.05);
					txtRR.text = scim.rR.toFixed(2);
					scim.rR *= scim.xsig;
					calcECD();
				});
				
				sliderSpeed.addEventListener("pressmove", function (e) {
					// update GUI & state.torque => updatePhasors
					let p = stage.globalToLocal(e.stageX, e.stageY);
					sliderSpeed.x = limitIt(p.x, sliderBarSpeed.x - sliderBarSpeed.nominalBounds.width / 2,
						sliderBarSpeed.x + sliderBarSpeed.nominalBounds.width / 2)
					txtSpeed.x = sliderSpeed.x;
					scim.speed = (0.5 + 3.0 * (sliderSpeed.x - sliderBarSpeed.x) / sliderBarSpeed.nominalBounds.width);
					scim.speed = step(scim.speed, 0.05);
					txtSpeed.text = scim.speed.toFixed(2);
					if (scim.speed > 1) { // generator
						header.text = titGen;
					} else if (scim.speed < 0.0) {
						header.text = titBrake;
					} else {
						header.text = titMot;
					}
					calcECD();
				});*/
			
				function limitIt(value, min, max) {
					if (value < min)
						return min;
					else if (value > max)
						return max;
					else
						return value;
				}
				function step(value, step) {
					let tmp = Math.round(value / step);
					return (tmp * step);
				}
			}
		
			function stopTheGame() { // initUpDn=>resetGUI, initStartSop & workaround for debugging
				stopBtn.visible = false;
				startBtn.visible = true;
				inGame = false;
			}
		
			function setStatorAT([iS, phi]) { //
				phi += scim.omt;
				phiSt.rotation = phi;
				for (let phase = 0; phase < 3; phase++) {
					amp = -iS * Math.sin(phi / rad2deg - phase * Math.PI * 2 / 3);
					for (let side = 0; side < 2; side++) {
						if (amp < 0) {
							stCurrent[phase + (1 - side) * 3].x = posStWdgs[phase][side][0];
							stCurrent[phase + (1 - side) * 3].y = posStWdgs[phase][side][1];
						} else {
							stCurrent[phase + side * 3].x = posStWdgs[phase][side][0];
							stCurrent[phase + side * 3].y = posStWdgs[phase][side][1];
						}
						stCurrent[phase + side * 3].scale = Math.sqrt(Math.abs(amp)) * CURR_SCALE;
					}
				}
			}
			function setRotor(phi) {
				roShaft.rotation = phi + 180;
				scim.theta = phi;
				if (scim.theta < -180.0) {
					scim.theta += 360.0;
				}
			}
			function setRotorAT([iR, phi]) {
				phi = 180 + phi + scim.omt;
				phiRo.rotation = phi;
				let co = Math.cos((scim.theta - 90) / rad2deg);
				let si = Math.sin((scim.theta - 90) / rad2deg);
				for (let phase = 0; phase < 3; phase++) {
					amp = -iR * Math.sin((phi - scim.theta + 90) / rad2deg - phase * Math.PI * 2 / 3);
					for (let side = 0; side < 2; side++) {
						let x1 = posRoWdgs[phase][side][0],
						y1 = posRoWdgs[phase][side][1];
						if (amp < 0) {
							roCurrent[phase + (1 - side) * 3].x = (x1 - centerX) * co + (centerY - y1) * si + centerX;
							roCurrent[phase + (1 - side) * 3].y = (x1 - centerX) * si + (y1 - centerY) * co + centerY;
						} else {
							roCurrent[phase + side * 3].x = (x1 - centerX) * co + (centerY - y1) * si + centerX;
							roCurrent[phase + side * 3].y = (x1 - centerX) * si + (y1 - centerY) * co + centerY;
						}
						roCurrent[phase + side * 3].scale = Math.sqrt(Math.abs(amp)) * CURR_SCALE;
					}
				}
			}
			function calcECD() { // get iS and iR 
				let iSimag = scim.uS / scim.x;
				let rRSpd = 9.999;
				if (Math.abs(scim.speed - 1) < 0.01) {
					scim.iR[0] = 0;
					scim.iR[1] = 0;
					scim.iS[0] = iSimag;
					scim.iS[1] = 90;
				} else {
					rRSpd = scim.rR / (1 - scim.speed);
					scim.iR[0] = scim.uS / Math.sqrt(scim.xsig * scim.xsig + rRSpd * rRSpd);
					scim.iR[1] = Math.atan2(scim.xsig, rRSpd) * rad2deg;
					let iSreal = scim.iR[0] * Math.cos(scim.iR[1] / rad2deg);
					iSimag += scim.iR[0] * Math.sin(scim.iR[1] / rad2deg);
					scim.iS[0] = Math.sqrt(iSreal * iSreal + iSimag * iSimag);
					scim.iS[1] = Math.atan2(iSimag, iSreal) * rad2deg;
				}
				// |IS|, phi:
				vecIS.scale = phNom * scim.iS[0];
				vecIS.rotation = scim.iS[1];
				// |IR|, phiR:
				vecIR.scale = phNom * scim.iR[0];
				vecIR.rotation = scim.iR[1] + 180;
				// IR starts @ end of IS:
				let vecISlength = vecIS.nominalBounds.height * vecIS.scale;
				vecIR.x = vecIS.x + vecISlength * Math.sin(scim.iS[1] / rad2deg);
				vecIR.y = vecIS.y - vecISlength * Math.cos(scim.iS[1] / rad2deg);
				if (DBG_ECD) console.log("scim: sigma=" + scim.sigma + ", x=" + scim.x + ", xsig=" + scim.xsig.toFixed(3) +
					", rR=" + scim.rR.toFixed(3) + ", rRSpd=" + rRSpd.toFixed(3) + ", uS=" + scim.uS.toFixed(3));
				if (DBG_ECD) console.log("scim: iS=[" + scim.iS[0].toFixed(3) + " : " + scim.iS[1].toFixed(0) + "], iR=[" + scim.iR[0].toFixed(3) + " : " + scim.iR[1].toFixed(0) + "]");
			}
		
		}
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
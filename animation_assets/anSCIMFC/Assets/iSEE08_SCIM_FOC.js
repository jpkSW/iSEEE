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
	this.shape.setTransform(-0.0763,-0.0166,3.1741,3.1767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAognIhPBP");
	this.shape_1.setTransform(-0.0763,-0.0166,3.1741,3.1767);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("Ag4AAQAAgWARgRQAQgQAXAAQAXAAARAQQARARAAAWQAAAYgRAQQgRARgXAAQgXAAgQgRQgRgQAAgYg");
	this.shape_2.setTransform(0.003,-0.0166,3.1741,3.1767);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC6A20").s().p("AgnAoQgRgQAAgYQAAgWARgRQAQgQAXAAQAXAAARAQQARARAAAWQAAAYgRAQQgRAQgXAAQgXAAgQgQg");
	this.shape_3.setTransform(0.003,-0.0166,3.1741,3.1767);

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
	this.shape.setTransform(-0.1076,-0.0166,3.1741,3.1767);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(-0.1076,-0.0166,3.1741,3.1767);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("Ag4AAQAAgWARgRQAQgQAXAAQAXAAARAQQARARAAAWQAAAYgRAQQgRARgXAAQgXAAgQgRQgRgQAAgYg");
	this.shape_2.setTransform(-0.0767,-0.0339,3.1737,3.1764);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC6A20").s().p("AgnAoQgRgQAAgYQAAgWARgRQAQgQAXAAQAXAAARAQQARARAAAWQAAAYgRAQQgRAQgXAAQgXAAgQgQg");
	this.shape_3.setTransform(-0.0767,-0.0339,3.1737,3.1764);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iSm, rect = new cjs.Rectangle(-19.1,-19,38.1,37.9), [rect]);


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
	this.shape.setTransform(-0.0366,-121.3844,3.1736,3.1764);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADE7").s().p("AgYA0QgGAAgCgEQgEgFADgEIACgFIAMgiQAHgXADgTQABgEADgDQADgCACAAQAJAAABAJQADATAHAXQAGAVAIARQADAFgDAFQgDAEgGAAg");
	this.shape_1.setTransform(-0.0366,-121.3844,3.1736,3.1764);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.2,0,0,4).p("AgJmNIAAMMQAAAEADADQADADADAAQAEAAADgDQADgDAAgEIAAsM");
	this.shape_2.setTransform(-0.02,13.0894,3.173,3.1758);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("AgGGIQgDgDAAgEIAAsLIATAAIAAMLQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(-0.02,12.2954,3.173,3.1758);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.phiRo, rect = new cjs.Rectangle(-12.2,-139,24.4,277.8), [rect]);


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
	this.shape.setTransform(-0.1605,0.0414,3.174,3.1779);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AAognIhPBP");
	this.shape_1.setTransform(-0.1605,0.0414,3.174,3.1779);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("Ag4AAQAAgWARgRQARgRAWAAQAXAAARARQARARAAAWQAAAXgRARQgRARgXAAQgXAAgQgRQgRgRAAgXg");
	this.shape_2.setTransform(-0.0812,-0.0381,3.174,3.1779);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("AgnAoQgRgRAAgXQAAgWARgRQARgQAWgBQAXABARAQQARAQAAAXQAAAXgRARQgRAQgXABQgXgBgQgQg");
	this.shape_3.setTransform(-0.0812,-0.0381,3.174,3.1779);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iRp, rect = new cjs.Rectangle(-19.1,-19,38.1,37.9), [rect]);


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
	this.shape.setTransform(-0.0193,0.0414,3.174,3.1779);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B2A").s().p("AgGAMQgFgDgCgFQgBgFADgFQADgFAFgCQAFgBAFADQAFADACAFQABAFgDAFQgDAFgFACIgEAAQgDAAgDgCg");
	this.shape_1.setTransform(-0.0193,0.0414,3.174,3.1779);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B2B2A").ss(0.3,0,0,4).p("AgwgbQAMgUAWgHQAWgFAUALQAVAMAGAWQAGAWgMAUQgMAUgWAHQgWAFgUgLQgVgLgGgXQgGgWAMgUg");
	this.shape_2.setTransform(-0.0585,-0.0664,3.1734,3.1775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00ADE7").s().p("AgbAxQgVgLgGgXQgGgWAMgUQAMgUAWgGQAWgHAUAMQAVAMAGAWQAGAWgMAVQgMATgWAHQgIACgHAAQgOAAgNgIg");
	this.shape_3.setTransform(-0.0585,-0.0664,3.1734,3.1775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iRm, rect = new cjs.Rectangle(-19.1,-19,38.1,38), [rect]);


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
	this.shape.setTransform(-0.0572,-111.1284,0.99,1.0593);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25A740").s().p("AgxBUQAVg2AIgbQAPgvAFgoQAEAiARA1QAOAxAPAgg");
	this.shape_1.setTransform(-0.0572,-111.1284,0.99,1.0593);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#25A740").ss(2.1,1,1).p("AAAI2IAAxr");
	this.shape_2.setTransform(-0.0572,-60.0976,0.99,1.0593);

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
	this.shape.setTransform(-0.1034,-111.1467,1.0598,1.058);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6A20").s().p("AgxBUQAWg3AIgZQAPgzAEgkQAEAkAQAzQAQAzAOAdg");
	this.shape_1.setTransform(-0.1034,-111.1467,1.0598,1.058);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EC6A20").ss(2.1,1,1).p("AAAI3IAAxt");
	this.shape_2.setTransform(-0.1419,-60.1547,1.0597,1.0578);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecIS, rect = new cjs.Rectangle(-6.4,-121.2,12.6,122.1), [rect]);


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
	this.shape.setTransform(-0.0654,-111.1565,0.9949,1.0592);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADE7").s().p("AgxBUQAVg2AIgbQAPgvAFgoQAFAlAQAyQAPAzAOAeg");
	this.shape_1.setTransform(-0.0654,-111.1565,0.9949,1.0592);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00ADE7").ss(2.1,1,1).p("AAAI2IAAxr");
	this.shape_2.setTransform(-0.0851,-60.1673,0.9948,1.0591);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vecIR, rect = new cjs.Rectangle(-6,-121.2,12,122.1), [rect]);


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
	this.shape.setTransform(-41.9453,-41.4402,1.3385,1.3385);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00ADE7").s().p("AgRAOQgHgGAAgJQAAgGADgEQADgEAEgCQAFgDAIAAIAaAAIAAAHIgUAAQAHAEADAEQADAEAAAFQAAAHgFAFQgGAFgIAAQgKAAgGgHgAgMgKQgEAEAAAGQAAAIAFAFQAEAFAGAAQAEAAAEgEQADgDAAgIQAAgJgJgHIgCAAQgGAAgFADg");
	this.shape_1.setTransform(1.8956,-40.0157,1.3384,1.3384);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00ADE7").s().p("AANAeIgTgcIgGAAIAAARQAAAGACABQABACADAAIADAAIAAACIgZAAIAAgCIACAAQAEAAABgCQABgCAAgFIAAglQAAgGgCgCQgBgBgDAAIgCAAIAAgCIAVAAQAJAAAEACQAFABACADQAEAEAAAFQAAAGgEAEQgEAEgHAAIAMASQAGAGABACQAEACAEAAIAAACgAgMgZIAAAZIADAAQAJAAACgDQAFgEAAgGQAAgFgEgEQgDgDgFgBg");
	this.shape_2.setTransform(-5.7331,-41.3875,1.3384,1.3384);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B2A").s().p("AgYAeIAAgCIABAAQAEAAACgBQABgCAAgEIAAgpQAAgEgBgCQgCgBgEAAIgBAAIAAgCIAxAAIAAAOIgCAAQAAgFgDgDQgCgCgHAAIgSAAIAAAuQAAAEACACQABABAEAAIABAAIAAACg");
	this.shape_3.setTransform(50.177,-47.1091,1.3384,1.3384);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2B2A").s().p("AgRAPQgGgIgBgHQAAgGADgEQADgFAEgCQAFgDAJAAIAZAAIAAAHIgUAAQAGADAEAFQADAEABAFQgBAIgFAEQgGAFgHAAQgJAAgIgGgAgMgJQgDACgBAHQABAIAEAEQAEAGAHAAQAEAAADgEQADgDABgIQAAgIgKgIIgBAAQgIAAgEAEg");
	this.shape_4.setTransform(43.0502,-45.7372,1.3384,1.3384);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2B2A").s().p("AgYAeIAAgCIABAAQAEAAACgBQACgCAAgEIAAgpQAAgEgCgBQgCgCgEAAIgBAAIAAgCIAxAAIAAAPIgBAAQgBgGgDgDQgCgCgHAAIgSAAIAAAuQAAAEACACQABABAEAAIABAAIAAACg");
	this.shape_5.setTransform(65.1667,8.5669,1.3384,1.3384);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2A").s().p("AAOAeIgTgcIgHAAIAAARQAAAGACABQABACAEAAIACAAIAAACIgaAAIAAgCIADAAQADAAACgCQABgBAAgGIAAglIgBgHQgCgCgDAAIgDAAIAAgCIAWAAQAJAAAEACQAFABADAEQADAEAAAFQAAAFgEAEQgEAEgHABIAMARQAFAHADABIAIACIAAACgAgMgZIAAAZIADAAQAJAAADgDQAEgEAAgGQAAgGgEgDQgDgDgFAAg");
	this.shape_6.setTransform(57.7388,8.5669,1.3384,1.3384);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2A").s().p("AgPAfIgEgBQgDAAgCADIgCAAIAEgXIADAAQAAALAEAFQAFAEAGAAQAFAAADgDQADgDABgEQgBgDgBgDQgCgEgFgIIgIgKQgCgEAAgEQAAgHAEgEQAFgFAIAAIAEAAIAFACIAEABQAEAAACgDIACAAIgEAWIgDAAQAAgKgDgEQgFgFgFAAQgEAAgDADQgBACAAAEIABAEIADAGQAJAKADAFQACAFABAEQAAAIgHAGQgFAFgJAAQgFAAgHgCg");
	this.shape_7.setTransform(57.55,20.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B2B2A").s().p("AgDAeIgLgCIgCABIgBACIgBAAIAAgUIABAAIADAJIAGAGQAEACAEAAQAFgBAEgCQADgDAAgEIgBgFIgEgDIgIgHQgGgCgFgDIgFgFIgCgIQAAgGAFgEQAFgFAIAAQAEAAAFACIADABIACAAIABgDIACAAIAAAVIgCAAQAAgGgDgEQgCgDgEgCQgDgCgDAAQgEAAgEACQgDADAAAEQAAACACACQACADAKAGIALAGIAFAGIACAGQAAAIgGAEQgFAFgIAAg");
	this.shape_8.setTransform(3.6296,17.2851,1.3385,1.3385);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#25A740").s().p("AgOAVQgEgIAAgNQAAgJADgHQADgIAFgDQAEgDADAAQAHAAAFAHQAHAJAAAOQAAAKgDAHQgDAHgEAEQgFADgEAAQgIAAgGgKgAgEgYQgDAEgCAHIgBAPQAAAMADAIQADAGAEAAIAFgCQADgDAAgEQADgJAAgLQAAgKgDgHQgBgFgDgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgCAAgCADg");
	this.shape_9.setTransform(-34.8514,-12.6631,1.3385,1.3385);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#25A740").s().p("AgDAfIgLgDIgCAAIgBADIgBAAIAAgUIABAAIADAJQADAEADACQAEACAEAAQAGAAADgDQADgDAAgEIgBgEIgEgFIgIgFIgLgGQgEgDgBgDQgCgDAAgDQAAgHAFgFQAFgEAIAAQADAAAGACIADABIACAAIABgDIACAAIAAAUIgCAAQgBgGgCgDQgCgEgDgCIgHgCQgFAAgDADQgDADAAAEQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAQACAEAKAFIALAGQAEADABADQACADAAAEQAAAHgFAEQgFAFgJAAg");
	this.shape_10.setTransform(-72.4624,13.7047,1.3385,1.3385);

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
	this.shape_23.graphics.f("#00ADE7").s().p("AggAxIABgDIAIgBIAFgDQACgEADgIIAQg6IACgLIgBgDIgCgCIgHgBIAAgDIAlAAIgBADIgGABQgEABgBADQgCADgDAJIgQA6IgCAKIABADIACACIAJABIgCADg");
	this.shape_23.setTransform(-12.95,-46.475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#25A740").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_24.setTransform(-40.9405,-10.6842,1.3386,1.3386);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#25A740").s().p("AggAxIABgDIAIgBIAFgDQADgEACgIIAQg6IACgLIgBgDIgDgCIgGgBIAAgDIAmAAIgCADIgGABQgDABgCADQgCADgCAJIgQA6IgCAKIAAADIACACIAJABIgBADg");
	this.shape_25.setTransform(-40.1,-17.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#EC6A20").ss(0.5,1,1).p("AgXAAIAvAA");
	this.shape_26.setTransform(-49.1396,-39.3322,1.3385,1.3385);

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
	this.shape_30.setTransform(-66.2606,45.673,1.3384,1.3384);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#25A740").s().p("AgJgBQgEgNgLgcIAxAAQgKAagFAPQgIAYgCAUQAAgOgJgeg");
	this.shape_31.setTransform(-66.2606,45.673,1.3384,1.3384);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#25A740").ss(1,1,1).p("AAAj4IAAHx");
	this.shape_32.setTransform(-66.313,8.8237,1.3383,1.3383);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2B2B2A").s().p("AgEAxIAAgDQAFAAADgCQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgJIgGgYIgWAXIgIAJIgBACQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAIAHABIgBADIggAAIAAgDQAHAAADgDQAGgDAKgKIAcgdIgIgbQgDgNgCgDQgDgDgGAAIAAgDIAiAAIgBADIgGABIgCABIgBADIACAIIAFAYIAQgPQAJgJADgGIABgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgHgBIABgDIAgAAIAAADQgHABgFADQgGADgJAKIgZAaIAHAZIAEALQABAFADADQABACADABIAHABIAAADg");
	this.shape_33.setTransform(34.3,-52.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2B2B2A").s().p("AgPBBQgEgDAAgCQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABIAEADQAEADACAAIADgBIACgEIABgOIAAguIgBgOIgBgDIgDgBIgEABIgBgCIATgJIADAAIAABCQAAARgHAIQgIAIgKAAQgGAAgDgCgAAIg1QgDgDAAgDQAAgDADgCQACgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgCgCg");
	this.shape_34.setTransform(24.95,-50.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B2B2A").s().p("AAUAxIgPgwIgKgBIgJAeIgBAJQAAADACACQABACAHAAIAAADIgnAAIACgDIAGgBIAFgDIAEgMIASg6IABgJQAAgEgCgCQgDgCgFAAIABgDIAfAAQAQAAAGAGQAIAGAAAKQAAAKgIAHQgGAIgOABIAKAdQADAKAEADQAEAEAHAAIgBADgAAGgqIgKAnIAHABQAMAAAIgHQAGgHABgKQAAgIgFgEQgFgFgIAAIgGABg");
	this.shape_35.setTransform(48.05,3.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2B2B2A").s().p("AgFAxIABgDQAGAAACgCQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgJIgGgYIgXAXIgIAJIgBACQAAABABAAQAAABAAAAQAAABABAAQAAAAAAABIAHABIgBADIghAAIABgDQAHAAADgDQAGgDAKgKIAcgdIgIgbQgDgNgCgDQgDgDgGAAIAAgDIAiAAIgBADIgGABIgCABIgBADIACAIIAFAYIAPgPQAKgJADgGIACgDQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAIgHgBIABgDIAgAAIAAADQgHABgGADQgEADgKAKIgZAaIAHAZIAEALQABAFACADQACACADABIAIABIgBADg");
	this.shape_36.setTransform(-4.65,12.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2B2B2A").s().p("AgPBBQgEgDAAgCQAAgBAAAAQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABIAEADQAEADACAAIADgBIACgEIABgOIAAguIgBgOIgBgDIgDgBIgEABIgBgCIATgJIADAAIAABCQAAARgHAIQgHAIgLAAQgGAAgDgCgAAHg1QgCgDAAgDQAAgDACgCQADgCADAAQADAAACACQACACAAADQAAADgCADQgCACgDAAQgDAAgDgCg");
	this.shape_37.setTransform(-14.3,13.425);

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
	this.shape_41.graphics.f("#25A740").s().p("AgqAqQgJgJAAgKIABgJIADgLIAJggIACgLQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgCgCgIAAIABgDIApAAIgBADIgJABQgDABgCADQgCACgCAIIgKAhIgDAMIgBAJQAAAJAHAGQAGAGALAAQAHAAAGgDQAEgDAEgFQAEgFAEgIIAGgRIAIgcIADgPQAAAAAAgBQAAgBAAAAQAAAAgBgBQAAAAgBgBQgCgCgHAAIABgDIAfAAIgBADQgFAAgDABIgEAEQgCACgCAIIgKAjQgFASgFAIQgFAJgIAFQgIAGgMAAQgPAAgJgIg");
	this.shape_41.setTransform(-79.275,8.325);

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

}).prototype = getMCSymbolPrototype(lib.ESB_IM, rect = new cjs.Rectangle(-88.8,-63.2,178.4,127.4), [rect]);


(lib.ECD_IM_dq = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02ACE6").s().p("AAAAeIAAgBIABAAIAFgBIABgCIAAgEIAAgSQgEAFgDACIgFABQgGAAgFgFQgEgFAAgIQAAgKAGgHQAGgGAIAAIAFABIADACIAFgDIACAAIAAAzIAAAFIACABIAEABIAAABgAgJgWQgDAEAAAJQAAAIADADQAEAEAFAAIADgBIAEgEIAAgRIAAgGIgEgDIgDgBQgFAAgEAEg");
	this.shape.setTransform(62.15,-8.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#02ACE6").s().p("AgXAlIABgDIAGAAIADgDIAEgJIALgrIACgIIgBgCIgCgCIgEAAIAAgDIAbAAIAAADIgFABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAgBAAIgDAJIgMArIgCAIIABACIABABIAGABIAAADg");
	this.shape_1.setTransform(58.675,-14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40A63F").s().p("AAHAgIAAgGIgGAFIgEABQgHAAgFgGQgFgFAAgJQAAgIAFgHQAGgHAIAAQAFAAADAEIAAgIIAAgIIgBgCIgCgBIgDABIgBgCIANgFIACAAIAAAuIAAAIIABADIABAAIADgBIABACIgMAFgAgIgEQgEAEAAAJQAAAJAEAEQAEAFAEAAQADAAAEgEIAAgVQAAgCgBgCQgBgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBIgDgBQgEAAgDADg");
	this.shape_2.setTransform(10.5,-10.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#40A63F").s().p("AgXAkIABgCIAGAAIADgDIAEgJIALgqIACgJIgBgCIgCgCIgEgBIAAgCIAbAAIAAACIgFABQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAABIgDAJIgMAqIgCAIIABADIABABIAGAAIAAACg");
	this.shape_3.setTransform(7.025,-14.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E36B2B").s().p("AgDAfIgFgCIgGgBIgBAAIgBADIgCAAIAAgUIACAAQABAGACADQACADAEADQAEACADAAQAGAAADgDQADgDAAgEIgBgFIgEgEIgIgFIgLgGIgFgGQgCgDAAgEQAAgGAFgFQAFgEAIAAQAEAAAFACIADABIACAAIABgDIACAAIAAAUIgCAAQAAgGgCgDQgCgEgEgCQgEgCgDAAQgFAAgDADQgDADAAADQAAADACACQADAEAJAFIAMAGQADACABAEQACADAAAEQAAAGgFAFQgGAFgIAAIgEAAg");
	this.shape_4.setTransform(-39.125,-29.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E36B2B").s().p("AgXAlIABgCIAGgBIADgDIAEgJIALgrIACgIIgBgDIgCgBIgEgBIAAgBIAbAAIAAABIgFABQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAAAIgDAJIgMArIgCAIIABACIABACIAGABIAAACg");
	this.shape_5.setTransform(-42.075,-33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2B2B2A").s().p("AAGAXQgDgCgDgGQgCAGgEACQgDADgFAAQgEAAgEgDQgFgCgDgHQgCgGAAgGQAAgHADgHQACgEAEgEQADgDAEgBIALgBIAAACQgHAAgFAHQgFAGAAAMQAAAMAEAFQACADAEAAQADAAADgCQADgDACgHIgDgJIAAgFQAAgGACgEQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQACAEAAAFQAAAGgDAJQACAHACADQADACAEAAQAEAAADgDQADgEAAgMQAAgOgGgIQgEgEgHAAIAAgCQAJAAAGADQAFADAEAHQADAHAAAHQAAAHgCAFQgDAHgFACQgFADgEAAQgFAAgDgDg");
	this.shape_6.setTransform(45.325,16.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2B2B2A").s().p("AgDAfIgFgCIgGgBIgBAAIgBADIgCAAIAAgUIACAAQABAGACADQACADAEADQAEACADAAQAGAAADgDQADgDAAgEIgBgFIgEgEIgIgFIgLgGIgFgGQgCgDAAgEQAAgGAFgFQAFgEAIAAQAEAAAFACIADABIACAAIABgDIACAAIAAAUIgCAAQAAgGgCgDQgCgEgEgCQgEgCgDAAQgFAAgDADQgDADAAADQAAADACACQADAEAJAFIAMAGQADACABAEQACADAAAEQAAAGgFAFQgGAFgIAAIgEAAg");
	this.shape_7.setTransform(44.975,5.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2B2B2A").s().p("AAAAeIAAgBIABAAIAFgBIABgCIAAgEIAAgSQgEAFgDACIgFABQgGAAgFgFQgEgFAAgIQAAgKAGgHQAGgGAIAAIAEABIAEACIAFgDIACAAIAAAzIAAAFIACABIAEABIAAABgAgJgWQgEAEAAAJQAAAIAEADQAEAEAFAAIADgBIAEgEIAAgRIAAgGIgEgDIgDgBQgFAAgEAEg");
	this.shape_8.setTransform(57.55,7.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2B2B2A").s().p("AAOAeIgUgcIgDAAIgBAAIgCAAIAAARQAAAGABABQACACADAAIADAAIAAACIgaAAIAAgCIADAAQADAAACgCQABgCAAgFIAAglQAAgGgBgBQgCgCgDAAIgDAAIAAgCIAWAAQAIAAAFACQAEABAEAEQADADAAAFQAAAGgEAEQgDAEgIABIAMARQAFAGADACQADACAFAAIAAACgAgMgZIAAAZIACAAIABAAQAIAAAEgEQAEgDAAgGQAAgGgEgDQgDgDgFAAIgHAAg");
	this.shape_9.setTransform(52.175,18.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2B2B2A").s().p("AAPAkIgLgjIgIAAIgGAVIgBAHQAAABAAABQAAAAAAABQAAAAAAAAQABABAAAAIAHACIgBABIgcAAIABgBIAFgBQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBIAEgJIAMgqIACgHQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQgDgCgDAAIABgBIAWAAQANAAAEAEQAGAFAAAHQAAAHgGAGQgFAFgJACIAGAUQAEAJACACQADACAFABIAAABgAAFgfIgIAdIAFABQAKgBAFgFQAFgEAAgIQAAgGgDgDQgDgEgHAAIgEABg");
	this.shape_10.setTransform(51.9,2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B2B2A").s().p("AAGAYQgDgDgDgGQgCAGgEADQgDACgFAAQgEAAgEgCQgFgEgDgFQgCgHAAgHQAAgGADgGQACgFAEgDQADgDAEgCIALgBIAAACQgHAAgFAHQgFAGAAALQAAAMAEAGQACADAEABQADAAADgEQADgCACgIIgDgJIAAgEQAAgGACgDQABgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQACADAAAFQAAAGgDAIQACAIACACQADADAEAAQAEAAADgDQADgFAAgLQAAgPgGgHQgEgDgHgBIAAgCQAJAAAGADQAFADAEAHQADAGAAAIQAAAHgCAGQgDAFgFAEQgFACgEAAQgFAAgDgCg");
	this.shape_11.setTransform(39.675,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2B2B2A").s().p("AAOAVIAAgCIABAAIAFgBIABgCIABgEIAAgRQgBgFgBgCQgBgCgFAAIgEABIgGAEIAAABIAAABIAAATIAAAFIACACIAFAAIAAACIgTAAIAAgCIAEgBIABgCIABgEIAAgRQAAgFgCgCQgCgDgDAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBABQgDACgCACIAAAVIAAAFIACACIAEAAIAAACIgTAAIAAgCIADAAIACgCIABgFIAAgPIgBgIIgBgCIgCgBIgCABIgBgCIAMgFIACAAIAAAJIAFgFIAEgDIAFgBQADAAACADQADACABAEIAIgHQADgCADAAQADAAACACQADACACADIABAIIAAARIAAAFIABACIAEAAIAAACg");
	this.shape_12.setTransform(10.9,12.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2B2B2A").s().p("AgDAfIgFgCIgGgBIgBAAIgBADIgCAAIAAgUIACAAQABAGACADQACADAEADQAEACADAAQAGAAADgDQADgDAAgEIgBgFIgEgEIgIgFIgLgGIgFgGQgCgDAAgEQAAgGAFgFQAFgEAIAAQAEAAAFACIADABIACAAIABgDIACAAIAAAUIgCAAQAAgGgCgDQgCgEgEgCQgEgCgDAAQgFAAgDADQgDADAAADQAAADACACQADAEAJAFIAMAGQADACABAEQACADAAAEQAAAGgFAFQgGAFgIAAIgEAAg");
	this.shape_13.setTransform(-2.575,11.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B2B2A").s().p("AgeAkIABgBIAGgBIADgCIAEgJIAMgsIACgIQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIgBAAIABgCIAcAAIAAACIgHABIgEAEIgDAJIgLArIgCAGQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAABAAQABABAAAAIAGAAQAIAAAEgCQAEgCADgDIAFgIIACgCIABAAIgHAUg");
	this.shape_14.setTransform(4.25,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2B2B2A").s().p("AgDAfIgFgCIgGgBIgBAAIgBADIgCAAIAAgUIACAAQABAGACADQACADAEADQAEACADAAQAGAAADgDQADgDAAgEIgBgFIgEgEIgIgFIgLgGIgFgGQgCgDAAgEQAAgGAFgFQAFgEAIAAQAEAAAFACIADABIACAAIABgDIACAAIAAAUIgCAAQAAgGgCgDQgCgEgEgCQgEgCgDAAQgFAAgDADQgDADAAADQAAADACACQADAEAJAFIAMAGQADACABAEQACADAAAEQAAAGgFAFQgGAFgIAAIgEAAg");
	this.shape_15.setTransform(-17.125,-34.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B2B2A").s().p("AgRAOQgHgGABgIQAAgGACgEQADgFAEgCQAEgDAJAAIAZAAIAAAHIgTAAQAHADADAFQAEAFgBAEQABAHgGAFQgGAFgIAAQgKAAgGgHgAgMgJQgEADAAAGQAAAHAFAGQAFAFAFAAQAEAAAEgEQADgDAAgIQAAgJgJgHIgCAAQgHAAgEAEg");
	this.shape_16.setTransform(-4.25,-33);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2B2B2A").s().p("AgeAkIABgBIAGgBIADgDIAEgJIANgrIABgIQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgCgBgEgBIgBAAIAAgBIAdAAIgBABIgGABIgEAEIgDAJIgLAqIgCAHQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQAAAAABAAQAAAAABAAQABABAAAAIAHAAQAHgBAEgCQAEgBADgDIAFgIIACgCIACAAIgIAUg");
	this.shape_17.setTransform(-10,-37.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#40A63F").s().p("AgDAfIgFgCIgGgBIgBAAIgBADIgCAAIAAgUIACAAQABAGACADQACADAEADQAEACADAAQAGAAADgDQADgDAAgEIgBgFIgEgEIgIgFIgLgGIgFgGQgCgDAAgEQAAgGAFgFQAFgEAIAAQAEAAAFACIADABIACAAIABgDIACAAIAAAUIgCAAQAAgGgCgDQgCgEgEgCQgEgCgDAAQgFAAgDADQgDADAAADQAAADACACQADAEAJAFIAMAGQADACABAEQACADAAAEQAAAGgFAFQgGAFgIAAIgEAAg");
	this.shape_18.setTransform(-62.225,10.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#2B2B2A").ss(0.5,0,0,4).p("AhyAAIDlAA");
	this.shape_19.setTransform(48,11.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#40A63F").ss(1,1,1).p("AAKgBQAFgOAKgaIgxAAQALAcAEAMQAJAfAAAMQADgTAHgYg");
	this.shape_20.setTransform(16.325,-13.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#40A63F").s().p("AgJgBQgEgMgLgcIAxAAQgKAagFAOQgHAYgDATQAAgMgJgfg");
	this.shape_21.setTransform(16.325,-13.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#02ACE6").ss(1,1,1).p("AgJgBQgFgOgKgaIAxAAQgJAXgFARQgIAYgDATQgCgTgHgYg");
	this.shape_22.setTransform(67.975,-13.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#02ACE6").s().p("AgJgBQgFgOgKgaIAxAAIgOAoQgIAYgDATQgCgTgHgYg");
	this.shape_23.setTransform(67.975,-13.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAOAAQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFg");
	this.shape_24.setTransform(16.325,44.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2B2B2A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_25.setTransform(16.325,44.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAOAAQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFg");
	this.shape_26.setTransform(16.325,-23.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2B2B2A").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_27.setTransform(16.325,-23.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#2B2B2A").ss(1,1,2).p("Ag4COIBxAAIAAkbIhxAAg");
	this.shape_28.setTransform(67.975,10.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag4COIAAkbIBxAAIAAEbg");
	this.shape_29.setTransform(67.975,10.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#02ACE6").ss(0.5,1,1).p("AgQAAIAhAA");
	this.shape_30.setTransform(57.5,-9.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#40A63F").ss(0.5,1,1).p("AgSAAIAlAA");
	this.shape_31.setTransform(5.675,-9.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#E36B2B").ss(0.5,1,1).p("AgSAAIAlAA");
	this.shape_32.setTransform(-43.75,-29.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#40A63F").ss(0.5,1,1).p("AgbAAIA3AA");
	this.shape_33.setTransform(-67.725,11.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#E36B2B").ss(1,1,1).p("AgBgJQgOgFgbgKIAAAxQAdgLAMgEQAfgJANgBQgTgBgZgIg");
	this.shape_34.setTransform(-40.95,-23.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E36B2B").s().p("AgqgYQAaAKAPAFQAYAIAUABQgNABgfAJIgpAPg");
	this.shape_35.setTransform(-40.95,-23.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#40A63F").ss(1,1,1).p("AAKgBQAGgSAJgWIgxAAQAIATAHAVQAIAeABANQADgTAHgYg");
	this.shape_36.setTransform(-56.025,34.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#40A63F").s().p("AgJgBQgHgVgIgTIAxAAQgJAWgGASQgHAYgDATQgBgNgIgeg");
	this.shape_37.setTransform(-56.025,34.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#40A63F").ss(1,1,1).p("AAAj5IAAHz");
	this.shape_38.setTransform(-56.05,6.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2B2B2A").s().p("AAGAXQgDgCgDgGQgCAGgEACQgDADgFAAQgEAAgEgDQgFgCgDgHQgCgFAAgIQAAgGADgHQACgEAEgDQADgEAEgBIALgBIAAACQgHABgFAGQgFAGAAALQAAANAEAFQACAEAEgBQADAAADgDQADgCACgHIgDgJIAAgGQAAgFACgEQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAQACAEAAAFQAAAFgDAKQACAHACACQADADAEAAQAEAAADgDQADgEAAgNQAAgOgGgGQgEgFgHAAIAAgCQAJAAAGADQAFADAEAHQADAGAAAIQAAAHgCAFQgDAHgFACQgFADgEAAQgFAAgDgDg");
	this.shape_39.setTransform(-22.425,-36.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2B2B2A").s().p("AgMAwQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBIAEgBIADABIADACQABABAAABQABAAAAAAQABABAAAAQAAAAAAAAIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIABgKIAAgiIgBgKIgBgCIgBgBIgEABIAAgCIANgGIADAAIAAAwQAAANgFAGQgGAGgIAAQgEAAgDgCgAAFgoQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIABgFQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIADABIACAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDACQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_40.setTransform(-28.6,-36.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2B2B2A").s().p("AAGAXQgDgCgDgGQgCAGgEACQgDADgFAAQgEAAgEgDQgFgCgDgHQgCgGAAgGQAAgHADgHQACgEAEgEQADgCAEgCIALgBIAAACQgHABgFAGQgFAGAAAMQAAAMAEAFQACAEAEgBQADAAADgCQADgDACgHIgDgJIAAgGQAAgFACgEQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQACAEAAAFQAAAFgDAKQACAHACADQADACAEAAQAEAAADgDQADgEAAgMQAAgPgGgGQgEgFgHAAIAAgCQAJAAAGADQAFADAEAHQADAHAAAHQAAAHgCAFQgDAHgFACQgFADgEAAQgFAAgDgDg");
	this.shape_41.setTransform(-8.025,8.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2B2B2A").s().p("AgMAxQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAEgBIADABIADACQABABAAABQABAAAAAAQABABAAAAQAAAAAAAAIACgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAgBIABgKIAAgiIgBgKIgBgCIgBgBIgEABIAAgCIANgGIADAAIAAAwQAAANgFAGQgGAGgIAAQgEAAgDgBgAAFgoQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIABgFQABAAAAAAQABAAAAgBQABAAAAAAQABAAABAAIADABIACAFQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgDACQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_42.setTransform(-14.2,8.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAAAcQAMAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgMAAQgKAAgJAIQgIAIAAALQAAAMAIAIQAJAIAKAAg");
	this.shape_43.setTransform(-56.55,-23.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTAUQgJgIABgMQgBgLAJgIQAJgIAKAAQAMAAAIAIQAJAIAAALQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_44.setTransform(-56.55,-23.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#40A63F").s().p("AgfAfQgHgGAAgIIABgHIACgIIAHgYIACgIQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgHgBIAAgCIAeAAIAAACIgHABIgDADIgDAHIgHAZIgDAJIgBAGQABAHAFAEQAEAFAIAAQAFAAAEgCQAEgCADgEQADgEADgGIADgMIAHgWIACgLIgBgDIgHgBIABgCIAXAAIAAACIgHABIgCADQgCABgBAGIgIAaIgHAUQgEAGgGAEQgGAEgKAAQgLAAgGgGg");
	this.shape_45.setTransform(-66.5,6.575);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#2B2B2A").ss(1,1,2).p("AAAAcQAMAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgMAAQgKAAgJAIQgIAIAAALQAAAMAIAIQAJAIAKAAg");
	this.shape_46.setTransform(-56.55,44.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgTAUQgJgIABgMQgBgLAJgIQAJgIAKAAQAMAAAIAIQAJAIAAALQAAAMgJAIQgIAIgMAAQgKAAgJgIg");
	this.shape_47.setTransform(-56.55,44.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#2B2B2A").ss(1,1,2).p("Apnk3IECAAQAAgXALgRQAKgRAPAAQAOAAALARQAKAQAAAXQABgXAKgQQAKgRAPAAQAOAAALARQAKAQAAAXQABgXAKgQQAKgRAPAAQAOAAALARQAKAQAAAXQABgXAJgQQALgRAOAAQAPAAALARQAKARAAAXIK4AAIAAKoIzdAA");
	this.shape_48.setTransform(5.725,7.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#2B2B2A").ss(1,1,2).p("AgblTIAADGQAXAAAQALQAQAKAAAPQAAAOgQALQgPAKgXAAQAXABAPAJQAQALAAAOQAAAPgQALQgPAJgXAAQAXAAAPAKQAQALAAAOQAAAPgQAKQgPAKgXABQAXAAAPAKQAQALAAAOQAAAPgQAKQgQALgXAAIAADG");
	this.shape_49.setTransform(19.15,10.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ECD_IM_dq, rect = new cjs.Rectangle(-73.6,-47.2,148.3,95.5), [rect]);


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


// stage content:
(lib.animateSCIM_FOC3 = function(mode,startPosition,loop,reversed) {
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
		// animateSCIM_FOC.fla
		////////////////////////////////////////////////////////////////////////
		// global declarations
		var c, // CreateJS-bib	//@//r, // Device Pixel Ratio
			w, h; // width, height
		//@//var root = this;
		var backGround, // reference to all the static stuff
			header, // title
			game,	// it's just a kind of game...
			back,	//logos
			eqCirc,	// circuit drawing
			core;	// stator core is static... 
		var inGame = false; // game stopped
		const titGen = "induction generator", titMot = "induction motor";
		const titBrake = "induction brake", titIdle = "idle mode";
		const centerX = 240, centerY = 300;
		const rSi = 165, rRe = 165 - 50; // center + stator inner radius
		//@// const xSmin = 1.05, xSmax = 1.5, xSdel = 0.05; // range for xS
		var phBaseX;//@//, phBaseY;
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
		var vecUS, vecIS, vecIq, vecId, locusIS; // objects for phasor-diagram
		var roShaft, phiRo, phiSt;
		//@//var sliderBarRR, sliderRR, txtRR;
		//@//var sliderBarSpeed, sliderSpeed, txtSpeed;
		var sliderTorq, sliderSpeed;
		var infoParam;
		var scim = { // params & status of the SCIM
			sigma: 0.15,
			x: 3,
			xsig: 3 * 0.15 / (1 - 0.15),
			Ld: 3 * (1 - 0.15),
			Lsig: 3 * 0.15,
			rq: 0.2 * 3 * 0.15,
			rR: 0.15 * 3 * 0.15 / (1 - 0.15), // = 0.2 xsig
			theta: 0.0, // rotor-position
			omt: 0.0, // position PhiS
			speed: 0.0,
			torq: 0.0,
			fS: 1.0,
			uS: 0.15 * 3.0, // I_Soo = reference value
			uSN: 0.15 * 3.0, // I_Soo = reference value
			I0N: 0.15 * 3.0 / 3.0,	// = uS / x
			iS: [0.15, 90], // amp, phase
			id: [0.15, 90], // always vertical to iq
			iq: [0.0, 0.0]
		};
		scim.xsig = scim.x * scim.sigma / (1 - scim.sigma);
		scim.Ld = scim.x * (1 - scim.sigma);
		scim.Lsig = scim.x * scim.sigma;
		scim.rq = 0.13 * scim.Lsig;
		scim.rR = 0.13 * scim.xsig;
		scim.uSN = scim.sigma * scim.x;	// I_Soo = 1.0 as reference
		scim.I0N = scim.uS / scim.x;
		scim.iS = [scim.I0N, 90.0];
		scim.id = [scim.I0N, 90.0];
		scim.iq = [0.0, 90.0];
		// stuff for start&stop, direction of speed&torque
		var startBtn, stopBtn, touch, goFrame; // speedCW, speedCCW, torqCW, torqCCW, 
		const DBG_CREATE = false, DBG_ECD = true, DBG_SLIDER = false;
		
		init();
		
		function init() {
			c = createjs;
			r = window.devicePixelRatio;
			w = 850; //stage.canvas.width / r;
			h = 600; // stage.canvas.height / r;
			c.Touch.enable(stage);
			phBaseX = w - 160; // = 690
			//@//phBaseY = h - 180; // = 420
		
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
		
				eqCirc = new lib.ECD_IM_dq();
				eqCirc.x = 700;
				eqCirc.y = 90;
				eqCirc.scale = 1.5;
				backGround.addChild(eqCirc);
		
				core = new lib.stYoke();
				core.x = centerX;
				core.y = centerY;
				backGround.addChild(core);
			}
			function createStatorAT() { // stator ampere turns
				//let amp = [-1.0, 0.5, 0.5];
				let tmp = [];
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
				let tmp = [];
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
				setRotorAT(scim.iq);
			}
			function createTouchControl() { // button- & slider-stuff
				touch = new c.Container();
				stage.addChild(touch);
				const BTN_SCALE = 1.2;
		
				createStartStop();
				createSlider();
		
				function createSlider() { // 2 sliders
		
					sliderTorq = new createSliderObj(phBaseX, stopBtn.y, "torque (p.u.):");
					// http://www.javascripter.net/faq/greekletters.htm
					sliderTorq.slider.x += sliderTorq.bar.nominalBounds.width / 2;
					sliderTorq.txt.x = sliderTorq.slider.x;
					sliderTorq.txt.text = scim.torq.toFixed(2);
					
					sliderSpeed = new createSliderObj(phBaseX, stopBtn.y - 50, "speed (p.u.):");
					sliderSpeed.slider.x += sliderSpeed.bar.nominalBounds.width / 2;
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
				vecIS.scaleY = phNom;
				game.addChild(vecIS);
		
				// vec I_0 stays constant
				vecId = new lib.vecI0();
				vecId.x = vecUS.x;
				vecId.y = vecUS.y;
				vecId.rotation = 90 -90;
				let vecIdscale = scim.sigma * vecIS.nominalBounds.height * vecIS.scaleY / vecId.nominalBounds.width;
				vecId.scaleX = 0.0; //scim.sigma * vecIS.nominalBounds.height * vecIS.scale / vecI0.nominalBounds.width;
				vecId.scaleY *= 1.5;
				game.addChild(vecId);
		
				// vec I_q = 0
				vecIq = new lib.vecIR();
				//let vecISlength = vecIS.nominalBounds.height * vecIS.scale;
				vecIq.x = vecUS.x; // + vecISlength;
				vecIq.y = vecUS.y;
				vecIq.rotation = 90;// -90;
				vecIq.scaleY = phNom; // *(1 - scim.sigma); 
				game.addChild(vecIq);
		
				// params for locus itself:
				locusIS.y = vecId.y;
				locusIS.x = vecId.x + vecId.nominalBounds.width * vecIdscale;
				locusIS.scale = vecIq.nominalBounds.height * vecIS.scaleY *(1 - scim.sigma) / locusIS.nominalBounds.height;
				locusIS.x0 = locusIS.x;
				locusIS.scale0 = locusIS.scale;
		
				// title
				header = new c.Text(titMot, "bold 24px Arial", "#000000");
				header.textAlign = "center";
				header.x = centerX;
				header.y = 35;
				header.width = 300;
				game.addChild(header);
				
				// info
				infoParam = new c.Text("tmp", "normal 12px Arial", "#000000");
				infoParam.textAlign = "left";
				infoParam.x = phBaseX - 210;
				infoParam.y = 5; //h-15;
				infoParam.width = 235;
				game.addChild(infoParam);
				
				calcECD();
			}
		
			function gameCore(event) { // init infinite loop
				if (inGame) {
					setRotor(scim.theta - scim.speed); // speed > 0 => CCW, speed < 0 => CW
					scim.omt -= scim.fS; // 1.0; => 1°/step CCW, if fS = 1.0
					if (scim.omt < -180.0) {
						scim.omt += 360.0;
					}
					setStatorAT(scim.iS); // psi = f(speed)
					setRotorAT(scim.iq);
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
			function initSlider() { // sliderTorq + -Speed
				sliderTorq.slider.addEventListener("pressmove", function (e) {
					// update GUI, uPn & vecUP.scale => updatePhasors
					let p = stage.globalToLocal(e.stageX, e.stageY);
					//let fR = scim.fS - scim.speed; // never used?
					sliderTorq.slider.x = limitIt(p.x, 
						sliderTorq.bar.x - sliderTorq.bar.nominalBounds.width / 2,
						sliderTorq.bar.x + sliderTorq.bar.nominalBounds.width / 2)
					sliderTorq.txt.x = sliderTorq.slider.x;
					scim.torq = 4*((sliderTorq.slider.x - sliderTorq.bar.x) / 
									sliderTorq.bar.nominalBounds.width);
					scim.torq = step(scim.torq, 0.05);
					sliderTorq.txt.text = scim.torq.toFixed(2);
					let absSpeed = Math.abs(scim.speed);
					if (absSpeed > 1.0){
						scim.torq = limitIt(scim.torq, -2.0/absSpeed, 2.0/absSpeed);
						setSlider(sliderTorq, scim.torq, -2.0, 2.0);
					}
					if (scim.speed*scim.torq < 0.0) { // generator
						header.text = titGen;
					} else if (scim.speed*scim.torq > 0.0) {
						header.text = titMot;
					} else if (Math.abs(scim.torq) > 0.0){
						header.text = titBrake;
					} else {
						header.text = titIdle;
					} 
					
					calcECD();
				});
				sliderSpeed.slider.addEventListener("pressmove", function (e) {
					// update GUI & state.torque => updatePhasors
					let p = stage.globalToLocal(e.stageX, e.stageY);
					sliderSpeed.slider.x = limitIt(p.x, 
						sliderSpeed.bar.x - sliderSpeed.bar.nominalBounds.width / 2,
						sliderSpeed.bar.x + sliderSpeed.bar.nominalBounds.width / 2)
					sliderSpeed.txt.x = sliderSpeed.slider.x;
					scim.speed = 4*(sliderSpeed.slider.x - sliderSpeed.bar.x) / 
								sliderSpeed.bar.nominalBounds.width;
					scim.speed = step(scim.speed, 0.05);
					sliderSpeed.txt.text = scim.speed.toFixed(2);
					
					let absSpeed = Math.abs(scim.speed);
					if (absSpeed > 1.0){
						scim.torq = limitIt(scim.torq, -2.0/absSpeed, 2.0/absSpeed);
						setSlider(sliderTorq, scim.torq, -2.0, 2.0);
					}
					if (scim.speed*scim.torq < 0.0) { // generator
						header.text = titGen;
					} else if (scim.speed*scim.torq > 0.0) {
						header.text = titMot;
					} else if (Math.abs(scim.torq) > 0.0){
						header.text = titBrake;
					} else {
						header.text = titIdle;
					} 
					calcECD();
				});
				
				function setSlider(sliderX, val, valmin, valmax) {
					if (DBG_SLIDER) console.log("setSlider: val=" + val + ", valmin=" + valmin + 
						", valmax=" + valmax + ", rel=" + ((val - valmin)/(valmax - valmin)));
					if (DBG_SLIDER) console.log(//
						"setSlider: sliderX.bar.nominalBounds.width=" + sliderX.bar.nominalBounds.width + 
						", sliderX.bar.x=" + sliderX.bar.x + ", sliderX.slider.x=" + sliderX.slider.x);
					sliderX.slider.x = ((val - valmin)/(valmax - valmin) - 0.5) * 
										sliderX.bar.nominalBounds.width + sliderX.bar.x;
					sliderX.txt.x = sliderX.slider.x;
					sliderX.txt.text = val.toFixed(2);
				}
			
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
				let amp = 0.0;
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
			function setRotorAT([iq, phi]) {
				phi = 180 + phi + scim.omt;
				if (scim.speed > 0.0) {
					phiRo.rotation = phi;
				} else {
					phiRo.rotation = phi - 180.0;
				}
				let co = Math.cos((scim.theta - 90) / rad2deg);
				let si = Math.sin((scim.theta - 90) / rad2deg);
				let amp = 0.0;
				for (let phase = 0; phase < 3; phase++) {
					amp = -iq * Math.sin((phi - scim.theta + 90) / rad2deg - phase * Math.PI * 2 / 3);
					for (let side = 0; side < 2; side++) {
						let x1 = posRoWdgs[phase][side][0],
						y1 = posRoWdgs[phase][side][1];
						if (amp < 0) {
							roCurrent[phase + (1 - side) * 3].x = (x1 - centerX) * co + 
																	(centerY - y1) * si + centerX;
							roCurrent[phase + (1 - side) * 3].y = (x1 - centerX) * si + 
																	(y1 - centerY) * co + centerY;
						} else {
							roCurrent[phase + side * 3].x = (x1 - centerX) * co + 
																(centerY - y1) * si + centerX;
							roCurrent[phase + side * 3].y = (x1 - centerX) * si + 
																(y1 - centerY) * co + centerY;
						}
						roCurrent[phase + side * 3].scale = Math.sqrt(Math.abs(amp)) * CURR_SCALE;
					}
				}
			}
			function calcECD() { // get iS and iq
				let kM = 4.0/scim.sigma;// max torque @ id = scim.sigma/sqrt(2), iq = 1/sqrt(2)
										// I_Soo = 1 as reference
										// kM*id*iq = 1 => max torque @ U_N, f_N
				let IDN = scim.I0N*Math.sin(Math.PI/2-Math.atan(1.0/(2.0+Math.sqrt(3))));
				let id = IDN;
				let absSpeed = Math.abs(scim.speed);
				if (absSpeed > 1.0) {
					id = IDN/absSpeed;
				}
				let iq = scim.torq/(kM*id);
				let iS = Math.sqrt(id*id + iq*iq);
				let motor = 1.0;
				if (scim.speed*scim.torq < 0.0){
					motor = -1;
				} else if (scim.speed == 0.0) {
					if (scim.torq > 0.0) { 
						motor = 1;
					} else {
						motor = -1;
					}
				}
				let fR = scim.rR/scim.Ld * iq/id;
				scim.fS = scim.speed + fR;
				let Ui = Math.abs(scim.fS) * scim.Ld * id;
				let uS_Re = Ui + Math.abs(scim.fS)*scim.Lsig*id;
				let uS_Im = motor*Math.abs(scim.fS*iq)*scim.Lsig;
				let uS = Math.sqrt(uS_Re*uS_Re + uS_Im*uS_Im);
				let phi_S = Math.atan2(uS_Im, uS_Re)*rad2deg;
				let phi_dq = Math.atan2(id, motor*Math.abs(iq))*rad2deg;
				let I_N = 1.97743*scim.I0N;
				
				infoParam.text = "u_S = " + (uS/scim.uSN).toFixed(2) + ", f_S = " + scim.fS.toFixed(2) + 
								", f_R = " + fR.toFixed(2) + ", i_d = " + (id/I_N).toFixed(2) + 
								", i_q = " + (iq/I_N).toFixed(2) + ", i_S = "+ (iS/I_N).toFixed(2);
				//				", id = [" + id.toFixed(2) + " : " + (phi_S+90).toFixed(0) + 
				//				"°], iq = [" + iq.toFixed(2) + " : " + phi_S.toFixed(0) + "°]";
				if (DBG_ECD) console.log("scim: id=[" + id.toFixed(3) + " : " + phi_S.toFixed(3) + 
					"], iq=[" + iq.toFixed(3) + " : " + phi_S.toFixed(3) + 
					"], uS=" + (uS/scim.uSN).toFixed(3) + ", torq=" + scim.torq.toFixed(3) + 
					", kM=" + kM.toFixed(3));
			
				let vecISlength = vecIS.nominalBounds.height * phNom * iS;
				let vecIqlength = vecIq.nominalBounds.height * phNom * iq;
				let vecIdlength = Math.sqrt(vecISlength*vecISlength - vecIqlength*vecIqlength);
				
				// |IS|, phi:
				vecIS.scaleY = phNom * iS;
				vecIS.rotation = phi_dq + phi_S;
				
				// |Id|, phi_d:
				vecId.scaleX = vecIdlength / vecId.nominalBounds.width*1.05;
				vecId.rotation = phi_S;
		
				// |Iq|, phi_q:
				vecIq.scaleY = phNom * Math.abs(iq);
				if (motor > 0.0) {
					vecIq.rotation = phi_S;
				} else {
					vecIq.rotation = phi_S + 180.0;
				}
		
				// Iq starts @ end of Id:
				vecIq.x = vecId.x + vecIdlength * Math.cos(phi_S / rad2deg)
				vecIq.y = vecId.y + vecIdlength * Math.sin(phi_S / rad2deg);
			
				vecUS.scaleY = uS/scim.uSN;
			
				if (Math.abs(scim.fS) > 0.0) { /////////////////// shift&scale locus position
					locusIS.x = vecUS.x + (locusIS.x0 - vecUS.x) * (uS/scim.uSN) / Math.abs(scim.fS);
					locusIS.scale = locusIS.scale0 * (uS/scim.uSN) / Math.abs(scim.fS);
				} else { /////////////////////////////// reset locus position& scaling
					locusIS.x = vecId.x + vecIdlength; //locusIS.x0;
					locusIS.scale = locusIS.scale0*id/scim.I0N;
				}
				if (DBG_ECD) console.log("scim_: fS=" + scim.fS.toFixed(2) + 
										", locusIS.x=" + locusIS.x.toFixed(1) + 
										", locusIS.scale=" + locusIS.scale.toFixed(3));
				
				scim.uS = uS;
				let iSimag = scim.uSN / scim.x;
				let rRSpd = 9.999;
				let xsig = scim.xsig * scim.fS;
				scim.iS[0] = iS;
				scim.id[0] = id;
				scim.iq[0] = iq;
				if (Math.abs(scim.speed - scim.fS) < 0.01) {
					scim.iS[1] = 90;
					scim.id[1] = scim.iS[1];
					scim.iq[1] = 0;
				} else {
					rRSpd = scim.rR * scim.fS / (scim.fS - scim.speed);
					scim.iq[1] = Math.atan2(xsig, rRSpd) * rad2deg;
					let iSreal = scim.iq[0] * Math.cos(scim.iq[1] / rad2deg);
					iSimag += scim.iq[0] * Math.sin(scim.iq[1] / rad2deg);
					scim.iS[1] = Math.atan2(iSimag, iSreal) * rad2deg;
					if (rRSpd > 0.0) {
						scim.id[1] = scim.iq[1] + 90.0;
					} else {
						scim.id[1] = scim.iq[1] - 90.0;
					}
				}
				scim.id[0] = Math.sqrt(scim.iS[0]*scim.iS[0] - scim.iq[0]*scim.iq[0]);
			
				let torque = kM * scim.id[0] * scim.iq[0];
			
				if (DBG_ECD) console.log(//
					"scim_: iS=[" + scim.iS[0].toFixed(3) + " : " + scim.iS[1].toFixed(0) + 
					"], iq=[" + scim.iq[0].toFixed(3) + " : " + scim.iq[1].toFixed(1) + 
					"], id=[" + scim.id[0].toFixed(3) + " : " + scim.id[1].toFixed(1) + 
					"], torque=" + torque.toFixed(3));
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
/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
import ui.widget.ButtonView;
 
exports = Class(ui.ImageView, function (supr) {
  this.init = function () {
    opts = {
      image: "resources/images/serving.png"
    };

    supr(this, 'init', [opts]);

    var a = new ui.widget.ButtonView({
      superview: this,
      x: 224, y: 210,
      width: 110, height: 110,
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    });

    var b = new ui.widget.ButtonView({
      superview: this,
      x: 476, y: 178,
      width: 130, height: 120,
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    });

    var c = new ui.widget.ButtonView({
      superview: this,
      x: 92, y: 330,
      width: 228, height: 123,
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    });

    var d = new ui.widget.ButtonView({
      superview: this,
      x: 483, y: 310,
      width: 147, height: 141,
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    });

    var wipes = new ui.widget.ButtonView({
      superview: this,
      x: 52, y: 514,
      width: 98, height: 52,
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    });

    var tempLog = new ui.widget.ButtonView({
      superview: this,
      x: 560, y: 500,
      width: 94, height: 100,
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    });

    var clock = new ui.ImageView({
      superview: this,
      x: 340, y: 42,
      width: 150, height: 38,
      image: "resources/images/clock.png"
    });

    var clockText = new ui.TextView({
      superview: clock,
      y: -5,
      width: 150, height: 38,
      text: "5:30 pm",
      color: "#00afdc",
      size: 34,
      fontFamily: "Helvetica",
    });
  }

  this.onInputSelect = function() {
    GC.app.goBack();
  }

  this.onInputMove = function(evt, point) {
    console.debug(point);
  }
});

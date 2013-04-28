/*
 *  
 */

import device;
import ui.View;
import ui.ImageView;
import ui.TextView;
import ui.widget.ButtonView;
 
exports = Class(ui.ImageView, function (supr) {
  this.init = function () {
    opts = {
      image: "resources/images/kitchen.jpg"
    };

    supr(this, 'init', [opts]);
  };

  this.helpText =
  "Click on any station to go to it.\n" +
  "You need to do the Hand washing station first.\n"

  this.buildView = function() {
    var servingStation = new ui.widget.ButtonView({
      superview: this,
      x: 0,
      y: 800 - 60,
      width: 200,
      height: 60,
      backgroundColor: 'rgba(0,0,0,0)',
      image: "resources/images/arrow.png",
      title: "Serving Station",
      text: {
        horizontalAlign: "right",
        padding: 10,
        size: 18,
        color: "white",
      }
    });

    var handwashingStation = new ui.widget.ButtonView({
      superview: this,
      x: 266,
      y: 216,
      width: 150,
      height: 88,
      backgroundColor: 'rgba(0,0,0,0)',
      title: "Handwashing Station",
      text: {
        size: 18,
        verticalAlign: "bottom",
        padding: 4
      }
    });

    var cookingStation = new ui.widget.ButtonView({
      superview: this,
      x: 800 - 200,
      y: 260,
      width: 200,
      height: 90,
      backgroundColor: 'rgba(0,0,0,0)',
      title: "Cooking Station",
      text: {
        size: 18,
        verticalAlign: "bottom",
        padding: 4
      }
    });

    servingStation.onInputSelect = function(evt) {
      evt.cancel();
      GC.app.goToScreen('serving');
    };

    handwashingStation.onInputSelect = function(evt) {
      evt.cancel();
      GC.app.goToScreen('handwashing');
    };

    cookingStation.onInputSelect = function(evt) {
      evt.cancel();
      GC.app.goToScreen('cooking');
    };
  };
});

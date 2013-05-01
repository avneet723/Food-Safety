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
      image: "resources/images/kitchen.png"
    };

    supr(this, 'init', [opts]);
  };

  this.helpText =
  "Click on the Handwashing station to begin. Once you have completed that, click on " +
  "Cooking and Serving sections to continue. Be on the lookout for blue info boxes as you " +
  "progress. A perfect score will be 400/400, points will be deducted for mistakes."

  this.buildView = function() {
    var servingStation = new ui.widget.ButtonView({
      superview: this,
      x: 0,
      y: 600 - 100,
      width: 250,
      height: 100,
      backgroundColor: 'transparent',
    });

    var handwashingStation = new ui.widget.ButtonView({
      superview: this,
      x: 260,
      y: 216,
      width: 250,
      height: 105,
      backgroundColor: 'transparent',
    });

    var cookingStation = new ui.widget.ButtonView({
      superview: this,
      x: 800 - 200,
      y: 260,
      width: 200,
      height: 90,
      backgroundColor: 'transparent',
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

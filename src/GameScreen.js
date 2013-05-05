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
      x: 500,
      y: 300,
      width: 400,
      height: 200,
      backgroundColor: 'transparent',
    });

    var handwashingStation = new ui.widget.ButtonView({
      superview: this,
      x: 400,
      y: 0,
      width: 400,
      height: 200,
      backgroundColor: 'transparent',
    });

    var handwashingStation2 = new ui.widget.ButtonView({
      superview: this,
      x: 600,
      y: 0,
      width: 200,
      height: 300,
      backgroundColor: 'transparent',
    });

    var cookingStation = new ui.widget.ButtonView({
      superview: this,
      x: 100,
      y: 200,
      width: 400,
      height: 150,
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

    handwashingStation2.onInputSelect = function(evt) {
      evt.cancel();
      GC.app.goToScreen('handwashing');
    };

    cookingStation.onInputSelect = function(evt) {
      evt.cancel();
      GC.app.goToScreen('cooking');
    };
  };
});

/*
 *  
 */

import device;
import ui.View;
import ui.ImageView;
import ui.TextView;
import ui.widget.ButtonView;
 
exports = Class(ui.ImageView, function (supr) {
  var self = this;

  this.init = function (app) {
    self.app = app;

    opts = {
      image: "resources/images/GameScreen.png"
    };

    supr(this, 'init', [opts]);
  };

  this.buildView = function() {
    var servingStation = new ui.widget.ButtonView({
      superview: this,
      x: 0,
      y: 120,
      width: 200,
      height: 320,
      backgroundColor: '#fee187',
      title: "Serving Station",
      text: {
        size: 24
      }
    });

    var handwashingStation = new ui.widget.ButtonView({
      superview: this,
      x: device.width - 150,
      y: 120,
      width: 150,
      height: 120,
      backgroundColor: '#3170b9',
      title: "Handwashing Station",
      text: {
        size: 24
      }
    });

    var cookingStation = new ui.widget.ButtonView({
      superview: this,
      x: device.width - 150,
      y: 120 + 120,
      width: 150,
      height: 320 - 120,
      backgroundColor: '#599b3e',
      title: "Cooking Station",
      text: {
        size: 24
      }
    });

    var coolerStation = new ui.widget.ButtonView({
      superview: this,
      x: 350,
      y: device.height - 100,
      width: 300,
      height: 100,
      backgroundColor: '#878787',
      title: "Cooler",
      text: {
        size: 24
      }
    });

    var foodSupplies = new ui.widget.ButtonView({
      superview: this,
      x: 350 - 150,
      y: device.height - 60,
      width: 100,
      height: 60,
      backgroundColor: '#878787',
      title: "Food\nSupplies",
      text: {
        size: 24
      }
    });

    servingStation.onInputSelect = function(evt) {
      evt.cancel();
      self.app.goToScreen('serving');
    };

    handwashingStation.onInputSelect = function(evt) {
      evt.cancel();
      self.app.goToScreen('handwashing');
    };

    cookingStation.onInputSelect = function(evt) {
      evt.cancel();
      self.app.goToScreen('cooking');
    };

    coolerStation.onInputSelect = function(evt) {
      evt.cancel();
      self.app.goToScreen('cooler');
    };
  };

  this.onInputSelect = function() {
    self.app.goBack();
  }
});

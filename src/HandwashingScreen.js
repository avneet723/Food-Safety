/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
import ui.widget.ButtonView;
 
exports = Class(ui.View, function (supr) {
  var self = this;

  this.init = function (app) {
    self.app = app;
    supr(this, 'init');
  };

  this.buildView = function() {
    new ui.ImageView({
      superview: this,
      width: 800,
      height: 600,
      image: "resources/images/handwashing.png"
    });

    var waterStream = new ui.ImageView({
      superview: this,
      x: 347,
      y: 249,
      width: 16,
      height: 115,
      image: "resources/images/water-stream.png"
    });
  };

  this.onInputSelect = function() {
    self.app.goBack();
  };
});

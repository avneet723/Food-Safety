/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
 
exports = Class(ui.ImageView, function (supr) {
  var self = this;

  this.init = function (app) {
    self.app = app;

    opts = {
      image: "resources/images/HandwashingScreen.png"
    };

    supr(this, 'init', [opts]);
  };

  this.onInputSelect = function() {
    self.app.goBack();
  };
});

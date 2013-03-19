/*
 * The about screen is a singleton view that consists of
 * some information about the game logistics and its 
 * purpose. 
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
 
exports = Class(ui.TextView, function (supr) {
  var self = this;

  this.init = function (app) {
    self.app = app;

    opts = {
      text: "About Screen" 
    };

    supr(this, 'init', [opts]);
  };

  this.onInputSelect = function() {
    self.app.goBack();
  };
});

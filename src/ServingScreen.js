/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
 
exports = Class(ui.ImageView, function (supr) {
  this.init = function () {
    opts = {
      image: "resources/images/ServingScreen.png"
    };

    supr(this, 'init', [opts]);
  };

  this.onInputSelect = function() {
    GC.app.goBack();
  };
});

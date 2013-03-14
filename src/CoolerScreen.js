/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
 
exports = Class(ui.ImageView, function (supr) {
  this.init = function (opts) {
    opts = merge(opts, {
      x: 0,
      y: 0,
      image: "resources/images/CoolerScreen.png"
    });

    supr(this, 'init', [opts]);
  };
});
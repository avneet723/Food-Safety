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
  this.init = function (opts) {
    opts = merge(opts, {
      x: 0,
      y: 0,
      text: "About Screen" 
    });

    supr(this, 'init', [opts]);
  };

});
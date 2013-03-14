/*
 * The exit screen is a singleton view that consists of
 * a confirmation message for the user to exit the game.
 * It will also the user to send his/her stats to the admin.
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
      text: "Exit Screen" 
    });

    supr(this, 'init', [opts]);
  };

});
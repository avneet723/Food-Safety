/*
 * The help screen is a singleton view that consists of
 * a series of instructions that the user can read through
 * in order to play the game.
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
 
exports = Class(ui.TextView, function (supr) {
  this.init = function () {
    opts = {
      text: "Help Screen", 
      background: '#fff'
    };

    supr(this, 'init', [opts]);
  };

  this.onInputSelect = function() {
    GC.app.goBack();
  };
});

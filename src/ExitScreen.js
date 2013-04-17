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
  this.init = function () {
    opts = {
      text: "Exit Screen" 
    };

    supr(this, 'init', [opts]);
  };

  this.onInputSelect = function() {
    GC.app.goBack();
  };
});

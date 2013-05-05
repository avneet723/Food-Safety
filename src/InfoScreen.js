/*
 * The info screen is a singleton view that consists of
 * a series of instructions that the user can read through
 * in order to play the game.
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
import ui.widget.ButtonView;
 
exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [opts]);

    var self = this;

    this.style.width = 800;
    this.style.height = 600;
    this.style.visible = false;

    var background = new ui.ImageView({
      superview: this,
      width: 800,
      height: 600,
      image: "resources/images/info-background.jpg"
    });

    var backgroundInner = new ui.View({
      superview: this,
      x: 140, y: 120,
      width: 520, height: 360,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      canHandleEvents: false
    });

    var logo = new ui.ImageView({
      superview: backgroundInner,
      x: 150, y: 10,
      width: 200, height: 50,
      image: "resources/images/logo.png"
    });

    this.popup = new ui.TextView({
      superview: backgroundInner,
      x: 15, y: 50,
      width: backgroundInner.style.width - 15,
      height: backgroundInner.style.height - 15,
      color: "white",
      //fontFamily: "'Lucidia Console', Monaco, monospace",
      fontFamily: "Arial, sans-serif",
      horizontalAlign: "left",
      wrap: true,
      canHandleEvents: false,
      size: 16,
      text: "Food Safety 100 Game\nVersion 1.0\nDevelopers: Avneet Singh and Evan Tatarka\n\nIf you have any questions about the material please contact diningtraining@vt.edu\n\nJessica Filip\njfilip@vt.edu\nTraining and Project Coordinator\n\nAndrew Watling\nAndreww1@vt.edu\nProject Coordinator"
    });

    var back = new ui.widget.ButtonView({
      superview: this,
      x: 5, y: 550,
      width: 95,
      height: 45,
      images: {
        up: "resources/images/Back-None.png",
        down: "resources/images/Back-Active.png"
      }
    });

    back.onInputSelect = function() {
      GC.app.goBack();
    }

    background.onInputSelect = function() {
      GC.app.goBack();
    }
  }
});

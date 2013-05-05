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

    if (GC.app.score >= 350) {
      this.text = "Congratulations, you have successfully complted the game!"
    } else {
      this.text = "While you completed each station, your score tells us you may want to play again for more practice."
    }

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

    this.score = new ui.TextView({
      superview: backgroundInner,
      x: 0, y: 100,
      width: backgroundInner.style.width,
      height: 30,
      fontFamily: "Arial, sans-serif",
      size: 30,
      text: "Score: " + GC.app.score + "/400",
      color: "white"
    });

    this.popup = new ui.TextView({
      superview: backgroundInner,
      x: 100, y: 50,
      width: backgroundInner.style.width - 200,
      height: backgroundInner.style.height - 40,
      color: "white",
      //fontFamily: "'Lucidia Console', Monaco, monospace",
      fontFamily: "Arial, sans-serif",
      horizontalAlign: "left",
      wrap: true,
      canHandleEvents: false,
      size: 20,
      text: this.text
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
      GC.app.end();
    }

    background.onInputSelect = function() {
      GC.app.end();
    }
  }

  this.setScore = function(score) {
    this.score.setText("Score: " + score + "/400");
  }
});
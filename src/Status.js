import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;
import ui.widget.ButtonView;
import src.TextImageView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [{
      superview: opts.superview,
      width: 800,
      height: 40,
      image: "resources/images/statusBar.png"
    }]);

    var back = new ui.widget.ButtonView({
      superview: this,
      x: 0, y: 0,
      width: 100,
      height: 40,
      images: {
        up: "resources/images/Back-None.png",
        down: "resources/images/Back-Active.png"
      }
    });

    back.onInputSelect = function() {
      GC.app.goBack();
    }

    var help = new ui.widget.ButtonView({
      superview: this,
      x: 700, y: 0,
      width: 100,
      height: 40,
      images: {
        up: "resources/images/Help-None.png",
        down: "resources/images/Help-Active.png"
      }
    });

    help.onInputSelect = function() {
      GC.app.showStepScreen();
    }

    this.scoreView = new src.TextImageView({
      superview: this,
      x: 250, y: 5,
      width: 250, height: 30,
      image: "resources/images/clock.png",
      text: {
        text: "Score: 0",
        color: "#00afdc",
        size: 34,
        fontFamily: "Helvetica",
        padding: 2
      }
    });
  };

  this.updateScore = function() {
    this.scoreView.setText("Score: " + GC.app.score + "/" + GC.app.maxScore);
  }
});

import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;
import src.TextImageView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function (opts) {
    var self = this;
    this.app = opts.superview;

    supr(this, 'init', [{
      superview: opts.superview,
      width: 800,
      height: 40,
      image: "resources/images/statusBar.png"
    }]);

    new ui.View({
      superview: this,
      x: 0, y: 0,
      width: 100,
      height: 40,
    }).onInputSelect = function() {
      self.app.goBack();
    };

    new ui.View({
      superview: this,
      x: 700,
      width: 100,
      height: 40
    }).onInputSelect = function() {
      self.app.showStepScreen();
    }

    this.scoreView = new src.TextImageView({
      superview: this,
      x: 250, y: 0,
      width: 300, height: 38,
      image: "resources/images/clock.png",
      text: {
        text: "Score: 0",
        color: "#00afdc",
        size: 34,
        fontFamily: "Helvetica",
      }
    });
  };

  this.updateScore = function() {
    this.scoreView.setText("Score: " + GC.app.score + "/" + GC.app.maxScore);
  }
});

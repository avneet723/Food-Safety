import animate;
import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;

exports = Class(ui.View, function (supr) {
  var self = this;

  self.timerCount = 0;

  this.init = function (opts) {
    supr(this, 'init', [opts]);
  };

  this.buildView = function() {
    var background = new ui.ImageView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      image: "resources/images/timerCircle.png",
    });

    self.timerText = new ui.TextView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      text: self.timerCount + "s",
      size: 35
    });
  }

  self.start = function() {
    self.timer = setInterval(function() {
      self.timerText.updateOpts({text: (++self.timerCount) + "s"});
    }, 600)
  }

  self.stop = function() {
    clearInterval(self.timer)
  }

  self.restart = function() {
    self.stop();
    self.timerCount = 0;
    self.start();
  }
});

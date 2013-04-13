import animate;
import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;

exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    this.timerCount = 0;

    supr(this, 'init', [opts]);
  };

  this.buildView = function() {
    var background = new ui.ImageView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      image: "resources/images/timerCircle.png",
    });

    this.timerText = new ui.TextView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      text: this.timerCount + "s",
      size: 35
    });
  }

  this.start = function() {
    var self = this;

    if (this.timer) return;
    this.timer = setInterval(function() {
      self.setText(++self.timerCount);
    }, 600)
  }

  this.setText = function(count) {
    var temp = Math.round(Math.sqrt(count) * 3 + 130);
    this.timerText.updateOpts({text: temp + "°F"});
  }

  this.stop = function() {
    clearInterval(this.timer);
    this.timer = null;
  }

  this.reset = function() {
    this.stop();
    this.timerCount = 0;
    this.timerText.updateOpts({text: 0 + "s"});
  }

  this.restart = function() {
    this.reset();
    this.start();
  }

});

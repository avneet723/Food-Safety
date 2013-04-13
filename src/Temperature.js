import animate;
import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;

exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    this.timerCount = 0;

    this.startTemp = opts.startTemp;
    this.endTemp = opts.endTemp;

    supr(this, 'init', [opts]);

    var background = new ui.ImageView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      image: "resources/images/timerCircle.png",
    });

    this.tempText = new ui.TextView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      size: 35
    });
  };

  this.start = function() {
    var self = this;

    if (this.timer) return;
    this.timer = setInterval(function() {
      self.setText(++self.timerCount);
    }, 600)
  }

  this.setText = function(count) {
    var temp = Math.round(Math.min(Math.sqrt(count) * 3 + this.startTemp, this.endTemp));
    if (this.tempText.getText() != (temp + "°F")) {
      this.tempText.setText(temp +  "°F");
      if (this.onChange != null) this.onChange(temp);
    }
  }

  this.stop = function() {
    clearInterval(this.timer);
    this.timer = null;
  }

  this.reset = function() {
    this.stop();
    this.timerCount = 0;
    this.setText(0);
  }

  this.restart = function() {
    this.reset();
    this.start();
  }
});

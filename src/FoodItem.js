
import ui.View;
import ui.ImageView;
import ui.TextView;
import src.Timer;
import src.Temperature;

exports = Class(ui.ImageView, function (supr) {
  this.init = function(opts) {
    this.uncooked = opts.uncookedImage;
    this.cooked = opts.cookedImage;
    this.minTemp = opts.minTemp;
    this.bottom = opts.side == "bottom";

    supr(this, 'init', [opts]);
  }

  this.buildView = function() {
    var self = this;

    var uncookedImage = new ui.ImageView({
      superview: this,
      width: this.style.width, height: this.style.height,
      image: this.uncooked
    })

    var cookedImage = new ui.ImageView({
      superview: this,
      width: this.style.width, height: this.style.height,
      image: this.cooked,
      visible: false
    })

    this.timer = new src.Timer({
      superview: this,
      y: (this.bottom ? 80 : -70),
      width: 70, height: 70,
      visible: false
    })

    this.temp = new src.Temperature({
      superview: this,
      x: 100, y: (this.bottom ? 80 : -70),
      width: 70, height: 70,
      startTemp: this.minTemp * 0.9,
      endTemp: this.minTemp * 1.05,
      visible: false
    })

    this.temp.onChange = function(temp) {
      if (temp >= self.minTemp) {
        cookedImage.style.visible = true;
        uncookedImage.style.visible = false;
      }
    }

    this.temp.start();
  }

  this.onInputSelect = function() {
    if (this.timer.style.visible) {
      this.timer.reset();

      this.timer.style.visible = false;
      this.temp.style.visible = false;
    } else {
      this.timer.style.visible = true;
      this.temp.style.visible = true;

      this.timer.start();
    }
  }
});

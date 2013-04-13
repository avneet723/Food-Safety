
import ui.View;
import ui.ImageView;
import ui.TextView;
import src.Timer;
import src.Temperature;

exports = Class(ui.ImageView, function (supr) {
  this.init = function(opts) {
    this.uncooked = opts.uncookedImage;
    this.cooked = opts.cookedImage;

    supr(this, 'init', [opts]);
  }

  this.buildView = function() {
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
      width: 70, height: 70,
      visible: false
    })

    this.temp = new src.Temperature({
      superview: this,
      x: 100,
      width: 70, height: 70,
      visible: false
    })
  }

  this.onInputSelect = function() {
    if (this.timer.style.visible) {
      this.timer.reset();
      this.temp.reset();

      this.timer.style.visible = false;
      this.temp.style.visible = false;
    } else {
      this.timer.style.visible = true;
      this.temp.style.visible = true;

      this.timer.start();
      this.temp.start();
    }
  }
});


import ui.View;
import ui.ImageView;
import ui.TextView;
import ui.widget.ButtonView;

import src.TextImageView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function(opts) {
    this.temp = opts.temp;
    this.bottom = (opts.side == "bottom");

    supr(this, 'init', [opts]);

    this.tempImage = new src.TextImageView({
      superview: this,
      x: 0, y: (this.bottom ? 120 : -40),
      width: 100, height: 38,
      visible: false,
      image: "resources/images/clock.png",
      text: {
        text: this.temp + "°F",
        color: "#00afdc",
        size: 34,
        fontFamily: "Helvetica"
      }
    });
  }

  this.hideTemp = function() {
    this.tempImage.style.visible = false;
  }

  this.showTemp = function() {
    this.tempImage.style.visible = true;
  }

  this.toggleTemp = function() {
    if (this.tempImage.style.visible) {
      this.hideTemp();
    } else {
      this.showTemp();
    }
  }
});

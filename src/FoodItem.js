
import ui.View;
import ui.ImageView;
import ui.TextView;
import ui.widget.ButtonView;
import src.Timer;
import src.Temperature;

exports = Class(ui.ImageView, function (supr) {
  this.init = function(opts) {
    this.uncooked = opts.uncookedImage;
    this.cooked = opts.cookedImage;
    this.minTemp = opts.minTemp;
    this.bottom = opts.side == "bottom";
    this.name = opts.name;

    this.isCooked = false;

    supr(this, 'init', [opts]);

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

    var name = new ui.TextView({
      superview: this,
      x: -50, y: 30,
      width: 50, height: 40,
      text: this.name,
      color: "white",
      size: 20
    });

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
      if (!self.isCooked && (temp >= self.minTemp)) {
        self.isCooked = true;
        cookedImage.style.visible = true;
        uncookedImage.style.visible = false;

        if (self.temp.style.visible) {
          self.timer.style.visible = true;
          self.timer.start();
        }
      }
    }

    this.serveButton = new ui.widget.ButtonView({
      superview: this,
      x: 45, y: 30,
      width: 40, height: 25,
      title: "Serve",
      backgroundColor: "rgba(255,255,255,0.5)",
      visible: false
    });
  }

  this.hideInfoStats = function() {
    this.timer.reset();

    this.timer.style.visible = false;
    this.temp.style.visible = false;
    this.serveButton.style.visible = false;
  }

  this.showInfoStats = function() {
    this.temp.style.visible = true;
    this.serveButton.style.visible = true;

    if (this.isCooked) {
      this.timer.style.visible = true;
      this.timer.start();
    }
  }

  this.toggleInfoStats = function() {
    if (this.temp.style.visible) {
      this.hideInfoStats();
    } else {
      this.showInfoStats();
    }
  }
});

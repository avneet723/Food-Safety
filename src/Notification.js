import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;

exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [{
      superview: opts.superview,
      x: 800 - 260,
      y: 50,
      width: 260,
      height: 100,
      backgroundColor: "rgba(0, 0, 0, 1)",
      visible: false
    }]);

    this.content = new ui.TextView({
      superview: this,
      x: 15, y: 15,
      width: this.style.width - 15,
      height: this.style.height - 15,
      wrap: true,
      color: "white",
      size: 16
    });
  };

  this.show = function(text, type) {
    var self = this;

    this.content.updateOpts({text: text});

    switch (type) {
      case "info":
        this.style.backgroundColor = "rgba(65, 105, 225, 0.7)";
        break;
      case "tip":
        this.style.backgroundColor = "rgba(34, 139, 34, 0.7)";
        break;
      case "error":
        this.style.backgroundColor = "rgba(255, 99, 71, 0.7)";
        break;
    }

    this.style.visible = true;

    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }

    this.hideTimer = setTimeout(function() {
      self.style.visible = false;
    }, 8000);
  }
});

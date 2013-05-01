import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;
import ui.widget.ButtonView;

exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [opts]);

    var self = this;

    this.style.width = 800;
    this.style.height = 600;
    this.style.visible = false;

    var background = new ui.View({
      superview: this,
      width: 800,
      height: 600,
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    });

    this.popup = new ui.TextView({
      superview: this,
      x: 150, y: 150,
      width: 800 - 300,
      height: 600 - 300,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      //fontFamily: "'Lucidia Console', Monaco, monospace",
      fontFamily: "Arial, sans-serif",
      horizontalAlign: "left",
      padding: 10,
      wrap: true,
      canHandleEvents: false,
      size: 20
    });

    var closeButton = new ui.widget.ButtonView({
      superview: this,
      x: (800 - 80) / 2, y: 150 + 305,
      width: 80, height: 30,
      images: {
        up: "resources/images/Close-Button-None.png",
        down: "resources/images/Close-Button-Active.png",
      }
    });

    closeButton.onInputSelect = function() {
      self.hide();
    }

    background.onInputSelect = function() {
      self.hide();
    }
  }

  this.show = function(text) {
    this.popup.updateOpts({text: text});
    this.style.visible = true;
  }

  this.hide = function() {
    this.style.visible = false;
  }
});

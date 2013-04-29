import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;

exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [opts]);
  };

  this.buildView = function() {
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
      horizontalAlign: "left",
      padding: 30,
      wrap: true,
      canHandleEvents: false,
      size: 20
    });

    background.onInputSelect = function() {
      self.style.visible = false;  
      GC.app.goBack();
    };
  }

  this.show = function(text) {
    this.popup.updateOpts({text: text + "\n\nClick anywhere to go back to the main kitchen."});
    this.style.visible = true;
  }

  this.hide = function() {
    this.style.visible = false;
  }
});

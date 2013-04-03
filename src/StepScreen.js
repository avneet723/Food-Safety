import device;

import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;

exports = Class(ui.View, function (supr) {
  var self = this;

  this.init = function (opts) {
    supr(this, 'init', [opts]);
  };

  this.buildView = function() {
    this.style.width = device.screen.width;
    this.style.height = device.screen.height;
    this.style.visible = false;

    var background = new ui.View({
      superview: this,
      width: device.screen.width,
      height: device.screen.height,
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    });

    this.popup = new ui.TextView({
      superview: this,
      x: 150, y: 150,
      width: device.screen.width - 300,
      height: device.screen.height - 300,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      horizontalAlign: "left",
      padding: 30,
      wrap: true,
      size: 20
    });

    var that = this;
    background.onInputSelect = function() {
      that.style.visible = false;  
    };
  }

  this.show = function(text) {
    console.debug(this.popup.text);
    this.popup.updateOpts({text: text});
    this.style.visible = true;
  }
});

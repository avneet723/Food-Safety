import device;
import ui.View;
import ui.ImageView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function (opts) {
    opts = merge(opts, {
      x: 0,
      y: 0,
      image: "resources/images/title_screen.png"
    });

    supr(this, 'init', [opts]);
  };

  this.buildView = function () {
    var startbutton = new ui.View({
      superview: this,
      x: device.width / 2,
      y: device.height / 2,
      width: 200,
      height: 100, 
      backgroundColor: '#ccc'
    });

    startbutton.on('InputSelect', bind(this, function () {
      this.emit('titlescreen:start');
    }));
  };
});
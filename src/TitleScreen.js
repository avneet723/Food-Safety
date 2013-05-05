import device;
import ui.View;
import ui.ImageView;
import ui.widget.ButtonView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function () {
    opts = {
      x: 0,
      y: 0,
      image: "resources/images/backgroundmain.jpg"
    };

    supr(this, 'init', [opts]);
  };

  this.buildView = function () {
    var startButton = new ui.widget.ButtonView({
      superview: this,
      x: 20,
      y: 530,
      width: 95,
      height: 45,
      images: {
        up: "resources/images/Play-None.png",
        down: "resources/images/Play-Active.png",
      }
    });

    var infoButton = new ui.widget.ButtonView({
      superview: this,
      x: 150,
      y: 530,
      width: 95,
      height: 45, 
      images: {
        up: "resources/images/Info-None.png",
        down: "resources/images/Info-Active.png",
      }
    });

    startButton.onInputSelect = function() {
      GC.app.goToScreen('game');
    };

    infoButton.onInputSelect = function() {
      GC.app.goToScreen('info');
    };
  };
});

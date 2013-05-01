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
      x: 60,
      y: 300,
      width: 95,
      height: 45,
      images: {
        up: "resources/images/Play-None.png",
        down: "resources/images/Play-Active.png",
      }
    });

    var helpButton = new ui.widget.ButtonView({
      superview: this,
      x: 60,
      y: 400,
      width: 97,
      height: 45, 
      images: {
        up: "resources/images/Help-None.png",
        down: "resources/images/Help-Active.png",
      }
    });

    var aboutButton = new ui.widget.ButtonView({
      superview: this,
      x: 60,
      y: 500,
      width: 107,
      height: 45, 
      images: {
        up: "resources/images/About-None.png",
        down: "resources/images/About-Active.png",
      }
    });

    startButton.onInputSelect = function() {
      GC.app.goToScreen('game');
    };

    helpButton.onInputSelect = function() {
      GC.app.goToScreen('help');
    };

    aboutButton.onInputSelect = function() {
      GC.app.goToScreen('about');
    };
  };
});

import device;
import ui.View;
import ui.ImageView;
import ui.widget.ButtonView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function () {
    opts = {
      x: 0,
      y: 0,
      image: "resources/images/backgroundmain.png"
    };

    supr(this, 'init', [opts]);
  };

  this.buildView = function () {
    var startButton = new ui.widget.ButtonView({
      superview: this,
      x: 800 / 2 - 340,
      y: 600 - 50,
      width: 71,
      height: 30,
      images: {
        up: "resources/images/Play.png",
        down: "resources/images/Play.png",
      }
    });

    var helpButton = new ui.widget.ButtonView({
      superview: this,
      x: 800 / 2 - 140,
      y: 600 - 50,
      width: 75,
      height: 32, 
      images: {
        up: "resources/images/Help.png",
        down: "resources/images/Help.png",
      }
    });

    var aboutButton = new ui.widget.ButtonView({
      superview: this,
      x: 800 / 2 + 60,
      y: 600 - 50,
      width: 83,
      height: 32, 
      images: {
        up: "resources/images/About.png",
        down: "resources/images/About.png",
      }
    });

    var exitButton = new ui.widget.ButtonView({
      superview: this,
      x: 800 / 2 + 260,
      y: 600 - 50,
      width: 69,
      height: 32, 
      images: {
        up: "resources/images/Exit.png",
        down: "resources/images/Exit.png",
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

    exitButton.onInputSelect = function() {
      GC.app.goToScreen('exit');
    };
  };
});

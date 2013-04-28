import device;
import ui.View;
import ui.ImageView;
import ui.widget.ButtonView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function () {
    opts = {
      x: 0,
      y: 0,
      image: "resources/images/title_screen.png"
    };

    supr(this, 'init', [opts]);
  };

  this.buildView = function () {
    var startButton = new ui.widget.ButtonView({
      superview: this,
      x: 800 / 2 - 300,
      y: 600 / 2 - 25,
      width: 100,
      height: 50, 
      backgroundColor: '#ccc',
      title: "Play"
    });

    var helpButton = new ui.widget.ButtonView({
      superview: this,
      x: 800 / 2 - 150,
      y: 600 / 2 - 25,
      width: 100,
      height: 50, 
      backgroundColor: '#ccc',
      title: "Help!"
    });

    var aboutButton = new ui.widget.ButtonView({
      superview: this,
      x: 800 / 2 + 0,
      y: 600 / 2 - 25,
      width: 100,
      height: 50, 
      backgroundColor: '#ccc',
      title: "About"
    });

    var exitButton = new ui.widget.ButtonView({
      superview: this,
      x: 800 / 2 + 150,
      y: 600 / 2 - 25,
      width: 100,
      height: 50, 
      backgroundColor: '#ccc',
      title: "Exit"
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

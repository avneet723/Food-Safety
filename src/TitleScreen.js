import device;
import ui.View;
import ui.ImageView;
import ui.widget.ButtonView;

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
    var startbutton = new ui.widget.ButtonView({
      superview: this,
      x: device.width / 2 - 300,
      y: device.height / 2 - 25,
      width: 100,
      height: 50, 
      backgroundColor: '#ccc',
      title: "Play"
    });

    var helpbutton = new ui.widget.ButtonView({
      superview: this,
      x: device.width / 2 - 150,
      y: device.height / 2 - 25,
      width: 100,
      height: 50, 
      backgroundColor: '#ccc',
      title: "Help!"

    });

    var aboutbutton = new ui.widget.ButtonView({
      superview: this,
      x: device.width / 2 + 0,
      y: device.height / 2 - 25,
      width: 100,
      height: 50, 
      backgroundColor: '#ccc',
      title: "About"
    });

    var exitbutton = new ui.widget.ButtonView({
      superview: this,
      x: device.width / 2 + 150,
      y: device.height / 2 - 25,
      width: 100,
      height: 50, 
      backgroundColor: '#ccc',
      title: "Exit"
    });


    startbutton.on('InputSelect', bind(this, function () {
      this.emit('titlescreen:start');
    }));

    helpbutton.on('InputSelect', bind(this, function() {
      this.emit('titlescreen:help');
    }));

    aboutbutton.on('InputSelect', bind(this, function() {
      this.emit('titlescreen:about');
    }));
    
    exitbutton.on('InputSelect', bind(this, function() {
      this.emit('titlescreen:exit');
    }));

  };
});
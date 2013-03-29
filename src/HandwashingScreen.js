/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;
import ui.widget.ButtonView;
 
exports = Class(ui.View, function (supr) {
  var self = this;

  this.init = function (app) {
    self.app = app;
    supr(this, 'init');
  };

  this.buildView = function() {
    new ui.ImageView({
      superview: this,
      width: 800,
      height: 600,
      image: "resources/images/handwashing.png"
    });

    var waterStream = new ui.ImageView({
      superview: this,
      x: 347,
      y: 249,
      width: 16,
      height: 115,
      image: "resources/images/water-stream.png",
      visible: false
    });

    var faucetButton = new ui.widget.ButtonView({
      superview: this,
      x: 300,
      y: 165,
      width: 150,
      height: 85,
      backgroundColor: 'rgba(0,0,0,0)'
    });

    faucetButton.onInputSelect = function() {
      waterStream.style.visible = !waterStream.style.visible;
    };

    var soapButton = new ui.widget.ButtonView({
      superview: this,
      x: 435,
      y: 61,
      height: 109,
      width: 67,
      backgroundColor: "rgba(0, 0, 0, 0)"
    });

    soapButton.onInputSelect = function() {
      dirtyHand.updateOpts({visible: true});
      hoverHand.updateOpts({visible: true});

      self.app.mouseHand.updateOpts({visible: false});


      dirts.forEach(function(dirt) {
        dirt.updateOpts({visible: true});
      });
    };

    var dispenserImage = new ui.ImageView({
      superview: this,
      x: 100,
      y: 30,
      width: 180,
      height: 180,
      image: "resources/images/dispenser-run-01.png",
    });
    
    var dispenser = new ui.SpriteView({
      superview: this,
      x: 100,
      y: 30,
      width: 180,
      height: 180,
      url: "resources/images/dispenser",
      frameRate: 4,
      defaultAnimation: "run",
      loop: false
    });

    dispenser.setFrame = function(frame) {
      this._currentFrame = frame;
			var image = this._animations[this._currentAnimationName].frames[this._currentFrame];
			this.setImage(image);
    };

    dispenserImage.onInputSelect = function() {
      dispenser.startAnimation("run", {callback: function() {
        dispenser.setFrame(3);
        dispenser.style.visible = true;
      }});
    };

    dispenser.onInputSelect = function() {
      if (dispenser.isPlaying) return;
      dispenser.setFrame(0);
      dispenser.style.visible = false;
    }

    var dirtyHand = new ui.ImageView({
      superview: this,
      x: 116,
      y: 284,
      width: 241,
      height: 265,
      image: "resources/images/cleanHand.png",
      visible: false
    });

    var dirts = new Array();

    for (var i = 1; i <= 9; i++) {
      dirts[i-1] = new ui.ImageView({
        superview: this,
        height: 24,
        width: 24,
        visible: false,
        image: "resources/images/dirt" + i + ".png"
      });
    }

    dirts[0].updateOpts({
      x: 217, y: 302
    });

    dirts[1].updateOpts({
      x: 263, y: 284
    });

    dirts[2].updateOpts({
      x: 292, y: 300
    });

    dirts[3].updateOpts({
      x: 336, y: 344
    });

    dirts[4].updateOpts({
      x: 230, y: 369,
      width: 32, height: 47
    });

    dirts[5].updateOpts({
      x: 270, y: 374
    });

    dirts[6].updateOpts({
      x: 294, y: 392
    });

    dirts[7].updateOpts({
      x: 138, y: 429
    });

    dirts[8].updateOpts({
      x: 192, y: 453
    });

    var hoverHand = new ui.ImageView({
      superview: this,
      width: 241,
      height: 265,
      image: "resources/images/hoverHand.png",
      visible: false,
      canHandleEvents: false
    });

    this.onInputMove = function(evt, point) {
      hoverHand.updateOpts({
        x: point.x - hoverHand.style.width / 3,
        y: point.y - 10
      });
    };

  };

  this.onInputSelect = function() {
    self.app.goBack();
  };
});

/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;
import ui.widget.ButtonView;

import src.Timer as Timer;
 
exports = Class(ui.View, function (supr) {
  var self = this;

  this.init = function (app) {
    self.app = app;
    supr(this, 'init');
  };

  this.buildView = function() {
    var paperTowelOut = false;
    var dirt = true;
    var waterOn = false;
    var scrubHands = false;
    var rinseHands = false;
    var glovesOn = false;
    var paperTowelInHand = false;

    new ui.ImageView({
      superview: this,
      width: 800,
      height: 600,
      image: "resources/images/handwashing.png"
    });

    new ui.widget.ButtonView({
      superview: this,
      x: 10, y: 10,
      width: 100,
      height: 20,
      title: "Instructions",
      backgroundColor: "black",
      text: { color: "white"}
    }).onInputSelect = function() {
      self.app.showStepScreen(
        "1. Check for paper towel\n" +
        "2. Turn on the water\n" +
        "3. Get soap\n" +
        "4. Scrub hands to remove dirt for at least 20 sec.\n" +
        "5. Rinse your hands\n" +
        "6. Dry your hands\n" +
        "7. Put on gloves\n"
      );
    };

    var waterStream = new ui.ImageView({
      superview: this,
      x: 347,
      y: 249,
      width: 16,
      height: 115,
      image: "resources/images/water-stream.png",
      visible: false
    });

    waterStream.onInputSelect = function() {
      if (scrubHands && !dirt && !paperTowelInHand) {
        hoverBubbles.style.visible = false;
        dirtyBubbles.style.visible = false;

        scrubHands = false;
        rinseHands = true;
      } else if (!paperTowelInHand) {
        console.debug("You need to scrub hands for 20 seconds before rinsing");
      }
    }

    var faucetButton = new ui.widget.ButtonView({
      superview: this,
      x: 300,
      y: 165,
      width: 150,
      height: 85,
      backgroundColor: 'rgba(0,0,0,0)'
    });

    faucetButton.onInputSelect = function() {
      if (!scrubHands) {
        waterStream.style.visible = !waterStream.style.visible;
        waterOn = !waterOn;
      } else {
        console.debug("Don't touch the faucet when you are scrubbing your hands");
      }
    };

    var soapButton = new ui.widget.ButtonView({
      superview: this,
      x: 435,
      y: 61,
      height: 109,
      width: 67,
      backgroundColor: "rgba(0, 0, 0, 0)"
    });

    var glovesButton = new ui.widget.ButtonView({
      superview: this,
      x: 563,
      y: 174,
      height: 70,
      width: 130,
      backgroundColor: "rgba(0, 0, 0, 0)"
    });

    var glovedHands = new ui.ImageView({
      superview: this,
      x: 116,
      y: 284,
      width: 496,
      height: 264,
      image: "resources/images/glovedHands.png",
      visible: false
    });

    glovesButton.onInputSelect = function() {
      if (!glovesOn && rinseHands) {
        hoverHand.style.visible = false;
        dirtyHand.style.visible = false;
        glovedHands.style.visible = true;

        rinseHands = false;
        glovesOn = true;
      } else {
        console.debug("You need to wash your hands before putting on gloves");
      }
    }


    var timer = new Timer({
      superview: this,
      x: 97,
      y: 265,
      width: 85,
      height: 85,
      visible: false
    });

    soapButton.onInputSelect = function() {
      if (waterOn && paperTowelOut && !(scrubHands || rinseHands || glovesOn)) {
        dirtyHand.updateOpts({visible: true});
        hoverHand.updateOpts({visible: true});

        self.app.mouseHand.updateOpts({visible: false});
        timer.updateOpts({visible: true});
        timer.start();

        dirts.forEach(function(dirt) {
          dirt.updateOpts({visible: true});
        });

        scrubHands = true;
      } else if (scrubHands || rinseHands || glovesOn) {
        console.debug("You already applied the soap");
      } else {
        console.debug("Make sure the water is turned on and the paper towel is out");
      }
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
      if (!scrubHands | !rinseHands) {
        dispenser.startAnimation("run", {callback: function() {
          dispenser.setFrame(3);
          dispenser.style.visible = true;
        }});
        paperTowelOut = true;
      }
    };

    dispenser.onInputSelect = function() {
      if (dispenser.isPlaying) return;

      if (scrubHands) {
        console.debug("Your hands have not been scrubbed");
        return;
      }

      dispenser.setFrame(0);
      dispenser.style.visible = false;

      if (rinseHands) {
        paperTowel.style.visible = true;
      }
      paperTowelOut = false;
      paperTowelInHand = true;
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

    var dirtyBubbles = new ui.ImageView({
      superview: dirtyHand,
      y: 130,
      x: 50,
      width: 171,
      height: 131,
      visible: false,
      image: "resources/images/bubbles.png",
      canHandleEvents: false
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
      width: 26, height: 44,
      x: 294, y: 392
    });

    dirts[7].updateOpts({
      x: 138, y: 429
    });

    dirts[8].updateOpts({
      width: 58, height: 53,
      x: 192, y: 453
    });

    var noDirt = function() {
      if (scrubHands) {
        for (var i = 0; i < dirts.length; i++) {
          if (dirts[i].style.opacity != 0) return false;
        }
        dirt = false;
        return true;
      }
    }

    dirts.forEach(function(dirt) {
      dirt.onInputMove = function(evt, point) {
        dirt.style.opacity = Math.max(dirt.style.opacity - .05, 0);
        if (noDirt()) {
          if (timer.timerCount < 20) {
            alert("You cleaned too fast! You should take at least 20 seconds");
            dirts.forEach(function(dirt) {
              dirt.updateOpts({opacity: 1});
            });
            timer.restart();
          } else {
            dirtyBubbles.style.visible = true;
            timer.stop();
          }
        }
      };
    });

    var hoverHand = new ui.ImageView({
      superview: this,
      width: 241,
      height: 265,
      image: "resources/images/hoverHand.png",
      visible: false,
      canHandleEvents: false
    });

    var hoverBubbles = new ui.ImageView({
      superview: hoverHand,
      y: 100,
      width: 171,
      height: 131,
      image: "resources/images/bubbles.png",
      canHandleEvents: false
    });

    var paperTowel = new ui.ImageView({
      superview: hoverHand,
      y: 50,
      width: 149,
      height: 180,
      image: "resources/images/paperTowel.png",
      canHandleEvents: false,
      visible: false
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

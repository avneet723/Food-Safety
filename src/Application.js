/* 
 * Application.js serves as the entry point for the game. In the food safety game 
 * its purpose is to initialize the title screen, game screen, help screen, about
 * screen and exit screen and handle events for directing the game flow. 
 * 
 */
// devkit imports
import device;
import ui.View as View;
import ui.StackView as StackView;
import ui.TextView as TextView;
import ui.ImageView as ImageView;
// user imports
import src.TitleScreen as TitleScreen;
import src.GameScreen as GameScreen;
import src.HelpScreen as HelpScreen;
import src.ExitScreen as ExitScreen;
import src.AboutScreen as AboutScreen;

import src.ServingScreen as ServingScreen;
import src.HandwashingScreen as HandwashingScreen;
import src.CookingScreen as CookingScreen;
import src.CoolerScreen as CoolerScreen;
import src.StepScreen as StepScreen;
import src.EndScreen as EndScreen;
import src.Notification as Notification;
import src.Status as Status;

exports = Class(GC.Application, function () {
  this.initUI = function () {
    var self = this;

    this.view.style.backgroundColor = 'black';

    this.score = 0;
    this.maxScore = 0;
    this.glovesOn = true; //NOTE: change to false before release

    var background = new ImageView({
      superview: this,
      width: device.screen.width, height: device.screen.height,
      image: "resources/images/background.png"
    });

    window.onresize = function() {
      console.debug("browser size: (" + device.screen.width + ", " + device.screen.height + ")");
    }

    var logo = new ImageView({
      superview: this,
      x: 10, y: 10,
      width: 200, height: 50,
      image: "resources/images/logo.png"
    })

    var root = new View({
      superview: this,
      x: (device.screen.width - 800) / 2, y: (device.screen.height - 600) / 2,
      width: 800, height: 600
    });

		//A StackView to the root of the scene graph 
    this.rootView = new StackView({
      superview: root,
      width: 800,
      height: 600,
      clip: true,
      backgroundColor: 'black'
    });

    this.stepScreen = new StepScreen({
      superview: root
    });

    this.endScreen = new EndScreen({
      superview: root
    });

    this.notification = new Notification({
      superview: root
    });

    this.statusBar = new Status({
      superview: root
    });
    this.statusBar.style.visible = false;
               
    this.screens = {
      title: new TitleScreen(),
      game: new GameScreen(),
      about: new AboutScreen(),
      help: new HelpScreen(),
      exit: new ExitScreen(),

      serving: new ServingScreen(),
      handwashing: new HandwashingScreen(),
      cooking: new CookingScreen(),
    };

    this.screenNotVisited = {
      game: true,
      serving: true,
      handwashing: true,
      cooking: true,
    }

    this.goToScreen('title');
	}

  this.goToScreen = function(screenName) {
    var self = this;

    if (!this.glovesOn && (screenName == 'serving' || screenName == 'cooking')) {
      this.showNotification("You must wash your hands before doing this station", "error");
      return;
    }

    this.rootView.push(this.screens[screenName]);

    this.statusBar.style.visible = (screenName != 'title')

    if (this.screenNotVisited[screenName]) {
      this.screenNotVisited[screenName] = false;
      this.addScore();

      if (screenName == 'game') {
        this.showNotification("Achievement Unlocked: Starting Game (100)", "info");
      } else {
        this.showNotification("Achievement Unlocked: New Station (100)", "info");
      }

      setTimeout(function() { self.showStepScreen(); }, 1000);
    }
  }

  this.goBack = function() {
    var viewLength = this.rootView.getStack().length;
    if (viewLength > 1) this.rootView.pop();

    if ((viewLength - 1) <= 1)
      this.statusBar.style.visible = false;

    this.stepScreen.hide();
    this.endScreen.hide();
  }

  this.showStepScreen = function() {
    this.stepScreen.show(this.rootView.getCurrentView().helpText);
  }

  this.showEndScreen = function() {
    this.endScreen.show(this.rootView.getCurrentView().endText);
  }

  this.showEndScreen = function() {
    this.endScreen.show(this.rootView.getCurrentView().endText);
  }

  this.showNotification = function(text, type) {
    this.notification.show(text, type);
    if (type == "error") this.subScore();
  }

  this.addScore = function() {
    this.score += 100;
    this.maxScore += 100;
    this.statusBar.updateScore();
  }

  this.subScore = function() {
    if (this.score >= 5) this.score -= 5;
    this.statusBar.updateScore();
  }

  this.launchUI = function () {};
});

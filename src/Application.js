/* 
 * Application.js serves as the entry point for the game. In the food safety game 
 * its purpose is to initialize the title screen, game screen, help screen, about
 * screen and exit screen and handle events for directing the game flow. 
 * 
 */
// devkit imports
import device;
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
import src.Notification as Notification;
import src.Status as Status;

exports = Class(GC.Application, function () {
  this.initUI = function () {
    this.view.style.backgroundColor = '#30B040';

		//A StackView to the root of the scene graph 
    this.rootView = new StackView({
      superview: this,
      x: 0,
      y: 0,
      width: 800,
      height: 600,
      clip: true,
      backgroundColor: '#37B34A'
    });

    this.stepScreen = new StepScreen({
      superview: this
    });

    this.endScreen = new StepScreen({
      superview: this
    });

    this.notification = new Notification({
      superview: this
    });

    this.statusBar = new Status({
      superview: this
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
      cooler: new CoolerScreen()
    };

    //this.goToScreen('title');
    this.goToScreen('serving');
	}

  this.goToScreen = function(screenName) {
    this.rootView.push(this.screens[screenName]);

    this.statusBar.style.visible =  (screenName != 'title')
  }

  this.goBack = function() {
    var viewLength = this.rootView.getStack().length;
    if (viewLength > 1) this.rootView.pop();

    if ((viewLength - 1) <= 1)
      this.statusBar.style.visible = false;
  }

  this.showStepScreen = function() {
    this.stepScreen.show(this.rootView.getCurrentView().helpText);
  }

  this.showEndScreen = function() {
    this.endScreen.show(this.rootView.getCurrentView().endText);
  }

  this.showNotification = function(text, type) {
    this.notification.show(text, type);
  }

  this.launchUI = function () {};
});

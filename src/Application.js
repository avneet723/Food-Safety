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

exports = Class(GC.Application, function () {
  var self = this;

  this.initUI = function () {
    this.view.style.backgroundColor = '#30B040';

		//A StackView to the root of the scene graph 
    var rootView = new StackView({
      superview: this,
      x: 0,
      y: 0,
      width: 800,
      height: 600,
      clip: true,
      backgroundColor: '#37B34A'
    });

    var stepScreen = new StepScreen({
      superview: this
    });

    self.mouseHand = new ImageView({
      superview: this,
      width: 90.8,
      height: 100,
      image: "resources/images/mouseHand.png",
      canHandleEvents: false
    })

    this.onInputMove = function(evt, point) {
      //console.debug(point.x + ", " + point.y);
      self.mouseHand.updateOpts({
        x: point.x - self.mouseHand.style.width / 3,
        y: point.y - 10
      });
    };

    var screens = {
      title: new TitleScreen(self),
      game: new GameScreen(self),
      about: new AboutScreen(self),
      help: new HelpScreen(self),
      exit: new ExitScreen(self),

      serving: new ServingScreen(self),
      handwashing: new HandwashingScreen(self),
      cooking: new CookingScreen(self),
      cooler: new CoolerScreen(self)
    };

    self.goToScreen = function(screenName) {
      rootView.push(screens[screenName]);
    }

    self.goBack = function() {
      if (rootView.getStack().length > 1) rootView.pop();
    }

    self.showStepScreen = function(text) {
      stepScreen.show(text);
    }

    //self.goToScreen('title');
    self.goToScreen('handwashing');
	};
	
	this.launchUI = function () {};
});

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
// user imports
import src.TitleScreen as TitleScreen;
import src.GameScreen as GameScreen;
import src.HelpScreen as HelpScreen;
import src.ExitScreen as ExitScreen;
import src.AboutScreen as AboutScreen;
import src.soundcontroller as soundcontroller;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		var titlescreen = new TitleScreen()
			gamescreen = new GameScreen()
			aboutscreen = new AboutScreen()
			helpscreen = new HelpScreen()
			exitscreen = new ExitScreen();
		
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

	    rootView.push(titlescreen);

	    var sound = soundcontroller.getSound();

	    /* Listening to the start event dispatched by the title screen when the start
	     * button has been pressed
	     */
	    titlescreen.on('titlescreen:start', function () {
			sound.play('levelmusic');
			rootView.push(gamescreen);
			// Push the gamescreen to the rootview
			// Dispatch a custom event to the game screen when the start button is hit
		});

		/* Listening to the help event dispatched by the title screen when the help button 
		 * has been pressed
		 */
		titlescreen.on('titlescreen:help', function () {
			rootView.push(helpscreen);
			// Push the help screen to the rootview
		});

		/* Listening to the about event dispatched by the title screen when the about button 
		 * is pressed on the titlescreen
		 */
		titlescreen.on('titlescreen:about', function () {
			rootView.push(aboutscreen);
		  	// Push the about screen to the rootview
		});

		/* Listing for the exit event didspatched by the title screen when the exit button
		 * is pressed. 
		 */
		titlescreen.on('titlescreen:exit', function () {
			rootView.push(exitscreen);
			// Save state and exit the game
		}); 
	};
	
	this.launchUI = function () {};
});

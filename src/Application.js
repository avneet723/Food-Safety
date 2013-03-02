/* @license
 * This file is part of the Game Closure SDK.
 *
 * The Game Closure SDK is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * The Game Closure SDK is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with the Game Closure SDK.  If not, see <http://www.gnu.org/licenses/>.
 */
// devkit imports
import device;
import ui.StackView as StackView;
import ui.TextView as TextView;
// user imports
import src.TitleScreen as TitleScreen;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		var titlescreen = new TitleScreen();
		
		this.view.style.backgroundColor = '#30B040';

		//A StackView to the root of the scene graph 
	    var rootView = new StackView({
	      superview: this,
	      x: 0,
	      y: 0,
	      // x: device.width / 2 - 160,
	      // y: device.height / 2 - 240,
	      width: 800,
	      height: 600,
	      clip: true,
	      backgroundColor: '#37B34A'
	    });

	    rootView.push(titlescreen);

		// var textview = new TextView({
		// 	superview: this.view,
		// 	layout: "box",
		// 	text: "Hello, world!",
		// 	color: "white"
		// });
	};
	
	this.launchUI = function () {};
});

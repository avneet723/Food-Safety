/*
 * Food Safety 100 Game - Food Safety Game for VT Dining Services
 * Copyright (C) 2013 Avneet Singh <avneet@vt.edu>, Evan Tatarka<evant@vt.edu>
 *
 * This file is part of Food Safety 100 Game.
 *
 * Food Safety 100 Game is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Food Safety 100 Game is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Food Safety 100 Game.  If not, see <http://www.gnu.org/licenses/>.
 */

import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;
import ui.widget.ButtonView;
import src.TextImageView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [{
      superview: opts.superview,
      width: 800,
      height: 40,
      image: "resources/images/statusBar.png"
    }]);

    var back = new ui.widget.ButtonView({
      superview: this,
      x: 0, y: 0,
      width: 100,
      height: 40,
      images: {
        up: "resources/images/Back-None.png",
        down: "resources/images/Back-Active.png"
      }
    });

    back.onInputSelect = function() {
      GC.app.goBack();
    }

    var help = new ui.widget.ButtonView({
      superview: this,
      x: 700, y: 0,
      width: 100,
      height: 40,
      images: {
        up: "resources/images/Help-None.png",
        down: "resources/images/Help-Active.png"
      }
    });

    help.onInputSelect = function() {
      GC.app.showStepScreen();
    }

    this.scoreView = new src.TextImageView({
      superview: this,
      x: 250, y: 5,
      width: 250, height: 30,
      image: "resources/images/clock.png",
      text: {
        text: "Score: 0",
        color: "#00afdc",
        size: 34,
        fontFamily: "Helvetica",
        padding: 2
      }
    });
  };

  this.updateScore = function() {
    this.scoreView.setText("Score: " + GC.app.score + "/" + GC.app.maxScore);
  }
});

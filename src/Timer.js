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

import animate;
import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;

exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    this.timerCount = 0;

    supr(this, 'init', [opts]);

    var background = new ui.ImageView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      image: "resources/images/timerCircle.png",
    });

    this.timerText = new ui.TextView({
      superview: this,
      width: this.style.width,
      height: this.style.height,
      text: this.timerCount + "s",
      size: 35
    });
  };

  this.start = function() {
    var self = this;

    if (this.timer) return;
    this.timer = setInterval(function() {
      self.timerText.updateOpts({text: (++self.timerCount) + "s"});
    }, 600)
  }

  this.stop = function() {
    clearInterval(this.timer);
    this.timer = null;
  }

  this.reset = function() {
    this.stop();
    this.timerCount = 0;
    this.timerText.updateOpts({text: 0 + "s"});
  }

  this.restart = function() {
    this.reset();
    this.start();
  }

});

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
import ui.TextView;
import ui.widget.ButtonView;

import src.TextImageView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function(opts) {
    this.temp = opts.temp;
    this.bottom = (opts.side == "bottom");

    supr(this, 'init', [opts]);

    this.tempImage = new src.TextImageView({
      superview: this,
      x: 0, y: (this.bottom ? 120 : -40),
      width: 100, height: 38,
      visible: false,
      image: "resources/images/clock.png",
      text: {
        text: this.temp + "°F",
        color: "#00afdc",
        size: 34,
        fontFamily: "Helvetica"
      }
    });
  }

  this.hideTemp = function() {
    this.tempImage.style.visible = false;
  }

  this.showTemp = function() {
    this.tempImage.style.visible = true;
  }

  this.toggleTemp = function() {
    if (this.tempImage.style.visible) {
      this.hideTemp();
    } else {
      this.showTemp();
    }
  }
});

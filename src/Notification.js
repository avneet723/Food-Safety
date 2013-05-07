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

exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [{
      superview: opts.superview,
      x: 800 - 260,
      y: 50,
      width: 260,
      height: 100,
      backgroundColor: "rgba(0, 0, 0, 1)",
      visible: false
    }]);

    this.content = new ui.TextView({
      superview: this,
      x: 15, y: 15,
      width: this.style.width - 15,
      height: this.style.height - 15,
      wrap: true,
      color: "white",
      size: 16
    });
  };

  this.show = function(text, type) {
    var self = this;

    this.content.updateOpts({text: text});

    switch (type) {
      case "info":
        this.style.backgroundColor = "rgba(65, 105, 225, 0.7)";
        break;
      case "tip":
        this.style.backgroundColor = "rgba(34, 139, 34, 0.7)";
        break;
      case "error":
        this.style.backgroundColor = "rgba(255, 99, 71, 0.7)";
        break;
    }

    this.style.visible = true;

    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }

    this.hideTimer = setTimeout(function() {
      self.style.visible = false;
    }, 8000);
  }
});

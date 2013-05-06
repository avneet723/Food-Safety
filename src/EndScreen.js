/*
 * Food Safety 100 Game - Food Safety Game for VT Dining Services
 * Copyright (C) 2013 Avneet Singh <avneeet@vt.edu>, Evan Tatarka<evant@vt.edu>
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
    supr(this, 'init', [opts]);
  };

  this.buildView = function() {
    var self = this;

    this.style.width = 800;
    this.style.height = 600;
    this.style.visible = false;

    var background = new ui.View({
      superview: this,
      width: 800,
      height: 600,
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    });

    this.popup = new ui.TextView({
      superview: this,
      x: 150, y: 150,
      width: 800 - 300,
      height: 600 - 300,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      color: "white",
      horizontalAlign: "left",
      padding: 30,
      wrap: true,
      canHandleEvents: false,
      size: 20
    });

    background.onInputSelect = function() {
      self.style.visible = false;  
      GC.app.goBack();
    };
  }

  this.show = function(text) {
    this.popup.updateOpts({text: text + "\n\nClick anywhere to go back to the main kitchen."});
    this.style.visible = true;
  }

  this.hide = function() {
    this.style.visible = false;
  }
});

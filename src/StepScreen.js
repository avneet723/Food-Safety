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

exports = Class(ui.View, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [opts]);

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

    var backgroundInner = new ui.View({
      superview: this,
      x: 150, y: 150,
      width: 800 - 300, height: 600 - 300,
      backgroundColor: "rgba(0, 0, 0, 0.7)"
    });

    this.popup = new ui.TextView({
      superview: backgroundInner,
      x: 15, y: 15,
      width: 800 - 300 - 15,
      height: 600 - 300 - 15,
      color: "white",
      //fontFamily: "'Lucidia Console', Monaco, monospace",
      fontFamily: "Arial, sans-serif",
      horizontalAlign: "left",
      wrap: true,
      canHandleEvents: false,
      size: 20
    });

    var closeButton = new ui.widget.ButtonView({
      superview: this,
      x: (800 - 80) / 2, y: 150 + 305,
      width: 80, height: 30,
      images: {
        up: "resources/images/Close-Button-None.png",
        down: "resources/images/Close-Button-Active.png",
      }
    });

    closeButton.onInputSelect = function() {
      self.hide();
    }

    background.onInputSelect = function() {
      self.hide();
    }
  }

  this.show = function(text) {
    this.popup.updateOpts({text: text});
    this.style.visible = true;
  }

  this.hide = function() {
    this.style.visible = false;
    if (this.onFirstHide) {
      this.onFirstHide();
      this.onFirstHide = null;
    }
  }
});

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

import device;
import ui.View;
import ui.ImageView;
import ui.widget.ButtonView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function () {
    opts = {
      x: 0,
      y: 0,
      image: "resources/images/backgroundmain.jpg"
    };

    supr(this, 'init', [opts]);
  };

  this.buildView = function () {
    var startButton = new ui.widget.ButtonView({
      superview: this,
      x: 20,
      y: 530,
      width: 95,
      height: 45,
      images: {
        up: "resources/images/Play-None.png",
        down: "resources/images/Play-Active.png",
      }
    });

    var infoButton = new ui.widget.ButtonView({
      superview: this,
      x: 150,
      y: 530,
      width: 95,
      height: 45, 
      images: {
        up: "resources/images/Info-None.png",
        down: "resources/images/Info-Active.png",
      }
    });

    startButton.onInputSelect = function() {
      GC.app.goToScreen('game');
    };

    infoButton.onInputSelect = function() {
      GC.app.goToScreen('info');
    };
  };
});

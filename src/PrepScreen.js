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

/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
 
exports = Class(ui.ImageView, function (supr) {
  this.init = function (opts) {
    opts = merge(opts, {
      x: 0,
      y: 0,
      image: "resources/images/PrepScreen.png"
    });

    supr(this, 'init', [opts]);
  };
});
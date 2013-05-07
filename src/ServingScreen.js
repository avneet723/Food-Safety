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
import ui.widget.ButtonView;

import src.TextImageView;
import src.MouseHand;
import src.ServingFoodItem;
 
exports = Class(ui.ImageView, function (supr) {
  this.helpText =
  "Click on each item to take the serving temperature, then click the Temperature Log to record temperature and any needed corrective actions.\n" + 
  "To avoid cross-contamination and cross-contact, make sure to sanitize your thermometer between different items.\n" +
  "Cold food items should be held at 40 degrees or below and hot food items should be held at 140 degrees or above."

  this.endText =
  "You have successfully taken the temperature of all the items.";

  this.infoText = {
    lastItem: "Remember, foods can only be reheated once. All items that get reheated must be reheated to 165 degrees."
  }

  this.completed = false;

  this.init = function () {
    var dirty = false;

    opts = {
      image: "resources/images/serving.png"
    };

    supr(this, 'init', [opts]);

    var servingFoodItems = [];
    servingFoodItems[0] = new src.ServingFoodItem({
      superview: this,
      x: 224, y: 210,
      width: 110, height: 110,
      temp: 38,
    });

    servingFoodItems[1] = new src.ServingFoodItem({
      superview: this,
      x: 476, y: 178,
      width: 130, height: 120,
      temp: 130
    });

    servingFoodItems[2] = new src.ServingFoodItem({
      superview: this,
      x: 92, y: 330,
      width: 228, height: 123,
      temp: 42,
      side: "bottom"
    });

    servingFoodItems[3] = new src.ServingFoodItem({
      superview: this,
      x: 483, y: 310,
      width: 147, height: 141,
      temp: 135,
      side: "bottom"
    });

    var self = this;

    servingFoodItems.forEach(function(foodItem, i) {
      foodItem.onInputSelect = function() {
        if (!foodItem.tempImage.style.visible) {
          if (dirty) {
            GC.app.showNotification("Please wipe your thermometer before using it on another item", "error");
            return;
          }

          if (i == 3) {
            GC.app.showNotification(self.infoText.lastItem, "info");
          }

          servingFoodItems.forEach(function(otherItem) {
            otherItem.hideTemp();
          });
          foodItem.showTemp();

          dirty = true;
          self.mouseHand.setImage("resources/images/thermometerDirty.png");
        }
      }
    });

    var wipeButton = new ui.widget.ButtonView({
      superview: this,
      x: 52, y: 514,
      width: 98, height: 52,
    });

    wipeButton.onInputSelect = function() {
      servingFoodItems.forEach(function(foodItem) {
        foodItem.hideTemp();
      });
      dirty = false;
      self.mouseHand.setImage("resources/images/thermometerClean.png");
    }

    var tempLog = new ui.widget.ButtonView({
      superview: this,
      x: 560, y: 500,
      width: 94, height: 100,
    });

    tempLog.onInputSelect = function() {
      tempLogScreen.style.visible = true;
    }

    // Clock not shown in game
    var clock = new src.TextImageView({
      superview: this,
      x: 340, y: 42,
      width: 150, height: 38,
      image: "resources/images/clock.png",
      visible: false,
      text: {
        text: "2:00 pm",
        color: "#00afdc",
        size: 34,
        fontFamily: "Helvetica",
      }
    });

    var tempLogScreen = new ui.ImageView({
      superview: this,
      width: 800, height: 600,
      image: "resources/images/TempLog_Table.png",
      visible: false
    });

    var closeButton = new ui.widget.ButtonView({
      superview: tempLogScreen,
      x: (800 - 80) / 2, y: 600 - 130,
      width: 80, height: 30,
      images: {
        up: "resources/images/Close-Button-None.png",
        down: "resources/images/Close-Button-Active.png",
      }
    });

    closeButton.onInputSelect = function() {
      tempLogScreen.style.visible = false;
    }

    var tempLogButtons = [];
    var supervisorButtons = [];
    var correctiveActionButtons = [];
    var heatButtons = [];
    var coolButtons = [];
    var trashButtons = [];

    for (var i = 0; i < 4; i++) {
      tempLogButtons[i] = new ui.widget.ButtonView({
        superview: tempLogScreen,
        x: 730, y: 230 + (i * 62),
        width: 59, height: 30,

        clickOnce: true,
        images: {
          up: "resources/images/Button-NotActive.png",
          disabled: "resources/images/Button-Active.png",
        }
      });

      correctiveActionButtons[i] = new ui.widget.ButtonView({
        superview: tempLogScreen,
        x: 420, y: 220 + (i * 62),
        width: 211, height: 47,
        visible: false,
        image: "resources/images/correctiveActions.png"
      });

      supervisorButtons[i] = new ui.widget.ButtonView({
        superview: tempLogScreen,
        x: 494, y: 220 + (i * 62),
        width: 55, height: 45,
        images: {
          up: "resources/images/Super-None.png",
          down: "resources/images/Super-Active.png"
        }
      });

      (function(supervisorButton, correctiveActionButton) {
        supervisorButton.onInputSelect = function() {
          supervisorButton.style.visible = false;
          correctiveActionButton.style.visible = true;
        }
      })(supervisorButtons[i], correctiveActionButtons[i]);

      var heatButton = new ui.widget.ButtonView({
        superview: correctiveActionButtons[i],
        x: 0, y: 0,
        width: 37, height: 47,
        backgroundColor: "rgba(255, 255, 255, 0.6)"
      });

      var coolButton = new ui.widget.ButtonView({
        superview: correctiveActionButtons[i],
        x: 74, y: 0,
        width: 47, height: 47,
        backgroundColor: "rgba(255, 255, 255, 0.6)"
      });

      var trashButton = new ui.widget.ButtonView({
        superview: correctiveActionButtons[i],
        x: 170, y: 0,
        width: 38, height: 47,
        backgroundColor: "rgba(255, 255, 255, 0.6)"
      });

      (function(heatButton, coolButton, trashButton) {
        heatButton.onInputSelect = function() {
          heatButton.style.visible = false;
          coolButton.style.visible = true;
          trashButton.style.visible = true;
        }

        coolButton.onInputSelect = function() {
          heatButton.style.visible = true;
          coolButton.style.visible = false;
          trashButton.style.visible = true;
        }

        trashButton.onInputSelect = function() {
          heatButton.style.visible = true;
          coolButton.style.visible = true;
          trashButton.style.visible = false;
        }
      })(heatButton, coolButton, trashButton);

      heatButtons[i] = heatButton;
      coolButtons[i] = coolButton;
      trashButtons[i] = trashButton;
    }

    var tempLogSigned = function(i) {
      tempLogButtons[i].setState(ui.widget.ButtonView.states.DISABLED);

      for (var j = 0; j < tempLogButtons.length; j++) {
        if (tempLogButtons[j]._state != ui.widget.ButtonView.states.DISABLED) {
          return;
        }
      }

      GC.app.showEndScreen();
      self.completed = true;
    }

    tempLogButtons[0].onInputSelect = function() {
      if (!heatButtons[0].style.visible || !coolButtons[0].style.visible || !trashButtons[0].style.visible) {
        GC.app.showNotification("There is no need for a corrective action", "error");
        heatButtons[0].style.visible = true;
        coolButtons[0].style.visible = true;
        trashButtons[0].style.visible = true;
      } else {
        tempLogSigned(0);
      }
    }

    tempLogButtons[1].onInputSelect = function() {
      if (heatButtons[1].style.visible) {
        GC.app.showNotification("Appropriate corrective action not applied", "error");
        heatButtons[1].style.visible = true;
        coolButtons[1].style.visible = true;
        trashButtons[1].style.visible = true;
      } else {
        tempLogSigned(1);
      }
    }

    tempLogButtons[2].onInputSelect = function() {
      if (coolButtons[2].style.visible) {
        GC.app.showNotification("Appropriate corrective action not applied", "error");
        heatButtons[2].style.visible = true;
        coolButtons[2].style.visible = true;
        trashButtons[2].style.visible = true;
      } else {
        tempLogSigned(2);
      }
    }

    tempLogButtons[3].onInputSelect = function() {
      if (trashButtons[3].style.visible) {
        GC.app.showNotification("Appropriate corrective action not applied", "error");
        heatButtons[3].style.visible = true;
        coolButtons[3].style.visible = true;
        trashButtons[3].style.visible = true;
      } else {
        tempLogSigned(3);
      }
    }

    var wipeLabel = new ui.TextView({
      superview: this,
      x: 40, y: 480,
      width: 88, height: 40,
      text: "Wipes",
      size: 16
    });

    this.mouseHand = new src.MouseHand({
      superview: this,
      image: "resources/images/thermometerClean.png",
    });
  }

  this.onInputMove = function(evt, point) {
    //console.debug(point);
    this.mouseHand.update(point);
  }
});

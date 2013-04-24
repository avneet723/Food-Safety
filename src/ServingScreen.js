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

    servingFoodItems.forEach(function(foodItem) {
      foodItem.onInputSelect = function() {
        if (!foodItem.tempImage.style.visible) {
          if (dirty) {
            GC.app.showNotification("Please wipe your thermometer before using it on another item", "error");
            return;
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
      x: (800 - 80) / 2, y: 600 - 80,
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
    var heatButtons = [];
    var coolButtons = [];
    var trashButtons = [];

    for (var i = 0; i < 4; i++) {
      tempLogButtons[i] = new ui.widget.ButtonView({
        superview: tempLogScreen,
        x: 670, y: 160 + (i * 95),
        width: 59, height: 30,

        clickOnce: true,
        images: {
          up: "resources/images/Button-NotActive.png",
          disabled: "resources/images/Button-Active.png",
        }
      });

      var heatButton = new ui.widget.ButtonView({
        superview: tempLogScreen,
        x: 262, y: 142 + (i * 95),
        width: 60, height: 65,
        backgroundColor: "rgba(255, 255, 255, 0.6)"
      });

      var coolButton = new ui.widget.ButtonView({
        superview: tempLogScreen,
        x: 380, y: 142 + (i * 95),
        width: 65, height: 65,
        backgroundColor: "rgba(255, 255, 255, 0.6)"
      });

      var trashButton = new ui.widget.ButtonView({
        superview: tempLogScreen,
        x: 520, y: 142 + (i * 95),
        width: 55, height: 70,
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

    tempLogButtons[0].onInputSelect = function() {
      if (!heatButtons[0].style.visible || !coolButtons[0].style.visible || !trashButtons[0].style.visible) {
        GC.app.showNotification("There is no need for a corrective action", "error");
        heatButtons[0].style.visible = true;
        coolButtons[0].style.visible = true;
        trashButtons[0].style.visible = true;
      } else {
        tempLogButtons[0].setState(ui.widget.ButtonView.states.DISABLED);
      }
    }

    tempLogButtons[1].onInputSelect = function() {
      if (heatButtons[1].style.visible) {
        GC.app.showNotification("Appropriate corrective action not applied", "error");
        heatButtons[1].style.visible = true;
        coolButtons[1].style.visible = true;
        trashButtons[1].style.visible = true;
      } else {
        tempLogButtons[1].setState(ui.widget.ButtonView.states.DISABLED);
      }
    }

    tempLogButtons[2].onInputSelect = function() {
      if (coolButtons[2].style.visible) {
        GC.app.showNotification("Appropriate corrective action not applied", "error");
        heatButtons[2].style.visible = true;
        coolButtons[2].style.visible = true;
        trashButtons[2].style.visible = true;
      } else {
        tempLogButtons[2].setState(ui.widget.ButtonView.states.DISABLED);
      }
    }

    tempLogButtons[3].onInputSelect = function() {
      if (trashButtons[3].style.visible) {
        GC.app.showNotification("Appropriate corrective action not applied", "error");
        heatButtons[3].style.visible = true;
        coolButtons[3].style.visible = true;
        trashButtons[3].style.visible = true;
      } else {
        tempLogButtons[3].setState(ui.widget.ButtonView.states.DISABLED);
      }
    }

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

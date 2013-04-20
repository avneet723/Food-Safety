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

    var clock = new src.TextImageView({
      superview: this,
      x: 340, y: 42,
      width: 150, height: 38,
      image: "resources/images/clock.png",
      text: {
        text: "5:30 pm",
        color: "#00afdc",
        size: 34,
        fontFamily: "Helvetica",
      }
    })

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

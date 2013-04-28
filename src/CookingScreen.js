/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;
import ui.widget.ButtonView;

import src.FoodItem;
import src.MouseHand;
 
exports = Class(ui.ImageView, function (supr) {
  this.init = function () {
    opts = {
      image: "resources/images/stove.png"
    };

    supr(this, 'init', [opts]);
  }

  this.buildView = function() {
    var dirty = false;

    var foodItems = [];
    foodItems[0] = new src.FoodItem({
      superview: this,
      x: 310, y: 130,
      width: 180, height: 92,
      uncookedImage: "resources/images/stoveTopLeftUncooked.png",
      cookedImage: "resources/images/stoveTopLeftCooked.png",
      minTemp: 145, side: "top"
    });

    foodItems[1] = new src.FoodItem({
      superview: this,
      x: 560, y: 130,
      width: 180, height: 92,
      uncookedImage: "resources/images/stoveTopRightUncooked.png",
      cookedImage: "resources/images/stoveTopRightCooked.png",
      minTemp: 165, side: "top"
    });

    foodItems[2] = new src.FoodItem({
      superview: this,
      x: 325, y: 250,
      width: 140, height: 92,
      uncookedImage: "resources/images/stoveBottomLeftUncooked.png",
      cookedImage: "resources/images/stoveBottomLeftCooked.png",
      minTemp: 145, side: "bottom"
    });

    foodItems[3] = new src.FoodItem ({
      superview: this,
      x: 584, y: 234,
      width: 160, height: 110,
      uncookedImage: "resources/images/stoveBottomRightUncooked.png",
      cookedImage: "resources/images/stoveBottomRightCooked.png",
      minTemp: 155, side: "bottom"
    });

    var self = this;

    foodItems.forEach(function(foodItem) {
      foodItem.onInputSelect = function() {
        if (!foodItem.temp.style.visible) {
          if (dirty) {
            GC.app.showNotification("Please wipe your thermometer before using it on another item", "error");
            return;
          }

          foodItems.forEach(function(otherItem) {
            otherItem.hideInfoStats();
          });
          foodItem.showInfoStats();

          dirty = true;
          self.mouseHand.setImage("resources/images/thermometerDirty.png");
        }
      }

      foodItem.serveButton.onInputSelect = function() {
        if (foodItem.timer.timerCount < 15) {
          GC.app.showNotification("You must temp for at least 15 seconds", "error");
        } else {
          foodItem.style.visible = false;

          for (var i = 0; i < foodItems.length; i++) {
            if (foodItems[i].style.visible) return;
          }

          GC.app.showEndScreen();
        }
      }
    });

    var wipeButton = new ui.widget.ButtonView({
      superview: this,
      x: 0, y: 415,
      width: 88, height: 85,
      backgroundColor: "rgba(0,0,0,0)"
    });

    wipeButton.onInputSelect = function() {
      foodItems.forEach(function(foodItem) {
        foodItem.hideInfoStats();
      });
      dirty = false;
      self.mouseHand.setImage("resources/images/thermometerClean.png");
    }

    this.mouseHand = new src.MouseHand({
      superview: this,
      image: "resources/images/thermometerClean.png",
    });
  }

  this.onInputMove = function(evt, point) {
    //console.debug(point.x + ", " + point.y);
    this.mouseHand.update(point);
  }

  this.helpText =
  "1. Make sure that the food items reach their min temperature for at least 15 seconds\n" + 
   "reduce the risk of cross contamination\n\n" +
   "Items                        Min Temp (F)   Time (seconds)\n" + 
   "Beef, Pork, Seafood, Eggs    145            15\n" + 
   "Ground Beef/pork, Sausage    155            15\n" + 
   "Poultry                      165            15\n" +
   "Casseroles                   165            15\n" +
   "Note: Roasts are larger product, you must make sure it stays at the correct temperature for 4 minutes.\n\n" +
"2. Cook the item until it's done and then take temperature.\n" +
"3. Click the item to start timer and obtain temperature.\n" +
"4. Click the item again to stop taking the temperature.\n" +
"5. Once done, click on \"Serve\" to remove it from the grill.\n"

  this.endText = 
  "You have successfully cooked the food.\nPlease proceed to the next station.";
});

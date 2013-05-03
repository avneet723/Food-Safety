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
    var shownBeefHelpText = false;

    var foodItems = [];
    foodItems[0] = new src.FoodItem({
      superview: this,
      x: 310, y: 130,
      width: 180, height: 92,
      uncookedImage: "resources/images/stoveTopLeftUncooked.png",
      cookedImage: "resources/images/stoveTopLeftCooked.png",
      minTemp: 145, side: "top",
      name: "Beef"
    });

    foodItems[1] = new src.FoodItem({
      superview: this,
      x: 560, y: 130,
      width: 180, height: 92,
      uncookedImage: "resources/images/stoveTopRightUncooked.png",
      cookedImage: "resources/images/stoveTopRightCooked.png",
      minTemp: 165, side: "top",
      name: "Chicken"
    });

    foodItems[2] = new src.FoodItem({
      superview: this,
      x: 325, y: 250,
      width: 140, height: 92,
      uncookedImage: "resources/images/stoveBottomLeftUncooked.png",
      cookedImage: "resources/images/stoveBottomLeftCooked.png",
      minTemp: 145, side: "bottom",
      name: "Fish"
    });

    foodItems[3] = new src.FoodItem ({
      superview: this,
      x: 584, y: 234,
      width: 160, height: 110,
      uncookedImage: "resources/images/stoveBottomRightUncooked.png",
      cookedImage: "resources/images/stoveBottomRightCooked.png",
      minTemp: 155, side: "bottom",
      name: "Burger"
    });

    var self = this;

    foodItems.forEach(function(foodItem) {
      foodItem.onInputSelect = function() {
        if (!foodItem.temp.style.visible) {
          if (!shownBeefHelpText) {
            shownBeefHelpText = true; 
            GC.app.showNotification(self.infoText.roast, "info");
          }

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
      backgroundColor: "transparent"
    });

    var wipeLabel = new ui.TextView({
      superview: this,
      x: 0, y: 380,
      width: 88, height: 40,
      text: "Wipes",
      color: "white",
      size: 16
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

    GC.app.stepScreen.onFirstHide = function() {
      foodItems.forEach(function(foodItem) {
        foodItem.temp.start();
      });
    }
  }

  this.onInputMove = function(evt, point) {
    this.mouseHand.update(point);
  }

  this.helpText =
    "After the items have finished cooking, use the thermometer to take the temperature. " + 
    "You need to leave the thermometer in for 15 seconds. " +
    "To avoid cross-contamination and cross-contact, make sure to sanitize your thermometer between different items.\n\n" +
    "Beef, pork, Seafood, Eggs – 145°F\n" +
    "Ground Beef/Pork, Sausage – 155°F\n" +
    "Poultry (Chicken/Turkey/Duck) – 165°F\n\n" +
    "Once you have taken the temperature for 15 seconds click the Serve button to continue."

  this.endText = 
  "You have successfully cooked the food.\nPlease proceed to the next station.";

  this.infoText = {
    roast: "If this were a roast you would have to hold the thermometer for four minutes because it is a larger product."
  }
});

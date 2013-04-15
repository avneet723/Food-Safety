/*
 *  
 */

import animate;
import ui.View;
import ui.ImageView;
import ui.TextView;

import src.FoodItem;
 
exports = Class(ui.ImageView, function (supr) {
  var self = this;

  this.init = function (app) {
    self.app = app;

    opts = {
      image: "resources/images/stove.png"
    };

    supr(this, 'init', [opts]);
  };

  this.buildView = function() {
    var beef = new src.FoodItem({
      superview: this,
      x: 310, y: 130,
      width: 180, height: 92,
      uncookedImage: "resources/images/stoveTopLeftUncooked.png",
      cookedImage: "resources/images/stoveTopLeftCooked.png",
      minTemp: 145, side: "top"
    })

    beef.onInputSelect = function() {
      beef.toggleInfoStats();
      chicken.hideInfoStats();
      fish.hideInfoStats();
      burger.hideInfoStats();
    }

    var chicken = new src.FoodItem({
      superview: this,
      x: 560, y: 130,
      width: 180, height: 92,
      uncookedImage: "resources/images/stoveTopRightUncooked.png",
      cookedImage: "resources/images/stoveTopRightCooked.png",
      minTemp: 165, side: "top"
    })

    chicken.onInputSelect = function() {
      beef.hideInfoStats();
      chicken.toggleInfoStats();
      fish.hideInfoStats();
      burger.hideInfoStats();
    }

    var fish = new src.FoodItem({
      superview: this,
      x: 325, y: 250,
      width: 140, height: 92,
      uncookedImage: "resources/images/stoveBottomLeftUncooked.png",
      cookedImage: "resources/images/stoveBottomLeftCooked.png",
      minTemp: 145, side: "bottom"
    })

    fish.onInputSelect = function() {
      beef.hideInfoStats();
      chicken.hideInfoStats();
      fish.toggleInfoStats();
      burger.hideInfoStats();
    }

    var burger = new src.FoodItem ({
      superview: this,
      x: 584, y: 234,
      width: 160, height: 110,
      uncookedImage: "resources/images/stoveBottomRightUncooked.png",
      cookedImage: "resources/images/stoveBottomRightCooked.png",
      minTemp: 155, side: "bottom"
    })

    burger.onInputSelect = function() {
      beef.hideInfoStats();
      chicken.hideInfoStats();
      fish.hideInfoStats();
      burger.toggleInfoStats();
    }

    this.mouseHand = new ui.ImageView({
      superview: this,
      width: 90.8,
      height: 100,
      image: "resources/images/thermometer.png",
      canHandleEvents: false
    })

  }

  this.onInputMove = function(evt, point) {
    //console.debug(point.x + ", " + point.y);
    this.mouseHand.updateOpts({
      x: point.x - this.mouseHand.style.width / 3,
      y: point.y - 10
    })
  }

  this.helpText = function() {
    return "Note: Please make sure you have gloves on.\n" +
    "1. Make sure that the food items reach their min temperature for at least 15 seconds\n" + 
   "reduce the risk of cross contamination\n" +
   "Items\tMin Temp (F)\tTime (seconds)\n" + 
   "Beef, Pork, Seafood, Eggs\t145\t15 (or 4 minutes)\n" + 
   "Ground Beef/pork, Sausage\t155\t15\n" + 
   "Poultry - chicken, duck, turkey, etc.\t165\t15\n" +
   "Casseroles\t165\t15\n" +
   "Note: Roasts are larger product, you must make sure it stays at the correct temperature for 4 minutes.\n" +
"2. Cook the item until it looks done and then take temperature.\n" +
"3. Click on the item to start the timer and obtain temperature.\n" +
"4. Click on the item again to stop taking the temperature.\n" +
"5. Once done, click on \"Serve\" to remove it from the grill.\n" +
"Reheating:\n" +
"* Reheat to at least a minimum internal temperature of 165 Â°F for 15 seconds within 2 hours\n" +
"* Reheating is only allowed once so that food doesnâ€™t go through the danger zone too many times"
  }
});

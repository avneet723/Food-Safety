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
      cookedImage: "resources/images/stoveTopLeftCooked.png"
    })

    var chicken = new src.FoodItem({
      superview: this,
      x: 560, y: 130,
      width: 180, height: 92,
      uncookedImage: "resources/images/stoveTopRightUncooked.png",
      cookedImage: "resources/images/stoveTopRightCooked.png"
    })

    var fish = new src.FoodItem({
      superview: this,
      x: 325, y: 250,
      width: 140, height: 92,
      uncookedImage: "resources/images/stoveBottomLeftUncooked.png",
      cookedImage: "resources/images/stoveBottomLeftCooked.png"
    })

    var burger = new src.FoodItem ({
      superview: this,
      x: 584, y: 234,
      width: 160, height: 110,
      uncookedImage: "resources/images/stoveBottomRightUncooked.png",
      cookedImage: "resources/images/stoveBottomRightCooked.png"
    })
  }

  this.helpText = function() {
    return "Note: Please make sure you have gloves on.\n" +
      "You need to make sure the food items reach their minimum internal temperature for at least 15 seconds.\n" +
      "Use your themometer to take the temperature."
  }
});

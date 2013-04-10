import ui.View;
import ui.ImageView;
import ui.SpriteView;
import ui.TextView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function (opts) {
    this.app = opts.superview;

    supr(this, 'init', [{
      superview: opts.superview,
      width: 800,
      height: 40,
      image: "resources/images/statusBar.png"
    }]);
  };

  this.buildView = function() {
    var self = this;

    new ui.View({
      superview: this,
      x: 0, y: 0,
      width: 100,
      height: 40,
    }).onInputSelect = function() {
      self.app.goBack();
    };

    new ui.View({
      superview: this,
      x: 700,
      width: 100,
      height: 40
    }).onInputSelect = function() {
      self.app.showStepScreen();
    }
  }
});

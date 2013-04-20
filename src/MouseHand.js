import ui.ImageView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [{
      superview: opts.superview,
      width: 90.8, height: 100,
      image: opts.image,
      canHandleEvents: false
    }]);
  }

  this.update = function(point) {
    this.updateOpts({
      x: point.x - this.style.width / 3,
      y: point.y - 10
    });
  }
});

import ui.ImageView;
import ui.TextView;

exports = Class(ui.ImageView, function (supr) {
  this.init = function (opts) {
    supr(this, 'init', [opts]);

    var textOpts = opts.text;
    textOpts.superview = this;
    textOpts.width = opts.width;
    textOpts.height = opts.height;

    var textView = new ui.TextView(textOpts);
  }
});

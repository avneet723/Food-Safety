66f1a72df0131d90e46833aa9d94b07c
jsio("import animate");jsio("import ui.View");jsio("import ui.ImageView");jsio("import ui.SpriteView");jsio("import ui.TextView");var src_Temperature=__class__;
exports=src_Temperature(function(){return this.init&&this.init.apply(this,arguments)},ui.View,function(b){this.init=function(a){this.timerCount=0;this.startTemp=a.startTemp;this.endTemp=a.endTemp;b(this,"init",[a]);new ui.ImageView({superview:this,width:this.style.width,height:this.style.height,image:"resources/images/timerCircle.png"});this.tempText=new ui.TextView({superview:this,width:this.style.width,height:this.style.height,size:35})};this.start=function(){var a=this;this.timer||(this.timer=
setInterval(function(){a.setText(++a.timerCount)},600))};this.setText=function(a){a=Math.round(Math.min(3*Math.sqrt(a)+this.startTemp,this.endTemp));if(this.tempText.getText()!=a+"\u00b0F"&&(this.tempText.setText(a+"\u00b0F"),null!=this.onChange))this.onChange(a)};this.stop=function(){clearInterval(this.timer);this.timer=null};this.reset=function(){this.stop();this.timerCount=0;this.setText(0)};this.restart=function(){this.reset();this.start()}});

f8a86f39d78a843bcd4063a825aecc9a
jsio("import animate");jsio("import ui.View");jsio("import ui.ImageView");jsio("import ui.TextView");var src_ExitScreen=__class__;exports=src_ExitScreen(function(){return this.init&&this.init.apply(this,arguments)},ui.TextView,function(a){this.init=function(){opts={text:"Exit Screen"};a(this,"init",[opts])};this.onInputSelect=function(){GC.app.goBack()}});

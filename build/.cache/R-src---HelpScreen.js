ac88e4e561683e438eb7876c44935e2f
jsio("import animate");jsio("import ui.View");jsio("import ui.ImageView");jsio("import ui.TextView");var src_HelpScreen=__class__;exports=src_HelpScreen(function(){return this.init&&this.init.apply(this,arguments)},ui.TextView,function(a){this.init=function(){opts={text:"Help Screen",background:"#fff"};a(this,"init",[opts])};this.onInputSelect=function(){GC.app.goBack()}});

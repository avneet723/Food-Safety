283565f901648130145b7e47e835099d
jsio("import animate");jsio("import ui.View");jsio("import ui.ImageView");jsio("import ui.TextView");jsio("import ui.widget.ButtonView");jsio("import src.TextImageView");jsio("import src.MouseHand");jsio("import src.ServingFoodItem");var src_ServingScreen=__class__;
exports=src_ServingScreen(function(){return this.init&&this.init.apply(this,arguments)},ui.ImageView,function(m){this.init=function(){var h=!1;opts={image:"resources/images/serving.png"};m(this,"init",[opts]);var b=[];b[0]=new src.ServingFoodItem({superview:this,x:224,y:210,width:110,height:110,temp:38});b[1]=new src.ServingFoodItem({superview:this,x:476,y:178,width:130,height:120,temp:130});b[2]=new src.ServingFoodItem({superview:this,x:92,y:330,width:228,height:123,temp:42,side:"bottom"});b[3]=
new src.ServingFoodItem({superview:this,x:483,y:310,width:147,height:141,temp:135,side:"bottom"});var i=this;b.forEach(function(a){a.onInputSelect=function(){a.tempImage.style.visible||(h?GC.app.showNotification("Please wipe your thermometer before using it on another item","error"):(b.forEach(function(a){a.hideTemp()}),a.showTemp(),h=!0,i.mouseHand.setImage("resources/images/thermometerDirty.png")))}});(new ui.widget.ButtonView({superview:this,x:52,y:514,width:98,height:52})).onInputSelect=function(){b.forEach(function(a){a.hideTemp()});
h=!1;i.mouseHand.setImage("resources/images/thermometerClean.png")};(new ui.widget.ButtonView({superview:this,x:560,y:500,width:94,height:100})).onInputSelect=function(){d.style.visible=!0};new src.TextImageView({superview:this,x:340,y:42,width:150,height:38,image:"resources/images/clock.png",visible:!1,text:{text:"2:00 pm",color:"#00afdc",size:34,fontFamily:"Helvetica"}});var d=new ui.ImageView({superview:this,width:800,height:600,image:"resources/images/TempLog_Table.png",visible:!1});(new ui.widget.ButtonView({superview:d,
x:360,y:520,width:80,height:30,images:{up:"resources/images/Close-Button-None.png",down:"resources/images/Close-Button-Active.png"}})).onInputSelect=function(){d.style.visible=!1};for(var c=[],e=[],f=[],g=[],a=0;4>a;a++){c[a]=new ui.widget.ButtonView({superview:d,x:670,y:160+95*a,width:59,height:30,clickOnce:!0,images:{up:"resources/images/Button-NotActive.png",disabled:"resources/images/Button-Active.png"}});var j=new ui.widget.ButtonView({superview:d,x:262,y:142+95*a,width:60,height:65,backgroundColor:"rgba(255, 255, 255, 0.6)"}),
k=new ui.widget.ButtonView({superview:d,x:380,y:142+95*a,width:65,height:65,backgroundColor:"rgba(255, 255, 255, 0.6)"}),l=new ui.widget.ButtonView({superview:d,x:520,y:142+95*a,width:55,height:70,backgroundColor:"rgba(255, 255, 255, 0.6)"});(function(a,b,c){a.onInputSelect=function(){a.style.visible=!1;b.style.visible=!0;c.style.visible=!0};b.onInputSelect=function(){a.style.visible=!0;b.style.visible=!1;c.style.visible=!0};c.onInputSelect=function(){a.style.visible=!0;b.style.visible=!0;c.style.visible=
!1}})(j,k,l);e[a]=j;f[a]=k;g[a]=l}c[0].onInputSelect=function(){!e[0].style.visible||!f[0].style.visible||!g[0].style.visible?(GC.app.showNotification("There is no need for a corrective action","error"),e[0].style.visible=!0,f[0].style.visible=!0,g[0].style.visible=!0):c[0].setState(ui.widget.ButtonView.states.DISABLED)};c[1].onInputSelect=function(){e[1].style.visible?(GC.app.showNotification("Appropriate corrective action not applied","error"),e[1].style.visible=!0,f[1].style.visible=!0,g[1].style.visible=
!0):c[1].setState(ui.widget.ButtonView.states.DISABLED)};c[2].onInputSelect=function(){f[2].style.visible?(GC.app.showNotification("Appropriate corrective action not applied","error"),e[2].style.visible=!0,f[2].style.visible=!0,g[2].style.visible=!0):c[2].setState(ui.widget.ButtonView.states.DISABLED)};c[3].onInputSelect=function(){g[3].style.visible?(GC.app.showNotification("Appropriate corrective action not applied","error"),e[3].style.visible=!0,f[3].style.visible=!0,g[3].style.visible=!0):c[3].setState(ui.widget.ButtonView.states.DISABLED)};
this.mouseHand=new src.MouseHand({superview:this,image:"resources/images/thermometerClean.png"})};this.onInputMove=function(h,b){this.mouseHand.update(b)}});

4ebff529b9b7119f13e8f1321f4e5c55
jsio("import animate");jsio("import ui.View");jsio("import ui.ImageView");jsio("import ui.SpriteView");jsio("import ui.TextView");jsio("import ui.widget.ButtonView");jsio("import src.Timer as Timer");jsio("import src.MouseHand");var src_HandwashingScreen=__class__;
exports=src_HandwashingScreen(function(){return this.init&&this.init.apply(this,arguments)},ui.View,function(m){this.init=function(){m(this,"init")};this.helpText="1. Check for paper towel\n2. Turn on the water\n3. Get soap\n4. Scrub hands to remove dirt for at least 20 sec.\n5. Rinse your hands\n6. Dry your hands\n7. Put on gloves\n";this.buildView=function(){var m=this,q=!0,n=!1,o=!0,h=!1,b=!1,f=!1,j=!1,k=!1;new ui.ImageView({superview:this,width:800,height:600,image:"resources/images/handwashing.png"});
(new ui.widget.ButtonView({superview:this,x:350,y:10,width:100,height:20,title:"Instructions",backgroundColor:"black",text:{color:"white"}})).onInputSelect=function(){GC.app.showStepScreen("1. Check for paper towel\n2. Turn on the water\n3. Get soap\n4. Scrub hands to remove dirt for at least 20 sec.\n5. Rinse your hands\n6. Dry your hands\n7. Put on gloves\n")};var p=new ui.ImageView({superview:this,x:347,y:249,width:16,height:115,image:"resources/images/water-stream.png",visible:!1});p.onInputSelect=
function(){b&&!o?(s.style.visible=!1,b=r.style.visible=!1,f=!0):o?GC.app.showNotification("Please remove all dirt before rinsing hands.","error"):GC.app.showNotification("You already rinsed your hands.","error")};(new ui.widget.ButtonView({superview:this,x:300,y:165,width:150,height:85,backgroundColor:"rgba(0,0,0,0)"})).onInputSelect=function(){q||k?(p.style.visible=!p.style.visible,h=!h):GC.app.showNotification("Don't touch the faucet when you are scrubbing your hands","error")};var d=new ui.widget.ButtonView({superview:this,
x:435,y:61,height:109,width:67,backgroundColor:"rgba(0, 0, 0, 0)"}),t=new ui.widget.ButtonView({superview:this,x:563,y:174,height:70,width:130,backgroundColor:"rgba(0, 0, 0, 0)"}),u=new ui.ImageView({superview:this,x:116,y:284,width:496,height:264,image:"resources/images/glovedHands.png",visible:!1});t.onInputSelect=function(){!j&&f&&k&&!h?(g.style.visible=!1,l.style.visible=!1,u.style.visible=!0,f=!1,j=!0,GC.app.showStepScreen("You have successfully washed your hands.\nPlease proceed to the next station.")):
k&&h?GC.app.showNotification("Please turn off water with paper towel before putting gloves on.","error"):GC.app.showNotification("You need to wash your hands before putting on gloves.","error")};var i=new Timer({superview:this,x:97,y:265,width:85,height:85,visible:!1});this.mouseHand=new src.MouseHand({superview:this,image:"resources/images/mouseHand.png"});d.onInputSelect=function(){h&&n&&!b&&!f&&!j?(l.updateOpts({visible:!0}),g.updateOpts({visible:!0}),m.mouseHand.style.visible=!1,i.updateOpts({visible:!0}),
i.start(),a.forEach(function(a){a.updateOpts({visible:!0})}),q=!1,b=!0):b||f||j?GC.app.showNotification("You already applied the soap","error"):GC.app.showNotification("Make sure the water is turned on and the paper towel is out","error")};var d=new ui.ImageView({superview:this,x:100,y:30,width:180,height:180,image:"resources/images/dispenser-run-01.png"}),e=new ui.SpriteView({superview:this,x:100,y:30,width:180,height:180,url:"resources/images/dispenser",frameRate:4,defaultAnimation:"run",loop:!1});
e.setFrame=function(a){this._currentFrame=a;this.setImage(this._animations[this._currentAnimationName].frames[this._currentFrame])};d.onInputSelect=function(){!b|!f&&(e.startAnimation("run",{callback:function(){e.setFrame(3);e.style.visible=!0}}),n=!0)};e.onInputSelect=function(){e.isPlaying||(b?GC.app.showNotification("Your hands have not been scrubbed","error"):(e.setFrame(0),e.style.visible=!1,f&&(v.style.visible=!0),n=!1,k=!0))};for(var l=new ui.ImageView({superview:this,x:100,y:284,width:241,
height:265,image:"resources/images/cleanHand.png",visible:!1}),r=new ui.ImageView({superview:l,y:130,x:50,width:171,height:131,visible:!1,image:"resources/images/bubbles.png",canHandleEvents:!1}),a=[],d=1;9>=d;d++)a[d-1]=new ui.ImageView({superview:l,height:24,width:24,visible:!1,image:"resources/images/dirt"+d+".png"});a[0].updateOpts({x:101,y:18});a[1].updateOpts({x:147,y:0});a[2].updateOpts({x:176,y:16});a[3].updateOpts({x:220,y:60});a[4].updateOpts({x:114,y:85,width:32,height:47});a[5].updateOpts({x:154,
y:90});a[6].updateOpts({width:26,height:44,x:178,y:108});a[7].updateOpts({x:22,y:145});a[8].updateOpts({width:58,height:53,x:76,y:169});var w=function(){if(b){for(var c=0;c<a.length;c++)if(0!=a[c].style.opacity)return!1;o=!1;return!0}};a.forEach(function(c){c.onInputMove=function(){c.style.opacity=Math.max(c.style.opacity-0.05,0);0.2>c.style.opacity&&(c.style.opacity=0);w()&&(20>i.timerCount?(GC.app.showNotification("You cleaned too fast! You should take at least 20 seconds","error"),a.forEach(function(a){a.updateOpts({opacity:1})}),
i.restart()):(r.style.visible=!0,i.stop()))}});var g=new ui.ImageView({superview:this,width:241,height:265,image:"resources/images/hoverHand.png",visible:!1,canHandleEvents:!1}),s=new ui.ImageView({superview:g,y:100,width:171,height:131,image:"resources/images/bubbles.png",canHandleEvents:!1}),v=new ui.ImageView({superview:g,y:50,width:149,height:180,image:"resources/images/paperTowel.png",canHandleEvents:!1,visible:!1});this.onInputMove=function(a,b){this.mouseHand.update(b);g.updateOpts({x:b.x-
g.style.width/3,y:b.y-10})}}});

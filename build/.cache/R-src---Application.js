9c6eac7d30ce702831d26149d7f74106
jsio("import device");jsio("import ui.StackView as StackView");jsio("import ui.TextView as TextView");jsio("import ui.ImageView as ImageView");jsio("import src.TitleScreen as TitleScreen");jsio("import src.GameScreen as GameScreen");jsio("import src.HelpScreen as HelpScreen");jsio("import src.ExitScreen as ExitScreen");jsio("import src.AboutScreen as AboutScreen");jsio("import src.ServingScreen as ServingScreen");jsio("import src.HandwashingScreen as HandwashingScreen");jsio("import src.CookingScreen as CookingScreen");
jsio("import src.CoolerScreen as CoolerScreen");jsio("import src.StepScreen as StepScreen");jsio("import src.Notification as Notification");jsio("import src.Status as Status");var src_Application=__class__;
exports=src_Application(function(){return this.init&&this.init.apply(this,arguments)},GC.Application,function(){this.initUI=function(){this.view.style.backgroundColor="#30B040";this.rootView=new StackView({superview:this,x:0,y:0,width:800,height:600,clip:!0,backgroundColor:"#37B34A"});this.stepScreen=new StepScreen({superview:this});this.endScreen=new StepScreen({superview:this});this.notification=new Notification({superview:this});this.statusBar=new Status({superview:this});this.statusBar.style.visible=
!1;this.screens={title:new TitleScreen,game:new GameScreen,about:new AboutScreen,help:new HelpScreen,exit:new ExitScreen,serving:new ServingScreen,handwashing:new HandwashingScreen,cooking:new CookingScreen,cooler:new CoolerScreen};this.goToScreen("title")};this.goToScreen=function(a){this.rootView.push(this.screens[a]);this.statusBar.style.visible="title"!=a};this.goBack=function(){var a=this.rootView.getStack().length;1<a&&this.rootView.pop();1>=a-1&&(this.statusBar.style.visible=!1)};this.showStepScreen=
function(){this.stepScreen.show(this.rootView.getCurrentView().helpText)};this.showEndScreen=function(){this.endScreen.show(this.rootView.getCurrentView().endText)};this.showNotification=function(a,b){this.notification.show(a,b)};this.launchUI=function(){}});

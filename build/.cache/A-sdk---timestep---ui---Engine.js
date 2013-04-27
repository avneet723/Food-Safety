ffb760e851fd7fd5d9f8f1d3bcd588f3
jsio("import event.Emitter as Emitter");jsio("import event.input.dispatch as dispatch");jsio("import timer");jsio("import ui.backend.ReflowManager as ReflowManager");jsio("import device");var _timers=[];timer.onTick=function(b){for(var a=_timers.length;a--;)_timers[a](b)};
var __instance=null,sdk_timestep_ui_Engine=__class__,Application=exports=sdk_timestep_ui_Engine(function(){return this.init&&this.init.apply(this,arguments)},Emitter,function(){this.init=function(b){__instance||(jsio("import .StackView"),__instance=this);var a=b&&b.canvas;"string"==typeof a&&(GLOBAL.document&&document.getElementById)&&(a=document.getElementById(a));this._opts=b=merge(b,{keyListenerEnabled:!0,width:a&&a.width||device.width,height:a&&a.height||device.height,view:null,dtFixed:0,dtMinimum:0,
clearEachFrame:!0,alwaysRepaint:!0,repaintOnEvent:!0,mergeMoveEvents:!1,continuousInputCheck:!device.isMobileBrowser&&!device.isMobile,showFPS:!1});_timers.push(bind(this,this._tick));this._doubleBuffered=!0;this._countdown=null;device.useDOM||(this._rootElement=new (device.get("Canvas"))({el:a,width:b.width,height:b.height,offscreen:!1}),this._ctx=this._rootElement.getContext("2d"),this._ctx.font="11px "+device.defaultFontFamily);this._view=b.view||new StackView;this._view.style.update({width:b.width,
height:b.height});device.useDOM&&(this._rootElement=this._view.getBacking().getElement());this._view.__root=this;this._events=[];dispatch.KeyListener&&(this._keyListener=new dispatch.KeyListener);this._inputListener=new dispatch.InputListener({el:this._rootElement,keyListener:this._keyListener});this._reflowMgr=ReflowManager.get();this._tickBuffer=0;this._onTick=[];"browser"==device.name&&(a?(device.width=a.width,device.height=a.height,device.screen.width=a.width,device.screen.height=a.height):(b=
device.get("doc"))&&b.setEngine(this));this.updateOpts(this._opts)};this.updateOpts=function(b){this._opts=merge(b,this._opts);this._keyListener&&this._keyListener.setEnabled(this._opts.keyListenerEnabled);this._opts.showFPS?(this._applicationFPS||(jsio("import ui.backend.debug.FPSView as FPSView"),this._applicationFPS=new FPSView({application:this})),this._renderFPS=bind(this._applicationFPS,this._applicationFPS.render),this._tickFPS=bind(this._applicationFPS,this._applicationFPS.tick)):(this._renderFPS=
function(){},this._tickFPS=function(){})};this.supports=function(b){return this._opts[b]};this.getInput=function(){return this._inputListener};this.getKeyListener=function(){return this._keyListener};this.getEvents=function(){return this._events};this.getElement=this.getCanvas=function(){return this._rootElement};this.getViewCtor=function(){return View};this.getView=function(){return this._view};this.setView=function(b){this._view=b;return this};this.show=function(){this._rootElement.style.display=
"block";return this};this.hide=function(){this._rootElement.style.display="none";return this};this.pause=function(){this.stopLoop();this._keyListener&&this._keyListener.setEnabled(!1)};this.resume=function(){this.startLoop();this._keyListener&&this._keyListener.setEnabled(!0)};this.stepFrame=function(b){this.pause();this._countdown=b||1;this.resume()};this.startLoop=function(b){if(!this._running)return this._running=!0,this.now=0,timer.start(b||this._opts.dtMinimum),this};this.stopLoop=function(){if(this._running)return this._running=
!1,timer.stop(),this};this.isRunning=function(){return this._running};this.doOnTick=function(b){1<arguments.length&&(b=bind.apply(this,arguments));this._onTick.push(b)};this._tick=function(b){null!==this._countdown&&(this._countdown--,-1===this._countdown&&(this.pause(),this._countdown=null));this._needsRepaint=!1;if(this._ctx){var a=this._ctx.getElement(),c=this._view.style;if(a&&(c.width!=a.width/c.scale||c.height!=a.height/c.scale))c.width=a.width/c.scale,c.height=a.height/c.scale}for(a=0;c=this._onTick[a];++a)c(b);
c=this._inputListener.getEvents();a=c.length;this._events=c;if(this._opts._mergeMoveEvents)for(var d=!1,a=a-1;0<=a;--a)c[a].type==dispatch.eventTypes.MOVE&&(d?c.splice(a,1):d=!0);for(a=0;d=c[a];++a)d.srcApp=this,dispatch.dispatchEvent(this._view,d);device.useDOM||(0<a?this._opts.repaintOnEvent&&this.needsRepaint():this._opts.continuousInputCheck&&(a=dispatch._evtHistory["input:move"])&&dispatch.dispatchEvent(this._view,new dispatch.InputEvent(a.id,a.type,a.srcPt)));if(this._opts.dtFixed)for(this._tickBuffer+=
b;this._tickBuffer>=this._opts.dtFixed;)this._tickBuffer-=this._opts.dtFixed,this.now+=this._opts.dtFixed,this.__tick(this._opts.dtFixed);else this.__tick(b);this._reflowMgr.startReflow(this._ctx);this._reflowMgr.setInRender(!0);a=this._opts.alwaysRepaint||this._needsRepaint;!a&&this._doubleBuffered&&0<this._doubleBufferedState?(--this._doubleBufferedState,this.render(b)):a&&(this._doubleBufferedState=3,this.render(b));this._reflowMgr.setInRender(!1)};this.render=function(b){this._opts.clearEachFrame&&
this._ctx&&this._ctx.clear();this._view.__view.wrapRender(this._ctx,{});this.publish("Render",this._ctx);this._ctx&&(DEBUG&&this._renderFPS(this._ctx,b),this._ctx.swap())};this.needsRepaint=function(){this._needsRepaint=!0;return this};this.__tick=function(b){this._tickFPS(b);this.publish("Tick",b);this._view.__view.wrapTick(b,this)}});exports.get=function(){return __instance};

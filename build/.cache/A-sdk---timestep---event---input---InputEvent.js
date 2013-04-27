7a6dbebdb88dff5e6f2076fec1759b1f
jsio("import math.geom.Point as Point");jsio("import timer");
var sdk_timestep_event_input_InputEvent=__class__,InputEvent=exports=sdk_timestep_event_input_InputEvent(function(){return this.init&&this.init.apply(this,arguments)},function(){this.cancelled=!1;this.depth=0;this.init=function(a,b,c,d,e,f){this.id=a;this.type=b;this.point=this.pt={};this.srcPoint=this.srcPt=new Point(c,d);this.trace=[];this.root=e||null;this.when=timer.now;this.target=f||null};this.cancel=function(){this.cancelled=!0};this.clone=function(){return new InputEvent(this.id,this.type,
this.srcPt.x,this.srcPt.y,this.root,this.target)}});

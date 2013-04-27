4fa8427c9db383e5e0c530532489a7df
jsio("import .Point");var sdk_jsio_math_geom_Line=__class__;
exports=sdk_jsio_math_geom_Line(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a,b,c,d){switch(arguments.length){case 0:this.start=new Point;this.end=new Point;break;case 1:this.start=new Point(a.start);this.end=new Point(a.end);break;case 2:this.start=new Point(a);this.end=new Point(b);break;case 3:this.start=new Point(a);this.end=new Point(b,c);break;default:this.start=new Point(a,b),this.end=new Point(c,d)}};this.getMagnitude=this.getLength=function(){var a=
this.end.x-this.start.x,b=this.end.y-this.start.y;return Math.sqrt(a*a+b*b)}});

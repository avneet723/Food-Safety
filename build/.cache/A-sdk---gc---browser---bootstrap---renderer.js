702f2c2b5681912e8d8579d3b03e3de6
var Renderer=__class__,Renderer=Renderer(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(){this._views=[]};this.add=function(a){this._views.push(a);this.render()};this.setOpts=function(a,b,c,d){this._delegate=a;this._ctx=b;this.width=c;this.height=d;a=b.canvas;a.width=this.width;a.height=this.height};this.render=function(){var a=this._ctx;if(a){var b=a.canvas;a.clearRect(0,0,b.width,b.height);a.save();for(var b=0,c;c=this._views[b];++b)c.render(a);this._delegate("onRender",
a);a.restore()}}});exports=new Renderer;

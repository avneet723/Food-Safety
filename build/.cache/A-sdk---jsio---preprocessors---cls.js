bfe52fb9c981bd6b6c172c3d76c47c1b
var classExport=/^(.*?)exports[ \t]*=[ \t]*Class\(/gm,class2Export=/^(.*?[ \t]+)?([a-zA-Z0-9\.$]+)[ \t]*=[ \t]*Class\(/gm;function replacer(c,b,a){return a+"=__class__;"+(b||"")+a+"="+a+"(function "+a.replace(/[\.]/g,"_")+"(){return this.init&&this.init.apply(this,arguments)},"}
exports=function(c,b){var a=b.path.replace(/(^[.\/]+|\.([^.]+?)$)/g,"").replace(/[\:\\\/\-\.]/g,"_");b.src=b.src.replace(classExport,"var "+a+"=__class__;$1exports="+a+"(function "+a+"(){return this.init&&this.init.apply(this,arguments)},").replace(class2Export,replacer)};

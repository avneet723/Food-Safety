bb554c3674ccbda78ab5ecd4098d2ba4
var importExpr=/^(\s*)(import\s+[^=+*"'\r\n;\/]+|from\s+[^=+"'\r\n;\/]+)(;|\/|$)/gm;function replace(b,a,c,d){return!/\/\//.test(a)?a+'jsio("'+c+'")'+d:b}exports=function(b,a){a.src=a.src.replace(importExpr,replace)};

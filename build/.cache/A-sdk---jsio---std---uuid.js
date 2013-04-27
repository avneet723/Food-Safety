bc80291fb917d8517db4e53fd9eba3ac
var CHARS="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");exports.uuid=function(f,c){var d=CHARS,a=[],g=Math.random,c=c||d.length;if(f)for(var b=0;b<f;b++)a[b]=d[0|g()*c];else{var e;a[8]=a[13]=a[18]=a[23]="-";a[14]="4";for(b=0;36>b;b++)a[b]||(e=0|16*g(),a[b]=d[19==b?e&3|8:e&15])}return a.join("")};

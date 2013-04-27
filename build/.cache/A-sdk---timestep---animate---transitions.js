004ea9ac0ccacf32f95dd213777d31b1
exports.linear=function(a){return a};exports.easeIn=function(a){return a*a};exports.easeInOut=function(a){return 1>(a*=2)?0.5*a*a*a:0.5*((a-=2)*a*a+2)};exports.easeOut=function(a){return a*(2-a)};

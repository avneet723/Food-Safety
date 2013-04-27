f1c8e58a659cd9f7fa3b14a53f28c79f
var LEN=8,MAX=99999999,MIN=-99999999,PAD="00000000";exports.initialValue=PAD;exports.pad=function(a){a=~~a;a<MIN&&(a=MIN);a>MAX&&(a=MAX);return 0>a?(a*=-1,"-"+PAD.substring(0,LEN-(""+a).length)+a):PAD.substring(0,LEN-(""+a).length)+a};

59d6c6373cf176b5f339f62635b6e246
var sdk_timestep_platforms_browser_InputPrompt=__class__;
exports=sdk_timestep_platforms_browser_InputPrompt(function(){return this.init&&this.init.apply(this,arguments)},function(){var b={onChange:function(){},title:"",message:"",value:"",prompt:""};this.init=function(a){a=merge(a,b);this.onChange=a.onChange;this._value=a.value;this._message=a.title||a.message||a.prompt};this.show=function(){var a=window.prompt(this._message,this._value);null!==a&&(this._value=a);this.onChange(a)};this.getValue=function(){return this._value};this.setValue=function(a){this._value=
a};this.setMessage=function(a){this._message=a}});

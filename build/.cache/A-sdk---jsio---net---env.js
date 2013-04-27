4ca529baf7e4d87635f53a65d3deb134
function getObj(c,a,b){try{jsio("from .env."+(b||jsio.__env.name)+"."+a+" import "+c+" as result")}catch(d){throw logger.error("Invalid transport (",a,") or environment (",b,")");}return result}exports.getListener=bind(this,getObj,"Listener");exports.getConnector=bind(this,getObj,"Connector");

(function($, jsaInject){
	
	function log(level, message){};
	
	function debug(message) {};
	
	function info(message) {};
	
	function warn(message) {};
	
	function error(message) {};
	
	log.debug = debug;
	log.info = info;
	log.warn = warn;
	log.error = error;
	
	jsaInject.log = log;

})(jQuery, jQuery.jsaInject);

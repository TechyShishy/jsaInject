(function($){
	var jsaInject = {};
	jsaInject['filter'] = {};
	jsaInject['filter']['white'] = {};
	jsaInject['filter']['black'] = {};

	function doFilter(filter, dirty) {
		var clean = "";
		if (typeof(filter) !== "function")
		{
			jsaInject.log.debug("Filter passed was not a function.");
			return "";
		}
		else if (typeof(dirty) === "number")
		{
			jsaInject.log.debug("Dirty was Number. Returning dirty");
			clean = dirty;
			return clean;
		}
		else if (typeof(dirty) === "boolean")
		{
			jsaInject.log.debug("Dirty was Boolean. Returning dirty");   
			clean = dirty;
			return clean;
		}
		else if (typeof(dirty) === "undefined")
		{
			jsaInject.log.debug("Dirty was undefined.  Returning empty string.");
			clean = "";
			return clean;
		}
		else if (dirty === null)
		{
			jsaInject.log.debug("Dirty was null.  Returning empty string");
			clean = "";
			return clean;
		}

		clean = filter(dirty);
		if(clean !== dirty)
                        jsaInject.log.info("String \"%s\" is dirty, cleaned to \"%s\" ", dirty, clean);

		return clean;
	}

	jsaInject['doFilter'] = doFilter;

	$['jsaInject'] = jsaInject;
})(jQuery);

(function($, jsaInject){
	/**
	 * Verifies a given string is a numeric.
	 * NOTE: This includes ".", "-", and ",". ( Regex of allowed characters is /[0-9.,-]/ )
	 * To verify that something is an int, use {@link filter.white.int}.
	 * To verify that something is actually a number, use {@link filter.white.int}.
	 * To verify that something only contains numerals, use {@link filter.white.numeral}.
	 * @memberOf jsaInject.filter.white
	 * @param dirty String Potentially dirty string to be passed in and verified as numeric.
	 * @return String A string containing the cleaned input.
	 */
	function numeric(dirty) {
		return dirty.replace(/[^0-9.,-]/g, "");
	}
	
	jsaInject['filter']['white']['numeric'] = numeric;
})(jQuery, jQuery.jsaInject);

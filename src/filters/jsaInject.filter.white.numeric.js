(function($, jsaInject){
	/**
	 * Verifies a given string contains only numerics.
	 * NOTE: This includes ".", "-", and ",". ( Regex of allowed characters is /[0-9.,-]/ )
	 * If you want to verify that something is an int, use {@link filter.white.int}.
	 * To verify that something only contains numerals, use {@link filter.white.numeral}.
	 * @memberOf jsaInject.filter.white
	 * @param dirty String Potentially dirty string to be passed in and verified as numeric.
	 */
	function numeric(dirty) {
		return dirty.replace(/[^0-9.,-]/, "");
	}

	jsaInject.filter.white.numeric = numeric;
})(jQuery, jQuery.jsaInject);

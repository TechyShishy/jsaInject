(function($, jsaInject){
	/**
	 * Verifies a given string contains only numerals.
	 * NOTE: This is usually not what you want. ( Regex of allowed characters is /[0-9]/ )
	 * To verify that something is an int, use {@link filter.white.int}.
	 * To verify that something is a numeric, use {@link filter.white.numeric}.
	 * To verify that something is actually a number, use {@link filter.white.number}.
	 * @memberOf jsaInject.filter.white
	 * @param dirty String Potentially dirty string to be passed in and verified as numerals.
	 * @return String A string containing the cleaned numerals.
	 */
	function numeral(dirty) {
		return dirty.replace(/[^0-9]/g, "");
	}
	
	jsaInject.filter.white.numeral = numeral;
})(jQuery, jQuery.jsaInject);

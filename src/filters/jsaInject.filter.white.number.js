(function($, jsaInject){
	/**
	 * Verifies a given string is actually a number.
	 * Underlying implementation uses the javascript Number object.
	 * To verify that something is an int, use {@link filter.white.int}.
	 * To verify that something is numeric, use {@link filter.white.numeric}.
	 * To verify that something only contains numerals, use {@link filter.white.numeral}.
	 * @memberOf jsaInject.filter.white
	 * @param dirty String Potentially dirty string to be passed in and verified as a number.
	 * @return String A string containing the cleaned number, or an empty string if the input could not be converted.
	 */
	function number(dirty) {
		var clean = new Number(dirty);
		if (isNaN(clean))
			return "";
		else
			return clean.toString();
	}
	
	jsaInject['filter']['white']['number'] = number;
})(jQuery, jQuery.jsaInject);

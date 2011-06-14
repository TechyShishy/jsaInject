(function($, jsaInject){
	/**
	 * Verifies a given string is an int.
	 * NOTE: This includes "-", as ints can be negative. ( Regex of allowed characters is /[0-9-]/ )
	 * Internally, it uses parseInt and the Number object.
	 * To verify that something is a numeric, use {@link filter.white.numeric}.
	 * To verify that something is actually a number, use {@link filter.white.number}.
	 * To verify that something only contains numerals, use {@link filter.white.numeral}.
	 * @memberOf jsaInject.filter.white
	 * @name int
	 * @param dirty String Potentially dirty string to be passed in and verified as an int.
	 * @return String A String containing the cleaned int.
	 */
	function intFilter(dirty) {
		var dirtyNum = new Number(dirty)
		clean = parseInt(dirtyNum, 10);
		if (clean === Number.NaN)
			return "";
		else
			return clean.toString();
	}

	jsaInject.filter.white.int = intFilter;
})(jQuery, jQuery.jsaInject);

(function($, jsaInject){
	/**
	 * Verifies a given string is composed solely of letters.
	 * NOTE: This does not include spaces or punctuation. ( Regex of allowed characters is /[a-zA-Z]/ )
	 * To verify that something is letters, spaces and minimal punctuation, use {@link filter.white.idref}.
	 * @memberOf jsaInject.filter.white
	 * @param dirty String Potentially dirty string to be passed in and verified as a sequence of alpha characters.
	 * @return String A string containing the cleaned characters, or an empty string if the input could not be converted.
	 */
	function alpha(dirty) {
		return dirty.replace(/[^a-zA-Z]/g, "");
	}
	
	jsaInject.filter.white.alpha = alpha;
})(jQuery, jQuery.jsaInject);

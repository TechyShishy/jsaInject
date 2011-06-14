(function($, jsaInject){
	/**
	 * Verifies a given string is valid as an id reference for use in xml.
	 * NOTE: This does not allow spaces.
	 * For most intents and purposes this allows [a-zA-Z:_] for the first character and [a-zA-Z:_.-] for all subsquent characters.
	 * To verify that something is only letters, use {@link filter.white.alpha}.
	 * @memberOf jsaInject.filter.white
	 * @param dirty String Potentially dirty string to be passed in and verified as a sequence of alpha characters.
	 * @return String A string containing the cleaned characters, or an empty string if the input could not be converted.
	 */
	function idref(dirty) {
		return dirty.replace(/^[^:A-Za-z_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, "").
			replace(/[^-.:A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/g, "");
	}
	
	jsaInject.filter.white.idref = idref;
})(jQuery, jQuery.jsaInject);
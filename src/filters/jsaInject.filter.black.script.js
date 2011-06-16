(function($, jsaInject){
	/**
	 * Verifies a given string does not contain any <script> tags.
	 * To verify a given string does not contain any of the javascript event handlers, use {@link filter.black.event}
	 * To verify that something is an int, use {@link filter.white.int}.
	 * @memberOf jsaInject.filter.black
	 * @param dirty String Potentially dirty string to be passed in and verified as containing no <script> tags.
	 * @return String A cleaned string.
	 */
	function script(dirty) {
		return $(dirty).not('script').appendTo('<div />').parent().html();
	}
	
	jsaInject['filter']['black']['script'] = script;
})(jQuery, jQuery.jsaInject);

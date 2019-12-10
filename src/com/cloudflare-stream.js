/**
* Cloudflare Stream
* @author Deux Huit Huit
*/
(function ($, undefined) {

	'use strict';

	App.components.exports('cloudflare-stream', function (options) {
		var stream = null;

		var inited = function () {
			return !!stream;
		};

		var init = function (scope) {
			
		};

		return {
			init: init,
			inited: inited
		};
	});

})(jQuery);

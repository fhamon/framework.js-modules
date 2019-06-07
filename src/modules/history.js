/**
* history
* @author Deux Huit Huit
*/
(function ($) {

	'use strict';

	var scope = $('#site');

	var sels = {
		input: '.js-history-input'
	};

	var urls = [];

	var update = function () {
		urls.push(window.location.href);
		scope.find(sels.input).val(urls.join('\n'));
	};

	var onPageEnter = function (key, data) {
		update();
	};

	var onArticleEnter = function (key, data) {
		update();
	};

	var actions = function () {
		return {
			page: {
				enter: onPageEnter
			},
			articleChanger: {
				enter: onArticleEnter
			}
		};
	};

	App.modules.exports('history', {
		actions: actions
	});

})(jQuery);

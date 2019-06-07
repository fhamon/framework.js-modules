/**
* history
* @author Deux Huit Huit
*/
(function ($, undefined) {

	'use strict';

	var scope = $('#site');

	var sels = {
		input: '.js-history-input'
	};

	var urls = [];

	var update = function () {
		urls.push(window.location.href);
		scope.find(sels.input).each(function () {
			var t = $(this);
			var value = urls.join('\n');

			if (t.attr('data-history-unique') === 'true') {
				value = _.uniq(urls).join('\n');
			}

			t.val(value);
		});
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

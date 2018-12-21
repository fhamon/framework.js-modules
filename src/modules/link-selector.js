/**
 * Link selector
 * @author Deux Huit Huit
 */
(function ($) {

	'use strict';

	var scope = $('body');
	var fakeAnchor = $('<a />');

	var update = function () {
		var currentPath = window.location.pathname;
		scope.find('a[href]').each(function () {
			var t = $(this);
			var pathname = '';
			var matches = [];

			fakeAnchor.prop('href', t.attr('href'));
			pathname = fakeAnchor.prop('pathname');
			matches = _.intersection(pathname.split('/'), currentPath.split('/'));

			// Partial match
			App.modules.notify('changeState.update', {
				item: t,
				state: 'link-active',
				action: (!!matches.length && pathname !== currentPath) ? 'on' : 'off'
			});

			// Exact match
			App.modules.notify('changeState.update', {
				item: t,
				state: 'link-active-exact',
				action: pathname === currentPath ? 'on' : 'off'
			});
		});
	};

	var onPageEnter = function (key, data) {
		update();
	};

	var onArticleEnter = function (key, data) {
		update();
	};

	var init = function () {
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

	App.modules.exports('link-selector', {
		init: init,
		actions: actions
	});

})(jQuery);

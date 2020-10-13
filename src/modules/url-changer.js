/**
 * Url Changer
 * @author Deux Huit Huit
 */
((undefined) => {
	'use strict';

	const scope = document.querySelector('#site');

	const sels = {
		links: 'a[href]'
	};

	const init = function () {
		scope.addEventListener(App.device.events.click, (event) => {
			if (!!event.target.matches(sels.links) && !event.ctrlKey) {

				// is ours ?
				if (event.target.origin !== window.location.origin) {
					return;
				}

				// is not in /assets
				if (event.target.pathname.startsWith('/assets')) {
					return;
				}

				// is not download attr
				if (event.target.getAttribute('download') !== null) {
					return;
				}

				// is not target _blank
				if (event.target.getAttribute('target') !== null &&
					event.target.getAttribute('target') !== 'self') {
					return;
				}

				// is not override ajax
				if (event.target.getAttribute('data-ajax') === 'false') {
					return;
				}

				window.history.pushState({}, event.target.textContent, event.target.getAttribute('href'));

				return window.pd(event);
			}
		});
	};

	App.modules.exports('url-changer', {
		init: init
	});

})();

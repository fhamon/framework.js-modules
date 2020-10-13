/**
* ajax
* @author Deux Huit Huit
*/
((undefined) => {

	'use strict';

	const updatePage = (event) => {
		let preventGoto = false;

		App.mediator.notify('url.changed', {event: event}, (key, ret) => {
			preventGoto = ret;
		});

		if (!preventGoto) {
			App.mediator.goto(document.location.href);
		}

		return window.pd(event, true);
	};

	const init = () => {
		window.onpopstate = updatePage;
		window.addEventListener('pushState', updatePage);
	};

	App.modules.exports('ajax', {
		init: init
	});

})();

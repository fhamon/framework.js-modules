/**
 * computeOptions
 * @author Deux Huit Huit
 * 
 * Translate xml attributes into a js object with camelcase key properties
 * 
 * Example:
 * 
 * <div data-mykey-foo-foo="cool" data-my-key-bar="true" data-my-key-baz="10" />
 * 
 * will translate into
 * 
 * {
 *    fooFoo: 'cool',
 *    bar: true,
 *    baz: 10
 * }
 * 
 * Usage:
 * 
 * App.fx.notify('computeOptions', {element: $('div'), key: 'mykey'}, function (index, options) {});
 */
(function ($, undefined) {

	'use strict';

	var computeOptions = function (key, options) {
		var opts = {};
		var dataAttrPattern = new RegExp('^' + options.key);

		opts = _.reduce(options.element.data(), function (memo, value, key) {
			if (dataAttrPattern.test(key)) {
				if (_.isObject(value)) {
					return memo;
				}
				var parsedKey = key.replace(dataAttrPattern, '');
				var validKey = '';
				if (!!parsedKey && !!parsedKey[0]) {
					validKey = parsedKey[0].toLowerCase();
					if (parsedKey.length >= 2) {
						validKey += parsedKey.substr(1);
					}
					memo[validKey] = value;
				}
			}
			return memo;
		}, {});

		return opts;
	};

	App.fx.exports('computeOptions', computeOptions);

})(jQuery);

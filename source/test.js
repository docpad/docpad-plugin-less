'use strict'

module.exports = require('docpad-plugintester')
	// Development
	.test({
		outExpectedPath: `${__dirname}/../test/out-expected-development`,
	})
	// Production
	.test(
		{
			outExpectedPath: `${__dirname}/../test/out-expected-production`,
		},
		{
			env: 'production',
		}
	)

// @ts-nocheck
'use strict'

module.exports = require('docpad-plugintester')
	// Development
	.test({
		testerName: 'less plugin: development',
		outExpectedPath: `${__dirname}/../test/out-expected-development`,
	})
	// Production
	.test(
		{
			testerName: 'less plugin: production',
			outExpectedPath: `${__dirname}/../test/out-expected-production`,
		},
		{
			env: 'production',
		}
	)

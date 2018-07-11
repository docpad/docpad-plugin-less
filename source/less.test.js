'use strict'

require('docpad').require('testers')
	// Development
	.test({
		pluginPath: `${__dirname}/..`,
		testerClass: 'RendererTester',
		outExpectedPath: `${__dirname}/../test/out-expected-development`
	})
	// Production
	.test({
		pluginPath: `${__dirname}/..`,
		testerClass: 'RendererTester',
		outExpectedPath: `${__dirname}/../test/out-expected-production`
	}, {
		env: 'production'
	})

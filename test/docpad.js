'use strict'

// disable source maps for tests as source map results are specific to the particular environments/
// so balupton's sourcemap on his machine will be different to travis's source map
// which will cause the test to fail
module.exports = {
	environments: {
		development: {
			plugins: {
				less: {
					lessOptions: {
						sourceMap: false,
					},
				},
			},
		},
	},
}

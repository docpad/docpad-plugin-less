'use strict'

// Export Plugin
module.exports = function (BasePlugin) {
	// Define Plugin
	return class LessPlugin extends BasePlugin {
		// Plugin name
		get name () {
			return 'less'
		}

		// Plugin initial config
		get initialConfig () {
			return {
				referencesOthers: true,
				lessOptions: {
					compress: true,
					sourceMap: false
				},
				environments: {
					development: {
						lessOptions: {
							compress: false,
							sourceMap: {
								sourceMapFileInline: true
							}
						}
					}
				}
			}
		}

		// Render the extensions [css].less with less
		render (opts, next) {
			const { inExtension, outExtension, file } = opts

			// Check extensions
			if (inExtension === 'less' && ['css', null].indexOf(outExtension) !== -1) {
				// Load the dependencies into memory now that we know we need them
				const less = require('less')
				const extendr = require('extendr')

				// Prepare our parser options to send to less by merging what we want with what the user has provided
				// http://lesscss.org/#using-less-configuration
				const lessOptions = extendr.extend({
					paths: [file.get('fullDirPath')],
					filename: file.get('fullPath')
				}, this.config.lessOptions || {})

				// If the less file references something else
				// then note that it references others
				// so that if something changes, this will also rerender
				// this is needed because less concats imports into one file
				if (this.config.referencesOthers !== false && opts.content.indexOf('@import') !== -1) {
					file.setMetaDefaults({ referenceOthers: true })
				}

				// now render the content with less css
				// http://lesscss.org/#using-less-usage-in-code
				less.render(opts.content, lessOptions, function (err, data) {
					if (err) return next(err)
					opts.content = data.css
					next()
				})
			}
			else {
				next()
			}
		}
	}

}

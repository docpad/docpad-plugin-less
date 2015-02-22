# Export Plugin
module.exports = (BasePlugin) ->
	# Define Plugin
	class LessPlugin extends BasePlugin
		# Plugin name
		name: 'less'

		# Plugin config
		config:
			compress: true
			parseOptions: null
			compileOptions: null
			environments:
				development:
					compress: false

		# Render some content
		render: (opts,next) ->
			# Prepare
			config = @getConfig()
			{inExtension,outExtension,file} = opts

			# Check extensions
			if inExtension is 'less' and outExtension in ['css',null]
				# Requires
				less = require('less')

				# Prepare
				parseOptions =
					paths: [file.get('fullDirPath')]
					filename: file.get('fullPath')

				# Extend Parser Options
				parseOptions[key] = value  for own key,value of config.parseOptions  if config.parseOptions

				# Add Reference Others if this document does
				# As lesscss concats imports
				file.setMetaDefaults('referencesOthers': true)  if opts.content.indexOf('@import') isnt -1

				# Parse
				less.render opts.content, parseOptions, (err, output) ->
					if err
						return next(err)
					opts.content = output.css

					# Done
					return next()

			# Some other extension
			else
				# Nothing to do, return back to DocPad
				return next()

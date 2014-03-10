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

				# Parse
				new (less.Parser)(parseOptions).parse opts.content, (err,tree) ->
					# Check
					if err
						err = new Error(less.formatError(err, parseOptions))
						return next(err)

					# Prepare
					compileOptions =
						compress: config.compress

					# Extend Compile Options
					compileOptions[key] = value  for own key,value of config.compileOptions  if config.compileOptions

					# Compile
					opts.content = tree.toCSS(compileOptions)

					# Done
					return next()

			# Some other extension
			else
				# Nothing to do, return back to DocPad
				return next()

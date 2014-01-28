# History

- v2.4.1 January 28, 2014
	- We now default `referencesOthers` to true if the less file imports other files

- v2.4.0 January 3, 2014
	- Updated dependencies

- v2.3.1 December 31, 2013
	- Removed support for `cssmin` plugin, cssmin plugin now works differently
		- Thanks to [Rob Loach](https://github.com/RobLoach) for [pull request #7](https://github.com/docpad/docpad-plugin-less/pull/7)

- v2.3.0 December 12, 2013
	- Added support for `cssmin` plugin
		- Thanks to [Rob Loach](https://github.com/RobLoach) for [pull request #6](https://github.com/docpad/docpad-plugin-less/pull/6)
	- Repackaged
	- Updated dependencies

- v2.2.0 July 28, 2013
	- Updated dependencies

- v2.1.3 March 7, 2013
	- Repackaged
	- Updated dependencies

- v2.1.2 December 5, 2012
	- Better error reporting
	- We now parse less files with the `filename` option set to the file's `fullPath` (before we didn't send this at all)
	- Added `parseOptions` and `compileOptions` to configuration

- v2.1.1 August 10, 2012
	- Re-added markdown files to npm distribution as they are required for the npm website

- v2.1.0 July 18, 2012
	- Added `compress` option

- v2.0.1 July 8, 2012
	- Added support for null extensions

- v1.0.1 April 19, 2012
	- Fixed filename option when using DocPad v5

- v1.0.0 April 14, 2012
	- Updated for DocPad v5.0
	- Updated for LessCSS v1.3.x
# History

## v2.5.1 2017 April 4
- Fixed issue with not properly handled callback
  - Thanks to [Ángel González](https://github.com/Aglezabad) for [issue #18](https://github.com/docpad/docpad-plugin-less/issues/18) and [Sebastian Domagała](https://github.com/sdomagala) for [pull request #19](https://github.com/docpad/docpad-plugin-less/pull/19)

## v2.5.0 2017 March 29
- Upgraded Less CSS from v1.6 to v2.6, which keeps the same syntax
  - Thanks to [RobLoach](https://github.com/RobLoach) for the initial work on this with [pull request #15](https://github.com/docpad/docpad-plugin-less/pull/15)
- The plugin options `parseOptions` and `compileOptions` and `compile` have been replaced by a new option called `lessOptions`
- You can now disable the `referencesOthers` option if it bothers you
  - Thanks to [RobLoach](https://github.com/RobLoach) for [issue #12](https://github.com/docpad/docpad-plugin-less/pull/12)
- Added source maps for development environment
  - Thanks to [Dimitar Kolev-Dick](https://github.com/dimitarkolev) and [Paul Radzkov](https://github.com/paulradzkov) for [issue #10](https://github.com/docpad/docpad-plugin-less/issues/10)
- Updated to the latest bevry standards and converted from CoffeeScript to ESNext
  - Thanks to [Sebastian Domagała](https://github.com/sdomagala) for his initial effort on this and helping me debug

## v2.4.1 2014 January 28
- We now default `referencesOthers` to true if the less file imports other files

## v2.4.0 2014 January 3
- Updated dependencies

## v2.3.1 2013 December 31
- Removed support for `cssmin` plugin, cssmin plugin now works differently
  - Thanks to [Rob Loach](https://github.com/RobLoach) for [pull request #7](https://github.com/docpad/docpad-plugin-less/pull/7)

## v2.3.0 2013 December 12
- Added support for `cssmin` plugin
  - Thanks to [Rob Loach](https://github.com/RobLoach) for [pull request #6](https://github.com/docpad/docpad-plugin-less/pull/6)
- Repackaged
- Updated dependencies

## v2.2.0 July 2013 28
- Updated dependencies

## v2.1.3 2013 March 7
- Repackaged
- Updated dependencies

## v2.1.2 2012 December 5
- Better error reporting
- We now parse less files with the `filename` option set to the file's `fullPath` (before we didn't send this at all)
- Added `parseOptions` and `compileOptions` to configuration

## v2.1.1 2012 August 10
- Re-added markdown files to npm distribution as they are required for the npm website

## v2.1.0 July 2012 18
- Added `compress` option

## v2.0.1 2012 July 8
- Added support for null extensions

## v1.0.1 2012 April 19
- Fixed filename option when using DocPad v5

## v1.0.0 2012 April 14
- Updated for DocPad v5.0
- Updated for LessCSS v1.3.x

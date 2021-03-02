## [v2.0.0] - 2020-03-27
* Updated `parcel-bundler` from `1.12.3` to `1.12.4`
* Updated `javascript-obfuscator` from `0.18.1` to `0.27.2`
* Moved processing from `JSAsset` level up to `JSPackager`
  * Use `this.options.minify` to identify production mode

# parcel-plugin-obfuscate ![npm](https://img.shields.io/npm/v/parcel-plugin-obfuscate) ![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/jabuco/parcel-plugin-obfuscate?style=plastic)

This plugin allows you to obfuscate entry javascript files using [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator).

## Getting Started

To get started using your favourite package manager.

### Install using yarn

> yarn add -D parcel-plugin-obfuscate

### Install using npm

> npm install -D parcel-plugin-obfuscate

### Run parcel in production mode to obfuscate code

#### Using Yarn

> yarn cross-env NODE_ENV=production parcel build ./index.js

#### Using npm

> npx cross-env NODE_ENV=production parcel build ./index.js

This runs cross-env which sets NODE_ENV to `production` which enables this plugin in parcel and later obfuscates the compiled code.

## Example

from this:

```
// original
class Something {
    constructor(){
        this.type = "js";
    }
}
```

to this:

```
// obfuscated
var _0x53ed=['type'];(function(_0x5de549,_0xe388a2){var _0x3bfb0e=function(_0x284f19){while(--_0x284f19){_0x5de549['push'](_0x5de549['shift']());}};_0x3bfb0e(++_0xe388a2);}(_0x53ed,0x13f));var _0x168c=function(_0x3efb93,_0x362405){_0x3efb93=_0x3efb93-0x0;var _0x4682eb=_0x53ed[_0x3efb93];return _0x4682eb;};class Something{constructor(){this[_0x168c('0x0')]='js';}}
```

## Tests

This plugin has basic test to ensure that everything works as expected. You can find these tests under `test` or run them using the `test` script.

### test using yarn

> yarn test

### test using npm

> npm run test

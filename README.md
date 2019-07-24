# parcel-plugin-obfuscate [![npm version](https://badge.fury.io/js/parcel-plugin-obfuscate.svg)](https://npmjs.com/package/parcel-plugin-obfuscate) [![npm dependencies](https://david-dm.org/jabuco/parcel-plugin-obfuscate.svg)](https://github.com/jabuco/parcel-plugin-obfuscate.git)

This plugin allows you to obfuscate entry javascript files using [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator).

## Getting Started

To get started using your favourite package manager.

### install using yarn

> yarn add -D parcel-plugin-obfuscate

### install using npm

> npm install -D parcel-plugin-obfuscate

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

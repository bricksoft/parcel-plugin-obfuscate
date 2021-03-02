const JSPackager = require("parcel-bundler/src/packagers/JSPackager");
const Obfuscator = require("javascript-obfuscator");

class ObfuscatePackager extends JSPackager {
  async addAsset(asset) {
    // On production only
    if (this.options.minify) {
      asset.generated.js = await Obfuscator.obfuscate(
        asset.generated.js
      ).getObfuscatedCode();
    }
    return await super.addAsset(asset);
  }
}

module.exports = ObfuscatePackager;

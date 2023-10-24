const JSPackager = require("parcel-bundler/src/packagers/JSPackager");
const Obfuscator = require("javascript-obfuscator");
const fs = require('fs');

class ObfuscatePackager extends JSPackager {
  async addAsset(asset) {
    // On production only
    if (this.options.minify) {
      const configPath = __dirname.substring(0, __dirname.lastIndexOf('node_modules')) + 'obfuscator.config.js';
      let config = {};

      if (fs.existsSync(configPath)) {
        let fileText = fs.readFileSync(configPath);
        config = JSON.parse(fileText);
      }

      asset.generated.js = await Obfuscator.obfuscate(
        asset.generated.js, config
      ).getObfuscatedCode();
    }
    return await super.addAsset(asset);
  }
}

module.exports = ObfuscatePackager;

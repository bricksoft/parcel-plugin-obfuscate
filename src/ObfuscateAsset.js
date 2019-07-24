const { Asset } = require("parcel-bundler");
const Obfuscator = require("javascript-obfuscator");

class ObfuscateAsset extends Asset {
  async transform(v) {
    const isProd = process.env.NODE_ENV === "production";
    const options = {
      debugProtection: isProd,
      debugProtectionInterval: isProd,
      log: false,
      sourceMap: !isProd,
      sourceMapMode: "separate",
      target: this.options.target
    };
    const compiled = Obfuscator.obfuscate(
      v || this.contents.toString(),
      options
    );
    return {
      value: compiled.getObfuscatedCode(),
      map: compiled.getSourceMap()
    };
  }
  async generate() {
    const data = await this.transform();
    const result = [
      {
        type: "js",
        ...data
      }
    ];
    return result;
  }
}
module.exports = ObfuscateAsset;

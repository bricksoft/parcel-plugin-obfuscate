module.exports = bundler => {
  bundler.addPackager("js", require.resolve("./ObfuscateAsset"));
};

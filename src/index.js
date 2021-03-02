module.exports = (bundler) => {
  bundler.addPackager("js", require.resolve("./ObfuscatePackager"));
  return bundler;
};

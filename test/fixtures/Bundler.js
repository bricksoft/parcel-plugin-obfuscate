const assert = require("assert");
const assertBundleTree = require("parcel-assert-bundle-tree");
const Bundler = require("parcel-bundler");
const { join } = require("path");
const ObfuscatePlugin = require("../..");
const { BUNDLER_OPTIONS } = require("./Constants");

async function createBundler(testDir, _entries, _options) {
  const entries = [].concat(_entries);
  const entryPaths = entries.map((entry) => join(testDir, entry));
  const outDir = join(testDir, "dist");
  const options = {
    ...BUNDLER_OPTIONS,
    outDir,
    ...(_options || {}),
  };

  // Init bundler
  const bundler = new Bundler(entryPaths, options);

  // Registers the plugins asset types
  await ObfuscatePlugin(bundler);

  return bundler;
}

async function getBundle(testDir, options = {}) {
  const entries = options.entry || options.entries || "index.js";
  const bundlerOptions = options.options;
  const bundler = await createBundler(testDir, entries, bundlerOptions);
  const bundle = await bundler.bundle();

  return bundle;
}

const assertIgnoreNewLine = (actual, expected, message) =>
  assert.strictEqual(
    actual.replace(/\n/gm, ""),
    expected.replace(/\n/gm, ""),
    message
  );

module.exports = {
  assertBundleTree,
  assertIgnoreNewLine,
  createBundler,
  getBundle,
};

const Bundler = require("parcel-bundler");
const Path = require("path");
const ObfuscatePlugin = require("..");
const assertBundleTree = require("parcel-assert-bundle-tree");
const fs = require("fs");
const assert = require("assert");

const isDevelopment = process.env.NODE_ENV === "development";

const BUNDLER_OPTIONS = {
  autoinstall: false,
  cache: false,
  contentHash: false,
  hmr: false,
  logLevel: isDevelopment ? 4 : 0,
  production: false,
  publicUrl: "./",
  sourceMaps: false,
  target: "node",
  watch: false
};

async function createBundler(testDir, _entries, _options) {
  const entries = [].concat(_entries);
  const entryPaths = entries.map(entry => Path.join(testDir, entry));
  const outDir = Path.join(testDir, "dist");
  const options = {
    ...BUNDLER_OPTIONS,
    outDir,
    ...(_options || {})
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

async function readFile(file) {
  return await new Promise((r, re) => {
    let f = null;
    try {
      f = fs.readFileSync(file);
    } catch (error) {
      re(error);
    }
    r(f);
  });
}

let bundle;

describe("basic", function() {
  it("Should create a bundle instance", async () => {
    // Bundle the code
    bundle = await getBundle(__dirname, {
      entry: "input.js"
    });
  });

  it("Should create a basic bundle", async () => {
    // Compare bundle to expected
    assertBundleTree(bundle, {
      name: "input.js",
      assets: ["input.js"]
    });
  });
  it("Should produce obfuscated different code", async () => {
    const original = (await readFile(require.resolve("./input"))).toString();
    assert.notEqual(original, bundle.entryAsset.generated.js);
  });
});

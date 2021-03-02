const assert = require("assert");
const {
  assertBundleTree,
  assertIgnoreNewLine,
  getBundle,
} = require("./fixtures/Bundler");
const { readFile } = require("fs").promises;

describe("parcel-plugin-obfuscate", function() {
  let bundle;
  beforeEach(async function() {
    this.timeout(50000);
    //
    bundle = await getBundle(__dirname, {
      entry: "assets/input.js",
    });
    return bundle;
  });
  it("Should create a bundle instance", async () => {
    // Bundle the code
    assert("undefined" != typeof bundle, "bundle should be defined");
  });

  it("Should create a basic bundle", async () => {
    // Compare bundle to expected
    assertBundleTree(bundle, {
      name: "input.js",
      assets: ["input.js"],
    });
  });

  it("Should produce obfuscated different code", async () => {
    const original = (
      await readFile(require.resolve("./assets/input"))
    ).toString();
    assert.notStrictEqual(original, bundle.entryAsset.generated.js);
  });

  it("Should do nothing if minify is false", async () => {
    bundle = await getBundle(__dirname, {
      entry: "assets/input.js",
      minify: false,
    });
    const original = (
      await readFile(require.resolve("./assets/input"))
    ).toString();
    assertIgnoreNewLine(original, bundle.entryAsset.generated.js);
  });
});

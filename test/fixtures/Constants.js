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
  watch: false,
};

module.exports = { isDevelopment, BUNDLER_OPTIONS };

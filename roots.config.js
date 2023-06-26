const path = require("path");

module.exports = {
  originDir: path.resolve(__dirname, "src/roots"),
  localizedDir: path.resolve(__dirname, "src/app"),
  locales: ["en", "vi"],
  defaultLocale: "vi",
  prefixDefaultLocale: true, // serves "en" locale on / instead of /en
};

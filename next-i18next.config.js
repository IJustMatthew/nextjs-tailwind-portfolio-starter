const path = require("path")

module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["en", "de"], // Add your locales here
    defaultLocale: "en", // Add default locale
    localeDetection: false // Disable browsers automatic locale detection
  },
  localePath: path.resolve("./public/locales") // Path to your locales
}

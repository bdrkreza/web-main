const CracoLessPlugin = require("craco-less");
const CracoEsbuildPlugin = require("craco-esbuild");
const CracoEslintWebpackPlugin = require("craco-eslint-webpack-plugin");
const cracoAlias = require("craco-alias");

module.exports = {
  style: {
    postcss: {
      plugins: [
        // require("postcss-import"),
        require("tailwindcss"),
        require("autoprefixer")
      ]
    }
  },
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: "./src",
        source: "jsconfig",
      },
    },
    { plugin: CracoEsbuildPlugin },
    { plugin: CracoLessPlugin },
    {
      plugin: CracoEslintWebpackPlugin,
      options: {
        // See the options description below
        skipPreflightCheck: true,
        eslintOptions: {
          files: "src/**/*.{js,jsx,ts,tsx}",
          lintDirtyModulesOnly: true,
          // ...
        },
      },
    },
  ],
};
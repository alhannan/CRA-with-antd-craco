const CracoLessPlugin = require("craco-less");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          additionalData: '@import "theme.less";',

          lessOptions: {
            paths: [path.resolve(__dirname, "src")],
            modifyVars: { "@primary-color": "#FE1251, @color-check: red" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

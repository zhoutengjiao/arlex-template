const path = require("path");
module.exports = {
  /** spa,  node-webkit*/
  app: "spa",

  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
    extensions: [".js", ".vue", ".css"],
  },

  // 使用项目自定义 browserslist 配置请注释
  // browserslist: 'chrome > 80',

  /** 输出文件名称是否包含hash值 */
  hash: true,

  eslint: {},

  /** 开发环境下的devtool   生产环境不使用 */
  devtool: "cheap-module-eval-source-map",

  devServer: {
    port: "3000",
    host: "localhost",
  },
};

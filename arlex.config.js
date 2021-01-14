/**
 * 面向用户的配置选项
 */
const path = require("path");
module.exports = {
  /**
   * 项目类型  spa, lib, node-webkit, electron-renderer
   */
  app: "spa",

  /**
   * 入口配置，参考webpack entry配置
   */
  entry: undefined,

  /**
   * 输出配置，参考webpack output配置
   */
  output: undefined,

  /**
   * HTML模板根路径
   */
  htmlRoot: "src",

  /**
   * webpack 解析配置
   */
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
    extensions: [".js", ".vue", ".css"],
  },

  /**
   * 额外的编译路径，项目默认仅编译src目录。
   * 在这里以文件后缀为key，添加规则包括的路径。
   * 目前支持 (css、js、less、scss、img、font) 如：
   * {
   *  css: 'path'
   *  less: [
   *    'path1',
   *    'path2'
   *  ]}
   * }
   */
  includes: {},

  /**
   * 兼容浏览器版本
   * 使用项目自定义browserslist配置 请注释该选项
   */
  // browserslist: 'chrome > 80',

  /** 输出文件名称是否包含hash值 */
  hash: true,

  /**
   * 扩展eslint
   */
  eslint: {},

  /**
   * 扩展stylelint
   */
  stylelint: {},

  /**
   * 开发环境下的devtool   生产环境不使用
   */
  // devtool: "cheap-module-eval-source-map",

  /**
   * webpack-dev-server配置
   */
  devServer: {
    stats: "errors-only",
    port: "3000",
    host: "localhost",
  },
};

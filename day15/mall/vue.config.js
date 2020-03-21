
module.exports = {
  publicPath: './',
  // outputDir:"dist",
  // assetsDir: 'public',
  configureWebpack: {
    resolve: {
      // extensitons: [],
      alias: {
        "components": '@/components',
        "content": 'components/content',
        "common": 'components/common',
        "assets": '@/assets',
        "network": '@/network',
        "views": '@/views',
      }
    },
    devServer: {
      disableHostCheck: true
    },
  }
}
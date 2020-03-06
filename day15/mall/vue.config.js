
module.exports = {
  configureWebpack: {
    resolve: {
      // extensitons: [],
      alias: {
        "components": '@/components',
        "content": 'components/content',
        "assets": '@/assets',
        "network": '@/network',
        "views": '@/views',
      }
    }
  }
}
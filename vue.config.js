module.exports = {
  devServer: {
    // 设置代理
    proxy: {
      '/app': {
        target: 'http://www.masochism.top:2333', // 访问数据的计算机域名
        changeOrigin: true,
        pathRewrite: { '^/app': '' }
      }
    }
  }
}

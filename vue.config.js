module.exports = {
  publicPath: './bai-an-ju',
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    proxy: {
      '/deyi': {
        // target: 'http://10.131.10.55:9903',
        target: 'http://192.168.6.115:9903'
        // target: 'http://192.168.180.74:8080',
        // pathRewrite: {
        //   '^/api': '/'
        // }
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 16, //换算基数，
            unitPrecision: 3, //允许REM单位增长到的十进制数字,小数点后保留的位数。
            propList: ['*'],
            exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            selectorBlackList: ['.van'], //要忽略并保留为px的选择器，本项目我是用的vant ui框架，所以忽略他
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 1 //设置要替换的最小像素值
          })
        ]
      }
      // // 给 sass-loader 传递选项
      // sass: {
      //   // @/ 是 src/ 的别名
      //   // 所以这里假设你有 `src/variables.sass` 这个文件
      //   // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      //   additionalData: `@import "@/assets/css/variables.sass"`
      // },
    }
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = '金晋集团'
      return args
    })
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          oneOf: [
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
            },
            {
              use: ['raw-loader', 'pug-plain-loader']
            }
          ]
        },
      ]
    }
  },
  // Подключение общих стилей для всех компонентов:
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`
      }
    }
  }
}
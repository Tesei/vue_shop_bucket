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

        // {
        //   test: /\.tsx?$/,
        //   loader: 'ts-loader',
        //   options: {
        //     appendTsSuffixTo: [/\.vue$/],
        //   },
        //   exclude: /node_modules/,
        // },
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        // }
      ]
    }
  }
}
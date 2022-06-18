const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  outputDir: "../.././client_packages/cef",

  publicPath: './',

  pluginOptions: {
    vueI18n: {
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      fullInstall: true
    }
  },

  configureWebpack: {
    devServer: {
      historyApiFallback: true
    }
  }
})

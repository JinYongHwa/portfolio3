const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"/portfolio3",
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false
})

// vue.config.js
const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');




const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    // INJECT_POSITION
    routes: [
  "/",
  "/blog",
  "/about"
],
    /*renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: '#app'
    }),*/
  }),
];

module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  },
};
  /*configureWebpack: {
    devtool: 'source-map'
  }*/

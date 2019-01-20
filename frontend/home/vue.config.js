// vue.config.js
const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');




const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    
    routes: [
  "/",
  "/blog",
  "/about",
  //__INJECTION_START__
  "/Blog/5bed2b4693f3cd542cda23ab"
//__INJECTION_END__
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

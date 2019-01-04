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
  "/DBBlog/5bed2b4693f3cd542cda23ab","/DBBlog/5bee1ad493f3cd542cda23ad","/DBBlog/5befcfe193f3cd542cda23af","/DBBlog/5c008260bd374723094ae464","/DBBlog/5c2efc876f72d328096a99ba"
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

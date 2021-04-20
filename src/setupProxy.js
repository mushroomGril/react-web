const { createProxyMiddleware }  = require('http-proxy-middleware');
module.exports = function(app){
  //console.log(app)
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://www.checkcode.com:8088/index.php',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}

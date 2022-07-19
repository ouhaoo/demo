/**
 * @name React使用http-proxy-middleware解决多跨域问题
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

const config = {
  '/gtd/**': {
    name: 'chl业务接口',
    changeOrigin: true,
    target: 'https://testchl.busi.inkept.cn/',
    // target: 'https://betachl.busi.inkept.cn/',
  },
  '/api/upload/**': {
    name: '文件上传',
    changeOrigin: true,
    target: 'https://upload.inkept.cn/',
  },
}

module.exports = function (app) {
  Object.keys(config).forEach(api => {
    app.use(
      api,
      createProxyMiddleware(config[api]),
    )
  })
}

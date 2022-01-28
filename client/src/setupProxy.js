const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
			'/api',
			createProxyMiddleware({
				target: 'https://text-chat-clone.herokuapp.com/',
				changeOrigin: true,
			})
		);
};
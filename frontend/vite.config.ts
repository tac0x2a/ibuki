/**
 * @type {import('vite').UserConfig}
 */
const config: import('vite').UserConfig = {
  assetsDir: 'statics',

  proxy: {
    '/api': {
      target: 'http://' + process.env.API_HOST + ':' + process.env.API_PORT,
      rewrite: (path) => path.replace(/^\/api/, '/'),
      changeOrigin: true,
      secure: false,
      ws: true,
    },
  }
};

export default config;

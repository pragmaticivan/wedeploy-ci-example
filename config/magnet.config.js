module.exports = {
  magnet: {
    port: 80,
    src: [
      'src/routes/*/secure-routes.js',
      'src/**/*.js',
      'not-found.js',
    ],
  },
};

module.exports = {
  magnet: {
    port: 3099,
    src: [
      'src/routes/*/secure-routes.js',
      'src/**/*.js',
      'not-found.js',
    ],
  },
  apiServiceUrl: 'localhost:3099',
};

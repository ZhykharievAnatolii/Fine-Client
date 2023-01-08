module.exports = ({ mode }) => ({
  plugins: [
    require('autoprefixer'),
    ...(mode !== 'development' ? [require('cssnano')] : []),
  ],
});

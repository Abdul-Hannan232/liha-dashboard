module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
};

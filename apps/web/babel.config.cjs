module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        targets: { browsers: ['last 2 versions'] },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
}

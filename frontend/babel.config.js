module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
  ],
};

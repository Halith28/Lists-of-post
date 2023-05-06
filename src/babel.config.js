module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      ['@babel/preset-env', { targets: { node: '12.0' } }],
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV !== 'build',
        },
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-optional-chaining',
    ],
    env: {
      build: {
        ignore: ['**/*.story.tsx', '__snapshots__', '__tests__', '__stories__'],
      },
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    ignore: ['node_modules'],
  };
};

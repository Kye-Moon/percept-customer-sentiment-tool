/** @returns {import('webpack').Configuration} Webpack Configuration */

const configDir = __dirname

module.exports = (config, { mode }) => {
  if (mode === 'development') {
    // Add dev plugin
  }
  config.module.rules[0].oneOf[5] = {
    test: /\.css$/,
    sideEffects: true,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: configDir,
          },
        },
      },
    ],
  }

  // Add custom rules for your project
  // config.module.rules.push(YOUR_RULE)

  // Add custom plugins for your project
  // config.plugins.push(YOUR_PLUGIN)

  return config
}

const configFactory = require('../config/webpack.config')

module.exports = async ({config, mode}) => {
  const magicWallWebpackConfig = configFactory(mode.toLowerCase())
  return { ...config, module: { ...config.module, rules: magicWallWebpackConfig.module.rules } };
  // return config
};

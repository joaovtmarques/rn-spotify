module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: ['RAPIDAPI_KEY', 'SPOTIFYSCRAPPER_HOST', 'BASE_URL'],
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};

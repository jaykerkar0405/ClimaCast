module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["react-native-reanimated/plugin"],
      [
        "module:react-native-dotenv",
        {
          safe: false,
          path: ".env",
          blacklist: null,
          whitelist: null,
          moduleName: "@env",
          allowUndefined: false,
        },
      ],
    ],
  };
};

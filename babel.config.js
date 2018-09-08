module.exports = function(api) {
  api.cache(true);
  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["styled-components"];

  return {
    presets,
    plugins
  };
};

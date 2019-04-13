module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react", "babel-preset-gatsby"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-transform-imports",
    "@babel/plugin-syntax-dynamic-import",
    [
      "named-params",
      {
        options: true,
        caching: true,
      },
    ],
    // "add-module-exports",
    "styled-components",
  ],
}

module.exports = {
  // An important note is that babelrc does not merge presets or plugins
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
    "@babel/preset-react",
    // "@babel/preset-flow",
  ],
  plugins: [
    // "babel-plugin-emotion", // yarn add emotion react-emotion && yarn add babel-plugin-emotion --dev --exact
    // ["babel-plugin-styled-components", { displayName: true }] // yarn add styled-components && yarn add babel-plugin-emotion --dev --exact
  ],
  env: {
    production: {
      plugins: ["lodash"],
    },
    development: {
      plugins: ["react-hot-loader/babel"],
    },
    test: {
      presets: [
        [
          "@babel/env",
          {
            targets: {
              node: "current",
            },
          },
        ],
        "@babel/preset-react",
        // "@babel/preset-flow",
      ],
      compact: false,
    },
  },
}

module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },
  extends: ['eslint-config-with-prettier', 'eslint-config-gatsby-standard'],
  plugins: ['json'],
  // rules: {
  //   // Uncomment this if related styled components or other css-in-js stuff causes linting errors.
  //   'no-unused-expressions': ['error', {allowTaggedTemplates: true}],
  // },
}

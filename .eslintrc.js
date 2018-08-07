module.exports = {
  extends: [
    'eslint:recommended',
    'standard',
  ],
  env: {
    'browser': true,
  },
  globals: {
    '_': false,
    'Backbone': false,
    'jQuery': false,
    'JSON': false,
    'wp': false,
    'acfrcL10n': false,
  },
  rules: {
    'comma-dangle': [
      'error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never',
      },
    ],
    'no-cond-assign': ['error', 'except-parens'],
  },
}

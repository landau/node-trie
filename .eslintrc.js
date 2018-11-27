module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['prettier', 'typescript'],
  overrides: {
    files: ['src/**/*.ts'],
    parser: 'typescript-eslint-parser',
    rules: {
      'no-dupe-class-members': 'off',
      'no-undef': 'off',
      'import/prefer-default-export': 'off'
    }
  },
  parser: 'typescript-eslint-parser',
  parserOptions: { sourceType: 'module' },
  rules: {
    'prettier/prettier': 'error',
    'typescript/class-name-casing': 'error',
    'typescript/explicit-function-return-type': 'error',
    'typescript/interface-name-prefix': 'error',
    'typescript/member-delimiter-style': ['error', { delimiter: 'semi' }],
    'typescript/no-array-constructor': 'error',
    'typescript/no-empty-interface': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-inferrable-types': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-parameter-properties': 'error',
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-unused-vars': 'error',
    'typescript/no-use-before-define': ['error', { functions: false }],
    'typescript/no-var-requires': 'error',
    'typescript/prefer-namespace-keyword': 'error',
    'typescript/type-annotation-spacing': 'error'
  }
};

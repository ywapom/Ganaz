module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:unicorn/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/unicorn',
  ],
  rules: {
    'import/default': 'off', // doesn't play nice with commonjs modules
    'no-console': 'off',
    'prefer-const': 'error',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          // for classes
          pascalCase: true,
          // for everything else
          kebabCase: true,
        },
      },
    ],
    'unicorn/catch-error-name': 'error',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-includes': 'error',
    'unicorn/expiring-todo-comments': 'warn',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/no-nested-ternary': 'warn',
    'unicorn/regex-shorthand': 'warn',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/better-regex': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-process-exit': 'off', // lots of command line programs here!
    'unicorn/prefer-ternary': 'off',
    'block-scoped-var': 'error', // I think this is mostly handled by no-undef
    'no-eval': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'require-atomic-updates': 'off', // really doesn't work well with Koa ctx
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    // we probably should enable these, as they error on real issues (mostly related to the any type)
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off', // this probably doesn't hide mistakes
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '([iI]gnored|^_.*)',
        argsIgnorePattern: '([iI]gnored|^_.*)',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        'unicorn/no-nested-ternary': 'error',
        'prefer-const': 'error',
      },
    },
    {
      // tests sometimes do things very explicitly, requiring looser lint rules
      files: ['tests/**/*', '*.test.ts', 'test.ts'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off', // sometimes we just need a no-op
        'prefer-const': 'off', // not going to clean up old tests that use let
        'unicorn/no-useless-undefined': 'off', // sometimes more explicit
        'unicorn/no-zero-fractions': 'off', // ditto
        'unicorn/consistent-function-scoping': 'off',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-explicit-any': 'off', // casting to any makes mocking a *lot* easier
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},
      configurable: {
        src: './src/',
      },
    },
  },
};

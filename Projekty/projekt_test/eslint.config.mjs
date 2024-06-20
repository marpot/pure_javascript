// eslint.config.mjs

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const globals = require('globals');

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.mjs"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      // Reguły dotyczące średników
      semi: ['warn', 'always'],
      
      // Reguły dotyczące nazw zmiennych
      camelcase: ['warn', {
        properties: 'always'
      }],
      
      // Dodatkowe reguły dla spójności kodu
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'double'],
    },
  },
];

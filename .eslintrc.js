// .eslintrc.js

module.exports = {
 
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
      'airbnb-base', // Uses the recommended rules from airbnb
      'plugin:@typescript-eslint/recommended',
      "prettier",
      "prettier/@typescript-eslint", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
  },
  settings: {  // If js files are not created in the same directory as ts files. To avoid "Unable to resolve path to module" ESLint error
      "import/resolver": {
        "node": {
          "paths": ["dist"],  // js files directory
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      },
  },
  rules: {
      '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
      '@typescript-eslint/explicit-member-accessibility': ['warn', { overrides: { constructors: 'no-public' } }],
      '@typescript-eslint/no-use-before-define': ['warn', { functions: false }],
      'no-use-before-define': ['warn', { functions: false }],
      'class-methods-use-this': ['off'],
      'no-plusplus': ['off'],
      'no-param-reassign': ['error', { props: false }],
      'no-restricted-syntax': ['warn'],
      'no-await-in-loop': ['warn'],
      'import/prefer-default-export': ['off'],
      'prefer-promise-reject-errors': ['warn', { allowEmptyReject: true }],
      '@typescript-eslint/no-parameter-properties': ['off'],
      'no-empty-function': ['off'],
      '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
      "no-unused-expressions": ['off'],
      "chai-friendly/no-unused-expressions": ['error'],
      "no-return-assign": ['error', 'except-parens'],
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": "interface",
          "format": ["PascalCase"],
          "custom": {
            "regex": "^I[A-Z]",
            "match": false
          }
        }
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "js": "never",
          "jsx": "never",
          "ts": "never",
          "tsx": "never"
        }
     ],
     "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  },
  plugins: ["chai-friendly"]
};
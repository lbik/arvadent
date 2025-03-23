module.exports = {
  extends: ['react-app', 'airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.js']}],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettier from 'eslint-config-prettier/flat';

export default withNuxt(prettier, {
  rules: {
    'import/newline-after-import': ['error', { count: 1, exactCount: true }],
    'vue/require-default-prop': 'off',
  },
});

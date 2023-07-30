const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("autoprefixer"),
    purgecss({
      content: [
        "./src/pages/index.astro",
        "./src/components/key/key.tsx",
        "./src/components/theme-switcher/theme-switcher.tsx",
      ],
      safelist: {
        variables: [
          /^--key-/,
          /^--header-/,
          /^--keys-/,
          /^--screen-/,
          /^--theme-/,
        ],
        greedy: [/data-key/],
      },
      fontFace: false,
      keyframes: true,
      variables: true,
    }),
  ],
};

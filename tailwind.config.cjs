/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  // 保持 "class" 模式，这样我们可以通过 JS 精确控制
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        // 建议加上 Emoji 字体回退，体验更佳
        sans: ["Roboto", ...defaultTheme.fontFamily.sans, "Apple Color Emoji", "Segoe UI Emoji"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-background": "#FFEC22",
        "secondary-background": "#0071BC",
        "text-secondary": "#595959",
      },
      fontFamily: {
        marcellus: ["var(--font-marcellus)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Rubik-Regular", "Roboto", "Sans-serif"],
      serif: [
        "ArchivoCondensed-ExtraBold",
        "Georgia",
        "Times New Roman"
      ],
      mono: ["Orbitron-Regular", "Liberation Mono", "Courier New"],
      button: ["Orbitron-Bold", "Liberation Mono", "Courier New"],
      bold: ["Rubik-Bold", "Roboto", "Sans-serif"],
      subtitle: ["Archivo-ExtraLight", "Georgia", "Times New Roman"],
      msg: ["Satoshi", "Rubik-Regular", "Sans-serif"]
    },
    extend: {
      colors: {
        brand: "#450467",
        rokefelaBlack: "#0E0D0E",
        dimmed: "rgb(var(--color-dimmed) / .5)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};

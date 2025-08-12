module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for better dark/light mode
        background: {
          light: "#ffffff",
          dark: "#000000",
        },
        foreground: {
          light: "#000000",
          dark: "#ffffff",
        },
        card: {
          light: "#f8f9fa",
          dark: "#1a1a1a",
        },
        border: {
          light: "#e5e7eb",
          dark: "#374151",
        },
      },
    },
  },
  plugins: [],
};

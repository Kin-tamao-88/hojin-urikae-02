/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          dark: "#14213A",
          light: "#2A3E63",
        },
        gold: {
          DEFAULT: "#C9A66B",
          light: "#DCC079",
          dark: "#A8842F",
        },
        cream: "#F8F1E5",
        ink: {
          DEFAULT: "#1F2A37",
          light: "#5B6776",
          muted: "#8A93A0",
        },
        cta: {
          DEFAULT: "#B8392B",
          hover: "#9B2F22",
        },
        slate: {
          card: "#8B96A8",
          bg: "#F1F2F5",
        },
        teal: {
          DEFAULT: "#3BB6C9",
        },
        mint: "#EAF6EE",
        skyblue: "#E9F3F6",
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          "system-ui",
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "Meiryo",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1120px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(27, 42, 74, 0.06), 0 8px 24px rgba(27, 42, 74, 0.06)",
        "card-hover":
          "0 2px 6px rgba(27, 42, 74, 0.08), 0 16px 40px rgba(27, 42, 74, 0.10)",
        cta: "0 8px 20px rgba(217, 131, 31, 0.28)",
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f6fb",
          100: "#e6edf7",
          200: "#c9d9f0",
          300: "#9db8e4",
          400: "#6b91d6",
          500: "#3d6fca",
          600: "#2555ad",
          700: "#1d4287",
          800: "#19376c",
          900: "#142c56",
          950: "#0b1a36"
        },
        slatePro: {
          50: "#f7f8fa",
          100: "#eef1f5",
          200: "#d8dee9",
          300: "#b2bdcf",
          400: "#8594af",
          500: "#62718d",
          600: "#4a5870",
          700: "#394359",
          800: "#2b3343",
          900: "#1d2230",
          950: "#0f121a"
        },
        whatsapp: {
          500: "#25D366",
          600: "#1EBE5D"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 50px -30px rgba(10, 22, 50, 0.35)"
      }
    }
  },
  plugins: []
};

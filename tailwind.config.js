/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          dark: '#050507',
          card: '#0a0a0f',
          accent: '#0071e3',
          glow: '#2997ff',
          neon: '#00f0ff',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Segoe UI"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

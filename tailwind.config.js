// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enables dark mode via a CSS class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Adjust based on your directory structure
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1E40AF', // Indigo-800
          DEFAULT: '#1E40AF',
          dark: '#1E3A8A',
        },
        secondary: {
          light: '#9333EA', // Purple-600
          DEFAULT: '#9333EA',
          dark: '#7E22CE',
        },
        accent: {
          light: '#F59E0B', // Amber-500
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  
};



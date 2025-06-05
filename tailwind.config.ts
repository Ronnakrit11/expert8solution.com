import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['var(--font-Poppins)'],
        Josefin: ['var(--font-Josefin)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '1000px': '1000px',
        '1100px': '1100px',
        '1200px': '1200px',
        '1300px': '1300px',
        '1500px': '1500px',
        '800px': '800px',
        '400px': '400px',
      },
      colors: {
        primary: '#2563eb', // Updated to a more vibrant blue
        'primary-dark': '#1d4ed8', // Darker shade for hover states
        secondary: '#8b5cf6', // Updated to a modern purple
        header: '#1f2937',
        lolem: '#4b5563',
        darkbg: '#0f1623',
        accent: '#f97316', // New orange accent color
        success: '#10b981', // New success color
        warning: '#f59e0b', // New warning color
        info: '#3b82f6', // New info color
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
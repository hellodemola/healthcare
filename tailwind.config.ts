import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ivory: '#F9F7F5',
        sandstone: '#DDDAD0',
        primary: '#203136',
        gray: '#8A8987',
      },
      fontFamily: {
        inter: ['interRegular', 'sans-serif'],
        poppinsBold: ['poppinsBold', 'sans-serif'],
        poppins: ['poppinsRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

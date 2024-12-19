/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],  // Set Poppins as the default sans font
        abhaya: ['"Abhaya Libre"', 'serif'], // You can still use Abhaya Libre
      },
    },
  },
  plugins: [
    
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    
  ],
};

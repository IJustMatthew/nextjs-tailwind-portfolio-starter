/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    // If using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // If using `app` directory:
    "./app/**/*.{ts,tsx}"
  ],
  darkMode: ["class"],
  theme: {
    transitionDuration: {
      DEFAULT: "300ms"
    },
    fontFamily: {
      // Inter comse from globals.css -> google fonts import
      inter: ["Inter", "sans-serif"]
    },
    extend: {
      // Colors come from globals.css -> :root variables
      colors: {
        current: "currentColor",
        transparent: "transparent",
        cLight: "var(--light-color)", // #f5f5f5
        cDark: "var(--dark-color)", // #242730
        cOffWhite: "var(--off-white)", // #e8e8e8;
        cDeepDark: "var(--deep-dark)", // #181818;
        cLightGrey: "var(--light-grey)", // #c2c2c2
        primary: "var(--primary-color)", // #009d4b
        primaryLight: "var(--primary-light-color)", // #00c55e
        primaryDark: "var(--primary-dark-color)", // #007a3a
        error: "var(--error-color)", // #c2473e
        success: "var(--success-color)" // #00c55e
      },
      fontSize: {
        // Custom font sizes added to different elements (optional)
        // customTitle: ["12px", "20px"]
      },
      screens: {
        // Custom breakpoint added to extra small devices
        xs: "360px"
      },
      maxWidth: {
        // Custom container width
        "c-1315": "82.188rem",
        "c-1280": "80rem",
        "c-1016": "63.5rem"
      },
      keyframes: {
        line: {
          "0%, 100%": { transform: "translateY(100%)" },
          "50%": { transform: "translateY(0)" }
        }
      },
      animation: {
        line1: "line 3s linear infinite",
        line2: "line 6s linear infinite",
        line3: "line 9s linear infinite"
      }
    },
    container: {
      // Override default container padding
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "12rem"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}

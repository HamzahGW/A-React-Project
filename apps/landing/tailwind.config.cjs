/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "src/views/**/*.tsx",
    "../../packages/ui-components/**/*.tsx",
    "../../packages/ui-pages/**/*.tsx",
    "../../packages/lib/**/*.tsx",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "3xl": "2400px",
        "4xl": "3400px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "arch-orange": "#977334",
        "arch-green": "#004337",
        "arch-yellow": "#FFC868",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          50: "#f6f2ff",
          100: "#eee8ff",
          200: "#dfd4ff",
          300: "#cab1ff",
          400: "#b084ff",
          500: "#9853ff",
          600: "#8521f7",
          700: "#7e1ee3",
          800: "#6918bf",
          900: "#57169c",
          950: "#360b6a",

          foreground: "hsl(var(--primary-foreground))",
        },

        "primary-highlight": {
          DEFAULT: "#0d87d8",
          50: "#f0f8ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7dc8fc",
          400: "#38acf8",
          500: "#0d87d8",
          600: "#0273c7",
          700: "#035ba1",
          800: "#074e85",
          900: "#0c416e",
          950: "#082949",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["El Messiri", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        border: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        border: "border 4s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

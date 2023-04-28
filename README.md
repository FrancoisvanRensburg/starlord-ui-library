# Starlord ui library

Starlord UI Library is a component library built with Tailwind CSS and TypeScript. The library provides a collection of reusable UI components that can be used to create beautiful and functional user interfaces for web applications.

To get you started, let's install the library

## Installation

> npm install starlord-ui-library

or

> yarn add starlord-ui-library

The library is built with Tailwind CSS and TypeScript. To use the library, you need to install Tailwind CSS and its dependencies.

Then add the css file to your project at `index.tsx`

`import "starlord-ui-library/dist/tailwind.css"`

Then we need to add "fluff" to the index.scss file. `example/styles/index.scss`

Populate the `tailwind.config.js` file with the following:

```
const colors = require("tailwindcss/colors");

module.exports = {
  content: {
    enabled: true,
    content: [
      "./src/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/**/**/*.{js,jsx,ts,tsx}",
      "./node_modules/uafrica-ui-framework/build/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    options: {
      safelist: [/data-theme$/]
    }
  },
  media: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none"
    },
    extend: {
      spacing: {
        120: "30rem"
      },
      transitionProperty: {
        width: "width"
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.neutral,
        turquise: colors.turquise,
        indigo: colors.indigo,
        red: { ...colors.red, light: "#FCA5A5", DEFAULT: "#DC2626", dark: "#991B1B" },
        green: {
          ...colors.green,
          100: "rgb(231, 255, 209)",
          500: "#06b73d",
          DEFAULT: "#06b73d"
        },
        pink: {
          ...colors.pink,
          100: "#FFDFDC",
          500: "#FF024E",
          DEFAULT: "#FF024E"
        },
        yellow: {
          ...colors.yellow,
          100: "#FFFBD3",
          500: "#FFB600",
          DEFAULT: "#FFB600"
        },
        blue: {
          ...colors.blue,
          light: "#D6ECFF",
          DEFAULT: "#007BFF",
          dark: "#0060C7",
          100: "rgb(214, 236, 255)",
          500: "#0076fa"
        },
        primary: {
          ...colors.primary,
          light: "#D6ECFF",
          DEFAULT: "#1ABC9C",
          dark: "#148F77",
          50: "rgb(238, 252, 249)",
          100: "rgb(182, 234, 225)",
          500: "#3DC7AE"
        }
      }
    },
    fontFamily: {
      display: ["Montserrat"],
      body: ["Montserrat"]
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px"
    }
  },
  variants: {
    extend: {
      opacity: ["disabled"]
    }
  }
};
```

## Customization

Starlord UI Library uses Tailwind CSS under the hood, which means that you can customize the appearance of the components by modifying the Tailwind CSS configuration in your project.

To customize the appearance of the components, you need to install Tailwind CSS and its dependencies.

Then add the css file to your project at `index.tsx`

## Contributing

Contributions to Starlord UI Library are welcome and appreciated! If you find a bug or have a feature request, please open an issue on the GitHub repository.

## License

Starlord UI Library is open source software under the MIT Licence
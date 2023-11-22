const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        fontFamily: {
            roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
            dosis: ["Dosis", ...defaultTheme.fontFamily.sans],
            outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        "h1 a": { textDecoration: "none" },
                        "h2 a": { textDecoration: "none" },
                        "h3 a": { textDecoration: "none" },
                        "h4 a": { textDecoration: "none" },
                        "h5 a": { textDecoration: "none" },
                        "h6 a": { textDecoration: "none" },
                        "th a": { textDecoration: "none" },
                    },
                },
            },
        },
    },
    plugins: [require("daisyui"), require("@tailwindcss/typography")],
    // daisyui: {
    //     themes: ["cupcake", "dark"],
    // },
    daisyui: {
        themes: [
            {
                winter: {
                    ...require("daisyui/src/theming/themes")[
                        "[data-theme=winter]"
                    ],
                    primary: "#0764CE",
                },
            },
            "night",
        ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        // themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "night", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        // rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        // prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
};

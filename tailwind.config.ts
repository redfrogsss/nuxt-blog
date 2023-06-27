module.exports = {
    theme: {
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
    daisyui: {
        themes: ["cupcake", "dark"],
    },
};

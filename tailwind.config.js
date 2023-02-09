/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                footer: "#460EA2",
                seeker: "#460EA2",
                seller: "#AE3B68",
                black: "#000000",
                white: "#ffffff",
            },
            fontFamily: {
                sans: ['"Hind"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};

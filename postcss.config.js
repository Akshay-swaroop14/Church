/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a",
                secondary: "#facc15",
                background: "#ffffff",
                text: "#1f2933",
                "light-text": "#6b7280",
            },
            fontFamily: {
                body: ["Lato", "sans-serif"],
                heading: ["Playfair Display", "serif"],
            },
        },
    },
    plugins: [],
};

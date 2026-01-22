/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#2D2D2D", // Charcoal Gray (Headings/Body)
                secondary: "#6B7280", // Soft Gray (Subtext)
                accent: "#C9A24D", // Gold (Highlights)
                background: "#ffffff", // Pure White
                surface: "#F3F4F6", // Matching the new gradient mid-tone
                border: "#e5e7eb", // Light Gray Divider
            },
            fontFamily: {
                body: ["Lato", "sans-serif"],
                heading: ["Playfair Display", "serif"],
            },
        },
    },
    plugins: [],
};

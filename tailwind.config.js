/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                paypal: ["PayPal Sans Big Light Regular", "sans-serif"],
                big: ["PayPal Sans Big Regular", "sans-serif"],
            },
            fontSize: {
                'h1': '54px',
            },
            lineHeight: {
                'h1': '1.25rem',
            },
        },
    },
    plugins: [],
}
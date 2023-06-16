/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: ['class', '[data-theme="dark"]'],
    corePlugins: { preflight: false } 
};

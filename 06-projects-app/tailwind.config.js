/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('daisyui'),
    ],
}


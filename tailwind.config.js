// @type {import('tailwindcss').Config}
import daisyui from 'daisyui';

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // no need to use `require` here
  daisyui: {
    themes: ["light", "dark"],
  },
};

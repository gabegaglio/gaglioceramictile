/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": `linear-gradient(to right top, 
          #ffffff, 
          #ffffff, 
          #eaebff, 
          #dde2ff, 
          #cddaff, 
          #c2dbff, 
          #b6dcff, 
          #aaddff, 
          #a8e6ff, 
          #abefff, 
          #b1f7fe, 
          #bbfffb
        )`,
      },
    },
  },
  plugins: [],
};

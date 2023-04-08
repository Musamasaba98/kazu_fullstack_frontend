/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      height: {
        "10v": "10vh",
        "12v": "12vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "88v": "88vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      width: {
        "10v": "10vw",
        "12v": "12vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "85v": "85vw",
        "90v": "90vw",
        "100v": "100vw",
      },
    },
  },
  plugins: [

  ],
};

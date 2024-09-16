module.exports = {
  content: ["./src/**/*.{html,js}", "./pages/**/*.{ejs,js}"],  // Include your paths to all templates
  theme: {
    extend: {
      colors: {
        'dark-bg': '#111111', // Replace with your desired background color
        'dark-text': '#f1f1f1', // Replace with your desired text color
      },
    },
  },
  darkMode: 'media',  // or 'class' if you prefer to toggle it with a button
  plugins: [],
}
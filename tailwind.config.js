/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      boxShadow: {
        'comment': '0px 0px 15px 8px rgba(96,165,250, .6)',
        'retweet' : '0px 0px 15px 8px rgba(35, 219, 84, .4)',
        'like' : '0px 0px 15px 8px rgba(204, 51, 16, .4)',
      }
    },
  },
  plugins: [],
}


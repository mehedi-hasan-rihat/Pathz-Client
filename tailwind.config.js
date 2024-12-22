/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "url('https://i.ibb.co.com/d6CJFCR/Banner.jpg')",
        'banner-bottom': "url('https://i.ibb.co.com/z8230LK/banner-bottom.png')",
        'newsLetter-bottom': "url('https://i.ibb.co.com/4p2q6Tr/bottom-newsletter.png')",
        'newsLetter-top': "url('https://i.ibb.co.com/68XhzCm/upper-newsletter.jpg')",
        
       }
    },
  },
  plugins: [require('daisyui'),],
}
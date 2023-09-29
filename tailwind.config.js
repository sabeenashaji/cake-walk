/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        fontFamily:{
          'ADLaM Display' : ['ADLaM Display', 'cursive',],
          'Oswald'  : ['Oswald', 'sans-serif',],
          'righteous': ['Righteous', 'cursive'],
        
      },
      screens:{
        'phone_max':{'max':'768px'},
        'mobile':{'max':'640px'},
        'pc':{'min':'1580px'},
        'ipad':{'max':'920px'},
        'ipad_min':{'max':'480px'},
      },

    }
    
  },
  plugins: [],
}




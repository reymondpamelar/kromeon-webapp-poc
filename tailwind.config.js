/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        loaderRotate: 'loaderRotate 3s ease-in-out infinite',
        loaderSlide: 'loaderSlide 3s ease-in-out infinite',
        loaderInitialAppear: 'loaderInitialAppear 3s infinite',
        bounceRight: 'bounceRight 2s ease-in-out infinite',
        reversePing: 'reversePing 1s',
        slideUp: 'slideUp 1s',
        slideDown: 'slideDown 1s',
        slideRight: 'slideRight 1s',
        slideLeft: 'slideLeft 1s',
        slideInDown: 'slideInDown 1s',
        rotate180: 'rotate180 ',
        pingOnce: 'ping 1s ease-in-out',
        fadeInOut: 'loaderInitialAppear 2s ease-in-out infinite',
      },
      keyframes:{
        loaderRotate: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '25%': {
            transform: 'rotate(0deg)'
          },
          '50%': {
            transform: 'rotate(360deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          },

        },
        loaderSlide: {
          '25%': {
            transform: 'translateX(-30px) translateY(-30px)',
          },
          '50%': {
            transform: 'translateX(-30px) translateY(-30px)',
          },
          '75%': {
            transform: 'translateX(-30px) translateY(-30px)',
          },
          '90%': {
            transform: 'translateX(0px) translateY(0px)',
          },
        },
        loaderInitialAppear: {
          '0%': {
            opacity: '0.5',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0.5',
          },
        },
        bounceRight: {
          '0%, 100%': {
            transform: 'translateX(-6%)',
          },
          '50%': {
            transform: 'translateX(6%)',
          },
        },
        reversePing: {
          '0%, 5%': {
            opacity: '.5',
            transform: 'scale(2)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '.0',
            transform: 'translateY(6%)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '.0',
            transform: 'translateY(-6%)',
          },
        },
        slideRight: {
          '0%': {
            opacity: '.0',
            transform: 'translateX(-6%)',
          },
        },
        slideLeft: {
          '0%': {
            opacity: '.0',
            transform: 'translateX(6%)',
          },
        },
        slideInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        rotate180: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(180deg)'
          },
        }
      },
      fontFamily: {
        neueBold: ['PPNeueMontreal-Bold'],
        neueBook: ['PPNeueMontreal-Book'],
        neueItalic: ['PPNeueMontreal-Italic'],
        neueMedium: ['PPNeueMontreal-Medium'],
        neueSemiBoldItalic: ['PPNeueMontreal-SemiBoldItalic'],
        neueThin: ['PPNeueMontreal-Thin'],
      }
    },
  },
  plugins: [],
};

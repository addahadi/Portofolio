/** @type {import('tailwindcss').Config} */

import { transform } from 'typescript';

export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			black: {
  				'1': '#0D0D0D',
  				'2': '#181818',
  				'3': '#383737',
				'4':'#000'
  			},
  			white: {
  				'1': '#fff',
  				'2': '#808080',
  				'3': 'rgba(128, 128, 128, 0.5)',
  				'4': '#C5C5C5'
  			}
  		},
  		animation: {
  			'move-left': 'move-to-left 5s linear infinite',
  			'move-right': 'move-to-right 10s linear infinite',
			'pinga': 'pinga 2s linear infinite',
  		},
  		keyframes: {
  			'move-to-left': {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'move-to-right': {
  				'0%': {
  					transform: 'translateX(-50%)'
  				},
  				'100%': {
  					transform: 'translateX(-0%)'
  				}
  			},
			'pinga': {
				'75%': {
					transform: 'scale(2,2)',
					opacity: 0,
				},
				'100%':{
					transform:'scale(2,2)',
					opacity:0,

				}
}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  
};


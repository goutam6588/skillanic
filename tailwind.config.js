// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideInNav: {
          from: { opacity: '0', transform: 'translateY(5px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in-nav': 'slideInNav 0.3s both ease-out',
      },
    },
  },
}
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions"
    },
    "tailwindcss": {
      theme: {
        extend: {
          fontSize: {
            'xxs': '.65rem'
          },
          colors: {
            'electricblue': '#0022FF',
            yellow: {
              '100': '#FFF8E1',
              '200': '#FFECB3',
              '300': '#FFE082',
              '400': '#FFD54F',
              '500': '#FFCA28',
              '600': '#FFC107',
              '700': '#FFB300',
              '800': '#FFA000',
              '900': '#FF8F00',
            }
          }
        }
      }
    },
    autoprefixer: {}
  }
};

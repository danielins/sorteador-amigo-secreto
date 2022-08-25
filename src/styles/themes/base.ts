const colors = {
  brand: {
    100: '#4B69FD',
    200: '#FE652B'
  },
  support: {
    100: '#FFF9EB',
    200: '#C4C4C4'
  },
  grays: {
    100: '#FFFFFF',
    200: '#F7F7F7',
    300: '#E7E7E7',
    400: '#CCCCCC',
    500: '#909090',
    600: '#8B8B8B',
    700: '#707070',
    800: '#575757',
    900: '#2D2A26',
    1000: '#000000',
  }
}

const baseTheme = {
  background: colors.brand[100],
  bodyBorder: `2px solid ${colors.grays[1000]}`,
  fontFamily: 'Poppins',
  main: {
    background: colors.support[100]
  },
  form: {
    button: {
      background: colors.support[200],
      color: colors.grays[900]
    }
  }
}

export default baseTheme;
/* eslint-disable no-useless-computed-key */
const colors = {
  white: '#ffffff',
  black: '#000000',
  accent: '#05d4e3',
  primary: {
    ['900']: '#00459c',
    ['800']: '#0063bb',
    ['700']: '#0073cd',
    ['600']: '#0085df',
    ['500']: '#0093ed',
    ['400']: '#38a2f0',
    ['300']: '#5eb2F1',
    ['200']: '#8dc8f5',
    ['100']: '#b9ddf9',
    ['50']: '#e2f2fc',
  },
  secondary: {
    ['900']: '#0f2e66',
    ['800']: '#1a3f7d',
    ['700']: '#21488a',
    ['600']: '#2b5295',
    ['500']: '#325a9f',
    ['400']: '#5472ab',
    ['300']: '#738bb9',
    ['200']: '#9baccd',
    ['100']: '#c2cce2',
    ['50']: '#e7ebf3',
    focusBackground: '#272932',
    hoverBackground: '#181c35',
  },
  surface: {
    light: '#ffffff',
    dark: '#f2f3f4',
    background: {
      light: '#fafbfc',
      dark: '#e2e2e2',
    },
  },
  // To be remove
  background: {
    light: '#fafbfc',
    dark: '#e2e2e2',
  },
  status: {
    default: {
      main: '#404040',
      light: '#f2f3f4',
    },
    success: {
      main: '#3c9f8c',
      light: '#ecf6f4',
    },
    warning: {
      main: '#f79c32',
      light: '#fff5e9',
    },
    danger: {
      main: '#e2574c',
      light: '#fceeed',
    },
    inactive: '#bfc1c2',
  },
  solidBorderLight: `rgba(0, 0, 0, 0.1)`,
  solidBorderDark: `rgba(0, 0, 0, 0.2)`,
}

export default colors

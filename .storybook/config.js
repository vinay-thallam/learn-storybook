import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import ThemeProvider from '../src/components/ThemeProvider'
import CssBaseline from '../src/components/CssBaseline'
import requireContext from 'require-context.macro'
import '../src/index.css'
import theme from '../src/theme'

addDecorator(withA11y)
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {story()}
  </ThemeProvider>
))

configure(
  requireContext('../src/components', true, /\.stories\.(js|jsx)$/),
  module
)

// import { MemoryRouter as Router, Route } from 'react-router-dom'

// addDecorator(story => (
//   <Router>
//     <Route path="/" component={() => story()} />
//   </Router>
// ));

// automatically import all files ending in *.stories.js
// configure([
//   require.context('../src/docs', false, /Intro\.stories\.mdx/),
//   require.context('../src/docs', true, /\.stories\.mdx/),
//   require.context('../src', true, /\.stories\.(js|jsx|mdx)$/)
// ], module);

import React from 'react'
import Router from './Router'

import { createTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f2aa26',
      dark: '#f09c01',
    },
    secondary: {
      main: '#11cb5f',
    },
    text: {
      primary: '#373585',
      secondary: '#a4a6b3',
    },
    background: {
      default: '#f7f8fc',
    },
  },
  typography: {
    fontFamily: 'Noto Sans, sans- serif',
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    htmlFontSize: 8,
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router />
      </>
    </ThemeProvider>
  )
}

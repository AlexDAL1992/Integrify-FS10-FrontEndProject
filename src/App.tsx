import React from 'react'
import Routes from './Routes'

import { createContext, useState, useEffect } from 'react'
import { createTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { useDispatch } from 'react-redux'

import { fetchAllCountries } from './redux/actions'

import Navigation from './components/Navigation/Navigation'
import Theme from './components/Theme/Theme'

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
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  const [drawerState, setDrawerState] = useState(false)
  const handleDrawerState = (state: boolean) => {
    setDrawerState(state)
  }
  return (
    <ThemeProvider theme={theme}>
      <Navigation drawerState={drawerState} onClick={handleDrawerState} />
      <Theme state={drawerState} onClick={handleDrawerState} />
      <Routes />
    </ThemeProvider>
  )
}

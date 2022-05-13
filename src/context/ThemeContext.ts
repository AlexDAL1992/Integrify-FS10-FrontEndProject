import React, { createContext } from 'react'

export const themes = {
  light: {},
  dark: {},
}

const ThemeContext = createContext({
  theme: themes.light,
  setTheme: () => {},
})

export default ThemeContext

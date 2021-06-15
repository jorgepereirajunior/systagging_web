import React, { FC } from 'react'

import GlobalStyle from './styles/global'

import standard from './styles/themes/standard'
import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={standard}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App

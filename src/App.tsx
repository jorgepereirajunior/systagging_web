import React, { FC } from 'react'

import GlobalStyle from './styles/global'

import standard from './styles/themes/standard'
import { ThemeProvider } from 'styled-components'

import { Header } from './components/Header'

const App: FC = () => {
  return (
    <>
      <ThemeProvider theme={standard}>
        <GlobalStyle />
        <Header />
        <h1>Starting Systagging!</h1>
      </ThemeProvider>
    </>
  )
}

export default App

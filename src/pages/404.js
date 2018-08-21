import React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { ErrorPage } from '../components/Bg'
import theme from '../utils/theme'
import addGlobal from '../utils/global-styles'

addGlobal()

const John = styled.img`
  margin: 0 auto;
  display: block;
  max-width: 100%;
`

const App = () => (
  <ThemeProvider theme={theme}>
    <ErrorPage>
      <Helmet>
        <title>404 | RND {'<'}3 JS</title>
        <meta name='description' content='Ничегошеньки не нашли' />
      </Helmet>
      <John
        src='https://media.giphy.com/media/jWexOOlYe241y/giphy.gif'
        alt=''
      />
    </ErrorPage>
  </ThemeProvider>
)

export default App

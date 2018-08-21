import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import BgWithLogo from '../components/BgWithLogo'
import theme from '../utils/theme'
import addGlobal from '../utils/global-styles'

addGlobal()

const App = () => (
  <ThemeProvider theme={{...theme, shadows: [theme.shadows[0]]}}>
    <BgWithLogo>
      <Helmet>
        <title>RND {'<'}3 JS</title>
        <meta name='description' content='Ростовский JavaScript Митап' />
      </Helmet>
    </BgWithLogo>
  </ThemeProvider>
)

export default App

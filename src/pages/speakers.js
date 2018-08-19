import React from 'react'
import Helmet from 'react-helmet'
import { Flex } from 'grid-styled'
import { ThemeProvider } from 'styled-components'
import BgWithLogo from '../components/BgWithLogo'
import Card from '../components/Card'
import Speaker from '../components/Speaker'
import Accordion from '../components/Accordion'
import theme from '../utils/theme'
import addGlobal from '../utils/global-styles'

addGlobal()

const range = count => Array.from({ length: count }, (_, i) => i)

const App = () => (
  <ThemeProvider theme={theme}>
    <BgWithLogo>
      <Helmet>
        <title>RND {'<'}3 JS</title>
        <meta name='description' content='Ростовский JavaScript Митап' />
      </Helmet>

      <Card>
        <Flex flexDirection='column' py={[0, 0, 42, 84]}>
          <Accordion>
            {({ active, set }) =>
              range(4).map(index => (
                <Speaker
                  key={index}
                  on={index === active}
                  number={index + 1}
                  toggle={() => set(index)}
                />
              ))
            }
          </Accordion>
        </Flex>
      </Card>
    </BgWithLogo>
  </ThemeProvider>
)

export default App

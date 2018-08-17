import React from 'react'
import { Flex, Box } from 'grid-styled'
import { ThemeProvider } from 'styled-components'
import BgWithLogo from '../components/BgWithLogo'
import Card from '../components/Card'
import Button from '../components/Button'
import { Header } from '../components/Typography'
import addGlobal from '../global-styles'

addGlobal()

const shadow = 'rgba(13, 8, 26, 0.3)'
const theme = {
  colors: {
    primary: Object.assign('#6624FF', {
      ligther: 'hsl(258, 95%, 60%)'
    }),
    secondary: '#FF3357',
    tertiary: 'rgba(101, 37, 255, 0.2);',
    // tertiary: '#F6F7FD',

    font: '#262626',
    shadow,

    background: ['#262626', '#1C1B1F']
    // background: ['hsl(255, 7%, 40%)', 'hsl(255, 7%, 45%)']
  },

  card: {
    size: ['auto', 'auto', 880, 1104],
    margin: ['0 8px 25vh 0', '0 16px 25vh 0', ' 0px auto 25vh']
  },

  shadows: [
    `8px 16px 0px ${shadow}`,
    `16px 24px 0px ${shadow}`,
    `24px 32px 0px ${shadow}`,
    `32px 48px 0px ${shadow}`
  ],

  offsets: [
    'translate(8px, 16px)',
    'translate(16px, 24px)',
    'translate(24px, 32px)',
    'translate(32px, 48px)'
  ]
}

const App = () => (
  <ThemeProvider theme={theme}>
    <BgWithLogo>
      <Card>
        <Flex justifyContent='center' py={100}>
          <Header>Скоро</Header>
        </Flex>
      </Card>

      <Card>
        <Flex p='100px 100px 130px' flexDirection='column' alignItems='center'>
          <Box pb={50}>
            <Header>Хочешь выступить?</Header>
          </Box>
          <Button>заполни заявку</Button>
        </Flex>
      </Card>

      <Flex w='100%' py='5vh' />
    </BgWithLogo>
  </ThemeProvider>
)

export default App

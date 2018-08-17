import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box } from 'grid-styled'
import { ThemeProvider } from 'styled-components'
import BgWithLogo from '../components/BgWithLogo'
import Card from '../components/Card'
import Button from '../components/Button'
import { Header } from '../components/Typography'
import theme from '../utils/theme'
import addGlobal from '../global-styles'

addGlobal()

const App = () => (
  <ThemeProvider theme={theme}>
    <BgWithLogo>
      <Helmet>
        <title>RND {'<'}3 JS</title>
        <meta name='description' content='Ростовский JavaScript Митап' />
      </Helmet>
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
          <Button
            is='a'
            href='https://docs.google.com/forms/d/e/1FAIpQLScQo214aM5hDsHC-Ki5ajkn6q0qAxiStm55Aq6hARyDM3RyMA/viewform?hl=en'
            target='_blank'
          >
            заполни заявку
          </Button>
        </Flex>
      </Card>

      <Flex w='100%' py='5vh' />
    </BgWithLogo>
  </ThemeProvider>
)

export default App

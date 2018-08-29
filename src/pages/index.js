import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box } from 'grid-styled'
import { ThemeProvider } from 'styled-components'
import BgWithLogo from '../components/Bg'
import Card from '../components/Card'
import Button from '../components/Button'
import {
  Text,
  Uppercase,
  Colorize,
  BorderedText
} from '../components/Typography'
import theme from '../utils/theme'
import addGlobal from '../utils/global-styles'
import Speaker from '../components/Speaker'
import Accordion from '../components/Accordion'

import { speakers } from '../../data/speakers.json'

addGlobal()

const App = () => (
  <ThemeProvider theme={theme}>
    <BgWithLogo>
      <Helmet>
        <title>RND {'<'}3 JS</title>
        <meta name='description' content='Ростовский JavaScript Митап' />
      </Helmet>

      <Card>
        <Flex
          pt={100}
          pb={90}
          px={[32, 48, 60, 112]}
          flexDirection='column'
        >
          <Box pb={64}>
            <Text fontSize={[24, 36, 36, 42]}>
              Ростов-на-Дону&nbsp;
              <Colorize color='#FF3357'>/</Colorize> Суворова,&nbsp;91
              этаж&nbsp;7&nbsp;
              <Colorize color='#FF3357'>/</Colorize> Южный ИТ-парк
            </Text>
          </Box>

          <Flex justifyContent='space-between'>
            <Box>
              <BorderedText
                fontWeight={900}
                fontSize={[36, 36, 64, 100]}
                fill='white'
                width={'2px'}
                stroke='#6624FF'
              >
                8 сент.
              </BorderedText>
            </Box>

            <Box>
              <Text
                fontWeight={900}
                fontSize={[36, 36, 64, 100]}
                color='#6624FF'
              >
                16:00
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Card>

      <Card>
        <Flex flexDirection='column' py={[0, 0, 42, 84]}>
          <Accordion>
            {({ active, set }) =>
              speakers.map((speaker, index) => (
                <Speaker
                  key={index}
                  speaker={speaker}
                  on={index === active}
                  number={index + 1}
                  toggle={() => set(index)}
                />
              ))
            }
          </Accordion>
        </Flex>
      </Card>

      <Card>
        <Flex p='100px 0 130px' flexDirection='column' alignItems='center'>
          <Box pb={50}>
            <Uppercase>
              <Text fontSize={[20, 24, 32, 40]}>Хочешь выступить?</Text>
            </Uppercase>
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
    </BgWithLogo>
  </ThemeProvider>
)

export default App

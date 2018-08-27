import React from 'react'
import { Flex, Box } from 'grid-styled'
import { ThemeProvider } from 'styled-components'
import Image, { ColorMask } from '../components/Image'
import {
  BorderedText,
  Text,
  Uppercase,
  Colorize
} from '../components/Typography'
import Card from '../components/Card'
import { Bg } from '../components/Bg'
import theme from '../utils/theme'
import addGlobal from '../utils/global-styles'

import data from '../../data/speakers.json'

addGlobal()

const App = ({ speaker }) => (
  <ThemeProvider theme={theme}>
    <Bg>
      <Flex
        alignItems='center'
        justifyContent='center'
        style={{ width: '100vw', height: '100vh' }}
      >
        <Card m='0' style={{ width: '880px' }}>
          <Flex p={64} flexDirection='column'>
            <Flex pb={100}>
              <Box pr={16}>
                <ColorMask
                  opacity={0.6}
                  gradient='linear-gradient(250deg, #FF3357 -10%, #6624FF 110%)'
                  mode='color'
                >
                  <Image src={speaker.avatar} width='208px' style={{filter: 'grayscale(100%)'}} />
                </ColorMask>
              </Box>

              <Flex flexDirection='column' justifyContent='center'>
                <Box>
                  <Uppercase>
                    <Text fontSize={48}>{speaker.name}</Text>
                  </Uppercase>
                </Box>

                <Box pt={15} pb={24}>
                  <Uppercase>
                    <Text fontSize={16} lineHeight='24px'>
                      <Colorize color='#ff3357'>{speaker.job} /</Colorize>{' '}
                      {speaker.theme}
                    </Text>
                  </Uppercase>
                </Box>
              </Flex>
            </Flex>

            <Flex alignItems='center'>
              <Box flex='1'>
                <Text fontSize={16} lineHeight='24px' maxWidth={300}>
                  Ростов-на-Дону&nbsp;
                  <Colorize color='#FF3357'>/</Colorize> Суворова, 91
                  этаж&nbsp;7&nbsp;
                  <Colorize color='#FF3357'>/</Colorize> Южный ИТ-парк
                </Text>
              </Box>

              <Flex justifyContent='space-between' flex='1'>
                <Box>
                  <BorderedText
                    fontWeight={900}
                    fontSize={48}
                    fill='white'
                    width={'1px'}
                    stroke='#6624FF'
                  >
                    8 сент.
                  </BorderedText>
                </Box>

                <Box>
                  <Text fontWeight={900} fontSize={48} color='#6624FF'>
                    15:00
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Bg>
  </ThemeProvider>
)

export default () => <App speaker={data.speakers[0]} />

import React from 'react'
import { Flex, Box } from 'grid-styled'
import { ThemeProvider } from 'styled-components'
import Image, { ColorMask } from '../components/Image'
import { Text, Uppercase, Colorize } from '../components/Typography'
import Card from '../components/Card'
import { Bg } from '../components/Bg'
import theme from '../utils/theme'
import addGlobal from '../utils/global-styles'

addGlobal()

const App = () => (
  <ThemeProvider theme={theme}>
    <Bg>
      <Flex
        alignItems='center'
        justifyContent='center'
        style={{ width: '100vw', height: '100vh' }}
      >
        <Card m='0' style={{width: '82%'}}>
          <Flex alignItems='center'>
            <Box p={72} pr={48}>
              <ColorMask
                opacity={0.6}
                gradient='linear-gradient(250deg, #FF3357 -10%, #6624FF 110%)'
                mode='multiply'
              >
                <Image
                  src='https://avatars.mds.yandex.net/get-yaevents/198307/f79f28c82ab7aba6bf195e894abe03ee/big_c'
                  width='40vh'
                />
              </ColorMask>
            </Box>

            <Flex flexDirection='column'>
              <Box>
                <Uppercase>
                  <Text fontSize={64}>Николай Ильченко</Text>
                </Uppercase>
              </Box>

              <Box pt={15} pb={24}>
                <Uppercase>
                  <Text fontSize={32}>
                    <Colorize color='#ff3357'>Яндукс /</Colorize> Путь Нео в react-native
                  </Text>
                </Uppercase>
              </Box>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Bg>
  </ThemeProvider>
)

export default App

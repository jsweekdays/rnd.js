import React from 'react'
import { Flex, Box } from 'grid-styled'
import Image, { ColorMask } from './Image'
import { Text, Uppercase, BorderedText, Colorize } from './Typography'
import Collapse from './Collapser'
import Arrow from './Arrow'

const Hover = Flex.extend`
  cursor: pointer;

  transition: background-color 0.16s ease;

  &:hover {
    background-color: #f6f7fd;
  }
`

const Speaker = ({ on, toggle, number }) => (
  <Hover
    flexDirection={['column', 'column', 'row']}
    onClick={toggle}
    px={[16, 32, 64, 112]}
    pb={[16, 32, 0]}
  >
    <Box py={[16, 32, 48, 60]}>
      <ColorMask
        opacity={0.6}
        gradient='linear-gradient(250deg, #FF3357 -10%, #6624FF 110%)'
        mode='multiply'
      >
        <Image
          src='https://avatars1.githubusercontent.com/u/4665090?s=460&v=4'
          width={['100%', '100%', 160, 208]}
        />
      </ColorMask>
    </Box>

    <Flex pt={[16, 16, 72, 98]} pl={[0, 0, 12, 25]}>
      <Box pr={['8px', '8px', 35, 73]}>
        <Uppercase>
          <BorderedText
            fontSize={[20, 24, 32, 40]}
            fill={on ? '#6624FF' : 'transparent'}
            stroke='#6624FF'
          >
            {number}.
          </BorderedText>
        </Uppercase>
      </Box>

      <Flex flexDirection='column'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Uppercase>
            <Text fontSize={[20, 24, 32, 40]}>Димка Подлесный</Text>
          </Uppercase>

          <Box>
            <Arrow direction={on ? 'up' : 'down'} />
          </Box>
        </Flex>

        <Box pt={[10, 15]} pb={[16, 16, 24]}>
          <Uppercase>
            <Text fontSize={[16]}>
              <Colorize color='#ff3357'>компания /</Colorize> тема докладa
            </Text>
          </Uppercase>
        </Box>

        <Collapse on={on}>
          <Box pb={[16, 16, 72, 98]}>
            <Text
              fontSize={[14, 16]}
              lineHeight={[20 / 14, 24 / 16]}
              fontWeight={500}
            >
              Реактивное программирование в тренде фронтенда, его принципы
              используются в современных фреймворках и библиотеках. Однако,
              чтобы серьезно работать с Rx, нужно немного перестроить парадигму
              мышления, и это усложняет его изучение. В докладе я расскажу, как
              прийти к жизни такой. Изучим паттерны, на которых основано
              реактивное программирование.
            </Text>
          </Box>
        </Collapse>
      </Flex>
    </Flex>
  </Hover>
)

export default Speaker

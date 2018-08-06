import React from 'react'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import { Toggle } from 'react-powerplug'
import Image from './Image'
import Collapse from './Collapser'

// const svg = `<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M12.354 8.11l6.525-6.524 3.535 3.535L12 15.536 1.586 5.12 5.12 1.586l6.525 6.525.354.353.354-.353z" stroke="#6624FF"/>
// </svg>`

const Name = styled.div`
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: bold;
  line-height: 42px;
  font-size: 40px;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  color: #262626;
`

const Low = styled.span`
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #262626;
`

const Strong = styled.span`
  color: #ff3357;
`

const Small = styled.div`
  font-family: Gotham Pro;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
  letter-spacing: 0.01em;

  color: #262626;
`

const Hover = Flex.extend`
  cursor: pointer;

  transition: background-color 0.16s ease;

  &:hover {
    background-color: #f6f7fd;
  }
`

const Speaker = () => (
  <Toggle>
    {({ on, toggle }) => (
      <Hover flexDirection='row' onClick={toggle} on={on} px={112}>
        <Box py={60}>
          <Image
            src='https://avatars1.githubusercontent.com/u/4665090?s=460&v=4'
            width='208px'
          />
        </Box>

        <Flex pt={98} pl={25}>
          <Box pr={73}>
            <Name>1.</Name>
          </Box>

          <Flex flexDirection='column'>
            <Box>
              <Name>Димка Подлесный</Name>
            </Box>

            <Box pt={15} pb={24}>
              <Low>
                <Strong>компания /</Strong> тема докладa
              </Low>
            </Box>

            <Collapse on={on}>
              <Box pb={98}>
                <Small>
                  Реактивное программирование в тренде фронтенда, его принципы
                  используются в современных фреймворках и библиотеках. Однако,
                  чтобы серьезно работать с Rx, нужно немного перестроить
                  парадигму мышления, и это усложняет его изучение. В докладе я
                  расскажу, как прийти к жизни такой. Изучим паттерны, на
                  которых основано реактивное программирование.
                </Small>
              </Box>
            </Collapse>
          </Flex>
        </Flex>
      </Hover>
    )}
  </Toggle>
)

export default Speaker
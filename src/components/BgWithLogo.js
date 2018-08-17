import React from 'react'
import styled, { withTheme } from 'styled-components'
import { responsiveStyle, themeGet } from 'styled-system'
import Size from './Size'
import Scroll from './Scroll'
import { injectVars } from '../utils/injectVars'

const TEXT_WIDTH_COOF = {
  JS: 1.52,
  RND: 2.84,
  '7': 1.69,
  '40': 1.7738297872340427,
  '04': 1.7738297872340427
}

const BigRow = styled.div`
  position: relative;
  font-family: Gotham Pro;
  font-weight: 900;

  font-size: calc(var(--fontsize) * 1.25);
  line-height: calc(var(--fontsize));

  transform: translateX(var(--offset));

  color: ${themeGet('colors.background.1', 'black')};

  &:after {
    content: var(--text);
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-100%);
  }
`

const Block = styled.div`
  position: relative;
`

const SmallRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-family: Gotham Pro;
  font-weight: 900;

  font-size: calc(var(--fontsize) * 1.25);
  line-height: calc(var(--fontsize));

  transform: translateX(var(--scroll));

  color: ${themeGet('colors.primary', 'black')};
`

const Row = ({ text, children, vars }) => (
  <Block style={injectVars(vars)}>
    <BigRow>{children}</BigRow>
    {text && <SmallRow>{text}</SmallRow>}
  </Block>
)

const Fullscreen = styled.div`
  position: fixed;
  transform: translateY(var(--offsetx));

  overflow: hidden;
  background-color: ${themeGet('colors.background.0', 'black')};

  width: 100%;
  z-index: -1;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateX(var(--offsety));
`

const range = count => Array.from({ length: count }, (_, i) => i)

const textShadow = responsiveStyle({
  prop: 'textShadow',
  key: 'shadows'
})

const Number = styled.div`
  display: inline-block;
  color: ${themeGet('colors.secondary', 'black')};

  font-family: Gotham Pro;
  font-weight: 900;

  transform: translate(var(--numberoffsety), var(--numberoffsetx));

  font-size: calc(var(--fontsize) * (1.25 + 0.13) * 2);
  line-height: calc(var(--fontsize) * 1.12 * 2);

  ${textShadow};
`

const BgWithLogo = ({ children, theme }) => (
  <Size>
    {size => {
      const fontSize = Math.round(
        Math.min(size.width / 2 / TEXT_WIDTH_COOF['RND'], size.height / 3.5)
      )
      const lines = Math.ceil(size.height / fontSize) + 2
      const centerIndex = Math.floor(lines / 2) - 1
      const magikParam = centerIndex % 2

      return (
        <Scroll>
          {({ scroll }) => (
            <div
              style={injectVars({
                numberoffsetx: size.height / 2 - fontSize + 'px',
                numberoffsety:
                  size.width / 2 -
                  ((TEXT_WIDTH_COOF['RND'] + TEXT_WIDTH_COOF['7']) * fontSize) /
                    2 +
                  'px',
                offsetx:
                  size.height / 2 - fontSize - centerIndex * fontSize + 'px',
                offsety:
                  size.width / 2 -
                  ((TEXT_WIDTH_COOF['RND'] + TEXT_WIDTH_COOF['7']) * fontSize) /
                    2 +
                  TEXT_WIDTH_COOF['7'] * fontSize +
                  'px',
                fontsize: fontSize + 'px'
              })}
            >
              <Fullscreen>
                <Center>
                  {range(lines).map(index => {
                    const text = index % 2 !== magikParam ? 'JS' : 'RND'
                    const width = TEXT_WIDTH_COOF[text] * fontSize
                    const numbers = Math.ceil(size.width / width) / 1.5 + 2
                    const direction = index % 2 === magikParam ? 1 : -1
                    const directionScroll =
                      scroll * direction - (text === 'JS' ? width * 0.21 : 0)
                    const offset = directionScroll % width
                    const fullText = range(numbers).reduce(
                      str => str.concat(text),
                      ''
                    )
                    const isMain =
                      centerIndex === index || index === centerIndex + 1

                    return (
                      <Row
                        key={index}
                        text={isMain ? text : null}
                        vars={{
                          direction,
                          scroll: directionScroll + 'px',
                          offset: offset + 'px',
                          width,
                          text: `"${fullText}"`
                        }}
                      >
                        {fullText}
                      </Row>
                    )
                  })}
                </Center>
              </Fullscreen>

              <Number textShadow={themeGet('shadows')({ theme })}>
                {themeGet('shadow')({ theme })}7
              </Number>

              <div style={{ paddingBottom: '90vh' }} />

              {children}
            </div>
          )}
        </Scroll>
      )
    }}
  </Size>
)

export default withTheme(BgWithLogo)

const ErrorPage = ({ children, theme }) => (
  <Size>
    {size => {
      const fontSize = Math.round(
        Math.min(size.width / 2 / TEXT_WIDTH_COOF['40'], size.height / 3.5)
      )
      const lines = Math.ceil(size.height / fontSize) + 2
      const centerIndex = Math.ceil(lines / 2)
      const magikParam = centerIndex % 2

      return (
        <Scroll>
          {({ scroll }) => (
            <div
              style={injectVars({
                offsetx:
                  size.height / 2 -
                  fontSize / 2 -
                  centerIndex * fontSize +
                  'px',
                offsety:
                  size.width / 2 -
                  (TEXT_WIDTH_COOF['RND'] * fontSize) / 2 +
                  'px',
                fontsize: fontSize + 'px'
              })}
            >
              <Fullscreen>
                <Center>
                  {range(lines).map(index => {
                    const text = index % 2 !== magikParam ? '04' : '40'
                    const width = TEXT_WIDTH_COOF[text] * fontSize
                    const numbers = Math.ceil(size.width / width) / 1.5 + 2
                    const direction = index % 2 === magikParam ? 1 : -1
                    const directionScroll =
                      scroll * direction - (text === 'JS' ? width * 0.21 : 0)
                    const offset = directionScroll % width
                    const fullText = range(numbers).reduce(
                      str => str.concat(text),
                      ''
                    )
                    const isMain = centerIndex === index

                    return (
                      <Row
                        key={index}
                        text={isMain ? '404' : null}
                        vars={{
                          direction,
                          scroll: directionScroll + 'px',
                          offset: offset + 'px',
                          width,
                          text: `"${fullText}"`
                        }}
                      >
                        {fullText}
                      </Row>
                    )
                  })}
                </Center>
              </Fullscreen>

              <div style={{ paddingBottom: '1000vh' }} />

              {children}
            </div>
          )}
        </Scroll>
      )
    }}
  </Size>
)

export const Error404 = withTheme(ErrorPage)

import React from 'react'
import styled from 'styled-components'
import { width, backgroundImage, bgColor } from 'styled-system'

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  opacity: ${props => props.opacity || 1};
  mix-blend-mode: ${props => props.mode || ''};

  ${bgColor};
  ${backgroundImage};
`

const ColorMask = ({ children, color, gradient, opacity, mode }) => (
  <Block>
    {children}
    <Mask bg={color} backgroundImage={gradient} opacity={opacity} mode={mode} />
  </Block>
)

const Image = styled.img`
  display: block;

  user-select: none;

  ${width};
`

const Block = styled.div`
  position: relative;
`

export { ColorMask }
export default Image

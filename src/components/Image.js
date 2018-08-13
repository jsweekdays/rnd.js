import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-image: linear-gradient(
    250deg,
    ${themeGet('colors.secondary')} -10%,
    ${themeGet('colors.primary')} 110%
  );
  opacity: 0.6;
`

const Img = styled.img`
  width: 208px;
  height: 208px;

  mix-blend-mode: multiply;
`

const Block = styled.div`
  width: 208px;
  height: 208px;
  position: relative;
`

const Image = ({ src, alt = 'image' }) => (
  <Block>
    <Bg />
    <Img src={src} alt={alt} />
  </Block>
)

export default Image

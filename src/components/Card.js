import React from 'react'
import styled from 'styled-components'
import { space, width, themeGet } from 'styled-system'
import { border } from './helpers/border'
import { boxShadow } from './helpers/boxShadow'

const Body = styled.div`
  position: relative;
  overflow: hidden;

  background-color: #fff;

  ${border};
  ${width};
  ${space};

  ${props => boxShadow({ boxShadow: themeGet('shadows')(props) })};
`

const Card = ({ children }) => (
  <Body width={['auto', 432, 656, 880, 1104]} m={['0 8px 0 0', 'auto']}>
    {children}
  </Body>
)

export default Card

import React from 'react'
import styled from 'styled-components'
import { fontSize, themeGet } from 'styled-system'

const Ttl = styled.div`
  position: absolute;
  right: 0;

  font-family: Gotham Pro;
  font-size: 300px;
  font-weight: 800;
  text-transform: uppercase;

  user-select: none;

  padding: 32px 0;

  transform: translateX(10%);

  color: ${themeGet('colors.tertiary')};

  ${fontSize};

  /* font-size: var(--fontsize); */
`

const Title = ({ children }) => (
  <Ttl fontSize={[96, 104, 144, 240, 300]}>{children}</Ttl>
)

export default Title

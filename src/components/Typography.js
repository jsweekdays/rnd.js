import styled from 'styled-components'
import { fontWeight, fontSize } from 'styled-system'

export const Bold = styled.div`
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: 900;
  line-height: 1.3;
  font-size: 42px;
  letter-spacing: 0.01em;

  color: #262626;
`

export const Text = styled.span`
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  letter-spacing: 0.02em;

  ${fontWeight};
  ${fontSize};
`

export const Uppercase = styled.span`
  text-transform: uppercase;
`

export const BigText = styled.div`
  font-family: Gotham Pro;
  font-style: normal;
  font-weight: 900;
  font-size: 100px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`

export const Header = styled.h1`
  font-family: Gotham Pro;
  font-style: normal;

  font-weight: bold;
  line-height: 50px;
  font-size: 40px;
  letter-spacing: 0.01em;
  text-transform: uppercase;

  margin: 0;
`

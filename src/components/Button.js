import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { transform, boxShadow } from './helpers/style'

const tag = React.forwardRef(({ is: Component = 'button', ...props }, ref) => (
  <Component {...props} ref={ref} />
))

const Button = styled(tag)`
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  background-color: ${themeGet('colors.primary')};

  padding: 24px 55px 23px;

  font-family: Gotham Pro;
  line-height: 24px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;

  color: white;

  ${props => boxShadow({ boxShadow: themeGet('shadows.0')(props) })};

  transition: box-shadow 0.2s ease, transform 0.2s ease,
    background-color 0.2 ease;

  &:hover {
    background-color: ${themeGet('colors.primary.ligther')};
  }

  &:active {
    ${props => transform({ transform: themeGet('offsets.0')(props) })};
    box-shadow: 1px 1px 0px ${themeGet('colors.shadow')};
  }
`

export default Button

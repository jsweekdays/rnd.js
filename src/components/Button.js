import { themeGet } from 'styled-system'
import { css } from 'styled-components'
import system from 'system-components'
import theme from '../utils/theme'

const Button = system(
  {
    is: 'button',
    p: ['16px 33px 15px', '16px 33px 15px', '24px 55px 23px'],
    fontSize: [16, 16, 18],
    lineHeight: 24 / 18,
    boxShadow: theme.shadows[0]
  },
  props => css`
    cursor: pointer;
    border: none;
    outline: none;
    text-decoration: none;
    background-color: ${themeGet('colors.primary')(props)};

    font-family: Gotham Pro;
    text-transform: uppercase;
    font-weight: 700;

    color: white;

    transition: box-shadow 0.2s ease, transform 0.2s ease,
      background-color 0.2 ease;

    &:hover {
      background-color: ${themeGet('colors.primary.ligther')(props)};
    }

    &:active {
      box-shadow: 1px 1px 0px ${themeGet('colors.shadow')};
      transform: ${themeGet('offsets.0')};
    }
  `
)

export default Button

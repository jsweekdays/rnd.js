import { css } from 'styled-components'
import { themeGet } from 'styled-system'

const border = () => css`
  border: 1px solid ${themeGet('colors.primary', 'black')};

  @media (min-width: 780px) and (min-height: 500px) {
    border: 2px solid ${themeGet('colors.primary', 'black')};
  }
`

const fontBorder = () => css`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px ${themeGet('colors.primary', 'black')};

  @media (min-width: 780px) and (min-height: 500px) {
    -webkit-text-stroke: 2px ${themeGet('colors.primary', 'black')};
  }
`

export { border, fontBorder }

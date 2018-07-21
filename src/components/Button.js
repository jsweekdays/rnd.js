import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Button = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: ${themeGet('colors.primary')};

  padding: 25px 68px 20px;

  font-family: Gotham Pro;
  line-height: 24px;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 800;

  color: ${themeGet('colors.bg')};
  box-shadow: 24px 24px 0px rgba(15, 0, 50, 0.15);

  transition: text-shadow 0.16s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    text-shadow: 3px -1px 0 ${themeGet('colors.secondary')};
  }

  &:active {
    transform: translate(22px, 22px);
    box-shadow: unset;
  }
`

export default Button

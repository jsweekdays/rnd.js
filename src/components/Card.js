import styled from 'styled-components'
import { space, width, themeGet } from 'styled-system'
import { boxShadow } from './helpers/style'

const Card = styled.div`
  position: relative;
  overflow: hidden;

  background-color: #fff;

  ${props => width({ width: themeGet('card.size')(props) })};
  ${props => space({ m: themeGet('card.margin')(props) })};
  ${props => boxShadow({ boxShadow: themeGet('shadows')(props) })};
`

export default Card

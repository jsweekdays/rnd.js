import styled from 'styled-components'
import {
  width,
  space,
  fontSize,
  color,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  // gridAutoFlow,
  // gridAutoColumns,
  // gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  alignItems,
  justifyContent,
  justifySelf,
  alignSelf
} from 'styled-system'

export const Box = styled.div(
  {},
  width,
  space,
  fontSize,
  color,
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf
)

export const Grid = styled.div(
  { display: 'grid' },
  width,
  space,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridTemplateColumns,
  gridTemplateRows,
  alignItems,
  justifyContent
)

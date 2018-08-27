import styled, { css } from 'styled-components'
import system from 'system-components'

export const Text = system(
  () => css`
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    letter-spacing: 0.02em;

    color: #262626;
  `,
  'fontWeight',
  'lineHeight',
  'maxWidth',
  'fontSize',
  'color'
)

export const BorderedText = system(
  () => css`
    font-family: Gotham Pro;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0.02em;

    color: #262626;
  `,
  'fontWeight',
  'lineHeight',
  'fontSize',

  props => css`
    -webkit-text-fill-color: ${props.fill || 'black'};
    -webkit-text-stroke-color: ${props.stroke || 'black'};
    -webkit-text-stroke-width: ${props.width || '1px'};

    text-fill-color: ${props.fill || 'black'};
    text-stroke-color: ${props.stroke || 'black'};
    text-stroke-width: ${props.width || '1px'};

    transition: -webkit-text-fill-color 0.3s ease,
      -webkit-text-stroke-color 0.3s ease;
  `
)

// props => css`
//     transition: color 0.3s ease;
//     color: ${props.fill || 'black'};
//     text-shadow: -1px 0 ${props.stroke || 'black'},
//       0 1px ${props.stroke || 'black'}, 1px 0 ${props.stroke || 'black'},
//       0 -1px ${props.stroke || 'black'};
//   `

export const Uppercase = styled.span`
  text-transform: uppercase;
`

export const Colorize = system(
  {
    is: 'span'
  },
  'color',
  'bgColor'
)

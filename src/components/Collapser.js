import React from 'react'
import styled from 'styled-components'
import { Value } from 'react-powerplug'
import posed from 'react-pose'

const Collapser = posed.div({
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: { ease: 'easeInOut', duration: 300 },
      height: { ease: 'easeInOut', duration: 300 }
    }
  },
  visible: {
    opacity: 1,
    height: ({ height }) => height,
    transition: {
      opacity: { ease: 'easeInOut', duration: 300 },
      height: { ease: 'easeInOut', duration: 300 }
    }
  }
})

const StyledCollapser = styled(Collapser)`
  overflow: hidden;
  user-select: none;
`

const Collapse = ({ children, on }) => (
  <Value>
    {({ value, set }) => (
      <StyledCollapser pose={on ? 'visible' : 'hidden'} height={value}>
        <div
          ref={element => {
            if (element && element.offsetHeight !== value) {
              set(element.offsetHeight)
            }
          }}
        >
          {children}
        </div>
      </StyledCollapser>
    )}
  </Value>
)

export default Collapse

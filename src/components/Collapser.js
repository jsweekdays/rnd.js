import React from 'react'
import styled from 'styled-components'
import { Value } from 'react-powerplug'

const Content = styled.div`
  height: 0;
  opacity: 0;
  overflow: hidden;
  transition: height cubic-bezier(0.455, 0.03, 0.515, 0.955) 300ms,
    opacity ease 300ms;
`

const Collapse = ({ children, on }) => (
  <Value>
    {({ value, set }) => (
      <Content style={on ? { height: `${value}px`, opacity: 1 } : {}}>
        <div
          ref={element => {
            if (element && element.offsetHeight !== value) {
              set(element.offsetHeight)
            }
          }}
        >
          {children}
        </div>
      </Content>
    )}
  </Value>
)

export default Collapse

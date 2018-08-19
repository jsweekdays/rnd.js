import React from 'react'
import { Value, renderProps } from 'react-powerplug'

const Accordion = props => (
  <Value>
    {({ value, set }) =>
      renderProps(props, {
        active: value,
        set: index => (index === value ? set(-1) : set(index))
      })
    }
  </Value>
)

export default Accordion

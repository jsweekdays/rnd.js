import React, { Fragment } from 'react'
import { Value } from 'react-powerplug'
import Collapse from '../components/Collapser'
import { Box } from 'grid-styled'

const Range = ({ count, children }) => (
  <Fragment>
    {Array.from({ length: count }, (_, i) => i).map(children)}
  </Fragment>
)

export default () => (
  <Value>
    {({ value, set }) => (
      <Range count={10}>
        {index => (
          <Fragment>
            <div onClick={() => set(value === index ? -1 : index)}>
              {value === index ? 'закрыть' : 'открыть'}
            </div>

            <Collapse on={value === index}>
              <Box p={40} bg='red'>
                text
              </Box>
            </Collapse>
          </Fragment>
        )}
      </Range>
    )}
  </Value>
)

import React from 'react'
import posed from 'react-pose'

const Polygon = posed.polygon({
  up: {
    points: '11 1, 1 11, 4 14, 11 7, 18 14, 21 11, 11 1',
    fill: '#6624FF',
    transition: {
      points: {
        duration: 300,
        ease: 'backOut'
      }
    }
  },
  down: {
    points: '11 8, 4 1, 1 4, 11 14, 21 4, 18 1, 11 8',
    fill: '#fff',
    transition: {
      points: {
        duration: 300,
        ease: 'backOut'
      }
    }
  }
})

const Arrow = ({ direction }) => (
  <svg
    width='24'
    height='17'
    viewBox='-1 -1 24 17'
    stroke='#6624FF'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Polygon pose={direction} />
  </svg>
)

export default Arrow

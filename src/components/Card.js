import system from 'system-components'
import theme from '../utils/theme'

const Card = system(
  {
    width: ['auto', 'auto', 808, 1104],
    m: ['0 8px 25vh 0', '0 16px 25vh 0', '0px auto 25vh'],
    boxShadow: theme.shadows
  },
  () => ({
    position: 'relative',
    overflow: 'hidden',

    backgroundColor: '#fff'
  })
)

export default Card

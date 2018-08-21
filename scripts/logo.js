const generate = require('./generate')

generate([
  {
    url: '/logo',
    fileName: 'big-logo',
    size: '1590x400'
  },
  {
    url: '/logo',
    fileName: 'small-logo',
    size: '435x435'
  }
])

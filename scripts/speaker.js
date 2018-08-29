const generate = require('./generate')
const {speakers} = require('../data/speakers.json')

generate(speakers.map((_, index) => ({
  url: `/speaker?index=${index}`,
  fileName: `speaker-${index}`,
  size: '900x500'
})))

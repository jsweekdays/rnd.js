const shadow = 'rgba(13, 8, 26, 0.3)'
export default {
  colors: {
    primary: Object.assign('#6624FF', {
      ligther: 'hsl(258, 95%, 60%)'
    }),
    secondary: '#FF3357',
    tertiary: 'rgba(101, 37, 255, 0.2);',
    // tertiary: '#F6F7FD',

    font: '#262626',
    shadow,

    background: ['#262626', '#1C1B1F']
    // background: ['hsl(255, 7%, 40%)', 'hsl(255, 7%, 45%)']
  },

  card: {
    size: ['auto', 'auto', 880, 1104],
    margin: ['0 8px 25vh 0', '0 16px 25vh 0', ' 0px auto 25vh']
  },

  shadows: [
    `8px 16px 0px ${shadow}`,
    `16px 24px 0px ${shadow}`,
    `24px 32px 0px ${shadow}`,
    `32px 48px 0px ${shadow}`
  ],

  offsets: [
    'translate(8px, 16px)',
    'translate(16px, 24px)',
    'translate(24px, 32px)',
    'translate(32px, 48px)'
  ]
}

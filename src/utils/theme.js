const shadow = 'rgba(13, 8, 26, 0.3)'

export default {
  breakpoints: [40, 52, 72].map(n => n + 'em'),
  colors: {
    primary: Object.assign('#6624FF', {
      ligther: 'hsl(258, 95%, 60%)'
    }),
    secondary: '#fd2148',
    tertiary: 'rgba(101, 37, 255, 0.2);',

    font: '#262626',
    shadow,

    background: ['#262626', '#1C1B1F']
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

module.exports = {
  pathPrefix: '/rnd.js',
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-122685084-1'
      }
    }
  ]
}

module.exports = {
  pathPrefix: '/rnd.js',
  siteMetadata: {
    title: 'RND <3 JS'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-122685084-1'
      }
    }
  ]
}

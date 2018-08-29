const handler = require('serve-handler')
const puppeteer = require('puppeteer')
const http = require('http')

const serve = (port = 5555) =>
  new Promise((resolve, reject) => {
    const server = http.createServer((request, response) => {
      return handler(request, response, {
        public: './public'
      })
    })

    server.listen(port, () => {
      resolve({
        port,
        close: () => new Promise(resolve => server.close(resolve))
      })
    })
  })

const generate = async images => {
  const { port, close } = await serve()

  const browser = await puppeteer.launch()

  await Promise.all(
    images.map(({ url, fileName, size }) =>
      browser.newPage().then(async page => {
        const [width, height] = size.split('x').map(val => Number.parseInt(val))

        await page.setViewport({ width, height, deviceScaleFactor: 2 })

        await page.goto(`http://localhost:${port}${url}`)
        await page.screenshot({ path: `./images/${fileName}.png` })
      })
    )
  )

  await browser.close()
  await close()
}

module.exports = generate

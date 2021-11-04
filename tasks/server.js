const browserSync = require('browser-sync')
const connectSSI   = require('connect-ssi');

const server = browserSync.create()

/**
 * 開発用サーバ再起動
 */
function reload (done) {
  server.reload()
  done()
}

/**
 * 開発用サーバ起動
 */
function serve (done) {
  server.init({
    server: {
      baseDir: './dist',
      middleware: [
        connectSSI({
          baseDir: './dist/',
          ext: '.html'
        })
      ]
    }
  })
  done()
}

module.exports = {
  reload,
  serve
}
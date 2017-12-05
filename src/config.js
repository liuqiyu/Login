/**
 * <p>
 *   config
 * </p>
 */

console.log(process.env.NODE_ENV)
let apiHost = ''

const Environment = process.env.NODE_ENV

if (Environment && Environment === 'development') {
  apiHost = `${location.protocol}//${location.host}/api`
  console.log(apiHost)
}

if (Environment && Environment === 'production') {
  // apiHost = 'https://api.douban.com/'
  apiHost = `${location.protocol}//${location.host}/api`
  console.log(apiHost)
}

export default {
  apiHost
}

/**
 * <p>
 *   config
 * </p>
 */

console.log(process.env.NODE_ENV)
let apiHost = ''

const Environment = process.env.NODE_ENV

if (Environment && Environment === 'development') {
  apiHost = `${location.protocol}//${location.host}`
  console.log(apiHost)
}

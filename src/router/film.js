/**
 * <p>
 *     电影路由器
 * </p>
 * @param r
 * @constructor
 */

const Film = r => require.ensure([], () => r(require('@/views/film/')), 'Film')

export default {
  path: '/Film',
  name: 'Film',
  component: Film
}

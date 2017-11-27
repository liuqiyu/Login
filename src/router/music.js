/**
 * <p>
 *     音乐路由器
 * </p>
 * @param r
 * @constructor
 */

const Music = r => require.ensure([], () => r(require('@/views/music')), 'Film')

export default {
  path: '/Music',
  name: 'Music',
  component: Music
}

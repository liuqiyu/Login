/**
 * <p>
 *     音乐路由器
 * </p>
 * @param r
 * @constructor
 */

const Read = r => require.ensure([], () => r(require('@/views/read')), 'Read')

export default {
  path: '/Read',
  name: 'Read',
  component: Read
}

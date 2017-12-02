/**
 * <p>
 *     电影路由器
 * </p>
 * @param r
 * @constructor
 */

const Film = r => require.ensure([], () => r(require('@/views/film/in_theaters')), 'Film')
const InTheaters = r => require.ensure([], () => r(require('@/views/film/in_theaters')), 'Film')

export default {
  path: '/Film',
  name: 'Film',
  component: Film,
  children: [
    {
      path: 'InTheaters',
      name: 'InTheaters',
      component: InTheaters
    }
  ]
}

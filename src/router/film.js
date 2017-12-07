/**
 * <p>
 *     电影路由器
 * </p>
 * @param r
 * @constructor
 */

const Film = r => require.ensure([], () => r(require('@/views/film/index')), 'Film')
const Search = r => require.ensure([], () => r(require('@/views/film/search')), 'Film')
const InTheaters = r => require.ensure([], () => r(require('@/views/film/inTheaters')), 'Film')
const ComingSoon = r => require.ensure([], () => r(require('@/views/film/comingSoon')), 'Film')
const Top250 = r => require.ensure([], () => r(require('@/views/film/Top250')), 'Film')

export default {
  path: '/Film',
  name: 'Film',
  component: Film,
  redirect: '/Film/InTheaters',
  children: [
    {
      path: 'Search',
      name: 'Search',
      component: Search
    },
    {
      path: 'InTheaters',
      name: 'InTheaters',
      component: InTheaters
    },
    {
      path: 'ComingSoon',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: 'Top250',
      name: 'Top250',
      component: Top250
    }
  ]
}

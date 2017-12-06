/**
 * <p
 *   电影 film
 * </p>
 */

import api from './index'

const path = {
  search: '/v2/movie/search',             // 搜索
  inTheaters: 'v2/movie/in_theaters',     // 正在热映
  comingSoon: 'v2/movie/coming_soon',     // 即将上映
  top250: 'v2/movie/top250'               // Top250
}

const search = (query, count, start) => api.get(path.search, {
  params: {
    q: query,
    count: count,
    start: start
  }
})

const inTheaters = (city, count, start) => api.get(path.inTheaters, {
  params: {
    city: city,
    count: count,
    start: start
  }
})

const comingSoon = (count, start) => api.get(path.comingSoon, {
  params: {
    count: count,
    start: start
  }
})

const top250 = (count, start) => api.get(path.top250, {
  params: {
    count: count,
    start: start
  }
})

export default {
  inTheaters,
  comingSoon,
  top250,
  search
}

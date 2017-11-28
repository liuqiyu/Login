/**
 * <p
 *   电影 film
 * </p>
 */

import api from './index'

const path = {
  inTheaters: 'v2/movie/in_theaters',     // 正在热映
  comingSoon: 'v2/movie/coming_soon',     // 即将上映
  usBox: 'v2/movie/us_box',               // 北美票房榜
  top250: 'v2/movie/top250',              // Top250
  weekly: 'v2/movie/weekly',              // 口碑榜
  newMovies: 'v2/movie/new_movies'        // 新片榜
}

const inTheaters = city => api.get(path.inTheaters, {
  params: {
    city: city
  }
})

const comingSoon = city => api.get(path.comingSoon)

const usBox = city => api.get(path.usBox)

const top250 = city => api.get(path.top250)

const weekly = city => api.get(path.weekly)

const newMovies = city => api.get(path.newMovies)

export default {
  inTheaters,
  comingSoon,
  usBox,
  top250,
  weekly,
  newMovies
}

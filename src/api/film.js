/**
 * <p
 *   电影 film
 * </p>
 */

import api from './index'

const path = {
  inTheaters: 'v2/movie/in_theaters'     // 正在热映
}

const inTheaters = city => api.get(path.inTheaters, {
  params: {
    city: city
  }
})

export default {
  inTheaters
}

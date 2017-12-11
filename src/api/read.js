/**
 * <p
 *   阅读 read
 * </p>
 */

import api from './index'

const path = {
  search: '/v2/book/search',             // 搜索
}

const search = (query, count, start) => api.get(path.search, {
  params: {
    q: query,
    count: count,
    start: start
  }
})

export default {
  search
}

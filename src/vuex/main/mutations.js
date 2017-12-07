/**
 * <p>
 *   mutations
 * </p>
 */

import iceman from './../../utils/iceman'

const mutations = {
  title_update (state, data) {
    state.title = data
  },
  content_height_update (state, data) {
    data = data || 0
    state.content_height = iceman.contentHeightComputed(data)
  }
}

export default mutations

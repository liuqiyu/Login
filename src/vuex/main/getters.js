/**
 * <p>
 *   getters
 * </p>
 */

const getters = {
  getTitle: state => {
    return state.title
  },
  getContentHeight: state => {
    return state.content_height + 'px'
  }
}

export default getters

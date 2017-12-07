/**
 * <p>
 *   iceman.js
 * </p>
 */

const contentHeightComputed = (array) => {
  console.log(array)
  let h = 0
  let data = []
  data = array

  for (let i = 0; i < data.length; i += 1) {
    try {
      const $el = document.querySelector(data[i])
      if ($el !== null) {
        console.log($el)
        console.log($el.clientHeight)
        h += $el.clientHeight
      }
    } catch (e) {
      h += parseFloat(data[i]) || 0
    }
  }

  return window.innerHeight - h
}

export default {
  contentHeightComputed
}

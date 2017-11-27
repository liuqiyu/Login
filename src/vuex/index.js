/**
 * <p>
 *   vuex
 * </p>
 */

import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film
  }
})

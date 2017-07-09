import Vue from 'vue'
import Vuex from 'vuex'
import genreClub from './modules/clubs/genres/index'
import itemClub from './modules/clubs/items/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {genreClub, itemClub}
})

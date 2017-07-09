/**
 * Created by mariustanawatsamo on 29/06/2017.
 */
import * as types from './types'
// import * as stubs from './stubs'
let state = {
  stub: [
    {'idGenreClub': 0, 'name': 'Hip-Hop'},
    {'idGenreClub': 1, 'name': 'Salsa'},
    {'idGenreClub': 2, 'name': 'Kizomba'},
    {'idGenreClub': 3, 'name': 'Coupé Décalé'}
  ],
  current: []
}
/**
 * Getters
 * @type {{}}
 */
export const getters = {
  [types.GET_GENRE_LIST]: (state) => {
    return state.stub
  },
  [types.GET_GENRE_LIST_SELECTED]: (state) => {
    return state.current
  }
}
/**
 * Mutations
 * @type {{}}
 */
export const mutations = {
  [types.MUTATION_GENRE_LIST]: (state, payload) => {
    state.stub = payload
  },
  [types.MUTATION_GENRE_LIST_SELECTED]: (state, payload) => {
    state.current = payload
  }
}
/**
 * Actions
 * @type {{}}
 */
export const actions = {
  [types.SET_GENRE_LIST]: ({commit, state}, payload) => {
    /*  filterService.getApplicationFilter(['application']).then((response) => {
     commit(types.MUTATION_SET_FILTER_APP_VALUE, response)
     }
     ) */
    commit(types.MUTATION_GENRE_LIST, payload)
  },
  [types.SET_LIST_SELECTED]: ({commit, state}, payload) => {
    commit(types.MUTATION_GENRE_LIST_SELECTED, payload)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}

/**
 * Created by mariustanawatsamo on 29/05/2017.
 */
// import * as actions from './actions'
// import * as mutations from './mutations'
// import * as getters from './getters'
import * as stub from '../../stubs/user'
import * as types from '../../types'

let state = {
  users: [],
  current: stub
}

export const getters = {
  [types.GET_USER_STATE]: state => {
    return state
  }
}
export const mutations = {
  [types.MUTATION_SET_USER]: (state, payload) => {
    state.users = payload.users
    state.current = payload.current
  }
}
export const actions = {
  [types.SET_USER]: ({commit}, payload) => {
    commit('setUserStore', payload)
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}

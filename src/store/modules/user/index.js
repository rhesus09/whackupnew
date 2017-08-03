/**
 * Created by mariustanawatsamo on 24/07/2017.
 */
import * as types from './types'

let state = {
  name: 'test',
  prenom: 'test',
  email: 'test@test.com',
  password: 'test'
}
/**
 * Getters
 * @type {{}}
 */
export const getters = {
  [types.GET_CURRENT_LOGGED_USER_NAME]: (state) => {
    return state.name
  },
  [types.GET_CURRENT_LOGGED_USER_PRENOM]: (state) => {
    return state.prenom
  },
  [types.GET_CURRENT_LOGGED_USER_EMAIL]: (state) => {
    return state.email
  },
  [types.GET_CURRENT_LOGGED_USER_PASSWORD]: (state) => {
    return state.password
  }
}
/**
 * Mutations
 * @type {{}}
 */
export const mutations = {
  [types.CHANGE_CREDENTIALS_CURRENT_USER_NAME]: (state, payload) => {
    state.name = payload
  },
  [types.CHANGE_CREDENTIALS_CURRENT_USER_PRENOM]: (state, payload) => {
    state.prenom = payload
  },
  [types.CHANGE_CREDENTIALS_CURRENT_USER_EMAIL]: (state, payload) => {
    state.email = payload
  },
  [types.CHANGE_CREDENTIALS_CURRENT_USER_PASSWORD]: (state, payload) => {
    state.password = payload
  }
}
/**
 * Actions
 * @type {{}}
 */
export const actions = {
  [types.SET_CREDENTIALS_CURRENT_USER_NAME]: ({commit, state}, payload) => {
    /*  filterService.getApplicationFilter(['application']).then((response) => {
     commit(types.MUTATION_SET_FILTER_APP_VALUE, response)
     }
     ) */
    commit(types.CHANGE_CREDENTIALS_CURRENT_USER_NAME, payload)
  },
  [types.SET_CREDENTIALS_CURRENT_USER_EMAIL]: ({commit, state}, payload) => {
    /*  filterService.getApplicationFilter(['application']).then((response) => {
     commit(types.MUTATION_SET_FILTER_APP_VALUE, response)
     }
     ) */
    commit(types.CHANGE_CREDENTIALS_CURRENT_USER_EMAIL, payload)
  },
  [types.SET_CREDENTIALS_CURRENT_USER_PRENOM]: ({commit, state}, payload) => {
    /*  filterService.getApplicationFilter(['application']).then((response) => {
     commit(types.MUTATION_SET_FILTER_APP_VALUE, response)
     }
     ) */
    commit(types.CHANGE_CREDENTIALS_CURRENT_USER_PRENOM, payload)
  },
  [types.SET_CREDENTIALS_CURRENT_USER_PASSWORD]: ({commit, state}, payload) => {
    commit(types.CHANGE_CREDENTIALS_CURRENT_USER_PASSWORD, payload)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}

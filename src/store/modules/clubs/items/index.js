/**
 * Created by mariustanawatsamo on 29/06/2017.
 */
import * as types from './types'

let state = {
  stub: [
    {
      idClub: 0,
      name: 'Djeuga',
      ownerId: 0,
      description: 'Description du Djeuga',
      capacity: 200,
      photo: 'emplacement photo1',
      adress: 'Yaoundé',
      genres: [{'idGenreClub': 0, 'name': 'Hip-Hop'}],
      website: 'test.com',
      like: 10,
      dislike: 10
    },
    {
      idClub: 1,
      name: 'LefeuSort',
      ownerId: 0,
      description: 'Description du LefeuSort',
      capacity: 400,
      photo: 'emplacement photo2',
      adress: '',
      genres: [{'idGenreClub': 0, 'name': 'Hip-Hop'}],
      website: 'lefeusort.com',
      like: 10,
      dislike: 10
    },
    {
      idClub: 2,
      name: 'saSekoi',
      ownerId: 0,
      description: 'Description du saSekoi',
      capacity: 200,
      photo: 'emplacement photo1',
      adress: 'Paris',
      genres: [{'idGenreClub': 1, 'name': 'Salsa'}],
      website: 'sasekoi.com',
      like: 10,
      dislike: 10
    }
  ]
}
/**
 * Getters
 * @type {{}}
 */
export const getters = {
  [types.GET_CLUB_ITEM]: (state) => {
    return state.stub
  },
  [types.GET_CLUB_NAME]: (state) => {
    return state.stub.name
  }
}
/**
 * Mutations
 * @type {{}}
 */
export const mutations = {
  [types.MUTATION_CLUB_ITEM]: (state, payload) => {
    state.stub = payload
  }
}
/**
 * Actions
 * @type {{}}
 */
export const actions = {
  [types.SET_CLUB_ITEM]: ({commit, state}, payload) => {
    /*  filterService.getApplicationFilter(['application']).then((response) => {
     commit(types.MUTATION_SET_FILTER_APP_VALUE, response)
     }
     ) */
    commit(types.MUTATION_CLUB_ITEM, payload)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}

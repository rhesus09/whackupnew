/**
 * Created by mariustanawatsamo on 29/06/2017.
 */
import * as types from './types'

let state = {
  stub: [
    {
      idClub: 0,
      name: 'Le Balajo',
      ownerId: 0,
      description: 'Ouvert depuis 1936, le Balajo vous accueille du Lundi au Samedi Soir pour des soirées Endiablées dans un décors Mythique !',
      capacity: 200,
      photo: 'https://static.wixstatic.com/media/630ae6_38b8f6a4a87a4ed6b678c08ca8820b79~mv2_d_2894_3004_s_4_2.jpg/v1/fill/w_278,h_276,al_c,q_80,usm_0.66_1.00_0.01/630ae6_38b8f6a4a87a4ed6b678c08ca8820b79~mv2_d_2894_3004_s_4_2.webp',
      adress: 'Yaoundé',
      genres: [{'idGenreClub': 0, 'name': 'Hip-Hop'}],
      website: 'https://www.balajo.fr/',
      like: 10,
      dislike: 10
    },
    {
      idClub: 1,
      name: 'Le Gibus',
      ownerId: 0,
      description: 'Description du LefeuSort',
      capacity: 400,
      photo: 'http://gibusclub.fr/wp-content/uploads/2016/10/LogoGibuClub-ssite-compressed.png',
      adress: '',
      genres: [{'idGenreClub': 0, 'name': 'Hip-Hop'}],
      website: 'http://www.gibus.fr/',
      like: 10,
      dislike: 10
    },
    {
      idClub: 2,
      name: 'La Taverne Médiévale',
      ownerId: 0,
      description: 'La Taverne Médiévale est devenue depuis sa création, il y a une quinzaine d\'année, un lieu emblématique, une institution du genre. Musiciens, artisants, jongleurs, cracheurs de feu, associations,  la Taverne se veut fourmillante et ouverte, que ce soit à la reconstitution historique, à l\'univers du fantastique, de l\'heroïc fantasy ou autres GN. ',
      capacity: 200,
      photo: 'https://static.wixstatic.com/media/2fa3e2_bb6daac115404a9c9b47d86cba190f8f.jpg/v1/fill/w_79,h_80,al_c,q_80,usm_0.66_1.00_0.01/2fa3e2_bb6daac115404a9c9b47d86cba190f8f.webp',
      adress: 'Paris',
      genres: [{'idGenreClub': 1, 'name': 'Salsa'}],
      website: 'sasekoi.com',
      like: 10,
      dislike: 10
    },
    {
      idClub: 3,
      name: 'Keur Samba',
      ownerId: 0,
      description: 'Lancement de la soirée TRIBAL NIGHT à partir de 22h30 au KEUR SAMBA Jeudi 5 février pour la finale de la CAN 2017 !ALI DIOUF en live aux percussions et Dj TAF + Guests',
      capacity: 200,
      photo: 'http://keursamba.com/wp-content/uploads/2015/12/LogoKS-200-1.jpg?189db0',
      adress: 'Paris',
      genres: [{'idGenreClub': 1, 'name': 'Salsa'}, {'idGenreClub': 2, 'name': 'Kizomba'}],
      website: 'http://keursamba.com/',
      like: 10,
      dislike: 10
    },
    {
      idClub: 4,
      name: 'Rex Club',
      ownerId: 0,
      description: 'Lancement de la soirée TRIBAL NIGHT à partir de 22h30 au KEUR SAMBA Jeudi 5 février pour la finale de la CAN 2017 !ALI DIOUF en live aux percussions et Dj TAF + Guests',
      capacity: 200,
      photo: 'http://rexclub.com/assets/front2/img/logo.svg',
      adress: 'Paris',
      genres: [{'idGenreClub': 4, 'name': 'Electro'}],
      website: 'http://rexclub.com/',
      like: 10,
      dislike: 10
    },
    {
      idClub: 5,
      name: 'El Globo',
      ownerId: 0,
      description: 'Lancement de la soirée TRIBAL NIGHT à partir de 22h30 au KEUR SAMBA Jeudi 5 février pour la finale de la CAN 2017 !ALI DIOUF en live aux percussions et Dj TAF + Guests',
      capacity: 200,
      photo: 'http://leglobo.fr/assets/img/logo.png',
      adress: 'Paris',
      genres: [{'idGenreClub': 1, 'name': 'Salsa'}],
      website: 'http://leglobo.fr/',
      like: 10,
      dislike: 10
    },
    {
      idClub: 5,
      name: 'L\'Arc Paris',
      ownerId: 0,
      description: 'Lancement de la soirée TRIBAL NIGHT à partir de 22h30 au KEUR SAMBA Jeudi 5 février pour la finale de la CAN 2017 !ALI DIOUF en live aux percussions et Dj TAF + Guests',
      capacity: 200,
      photo: 'http://larc-paris.com/wp-content/uploads/2017/01/Logo-Arc-Vectoriel.png',
      adress: 'Paris',
      genres: [{'idGenreClub': 2, 'name': 'Kizomba'}],
      website: 'http://larc-paris.com/wp-content/uploads/2017/01/Logo-Arc-Vectoriel.png',
      like: 10,
      dislike: 10
    },
    {
      idClub: 6,
      name: 'Bus Palladium',
      ownerId: 0,
      description: 'Lancement de la soirée TRIBAL NIGHT à partir de 22h30 au KEUR SAMBA Jeudi 5 février pour la finale de la CAN 2017 !ALI DIOUF en live aux percussions et Dj TAF + Guests',
      capacity: 200,
      photo: 'https://annuaire.laposte.fr/uploads/487/575/48757556500014/logo.jpg',
      adress: 'Paris',
      genres: [{'idGenreClub': 2, 'name': 'Kizomba'}],
      website: 'http://www.buspalladium.com/ ',
      like: 10,
      dislike: 10
    },
    {
      idClub: 7,
      name: 'Le Baron Paris',
      ownerId: 0,
      description: 'Lancement de la soirée TRIBAL NIGHT à partir de 22h30 au KEUR SAMBA Jeudi 5 février pour la finale de la CAN 2017 !ALI DIOUF en live aux percussions et Dj TAF + Guests',
      capacity: 200,
      photo: 'https://lebaronparis.fr/wp-content/uploads/2017/02/logolebaron.jpg',
      adress: 'Paris',
      genres: [{'idGenreClub': 2, 'name': 'Kizomba'}],
      website: 'https://lebaronparis.fr/',
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

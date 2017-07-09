/**
 * Created by mariustanawatsamo on 29/05/2017.
 */

export const setUserStore = (state, payload) => {
  state.users = payload.users
  state.current = payload.current
}

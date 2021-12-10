import state from './state'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

const myCustonModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

export default myCustonModule
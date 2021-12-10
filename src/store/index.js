import { createStore } from 'vuex'
import journal from '../modules/daybook/store/journal'

//* Modulos del store
const store = createStore({
  modules: {
    journal
  }
})

export default store

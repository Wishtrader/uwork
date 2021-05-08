import { createStore } from 'vuex'

export default createStore({
  state: {
    details: [
      {
        data: '28.05.2021',
        customer: 'Uwork',
        amount: 1100,
        currency: 'USD'
      },
      {
        data: '23.05.2021',
        customer: 'Periscope Media',
        amount: 2000,
        currency: 'AUD'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

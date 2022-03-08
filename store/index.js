export const state = () => ({
  loading: false,
  error: null,
  success: null,
  currentQuestion: null
})

export const mutations = ({
  setLoading (state, value) {
    state.loading = value
  },
  setError (state, value) {
    state.error = value
  },
  setCurrentQuestion (state, value) {
    state.currentQuestion = value
  }
})

export const actions = {
  errorDispatch ({ commit }, payload) {
    commit('setLoading', false)
    commit('setError', payload)
    window.setTimeout(() => {
      commit('setError', null)
    }, 10000)
  },
  loadingDispatch ({ commit }, payload) {
    commit('setLoading', payload)
  }
}

export const state = () => ({
  loading: false,
  error: null,
  success: null,
  currentQuestion: null,
  currentEmployer: null,
  sectors: ['Technology', 'Healthcare', 'Finance', 'Energy', 'Real Estate', 'Retail', 'Utilities', 'Agriculture', 'Other'],
  companySizes: ['0 - 10', '10 - 50', '50 - 100', '100 - 500', '500 - 1000', '1000+'],
  locations: ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Umm Al-Quwain', 'Fujairah', 'Ras Al Khaimah']
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

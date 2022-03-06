export const state = () => ({
  signupSection: 1,
  token: undefined
})

export const mutations = ({
  setSignupSection (state, value) {
    state.signupSection = value
  },
  setToken (state, value) {
    state.token = value
  }
})

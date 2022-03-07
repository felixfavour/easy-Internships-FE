export const state = () => ({
  signupSection: 1,
  token: null,
  user: null,
  studentSchool: null
})

export const mutations = ({
  setSignupSection (state, value) {
    state.signupSection = value
  },
  setToken (state, value) {
    state.token = value
  },
  setUser (state, value) {
    state.user = value
  },
  setStudentSchool (state, value) {
    state.studentSchool = value
  },
  logOut (state) {
    state.signupSection = 1
    state.token = null
    state.user = null
    state.studentSchool = null
  }
})

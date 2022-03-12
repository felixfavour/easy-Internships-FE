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
    const user = value
    state.user = user
    state.user.first_name = user.full_name?.split(' ')[0]?.trim()
    state.user.last_name = user.full_name.slice(user.full_name?.indexOf(' '))?.trim()
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

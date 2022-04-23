/**
 * File to build axios interceptors
 */

export default function ({ $axios, store }) {
  $axios.onError((error) => {
    const parsedError = (error.response ? error.response.data.msg : null)
    if (!parsedError.includes('EASYiNTERNSHIPS.users')) {
      store.dispatch('errorDispatch', (parsedError || error.response.data))
    }
    if (parsedError?.toLowerCase() === 'invalid authorization header') {
      window.location.pathname = `/${store.state.auth.studentSchool.username}/login`
    }
  })
  $axios.onRequest((_config) => {
    $axios.setHeader('Authorization', `Bearer ${store.state.auth.token}`)
    store.dispatch('loadingDispatch', true)
  })
  $axios.onResponse((response) => {
    store.dispatch('loadingDispatch', false)
  })
}

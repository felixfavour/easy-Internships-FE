/**
 * File to build axios interceptors
 */

export default function ({ $axios, store }) {
  $axios.onError((error) => {
    const parsedError = (error.response ? error.response.data.msg : null)
    store.dispatch('errorDispatch', (parsedError === undefined ? error.response.data : parsedError))
    if (parsedError?.toLowerCase() === 'invalid or expired jwt' || parsedError?.toLowerCase().includes('app with that secret key') || parsedError?.toLowerCase().includes('malformed jwt')) {
      window.location.pathname = '/login'
      store.dispatch('newRoute', window.location.pathname)
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

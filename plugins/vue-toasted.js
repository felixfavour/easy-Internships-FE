import Vue from 'vue'

import Toasted from 'vue-toasted'

const options = {
  duration: 10000,
  keepOnHover: true,
  action: {
    text: 'Cancel',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
}

if (process.browser) {
  Vue.use(Toasted, options)
}

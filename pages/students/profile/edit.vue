<template>
  <div class="page">
    <section>
      <div class="form-row">
        <div class="form-group">
          <input v-model="userData.first_name" type="text">
          <label for="firstName">
            First Name
          </label>
        </div>
        <div class="form-group">
          <input v-model="userData.last_name" type="text">
          <label for="lastName">
            Last Name
          </label>
        </div>
      </div>
      <div class="form-group">
        <input v-model="userData.tagline" type="text">
        <label for="tagline">
          Tagline
        </label>
      </div>
      <div class="form-group">
        <textarea v-model="userData.bio" type="text" placeholder="Favour is..." />
        <label for="name">
          Bio
        </label>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileEdit',
  layout: 'dashLayout',
  data () {
    return {
      userData: { ...this.$store.state.auth.user }
    }
  },
  computed: mapState({
    user: state => state.auth.user
  }),
  mounted () {
    this.$nuxt.$on('update-profile', () => {
      this.updateUser()
    })
  },
  methods: {
    async updateUser (type) {
      const user = await this.$axios.put(`/user/${this.$store.state.auth.user._id}`, { ...this.userData, full_name: `${this.userData.first_name} ${this.userData.last_name}` })
      this.$store.commit('auth/setUser', user.data.data)
    }
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 5%;
    max-width: 1100px;
  }
  .form-group, .form-row {
    max-width: 800px;
  }
</style>

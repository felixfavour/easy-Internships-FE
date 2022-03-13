<template>
  <div class="page">
    <section>
      <div class="form-group">
        <input v-model="password" type="password">
        <label for="password">
          Current Password
        </label>
      </div>
      <div class="form-group">
        <input v-model="newPassword" type="password">
        <label for="password">
          New Password
        </label>
      </div>
      <div class="form-group">
        <input v-model="confirmPassword" type="password">
        <label for="password">
          Confirm Password
        </label>
      </div>
      <button class="primary-btn" @click="updateUserPassword()">
        UPDATE PASSWORD
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfileSecurity',
  layout: 'dashLayout',
  data () {
    return {
      password: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    async updateUserPassword () {
      if (this.newPassword.length >= 6 && this.newPassword === this.confirmPassword) {
        await this.$axios.put(`/user/security/${this.$store.state.auth.user._id}`, {
          password: this.password,
          new_password: this.newPassword
        })
        this.$toasted.success('Password was changed successfully')
      } else {
        this.$toasted.error('Make sure passwords are similar and password is greater than 6 characters')
      }
    }
  }
}
</script>

<style scoped>
  .primary-btn {
    width: 300px;
    margin: 24px auto;
    background: #00488A;
    color: #FFFFFF;
  }
  section {
    margin-bottom: 5%;
    max-width: 1100px;
  }
  .form-group, .form-row {
    max-width: 800px;
  }
</style>

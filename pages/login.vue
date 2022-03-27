<template>
  <!-- <LargeLoader v-if="$store.state.loading && user === undefined" /> -->
  <div class="login-ctn">
    <div class="header">
      <div class="logos">
        <div class="ei-logo bg-img reveals" />
      </div>
      <div class="large-text">
        <LargeLogo />
        <div>for Universities </div>
      </div>
    </div>
    <form @submit.prevent="">
      <div class="form-group">
        <input v-model="email" type="email">
        <label for="email">
          Administrator Email
        </label>
      </div>
      <div class="form-group">
        <input v-model="password" type="password">
        <label for="password">
          Password
        </label>
      </div>
      <button :disabled="!(email.length > 4 && password.length > 4)" class="primary-btn" @click="login">
        <Loader v-if="$store.state.loading" class="mr-6" />SIGN IN
      </button>
      <div class="signup-text">
        <span>Don't have an account?</span>
        <nuxt-link to="/school/signup">
          Sign up
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'authLayout',
  data () {
    return {
      user: undefined,
      email: '',
      password: ''
    }
  },
  created () {
  },
  methods: {
    async login () {
      const res = await this.$axios.post('/auth/login', {
        email: this.email,
        password: this.password
      })
      this.$toasted.success('Login successful')
      this.$store.commit('auth/setToken', res.data.data.token)
      this.$store.commit('auth/setUser', { ...res.data.data.user, school_id: res.data.data.user_type_id })
      this.$router.push('/students')
    }
  }
}
</script>

<style scoped>
  .top-bg {
    background: var(--primary);
    height: 355px;
  }
  .login-ctn {
    width: 500px;
  }

  /* HEADER */
  .header {
    display: flex;
    margin-bottom: 5%;
  }
  .logos {
    font-weight: 800;
    color: #FFFFFF;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
  }
  .uni-logo, .ei-logo {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
  .uni-logo {
    /* background-image: url('~assets/images/sample-school.png'); */
    background-color: #FFFFFF;
    margin-right: 8px;
  }
  .ei-logo {
    background-image: url('~assets/images/Ei-logo.png');
    margin-left: 8px;
  }
  .large-text {
    padding-top: 40px;
    margin-left: 18px;
  }
  .large-text > div {
    font-size: 18px;
    line-height: 2rem;
    font-weight: 400;
    color: #FFFFFF;
  }

  /* FORM */
  form {
    width: 100%;
    background: #FFFFFF;
    padding: 32px 48px;
    border-radius: 8px;
  }
  .form-group:nth-child(1) {
    margin-top: 8px;
  }
  .primary-btn {
    margin-top: 5rem;
    width: 100%;
  }
  .signup-text {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: var(--primary);
  }
  .signup-text a {
    font-size: inherit;
    color: inherit;
    font-weight: 500;
    margin-left: 4px;
    text-decoration: underline;
  }
</style>

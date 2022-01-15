<template>
  <div class="signup-ctn">
    <div class="header">
      <div class="logos">
        <div class="ei-logo bg-img reveals" />
      </div>
      <div class="large-text">
        <LargeLogo />
        <div>for Universities</div>
      </div>
    </div>
    <form @submit.prevent="">
      <div class="form-group">
        <input type="email">
        <label for="email">
          University Email
        </label>
      </div>
      <div class="form-group">
        <input type="password">
        <label for="password">
          Password
        </label>
      </div>
      <button class="primary-btn">
        SIGN IN
      </button>
      <div class="login-text">
        <span>Already have an account?</span>
        <nuxt-link to="/middlesex/login">
          Log In
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  layout: 'authLayout'
}
</script>

<style scoped>
  .top-bg {
    background: var(--primary);
    height: 355px;
  }
  .signup-ctn {
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
    background-image: url(~assets/images/ei-logo.png);
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
  .login-text {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: var(--primary);
  }
  .login-text a {
    font-size: inherit;
    color: inherit;
    font-weight: 500;
    margin-left: 4px;
    text-decoration: underline;
  }
</style>

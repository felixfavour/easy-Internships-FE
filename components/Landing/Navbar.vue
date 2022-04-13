<template>
  <div class="container">
    <div class="logos">
      <div class="icon-logo" />
      <div class="text-logo" />
    </div>
    <div class="actions">
      <nuxt-link class="login-btn" to="/mdx/login">
        Login
      </nuxt-link>
      <nuxt-link class="start-btn" to="#parties">
        Get Started
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  a {
    width: 100px;
    height: 45px;
    display: grid;
    place-items: center;
    text-align: center;
    font-weight: 600;
    border-radius: 4px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0;
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
  }
  .logos {
    display: flex;
  }
  .icon-logo {
    height: 50px;
    width: 50px;
    background: url(~assets/images/Ei-logo.png);
  }
  .text-logo {
    height: 50px;
    width: 330px;
    background: url(~assets/images/text-logo.png) no-repeat center;
    margin-left: 12px;
  }
  .actions {
    display: flex;
  }
  .login-btn {
    border: 1px solid var(--primary);
    color: var(--primary);
  }
  .start-btn {
    width: 150px;
    background: var(--primary);
    margin-left: 8px;
    color: #FFFFFF;
  }
</style>

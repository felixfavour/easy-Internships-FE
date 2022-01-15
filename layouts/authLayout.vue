<template>
  <div class="auth-ctn page">
    <div class="top-bg section">
      <div class="inner">
        <div class="text-1">
          We're making sure you <br>
          <span>never settle</span> for less.
        </div>
        <div class="text-2">
          Find the best employees and employers <br>
          Be the best employee or employer
        </div>
        <div v-show="$route.name.includes('signup')" class="actions come-down-sm">
          <button class="primary-btn uni-btn">
            University
          </button>
          <button class="primary-btn employer-btn">
            Employer
          </button>
        </div>
      </div>
    </div>
    <div class="bottom-bg bg-img school-login" />
    <div class="page-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  layout: 'noAuth'
}
</script>

<style scoped>
  .top-bg {
    background: var(--primary);
    height: 355px;
    padding-top: 4rem;
  }
  .bottom-bg {
    height: calc(100vh - 355px);
    background-image: url(~assets/images/school-login-bg.png);
  }
  .page-content {
    position: absolute;
    max-width: 500px;
    top: 4rem;
    right: 10%;
  }
  .text-1 {
    font-size: 2.2rem;
    color: #FFFFFF;
    line-height: 3rem;
    margin-bottom: 12px;
    font-weight: 700;
  }
  .text-1 > span {
    color: var(--primary-dark);
    font-weight: inherit;
  }
  .text-2 {
    font-size: 1.2rem;
    color: #FFFFFF;
    line-height: 2rem;
    font-weight: 400;
  }
  .top-bg .actions {
    display: flex;
    margin-top: 20px;
  }
  .uni-btn {
    background: #FFFFFF;
    color: var(--primary);
    border: 1px solid #FFFFFF;
  }
  .employer-btn {
    background: var(--primary);
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    margin-left: 12px;
  }
</style>

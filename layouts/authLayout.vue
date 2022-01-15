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
          <nuxt-link
            v-show="section === 1"
            to="/school/signup"
            :class="{'primary-btn uni-btn': true, 'active-btn': $route.name.includes('school')}"
          >
            University
          </nuxt-link>
          <nuxt-link
            v-show="section === 1"
            to="/employer/signup"
            :class="{'primary-btn employer-btn': true, 'active-btn': $route.name.includes('employer')}"
          >
            Employer
          </nuxt-link>
          <button v-show="section > 1" class="primary-btn uni-btn" @click="goBack">
            Go Back
          </button>
        </div>
      </div>
    </div>
    <div v-show="$route.name.includes('login')" class="bottom-bg bg-img school-login fade-in" />
    <div v-show="$route.name === 'school-signup'" class="bottom-bg bg-img school-signup fade-in" />
    <div v-show="$route.name === 'employer-signup'" class="bottom-bg bg-img employer fade-in" />
    <div class="page-content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AuthLayout',
  layout: 'noAuth',
  computed: {
    ...mapState({
      section: state => state.auth.signupSection
    })
  },
  created () {
    this.$nuxt.$on('signup-section', (data) => {
      this.section = data
    })
  },
  methods: {
    goBack () {
      this.$store.commit('auth/setSignupSection', this.section - 1)
    }
  }
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
  }
  .bottom-bg.school-login {
    background-image: url(~assets/images/school-login-bg.png);
  }
  .bottom-bg.school-signup {
    background-image: url(~assets/images/school-signup-bg.png);
  }
  .bottom-bg.employer {
    background-image: url(~assets/images/employer-bg.png);
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
  .active-btn {
    background: #FFFFFF;
    color: var(--primary);
  }
  .uni-btn {
    border: 1px solid #FFFFFF;
    font-weight: 500;
    font-size: 1rem;
  }
  .employer-btn {
    border: 1px solid #FFFFFF;
    margin-left: 12px;
    font-weight: 500;
    font-size: 1rem;
  }

  @media screen and (max-width: 1400px) {
    .page-content {
      top: 2rem;
    }
    .top-bg {
      padding-top: 3rem;
    }
  }
</style>

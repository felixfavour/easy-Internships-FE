<template>
  <div class="signup-ctn">
    <div class="header">
      <div class="logos">
        <div class="ei-logo bg-img reveals" />
      </div>
      <div class="large-text">
        <LargeLogo />
        <div>for Employers</div>
      </div>
    </div>
    <form @submit.prevent="">
      <section v-show="section === 1">
        <div class="form-group">
          <input type="email">
          <label for="email">
            Administrator Email
          </label>
        </div>
        <div class="form-group">
          <input type="password">
          <label for="password">
            Password
          </label>
        </div>
        <div class="form-group">
          <input type="text">
          <label for="name">
            Company Name
          </label>
        </div>
        <div class="form-group">
          <input type="text">
          <label for="website">
            Company Website
          </label>
        </div>
      </section>
      <section v-show="section === 2">
        <div class="form-group">
          <div class="tel-flex">
            <img src="~assets/images/uae-flag.png" alt="">
            <span>+971</span>
          </div>
          <input type="number">
          <label for="phone">
            Company Phone
          </label>
        </div>
        <div class="form-group">
          <select id="location" name="location">
            <option value="Abu Dhabi">
              Abu Dhabi
            </option>
            <option value="Dubai">
              Dubai
            </option>
            <option value="Sharjah">
              Sharjah
            </option>
            <option value="Ajman">
              Ajman
            </option>
            <option value="Umm Al-Quwain">
              Umm Al-Quwain
            </option>
            <option value="Fujairah">
              Fujairah
            </option>
            <option value="Ras Al Khaimah">
              Ras Al Khaimah
            </option>
          </select>
          <label for="location">
            Company Location
          </label>
          <IconArrowDown class="icon" />
        </div>
      </section>
      <section v-show="section === 3">
        <!-- LOGO UPLOAD -->
        <div class="form-group">
          <label for="name" class="image">
            <input type="file" @input="logo = $event.target.files[0]">
            Company Logo
          </label>
          <label for="name">
            Company Logo
          </label>
        </div>
        <div v-if="logo !== null" class="img-preview bg-img" :style="`background-image: url(${getURL(logo)})`" />
        <!-- ICON UPLOAD -->
        <div class="form-group">
          <label for="name" class="image">
            <input type="file" @input="icon = $event.target.files[0]">
            Company Icon
          </label>
          <label for="name">
            Company Icon
          </label>
        </div>
        <div v-if="icon !== null" class="icon-preview bg-img" :style="`background-image: url(${getURL(icon)})`" />
      </section>
      <section v-show="section === 4">
        <div class="form-group">
          <select id="sector" name="sector">
            <option value="Finance">
              Finance
            </option>
            <option value="Technology">
              Technology
            </option>
            <option value="Marketing">
              Marketing
            </option>
            <option value="Advertising &amp; Media">
              Advertising &amp; Media
            </option>
          </select>
          <label for="sector">
            Company Sector
          </label>
          <IconArrowDown class="icon" />
        </div>
        <div class="form-group">
          <select id="size" name="size">
            <option value="0 - 10">
              0 - 10
            </option>
            <option value="10 - 20">
              10 - 20
            </option>
            <option value="20 - 50">
              20 - 50
            </option>
            <option value="50 - 300">
              50 - 300
            </option>
            <option value="over 300">
              300+
            </option>
          </select>
          <label for="size">
            Company Size (Employees)
          </label>
          <IconArrowDown class="icon" />
        </div>
        <div class="form-group">
          <textarea type="text" placeholder="My Company is a..." />
          <label for="name">
            About Company
          </label>
        </div>
      </section>
      <button class="primary-btn" @click="nextButtonAction">
        {{ signUpText }}
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
import { mapState } from 'vuex'
export default {
  name: 'SignupPage',
  layout: 'authLayout',
  data () {
    return {
      logo: null,
      icon: null
    }
  },
  computed: {
    ...mapState({
      section: state => state.auth.signupSection
    }),
    signUpText () {
      if (this.section === 4) {
        return 'SIGN UP'
      }
      return 'PROCEED'
    }
  },
  methods: {
    nextButtonAction () {
      if (this.section < 4) {
        this.$store.commit('auth/setSignupSection', this.section + 1)
      }
    },
    getURL (file) {
      return URL.createObjectURL(file)
    },
    signUpAction () {}
  }
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
  .img-preview {
    margin-top: 12px;
    width: 100%;
    height: 100px;
    background-size: contain;
  }
  .icon-preview {
    margin-top: 12px;
    width: 80px;
    height: 80px;
    background-image: url(~assets/images/school-full-logo.png);
  }

  /* FORM GROUP */

  /* MEDIA QUERIES */
  @media screen and (max-width: 1400px) {
    form {
      padding: 20px 38px;
    }
    .primary-btn {
      margin-top: 2rem;
    }
  }
</style>

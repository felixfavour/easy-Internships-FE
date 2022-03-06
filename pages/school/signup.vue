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
      <section v-show="section === 1">
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
        <div class="form-group">
          <input v-model="fullName" type="text">
          <label for="name">
            University Name
          </label>
        </div>
        <div class="form-group">
          <input v-model="username" type="text">
          <label for="username">
            University username
          </label>
        </div>
      </section>
      <section v-show="section === 2">
        <div class="form-group">
          <div class="tel-flex">
            <img src="~assets/images/uae-flag.png" alt="">
            <span>+971</span>
          </div>
          <input v-model="phone" type="number">
          <label for="phone">
            University Phone
          </label>
        </div>
        <div class="form-group">
          <input v-model="website" type="text">
          <label for="website">
            University Website
          </label>
        </div>
        <div class="form-group">
          <select id="location" v-model="location" name="location">
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
            University Location
          </label>
          <IconArrowDown class="icon" />
        </div>
      </section>
      <section v-show="section === 3">
        <!-- LOGO UPLOAD -->
        <div class="form-group">
          <label for="name" class="image">
            <input type="file" @input="logo = $event.target.files[0]; uploadImage($event.target.files[0], 'logo')">
            University Logo
          </label>
          <label for="name">
            University Logo
          </label>
        </div>
        <Loader v-if="$store.state.loading && loading === 'logo'" class="mr-6" />
        <div v-else-if="logo !== null && !$store.state.loading" class="img-preview bg-img" :style="`background-image: url(${getURL(logo)})`" />
        <!-- ICON UPLOAD -->
        <div class="form-group">
          <label for="name" class="image">
            <input type="file" @input="icon = $event.target.files[0]; uploadImage($event.target.files[0], 'icon')">
            University Icon
          </label>
          <label for="name">
            University Icon
          </label>
        </div>
        <Loader v-if="$store.state.loading && loading === 'icon'" class="mr-6" />
        <div v-else-if="icon !== null && !$store.state.loading" class="icon-preview bg-img" :style="`background-image: url(${getURL(icon)})`" />
      </section>
      <button class="primary-btn" @click="nextButtonAction">
        <Loader v-if="$store.state.loading && loading === 'signup'" class="mr-6" />{{ signUpText }}
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
      fullName: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      location: 'Dubai',
      website: '',
      tagline: '',
      avatar: '',
      bio: '',
      logo: null,
      logoUrl: '',
      icon: null,
      iconUrl: '',
      loading: ''
    }
  },
  computed: {
    ...mapState({
      section: state => state.auth.signupSection
    }),
    signUpText () {
      if (this.section === 3) {
        return 'SIGN UP'
      }
      return 'PROCEED'
    }
  },
  methods: {
    nextButtonAction () {
      if (this.section < 3) {
        this.$store.commit('auth/setSignupSection', this.section + 1)
      } else {
        this.signUpAction()
      }
    },
    getURL (file) {
      return URL.createObjectURL(file)
    },
    async uploadImage (file, type) {
      const fd = new FormData()
      fd.append('file', file)
      this.loading = type
      const result = await this.$axios.post('/file', fd)
      if (type === 'icon') {
        this.iconUrl = result.data.data.Location
      } else {
        this.logoUrl = result.data.data.Location
      }
    },
    async signUpAction () {
      this.loading = 'signup'
      await this.$axios.post('/auth/signup', {
        full_name: this.fullName,
        email: this.email,
        username: this.username,
        password: this.password,
        type: 'school',
        phone: this.phone,
        location: this.location,
        website: this.website,
        tagline: this.tagline,
        avatar: this.logoUrl,
        icon: this.iconUrl,
        bio: this.bio
      })
      this.$toasted.success('You have successfully signed up, Now Sign in.')
    }
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
    background-image: url('~assets/images/Ei-logo.png');
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
    background-image: url('~assets/images/school-full-logo.png');
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

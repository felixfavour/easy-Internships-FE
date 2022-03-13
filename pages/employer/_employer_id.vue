<template>
  <!-- THIS IS A LAYOUT-PAGE WITH NESTED PAGES -->
  <!-- <LargeLoader v-if="$store.state.loading" class="mt-half" /> -->
  <div class="employer-layout">
    <section v-if="!$route.name.includes('question_id')">
      <EmployerBanner
        v-if="employer.user"
        :employer="employer"
      />
      <div class="section">
        <div class="inner">
          <div class="tab-group">
            <nuxt-link :to="`/employer/${employer._id}/about`" :class="['primary-btn', ($route.name.includes('about') ? 'active' : '')]">
              About
            </nuxt-link>
            <nuxt-link :to="`/employer/${employer._id}/reviews`" :class="['primary-btn', ($route.name.includes('reviews') ? 'active' : '')]">
              Reviews ({{ reviews.length }})
            </nuxt-link>
            <nuxt-link :to="`/employer/${employer._id}/salaries`" :class="['primary-btn', ($route.name.includes('salaries') ? 'active' : '')]">
              Salaries ({{ salaries.length }})
            </nuxt-link>
            <nuxt-link :to="`/employer/${employer._id}/roles`" :class="['primary-btn', ($route.name.includes('roles') ? 'active' : '')]">
              Roles ({{ roles.length }})
            </nuxt-link>
            <nuxt-link :to="`/employer/${employer._id}/ask`" :class="['primary-btn', ($route.name.includes('ask') ? 'active' : '')]">
              Ask Company
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <NuxtChild
      v-if="employer.user"
      :employer="employer"
      :salaries="salaries"
      :reviews="reviews"
      :roles="roles"
      :questions="questions"
      :answers="answers"
      :employer-answers="employerAnswers"
    />
  </div>
</template>

<script>
export default {
  name: 'EmployerDetails',
  layout: 'dashLayout',
  data () {
    return {
      employer: {},
      reviews: [],
      salaries: [],
      roles: [],
      questions: [],
      answers: [],
      employerAnswers: [],
      loading: 'all'
    }
  },
  watch: {
    $route (val) {
      if (val.name.includes('question')) {
        this.getAnswers()
      } else {
        this.answers = []
        this.employerAnswers = []
      }
    }
  },
  created () {
    this.getEmployer()
    this.getReviews()
    this.getRoles()
    this.getSalaries()
    this.getQuestions()
    this.getAnswers()
  },
  mounted () {
    // REFRESH DATA
    this.$nuxt.$on('refresh-employer', (type) => {
      switch (type) {
        case 'QUESTION-ASK':
          this.getQuestions()
          break
        case 'QUESTION-ANSWER':
          this.getAnswers()
          break
        case 'EMPLOYER':
          this.getEmployer()
          break
      }
    })

    // RECORD USER VISIT
    const user = this.$store.state.auth.user
    this.addVisit(user)
  },
  methods: {
    async addVisit (user) {
      // Only add user visit when user viewing is not user logged in.
      if (user?._id !== this.employer.user_id) {
        await this.$axios.post('/user/visit', {
          user_id: this.$store.state.auth.user._id,
          visited_user: this.employer.user_id,
          visited_user_type: 'employer'
        })
      }
    },
    async getEmployer () {
      const employer = await this.$axios.get(`/employer/${this.$route.params.employer_id}`)
      this.employer = employer.data.data
      this.loading = ''
    },
    async getReviews () {
      const reviews = await this.$axios.get(`/employer/${this.$route.params.employer_id}/review`)
      this.reviews = reviews.data.data
    },
    async getSalaries () {
      const reviews = await this.$axios.get(`/employer/${this.$route.params.employer_id}/salary`)
      this.salaries = reviews.data.data
    },
    async getRoles () {
      const reviews = await this.$axios.get(`/employer/${this.$route.params.employer_id}/role`)
      this.roles = reviews.data.data
    },
    async getQuestions () {
      const reviews = await this.$axios.get(`/employer/${this.$route.params.employer_id}/question`)
      this.questions = reviews.data.data.reverse()
    },
    async getAnswers () {
      const answers = await this.$axios.get(`/employer/question/${this.$route.params.question_id}/answer`)
      answers.data.data.sort((a, b) => {
        return a.user_id > b.user_id ? 1 : -1
      })
      this.employerAnswers = [...answers.data.data].slice(0, 1)
      this.answers = [...answers.data.data].slice(1).reverse()
    }
  }
}
</script>

<style scoped>
  .tab-group {
    display: flex;
    overflow-x: auto;
  }
  .tab-group a {
    margin-right: 1.5rem;
    background: #FFFFFF;
    color: var(--primary-dark);
  }
  .tab-group a.active, .tab-group a:hover {
    margin-right: 1.5rem;
    background: #FFFFFF;
    background: var(--primary-light);
    color: var(--primary-dark);
  }
</style>

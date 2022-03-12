<template>
  <div class="employer-details">
    <div class="section">
      <div class="inner">
        <section>
          <div class="header">
            Ask Google Inc.
          </div>
          <div class="reviews-list">
            <div class="form-group">
              <input v-model="questionTitle" type="text" placeholder="Give a concise question header">
            </div>
            <div class="form-group">
              <textarea v-model="questionText" placeholder="Tell us more about your question" />
              <button :disabled="!(questionText !== '' && questionTitle !== '')" class="primary-btn come-down-sm" @click="askQuestion">
                Ask Away
                <Loader v-if="$store.state.loading" class="mr-6" />
                <IconSend v-else class="btn-icon" />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div class="header">
            Questions Asked ({{ questions.length }})
          </div>
          <div class="reviews-list">
            <QuestionCard v-for="question in questions" :key="question._id" :question="question" />
          </div>
          <button v-if="questions.length > 4" class="clear-btn">
            View More Questions
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AskCompany',
  layout: 'dashLayout',
  props: {
    questions: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      questionTitle: '',
      questionText: ''
    }
  },
  methods: {
    async askQuestion () {
      await this.$axios.post('/employer/question', {
        user_id: this.$store.state.auth.user._id,
        employer_id: this.$route.params.employer_id,
        title: this.questionTitle,
        body: this.questionText,
        votes: 0,
        user_voted: false,
        answers: 0,
        answered: false
      })
      this.$nuxt.refresh()
    }
  }
}
</script>

<style scoped>
  input {
    padding: 0 24px;
  }
  .clear-btn {
    margin-top: 12px;
    width: 100%;
  }
  .form-group .primary-btn {
    position: absolute;
    top: auto;
    bottom: 8px;
    right: 8px;
  }
  .btn-icon {
    margin-left: 8px;
  }
  section {
    margin-bottom: 5%;
    max-width: 1100px;
  }
  .header {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
</style>

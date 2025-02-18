<template>
  <!-- THIS IS A LAYOUT-PAGE WITH NESTED PAGES -->
  <div v-if="question !== null" class="employer-layout">
    <div class="question-banner">
      <!-- <LargeLoader v-if="questionLoading" /> -->
      <QuestionCard :question="question" :question-page="true" @refresh="getQuestion" />
    </div>
    <div class="section">
      <div class="inner">
        <section>
          <div class="header">
            Answers ({{ answers.length }})
          </div>
          <div class="reviews-list">
            <AnswerCard v-for="answer in employerAnswersData" :key="answer._id" :answer="answer" :original="answer.user_id === $route.params.employer_id" />
            <AnswerCard v-for="answer in answersData" :key="answer._id" :answer="answer" :original="answer.user_id === $route.params.employer_id" />
          </div>
        </section>
        <section id="answer">
          <div v-if="answers.length === 0" class="header">
            Be the first to answer this question
          </div>
          <div v-else class="header">
            Your Answer
          </div>
          <div class="form-group">
            <textarea v-model="answerContent" placeholder="I want to know..." />
            <button :disabled="!(answerContent !== '')" class="primary-btn come-down-sm" @click="addAnswer">
              Answer
              <Loader v-if="answerSending" class="mr-6" />
              <IconSend v-else class="btn-icon" />
            </button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployerDetails',
  layout: 'dashLayout',
  props: {
    employerAnswers: {
      type: Array,
      default: () => []
    },
    answers: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      question: this.$store.state.currentQuestion,
      answersData: this.answers,
      employerAnswersData: this.employerAnswers,
      answerContent: '',
      count: 0,
      questionLoading: false,
      answerSending: false
    }
  },
  created () {
    this.getQuestion()
    const app = this
    this.$nuxt.$on('refresh-answers', () => {
      app.getAnswers()
    })
  },
  methods: {
    async getQuestion () {
      this.questionLoading = true
      const question = await this.$axios.get(`/employer/question/${this.$route.params.question_id}`)
      this.question = question.data.data
      this.questionLoading = false
    },
    async addAnswer () {
      this.answerSending = true
      await this.$axios.post('/employer/answer', {
        user_id: this.$store.state.auth.user._id,
        user_name: this.$store.state.auth.user.full_name,
        user_tagline: this.$store.state.auth.user.tagline || '',
        question_id: this.$route.params.question_id,
        employer_id: this.$route.params.employer_id,
        title: undefined,
        body: this.answerContent,
        votes: 0,
        user_voted: false
      })
      this.answerSending = false
      this.$nuxt.$emit('refresh-employer', 'QUESTION-ANSWER')
    },
    async getAnswers () {
      const answers = await this.$axios.get(`/employer/question/${this.$route.params.question_id}/answer`)
      answers.data.data.sort((a, b) => {
        return a.user_id > b.user_id ? 1 : -1
      })
      this.employerAnswersData = [...answers.data.data].slice(0, 1)
      this.answersData = [...answers.data.data].slice(1).reverse()
    }
  }
}
</script>

<style scoped>
  .question-banner {
    background: #E5E5E580;
    padding: 2% 5%;
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
  .form-group .primary-btn {
    position: absolute;
    top: auto;
    bottom: 8px;
    right: 8px;
  }
  .btn-icon {
    margin-left: 8px;
  }
</style>

<template>
  <div class="employer-details">
    <div class="section">
      <div class="inner">
        <section>
          <div class="header">
            Questions Asked ({{ questions.length }})
          </div>
          <LargeLoader v-if="$store.state.loading" />
          <EmptyState v-else-if="!$store.state.loading && questions.length <= 0" text="You have been asked no questions" />
          <div class="reviews-list">
            <QuestionCard v-for="question in questions" :key="question._id" :question="question" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AskCompany',
  layout: 'dashLayout',
  data () {
    return {
      questionTitle: '',
      questionText: '',
      questions: []
    }
  },
  created () {
    this.getQuestions()
  },
  methods: {
    async getQuestions () {
      const reviews = await this.$axios.get(`/employer/${this.$store.state.auth.user.employer_id}/question`)
      this.questions = reviews.data.data.reverse()
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

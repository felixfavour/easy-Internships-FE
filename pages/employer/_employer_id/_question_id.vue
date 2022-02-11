<template>
  <!-- THIS IS A LAYOUT-PAGE WITH NESTED PAGES -->
  <div class="employer-layout">
    <div class="question-banner">
      <QuestionCard />
    </div>
    <div class="section">
      <div class="inner">
        <section>
          <div class="header">
            Answers (25)
          </div>
          <div class="reviews-list">
            <AnswerCard :original="true" />
            <AnswerCard />
            <AnswerCard />
            <AnswerCard />
          </div>
        </section>
        <section id="answer">
          <div class="header">
            Your Answer
          </div>
          <div class="form-group">
            <textarea v-model="question" placeholder="I want to know..." />
            <button v-show="question !== ''" class="primary-btn come-down-sm">
              Ask Away <IconSend class="btn-icon" />
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
  data () {
    return {
      question: ''
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

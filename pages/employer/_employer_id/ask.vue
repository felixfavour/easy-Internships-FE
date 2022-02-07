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
              <textarea v-model="question" placeholder="I want to know..." />
              <button v-show="question !== ''" class="primary-btn come-down-sm">
                Ask Away <IconSend class="btn-icon" />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div class="header">
            Questions Asked (20)
          </div>
          <div class="reviews-list">
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
            <QuestionCard />
          </div>
          <button class="clear-btn">
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
  data () {
    return {
      question: ''
    }
  }
}
</script>

<style scoped>
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

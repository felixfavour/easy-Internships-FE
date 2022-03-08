<template>
  <div class="question-card">
    <div class="votes">
      <button class="clear-btn">
        <IconUpvote :filled="true" />
        <!-- <IconUpvote /> -->
      </button>
      <span>
        {{ question.votes }}
      </span>
      <button class="clear-btn">
        <!-- <IconDownvote :filled="true" /> -->
        <IconDownvote />
      </button>
    </div>
    <div class="main">
      <div class="row row-1">
        <div class="main">
          <div class="text-main">
            {{ question.title }}
          </div>
          <div class="text-sub">
            asked on {{ formatDate(question.createdAt) }}
          </div>
        </div>
      </div>
      <p class="row row-2">
        {{ question.body }}
      </p>
      <div class="row row-3">
        <nuxt-link to="/employer/id/question#answer" class="primary-btn">
          Add Answer
        </nuxt-link>
        <nuxt-link v-if="!$route.name.includes('question_id') && question.answers > 0" to="/employer/id/question" class="primary-btn outlined">
          See {{ question.answers }} {{ question.answers === 1 ? 'Answer' : 'Answers' }}
          <IconArrowRight class="icon" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
  props: {
    question: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    formatDate (dateString) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const date = new Date(dateString)
      const month = months[date.getMonth()]
      return `${month} ${date.getDay()}, ${date.getFullYear()}`
    }
  }
}
</script>

<style scoped>
  .clear-btn {
    height: 35px;
    min-width: 45px;
    display: grid;
    place-items: center;
  }
  .question-card {
    padding: 28px;
    background: #FFFFFF;
    box-shadow: 0px 1px 5px 2px rgba(0, 123, 236, 0.15);
    border-radius: 8px;
    margin-bottom: 1.2rem;
    display: flex;
  }
  .votes {
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    color: #007BEC;
  }
  .row-1 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .text-main {
    color: #007BEC;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .text-sub {
    color: #00000070;
    font-size: 0.85rem;
    margin-top: 3px;
  }
  .rating {
    font-weight: 900;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #007BEC;
  }

  /* ROW 2 */
  .row-2 {
    font-size: 0.9rem;
    line-height: 1.4rem;
    margin: 1rem 0;
  }

  /* ROW 3 */
  .row-3 {
    display: flex;
  }
  .primary-btn {
    margin-right: 12px;
    height: 40px;
    padding: 6px 12px;
    border-radius: 30px;
    color: #FFFFFF;
  }
  .primary-btn.outlined {
    display: flex;
    justify-content: space-around;
    margin-right: 12px;
    height: 40px;
    padding: 6px 18px;
    background: #FFFFFF;
    border: 1px solid #007BEC;
    border-radius: 30px;
    width: 170px;
    color: #007BEC;
  }
</style>

<template>
  <div :class="['question-card', original ? 'bordered' : '']">
    <div v-if="!original" class="votes">
      <button
        :disabled="voted === 'upvote' || answer.user_voted === 'upvote'"
        class="clear-btn"
        @click="voteAnswer('upvote')"
      >
        <IconUpvote :filled="voted || answer.user_voted === 'upvote'" />
      </button>
      <span>
        {{ voteCount || answer.votes }}
      </span>
      <button
        :disabled="voted === 'downvote' || answer.user_voted === 'downvote'"
        class="clear-btn"
        @click="voteAnswer('downvote')"
      >
        <IconDownvote :filled="voted || answer.user_voted === 'downvote'" />
      </button>
    </div>
    <div class="main">
      <div class="row row-1">
        <div class="main">
          <div class="text-main">
            {{ answer.user_name }} - {{ answer.user_tagline }}
          </div>
          <div class="text-sub">
            <IconPersonCheck v-if="original" class="icon" />
            answered on {{ formatDate(answer.createdAt) }}
          </div>
        </div>
      </div>
      <p class="row row-2">
        {{ answer.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerCard',
  props: {
    answer: {
      type: Object,
      default: () => {}
    },
    original: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      voted: null,
      voteCount: null
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
    },
    async voteAnswer (type) {
      await this.$axios.post(`/employer/answer/${this.answer._id}/vote`, {
        user_id: this.$store.state.auth.user._id,
        type
      })
      this.$emit('refresh')
      this.$nuxt.$emit('refresh-answers')
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
  .bordered {
    border: 1px solid #007BEC;
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
    display: flex;
    align-items: center;
  }
  .text-sub > .icon {
    margin-right: 6px;
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

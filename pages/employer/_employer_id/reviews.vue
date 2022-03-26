<template>
  <div class="employer-details">
    <div class="section">
      <div class="inner">
        <section>
          <div class="header">
            Reviews
            <button class="clear-btn" @click="addReviewVisible = true">
              + Add Your Review
            </button>
          </div>
          <div class="reviews-list">
            <ReviewCard v-for="review in reviews" :key="review._id" :review="review" />
          </div>
        </section>
      </div>
    </div>
    <ModalAddReview v-if="addReviewVisible" :employer="employer" @close-modal="addReviewVisible = false" />
  </div>
</template>

<script>
export default {
  name: 'EmployerReviews',
  layout: 'dashLayout',
  props: {
    employer: {
      type: Object,
      default: () => {}
    },
    reviews: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      addReviewVisible: false
    }
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 5%;
    max-width: 1100px;
  }
  .header {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .clear-btn {
    color: var(--primary);
  }
</style>

<template>
  <div class="employer-details">
    <div class="section">
      <div class="inner">
        <section>
          <div class="header">
            Reviews
          </div>
          <div class="reviews-list">
            <ReviewCard v-for="review in reviews" :key="review._id" :review="review" />
          </div>
        </section>
      </div>
    </div>
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
  }
</style>

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
          <div class="row row-3">
            <button v-for="tag in tags" :key="tag" :class="['chip-btn', selectedTags.includes(tag) ? 'active' : '']" @click="addTag(tag)">
              {{ tag }}
            </button>
          </div>
          <div class="reviews-list">
            <ReviewCard v-for="review in reviewsCopy" :key="review._id" :review="review" />
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
      addReviewVisible: false,
      selectedTags: [],
      reviewsCopy: [...this.reviews],
      tags: [...this.$store.state.reviewTags]
    }
  },
  watch: {
    selectedTags (val) {
      if (val.length === 0) {
        this.reviewsCopy = [...this.reviews]
      } else {
        this.reviewsCopy = []
        for (const review of this.reviews) {
          for (const tag of this.selectedTags) {
            if (review.tags.includes(tag)) {
              this.reviewsCopy.push(review)
              break
            }
          }
        }
      }
    }
  },
  methods: {
    addTag (tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag)
      } else {
        this.selectedTags.push(tag)
      }
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

  /* ROW 3 */
  .row-3 {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }
  .chip-btn {
    margin-right: 12px;
    height: 30px;
    display: grid;
    place-items: center;
    padding: 6px 12px;
    background: #FFFFFF;
    border: 1px solid var(--primary-dark);
    border-radius: 30px;
    color: var(--primary-dark);
  }
  .chip-btn:active, .chip-btn.active {
    background: var(--primary-dark);
    color: #FFFFFF;
  }
</style>

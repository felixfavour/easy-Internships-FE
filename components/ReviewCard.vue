<template>
  <div class="review-card">
    <div class="row row-1">
      <div class="main">
        <div class="text-main">
          {{ review.title }}
        </div>
        <div class="text-sub">
          {{ review.reviewer_name }} - {{ review.user_tagline }}
        </div>
      </div>
      <div class="rating">
        <h2 class="count">
          {{ review.rating }}/5
        </h2>
        <IconStarRating :rating="review.rating" :brackets="false" />
      </div>
    </div>
    <p class="row row-2">
      {{ review.body }}
    </p>
    <div class="row row-3">
      <button v-for="tag in review.tags" :key="tag" class="chip-btn">
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard',
  props: {
    review: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .review-card {
    padding: 28px;
    background: #FFFFFF;
    box-shadow: 0px 1px 5px 2px rgba(0, 123, 236, 0.15);
    border-radius: 8px;
    margin-bottom: 1.2rem;
  }
  .row-1 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .text-main {
    color: #00407B;
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
    color: #00407B;
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
  .chip-btn {
    margin-right: 12px;
    height: 30px;
    display: grid;
    place-items: center;
    padding: 6px 12px;
    background: #FFFFFF;
    border: 1px solid #AAABAC;
    border-radius: 30px;
    color: #6F6F6F;
  }
</style>

<template>
  <div class="star-rating">
    <Star v-for="index in approxRating" :key="`filled-${index}`" />
    <Star v-for="index in 5 - approxRating" :key="`outlined-${index}`" :outlined="true" />
    <span>
      ({{ rating }})
    </span>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    approxRating () {
      const rating = Number(this.rating)
      return Math.round(rating)
    }
  }
}
</script>

<style scoped>
  .star-rating {
    display: flex;
    align-items: center;
  }
  .star-rating > span {
    color: var(--green);
    font-size: 0.75rem;
  }
</style>

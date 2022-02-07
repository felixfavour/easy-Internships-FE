<template>
  <div class="star-rating">
    <IconStar v-for="index in approxRating" :key="`filled-${index}`" />
    <IconStar v-for="index in 5 - approxRating" :key="`outlined-${index}`" :outlined="true" />
    <span v-if="brackets">
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
    },
    brackets: {
      type: Boolean,
      default: () => true
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

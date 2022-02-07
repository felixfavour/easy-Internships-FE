<template>
  <svg
    v-if="filled"
    width="29"
    height="25"
    viewBox="0 0 29 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="inverse"
  >
    <path d="M13.5 1L1 24H27.5L13.5 1Z" fill="#007BEC" stroke="#007BEC" stroke-width="2" stroke-linejoin="round" />
  </svg>
  <svg
    v-else
    width="29"
    height="25"
    viewBox="0 0 29 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="inverse"
  >
    <path d="M13.5 1L1 24H27.5L13.5 1Z" stroke="#007BEC" stroke-width="2" stroke-linejoin="round" />
  </svg>
</template>

<script>
export default {
  name: 'Downvote',
  props: {
    filled: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style scoped>
  .inverse {
    transform: rotate(180deg);
  }
</style>

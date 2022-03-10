<template>
  <div class="search-input">
    <input placeholder="Search Employers" type="text" @input="addSearchQuery($event.target.value)">
    <IconSearch />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  methods: {
    addSearchQuery (query) {
      this.$emit('search', query)
    }
  }
}
</script>

<style scoped>
  /* Search Input */
  .search-input {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  .search-input input {
    height: 50px;
    font-size: 1rem;
    padding: 0 16px;
    padding-left: 50px;
    background: #FFFFFF;
    border: none;
    border-radius: 10px;
    width: 400px;
  }
  .search-input.outlined input {
    border: 1px solid rgba(193, 206, 200, 0.63);
  }
  .search-input svg {
    position: absolute;
    left: 16px;
    top: 16px;
  }
</style>

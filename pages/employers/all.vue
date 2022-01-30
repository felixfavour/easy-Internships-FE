<template>
  <div class="employers-ctn section">
    <div class="inner">
      <div class="employers-header">
        <SearchInput />
        <button class="clear-btn">
          Filter Results
        </button>
      </div>
      <div class="card-grid">
        <EmployerCard v-for="index in 12" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularEmployers',
  layout: 'dashLayout'
}
</script>

<style scoped>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 32%);
    column-gap: 1.8%;
  }
</style>

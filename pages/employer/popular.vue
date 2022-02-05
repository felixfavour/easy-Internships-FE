<template>
  <div class="employers-ctn page">
    <PageBanner
      :data="{
        sub: 'Random selection based on popular opinion',
        head: 'Popular Companies',
        bgName: 'bg1',
        hasSearch: true }"
    />
    <div class="section">
      <div class="inner">
        <div class="card-grid">
          <EmployerCard v-for="index in 6" :key="index" />
        </div>
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

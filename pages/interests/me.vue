<template>
  <div class="interests-section page">
    <PageBanner
      :data="{
        sub: 'See employers on your radar',
        head: 'My Interests',
        bgName: 'bg3',
        hasSearch: false }"
    />
    <div class="page section">
      <div class="inner">
        <div class="card-grid">
          <InterestCard v-for="index in 5" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Interests',
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

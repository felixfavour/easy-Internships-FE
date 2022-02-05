<template>
  <div class="performance-section">
    <PageBanner
      :data="{
        sub: 'See how employers see you',
        head: 'My Performance',
        bgName: 'bg2',
        hasSearch: false }"
    />
    <div class="page section">
      <div class="inner">
        <div class="card-grid briefs">
          <PerformanceBriefCard :performance="{ label: 'Total Visits', value:'173' }" />
          <PerformanceBriefCard :performance="{ label: 'Unique Visits', value:'47' }" />
          <PerformanceBriefCard :performance="{ label: 'Academic Score', value:'85%' }" />
          <PerformanceBriefCard :performance="{ label: 'Skills Score', value:'93%' }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Performance',
  layout: 'dashLayout'
}
</script>

<style scoped>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 24.5%);
    column-gap: 1.5%;
  }
</style>

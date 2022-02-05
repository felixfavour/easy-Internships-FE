<template>
  <div class="performance-brief-ctn">
    <div class="row-1">
      <div class="text">
        Total Visits
      </div>
      <IconAnalytics />
    </div>
    <div class="row-2 count">
      173
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerformanceBriefCard',
  props: {
    performance: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>

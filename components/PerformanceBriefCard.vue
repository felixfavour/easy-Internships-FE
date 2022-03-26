<template>
  <div class="performance-brief">
    <div class="row-1">
      <div class="text">
        {{ performance.label }}
      </div>
      <IconAnalytics />
    </div>
    <div class="row-2 count">
      {{ performance.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerformanceBriefCard',
  props: {
    performance: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style scoped>
  .performance-brief {
    border: 1px solid #007BEC40;
    padding: 24px;
    border-radius: 6px;
  }
  .row-1 {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    justify-content: space-between;
    color: var(--primary-dark);
    font-size: 0.875rem;
  }
  .row-2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
</style>

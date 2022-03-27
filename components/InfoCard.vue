<template>
  <div class="info-card">
    <div class="label">
      {{ info.label }}
    </div>
    <div class="value">
      {{ info.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .info-card {
    background: #FFFFFF;
    border: 1px solid rgba(0, 34, 66, 0.19);
    padding: 12px 18px;
    border-radius: 6px;
    min-width: 160px;
  }
  .label {
    color: var(--primary-dark)90;
    font-weight: 500;
    font-size: 0.9rem;
  }
  .value {
    font-size: 1.2rem;
    font-weight: 600;
  }
</style>

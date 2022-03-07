<template>
  <div class="es-ctn">
    <img src="~assets/images/empty-state.svg" alt="">
    <div class="es-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',
  props: {
    text: {
      type: String,
      default: () => 'Nothing Here Yet...'
    }
  }
}
</script>

<style scoped>
.es-ctn {
  margin: 16px auto;
  text-align: center;
}
.es-text {
  color: #566BA0;
  margin-top: 24px;
  font-size: 1.05rem;
}
</style>

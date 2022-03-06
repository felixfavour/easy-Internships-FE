<template>
  <div class="loader" />
</template>

<script>
export default {
  name: 'Loader',
  props: {
    type: {
      type: String,
      default: () => 'bw' // can also be multi, [bw] for Black/White, [multi] for multi color
    }
  }
}
</script>

<style scoped>
/* can also be multi, [bw] for Black/White, [multi] for multi color */
.loader {
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #000;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 0.6s linear infinite;
  animation: spin 0.6s linear infinite;
}
.mr-6 {
  margin-right: 6px;
}
.loader.multi {
  border: 4px solid #f3655d;
  border-top: 4px solid #0C1F55;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<template>
  <div class="dash-layout-ctn">
    <Sidebar />
    <div class="main-content">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashLayout'
}
</script>

<style scoped>
  .dash-layout-ctn {
    display: flex;
  }
  .main-content {
    width: 100%;
  }
</style>

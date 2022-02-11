<template>
  <div class="dash-layout-ctn">
    <Sidebar />
    <div class="main-content">
      <Header />
      <Nuxt class="main-page-content" />
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
    width: calc(100% - var(--sidebar-width));
    margin-left: var(--sidebar-width);
  }
  .main-page-content {
    margin-top: var(--header-height);
  }
</style>

<template>
  <div class="dash-layout-ctn">
    <div v-if="$store.state.error !== null" class="bar error">
      <span class="material-icons icon">
        error
      </span>
      <span class="text">
        {{ $store.state.error }}
      </span>
      <button class="clear-btn material-icons" @click="$store.commit('setError', null)">
        close
      </button>
    </div>
    <div v-if="$store.state.success !== null" class="bar success">
      <span class="material-icons icon">
        error
      </span>
      <span class="text">
        {{ $store.state.success }}
      </span>
      <button class="clear-btn material-icons" @click="$store.commit('setSuccess', null)">
        close
      </button>
    </div>
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

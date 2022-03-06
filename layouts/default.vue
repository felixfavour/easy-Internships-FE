<template>
  <div class="layout-container">
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
    <Nuxt />
  </div>
</template>
<script>
export default {
  created () {

  }
}
</script>
<style scoped>
</style>

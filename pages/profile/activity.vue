<template>
  <div class="page">
    <section>
      <div class="recent-activity">
        <ActivityLarge v-for="index in 10" :key="index" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfileActivity',
  layout: 'dashLayout'
}
</script>

<style scoped>
  .recent-activity {
    border-radius: 24px;
    margin-bottom: 15%;
  }
</style>

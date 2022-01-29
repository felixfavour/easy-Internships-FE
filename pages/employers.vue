<template>
  <div class="employers-ctn">
    <PageBanner
      :data="{
        sub: 'Random selection based on popular opinion',
        head: 'Popular Companies',
        bgName: 'bg1',
        hasSearch: true }"
    />
    <div class="section">
      <div class="inner">
        Page Content
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Employers',
  layout: 'dashLayout'
}
</script>

<style scoped>

</style>

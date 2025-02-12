<template>
  <div class="section">
    <LandingNavbar />
    <Nuxt />
    <LandingFooter />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section {
  flex-direction: column;
}
.section > .inner {
  width: 90%;
  max-width: 1440px !important;
  margin: 0 auto;
}
</style>

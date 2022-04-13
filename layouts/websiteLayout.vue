<template>
  <div class="section page">
    <div class="inner">
      <LandingNavbar />
      <Nuxt />
      <LandingFooter />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section {
  /* display: block; */
}
.section > .inner {
  width: 90%;
  max-width: 1440px !important;
  margin: 0 auto;
}
</style>

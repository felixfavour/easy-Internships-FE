<template>
  <div class="container">
    <div class="logo" />
    <div class="text">
      <b>EASYiNTERNSHIPS</b> is the final year project of <b>Favour Felix Chinemerem, Bsc. Middlesex University</b><br>This Website and the full product infrastructure (client and server side) was built and designed by <b>Favour Felix Chinemerem</b> in <b>2022</b>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container {
    background: var(--primary-dark);
    padding: 2rem;
    color: #FFF;
    text-align: center;
    font-size: 0.75rem;
    line-height: 1.5rem;
  }
  .logo {
    width: 250px;
    height: 35px;
    background: url(~assets/images/footer-logo.png) no-repeat center;
    margin: 12px auto;
    background-size: contain;
  }
  b {
    font-weight: 800;
  }
</style>

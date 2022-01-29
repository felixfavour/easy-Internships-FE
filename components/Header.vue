<template>
  <div class="header-ctn section">
    <div class="inner">
      <span class="header-title">Header Title</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .header-ctn {
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px -9px 50px rgba(0, 0, 0, 0.25);
    height: var(--header-height);
    width: 100%;
    padding-top: 0;
  }
  .header-title {
    font-size: 1.1rem;
    font-weight: 500;
  }
</style>

<template>
  <div class="header-ctn section">
    <div class="inner">
      <span class="header-title">{{ $route.name }}</span>
      <div class="actions">
        <!-- ACTION FOR POPULAR EMPLOYEES PAGE -->
        <nuxt-link v-if="$route.name === 'employers-popular'" to="/employers/all" class="primary-btn come-down-sm">
          See All Employers
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .primary-btn {
    width: 160px;
    height: 40px;
    background: var(--primary-dark);
    border-radius: 32px;
  }
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
  .header-ctn > .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-title {
    font-size: 1.1rem;
    font-weight: 500;
  }
</style>

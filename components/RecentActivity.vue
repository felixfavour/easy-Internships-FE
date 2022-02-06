<template>
  <div class="recent-activity-ctn">
    <div class="header">
      Recent Activity
      <nuxt-link to="/profile/activity" class="clear-btn">
        View More
      </nuxt-link>
    </div>
    <div class="recent-activity">
      <Activity v-for="index in 5" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentActivity'
}
</script>

<style scoped>
  .recent-activity {
    background: #FFFFFF;
    border: 1px solid rgba(0, 123, 236, 0.22);
    box-shadow: 0px 14px 48px -14px rgba(0, 123, 236, 0.4);
    border-radius: 24px;
    padding: 10%;
  }
  .clear-btn {
    height: auto;
    color: #004D94;
  }
  .header {
    font-size: 18px;
    color: #002242;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  }
</style>

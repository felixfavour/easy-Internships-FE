<template>
  <!-- THIS IS A LAYOUT-PAGE WITH NESTED PAGES -->
  <div class="employer-layout section">
    <div class="inner">
      <div class="col-1">
        <ProfileHeader />
        <NuxtChild />
      </div>
      <div class="col-2">
        <RecentActivity v-if="$route.name !== 'profile-activity'" />
        <AddLinkedIn />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployerDetails',
  layout: 'dashLayout'
}
</script>

<style scoped>
  .employer-layout > .inner {
    display: flex;
    justify-content: space-between;
  }
  .col-1 {
    flex-basis: calc(100% - 400px);
  }
  .col-2 {
    width: 350px;
    margin-left: 1.3rem;
  }
</style>

<template>
  <div class="activity">
    <div class="icon" />
    <div class="info">
      <div class="text-1">
        You showed interest in <span>Google Inc.</span>
      </div>
      <div class="text-2">
        3 mins ago
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity'
}
</script>

<style scoped>
  .activity {
    display: flex;
    margin-bottom: 20px;
  }
  .activity:nth-last-child(1) {
    margin: 0;
  }
  .icon {
    min-width: 40px;
    height: 40px;
    margin-right: 12px;
    border-radius: 50%;
    background: #007BEC40;
  }
  .text-1 {
    font-size: 0.95rem;
    color: #002242;
  }
  .text-1 > span {
    font-weight: 600;
  }
  .text-2 {
    font-size: 0.8rem;
    color: #002242;
    opacity: 0.5;
  }
</style>

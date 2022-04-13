<template>
  <div class="party-card" :style="`background: ${party.colour}`">
    <div class="icon">
      <slot />
    </div>
    <div class="label">
      {{ party.type }}
    </div>
    <nuxt-link class="action-btn" :to="party.link">
      See How
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 13L12 20L19 13M12 20V4V20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    party: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .icon {
    height: 150px;
    width: 150px;
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
  }
  .party-card {
    padding: 4rem;
  }
  .label {
    font-size: 2rem;
    color: #FFFFFF;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  .action-btn {
    width: 220px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    border-radius: 4px;
    background: #00000068;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    margin-top: 2rem;
  }
</style>

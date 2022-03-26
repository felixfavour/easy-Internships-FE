<template>
  <div>
    <input type="file" name="" @input="$emit('image', $event.target.files[0])">
    <Loader v-if="$store.state.loading" />
    <svg
      v-else
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        fill="#007BEC"
        stroke="#007BEC"
      />
      <path d="M23.7284 14.5065L25.4934 16.2707L23.7284 14.5065ZM24.8634 12.9524L20.0909 17.7249C19.8443 17.9711 19.6761 18.2848 19.6075 18.6265L19.1667 20.8332L21.3734 20.3915C21.715 20.3232 22.0284 20.1557 22.275 19.909L27.0475 15.1365C27.1909 14.9931 27.3047 14.8229 27.3823 14.6355C27.4599 14.4481 27.4999 14.2473 27.4999 14.0444C27.4999 13.8416 27.4599 13.6408 27.3823 13.4534C27.3047 13.266 27.1909 13.0958 27.0475 12.9524C26.9041 12.8089 26.7338 12.6952 26.5465 12.6176C26.3591 12.5399 26.1583 12.5 25.9554 12.5C25.7526 12.5 25.5518 12.5399 25.3644 12.6176C25.177 12.6952 25.0068 12.8089 24.8634 12.9524V12.9524Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M25.8333 22.4998V24.9998C25.8333 25.4419 25.6577 25.8658 25.3452 26.1783C25.0326 26.4909 24.6087 26.6665 24.1667 26.6665H15C14.558 26.6665 14.1341 26.4909 13.8215 26.1783C13.5089 25.8658 13.3333 25.4419 13.3333 24.9998V15.8332C13.3333 15.3911 13.5089 14.9672 13.8215 14.6547C14.1341 14.3421 14.558 14.1665 15 14.1665H17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  label {
    position: relative;
    cursor: pointer;
  }
  input {
    opacity: 0;
    position: absolute;
    padding: 20px;
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
    cursor: pointer;
  }
</style>

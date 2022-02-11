<template>
  <div class="role-card">
    <div class="title">
      <h4>Software Engineer</h4>
      <button class="clear-btn" @click="expanded = !expanded">
        <IconArrowDown :class="['icon', expanded ? 'rotated' : '']" />
      </button>
    </div>
    <div :class="['role-info', expanded ? 'expand' : 'contract']">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laborum reiciendis porro, maxime nisi corporis nam natus dolorem beatae optio nesciunt, eos eligendi commodi est aperiam expedita consequuntur. Neque dolore tenetur libero?
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoleCard',
  data () {
    return {
      expanded: false
    }
  }
}
</script>

<style scoped>
  .role-card {
    padding: 1.2rem 0;
    border-bottom: 1px solid #ececec;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h4 {
    font-weight: 500;
    font-size: 1rem;
  }
  .icon {
    transition: 0.5s;
  }
  .rotated {
    transform: rotate(180deg);
  }
  .role-info {
    margin-top: 0.8rem;
    background: #007BEC20;
    border-radius: 24px;
    padding: 0 3%;
    font-size: 0.9rem;
    line-height: 1.6rem;
    height: 0px;
    overflow: hidden;
    display: grid;
    place-items: center;
  }

  /* ANIMATIONS */
  .expand {
    animation: expand-dropdown 0.5s forwards;
  }
  .contract {
    animation: contract-dropdown 0.5s forwards;
  }
  @keyframes expand-dropdown {
    0% { height: 0px; overflow: hidden;}
    99% {overflow: hidden;}
    100% { height: 100px; overflow: auto; }
  }
  @keyframes contract-dropdown {
    0% { height: 100px; overflow: hidden; }
    99% {overflow: hidden;}
    100% { height: 0px; overflow: hidden; }
  }
</style>

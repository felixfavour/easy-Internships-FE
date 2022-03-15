<template>
  <div class="role-card">
    <div class="title">
      <h4>
        {{ role.name }}
      </h4>
      <div class="actions">
        <button v-if="myRole" class="btn remove" @click="removeRole">
          <Loader v-if="roleRemoving" class="icon" />
          <span v-else class="icon">-</span>
          Remove
        </button>
        <button v-else class="btn" @click="addRole">
          <Loader v-if="roleAdding" class="icon" />
          <span v-else class="icon">+</span>
          Add
        </button>
        <button class="clear-btn" @click="expanded = !expanded">
          <IconArrowDown :class="['icon', expanded ? 'rotated' : '']" />
        </button>
      </div>
    </div>
    <div :class="['role-info', expanded ? 'expand' : 'contract']">
      {{ role.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoleCard',
  props: {
    role: {
      type: Object,
      default: () => {}
    },
    myRole: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      roleRemoving: false,
      roleAdding: false,
      expanded: false
    }
  },
  methods: {
    async addRole () {
      this.roleAdding = true
      await this.$axios.post('/employer/role', {
        role_id: this.role._id,
        user_id: this.$store.state.auth.user._id
      })
      this.$nuxt.$emit('refresh')
      this.roleAdding = false
    },
    async removeRole () {
      this.roleRemoving = true
      await this.$axios.delete(`/employer/role/${this.myRole}`)
      this.$nuxt.$emit('refresh')
      this.roleRemoving = false
    }
  }
}
</script>

<style scoped>
  .role-card {
    padding: 1.2rem 0;
    border-bottom: 1px solid #ececec;
    animation: appear 1s forwards;
    opacity: 0
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
    background: #f3f9ff;
    border-radius: 24px;
    padding: 0 3%;
    font-size: 0.9rem;
    line-height: 1.6rem;
    height: 0px;
    overflow: hidden;
    display: grid;
    place-items: center;
  }
  .actions {
    display: flex;
    align-items: center;
  }
  .clear-btn {
    height: 30px;
  }
  .actions .btn {
    height: 30px;
    background: var(--primary);
    padding: 6px 12px;
    border-radius: 6px;
    display: flex;
    margin-right: 6px;
  }
  .btn.remove {
    background: var(--red);
    color: #FFF;
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
    100% { height: 200px; overflow: auto; }
  }
  @keyframes contract-dropdown {
    0% { height: 200px; overflow: hidden; }
    99% {overflow: hidden;}
    100% { height: 0px; overflow: hidden; }
  }
  @keyframes appear {
    50% {opacity: 0;}
    100% { opacity: 1; }
  }
</style>

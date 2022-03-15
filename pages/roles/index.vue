<template>
  <div class="roles-section page">
    <PageBanner
      :data="{
        sub: 'What roles are you looking for? Let potential employees know',
        head: 'My Roles',
        bgName: 'bg4',
        hasSearch: true }"
    />
    <div class="page section">
      <div class="inner">
        <LargeLoader v-if="$store.state.loading" />
        <div v-else-if="myRoles.length > 0 && !$store.state.loading" class="my-roles">
          <div class="card-grid">
            <RoleCard v-for="role in myRoles" :key="role._id" :role="role.roles[0]" :my-role="role._id" />
          </div>
          <button v-if="myRoles.length > 3" class="clear-btn">
            View More
          </button>
        </div>
        <EmptyState v-else text="You have added no roles." />
        <div class="add-skill">
          <div class="header">
            <div class="text">
              Add a Skill
            </div>
            <!-- <button class="clear-btn">
              View More
            </button> -->
          </div>
          <!-- <LargeLoader v-if="$store.state.loading" /> -->
          <div class="card-grid">
            <RoleCard v-for="role in roles" :key="role._id" :role="role" />
          </div>
        </div>
      </div>
    </div>
    <ModalNewSkill v-if="newSkillModal" @close-modal="newSkillModal = false" />
  </div>
</template>

<script>
export default {
  name: 'Roles',
  layout: 'dashLayout',
  data () {
    return {
      newSkillModal: false,
      roles: [],
      myRoles: [],
      loading: ''
    }
  },
  created () {
    this.getMyRoles()
    this.getAllRoles()
  },
  mounted () {
    this.$nuxt.$on('refresh', () => {
      this.getMyRoles()
      this.getAllRoles()
    })
  },
  methods: {
    async getAllRoles () {
      this.loading = 'all-roles'
      const roles = await this.$axios.get('/role')
      this.roles = roles.data.data
    },
    async getMyRoles () {
      this.loading = 'my-roles'
      const roles = await this.$axios.get(`/employer/${this.$store.state.auth.user._id}/role`)
      this.myRoles = roles.data.data
    }
  }
}
</script>

<style scoped>
  .clear-btn {
    margin-bottom: 8px;
  }
  .primary-btn {
    width: 200px;
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 32%);
    /* grid-template-columns: repeat(4, 24.5%); */
    column-gap: 1.8%;
  }
  .my-roles {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .add-skill .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 2.5rem;
  }
  .header .text {
    font-weight: 600;
  }
  .new-skill-card {
    background: url('~assets/images/missing-skill.png');
    background-size: cover;
    height: 130px;
    padding: 24px 5%;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .new-skill-card .text {
    color: #00407B;
    font-size: 1.8rem;
    font-weight: 600;
  }
</style>

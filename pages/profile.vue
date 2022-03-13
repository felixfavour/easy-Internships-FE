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
        <AddLinkedIn v-if="!user.linkedin" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileLayout',
  layout: 'dashLayout',
  computed: mapState({
    user: state => state.auth.user
  }),
  mounted () {
    // RECORD USER VISIT
    // const user = this.$store.state.auth.user
    // this.addVisit(user)
  },
  methods: {
    async addVisit (user) {
      // Only add user visit when user viewing is not user logged in.
      if (user?._id !== this.employer.user_id) {
        await this.$axios.post('/user/visit', {
          user_id: this.$store.state.auth.user._id,
          visited_user: this.employer.user_id,
          visited_user_type: 'student'
        })
      }
    }
  }
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

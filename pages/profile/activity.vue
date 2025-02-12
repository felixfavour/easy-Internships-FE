<template>
  <div class="page">
    <section>
      <div class="recent-activity">
        <ActivityLarge v-for="activity in activities" :key="activity._id" :activity="activity" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileActivity',
  layout: 'dashLayout',
  computed: mapState({
    activities: state => state.activities
  }),
  mounted () {
    this.getUserActivity()
  },
  methods: {
    async getUserActivity () {
      const activities = await this.$axios.get(`/user/activity/${this.$store.state.auth.user._id}`)
      this.$store.commit('setActivities', activities.data.data.reverse())
    }
  }
}
</script>

<style scoped>
  .recent-activity {
    border-radius: 24px;
    margin-bottom: 15%;
  }
</style>

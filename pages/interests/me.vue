<template>
  <div class="interests-section page">
    <PageBanner
      :data="{
        sub: 'See employers on your radar',
        head: 'My Interests',
        bgName: 'bg3',
        hasSearch: false }"
    />
    <div class="page section">
      <div class="inner">
        <LargeLoader v-if="$store.state.loading" />
        <div v-else-if="interests.length > 0 && !$store.state.loading" class="card-grid">
          <InterestCard v-for="interest in interests" :key="interest._id" :interest="interest" @refresh="getMyInterests()" />
        </div>
        <EmptyState v-else text="You have made no interests in employers." />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Interests',
  layout: 'dashLayout',
  data () {
    return {
      interests: []
    }
  },
  created () {
    this.getMyInterests()
  },
  mounted () {
    this.$nuxt.$on('refresh', () => {
      this.getMyInterests()
    })
  },
  methods: {
    async getMyInterests () {
      const interests = await this.$axios.get(`/interest/${this.$store.state.auth.user._id}`)
      this.interests = interests.data.data
    }
  }
}
</script>

<style scoped>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 32%);
    column-gap: 1.8%;
  }
</style>

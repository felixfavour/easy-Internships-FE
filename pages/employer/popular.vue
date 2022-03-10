<template>
  <div class="employers-ctn page">
    <PageBanner
      :data="{
        sub: 'Random selection based on popular opinion',
        head: 'Popular Companies',
        bgName: 'bg1',
        hasSearch: true }"
    />
    <div class="section">
      <div class="inner">
        <LargeLoader v-if="$store.state.loading && loading === 'popular'" />
        <div v-else class="card-grid">
          <EmployerCard v-for="employer in employers" :key="employer._id" :employer="employer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularEmployers',
  layout: 'dashLayout',
  data () {
    return {
      employers: [],
      loading: ''
    }
  },
  created () {
    this.getPopularEmployers()
  },
  methods: {
    async getPopularEmployers () {
      this.loading = 'popular'
      const employers = await this.$axios.get('/employer/popular')
      this.employers = employers.data.data.filter(employer => employer !== null)
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

<template>
  <div class="employers-ctn page">
    <PageBanner
      :data="{
        sub: 'See all students enrolled in your institution',
        head: 'All Students',
        bgName: 'bg1',
        hasSearch: false }"
    />
    <div class="section">
      <div class="inner">
        <LargeLoader v-if="$store.state.loading && loading === 'popular'" />
        <TableStudent />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllStudents',
  layout: 'dashLayout',
  data () {
    return {
      employers: [],
      loading: ''
    }
  },
  created () {
    // this.getPopularEmployers()
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

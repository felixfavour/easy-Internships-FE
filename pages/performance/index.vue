<template>
  <div class="performance-section page">
    <PageBanner
      :data="{
        sub: 'See how employers see you',
        head: 'My Performance',
        bgName: 'bg2',
        hasSearch: false }"
    />
    <div class="page section">
      <div class="inner">
        <LargeLoader v-if="$store.state.loading" />
        <div v-else>
          <div class="card-grid briefs">
            <PerformanceBriefCard :performance="{ label: 'Total Visits', value: performance.total_visits }" />
            <PerformanceBriefCard :performance="{ label: 'Unique Visits', value: performance.unique_visits }" />
            <PerformanceBriefCard :performance="{ label: 'Academic Score', value: `${performance.academics_score}%` }" />
            <PerformanceBriefCard :performance="{ label: 'Skills Score', value: `${performance.skills_score}%` }" />
          </div>
          <div class="chart-ctn">
            <div class="chart-header">
              <div class="text">
                Visits on specific days.
              </div>
              <!-- <div class="form-group">
                <select id="location" name="location">
                  <option value="3-day">
                    Last 3 days
                  </option>
                  <option value="1-week">
                    Last 1 week
                  </option>
                  <option value="2-week">
                    Last 2 weeks
                  </option>
                </select>
                <IconArrowDown class="icon" />
              </div> -->
            </div>
            <ChartVisits v-if="visits" :visits="visits" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Performance',
  layout: 'dashLayout',
  data () {
    return {
      performance: {},
      visits: null
    }
  },
  created () {
    this.getPerformance()
    this.getUserVisits()
  },
  methods: {
    async getPerformance () {
      const performance = await this.$axios.get(`/performance/${this.$store.state.auth.user._id}`)
      this.performance = performance.data.data
    },
    async getUserVisits () {
      const visits = await this.$axios.get(`/performance/visitors/${this.$store.state.auth.user._id}`)
      this.visits = visits.data.data.reverse()
    }
  }
}
</script>

<style scoped>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(4, 24.5%);
    column-gap: 1.5%;
    margin-bottom: 1.5rem;
  }
  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 600;
  }
  .chart-header .form-group {
    width: 250px;
  }
  .form-group .icon {
    top: 15px;
  }
</style>

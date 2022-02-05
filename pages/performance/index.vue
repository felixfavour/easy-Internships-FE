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
        <div class="card-grid briefs">
          <PerformanceBriefCard :performance="{ label: 'Total Visits', value:'173' }" />
          <PerformanceBriefCard :performance="{ label: 'Unique Visits', value:'47' }" />
          <PerformanceBriefCard :performance="{ label: 'Academic Score', value:'85%' }" />
          <PerformanceBriefCard :performance="{ label: 'Skills Score', value:'93%' }" />
        </div>
        <div class="chart-ctn">
          <div class="chart-header">
            <div class="text">
              Number of Visits
            </div>
            <div class="form-group">
              <select id="location" name="location">
                <option value="1-week">
                  Last 1 Week
                </option>
              </select>
              <IconArrowDown class="icon" />
            </div>
          </div>
          <ChartVisits />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Performance',
  layout: 'dashLayout'
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

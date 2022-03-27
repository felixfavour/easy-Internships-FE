<template>
  <div class="salary-card">
    <div class="row row-1">
      <div class="main">
        <div class="text-main">
          {{ salary.role_name }}
        </div>
        <div class="text-sub">
          - - - submissions
        </div>
      </div>
      <div class="salary">
        <h2 class="count">
          {{ formatNumber(salary.amount) }}
        </h2>
        <div class="text-sub">
          Avg. salary per month
        </div>
      </div>
    </div>
    <div class="row-3">
      <!-- GREEN METRIC -->
      <div class="metric">
        <IconGreenArrow class="icon" />
        - - - % higher than other companies
      </div>

      <!-- RED METRIC -->
      <!-- <div class="metric red">
        <IconRedArrow class="icon" />
        25% lower than other companies
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalaryCard',
  props: {
    salary: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    formatNumber (num) {
      return 'AED ' + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }
}
</script>

<style scoped>
  .salary-card {
    padding: 28px;
    background: #FFFFFF;
    box-shadow: 0px 1px 5px 2px rgba(0, 123, 236, 0.15);
    border-radius: 8px;
    margin-bottom: 1.2rem;
  }
  .row-1 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .text-main {
    color: var(--primary-dark);
    font-size: 1.1rem;
    font-weight: 600;
    max-width: 230px;
  }
  .text-sub {
    color: #00000070;
    font-size: 0.85rem;
    margin-top: 3px;
  }
  .salary {
    font-weight: 900;
    font-size: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--primary-dark);
  }
  .salary .text-sub {
    font-weight: 400;
  }

  /* ROW 3 */
  .row-3 {
    margin-top: 1rem;
  }
  .metric {
    display: inline-flex;
    align-items: center;
    color: #027C00;
    font-size: 0.8rem;
    background: #06E40220;
    padding: 4px 6px;
    border-radius: 4px;
  }
  .metric.red {
    color: #9E0000;
    background: #FF000020;
  }
  .metric .icon {
    margin-right: 8px;
  }
</style>

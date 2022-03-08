<template>
  <div class="employer-details">
    <div class="section">
      <div class="inner">
        <section>
          <div class="header">
            Average Salaries
          </div>
          <div class="salaries-grid">
            <SalaryCard v-for="salary in salaries" :key="salary._id" :salary="salary" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployerSalaries',
  layout: 'dashLayout',
  props: {
    employer: {
      type: Object,
      default: () => {}
    },
    salaries: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 5%;
    max-width: 1100px;
  }
  .header {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .salaries-grid {
    display: grid;
    grid-template-columns: repeat(2, 49%);
    column-gap: 2%;
  }
</style>

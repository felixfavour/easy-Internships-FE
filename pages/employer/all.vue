<template>
  <div class="employers-ctn section">
    <div class="inner">
      <div class="employers-header">
        <SearchInput class="outlined" />
        <button :class="{ 'clear-btn filter-btn': true, 'active': filterMode }" @click="filterMode = !filterMode">
          <IconFilter />
          <span>Filter Results</span>
        </button>
      </div>
      <EmployeeFilter :class="filterMode ? 'expand' : 'contract'" />
      <div v-if="$route.query.query !== undefined" class="results-header come-down-sm">
        Companies for "{{ $route.query.query }}"
      </div>
      <div class="card-grid">
        <EmployerCard v-for="index in 12" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllEmployers',
  layout: 'dashLayout',
  data () {
    return {
      filterMode: false,
      searchMode: false
    }
  }
}
</script>

<style scoped>
  .filter-btn {
    display: flex;
    align-items: center;
  }
  .filter-btn > span {
    margin-left: 6px;
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 32%);
    column-gap: 1.8%;
  }
  .employers-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .results-header {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
  }
</style>

<template>
  <div class="employers-ctn section page">
    <LargeLoader v-if="$store.state.loading" />
    <div v-else class="inner">
      <div>
        <div class="employers-header">
          <SearchInput class="outlined" @search="searchEmployers($event); searchQuery = $event" />
          <button :class="{ 'clear-btn filter-btn': true, 'active': filterMode }" @click="filterMode = !filterMode">
            <IconFilter v-if="!filterMode" class="come-down-sm" />
            <IconCloseNoCircle v-if="filterMode" class="come-down-sm" />
            <span v-show="!filterMode" class="come-down-sm">Filter Results</span>
            <span v-show="filterMode" class="come-down-sm">Clear Filters</span>
          </button>
        </div>
        <EmployeeFilter :class="filterMode ? 'expand' : 'contract'" @filter="filterBy = $event; filterEmployers()" />
        <div v-if="searchQuery !== ''" class="results-header come-down-sm">
          Companies for "{{ searchQuery }}"
        </div>
        <div v-if="!filterMode" class="card-grid">
          <EmployerCard v-for="employer in employers" :key="employer._id" :employer="employer" />
        </div>
        <div v-else class="card-grid">
          <EmployerCard v-for="employer in filteredEmployers" :key="employer._id" :employer="employer" />
        </div>
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
      mode: 'DEFAULT', // other modes are 'SEARCH' and 'FILTER'
      employers: [],
      filterMode: false,
      filteredEmployers: [],
      searchQuery: '',
      filterBy: {
        company_sector: undefined,
        company_size: undefined,
        company_location: undefined
      }
    }
  },
  watch: {
    filterMode () {
      this.filterBy = {
        company_sector: undefined,
        company_size: undefined,
        company_location: undefined
      }
    }
  },
  created () {
    this.getEmployers()
  },
  methods: {
    async getEmployers () {
      this.loading = 'popular'
      const employers = await this.$axios.get('/employer')
      this.employers = employers.data.data
      this.filteredEmployers = employers.data.data
    },
    filterEmployers () {
      this.filteredEmployers = [...this.employers].filter((employer) => {
        const filter = this.filterBy

        return (filter.company_location !== undefined ? employer.user[0].location === filter.company_location : true) &&
              (filter.company_size !== undefined ? employer.company_size === filter.company_size : true) &&
              (filter.company_sector !== undefined ? employer.company_sector === filter.company_sector : true)
      })
    },
    searchEmployers (searchQuery) {
      if (searchQuery.length === 0) {
        this.filterMode = false
      } else {
        this.filterMode = true
        this.filteredEmployers = [...this.employers].filter((employer) => {
          return employer.user[0].full_name.toLowerCase().includes(searchQuery.toLowerCase())
        })
      }
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

  @keyframes come-down-sm {
    0% {
      opacity: 0;
      transform: translateY(-3px);
      -webkit-transform: translateY(-3px);
      -moz-transform: translateY(-3px);
      -ms-transform: translateY(-3px);
      -o-transform: translateY(-3px);
  }
    100% {
      opacity: 1;
      transform: translateY(0px);
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      -ms-transform: translateY(0px);
      -o-transform: translateY(0px);
    }
  }
</style>

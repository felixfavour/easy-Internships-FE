<template>
  <div class="employee-filter">
    <div class="form-row">
      <div class="form-group">
        <select id="location" v-model="filterBy.company_location" name="location">
          <option selected :value="undefined">
            Company Location
          </option>
          <option v-for="location in $store.state.locations" :key="location" :value="location">
            {{ location }}
          </option>
        </select>
        <IconArrowDown class="icon" />
      </div>
      <div class="form-group">
        <select id="location" v-model="filterBy.company_size" name="location">
          <option selected :value="undefined">
            Company Size
          </option>
          <option v-for="size in $store.state.companySizes" :key="size" :value="size">
            {{ size }} Employees
          </option>
        </select>
        <IconArrowDown class="icon" />
      </div>
      <div class="form-group">
        <select id="sector" v-model="filterBy.company_sector" name="sector">
          <option selected :value="undefined">
            Company Sector
          </option>
          <option v-for="sector in $store.state.sectors" :key="sector" :value="sector">
            {{ sector }}
          </option>
        </select>
        <IconArrowDown class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeFilter',
  data () {
    return {
      filterBy: {
        company_sector: undefined,
        company_size: undefined,
        company_location: undefined
      }
    }
  },
  watch: {
    filterBy: {
      deep: true,
      immediate: true,
      handler (val) {
        this.$emit('filter', this.filterBy)
      }
    }
  }
}
</script>

<style scoped>
  .form-row {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 32%);
  }
  .form-group {
    margin: 0;
  }
  .form-group .icon {
    top: 15px;
  }

  .employee-filter {
    position: relative;
    border-radius: 8px;
    height: 0px;
    box-shadow: 0px 10px 19px 7px rgba(0, 123, 236, 0.1);
    margin-bottom: 1.8rem;
    overflow: hidden;
    padding: 0 16px;
    display: flex;
    align-items: center;
  }

  /* ANIMATIONS */
  .expand {
    animation: expand-dropdown 0.5s forwards;
  }
  .contract {
    animation: contract-dropdown 0.5s forwards;
  }
  @keyframes expand-dropdown {
    0% { height: 0px; overflow: hidden;}
    99% {overflow: hidden;}
    100% { height: 100px; overflow: auto; }
  }
  @keyframes contract-dropdown {
    0% { height: 100px; overflow: hidden; }
    99% {overflow: hidden;}
    100% { height: 0px; overflow: hidden; box-shadow: none;}
  }
</style>

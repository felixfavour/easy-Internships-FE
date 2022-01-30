<template>
  <div class="employee-filter">
    <div class="form-row">
      <div class="form-group">
        <select id="" name="">
          <option selected disabled value="">
            No. of Employees
          </option>
        </select>
        <IconArrowDown class="icon" />
      </div>
      <div class="form-group">
        <select id="" name="">
          <option selected disabled value="">
            Location
          </option>
        </select>
        <IconArrowDown class="icon" />
      </div>
      <div class="form-group">
        <select id="" name="">
          <option selected disabled value="">
            Company
          </option>
        </select>
        <IconArrowDown class="icon" />
      </div>
      <div class="form-group">
        <select id="" name="">
          <option selected disabled value="">
            Job Title
          </option>
        </select>
        <IconArrowDown class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeFilter'
}
</script>

<style scoped>
  .form-row {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 24%);
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

<template>
  <div class="employer-details">
    <div class="section">
      <div class="inner">
        <section>
          <div class="header">
            Employer's Roles
          </div>
          <div class="salaries-grid">
            <RoleCard />
            <RoleCard />
            <RoleCard />
            <RoleCard />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployerRoles',
  layout: 'dashLayout'
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
</style>

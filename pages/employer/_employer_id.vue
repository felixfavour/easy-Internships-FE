<template>
  <!-- THIS IS A LAYOUT-PAGE WITH NESTED PAGES -->
  <div class="employer-layout">
    <section v-if="!$route.name.includes('question_id')">
      <EmployerBanner
        :data="{
          sub: 'Random selection based on popular opinion',
          head: 'Popular Companies',
          bgName: 'bg1',
          hasSearch: false }"
      />
      <div class="section">
        <div class="inner">
          <div class="tab-group">
            <nuxt-link to="/employer/id/about" :class="['primary-btn', ($route.name.includes('about') ? 'active' : '')]">
              About
            </nuxt-link>
            <nuxt-link to="/employer/id/reviews" :class="['primary-btn', ($route.name.includes('reviews') ? 'active' : '')]">
              Reviews (20)
            </nuxt-link>
            <nuxt-link to="/employer/id/salaries" :class="['primary-btn', ($route.name.includes('salaries') ? 'active' : '')]">
              Salaries (10)
            </nuxt-link>
            <nuxt-link to="/employer/id/roles" :class="['primary-btn', ($route.name.includes('roles') ? 'active' : '')]">
              Roles (8)
            </nuxt-link>
            <nuxt-link to="/employer/id/ask" :class="['primary-btn', ($route.name.includes('ask') ? 'active' : '')]">
              Ask Company
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'EmployerDetails',
  layout: 'dashLayout'
}
</script>

<style scoped>
  .tab-group {
    display: flex;
    overflow-x: auto;
  }
  .tab-group a {
    margin-right: 1.5rem;
    background: #FFFFFF;
    color: var(--primary-dark);
  }
  .tab-group a.active, .tab-group a:hover {
    margin-right: 1.5rem;
    background: #FFFFFF;
    background: var(--primary-light);
    color: var(--primary-dark);
  }
</style>

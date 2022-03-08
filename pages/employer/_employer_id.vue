<template>
  <!-- THIS IS A LAYOUT-PAGE WITH NESTED PAGES -->
  <LargeLoader v-if="$store.state.loading" class="mt-half" />
  <div v-else class="employer-layout">
    <section v-if="!$route.name.includes('question_id')">
      <EmployerBanner
        v-if="employer.user"
        :employer="employer"
      />
      <div class="section">
        <div class="inner">
          <div class="tab-group">
            <nuxt-link :to="`/employer/${employer._id}/about`" :class="['primary-btn', ($route.name.includes('about') ? 'active' : '')]">
              About
            </nuxt-link>
            <nuxt-link :to="`/employer/${employer._id}/reviews`" :class="['primary-btn', ($route.name.includes('reviews') ? 'active' : '')]">
              Reviews (20)
            </nuxt-link>
            <nuxt-link :to="`/employer/${employer._id}/salaries`" :class="['primary-btn', ($route.name.includes('salaries') ? 'active' : '')]">
              Salaries (10)
            </nuxt-link>
            <nuxt-link :to="`/employer/${employer._id}/roles`" :class="['primary-btn', ($route.name.includes('roles') ? 'active' : '')]">
              Roles (8)
            </nuxt-link>
            <nuxt-link :to="`/employer/${employer._id}/ask`" :class="['primary-btn', ($route.name.includes('ask') ? 'active' : '')]">
              Ask Company
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <NuxtChild v-if="employer.user" :employer="employer" />
  </div>
</template>

<script>
export default {
  name: 'EmployerDetails',
  layout: 'dashLayout',
  data () {
    return {
      employer: {}
    }
  },
  created () {
    this.getEmployer()
  },
  methods: {
    async getEmployer () {
      const employer = await this.$axios.get(`/employer/${this.$route.params.employer_id}`)
      this.employer = employer.data.data
    }
  }
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

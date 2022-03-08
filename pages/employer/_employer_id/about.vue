<template>
  <div class="employer-details">
    <div class="section">
      <div class="inner">
        <section class="about">
          <div class="header">
            About {{ employer.user.full_name }}
          </div>
          <p class="content">
            {{ employer.user.tagline || 'No description' }}
          </p>
        </section>
        <section class="about">
          <div class="header">
            {{ employer.user.full_name }} in cards
          </div>
          <div class="sub-header">
            Brief description of company in cards
          </div>
          <div class="content card-grid">
            <InfoCard :info="{ label: 'CEO', value: '- - -' }" />
            <InfoCard :info="{ label: 'Location', value: employer.user.location }" />
            <InfoCard :info="{ label: 'Founded', value: '- - -' }" />
            <InfoCard :info="{ label: 'Business Sector', value: employer.company_sector }" />
          </div>
        </section>
        <section class="about">
          <div class="content">
            <img src="~assets/images/employer-bg.png" alt="">
            <p>
              {{ employer.user.about }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutEmployer',
  layout: 'dashLayout',
  props: {
    employer: {
      type: Object,
      default: () => {}
    }
  },
  // data () {
  //   return {
  //     employer: {}
  //   }
  // },
  created () {
    // this.getEmployer()
  },
  methods: {
    // async getEmployer () {
    //   const employer = await this.$axios.get(`/employer/${this.$route.params.employer_id}`)
    // }
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
  }
  .sub-header {
    font-size: 0.9rem;
    opacity: 0.5;
    margin-top: 4px;
  }
  .content {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 12px;
  }
  .content img {
    width: 100%;
  }
  .card-grid {
    display: flex;
  }
  .card-grid > div {
    margin-right: 16px;
  }
</style>

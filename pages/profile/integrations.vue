<template>
  <div class="page">
    <section>
      <!-- SCHOOL INTEGRATION -->
      <div v-if="user" class="integration-card">
        <div class="info">
          <h2>{{ school.full_name }} Integration</h2>
          <div class="sub-text">
            Connected to student with ID: {{ user._id }}
          </div>
        </div>
        <div class="school logo" :style="`background-image: url(${school.icon})`" />
      </div>

      <!-- LINKEDIN INTEGRATION -->
      <div v-if="user.linkedin" class="integration-card">
        <div class="info">
          <h2>LinkedIn Integration</h2>
          <div class="sub-text">
            Connected to <u><a target="_blank" :href="user.linkedin">{{ getLinkedinName(user.linkedin) }}</a></u>
          </div>
        </div>
        <div class="linkedin logo" />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileIntegrations',
  layout: 'dashLayout',
  computed: mapState({
    user: state => state.auth.user,
    school: state => state.auth.studentSchool
  }),
  methods: {
    getLinkedinName (link) {
      const name = link?.replace('https://', '')
        .replace('http://', '')
        .replace('www.linkedin.com/in/', '')
        .replace('linkedin.com/in/', '')
        .replace('www.linkedin.com/company/', '')
        .replace('linkedin.com/company/', '')

      return `${name.split('-')[0]} ${name.split('-')[1] || ''}`.replace('/', '')
    }
  }
}
</script>

<style scoped>
  section {
    margin-bottom: 5%;
    max-width: 1100px;
  }
  .integration-card {
    border-radius: 24px;
    background: #007BEC15;
    padding: 5%;
    color: #004D94;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  .sub-text {
    opacity: 0.8;
    font-size: 0.85rem;
    margin-top: 4px;
  }
  .sub-text a {
    text-transform: capitalize;
  }
  .logo {
    height: 40px;
    width: 40px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .linkedin {
    background-image: url('~assets/images/linkedin.png');
  }
  .school {
    background-image: url('~assets/images/sample-school.png');
  }
</style>

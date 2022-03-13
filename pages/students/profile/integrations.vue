<template>
  <div class="page">
    <section>
      <!-- SCHOOL INTEGRATION -->
      <div class="integration-card">
        <div class="info">
          <h2>Middlesex Integration</h2>
          <div class="sub-text">
            Connected to <u>Favour Felix Chinemerem - M00848614</u>
          </div>
        </div>
        <div class="school logo" />
      </div>

      <!-- LINKEDIN INTEGRATION -->
      <div class="integration-card">
        <div class="info">
          <h2>LinkedIn Integration</h2>
          <div class="sub-text">
            Connected to <u>Favour Felix</u>
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
    user: state => state.auth.user
  })
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

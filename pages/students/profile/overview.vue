<template>
  <div class="page">
    <section class="about">
      <div class="header">
        About {{ user.full_name.split(' ')[0] }}
      </div>
      <p class="content">
        {{ user.bio || 'Hi there, please edit your profile and add a bio' }}
      </p>
    </section>
    <section class="about">
      <div class="content card-grid">
        <InfoCard :info="{ label: 'Username', value: `@${user.username}` }" />
        <InfoCard :info="{ label: 'School mail', value: user.email }" />
      </div>
    </section>
    <section class="about">
      <div class="header">
        School
      </div>
      <div class="content">
        {{ school.full_name }}
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileOverview',
  layout: 'dashLayout',
  computed: mapState({
    user: state => state.auth.user,
    school: state => state.auth.studentSchool
  })
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

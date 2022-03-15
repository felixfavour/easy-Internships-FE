<template>
  <!-- THIS IS A LAYOUT-PAGE WITH NESTED PAGES -->
  <div class="employer-layout section">
    <div class="inner">
      <div class="col-1">
        <UserHeader />

        <!-- USER OVERVIEW -->
        <div v-if="!userLoading" class="page">
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
          <section class="skills">
            <div class="header">
              {{ user.full_name.split(' ')[0] }}'s Skills
            </div>
            <div class="content skill-grid">
              <span v-if="userSkills.length === 0">{{ user.full_name.split(' ')[0] }} has added no skills yet.</span>
              <SkillCard v-for="skill in userSkills" :key="skill._id" :skill="skill.skills[0]" :user-skill="skill._id" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileLayout',
  layout: 'dashLayout',
  data () {
    return {
      avatar: null,
      coverPhoto: null,
      user: {},
      userSkills: [],
      userLoading: false
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    async getUser () {
      this.userLoading = true
      const user = await this.$axios.get(`/user/${this.$route.params.user_id}`)
      this.user = user.data.data
      this.addVisit(this.$store.state.auth.user)
      this.getUserSkills(user.data.data)
      this.userLoading = false
    },
    async addVisit (user) {
      // Only add user visit when user viewing is not user logged in.
      if (user?._id !== this.user._id) {
        await this.$axios.post('/user/visit', {
          user_id: this.$store.state.auth.user._id,
          visited_user: this.user._id,
          visited_user_type: 'student'
        })
      }
    },
    async getUserSkills (user) {
      this.loading = 'my-skills'
      const skills = await this.$axios.get(`/skill/user/${user._id}`)
      this.userSkills = skills.data.data
    }
  }
}
</script>

<style scoped>
  .employer-layout > .inner {
    display: flex;
    justify-content: space-between;
  }
  .col-1 {
    flex-basis: 100%;
  }
  .col-2 {
    width: 350px;
    margin-left: 1.3rem;
  }
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
  .skill-grid {
    display: grid;
    grid-template-columns: repeat(3, 32%);
    column-gap: 1.8%;
  }
  .card-grid > div {
    margin-right: 16px;
  }

</style>

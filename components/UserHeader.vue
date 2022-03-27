<template>
  <div class="profile-header-ctn">
    <div class="profile-header">
      <div class="cover-image" />
      <div class="cover-image-overlay" />
      <div class="profile-info">
        <div class="core-profile">
          <div class="profile-image" :style="user.avatar ? `background-image: url(${user.avatar})`: ''" />
          <div class="core-info">
            <div class="name">
              {{ user.full_name }}
              <a v-if="user.linkedin" target="_blank" class="linkedin" :href="user.linkedin" />
            </div>
            <div class="course">
              {{ user.tagline }}
            </div>
          </div>
        </div>
        <div class="actions">
          <nuxt-link to="#" class="primary-btn" @click.native="addInterest">
            <Loader v-if="$store.state.loading" class="icon" /> <span class="icon">+</span> Add Academic Score
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserHeader',
  data () {
    return {
      avatar: null,
      coverPhoto: null,
      interested: null,
      user: {},
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
      this.userLoading = false
    },
    async addInterest () {
      await this.$axios.post('/interest/add', {
        interested_user_id: this.$store.state.auth.user._id,
        interested_user_type: this.$store.state.auth.user.type,
        interesting_user_id: this.user._id,
        interesting_user_type: this.user.type
      })
      this.interested = true
      this.$toasted.success('Great! See your student in your interests')
    },
    async removeInterest () {
      await this.$axios.delete(`/interest/remove/${this.mySkill}`)
    }
  }
}
</script>

<style scoped>
  .green-bg {
    background: var(--green);
  }
  .auto-wh {
    width: auto;
    height: auto;
    padding: 0;
    position: absolute;
    top: 12px;
    left: 12px;
  }

  .profile-header {
    position: relative;
  }
  .cover-image {
    height: 250px;
    width: 100%;
    background: grey;
    border-radius: 24px;
    background: url('~assets/images/school-bg.jpeg') no-repeat center;
    background-size: cover;
  }
  .cover-image-overlay {
    height: 250px;
    width: 100%;
    background: #007BEC40;
    border-radius: 24px;
    position: absolute;
    inset: 0;
  }
  .profile-info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .core-profile {
    display: flex;
    padding-left: 5%;
  }
  .core-info {
    margin-top: 16px;
    margin-left: 16px;
  }
  .profile-image {
    min-width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #cecece;
    border: 5px solid #FFFFFF;
    position: relative;
    top: -50px;
    background-image: url('~assets/images/person.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .profile-image .clear-btn {
    position: absolute;
    height: 40px;
    width: 40px;
    bottom: 10px;
    right: 10px;
  }
  .actions {
    padding-right: 5%;
    margin-top: 16px;
  }
  .actions .primary-btn {
    width: 160px;
    height: 40px;
  }
  .primary-btn > .icon {
    margin-right: 6px;
  }
  .name, .name a {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .linkedin::after {
    content: '---';
    color: transparent;
    background: url('~assets/images/linkedin.png') no-repeat;
    background-size: contain;
    background-size: 70%;
    width: 15px;
    height: 15px;
    position: relative;
    top: 3px;
  }
  .course {
    font-size: 0.875rem;
    opacity: 0.5;
    /* margin-top: 4px; */
  }

  /* TAB GROUP */
  .tab-group {
    display: flex;
    overflow-x: auto;
    position: relative;
    top: -24px;
  }
  .tab-group a {
    margin-right: 1.5rem;
    width: 110px;
    max-width: 110px;
    background: #FFFFFF;
    color: var(--primary-dark);
  }
  .tab-group a.active, .tab-group a:hover {
    background: var(--primary-light);
    color: var(--primary-dark);
    width: 110px;
    max-width: 110px;
  }
</style>

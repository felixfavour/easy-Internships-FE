<template>
  <div class="profile-header-ctn">
    <div class="profile-header">
      <div class="cover-image" />
      <div class="cover-image-overlay" />
      <button class="clear-btn auto-wh">
        <IconEditCover @image="uploadImage($event, 'cover_photo')" />
      </button>
      <div class="profile-info">
        <div class="core-profile">
          <div class="profile-image" :style="user.avatar ? `background-image: url(${user.avatar})`: ''">
            <button class="clear-btn">
              <IconEditCover @image="uploadImage($event, 'avatar')" />
            </button>
          </div>
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
          <button v-if="$route.name === 'profile-edit'" class="primary-btn green-bg" @click="$nuxt.$emit('update-profile')">
            <Loader v-if="$store.state.loading" class="icon" /> <IconCheck v-else class="icon" /> SAVE CHANGES
          </button>
          <nuxt-link v-else to="/profile/edit" class="primary-btn">
            <Loader v-if="$store.state.loading" class="icon" /> <IconEdit v-else class="icon" /> EDIT PROFILE
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="tab-group">
      <nuxt-link to="/profile/overview" :class="['primary-btn', ($route.name.includes('overview') ? 'active' : '')]">
        Overview
      </nuxt-link>
      <nuxt-link to="/profile/edit" :class="['primary-btn', ($route.name.includes('edit') ? 'active' : '')]">
        Edit Profile
      </nuxt-link>
      <!-- <nuxt-link to="/profile/integrations" :class="['primary-btn', ($route.name.includes('integrations') ? 'active' : '')]">
        Integrations
      </nuxt-link>
      <nuxt-link to="/profile/activity" :class="['primary-btn', ($route.name.includes('activity') ? 'active' : '')]">
        Activity
      </nuxt-link> -->
      <nuxt-link to="/profile/security" :class="['primary-btn', ($route.name.includes('security') ? 'active' : '')]">
        Security
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileHeader',
  data () {
    return {
      avatar: null,
      coverPhoto: null
    }
  },
  computed: mapState({
    user: state => state.auth.user
  }),
  created () {
    this.getUser()
    this.getUserActivity()
  },
  methods: {
    async getUser () {
      const user = await this.$axios.get(`/user/${this.$store.state.auth.user._id}`)
      this.$store.commit('auth/setUser', user.data.data)
    },
    async getUserActivity () {
      const activities = await this.$axios.get(`/user/activity/${this.$store.state.auth.user._id}`)
      this.$store.commit('setActivities', activities.data.data)
    },
    async uploadImage (file, type) {
      const fd = new FormData()
      fd.append('file', file)
      this.loading = type
      const result = await this.$axios.post('/file', fd)
      if (type === 'avatar') {
        this.avatar = result.data.data.Location
      } else {
        this.coverPhoto = result.data.data.Location
      }
      this.updateUser(type)
    },
    async updateUser (type) {
      const user = await this.$axios.put(`/user/${this.$store.state.auth.user._id}`, (type === 'avatar'
        ? {
            avatar: this.avatar,
            icon: this.avatar
          }
        : {
            cover_photo: this.coverPhoto
          }))
      this.$store.commit('auth/setUser', user.data.data)
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
  .clear-btn {
    cursor: pointer;
  }
  .clear-btn:hover {
    background: none;
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

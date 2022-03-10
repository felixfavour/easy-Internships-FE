<template>
  <div class="profile-header-ctn">
    <div class="profile-header">
      <div class="cover-image" />
      <div class="cover-image-overlay" />
      <button class="clear-btn auto-wh">
        <IconEditCover />
      </button>
      <div class="profile-info">
        <div class="core-profile">
          <div class="profile-image" />
          <div class="core-info">
            <div class="name linkedin">
              Favour Felix
            </div>
            <div class="course">
              BSc. Information Technology
            </div>
          </div>
        </div>
        <div class="actions">
          <nuxt-link v-if="$route.name === 'profile-edit'" to="/profile/edit" class="primary-btn green-bg">
            <IconCheck class="icon" /> SAVE CHANGES
          </nuxt-link>
          <nuxt-link v-else to="/profile/edit" class="primary-btn">
            <IconEdit class="icon" /> EDIT PROFILE
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
      <nuxt-link to="/profile/integrations" :class="['primary-btn', ($route.name.includes('integrations') ? 'active' : '')]">
        Integrations
      </nuxt-link>
      <nuxt-link to="/profile/activity" :class="['primary-btn', ($route.name.includes('activity') ? 'active' : '')]">
        Activity
      </nuxt-link>
      <nuxt-link to="/profile/security" :class="['primary-btn', ($route.name.includes('security') ? 'active' : '')]">
        Security
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeader'
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
    background: url('~assets/images/school-bg.png') no-repeat center;
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
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #cecece;
    border: 5px solid #FFFFFF;
    position: relative;
    top: -50px;
    background: url('~assets/images/man.png') no-repeat;
    background-size: cover;
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
  .name {
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

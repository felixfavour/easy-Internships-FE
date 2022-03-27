<template>
  <div class="sidebar-ctn">
    <div class="sidebar-header">
      <div class="logo">
        <img src="~assets/images/Ei-logo-inverse.png" alt="">
        <span>Universities</span>
      </div>
    </div>
    <ul class="actions">
      <li>
        <nuxt-link to="/students" :class="{ 'active': $route.name.includes('student') }">
          <IconEmployers />
          <span>Students</span>
        </nuxt-link>
      </li>
      <!-- <li>
        <nuxt-link to="/performance" :class="{ 'active': $route.name.includes('performance') }">
          <IconPerformance />
          <span>Statistics</span>
        </nuxt-link>
      </li> -->
      <!-- <li>
        <nuxt-link to="/interests/me" :class="{ 'active': $route.name.includes('interests-me') }">
          <IconInterests />
          <span>My Interests</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/skills" :class="{ 'active': $route.name.includes('skills') }">
          <IconSkills />
          <span>My Skills</span>
        </nuxt-link>
      </li> -->
      <li>
        <nuxt-link to="/profile/overview" :class="{ 'active': $route.name.includes('profile') }">
          <IconProfile />
          <span>School Profile</span>
        </nuxt-link>
      </li>
    </ul>
    <ul class="actions logout">
      <li>
        <button @click="logOut()">
          <IconLogOut />
          <span>Log out</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    logOut () {
      this.$router.push('/login')
      this.$store.commit('auth/logOut')
    }
  }
}
</script>

<style scoped>
  .sidebar-ctn {
    background: var(--primary-dark);
    width: var(--sidebar-width);
    min-height: 100vh;
    color: #FFFFFF;
    position: fixed;
  }
  .sidebar-header {
    height: var(--header-height);
    border-bottom: 2px solid var(--primary-dark);
    display: flex;
    align-items: center;
    padding: 0 24px;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .logo > span {
    margin-left: 12px;
    font-size: 1.3rem;
  }
  .actions a, .actions button {
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 65px;
    font-size: 0.925rem;
    color: #FFFFFF;
    transition: 0.3s;
  }
  .actions a:hover, .actions a.active {
    background: var(--primary);
  }
  a > span {
    margin-left: 12px;
    margin-top: 6px;
  }
  .logout {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 16px;
  }
  .logout button {
    width: 100%;
    background: transparent;
    color: #F00000;
  }
  .logout button:hover {
    background: #f0000065;
  }
  .logout button span {
    margin-left: 12px;
  }
</style>

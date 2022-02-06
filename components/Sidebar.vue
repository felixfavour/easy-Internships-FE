<template>
  <div class="sidebar-ctn">
    <div class="sidebar-header">
      <div class="logo">
        <img src="~assets/images/Ei-logo-inverse.png" alt="">
        <span>Students</span>
      </div>
    </div>
    <ul class="actions">
      <li>
        <nuxt-link to="/employer/popular" :class="{ 'active': $route.name.includes('employer') }">
          <IconEmployers />
          <span>Employers</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/performance" :class="{ 'active': $route.name.includes('performance') }">
          <IconPerformance />
          <span>Performance</span>
        </nuxt-link>
      </li>
      <li>
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
      </li>
      <li>
        <nuxt-link to="/profile/overview" :class="{ 'active': $route.name.includes('profile') }">
          <IconProfile />
          <span>My Profile</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
  .sidebar-ctn {
    background: var(--primary-dark);
    width: var(--sidebar-width);
    min-height: 100vh;
    color: #FFFFFF;
  }
  .sidebar-header {
    height: var(--header-height);
    border-bottom: 2px solid #00407B;
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
  .actions a {
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
</style>

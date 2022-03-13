<template>
  <div class="header-ctn section">
    <div class="inner">
      <HeaderContent class="header-title" />
      <div class="actions">
        <!-- ACTION FOR POPULAR EMPLOYEES PAGE -->
        <!-- <nuxt-link v-if="$route.name === 'employer-popular'" to="/employer/all" class="primary-btn come-down-sm">
          See All Employers
        </nuxt-link> -->
        <nuxt-link v-if="$store.state.auth.user.avatar" to="/profile/overview" class="profile">
          <span class="name">
            {{ user.first_name }}
          </span>
          <img :src="user.avatar" alt="">
        </nuxt-link>
        <nuxt-link v-else to="/profile/overview" class="profile">
          <img src="~assets/images/person.png" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  computed: mapState({
    user: state => state.auth.user
  })
}
</script>

<style scoped>
  .primary-btn {
    width: 160px;
    height: 40px;
    background: var(--primary-dark);
    border-radius: 32px;
  }
  .header-ctn {
    background: #FFFFFF;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    box-shadow: 0px -9px 50px rgba(0, 0, 0, 0.25);
    height: var(--header-height);
    width: calc(100% - var(--sidebar-width));
    padding-top: 0;
    position: fixed;
    z-index: 1;
  }
  .header-ctn .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-title {
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  .profile {
    display: flex;
    align-items: center;
  }
  .name {
    font-size: 1.05rem;
    font-weight: 600;
    margin-left: 8px;
  }
  .actions {
    display: flex;
  }
  a > img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 1rem;
    border: 3px solid var(--primary);
  }
</style>

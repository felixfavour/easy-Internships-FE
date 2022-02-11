<template>
  <!-- HEADER CONTENT -->
  <div class="content first">
    <BackBtn v-if="$route.name.includes('chat_id')" />

    <!-- HEADER TITLES -->
    <span v-if="$route.name.includes('employer-popular')" class="not-middle">
      Popular Employers
    </span>
    <span v-else-if="$route.name === 'employer-all'" class="not-middle">
      All Employers
    </span>
    <span v-else-if="$route.name === 'performance'" class="not-middle">
      My Performance
    </span>
    <span v-else-if="$route.name === 'interests-me'" class="not-middle">
      My Interests
    </span>
    <span v-else-if="$route.name === 'profile-overview'" class="not-middle">
      Profile Overview
    </span>
    <span v-else-if="$route.name === 'profile-edit'" class="not-middle">
      Edit Profile
    </span>
    <span v-else-if="$route.name === 'profile-integrations'" class="not-middle">
      My Integrations
    </span>
    <span v-else-if="$route.name === 'profile-activity'" class="not-middle">
      My Activity
    </span>
    <span v-else-if="$route.name === 'profile-security'" class="not-middle">
      Change Password
    </span>
    <span v-else-if="$route.name === 'employer-employer_id-question_id'" class="not-middle">
      Answer a Question
    </span>
    <span v-else-if="$route.name.includes('employer-employer_id')" class="not-middle">
      <nuxt-link to="/employer/all">All Employers</nuxt-link>
      <span class="seperator">
        >
      </span>
      Google Inc.
    </span>
    <span v-else-if="$route.name === 'settings-security'" class="not-middle">
      Security Settings
    </span>
    <span v-else class="not-middle">
      {{ $route.name }}
    </span>
  </div>
</template>
<style scoped>
  a {
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--primary);
    border-bottom: 1px solid;
  }
  .seperator {
    margin: 0 6px;
    opacity: 0.4;
  }
</style>

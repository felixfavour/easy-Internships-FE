<template>
  <!-- HEADER CONTENT -->
  <div class="content first">
    <BackBtn v-if="$route.name.includes('chat_id')" />

    <!-- HEADER TITLES -->
    <span v-if="$route.name.includes('chat_id')" class="not-middle">
      {{ $route.params.chat_id }}
    </span>
    <span v-else-if="$route.name === 'analytics'" class="not-middle">
      Analytics
    </span>
    <span v-else-if="$route.name === 'chat-direct'" class="not-middle">
      Direct Messages
    </span>
    <span v-else-if="$route.name === 'chat-group'" class="not-middle">
      Group Messages
    </span>
    <span v-else-if="$route.name === 'moderation-blocked'" class="not-middle">
      Blocked Words
    </span>
    <span v-else-if="$route.name === 'moderation-reports'" class="not-middle">
      Reported Users
    </span>
    <span v-else-if="$route.name === 'moderation-quarantined'" class="not-middle">
      Quarantined Groups/Users
    </span>
    <span v-else-if="$route.name === 'apiconfig'" class="not-middle">
      API &amp; Auth Keys
    </span>
    <span v-else-if="$route.name === 'settings-account'" class="not-middle">
      Account Settings
    </span>
    <span v-else-if="$route.name === 'settings-products'" class="not-middle">
      Product Settings
    </span>
    <span v-else-if="$route.name === 'settings-billing'" class="not-middle">
      Billing Settings
    </span>
    <span v-else-if="$route.name === 'settings-security'" class="not-middle">
      Security Settings
    </span>
    <span v-else class="not-middle">
      EASYiNTERNSHIPS
    </span>
  </div>
</template>

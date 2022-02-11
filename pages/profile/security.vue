<template>
  <div class="page">
    <section>
      <div class="form-group">
        <input type="password">
        <label for="password">
          Current Password
        </label>
      </div>
      <div class="form-group">
        <input type="password">
        <label for="password">
          New Password
        </label>
      </div>
      <div class="form-group">
        <input type="password">
        <label for="password">
          Confirm Password
        </label>
      </div>
      <button class="primary-btn">
        UPDATE PASSWORD
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfileSecurity',
  layout: 'dashLayout'
}
</script>

<style scoped>
  .primary-btn {
    width: 300px;
    margin: 24px auto;
    background: #00488A;
    color: #FFFFFF;
  }
  section {
    margin-bottom: 5%;
    max-width: 1100px;
  }
  .form-group, .form-row {
    max-width: 800px;
  }
</style>

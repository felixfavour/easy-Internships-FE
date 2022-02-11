<template>
  <div class="page">
    <section>
      <div class="form-row">
        <div class="form-group">
          <input type="text">
          <label for="firstName">
            First Name
          </label>
        </div>
        <div class="form-group">
          <input type="text">
          <label for="lastName">
            Last Name
          </label>
        </div>
      </div>
      <div class="form-group">
        <input type="text">
        <label for="tagline">
          Tagline
        </label>
      </div>
      <div class="form-group">
        <textarea type="text" placeholder="Favour is..." />
        <label for="name">
          Bio
        </label>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfileEdit',
  layout: 'dashLayout'
}
</script>

<style scoped>
  section {
    margin-bottom: 5%;
    max-width: 1100px;
  }
  .form-group, .form-row {
    max-width: 800px;
  }
</style>

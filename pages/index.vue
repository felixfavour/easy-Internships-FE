<template>
  <div class="section page">
    <div class="inner">
      This is home page
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  created () {
    this.$router.push('/login')
  }
}
</script>

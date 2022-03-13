<template>
  <div class="add-linkedin">
    <div class="text-1">
      Connect your <span>Ei</span> profile
    </div>
    <div class="text-2" />
    <div class="text-3">
      ACCOUNT
    </div>
    <div class="text-4">
      Give employers access to your full-fledged LinkedIn profile.
    </div>
    <button class="primary-btn" @click="modalOpen = true">
      START HERE
    </button>
    <div class="text-5">
      It only takes 30 seconds.
    </div>
    <ModalAddLinkedIn v-if="modalOpen" @close-modal="modalOpen = false" />
  </div>
</template>

<script>
export default {
  name: 'AddLinkedIn',
  data () {
    return {
      modalOpen: false
    }
  }
}
</script>

<style scoped>
  .add-linkedin {
    background: rgba(0, 123, 236, 0.15);
    border-radius: 24px;
    padding: 10%;
  }
  .text-1 {
    font-size: 1.2rem;
    color: #004D94;
  }
  .text-1 > span {
    font-weight: bold;
  }
  .text-2 {
    width: 150px;
    height: 50px;
    background: url('~assets/images/full-linkedin.png') no-repeat left;
    background-size: contain;
  }
  .text-3 {
    font-size: 2rem;
    font-weight: 900;
    color: #2867B2;
  }
  .primary-btn {
    height: 40px;
  }
  .text-4 {
    font-size: 0.8rem;
    line-height: 1.4rem;
    color: #004D94;
    margin: 1.3rem 0;
  }
  .text-5 {
    font-size: 0.8rem;
    line-height: 1.4rem;
    color: #004D94;
    margin-top: 8px;
  }
</style>

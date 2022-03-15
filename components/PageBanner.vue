<template>
  <div class="page-banner-ctn">
    <div :class="['bg', data.bgName]" />
    <div class="inner">
      <div class="text-1">
        {{ data.sub }}
      </div>
      <div class="text-2">
        {{ data.head }}
      </div>
      <button v-if="data.hasSearch" class="primary-btn" @click="modal = true">
        Create New Role
      </button>
    </div>
    <ModalNewRole v-if="modal" @close-modal="modal = false" />
  </div>
</template>

<script>
export default {
  name: 'PageBanner',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      modal: false
    }
  }
}
</script>

<style scoped>
  .primary-btn {
    padding: 0 24px;
    width: 200px;
    background: var(--primary-dark);
  }
  .page-banner-ctn {
    height: 300px;
    background: #007BEC40;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 7.5%;
  }
  .bg {
    background: url(~assets/images/employers-banner.png) no-repeat;
    background-position: right;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: 50%;
  }
  .text-1 {
    font-size: 1.1rem;
    color: var(--primary-dark);
    animation: come-up 0.5s ease-in-out forwards;
  }
  .come-up-1 {
  }
  .text-2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--primary-dark);
    animation: come-up 1s ease-in-out forwards;
  }
  .come-up-2 {
  }

  @media screen and (max-width: 1450px) {
    .bg {
      background-position: initial;
    }
  }

  @keyframes come-up {
    0% {opacity: 0; transform: translateY(20px);}
    100% {opacity: 1; transform: translateY(0px);}
  }
</style>

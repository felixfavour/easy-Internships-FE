<template>
  <div class="employer-card">
    <div class="row row-1">
      <div class="logo" :style="`background-image: url(${interest.user[0].icon})`" />
      <div class="info-1">
        <div class="name">
          {{ interest.user[0].full_name }}
        </div>
        <IconStarRating :rating="interest.employer[0].rating" />
      </div>
    </div>
    <div class="row row-3 actions">
      <button class="primary-btn outlined" @click="removeInterest">
        <span>Remove</span>
      </button>
      <nuxt-link class="primary-btn" :to="`/employer/${interest.employer[0]._id}/about`">
        See More
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployerCard',
  props: {
    interest: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    async removeInterest () {
      await this.$axios.delete(`/interest/remove/${this.interest._id}`)
      this.$nuxt.$emit('refresh')
    }
  }
}
</script>

<style scoped>
  .primary-btn {
    height: 43px;
    margin-left: 8px;
    width: 110px;
  }
  .primary-btn.outlined {
    border: 1px solid var(--primary);
    color: var(--primary);
    background: #FFFFFF;
    width: 130px;
  }
  .primary-btn.outlined:hover {
    border-color: #E80000;
    color: #E80000
  }
  .employer-card {
    background: #FFFFFF;
    box-shadow: 0px 1px 5px 2px rgba(0, 123, 236, 0.15);
    border-radius: 8px;
    margin-bottom: 1.5rem;
    padding: 7%;
    transition: 0.3s;
  }
  .employer-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 19px 7px rgba(0, 123, 236, 0.1);
  }

  /* ROW 1 */
  .row-1 {
    margin-bottom: 0.8rem;
    align-items: center;
  }
  .logo {
    background-image: url('~assets/images/sample-employer.png');
    margin-right: 12px;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background-size: contain;
    position: relative;
    top: -4px;
  }
  .info-1 .name {
    font-size: 1.15rem;
    font-weight: 500;
  }

  /* ROW 2 */
  .row-2 {
    justify-content: space-between;
  }
  .row > .col > .main {
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--primary-dark);
  }
  .row > .col > .sub {
    font-size: 0.75rem;
    color: var(--grey);
  }

  /* ACTIONS */
  .actions {
    margin-top: 1.8rem;
    justify-content: flex-end;
  }
</style>

<template>
  <div class="employer-banner-ctn">
    <div :class="['bg']" />
    <div class="inner">
      <div class="texts come-up-1">
        <div class="row-1">
          <div v-if="employer.user.icon" class="logo" :style="`background-image: url(${employer.user.icon})`" />
          <div class="company-name">
            {{ employer.user.full_name }}
          </div>
        </div>
        <div class="row-2">
          <IconPeople class="icon-people" /> {{ employer.company_size }} Employees
        </div>
      </div>
      <div class="actions come-up-2">
        <button :class="['primary-btn', employerData.user_interested ? 'following' : 'not-following']" @click="addOrRemoveInterest">
          <Loader v-if="$store.state.loading" class="mr-6" />
          <span v-else class="icon reveals plus-icon">+</span>
          <IconCheck class="icon reveals check-icon" />I'm Interested
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployerBanner',
  props: {
    employer: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      employerData: { ...this.employer }
    }
  },
  methods: {
    async addOrRemoveInterest () {
      if (this.employerData.user_interested) {
        this.$toasted.error('You are already interested in this employer')
      } else {
        await this.$axios.post('/interest/add', {
          interested_user_id: this.$store.state.auth.user._id,
          interested_user_type: this.$store.state.auth.user.type,
          interesting_user_id: this.employer.user._id,
          interesting_user_type: this.employer.user.type
        })
      }
    }
  }
}
</script>

<style scoped>
  .primary-btn {
    width: 170px;
    justify-content: center;
    font-weight: 500;
  }
  .primary-btn.following {
    background: var(--green);
  }
  .primary-btn.following .plus-icon {
    display: none;
  }
  .primary-btn.not-following .check-icon {
    display: none;
  }

  .employer-banner-ctn {
    height: 300px;
    background: #007BEC40;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 7.5%;
  }

  /* ICONS */
  .icon {
    margin-right: 12px;
  }
  .icon-people {
    position: relative;
    top: -2px;
    margin-right: 8px;
  }
  .plus-icon {
    font-size: 1.5rem;
    font-weight: 700;
  }

  /* ROW 1 */
  .row-1 {
    display: flex;
    align-items: center;
    font-size: 2.2rem;
    font-weight: 900;
    color: var(--primary-dark);
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
  .bg {
    background: url(~assets/images/employer-cover-image.png) no-repeat;
    background-position: right;
    position: absolute;
    right: 0;
    bottom: 0;
    top: 0;
    width: 50%;
  }
  .texts {
    margin-bottom: 1.5rem;
  }
  .come-up-1 {
    animation: come-up 0.5s ease-in-out forwards;
  }
  .come-up-2 {
    animation: come-up 1s ease-in-out forwards;
  }

  /* ROW 2 */
  .row-2 {
    display: flex;
    align-items: center;
    margin-top: 8px;
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

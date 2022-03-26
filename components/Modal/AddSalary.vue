<template>
  <div class="modal-ctn">
    <div ref="modal come-up-1" class="modal new-skill come-up-1">
      <div class="header">
        Add Salary
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <span class="currency">AED</span>
          <input v-model.number="salary" :placeholder="`Monthly Salary of your ${role.name}s`">
        </div>
        <div class="actions">
          <button class="primary-btn white" @click="$emit('close-modal')">
            Cancel
          </button>
          <button :disabled="!(salary >= 100)" class="primary-btn dark" @click="addSalary">
            <Loader v-if="connectLoading" />
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddSalary',
  props: {
    role: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      salary: '',
      linkedin: null,
      validateLoading: false,
      connectLoading: false
    }
  },
  methods: {
    async addSalary () {
      this.connectLoading = true
      await this.$axios.post('/employer/salary', {
        user_id: this.$store.state.auth.user._id,
        employer_role_id: this.role.employer_role_id,
        role_id: this.role._id,
        employer_id: this.$store.state.auth.user.employer_id,
        amount: this.salary,
        role_name: this.role.name,
        competition_comparison: 0
      })
      this.$toasted.success('Salary was uploaded successfully. Thank you!')
      this.connectLoading = false
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
  .currency {
    background: var(--primary-dark);
    color: #FFFFFF;
    padding: 8px;
    position: absolute;
    display: grid;
    place-items: center;
    font-weight: 600;
    inset: 0;
    width: 70px;
    border-radius: 8px 0 0 8px;
  }
  input {
    padding-left: 90px;
  }
  .modal-ctn {
    display: grid;
    place-items: center;
    z-index: 9;
  }
  .clear-btn {
    height: auto;
    padding: 4px;
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .primary-btn.dark {
    background: var(--primary-dark);
    margin: 0;
    margin-top: 2rem;
  }
  .primary-btn.white {
    background: #FFFFFF;
    color: var(--primary-dark);
    margin: 0;
    margin-top: 2rem;
  }
  .modal {
    background: #FFFFFF;
    width: 550px;
    padding: 3%;
    border-radius: 24px;
    z-index: 9;
  }
  .header {
    font-size: 1.2rem;
    color: var(--primary-dark);
    font-weight: 600;
    display: flex;
    justify-content: center;
  }
  .modal-down {
    animation: modal-down .3s ease-in-out forwards;
    -webkit-animation: modal-down .3s ease-in-out forwards;
  }
  .linkedin-valid {
    text-transform: capitalize;
    font-size: 1.05rem;
    color: var(--primary-dark);
    font-weight: 600;
  }
  .linkedin::before {
    content: '---';
    color: transparent;
    background: url('~assets/images/linkedin.png') no-repeat;
    background-size: contain;
    background-size: 70%;
    width: 40px;
    height: 40px;
    position: relative;
    top: -5px;
  }
</style>

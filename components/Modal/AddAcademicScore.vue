<template>
  <div class="modal-ctn">
    <div ref="modal" class="modal new-skill come-up-1">
      <div class="header">
        Update {{ student.full_name }}'s Academic Score
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <span class="unit">%</span>
          <input v-model.number="percent" type="number" placeholder="Enter score in percentage">
        </div>
        <div class="actions">
          <button class="primary-btn white" @click="$emit('close-modal')">
            Cancel
          </button>
          <button :disabled="!(percent >= 1)" class="primary-btn dark" @click="updateAcademicScore">
            <Loader v-if="connectLoading" />
            Update
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddAcademicScore',
  props: {
    student: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      percent: '',
      connectLoading: false
    }
  },
  methods: {
    async updateAcademicScore () {
      this.connectLoading = true
      await this.$axios.put(`/user/${this.student._id}`, {
        academics_score: this.percent
      })
      this.$toasted.success('Academics score has been updated.')
      this.connectLoading = false
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
  .unit {
    background: var(--primary-dark);
    color: #FFFFFF;
    padding: 8px;
    position: absolute;
    display: grid;
    place-items: center;
    font-weight: 600;
    inset: 0;
    left: auto;
    width: 70px;
    border-radius: 0 8px 8px 0;
  }
  .modal-ctn {
    display: grid;
    place-items: center;
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

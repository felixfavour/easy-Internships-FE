<template>
  <div class="modal-ctn">
    <div ref="modal" class="modal new-skill come-up-1">
      <div class="header">
        Enroll Muliple Students in your School
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <label for="name" class="image">
            <input type="file" accept=".csv" @input="csvFile = $event.target.files[0]">
            {{ csvFile ? csvFile.name : 'Add CSV File' }}
          </label>
          <label for="name">
            Select a file containing all students
          </label>
        </div>
        <div class="actions">
          <button class="primary-btn white" @click="$emit('close-modal')">
            Cancel
          </button>
          <button :disabled="!(csvFile !== null)" class="primary-btn dark" @click="enrollMultiple">
            <Loader v-if="connectLoading" />
            Enroll All!
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
      csvFile: null,
      connectLoading: false
    }
  },
  methods: {
    async enrollMultiple () {
      this.connectLoading = true
      const fd = new FormData()
      fd.append('file', this.csvFile)
      fd.append('school_id', this.$store.state.auth.user.school_id)
      const response = await this.$axios.post('/auth/signup/multiple', fd)
      this.$toasted.success(response.data.data)
      this.connectLoading = false
      this.$nuxt.$emit('refresh')
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

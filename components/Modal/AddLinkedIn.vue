<template>
  <div class="modal-ctn">
    <div ref="modal" class="modal new-skill come-up-1">
      <div class="header linkedin">
        Connect your LinkedIn Account
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <input v-model="link" placeholder="Link to your LinkedIn profile" @input="validateLink">
        </div>
        <div v-if="link.length > 0" class="form-group">
          <Loader v-if="validateLoading" />
          <div v-else-if="linkedin !== null" class="linkedin-valid come-down-sm">
            {{ linkedin.name }}
          </div>
        </div>
        <div class="actions">
          <button class="primary-btn white" @click="$emit('close-modal')">
            Cancel
          </button>
          <button :disabled="!(link.length > 4)" class="primary-btn dark" @click="addLinkedIn">
            <Loader v-if="connectLoading" />
            Connect
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddLinkedIn',
  data () {
    return {
      link: '',
      linkedin: null,
      validateLoading: false,
      connectLoading: false
    }
  },
  methods: {
    validateLink () {
      this.validateLoading = true
      setTimeout(() => {
        if (this.link.includes('linkedin.com')) {
          const name = this.link?.replace('https://', '')
            .replace('http://', '')
            .replace('www.linkedin.com/in/', '')
            .replace('linkedin.com/in/', '')
            .replace('www.linkedin.com/company/', '')
            .replace('linkedin.com/company/', '')

          this.linkedin = {
            name: `${name.split('-')[0]} ${name.split('-')[1] || ''}`.replace('/', '')
          }
        } else {
          this.linkedin = null
          this.$toasted.error('Linkedin profile URL is in valid.')
        }
        this.validateLoading = false
      }, 1400)
    },
    async getUser () {
      const user = await this.$axios.get(`/user/${this.$store.state.auth.user._id}`)
      this.$store.commit('auth/setUser', user.data.data)
    },
    async addLinkedIn () {
      this.connectLoading = true
      await this.$axios.put(`/user/${this.$store.state.auth.user._id}`, {
        linkedin: this.link
      })
      await this.getUser()
      this.connectLoading = false
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
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
    background: #00407B;
    margin: 0;
    margin-top: 2rem;
  }
  .primary-btn.white {
    background: #FFFFFF;
    color: #00407B;
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
    color: #00407B;
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
    color: #00407B;
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

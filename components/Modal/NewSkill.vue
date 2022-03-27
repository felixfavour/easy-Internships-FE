<template>
  <div class="modal-ctn">
    <div ref="modal" class="modal side-modal-up new-skill">
      <div class="header">
        Create a New Skill
        <button class="clear-btn" @click="closeModal">
          <IconClose />
        </button>
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <label for="image" class="input-image">
            <div v-if="$store.state.loading && loading === 'image'" class="message">
              <Loader />
            </div>
            <div v-else class="message">
              <IconCamera />
              <div v-if="image">{{ image.name }}</div>
              <div v-else>Click to add picture</div>
            </div>
            <input type="file" name="" @input="image = $event.target.files[0]; uploadImage($event.target.files[0])">
          </label>
        </div>
        <div class="form-group">
          <input v-model="name" type="name">
          <label for="name">
            Skill Name
          </label>
        </div>
        <button class="primary-btn dark" @click="createSkill">
          <Loader v-if="$store.state.loading && loading === 'signup'" class="mr-6" /> CREATE SKILL
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSkill',
  data () {
    return {
      image: null,
      name: '',
      imageUrl: '',
      loading: ''
    }
  },
  methods: {
    closeModal () {
      this.$refs.modal.classList.remove('side-modal-up')
      this.$refs.modal.classList.add('side-modal-down')
      window.setTimeout(() => {
        this.$emit('close-modal')
      }, 600)
    },
    async uploadImage (file) {
      const fd = new FormData()
      fd.append('file', file)
      this.loading = 'image'
      const result = await this.$axios.post('/file', fd)
      this.imageUrl = result.data.data.Location
    },
    async createSkill () {
      this.loading = 'signup'
      await this.$axios.post('/skill', {
        user_id: this.$store.state.auth.user._id,
        name: this.name,
        popular: false,
        image: this.imageUrl
      })
      this.$emit('close-modal')
      this.$nuxt.$emit('refresh')
    }
  }
}
</script>

<style scoped>
  .modal-ctn {
    display: flex;
    justify-content: flex-end;
  }
  .clear-btn {
    height: auto;
    padding: 4px;
  }
  .primary-btn.dark {
    background: var(--primary-dark);
    width: 100%;
    margin-top: 3rem;
  }
  .modal {
    background: #FFFFFF;
    min-height: 100vh;
    width: 550px;
    padding: 3%;
    border-radius: 24px 0 0 24px;
  }
  .header {
    font-size: 2rem;
    color: var(--primary-dark);
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-image {
    background: #007BEC;
    height: 250px;
    display: grid;
    place-items: center;
    border-radius: 24px;
    margin: 2rem 0;
    color: #FFFFFF;
    cursor: pointer;
    position: relative;
  }
  .input-image input {
    height: 250px;
    cursor: pointer;
  }
  .input-image:active {
    background: #0058aa;
  }
  .message {
    text-align: center;
  }

  .side-modal-up {
    animation: side-modal-up .6s ease-in-out forwards;
    -webkit-animation: side-modal-up .6s ease-in-out forwards;
  }
  .side-modal-down {
    animation: side-modal-down .6s ease-in-out forwards;
    -webkit-animation: side-modal-down .6s ease-in-out forwards;
  }

  @keyframes modal-down {
    0% {
      opacity: 1;
      transform: translateY(0);
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
  }
    100% {
      opacity: 0;
      transform: translateY(20px);
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
  }
  }

  @keyframes side-modal-up {
    0% {
      opacity: 0;
      transform: translateX(700px);
      -webkit-transform: translateX(700px);
      -moz-transform: translateX(700px);
      -ms-transform: translateX(700px);
      -o-transform: translateX(700px);
    }
    100% {
      opacity: 1;
      transform: translateX(0vw);
      -webkit-transform: translateX(0vw);
      -moz-transform: translateX(0vw);
      -ms-transform: translateX(0vw);
      -o-transform: translateX(0vw);
    }
  }

  @keyframes side-modal-down {
    0% {
      opacity: 1;
      transform: translateX(0vw);
      -webkit-transform: translateX(0vw);
      -moz-transform: translateX(0vw);
      -ms-transform: translateX(0vw);
      -o-transform: translateX(0vw);
    }
    100% {
      opacity: 0;
      transform: translateX(700px);
      -webkit-transform: translateX(700px);
      -moz-transform: translateX(700px);
      -ms-transform: translateX(700px);
      -o-transform: translateX(700px);
  }
  }
</style>

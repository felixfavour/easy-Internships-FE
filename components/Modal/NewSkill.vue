<template>
  <div class="modal-ctn">
    <div class="modal new-skill">
      <div class="header">
        Create a New Skill
        <button class="clear-btn" @click="$emit('close-modal')">
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
    background: #00407B;
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
    color: #00407B;
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
</style>

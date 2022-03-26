<template>
  <div class="modal-ctn">
    <div ref="modal" class="modal side-modal-up new-skill">
      <div class="header">
        Review {{ employer.user.full_name }}
        <button class="clear-btn" @click="closeModal">
          <IconClose />
        </button>
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <RatingBar @rating-value="rating = $event" />
          <label for="name">
            Rate Employer
          </label>
        </div>
        <div v-if="rating" class="others come-down-sm">
          <div class="form-group">
            <input v-model="title" type="name" placeholder="My Review Title">
            <label for="name">
              Review Title
            </label>
          </div>
          <div class="form-group">
            <input v-model="tagline" placeholder="Country Manager at Company X (1995 - 2020)" type="name">
            <label for="name">
              User Title - optional
            </label>
          </div>
          <div class="form-group">
            <textarea v-model="body" placeholder="Say something about employer" type="name" />
            <label for="name">
              Review Body
            </label>
          </div>
          <div class="form-group">
            <div class="row row-3">
              <button
                v-for="tag in tags"
                :key="tag"
                :class="['chip-btn', (selectedTags.includes(tag) ? 'active' : '')]"
                @click="addTag(tag)"
              >
                {{ tag }}
              </button>
            </div>
            <label for="name">
              Review Tags (select all that apply)
            </label>
          </div>
          <button :disabled="!(body.length > 5 && title.length > 0 && rating >= 1)" class="primary-btn dark" @click="addReview">
            <Loader v-if="$store.state.loading && loading === 'review'" class="mr-6" /> ADD REVIEW
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddReview',
  props: {
    employer: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      title: '',
      body: '',
      tagline: '',
      rating: undefined,
      loading: '',
      selectedTags: [],
      tags: [...this.$store.state.reviewTags]
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
    addTag (tag) {
      if (this.selectedTags.includes(tag)) {
        this.selectedTags = this.selectedTags.filter(t => t !== tag)
      } else {
        this.selectedTags.push(tag)
      }
    },
    async addReview () {
      this.loading = 'review'
      await this.$axios.post('/employer/review', {
        user_id: this.$store.state.auth.user._id,
        reviewer_name: this.$store.state.auth.user.full_name,
        employer_id: this.employer._id,
        user_tagline: this.tagline,
        title: this.title,
        body: this.body,
        tags: this.selectedTags,
        rating: this.rating,
        user_voted: true
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
  textarea {
    min-height: 100px;
  }

  /* ROW 3 */
  .row-3 {
    display: flex;
    flex-wrap: wrap;
  }
  .chip-btn {
    margin-right: 12px;
    height: 30px;
    display: grid;
    place-items: center;
    padding: 6px 12px;
    background: #FFFFFF;
    border: 1px solid #AAABAC;
    border-radius: 30px;
    color: #6F6F6F;
    margin-bottom: 8px;
  }
  .chip-btn.active, .chip-btn.active:hover {
    background: var(--primary-dark);
    color: #FFFFFF;
    border-color: var(--primary-dark);
  }
  .chip-btn:hover {
    background: #AAABAC;
    color: #FFFFFF;
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

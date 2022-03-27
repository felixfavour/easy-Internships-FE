<template>
  <div class="modal-ctn">
    <div ref="modal" class="modal side-modal-up new-skill">
      <div class="header">
        Enrol a new Student
        <button class="clear-btn" @click="closeModal">
          <IconClose />
        </button>
      </div>
      <div v-if="newUser" class="student-enrolled">
        Your Student has been enrolled. <br>
        Here are the student's credentials. Please keep this information private between you and your student. <br> <br>
        <b>Email:</b> {{ email }} <br>
        <b>Password:</b> {{ password }}
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <input v-model="fullName" type="name">
          <label for="name">
            Full Name
          </label>
        </div>
        <div class="form-group">
          <input v-model="email" type="name">
          <label for="name">
            Email
          </label>
        </div>
        <div class="form-group">
          <input v-model="username" type="name">
          <label for="name">
            Username
          </label>
        </div>
        <div class="form-group">
          <input v-model="phone" type="name">
          <label for="name">
            Phone
          </label>
        </div>
        <button class="primary-btn dark" @click="signUpAction">
          <Loader v-if="loading" class="mr-6" /> ENROL STUDENT
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewStudent',
  data () {
    return {
      fullName: '',
      email: '',
      username: '',
      phone: '',
      password: '',
      newUser: null,
      loading: false
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
    generatePassword () {
      this.password = (Math.random() + 1).toString(36).substring(4)
      return this.password
    },
    async signUpAction () {
      this.loading = true
      const user = await this.$axios.post('/auth/signup', {
        full_name: this.fullName,
        email: this.email,
        username: this.username,
        password: this.generatePassword(),
        student_school: this.$store.state.auth.user._id,
        type: 'student',
        phone: this.phone,
        location: 'Dubai',
        tagline: `${this.$store.state.auth.user.full_name} Student`,
        bio: `${this.$store.state.auth.user.full_name} Student`
      })
      this.loading = false
      this.newUser = user.data.data
      this.$nuxt.$emit('refresh')
    }
  }
}
</script>

<style scoped>
  .student-enrolled {
    background: var(--primary-light);
    padding: 24px;
    border-radius: 24px;
    margin-bottom: 24px;
  }
  .student-enrolled b {
    font-weight: 500;
  }
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
    font-size: 1.1rem;
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

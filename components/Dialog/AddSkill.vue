<template>
  <div class="modal-ctn">
    <div ref="modal" class="modal new-skill come-down-sm">
      <div class="header">
        Add Skill
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <textarea v-model="info" placeholder="Special information about you with this skill, tools you use for this skill, etc." />
        </div>
        <div class="actions">
          <button class="primary-btn white" @click="$emit('close-modal')">
            Cancel
          </button>
          <button class="primary-btn dark" @click="addSkill">
            <Loader v-if="$store.state.loading" />
            Add Skill
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSkill',
  props: {
    skill: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      info: ''
    }
  },
  methods: {
    async addSkill () {
      await this.$axios.post('/skill/user', {
        skill_id: this.skill._id,
        user_id: this.$store.state.auth.user._id,
        user_avatar: this.$store.state.auth.user.avatar,
        info: this.info
      })
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
</style>

<template>
  <div class="modal-ctn">
    <div class="modal new-skill">
      <div class="header">
        Add Skill
      </div>
      <form @submit.prevent="">
        <div class="form-group">
          <textarea placeholder="Special information about you with this skill, tools you use for this skill, etc." />
        </div>
        <div class="actions">
          <button class="primary-btn white" @click="$emit('close-modal')">
            Cancel
          </button>
          <button class="primary-btn dark">
            Add Skill
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewSkill'
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
</style>

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
            <div class="message">
              <IconCamera />
              <div>Click to add picture</div>
            </div>
            <input type="file" name="">
          </label>
        </div>
        <div class="form-group">
          <input type="email">
          <label for="email">
            Skill Name
          </label>
        </div>
        <button class="primary-btn dark">
          CREATE SKILL
        </button>
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

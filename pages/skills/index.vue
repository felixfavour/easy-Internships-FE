<template>
  <div class="performance-section">
    <PageBanner
      :data="{
        sub: 'What makes you unique, prove your worth',
        head: 'My Skills',
        bgName: 'bg4',
        hasSearch: false }"
    />
    <div class="page section">
      <div class="inner">
        <div class="my-skills">
          <div class="card-grid">
            <SkillCard v-for="index in 3" :key="index" />
          </div>
          <button class="clear-btn">
            View More
          </button>
        </div>
        <div class="new-skill-card">
          <div class="text">
            Have a skill that is missing below?
          </div>
          <button class="primary-btn" @click="newSkillModal = true">
            + CREATE NEW SKILL
          </button>
        </div>
        <div class="add-skill">
          <div class="header">
            <div class="text">
              Add a Skill
            </div>
            <button class="clear-btn">
              View More
            </button>
          </div>
          <div class="card-grid">
            <SkillCard v-for="index in 3" :key="index" />
          </div>
        </div>
      </div>
    </div>
    <ModalNewSkill v-if="newSkillModal" @close-modal="newSkillModal = false" />
  </div>
</template>

<script>
export default {
  name: 'Skills',
  layout: 'dashLayout',
  data () {
    return {
      newSkillModal: false
    }
  }
}
</script>

<style scoped>
  .clear-btn {
    margin-bottom: 8px;
  }
  .primary-btn {
    width: 200px;
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 32%);
    /* grid-template-columns: repeat(4, 24.5%); */
    column-gap: 1.8%;
  }
  .my-skills {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .add-skill .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .new-skill-card {
    background: url('~assets/images/missing-skill.png');
    background-size: cover;
    height: 130px;
    padding: 24px 5%;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .new-skill-card .text {
    color: #00407B;
    font-size: 1.8rem;
    font-weight: 600;
  }
</style>

<template>
  <div class="skill-card">
    <div class="row-1" :style="`background-image: url(${skill.image})`">
      <div class="bg-overlay" />
      <div v-if="skill.popular" class="popular">
        Popular skill
      </div>
      <div class="skill-name">
        {{ skill.name }}
      </div>
    </div>
    <DialogAddSkill
      v-if="addSkillDialog"
      :skill="skill"
      @close-modal="addSkillDialog = false"
    />
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    skill: {
      type: Object,
      default: () => {}
    },
    mySkill: {
      type: String,
      default: () => null
    },
    userSkill: {
      type: String,
      default: () => null
    }
  },
  data () {
    return {
      addSkillDialog: false
    }
  },
  methods: {
    async removeSkill () {
      await this.$axios.delete(`/skill/user/${this.mySkill}`)
      this.$nuxt.$emit('refresh')
    }
  }
}
</script>

<style scoped>
  .skill-card {
    background: #FFFFFF;
    box-shadow: 0px 1px 5px 2px rgba(0, 123, 236, 0.15);
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  .primary-btn {
    height: 40px;
    font-size: 0.775rem;
    width: 120px;
    position: relative;
    right: 12px;
  }
  .primary-btn.danger {
    background: #9E0000;
  }
  .row-1 {
    height: 120px;
    position: relative;
    background: #cecece no-repeat;
    background-size: cover;
    border-radius: 8px;
  }
  .skill-name {
    font-weight: 600;
    font-size: 1.3rem;
    position: absolute;
    bottom: 16px;
    left: 16px;
    color: #FFFFFF;
  }
  .popular {
    font-size: 0.775rem;
    position: absolute;
    top: 12px;
    right: 12px;
    color: var(--primary-dark);
    background: #B0D9FF;
    padding: 3px 6px;
    border-radius: 4px;
    font-weight: 600;
  }
  .bg-overlay {
    inset: 0;
    position: absolute;
    background: #00000070;
    border-radius: 8px;
  }
  .row-2 {
    padding: 18px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .people {
    display: flex;
    position: relative;
  }
  .last.person {
    position: absolute;
    left: 68px !important;
    opacity: 0.5;
  }
  .person {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 600;
    font-size: 0.875rem;
    color: #FFFFFF;
    position: relative;
    background-size: contain;
  }
  .person:nth-child(1) {
    left: 0;
    background-image: url('~assets/images/person.png');
  }
  .person:nth-child(2) {
    left: -12px;
    background-image: url('~assets/images/person.png');
  }
  .person:nth-child(3) {
    left: -24px;
    background-image: url('~assets/images/person.png');
  }
  .person:nth-child(4) {
    background: #007BEC;
    left: -36px;
  }
</style>

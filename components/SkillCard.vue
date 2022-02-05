<template>
  <div class="skill-card">
    <div class="row-1">
      <div class="bg-overlay" />
      <div class="popular">
        Popular skill
      </div>
      <div class="skill-name">
        Coding
      </div>
    </div>
    <div class="row-2">
      <div class="people">
        <div class="person" />
        <div class="person" />
        <div class="person" />
        <div class="person">
          +50
        </div>
      </div>
      <div class="action">
        <button class="primary-btn">
          + ADD SKILL
        </button>
        <!-- <button class="primary-btn danger">
          REMOVE SKILL
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
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
    background-image: url('~assets/images/coding.png');
    border-radius: 8px 8px 0 0;
  }
  .row-1:nth-child(2) {
    background-image: url('~assets/images/marketing.png');
  }
  .row-1:nth-child(3) {
    background-image: url('~assets/images/social-media.png');
  }
  .skill-name {
    font-weight: 600;
    font-size: 1.3rem;
    position: absolute;
    bottom: 12px;
    left: 12px;
    color: #FFFFFF;
  }
  .popular {
    font-size: 0.775rem;
    position: absolute;
    top: 12px;
    right: 12px;
    color: #00407B;
    background: #B0D9FF;
    padding: 3px 6px;
    border-radius: 4px;
    font-weight: 600;
  }
  .bg-overlay {
    inset: 0;
    position: absolute;
    background: #00000060;
    border-radius: 8px 8px 0 0;
  }
  .row-2 {
    padding: 18px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .people {
    display: flex;
  }
  .person {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 600;
    font-size: 0.775rem;
    color: #FFFFFF;
    position: relative;
    background-size: contain;
  }
  .person:nth-child(1) {
    left: 0;
    background-image: url('~assets/images/person1.png');
  }
  .person:nth-child(2) {
    left: -12px;
    background-image: url('~assets/images/person2.png');
  }
  .person:nth-child(3) {
    left: -24px;
    background-image: url('~assets/images/person3.png');
  }
  .person:nth-child(4) {
    background: #007BEC;
    left: -36px;
  }
</style>

<template>
  <div :id="party.link.substring(1)" class="container">
    <div class="left-side">
      <div class="text-1">
        {{ party.question }}
      </div>
      <div class="text-2" :style="`color: ${party.colour}`">
        {{ party.type }}
      </div>
      <div class="text-3">
        {{ party.content }}
      </div>
      <a target="_blank" class="action-btn" :style="`background: ${party.colour}`" href="http://">
        {{ party.action }}
      </a>
    </div>
    <div class="right-side">
      <div class="showcase-behind" :style="`background: ${party.colour}`" />
      <div :class="[ 'showcase', showcase]" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    party: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    showcase () {
      if (this.party.type.includes('Student')) {
        return 'showcase-2'
      } else if (this.party.type.includes('Employer')) {
        return 'showcase-3'
      }
      return 'showcase-1'
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 7% 0;
  }
  .left-side {
    width: 45%;
    max-width: 500px;
  }
  .right-side {
    width: 50%;
    max-width: 755px;
    height: 450px;
    position: relative;
    margin-right: 50px;
  }
  .showcase-behind {
    width: 100%;
    height: 100%;
    background: var(--primary);
    border-radius: 4px;
  }
  .showcase {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    top: -40px;
    left: 40px;
    background: url(~assets/images/web-hero.webp) no-repeat center;
    background-size: cover;
    border-radius: 4px;
    border: 4px solid var(--primary-dark);
  }
  .showcase-1 {
    background: url(~assets/images/school-screen.webp) no-repeat center;
  }
  .showcase-2 {
    background: url(~assets/images/student-screen.webp) no-repeat center;
  }
  .showcase-3 {
    background: url(~assets/images/employer-screen.webp) no-repeat center;
  }
  .action-btn {
    width: 220px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    border-radius: 4px;
    background: #00000068;
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    margin-top: 2rem;
  }
  .text-1 {
    font-size: 0.8rem;
    opacity: 0.7;
  }
  .text-2 {
    font-size: 2rem;
    margin: 2rem 0;
    margin-top: 0.8rem;
    font-weight: 800;
  }
  .text-3 {
    font-size: 1.3rem;
    line-height: 2.1rem;
    margin-bottom: 3rem;
  }
</style>

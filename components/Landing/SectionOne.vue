<template>
  <div class="container">
    <div class="left-side">
      <div class="hero-behind" />
      <div class="hero" />
    </div>
    <div class="right-side">
      <div class="text-1">
        We're making sure you <span>never settle</span> for less.
      </div>
      <div class="text-2">
        Simplifying Internship employments for all students, employers and schools
      </div>
      <nuxt-link class="see-btn" to="/">
        See How
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 13L12 20L19 13M12 20V4V20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 800px;
  }
  .left-side {
    width: 50%;
    max-width: 800px;
    height: 500px;
    position: relative;
    margin-right: 50px;
  }
  .hero-behind {
    width: 100%;
    height: 100%;
    background: var(--primary);
    border-radius: 4px;
  }
  .hero {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    top: -40px;
    left: 40px;
    background: url(~assets/images/web-hero.webp) no-repeat center;
    background-size: cover;
    border-radius: 4px;
  }
  .right-side {
    width: 45%;
    max-width: 500px;
  }
  .text-1 {
    font-size: 3.5rem;
    line-height: 4.5rem;
    color: var(--primary-dark);
    font-weight: 800;
    margin-bottom: 1rem;
  }
  .text-1 > span {
    color: var(--primary);
  }
  .text-2 {
    color: var(--primary-dark);
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 500;
    margin-bottom: 3rem;
  }
  .see-btn {
    width: 220px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    border-radius: 4px;
    background: var(--primary);
    color: #FFFFFF;
    margin-bottom: 20%;
  }
</style>

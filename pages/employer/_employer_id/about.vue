<template>
  <div class="employer-details">
    <div class="section">
      <div class="inner">
        <section class="about">
          <div class="header">
            About Google
          </div>
          <p class="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores aspernatur esse sapiente ducimus alias repudiandae eligendi cumque temporibus voluptates, omnis a inventore dolorum pariatur, facilis provident perspiciatis vel odio beatae laboriosam exercitationem nostrum mollitia quaerat adipisci! Incidunt, ipsum fugit asperiores quod totam non assumenda. Modi maxime aperiam blanditiis maiores?
          </p>
        </section>
        <section class="about">
          <div class="header">
            Google in cards
          </div>
          <div class="sub-header">
            Brief description of company in cards
          </div>
          <div class="content card-grid">
            <InfoCard :info="{ label: 'CEO', value: 'Favour Felix' }" />
            <InfoCard :info="{ label: 'Founded', value: '2021' }" />
            <InfoCard :info="{ label: 'Business Sector', value: 'Technology' }" />
          </div>
        </section>
        <section class="about">
          <div class="content">
            <img src="~assets/images/employer-bg.png" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias aperiam autem eius delectus fugiat ea laborum labore fugit adipisci rerum, laudantium asperiores dolores expedita a totam corrupti quam itaque impedit commodi cum fuga eaque? Repudiandae veniam fuga voluptas dolor! Quod voluptatibus ut fugiat porro cumque expedita molestias cum sint.</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutEmployer',
  layout: 'dashLayout'
}
</script>

<style scoped>
  section {
    margin-bottom: 5%;
  }
  .header {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .sub-header {
    font-size: 0.9rem;
    opacity: 0.5;
    margin-top: 4px;
  }
  .content {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 12px;
  }
  .content img {
    width: 100%;
  }
  .card-grid {
    display: flex;
  }
  .card-grid > div {
    margin-right: 16px;
  }
</style>

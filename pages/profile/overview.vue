<template>
  <div class="page">
    <section class="about">
      <div class="header">
        About Favour
      </div>
      <p class="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur asperiores aspernatur esse sapiente ducimus alias repudiandae eligendi cumque temporibus voluptates, omnis a inventore dolorum pariatur, facilis provident perspiciatis vel odio beatae laboriosam exercitationem nostrum mollitia quaerat adipisci! Incidunt, ipsum fugit asperiores quod totam non assumenda. Modi maxime aperiam blanditiis maiores?
      </p>
    </section>
    <section class="about">
      <div class="content card-grid">
        <InfoCard :info="{ label: 'CEO', value: 'Favour Felix' }" />
        <InfoCard :info="{ label: 'Founded', value: '2021' }" />
        <InfoCard :info="{ label: 'Business Sector', value: 'Technology' }" />
      </div>
    </section>
    <section class="about">
      <div class="header">
        School
      </div>
      <div class="content">
        Middlesex University, Dubai
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProfileOverview',
  layout: 'dashLayout'
}
</script>

<style scoped>
  section {
    margin-bottom: 5%;
    max-width: 1100px;
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

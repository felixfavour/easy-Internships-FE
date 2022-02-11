<template>
  <div class="review-card">
    <div class="row row-1">
      <div class="main">
        <div class="text-main">
          Their lovely work culture
        </div>
        <div class="text-sub">
          Software Engineer, 2019 till date - posted on 26 Aug, 2021
        </div>
      </div>
      <div class="rating">
        <h2 class="count">
          4.0
        </h2>
        <IconStarRating rating="4.0" :brackets="false" />
      </div>
    </div>
    <p class="row row-2">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor adipisci vel iusto iure beatae nemo, quasi perspiciatis neque? Aliquid repudiandae minima possimus culpa aut, expedita, voluptate laudantium sed quas, mollitia hic saepe maxime tenetur libero eveniet eum voluptatem. Laudantium cupiditate beatae accusamus aliquam et, fuga fugiat alias eos ipsam nulla.
    </p>
    <div class="row row-3">
      <button class="chip-btn">
        Salary
      </button>
      <button class="chip-btn">
        Management
      </button>
      <button class="chip-btn">
        Work/Life
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard'
}
</script>

<style scoped>
  .review-card {
    padding: 28px;
    background: #FFFFFF;
    box-shadow: 0px 1px 5px 2px rgba(0, 123, 236, 0.15);
    border-radius: 8px;
    margin-bottom: 1.2rem;
  }
  .row-1 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .text-main {
    color: #00407B;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .text-sub {
    color: #00000070;
    font-size: 0.85rem;
    margin-top: 3px;
  }
  .rating {
    font-weight: 900;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #00407B;
  }

  /* ROW 2 */
  .row-2 {
    font-size: 0.9rem;
    line-height: 1.4rem;
    margin: 1rem 0;
  }

  /* ROW 3 */
  .row-3 {
    display: flex;
  }
  .chip-btn {
    margin-right: 12px;
    height: 30px;
    display: grid;
    place-items: center;
    padding: 6px 12px;
    background: #FFFFFF;
    border: 1px solid #AAABAC;
    border-radius: 30px;
    color: #6F6F6F;
  }
</style>

<template>
  <div :class="['question-card', original ? 'bordered' : '']">
    <div v-if="!original" class="votes">
      <button class="clear-btn">
        <IconUpvote :filled="true" />
        <!-- <IconUpvote /> -->
      </button>
      <span>
        127
      </span>
      <button class="clear-btn">
        <!-- <IconDownvote :filled="true" /> -->
        <IconDownvote />
      </button>
    </div>
    <div class="main">
      <div class="row row-1">
        <div class="main">
          <div class="text-main">
            Their lovely work culture
          </div>
          <div class="text-sub">
            <IconPersonCheck v-if="original" class="icon" />
            answered on 26 Aug, 2021
          </div>
        </div>
      </div>
      <p class="row row-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor adipisci vel iusto iure beatae nemo, quasi perspiciatis neque? Aliquid repudiandae minima possimus culpa aut, expedita, voluptate laudantium sed quas, mollitia hic saepe maxime tenetur libero eveniet eum voluptatem. Laudantium cupiditate beatae accusamus aliquam et, fuga fugiat alias eos ipsam nulla.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerCard',
  props: {
    original: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style scoped>
  .clear-btn {
    height: 35px;
    min-width: 45px;
    display: grid;
    place-items: center;
  }
  .bordered {
    border: 1px solid #007BEC;
  }
  .question-card {
    padding: 28px;
    background: #FFFFFF;
    box-shadow: 0px 1px 5px 2px rgba(0, 123, 236, 0.15);
    border-radius: 8px;
    margin-bottom: 1.2rem;
    display: flex;
  }
  .votes {
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    font-size: 1.2rem;
    color: #007BEC;
  }
  .row-1 {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .text-main {
    color: #007BEC;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .text-sub {
    color: #00000070;
    font-size: 0.85rem;
    margin-top: 3px;
    display: flex;
    align-items: center;
  }
  .text-sub > .icon {
    margin-right: 6px;
  }
  .rating {
    font-weight: 900;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #007BEC;
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
  .primary-btn {
    margin-right: 12px;
    height: 40px;
    padding: 6px 12px;
    border-radius: 30px;
    color: #FFFFFF;
  }
  .primary-btn.outlined {
    display: flex;
    justify-content: space-around;
    margin-right: 12px;
    height: 40px;
    padding: 6px 18px;
    background: #FFFFFF;
    border: 1px solid #007BEC;
    border-radius: 30px;
    width: 170px;
    color: #007BEC;
  }
</style>

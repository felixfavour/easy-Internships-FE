<template>
  <div class="rating-bar">
    <svg
      id="star1"
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="#ececec"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z"
        @click="check($event.srcElement)"
        @mouseover="check($event.srcElement)"
      />
    </svg>
    <svg
      id="star2"
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="#ececec"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" @click="check($event.srcElement)" @mouseover="check($event.srcElement)" />
    </svg>
    <svg
      id="star3"
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="#ececec"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" @click="check($event.srcElement)" @mouseover="check($event.srcElement)" />
    </svg>
    <svg
      id="star4"
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="#ececec"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" @click="check($event.srcElement)" @mouseover="check($event.srcElement)" />
    </svg>
    <svg
      id="star5"
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="#ececec"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5 0L12.8574 7.25532H20.4861L14.3143 11.7394L16.6717 18.9947L10.5 14.5106L4.32825 18.9947L6.68565 11.7394L0.513906 7.25532H8.1426L10.5 0Z" @click="check($event.srcElement)" @mouseover="check($event.srcElement)" />
    </svg>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rating: 0
    }
  },
  methods: {
    check (dom) {
      this.rating = 0
      const ratingStars = document.querySelector('.rating-bar')

      // Firstly, Grey out all stars
      for (const child of ratingStars.children) {
        child.style.fill = '#ececec'
      }

      for (const star of ratingStars.children) {
        if (star.children[0] === dom) {
          star.style.fill = '#F9A825'
          this.rating = this.rating + 1
          break
        } else {
          star.style.fill = '#F9A825'
          this.rating++
        }
      }

      this.$emit('rating-value', this.rating)
    },
    uncheck () {
      this.rating = 0
      const ratingStars = document.querySelector('.rating-bar')

      // Grey out all stars
      for (const child of ratingStars.children) {
        child.style.fill = '#ececec'
      }
    }
  }

}
</script>

<style>
.rating-bar {
  margin-bottom: 8px;
  display: flex;
  /* border: 1px solid var(--primary);
  border-radius: 16px;
  padding: 8%; */
}
.rating-bar svg {
  color: pink;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-right: 12px;
}
</style>

<template>
  <div class="employers-ctn page">
    <PageBanner
      :data="{
        sub: 'See all students enrolled in your institution',
        head: 'All Students',
        bgName: 'bg1',
        hasSearch: true }"
    />
    <div class="section">
      <div class="inner">
        <LargeLoader v-if="$store.state.loading && loading === 'popular'" />
        <div class="new-skill-card">
          <div class="text">
            Enroll multiple students in one click.
          </div>
          <button class="primary-btn enrol-multiple-btn" @click="multipleEnrollModal = true">
            ENROLL MULTIPLE STUDENTS
          </button>
        </div>
        <TableStudent />
      </div>
    </div>
    <ModalEnrollMultipleStudents v-if="multipleEnrollModal" @close-modal="multipleEnrollModal = false" />
  </div>
</template>

<script>
export default {
  name: 'AllStudents',
  layout: 'dashLayout',
  data () {
    return {
      employers: [],
      loading: '',
      multipleEnrollModal: false
    }
  },
  created () {
    // this.getPopularEmployers()
  },
  methods: {
    async getPopularEmployers () {
      this.loading = 'popular'
      const employers = await this.$axios.get('/employer/popular')
      this.employers = employers.data.data.filter(employer => employer !== null)
    }
  }
}
</script>

<style scoped>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(3, 32%);
    column-gap: 1.8%;
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
  .enrol-multiple-btn {
    width: 240px;
  }
</style>

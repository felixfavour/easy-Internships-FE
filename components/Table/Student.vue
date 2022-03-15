<template>
  <div class="extra-out">
    <div class="table-outer">
      <!-- <LargeLoader v-show="isLoading" /> -->
      <EmptyState v-show="!isLoading && (data.length === 0)" text="You have not enrolled any student" />
      <table v-show="data.length > 0" class="table-ctn">
        <tr>
          <th>
            Student ID
          </th>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
          <th>
            Username
          </th>
          <!-- <th>
            Date Enrolled
          </th> -->
          <th>
            Action
          </th>
        </tr>
        <tr v-for="student in data" :key="student._id" class="content-row" @click="$router.push('#')">
          <td>
            {{ student._id }}
          </td>
          <td>
            {{ student.full_name }}
          </td>
          <td>
            {{ student.email }}
          </td>
          <td>
            {{ student.username }}
          </td>
          <!-- <td class="bold">
            {{ formatDate(student.createdAt) }}
          </td> -->
          <td>
            <nuxt-link :to="`/students/${student._id}`">
              <span class="material-icons">See Student</span>
            </nuxt-link>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentTable',
  data () {
    return {
      data: [],
      isLoading: false
    }
  },
  created () {
    this.getStudents()
    this.$nuxt.$on('refresh', () => {
      this.getStudents()
    })
  },
  methods: {
    async getStudents () {
      this.isLoading = true
      const students = await this.$axios.get('/user/student')
      this.data = students.data.data.reverse()
      this.isLoading = false
    },
    formatDate (dateString) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const date = new Date(dateString)
      const month = months[date.getMonth()]
      return `${month} ${date.getDate()}, ${date.getFullYear()}`
    }
  }
}
</script>

<style scoped>
.clear-btn {
  letter-spacing: 0.02em;
  color: #000000;
  opacity: 0.7;
  font-size: 1.1rem;
  width: 100%;
  margin-top: 16px;
}
.extra-out {
  padding-bottom: 4px;
}
.table-outer {
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(86, 107, 160, 0.05);
  border-radius: 5px;
  padding: 30px 0;
}
.table-outer > .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 0 5%;
}
.header > .text {
  color: #000000;
  font-size: 1.35rem;
}
.table-outer input {
  height: 50px;
  font-size: 1rem;
  padding: 0 16px;
  padding-right: 50px;
  background: #FFFFFF;
  border: 1px solid rgba(193, 206, 200, 0.63);
  border-radius: 10px;
  width: 320px;
  color: #000000;
}
.search-input {
  position: relative;
}
.search-input svg {
  position: absolute;
  right: 16px;
  top: 16px;
}
.table-outer input::placeholder {
  color: #C1CEC8;
}
.table-ctn {
  width: 100%;
  border-spacing: 0;
}
th {
  height: 70px;
  text-transform: capitalize;
  color: #000000;
  opacity: 1;
  text-align: left;
}
td {
  height: 70px;
  color: #000000;
  border-bottom: 1px solid #ececec;
  font-size: 0.85rem;
}
td.status > span {
  background: #00a99e1a;
  border-radius: 24px;
  padding: 8px 12px;
  font-size: 14px;
}
.direct-table-ctn {
  overflow-x: auto;
}
td,th {
  border-bottom: 1px solid #00000018;
}
tr:last-child td {
  border-bottom: 0px;
}
.content-row {
  transition: 0.3s;
  /* cursor: pointer; */
}
.content-row a {
  color: var(--primary);
  font-size: 14px;
  display: inline-flex;
  align-items: center;
}
.content-row a:hover {
  color: var(--primary-dark);
}
.content-row a .material-icons {
  font-size: 14px;
  margin-left: 4px;
}
.content-row td {
  opacity: 0.7;
}
.content-row .bold {
  opacity: 1;
}
.content-row:hover {
  background: #0000001c;
}

td a {
  display: block;
  width: 100%;
}
td .circle {
  display: inline-flex;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 6px;
  margin-bottom: 4px;
  background: #15AE73;
}
.unpaid .circle {
  background: #E80000;
}
.cancelled .circle {
  background: #cecece;
}
.refunded .circle {
  background: #4e71ca;
}
th:nth-child(1), td:nth-child(1) {
  width: 15%;
  min-width: 250px;
  padding-left: 5%;
}
th:nth-child(2), td:nth-child(2) {
  width: 10%;
  min-width: 200px;
}
th:nth-child(3), td:nth-child(3) {
  width: 20%;
  min-width: 100px;
}
th:nth-child(4), td:nth-child(4) {
  width: 20%;
  min-width: 100px;
}
th:nth-child(5), td:nth-child(5) {
  width: 10%;
  min-width: 100px;
}
th:nth-child(6), td:nth-child(6) {
  width: 15%;
  min-width: 100px;
}

/* MEDIA QUERIES */

@media screen and (max-width: 1400px) {
}

@media screen and (max-width: 1050px) {
  .table-outer {
    width: 110%;
  }
  .table-outer > .header {
    height: 85px;
    justify-content: initial;
    padding-left: 3%;
  }
  .header > .text {
    font-size: 1.2rem;
    margin-right: 32px;
  }
  th:nth-child(1), td:nth-child(1) {
    padding-left: 3%;
    width: 20%;
  }
  th:nth-child(5), td:nth-child(5) {
    width: 20%;
  }
}

@media screen and (max-width: 800px) {
  .table-outer {
    width: 120%;
  }
}

@media screen and (max-width: 600px) {
  .table-outer > .header {
    height: 105px;
    flex-direction: column;
    justify-content: initial;
    align-items: initial;
    padding-left: 3%;
  }
  .table-outer input {
    width: 100%;
    font-size: 0.825rem;
    height: 40px;
  }
  .header > .text {
    font-size: 0.925rem;
    margin-bottom: 12px;
    padding-top: 16px;
  }
  .search-input {
    width: 65vw;
  }
  .search-input svg {
    top: 10px;
  }
  /* ---- */
  td, th {
    font-size: 0.825rem;
    height: 60px;
  }
  .table-outer {
    width: 270%;
  }
  th:nth-child(1), td:nth-child(1) {
    padding-left: 2%;
  }
}
</style>

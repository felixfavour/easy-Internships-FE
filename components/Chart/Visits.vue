<template>
  <canvas ref="chart" />
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
export default {
  name: 'VisitsChart',
  props: {
    visits: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      labels: [],
      dataSets: []
    }
  },
  mounted () {
    this.calculateChartValues()
  },
  methods: {
    calculateChartValues () {
      const uniqueDates = new Set()
      let labels = []
      const dataSets = []

      // Get unique chart labels
      for (const data of this.visits) {
        uniqueDates.add(data.createdAt.slice(0, 10))
      }
      labels = Array.from(uniqueDates)

      // Use labels to get data set
      for (const label of labels) {
        let users = 0
        for (const data of this.visits) {
          if (data.createdAt.slice(0, 10) === label) {
            users += 1
          }
        }
        dataSets.push(users)
      }
      this.labels = this.chartDates(labels)
      this.dataSets = dataSets

      this.mountChart()
    },
    mountChart () {
      // eslint-disable-next-line no-unused-vars
      const myChart = new Chart(this.$refs.chart, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: [''],
              data: this.dataSets,
              backgroundColor: [
                '#01058A',
                '#01058A',
                '#01058A'
              ],
              borderColor: [
                '#01058A',
                '#01058A',
                '#01058A'
              ]
            }
          ]
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false
              },
              plugins: {
                datalabels: {
                  display: false
                }
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                precision: 0
              }
            }
          }
        }
      })
    },
    chartDates (timestamps) {
      const dates = []
      for (const timestamp of timestamps) {
        const dateString = new Date(timestamp).toDateString()
        dates.push(dateString.replace(' ', ', ').slice(0, dateString.length - 4))
      }
      return dates
    }
  }
}
</script>

<style scoped>
  canvas {
    margin-top: 1rem;
    background: #FFFFFF;
    padding: 2rem;
    box-shadow: 0px 4px 17px 1px rgba(0, 123, 236, 0.24);
    border-radius: 6px;
  }

  /* MEDIA QUERIES */
  @media screen and (max-width: 600px) {
  }
</style>

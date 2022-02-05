<template>
  <canvas ref="chart" />
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
export default {
  name: 'VisitsChart',
  props: {
    chartData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'],
      dataSets: [10, 32, 23, 54, 45, 33, 70]
    }
  },
  mounted () {
    this.mountChart()
  },
  methods: {
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

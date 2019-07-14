<script>
import { Bar, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

const option = {
  responsive: true,
  legend: {
    display: false
  },
  tooltips: {
    fontFamily: "'Roboto', Helvetica, Arial, sans-serif",
    displayColors: false
  },
  scales: {
    xAxes: [
      {
        ticks: {
          autoSkip: false,
          fontColor: '#fff',
          fontFamily: "'Roboto', Helvetica, Arial, sans-serif",
          fontSize: 16,
          padding: 16,
          fontStyle: 'bold'
        },
        gridLines: {
          color: '#fff',
          drawTicks: false,
          drawOnChartArea: false
        },
        type: 'time',
        bounds: 'ticks',
        time: {
          unit: 'day',
          stepSize: 1,
          displayFormats: {
            day: 'M/D'
          }
        },
        offset: true
      }
    ],
    yAxes: [
      {
        gridLines: {
          color: '#fff',
          drawTicks: false,
          drawOnChartArea: false
        },
        ticks: {
          fontColor: '#fff',
          fontFamily: "'Roboto', Helvetica, Arial, sans-serif",
          fontSize: 16,
          fontStyle: 'bold',
          padding: 16,
          maxTicksLimit: 7,
          stepSize: 1,
          beginAtZero: true,
          callback: value => {
            if (value !== 0) return value;
          }
        }
      }
    ]
  },
  elements: {
    rectangle: {
      backgroundColor: '#fff'
    }
  }
};

export default {
  name: 'ReportChart',
  extends: Bar,
  mixins: [reactiveProp],
  computed: {
    chartOption() {
      return option;
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOption);
  }
};
</script>

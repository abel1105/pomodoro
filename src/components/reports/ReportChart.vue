<script>
import { Bar } from 'vue-chartjs';

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
  data() {
    return {
      data: {
        datasets: [
          {
            data: [
              { x: '2019-07-01', y: 20 },
              { x: '2019-07-02', y: 10 },
              { x: '2019-07-03', y: 14 },
              { x: '2019-07-04', y: 15 },
              { x: '2019-07-05', y: 16 },
              { x: '2019-07-06', y: 17 },
              { x: '2019-07-07', y: 17 }
            ],
            backgroundColor: ['#fff', '#fff', '#FF4384']
          }
        ]
      },
      option
    };
  },
  mounted() {
    this.renderChart(this.data, this.option);
  }
};
</script>

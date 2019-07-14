<template>
  <div class="panel-container reportPanel">
    <div class="panel-container-title">FOCUS TIME</div>
    <div class="reportPanel-number">
      <ReportNumber name="TODAY" :number="today" />
      <ReportNumber name="WEEK" :number="week" />
    </div>

    <div class="panel-container-title">CHART</div>
    <div class="reportPanel-chart">
      <report-chart :height="300" :chart-data="chartData" />
    </div>
  </div>
</template>

<script>
import ReportNumber from '@/components/reports/ReportNumber';
import ReportChart from '@/components/reports/ReportChart';
export default {
  name: 'ReportPanel',
  components: { ReportChart, ReportNumber },
  computed: {
    today() {
      return this.$store.state.report.today;
    },
    week() {
      return this.$store.state.report.week;
    },
    chartData() {
      return {
        datasets: [
          {
            data: this.data,
            backgroundColor: [
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              '#fff',
              this.isWorking ? '#FF4384' : '#00A7FF'
            ]
          }
        ]
      };
    },
    data() {
      return this.$store.state.report.history;
    },
    isWorking() {
      return this.$store.state.main.isWorking;
    }
  }
};
</script>

<style lang="scss" scoped>
.reportPanel {
  &-number {
    display: flex;

    div {
      flex: 1 1 auto;
    }
  }

  &-chart {
    height: 300px;
  }
}
</style>

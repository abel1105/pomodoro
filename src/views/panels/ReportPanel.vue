<template>
  <div class="panel-container reportPanel">
    <div class="panel-container-title">FOCUS TIME</div>
    <div class="reportPanel-number">
      <ReportNumber name="TODAY" />
      <ReportNumber name="WEEK" />
    </div>

    <div class="panel-container-title">CHART</div>
    <div class="reportPanel-chart">
      <report-chart :height="300" />
    </div>
  </div>
</template>

<script>
import ReportNumber from '@/components/reports/ReportNumber';
import ReportChart from '@/components/reports/ReportChart';
export default {
  name: 'ReportPanel',
  components: { ReportChart, ReportNumber }
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

<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="500"
    :height="200"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import students from "../dummy/students.js";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const labels = students.map((students) => students.name);

const studentAvgTime = students.map((students) => students.avg_time);

export default {
  name: "BarChartIndividual",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 300,
    },
    height: {
      type: Number,
      default: 300,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        labels: labels,

        datasets: [
          {
            data: studentAvgTime,
            backgroundColor: ["#FFDDDE"],
          },
        ],
      },
      chartOptions: {
        responsive: false,

        plugins: {
          legend: {
            display: false,
          },
          barPercentage: 0.9,
          categoryPercentage: 0.8,
        },
        scales: {
          x: {
            display: true,
            grid: {
              borderColor: "#873648",
              borderWidth: 2,
              drawBorder: true,
              offset: false,
              display: false,
            },
            ticks: {
              font: {
                weight: "bold",
                size: 12,
              },
            },
          },
          y: {
            display: false,
            suggestedMax: 20,
            grid: {
              offset: false,
            },
          },
        },
      },
    };
  },
};
</script>
<script setup>
import { reactive } from "vue";

const styles = reactive({
  marginLeft: "20px",
  marginTop: "50px",
  zIndex: 1,
});
</script>

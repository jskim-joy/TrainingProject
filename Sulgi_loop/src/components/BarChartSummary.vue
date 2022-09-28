<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="100"
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

const studentsStandardTime = students.map((students) => students.standard_time);

function standardAvg() {
  const sumStandard = studentsStandardTime.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sumStandard / students.length;
}

const studentsAvgTime = students.map((students) => students.avg_time);
console.log(studentsAvgTime);

function studentsAvg() {
  const sumAvg = studentsAvgTime.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sumAvg / students.length;
}

console.log(standardAvg());
console.log(studentsAvg());
export default {
  name: "BarChart",
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
        labels: ["기준", "평균"],

        datasets: [
          {
            data: [standardAvg(), studentsAvg()],
            backgroundColor: ["#EBA4A4", "#873648"],
          },
        ],
      },
      chartOptions: {
        responsive: false,
        reverse: true,
        plugins: {
          legend: { display: false },
        },
        barPercentage: 0.9,
        categoryPercentage: 0.8,

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
  zIndex: 3,
});
</script>

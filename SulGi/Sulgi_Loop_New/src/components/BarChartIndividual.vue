/**
*학생 10명의 평균시간에 대해서 막대그래프로 나타낸 부분.
*/
<template>
<!--막대그래프가 가지는 속성들. -->
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
  /* chart js 를 통해 막대그래프 라이브러리 import. */
import { Bar } from "vue-chartjs";
import students from "../dummy/students.js";

/* 막대그래프 속성들을 커스터마이징 할 수 있는 속성들 chart js로부터 import. */
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

/* 학생 10명의 이름들을 라벨로 사용하기 위해서 배열화.  */
const labels = students.map((students) => students.name);

/* 학생 10명의 평균 시간들을 데이터로 사용하기 위해서 배열화. */
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
        labels: labels, // 학생 10명의 이름 라벨로 사용.

        datasets: [
          {
            data: studentAvgTime, // 학생 10명의 평균소요시간 데이터로 사용.
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

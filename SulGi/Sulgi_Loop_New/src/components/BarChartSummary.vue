/**
* 학생 10명의 평균 기준시간과 평균 소요시간을 요약한 막대 그래프를 나타낸 부분.
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
    :width="100"
    :height="200"
  />
</template>

<script>
    /* chart js 를 통해 막대그래프 라이브러리 import. */
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


/* 막대그래프 속성들을 커스터마이징 할 수 있는 속성들 chart js로부터 import. */
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

/* 학생 10명의 기준시간을 배열화 하여 가져온다. 가져온 것을 바탕으로 평균값을 낸다. */
const studentsStandardTime = students.map((students) => students.standard_time);

function standardAvg() {
  const sumStandard = studentsStandardTime.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  ); // 학생 10명의 기준시간의 합.
  return sumStandard / students.length; //전체 기준시간의 합을 배열의 길이(10)으로 나누어 평균계산.
}

/* 학생 10명의 평균소요시간을 배열화 하여 가져온다. 가져온 것을 바탕으로 평균값을 낸다. */
const studentsAvgTime = students.map((students) => students.avg_time);

function studentsAvg() {
  const sumAvg = studentsAvgTime.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  ); // 학생 10명의 평균소요시간의 합.
  return sumAvg / students.length; // 전체 평균소요시간의 합을 배열의길이(10)으로 나누어 평균계산.
}


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
        labels: ["기준", "평균"], // 막대그래프에서 기준과 평균으로 각각 사용.

        datasets: [
          {
            data: [standardAvg(), studentsAvg()], // 평균 기준시간과 평균 소요시간을 데이터로 사용.
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

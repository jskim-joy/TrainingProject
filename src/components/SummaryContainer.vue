<template>
  <div :style="whiteBox">
    <section :style="subTitleOne">
      <h5>선택한 술기</h5>
      <h5>실습일</h5>
    </section>
    <section :style="subTitleTwo"><h5>술기명</h5></section>
    <section :style="subTitleThree">
      <h6>기준시간</h6>
      <h6>소요시간</h6>
      <h6>기준시간대비</h6>
      <h6>오류</h6>
    </section>
    <BarChart />
    <div>
      <h1>Data Test</h1>
      <div v-for="student_avg in students" :key="student_avg.student_id">
        {{ student_avg.student_id }}
        <h1></h1>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
import students from "../dummy/students.js";

export default {
  name: "SummaryContainer",
  components: { BarChart },
};
</script>
<script setup>
import { reactive } from "vue";

const whiteBox = reactive({
  border: "solid 1px black",
  borderRadius: "10px",
  width: "",
});

const subTitleOne = reactive({
  display: "flex",
  justifyContent: "space-evenly",
});

const subTitleTwo = reactive({
  display: "flex",
  paddingLeft: "500px",
});

const subTitleThree = reactive({
  display: "flex",
  paddingLeft: "200px",
  justifyContent: "space-evenly",
});
</script>

<style scoped></style>

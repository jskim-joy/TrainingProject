/** *RS_D_filtering_student의 root 페이지 (최상단). size = 360 * 720*/

<template>
  <main :style="mainStyle">
    <section>
      <div :style="titleOneFont">선택한 학생 요약</div>
      <div :style="selectedStudentSummaryStyle">
        <selected-student-summary />
      </div>
    </section>
    <section>
      <div :style="titleTwoFont">필터 결과</div>
      <div class="filterResultStyle"><filter-result /></div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import selectedStudentSummary from "./components/selectedStudentSummary.vue";
import filterResult from "./components/filterResult.vue";

const mainStyle = reactive({
  height: "720px",
  width: "360px",
  border: "2px solid #ff0000",
  backgroundColor: "#F2F2F4",
});

const titleOneFont = reactive({
  fontSize: "22px",
  fontWeight: "700",
  width: "152px",
  height: "27px",
  color: "#262626",
  marginTop: "20px",
});

const titleTwoFont = reactive({
  fontSize: "22px",
  fontWeight: "700",
  width: "86px",
  height: "27px",
  color: "#262626",
  marginTop: "40px",
});

const selectedStudentSummaryStyle = reactive({
  marginTop: "10px",
  height: "180px",
  border: "2px solid #00FF00",
});

// const filterResultStyle = reactive({
//   marginTop: "10px",
//   height: "402px",
//   border: "2px solid #00FF00",
//   overflow: "auto",
// });
</script>
<style scoped>
.filterResultStyle {
  margin-top: 10px;
  height: 402px;
  border: 2px solid #00ff00;
  overflow: scroll;
}
.filterResultStyle::-webkit-scrollbar {
  display: none;
}
</style>

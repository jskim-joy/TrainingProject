/**
* 선택한 술기 요약 페이지. 여기서 학생 10명의 평균소요시간을 나타내는 막대그래프와 평균 기준소요시간과 소요시간을 포함한 막대그래프를 보여준다.
*/

<template>
  <div :style="whiteBox">
    <div :style="subTitleTwo"><h5>최근 진행한 실습</h5></div>
    <div :style="subTitleOne">
      <span :style="titleStyle"><strong>NS_C</strong></span>
      <span :style="dateStyle">2022.09 후반기</span>
    </div>

    <div :style="subTitleThree">
      <span :style="marginStandard"><strong>기준시간</strong></span>
      <span :style="marginConsume"><strong>소요시간</strong></span>
      <span :style="marginStandardTwo"><strong>기준시간대비</strong></span>
      <span :style="marginError"><strong>오류</strong></span>
    </div>
    <div :style="subTitleThree">
      <span :style="standardTime"><strong>11'00"</strong></span>
      <span :style="consumeTime"><strong>12'34"</strong></span>
      <span :style="percentTime"><strong>23%</strong></span>
      <span :style="errorTime"><strong>22회</strong></span>
    </div>
    <div :style="positionStyle">
<!-- 막대그래프: 학생 10명의 평균 기준시간과 평균소요시간.-->
      <BarChartSummary />
<!-- 막대그래프: 학생 각 10명의 평균소요시간. 라이브러리를 사용하여 가로방향으로 스크롤이 되도록 설정했다. 그리고 스크롤을 숨겨두었다.-->
      <vue-loop :full="false" :horizontal="false" class="scrollbarHidden">
        <BarChartIndividual />
      </vue-loop>
    </div>
  </div>
</template>

<script>
import BarChartIndividual from "./BarChartIndividual.vue";
import BarChartSummary from "./BarChartSummary.vue";

import VueLoop from "vue-loop";

console.log(VueLoop.methods.scrollHandler);
export default {
  name: "SummaryContainer",
  components: { BarChartIndividual, BarChartSummary },
};
</script>
<script setup>
import { reactive } from "vue";

const whiteBox = reactive({
  border: "solid 1px black",
  borderRadius: "10px",
  width: "100%",
});

const subTitleOne = reactive({
  display: "flex",
  // justifyContent: "space-evenly",
});

const subTitleTwo = reactive({
  display: "flex",
  marginTop: "20px",
  marginLeft: "20px",
});

const titleStyle = reactive({
  marginLeft: "20px",
  fontSize: "40px",
});

const dateStyle = reactive({
  marginTop: "15px",
  marginLeft: "90px",
});

const subTitleThree = reactive({
  display: "flex",
  // paddingLeft: "200px",
  // justifyContent: "space-evenly",
});

const marginStandard = reactive({
  fontSize: "14px",
  marginLeft: "20px",
});

const marginConsume = reactive({
  marginLeft: "20px",
  fontSize: "14px",
});

const marginStandardTwo = reactive({
  marginLeft: "20px",
  fontSize: "14px",
});

const marginError = reactive({
  marginLeft: "20px",
  fontSize: "14px",
});

const positionStyle = reactive({
  display: "flex",
});

const standardTime = reactive({
  marginLeft: "14px",
  fontSize: "20px",
});

const consumeTime = reactive({
  marginLeft: "10px",
  fontSize: "20px",
});

const percentTime = reactive({
  marginLeft: "25px",
  fontSize: "20px",
});

const errorTime = reactive({
  marginLeft: "20px",
  fontSize: "20px",
});
</script>

<style scoped>
.scrollbarHidden::-webkit-scrollbar {
  display: none;
}
</style>

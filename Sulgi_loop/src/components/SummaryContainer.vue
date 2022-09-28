<template>
  <div :style="whiteBox">
    <section :style="subTitleTwo"><h5>최근 진행한 실습</h5></section>
    <section :style="subTitleOne">
      <span :style="titleStyle"><strong>NS_C</strong></span>
      <span :style="dateStyle">2022.09 후반기</span>
    </section>

    <section :style="subTitleThree">
      <span :style="marginStandard"><strong>기준시간</strong></span>
      <span :style="marginConsume"><strong>소요시간</strong></span>
      <span :style="marginStandardTwo"><strong>기준시간대비</strong></span>
      <span :style="marginError"><strong>오류</strong></span>
    </section>
    <section :style="subTitleThree">
      <span :style="standardTime"><strong>11'00"</strong></span>
      <span :style="consumeTime"><strong>12'34"</strong></span>
      <span :style="percentTime"><strong>23%</strong></span>
      <span :style="errorTime"><strong>22회</strong></span>
    </section>
    <section :style="positionStyle">
      <BarChartSummary />

      <vue-loop :full="false" :horizontal="false" class="scrollbarHidden">
        <BarChartIndividual />
      </vue-loop>
    </section>
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

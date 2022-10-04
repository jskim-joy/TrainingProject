<template>
  <div :style="cardStyle" @mouseover="hover = true" @mouseleave="hover = false">
    <div v-if="hover" :style="titleStyle">반평균 성적</div>
    <div v-else :style="titleStyle">학생명의 평균 성적</div>
    <div :style="contentStyle">
      <div>
        <img :style="imgStyle" src="../assets/images/scoreState.png" />
      </div>
      <div :style="titleGroupStyle">
        <div :style="groupOneStyle">
          <span>등각촬영</span>
          <span>평행촬영</span>
        </div>
        <div v-if="hover" :style="scoreOneStyle">
          <span>1점</span>
          <span>1점</span>
        </div>
        <div v-else :style="scoreOneStyle">
          <span>00점</span>
          <span>00점</span>
        </div>
        <div :style="groupTwoStyle">
          <span>교익촬영</span>
          <span>교합촬영</span>
        </div>
        <div v-if="hover" :style="scoreTwoStyle">
          <span>2점</span>
          <span>2점</span>
        </div>
        <div v-else :style="scoreTwoStyle">
          <span>00점</span>
          <span>00점</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const hover = ref(false);

const cardStyle = reactive({
  width: "328px",
  height: "155px",
  border: "1px solid #000000 ",
  background: "#FFFFFF",
  borderRadius: "16px",
});

const titleStyle = reactive({
  width: "133px",
  height: "21px",
  color: "#262626",
  marginTop: "15px",
  marginLeft: "20px",
  fontSize: "17px",
  fontWeight: "700",
});

const contentStyle = reactive({
  display: "flex",
  marginTop: "10px",
  justifyContent: "space-evenly",
  marginLeft: "-39px",
});

const imgStyle = reactive({
  marginLeft: "39px",
  marginBottom: "15px",
});

const titleGroupStyle = reactive({
  width: "118px",
  height: "94px",
  border: "1px solid #000000",
});

const groupOneStyle = reactive({
  display: "flex",
  justifyContent: "space-evenly",
  fontSize: "12px",
  border: "1px solid #000000",
});

const scoreOneStyle = reactive({
  display: "flex",
  justifyContent: "space-evenly",
});

const groupTwoStyle = reactive({
  display: "flex",
  justifyContent: "space-evenly",
  fontSize: "12px",
  border: "1px solid #000000",
});

const scoreTwoStyle = reactive({
  display: "flex",
  justifyContent: "space-evenly",
});
</script>

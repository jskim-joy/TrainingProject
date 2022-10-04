<template>
  <div v-for="student in studentData" :key="student.studentID">
    <div :style="cardStyle">
      <div :style="nameIdDateStyle">
        <span :style="overallStyle"
          >{{ student.studentName }} - {{ student.studentID }}
        </span>
        <span :style="dateStyle">{{ student.trainingDay }}</span>
      </div>
      <div :style="titleStyle">대분류 > 중분류 > 소분류</div>
      <div :style="groupOneStyle">
        <span>시도횟수</span>
        <span>성공횟수</span>
        <span>최고성적</span>
        <span>평균성적</span>
      </div>
      <div :style="scoreOneStyle">
        <span :style="scoreFontStyle"
          >{{ student.numberofAttempts
          }}<span :style="unitStyle">회</span></span
        >
        <span :style="scoreFontStyle"
          >{{ student.numberofSuccesses
          }}<span :style="unitStyle">회</span></span
        >
        <span :style="scoreFontStyle"
          >{{ student.bestScore }}<span :style="unitStyle">점</span></span
        >
        <span :style="scoreFontStyle"
          >{{ student.avgScore }}<span :style="unitStyle">점</span></span
        >
      </div>
      <div :style="imageArrangeStyle">
        <template v-for="(image, index) in student.image" :key="index">
          <img :src="student.image[index]" :style="imageOutputStyle" />
        </template>
      </div>
      <div
        :style="buttonPositionStyle"
        @click="toggle"
        :key="student.studentID"
      >
        <button :style="detailButtonStyle" :key="student.studentID">
          <img
            src="../assets/icons/arrowHead.svg"
            :style="arrowOneStyle"
          />상세보기
        </button>
        <button v-show="isActive == true" :style="detailButtonStyle">
          <img src="../assets/icons/arrowHead.svg" :style="arrowTwoStyle" />접기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import studentData from "../data/studentData.js";

const isActive = ref(false);

const isExtraInfoActive = ref(null);

const toggle = () => {
  if (!isActive.value) {
    isActive.value = true;
    console.log(isActive.value);
    console.log(isExtraInfoActive.value);
  } else {
    isActive.value = false;
    console.log(isActive.value);
    console.log(isExtraInfoActive.value);
  }
};

const cardStyle = reactive({
  width: "328px",
  height: "251px",
  border: "1px solid #000000",
  background: "#FFFFFF",
  borderRadius: "16px",
  marginBottom: "10px",
});

const nameIdDateStyle = reactive({
  marginTop: "15px",
  marginLeft: "20px",
  fontSize: "12px",
});

const overallStyle = reactive({
  display: "block",
});

const dateStyle = reactive({
  display: "flex",
  justifyContent: "end",
  marginRight: "15px",
  marginTop: "-18px",
});

const titleStyle = reactive({
  marginLeft: "20px",
  marginTop: "5px",
  fontSize: "17px",
  fontWeight: "700",
});

const groupOneStyle = reactive({
  marginTop: "10px",
  fontSize: "12px",
  display: "flex",
  justifyContent: "space-evenly",
});

const scoreOneStyle = reactive({
  display: "flex",
  justifyContent: "space-evenly",
});

const imageArrangeStyle = reactive({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "10px",
});

const imageOutputStyle = reactive({
  width: "45px",
  height: "60px",
  borderRadius: "8px",
});

const scoreFontStyle = reactive({
  fontSize: "22px",
  color: "#236260",
});

const detailButtonStyle = reactive({
  width: "84px",
  height: "28px",
  borderRadius: "16px",
  backgroundColor: "#236361",
  color: "#FFFFFF",
  fontSize: "12px",
  borderColor: "transparent",
});

const buttonPositionStyle = reactive({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
});

const arrowOneStyle = reactive({
  width: "24px",
  height: "24px",
  marginLeft: "-7px",
});

const arrowTwoStyle = reactive({
  width: "24px",
  height: "24px",
  marginLeft: "-7px",
  marginTop: "-1px",
  transform: "rotate(180deg)",
});

const unitStyle = reactive({
  fontSize: "10px",
});
</script>

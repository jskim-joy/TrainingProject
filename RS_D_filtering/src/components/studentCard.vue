<template>
  <div class="cardStyle">
    <div :style="nameIdDateStyle">
      <span :style="overallStyle"
        >{{ props.student.studentName }} - {{ props.student.studentID }}
      </span>
      <span :style="dateStyle">{{ props.student.trainingDay }}</span>
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
        >{{ props.student.numberofAttempts
        }}<span :style="unitStyle">회</span></span
      >
      <span :style="scoreFontStyle"
        >{{ props.student.numberofSuccesses
        }}<span :style="unitStyle">회</span></span
      >
      <span :style="scoreFontStyle"
        >{{ props.student.bestScore }}<span :style="unitStyle">점</span></span
      >
      <span :style="scoreFontStyle"
        >{{ props.student.avgScore }}<span :style="unitStyle">점</span></span
      >
    </div>
    <div :style="imageArrangeStyle">
      <template v-for="(image, index) in student.image" :key="index">
        <img :src="student.image[index]" :style="imageOutputStyle" />
      </template>
    </div>
    <div :style="buttonPositionStyle" :key="index" @click="toggle">
      <button v-if="isActive === false" :style="detailButtonStyle">
        <img
          src="../assets/icons/arrowHead.svg"
          :style="arrowOneStyle"
        />상세보기
      </button>
      <button v-if="isActive === true" :style="detailButtonStyle">
        <img src="../assets/icons/arrowHead.svg" :style="arrowTwoStyle" />접기
      </button>
    </div>
    <div v-if="isActive === true">
      <div class="cardStyle" id="expandCardStyle">내용</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const isActive = ref(false);

const toggle = () => {
  if (!isActive.value) {
    isActive.value = true;
    document.getElementById("expandCardStyle").class += "active";
    console.log(isActive.value);
  } else {
    isActive.value = false;
    console.log(isActive.value);
  }
};

const props = defineProps({
  student: {
    type: Object,
  },
  index: {
    type: Number,
  },
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

<style scoped>
.cardStyle {
  width: 328px;
  height: 251px;
  border: 1px solid #000000;
  background: #ffffff;
  border-radius: 16px;
  margin-bottom: 10px;
  transition: height 1s;
}

.cardStyle.active {
  width: 328px;
  height: 551px;
  border: 1px solid #000000;
  background: #ffffff;
  border-radius: 16px;
  margin-bottom: 10px;
}
</style>

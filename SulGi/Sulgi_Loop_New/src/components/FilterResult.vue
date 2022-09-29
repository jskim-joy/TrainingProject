/**
*for문을 사용하여 각 학생의 정보를 카드 하나씩 보여준다. 카드는 학생아이디, 도전횟수, 기준시간, 과목, 이름, 평균시간, 평균에러, 날짜를 포함한다.
*/
<template>
  <!--vue-loop를 사용하여 높이에 맞게 스크롤 되게 한다. -->
  <vue-loop :full="false" :horizontal="false">
    <div v-for="student in students" :key="student.student_id">
      <div :style="cardStyle">
        <div>
          <span :style="nameStyle"
            >{{ student.name }} - {{ student.student_id }}</span
          >
          <span :style="dateStyle">{{ student.date }}</span>
        </div>
        <div :style="subjectStyle">
          <span
            ><strong>{{ student.subject }}</strong></span
          >
        </div>
        <div :style="menuStyle">
          <span>도전횟수</span>
          <span>기준시간</span>
          <span>평균 소요시간</span>
          <span>평균 오류</span>
        </div>
        <div :style="menuTwoStyle">
          <span :style="challenge">{{ student.challenges }}회</span>
          <span :style="standardTime">{{ student.standard_time }}' 00"</span>
          <span :style="avgTime">{{ student.avg_time }}' 00"</span>
          <span :style="avgError">{{ student.avg_error }}회</span>
        </div>
      </div>
    </div>
  </vue-loop>
</template>
<script setup>
import students from "../dummy/students";
import VueLoop from "vue-loop";
import { reactive } from "vue";

const cardStyle = reactive({
  marginTop: "20px",
  border: "solid 1px black",
  borderRadius: "10px",
});

const nameStyle = reactive({
  marginLeft: "10px",
  fontSize: "18px",
});

const dateStyle = reactive({
  marginLeft: "150px",
  fontSize: "18px",
});

const subjectStyle = reactive({
  marginLeft: "10px",
  fontSize: "30px",
});

const menuStyle = reactive({
  fontSize: "18px",
  display: "flex",
  justifyContent: "space-around",
});

const menuTwoStyle = reactive({
  display: "flex",
  marginLeft: "10px",
  color: "#873648",
  fontWeight: 700,
  fontSize: "25px",
});

const challenge = reactive({
  marginLeft: "12px",
});

const standardTime = reactive({
  marginLeft: "30px",
});

const avgTime = reactive({
  marginLeft: "20px",
});

const avgError = reactive({
  marginLeft: "40px",
});
</script>
<style scoped></style>

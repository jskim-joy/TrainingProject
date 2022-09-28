<template>
  <vue-loop :full="false" :horizontal="false">
    <div v-for="student in students" :key="student.student_id">
      <div :style="cardStyle">
        <section>
          <span :style="nameStyle"
            >{{ student.name }} - {{ student.student_id }}</span
          >
          <span :style="dateStyle">{{ student.date }}</span>
        </section>
        <section :style="subjectStyle">
          <span
            ><strong>{{ student.subject }}</strong></span
          >
        </section>
        <section :style="menuStyle">
          <span>도전횟수</span>
          <span>기준시간</span>
          <span>평균 소요시간</span>
          <span>평균 오류</span>
        </section>
        <section :style="menuTwoStyle">
          <span :style="challenge">{{ student.challenges }}회</span>
          <span :style="standardTime">{{ student.standard_time }}' 00"</span>
          <span :style="avgTime">{{ student.avg_time }}' 00"</span>
          <span :style="avgError">{{ student.avg_error }}회</span>
        </section>
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

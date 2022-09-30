/** *RS_D_filtering_student의 root 페이지 (최상단). */

<template>
  <section><div :style="titleFont">선택한 학생 요약</div></section>
  <div></div>
  <section><div :style="titleFont">필터 결과</div></section>
</template>

<script setup>
import { reactive } from "vue";

const titleFont = reactive({
  fontSize: "22px",
});
</script>

<style scoped></style>

/**페이지 최 상단 루트. 두개의 파트 존재: 선택한 술기요약 + 필터결과. */

<template>
  <div class = "container">
  <div :style="{ height: height + 'px' }">
    <div :style="{ 'font-size': fontSize + 'px' }">
      <strong>선택한 술기 요약</strong>
      <summary-container />
    </div>
    <div :style="{ 'font-size': fontSize + 'px' }">
      <br />
      <strong>필터 결과</strong>
      <filter-result />
    </div>
  </div>
</div>
</template>

<script setup>
  /* 술기요약 페이지와 필터결과 컴포넌트를 가져온다. */
import SummaryContainer from "./components/SummaryContainer.vue";
import FilterResult from "./components/FilterResult.vue";
import { ref } from "vue";

const fontSize = ref(24);
const height = ref(720);
</script>

<style scoped></style>

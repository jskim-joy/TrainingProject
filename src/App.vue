<script setup>
import SummaryContainer from "./components/SummaryContainer.vue";
import FilterResult from "./components/FilterResult.vue";
import { ref } from "vue";

const fontSize = ref(24);
</script>

<template>
  <div class="background">
    <div :style="{ 'font-size': fontSize + 'px' }">
      <strong>선택한 술기 요약</strong>
      <summary-container />
      <BarChart></BarChart>
    </div>
    <div :style="{ 'font-size': fontSize + 'px' }">
      <strong>필터 결과</strong>
      <filter-result />
    </div>
  </div>
</template>

<style scoped></style>

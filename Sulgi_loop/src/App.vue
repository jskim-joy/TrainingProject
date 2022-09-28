<template>
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
</template>

<script setup>
import SummaryContainer from "./components/SummaryContainer.vue";
import FilterResult from "./components/FilterResult.vue";
import { ref } from "vue";

const fontSize = ref(24);
const height = ref(720);
</script>

<style scoped></style>

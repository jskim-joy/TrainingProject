<template>
  <div v-for="(student, index) in studentData" :key="student.studentID">
    <student-card :student="student" :key="index" />
  </div>
</template>

<script setup>
import studentData from "../data/studentData.js";
import studentCard from "../components/studentCard.vue";
</script>

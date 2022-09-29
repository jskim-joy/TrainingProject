/** 
* To do list 나의할일 앱의 Root 파일. 
*/

<template>
  <header>
    <hgroup class="my-5">
      <h1>VUE.JS</h1>
      <em>{{ today }}</em>  <!-- 오늘날짜를 보여준다.-->
    </hgroup>
  </header>
  <todo-list-container /> <!--TodoListContainer -->
</template>

<script>
// SFC의 name, inheritAttrs, 사용자 옵션 등은 따로 script 태그에 작성한다.
export default {
  name: "App",
}
</script>

<script setup>
import { inject } from "vue"
import TodoListContainer from "./components/TodoListContainer.vue"

const today = inject("today")//provide() by main.js 

</script>

<style scoped>
hgroup {
  text-align: center;
  font-family: "Arial Bold";
}

hgroup h1 {
  font-weight: bolder;
}
</style>

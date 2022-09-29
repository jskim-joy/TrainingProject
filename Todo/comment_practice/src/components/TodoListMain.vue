/**
* TodoListMenu로부터 해야할 일들을 필터링작업을 거치고, TodoList를 필터에 날짜 순서에 맞게 보여주는 역할.
*/

<template>
  <!-- TodoListMenu로부터 컴포넌트를 받아서 필터된 내용을 받기위해 change-filter 구독.-->
  <todo-list-menu v-on:change-filter="onChangeFilter" class="p-0" />
  <div v-for="key in Object.keys(filtered_todos)" :key="key" class="mb-3">
    <div v-if="use_category">
      <em>{{ key }}</em>
    </div>
    <!-- 필터된 데이터를 보여준다.-->
    <todo-list :data="filtered_todos[key]" /> 
  </div>
  <div class="my-2 mt-5">
    <span style="background-color: red">&nbsp;</span>&nbsp;
    <strong>처리하지 못한 작업들</strong>
  </div>
  <todo-list :data="pending_todos" />
</template>

<script>
export default {
  name: "TodoListMain",
}
</script>

<script setup>
import { ref, provide, inject, watch } from "vue"
import { useFilter } from "../compositions/filters"

import TodoListMenu from "./TodoListMenu.vue"
import TodoList from "./TodoList.vue"


/* filter.js로부터 필요한 메소드들을 가져온다. */
const {
  getPendingTodos,
  getActiveTodayTodos,
  getCompletedTodayTodos,
  getAllTodayTodos,
  getAllTodos,
} = useFilter()
const filter = ref(0)
const filtered_todos = ref([])
const pending_todos = ref([])
const use_category = ref(false)
const todos = inject("todos") // provide from TodoListContainer.vue

const filters = {
  0: {
    str: "해야 할 작업들",
    func: getActiveTodayTodos,
    category: false,
  },
  1: {
    str: "완료한 작업들",
    func: getCompletedTodayTodos,
    category: false,
  },
  2: {
    str: "오늘의 모든 기록",
    func: getAllTodayTodos,
    category: false,
  },
  3: {
    str: "모든 작업",
    func: getAllTodos,
    category: true,
  },
}

provide("filters", filters) // inject to TodoListMenu.vue

/* 날짜별로 다시 분리하고, 날짜를 키값으로 갖는 메소드를 만들어주는 것. */
const groupBy = (todos) => {
  console.log(todos)
  return todos.reduce((acc, cur) => {
    acc[cur["date"]] = acc[cur["date"]] || []
    acc[cur["date"]].push(cur)
    return acc
  }, {})
}

/* 필터된 값을 숫자로 변환. */
const onChangeFilter = (filter_idx) => {
  filter.value = Number(filter_idx)
}

/* TodoListMenu에서 설장한 메뉴의 값과 todos에 들어있는 데이터를 감시하는 역할.  */
watch(
  [() => filter.value, todos.value],
  ([new_filter, new_todos], [old_filter, old_todos]) => {
    pending_todos.value = getPendingTodos(todos)
    if (typeof new_filter != "undefined") {
      let temp_todos = filters[new_filter].func(todos)
      filtered_todos.value = groupBy(temp_todos) //날짜별로 분류된 할일들.
      use_category.value = filters[new_filter].category // true로 설정된 메뉴는  날짜를 보여준다. (모든작업)
    }
  },
  { immediate: true }
)
</script>

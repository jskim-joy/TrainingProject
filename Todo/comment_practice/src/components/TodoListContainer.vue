/** 
*구조상 모든 컴포넌트를 포함하는, 가장 상위 컴포넌트. 
*TodoListContainer = TodoListNew + TodoListMain + TodoCalendar 
*/

<template>
  <todo-list-new />
  <section class="container">
    <div class="row justify-content-center m-2">
      <todo-list-main />
    </div>
    <div>
      <TodoCalendar title="Todo Calendar" :todos="todos" class="mt-5" />
    </div>
  </section>
</template>

<script>
export default {
  name: "TodoListContainer",
}
</script>

<script setup>
import { ref, readonly, provide } from "vue"
import { useStorage } from "../compositions/storage"
import TodoListNew from "./TodoListNew.vue"
import TodoListMain from "./TodoListMain.vue"
import TodoCalendar from "../calendars/TodoCalendar.vue"

const todos = ref([])//반응형, 할일들 배열화.
const { loadTodos, saveTodos, storage_id } = useStorage()//storage.js에서 메소드 호출.

provide("todos", readonly(todos))//inject to TodoListMain.vue.


/* 할일들을 배열화 해놓은 것을 불러오는 역할. */
const initTodos = (init_todos) => {
  todos.value = init_todos//반응형 배열.
  console.log(todos.value)
}

/*할일 추가, 일과 날짜 필요.*/
const addTodo = (job, date) => {
  todos.value.push({
    id: storage_id.value++,
    job: job,
    date: date,
    completed: false,
  })
  saveTodos(todos)
}

/*할일 삭제, 아이디 통해 삭제.*/
const removeTodo = (id) => {
  todos.value.splice(id, 1)//id번째 인덱스에서 1개 요소 제거한다.
  todos.value.forEach((todo, idx) => {//todo에서 id번째 할일 삭제. id번째를 idx라고 선언. 
    todo.id = idx
  })
  saveTodos(todos)
}

/*할일 완료*/
const completeTodo = (id) => {
  todos.value.find((todo) => todo.id == id).completed = true//id번째 할일 완료시, true로 변경.
  saveTodos(todos)
}

/**
 * 다른 컴포넌트로 세개의 메소드 provide.
 */
provide("addTodo", addTodo) // inject to TodoListNew.vue
provide("removeTodo", removeTodo) // inject to TodoList.vue
provide("completeTodo", completeTodo) // inject to TodoList.vue

loadTodos(initTodos)//localStorage로부터 데이터를 불러오는 함수. 
</script>

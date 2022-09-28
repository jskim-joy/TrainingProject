/**
* 해야할 일들을 보여주는 기능을 담당하는 컴포넌트. 필터도 함께 사용한다.
*/

<template>
  <main>
    <div v-for="(todo, idx) in data" :key="todo.id">
      <div class="input-group my-2 input-group-sm">
        <div class="input-group-text">
          <!-- Checkbox-->
          <input
            class="form-check-input mt-0"
            type="checkbox"
            :checked="todo.completed"
            :disabled="todo.completed"
            @click="completeTodo(todo.id)"
          />
        </div>
        <div class="input-group-text">
          <!--Small calendar-->
          <input
            class="form-input mt-0"
            type="date"
            :min="today"
            disabled
            :value="todo.date"
          />
        </div>
        <input type="text" class="form-control" :value="todo.job" />
        <!-- Todo button-->
        <button
          class="btn btn-outline-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          할일 관리
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <!-- 메뉴에서 두가지 기능을 반복하고, 한가지 기능을 눌렀을 경우 각 기능에 맞게 동작하게 한다. -->
          <li v-for="item in menu" :key="item.str">
            <a class="dropdown-item" @click="item.func(todo.id)">{{
              item.str
            }}</a>
          </li>
        </ul>
      </div>
      <div v-show="idx + 1 < data.length" class="col border border-second" />
    </div>
  </main>
</template>

<script>
export default {
  name: "TodoList",
}
</script>

<script setup>
import { inject } from "vue"
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
})

/* TodoListContainer 에서 provide한 함수들을 가져온다. */
const removeTodo = inject("removeTodo")
const completeTodo = inject("completeTodo")
const today = inject("today")

/* 두개의 기능을 가진 메뉴 */
const menu = [
  {
    str: "할일 삭제",
    func: removeTodo,
  },
  {
    str: "할일 완료",
    func: completeTodo,
  },
]
</script>

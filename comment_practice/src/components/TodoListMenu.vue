/** 리스트 필터를 통해 어떤 투두리스트를 보여줄지 정하는 메뉴 담당 컴포넌트. */

<template>
  <div class="row">
    <div class="col">
      <span style="background-color: blue">&nbsp;</span>&nbsp;
      <strong>{{ state }}</strong>
    </div>
    <div class="col">
      <div class="btn-group float-end">
        <button
          class="btn btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          리스트 필터
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li v-for="key in Object.keys(filters)" :key="key">
            <a class="dropdown-item" @click="filter = key">{{
              filters[key].str
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListMenu'
}
</script>

<script setup>
import { ref, watch, computed, inject } from 'vue'

const emit = defineEmits(['change-filter']) //TodoListMain 에서 사용 및 전달. 
const filters = inject('filters') //provide from TodoListMain.vue
const filter = ref(0)

/* 필터명 변경 메소드 */
const state = computed(() => { 
  return filters[filter.value].str
})

/* filter의 값이 변경 될때만 트리거 된다.  */
watch(
  () => filter.value,
  (filter) => {
    emit('change-filter', filter)
   
  } 
)

</script>

/**
 * 필터링 기능(모듈)을 담당한다:
 * (1) 날짜 지났지만 완료하지 않은 일들.
 * (2) 오늘 날짜로 해야할 일들.
 * (3) 오늘 해야 할 일들 중 완료한 일들.
 * (4) 모든 일들 (완료/미완료 포함).
 */

import { inject } from 'vue'

export const useFilter = () => {

  const today = inject('today') // provide from main.js

  /* 날짜 정렬을 위한 메소드: 최근날짜일수록, 최근 날짜에서 마지막에 등록한 일이면 맨 위에 나타난다. */
  const fnSort = (a, b) => {
    const a_date = Date.parse(a.date)
    const b_date = Date.parse(b.date)
    if (a_date > b_date) return 1 // 앞에 날짜가 빠를경우, 그대로 냅둔다.
    else if (a_date < b_date) return 0 // 같은 날짜일 경우, 뒤에 등록된 일일수록 위에 등록된다. 
    else return a.id - b.id // 뒤에 날짜가 더 최신일경우, 나중에 등록된 것이 위로간다. 
  }

  /* (1) 날짜 지났지만 완료하지 않은 일들. */
  const getPendingTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date < today && !todo.completed)
      .slice()//복사본 만들기. -> 원본을 그대로 유지하기 위해서.  
      .sort(fnSort)//정렬 후 기존에 쌓아져있던 일 리스트들의 id가 날짜 순서에 정렬된다.
  }

  /* (2) 오늘 날짜로 해야할 일들. */
  const getActiveTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && !todo.completed)
      .slice()
      .sort(fnSort)
  }

  const getCompletedTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && todo.completed)
      .slice()
      .sort(fnSort)
  }

  /* (3) 오늘 해야 할 일들 중 완료한 일들. */
  const getAllTodayTodos = (todos) => {
    return getActiveTodayTodos(todos)
      .concat(getCompletedTodayTodos(todos))
      .slice()
      .sort(fnSort)
  }

  /* (4) 모든 일들 (완료/미완료 포함). */
  const getAllTodos = (todos) => {
    return todos.value.slice().sort(fnSort)
  }

  return {
    getPendingTodos,
    getActiveTodayTodos,
    getCompletedTodayTodos,
    getAllTodayTodos,
    getAllTodos,
  }
}

/**
 * localStorage 데이터를 관리하는 역할을 한다. 불러오거나 저장하는 역할을 담당한다.
 */


import { reactive, toRefs } from 'vue'

export const useStorage = () => {

  /* localStorage에서 사용할 Key값 */
  const KEY = 'my-todo-list'

  /* 할일 리스트 갯수를 나타낸 것이고, 추후에 갯수만큼의 길이를 보여준다.  */
  const storage_obj = reactive({ storage_id: 0 }) 

  /* localStroage에서 데이터를 불러온다. */
  const loadTodos = (initTodos) => {
    let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]') //키값을 통해 할일을 가져온다.
    temp_todos.forEach((todo, idx) => {
      todo.id = idx
    })
    storage_obj.storage_id = temp_todos.length
    initTodos(temp_todos)
    console.log(storage_obj.storage_id)
  }

  /* locatSotrage로 데이터를 저장 */
  const saveTodos = (todos) => {
    localStorage.setItem(KEY, JSON.stringify(todos.value)) //키값에 문자열화된 할일 밸류를 저장한다.
  
  }

  /* 다음의 메소드들을 반환한다. */
  return {
    ...toRefs(storage_obj), //Spread Operator 를 이용하여 꺼내 준 후, 반응성을 부여해준다.
    loadTodos,
    saveTodos,
  }
}

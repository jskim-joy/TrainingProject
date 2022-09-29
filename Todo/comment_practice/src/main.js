/**
* @Author: 강형근
  @Library/Framework: Vue.js 3.0.5, Bootstrap 5.0.0-beta3
  @VRAD INC. 교육자료.
  부트스트랩과 뷰를 바탕으로 어플리케이션을 동작 시킬것이라는 것을 선언.
*/
import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'

const app = createApp(App)
app.provide('today', new Date().toISOString().split('T')[0]) //오늘 날짜를 입력할 것이고, ISO문자로 변환하고, 'T'를 기준으로 스플릿한다. 그리고 다ㄴ 컴포넌트에서 사용하도록 한다.
app.mount('#app')

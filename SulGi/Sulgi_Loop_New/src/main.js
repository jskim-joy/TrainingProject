/**
 * Author: 강형근
 * Library / Framework: Vue 3.2.38 AND Bootstrap 5.2.1
 * 술기 요약 페이지. 
 */

import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.mount("#app");

<template>
  <div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <CalendarBase />

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CalendarBase from './components/CalendarBase.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    CalendarBase
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

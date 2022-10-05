<template>
  <div class="modal">
    <div class="overlay" @click="$emit('close-modal')"></div>
    <div class="modal-card">
      {{ index }} ---- {{ images }}
      <img :src="images" :key="index - images.length" />
    </div>
  </div>
</template>

<script setup>
// import bigImage from "./bigImage.vue";

const props = defineProps({
  index: { type: Number },
  images: { type: String },
});

console.log(props.images);
console.log(props.index);
</script>

<style scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  border-radius: 1px solid blue;
  overflow: hidden;
  display: block;
}
.overlay {
  opacity: 0.2;
  background-color: black;
  border-radius: 1px solid blue;
}

.modal-card {
  position: relative;
  max-width: 80%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 10;
  opacity: 1;
  border-radius: 1px solid blue;
}
</style>

<template>
  <div class="contentStyle">
    <div v-for="(images, index) in props.student.image" :key="index">
      <div :style="imageCardStyle">
        <div :style="recordingDateFont">촬영일</div>
        <div @click="isModalViewed = index" :key="index">
          <img :src="images" :key="index" :style="imageOutputStyle" />{{
            index
          }}
        </div>
        <imageModal
          v-if="isModalViewed === index"
          @close-modal="isModalViewed = false"
          :key="index"
          :images="images"
          :index="index"
        />
        <div :style="topicOneGroupStyle">
          <span>교합면</span>
          <span>카메라</span>
        </div>
        <div :style="scoreOneGroupStyle">
          <span :style="scoreFontStyle">00</span>
          <span :style="unitFontStyle">점</span>
          <span :style="scoreFontStyle">00</span>
          <span :style="unitFontStyle">점</span>
        </div>

        <div :style="topicTwoGroupStyle">
          <span>필름</span>
          <span>최종성적</span>
        </div>
        <div :style="scoreTwoGroupStyle">
          <span :style="scoreFontStyle">00</span>
          <span :style="unitFontStyle">점</span>
          <span :style="scoreFontStyle">00</span>
          <span :style="unitFontStyle">점</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import imageModal from "./imageModal.vue";

const props = defineProps({
  student: {
    type: Object,
  },
});

console.log(props.student);

const isModalViewed = ref(false);

const imageOutputStyle = reactive({
  width: "124px",
  height: "162px",
  borderRadius: "24px",
  marginTop: "10px",
});

const imageCardStyle = reactive({
  width: "164px",
  height: "341px",
  border: "1px solid",
  borderColor: "#F2F2F4",
  zIndex: "1000",
  paddingLeft: "20px",
});

const recordingDateFont = reactive({
  marginTop: "15px",
  fontSize: "12px",
  marginLeft: "91px",
});

const topicOneGroupStyle = reactive({
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-evenly",
  fontSize: "12px",
  marginLeft: "-20px",
});

const topicTwoGroupStyle = reactive({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-evenly",
  fontSize: "12px",
  marginLeft: "-5px",
});

const scoreOneGroupStyle = reactive({
  display: "flex",
  justifyContent: "space-evenly",
});

const scoreTwoGroupStyle = reactive({
  display: "flex",
  justifyContent: "space-evenly",
});

const scoreFontStyle = reactive({
  fontSize: "22px",
  color: "#236260",
  marginLeft: "-30px",
  paddingLeft: "15px",
});

const unitFontStyle = reactive({
  fontSize: "10px",
  paddingLeft: "-10px",
  marginTop: "12px",
});
</script>

<style scoped>
.contentStyle {
  width: 328px;
  height: 100%;

  background: #ffffff;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  margin-top: -20px;
}
</style>

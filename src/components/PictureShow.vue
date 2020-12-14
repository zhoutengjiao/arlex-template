<template>
  <div>
    <span>我是assets图片</span>
    <img src="@/assets/angular.jpg" alt="" />
    <div class="abc"></div>
    <button @click="handleClick">点击事件</button>
    <span>我是statssissdsdc图s片s</span>
    <img src="static/imgs/Penguins.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "PictureShow",
  methods: {
    handleClick() {
      console.log("ahahah");
      import("@/assets/react.png");
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  background: red;
}
.abc {
  width: 100px;
  height: 100px;
  background: url("static/imgs/Penguins.jpg");
}
</style>

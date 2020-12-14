<template>
  <div id="app">
    <router-link to="/picture">picture</router-link>
    <router-link to="/">home</router-link>
    <router-link to="/jsx">jsx</router-link>
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 61px;
}
.app {
  display: flex;
}
</style>

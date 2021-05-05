<template>
  <div id="app" class="font-sans draggable flex min-h-screen">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <SideBar/>

    <router-view/>
  </div>
</template>

<script>

import SideBar from "./components/SideBar";
export default {
  name: 'App',
  components: {SideBar},
}
</script>

<style src="./assets/css/main.css"></style>
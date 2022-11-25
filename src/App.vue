<template>
  <!-- <HomeScreen /> -->
  <router-view />
  <footer class="text-center py-3 bg-indigo-600 text-white text-sm">
    This is a personal project of Alejah Sardiniola. All Rights Reserved. &#xA9;
    November 2022
  </footer>
</template>

<script>
// import HomeScreen from "./components/HomeScreen.vue";

export default {
  name: "App",
  components: {
    // HomeScreen,
  },
};
</script>

<style>
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

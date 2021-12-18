<template>
  <Navigation />
  <div class="landing">
    <div class="content">
      <h1>Johannes Losch</h1>
      <strong>Lorem ipsum dolor sit</strong>
      <div class="links"></div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style lang="stylus">
@import '/assets/stylus/_variables.styl';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.landing {
  position: static;
  margin-top: $nav_height;
  height: 720px;
  background: #D4E6FA;

  .content {
    align-content: center;
    vertical-align: middle;
  }
}
</style>

<template>
  <Navigation />
  <div class="landing">
    <div class="content">
      <h1>Johannes Losch</h1>
      <strong>Lorem ipsum dolor sit</strong>
      <div class="links">
        <LinkCoponent name="github" url="https://github.com/johanneslosch" />
        <LinkCoponent
          name="instagram"
          url="https://instagram.com/loschjohannes"
        />
        <LinkCoponent
          name="linkedin"
          url="https://linkedin.com/in/johannes-losch"
        />
        <LinkCoponent name="twitter" url="https://twitter.com/johanneslosch" />
        <LinkCoponent name="medium" url="https://johanneslosch.medium.com/" />
      </div>
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

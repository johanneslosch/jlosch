<template>
  <router-view />
</template>

<style lang="stylus">
@import './assets/stylus/_variables.styl';

@font-face {
  font-family: 'Coolvetica';
  src: local('Coolvetica'), url('./assets/fonts/coolvetica regular.ttf') format("truetype");
}

#app {
  font-family: 'Coolvetica';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 100%;
  color: $text-color;
  overflow-x: hidden;
  width: 100%;
  margin-top: -0.5em;
  margin-left: -0.5rem;
  margin-bottom: -2rem;
  padding-right: 1rem;
  padding-bottom: 5.7rem;
  height: auto;
  overflow: hidden;
  color: $text-color;

  p {
    margin-right: 10%;
    font-size: 13pt;
  }
}
</style>

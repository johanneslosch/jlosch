<template>
  <div class="project">
    <h2>{{ title }}</h2>
    <img v-if="imageUrl !=null" :src="imageUrl" />
    <img v-else src="https://s.jlosch.de/images-jlosch.de/missing-picture.svg" />
    <p>
      {{ description }}
    </p>
    <div class="buttons">
      <a class="code" :href="codeUrl">Code</a>
      <a class="demo" :href="demoUrl" v-if="demoUrl !== null">Demo</a>
      <a class="language">{{ language }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    title: {
      type: String,
      default: null,
    },
    imageUrl: {
      type: String,
      default: "https://s.jlosch.de/images-jlosch.de/missing-picture.svg",
    },
    description: {
      type: String,
      default: null,
    },
    codeUrl: {
      type: String,
      default: null,
    },
    demoUrl: {
      type: String,
      default: null,
    },
    language: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/_variables.styl';
@import '../assets/stylus/_viewport.styl';
.project
  background white
  //border 1px solid #000
  border-radius 2rem
  padding-bottom 2em
  max-width 30%
  @media screen and (max-width: $tablet-portrait-view)
    max-width 60%

  img
    width 35%
    @media screen and (min-width 1445px)
      max-width: 25%

  p
    max-width: 80%
    @media screen and (min-width 1445px)
      font-size: 16pt

  .buttons
    display flex
    flex-direction row
    justify-content center
    align-items center
    gap 3rem
</style>
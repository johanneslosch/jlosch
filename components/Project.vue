<template>
  <div class="project">
    <h2>{{ title }}</h2>
    <div class="img">
      <img v-if="newImageURL != null" :src="newImageURL" />
      <img v-else src="https://s.jlosch.de/images-jlosch.de/missing-picture.svg" />
    </div>
    <div class="text">
      <p>
        {{ description }}
      </p>
    </div>
    <div class="buttons">
      <a class="code btnStyling" :href="codeUrl">Code</a>
      <div class="space"></div>
      <a class="demo btnStyling" :href="demoUrl" v-if="demoUrl !== null">Demo</a>
      <div class="space"></div>
      <a class="language">{{ language }}</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
    data(){
      return {
        newImageURL: ''
      }
    }
  },
  mounted(){
    this.getImageResponse()
  },
  methods: {
    getImageResponse() {
      axios.get(this.imageUrl).then(() => {
        this.newImageURL = this.imageUrl
      }).catch(() => {
         this.newImageURL = 'https://s.jlosch.de/images-jlosch.de/missing-picture.svg'
      })
    }
  }
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
  .img
    height 10rem
    img
      width 50%
      @media screen and (min-width 1445px)
        max-width: 25%
  .text
    height 14rem
    p
      max-width: 80%
      @media screen and (min-width 1445px)
        font-size: 16pt

  .buttons
    height: 2rem
    display flex
    flex-direction row
    justify-content center
    align-items center
    .name
      left 0
      margin-right: auto;
      width: 15rem
    svg
      right 0
      margin-left: auto;
    .space
      width: 3rem
    .language
      right 0
    .code
      left 5rem
    .demo
      left 50
    .btnStyling
      border 1px solid #B9D494
      padding .5rem
      background-color #B9D494
      color #000
      text-decoration: none
      border-radius 1rem
</style>
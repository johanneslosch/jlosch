<template>
  <div class="project">
    <h2>{{ title }}</h2>
    <img :src="imageUrl" />
    <p>
      {{ description }}
    </p>
    <div class="buttons">
      <a :href="codeUrl">Code</a>
      <a :href="demoUrl" v-if="demoUrl !== null">Demo</a>
      <a>{{ language }}</a>
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
.project {
  border: 1px solid #000;
  border-radius: 2rem;
  padding-bottom: 2em;
  max-width: 30%;

  img {
    width: 35%;
  }

  p {
    padding-left: 2rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
}
</style>
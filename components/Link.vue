<template>
  <a class="link" :href="url" target="_blank">
    <div class="circle">
      <img :src="'https://s.jlosch.de/links/' + name + '.svg'" loading="lazy" />
    </div>
  </a>
</template>

<script>
export default {
  name: "Link",
  props: {
    name: String,
    url: String,
  },
};
</script>

<style lang="stylus">
@import '../assets/stylus/_variables.styl';

.link {
  transition: transform 0.2s;

  a {
    text-decoration: none;
  }

  :hover {
    text-decoration: none;
    transform: scale(1.5);
  }

  .circle {
    width: $link_size;
    height: $link_size;
    border-radius: 50% 50% 50% 50%;
    background-color: $link_background_color;

    img {
      align: middle;
      margin-top: ($link_size / 5.5);
      vertical-align: middle;
      height: 60%;
      width: 60%;
    }

    :hover {
      transform: scale(1);
    }
  }
}
</style>
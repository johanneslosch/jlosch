<template>
  <div>
    <img :href="'https://s.jlosch.de/links/' + name + '.svg'" />
  </div>
</template>

<script>
export default {
  name: "Link",
  props: {
    name: "github",
  },
};
</script>

<style>
</style>
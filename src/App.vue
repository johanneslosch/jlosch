<template>
  <Navigation />
  <div class="background landing">
    <div class="content">
      <div class="text">
        <h1>Johannes Losch</h1>
        <strong>Lorem ipsum dolor sit</strong>
      </div>
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
      <div class="arrows">
        <img src="https://s.jlosch.de/misc/angle.svg" loading="lazy" />
      </div>
    </div>
    <div class="angle1" />
  </div>
  <div class="background about">
    <div class="filler"></div>
    <div class="text">
      <h1>about me</h1>
      <div class="content">
        <img src="https://s.jlosch.de/img/portrait.jpg" loading="lazy" />
        <div class="nextToImg">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div class="angel2" />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import LinkCoponent from "./components/Link.vue";

export default {
  name: "App",
  components: {
    Navigation,
    LinkCoponent,
  },
};
</script>

<style lang="stylus">
@import '/assets/stylus/_variables.styl';

#app {
  font-family: Coolvetica, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 100%;
  color: #2c3e50;

  p {
    margin-right: 10%;
  }
}

.background {
  position: static;
  margin-left: -5%;
  margin-right: -5%;
  height: 720px;
}

.landing {
  background: $bg_blue;
  margin-top: $nav_height;

  .content {
    .text {
      padding-top: 15rem;
    }

    .arrows {
      img {
        width: 5%;
        height: 5%;
      }
    }

    .links {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }

  .angle1 {
    margin-top: $nav_height - 60px;
    background: $bg_blue;
    max-width: 120%;
    height: 30rem;
    border-bottom: 0.5rem solid $bg_line;
    margin-left: -20%;
    transform: rotate(-10deg);
  }
}

.about {
  background: $bg_pink;
  margin-bottom: 80%;
  height: 1440px;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 25%;
      z-index: 2;
      margin-left: 10%;
      border-radius: 50%;
      max-width: 100%;
    }

    p {
      margin-left: 10%;
      padding-right: 10%;
    }
  }

  .text {
    margin-top: 6%;
  }

  .filler {
    margin-top: $nav_height -10px;
    height: 20%;
  }

  .angel2 {
    margin-top: 1rem;
    height: 25rem;
    border-bottom: 0.5rem solid $bg_line;
    background: $bg_pink;
    transform: rotate(10deg);
  }
}
</style>

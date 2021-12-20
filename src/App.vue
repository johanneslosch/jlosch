<template>
  <Navigation style="position: sticky; z-index: 9" />
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
    </div>
  </div>
  <div class="background projects">
    <div class="content">
      <div class="title">
        <h1>Projects</h1>
      </div>
      <div class="applys">
        <ProjectComponent
          class="component"
          title="test"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
          codeUrl="https://github.com/johanneslosch/test"
          language="java"
          demoUrl="https://google.com"
        />
        <ProjectComponent
          class="component"
          title="test"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
          codeUrl="https://github.com/johanneslosch/test"
          language="java"
          demoUrl="https://google.com"
        />
        <ProjectComponent
          class="component"
          title="test"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
          codeUrl="https://github.com/johanneslosch/test"
          language="java"
          demoUrl="https://google.com"
        />
      </div>
      <p class="info">
        This is only a small selection of my projects. <br />You can find more
        on my Github account.
      </p>
    </div>
    <div class="angle2" />
  </div>
  <div class="background contact">
    <div class="content">
      <div class="title">
        <h1>Contact</h1>
      </div>
      <div class="form">
        <div class="form-content">
          <input
            type="email"
            placeholder="email"
            class="form-content-field text"
            name="email"
            id="email"
            required="required"
          />
        </div>
        <div class="form-content">
          <input
            type="text"
            placeholder="name"
            class="form-content-field text"
            name="text-1639950031232"
            required="required"
            aria-required="true"
          />
        </div>
        <div class="form-content">
          <textarea
            type="textarea"
            class="form-content-field textarea"
            placeholder="message"
            required="required"
            aria-required="true"
          ></textarea>
        </div>
        <div class="form-content">
          <button class="button">Send</button>
        </div>
      </div>
    </div>
  </div>
  <div class="background footer">
    <div class="content">
      <div class="left">
        <a>Impress</a>
        <a>Terms of Service</a>
        <a>Data protection</a>
        <a class="help">Help</a>
        <a>Copyright 2021 Johannes Losch</a>
      </div>
      <div class="middle">
        <a href="https://linkedin.com/in/johannes-losch" target="_blank">
          <div class="link">
            <img src="https://s.jlosch.de/links/linkedin.svg" loading="lazy" />
            LinkedIn
          </div>
        </a>
        <a href="https://johanneslosch.medium.com/" target="_blank">
          <div class="link">
            <img src="https://s.jlosch.de/links/medium.svg" loading="lazy" />
            Medium
          </div>
        </a>
        <a href="https://github.com/johanneslosch" target="_blank">
          <div class="link">
            <img src="https://s.jlosch.de/links/github.svg" loading="lazy" />
            Github
          </div>
        </a>
        <a href="https://twitter.com/johanneslosch" target="_blank">
          <div class="link">
            <img src="https://s.jlosch.de/links/twitter.svg" loading="lazy" />
            Twitter
          </div>
        </a>
      </div>
      <div class="right">
        <img
          src="https://s.jlosch.de/logo/logo_johanneslosch_untereinander.svg"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import LinkCoponent from "./components/Link.vue";
import ProjectComponent from "./components/Project.vue";

export default {
  name: "App",
  components: {
    Navigation,
    ProjectComponent,
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
    font-size: 13pt;
  }
}

.nav {
  position: relative;
}

.background {
  position: relative;
  margin-left: -5%;
  margin-right: -5%;
  height: 720px;
}

.landing {
  background: $bg_blue;
  margin-top: -1%;
  z-index: 1;

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
    margin-top: 8rem;
    background: $bg_blue;
    max-width: 120%;
    height: 13rem;
    margin-left: -20%;
    border-bottom: 0.5rem solid $bg_line;
    transform: rotate(-4deg);
  }
}

.about {
  background: $bg_pink;
  height: 1240px;
  border-bottom: 0.5rem solid $bg_line;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 25%;
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
    margin-top: 0%;
  }

  .filler {
    margin-top: $nav_height -10px;
    height: 15%;
  }
}

.projects {
  margin-top: -0.1rem;
  margin-left: -5rem;
  margin-right: -5rem;
  height: 60rem;
  background: $bg_blue;
  background: $bg_blue;
  z-index: 1;

  .angle2 {
    background: $bg_blue;
    margin-top: 5rem;
    max-width: 120%;
    height: 11rem;
    z-index: -5;
    margin-left: -20%;
    border-bottom: 0.5rem solid $bg_line;
    transform: rotate(-4deg);
  }

  .content {
    padding-top: 2rem;

    .info {
      padding-top: 2rem;
      margin-left: 10em;
    }

    .title {
      padding-bottom: 2rem;
    }

    .applys {
      margin-left: 1%;
      margin-right: 1%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      gap: 2rem;
    }

    .component {
      flex: 0 0 33.333333%;
    }
  }
}

.contact {
  margin-top: -10rem;
  height: 850px;
  border-bottom: 0.5rem solid $bg_line;
  background: $bg_pink;

  .content {
    z-index: 3;

    .title {
      padding-top: 20rem;
    }

    .form {
      .form-content {
        margin-top: 1rem;

        .button {
          display: inline-block;
          border-radius: 10px;
          border: 2px solid;
          background: #D4FAD5;
          text-align: center;
          padding: 20px;
          font-size: 20pt;
          width: 20rem;
          -webkit-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -o-transition: all 0.5s;
          transition: all 0.5s;
          cursor: pointer;
          margin: 5px;
        }

        .form-content-field {
          width: 50%;
          border: 2px solid;
          height: 3rem;
          text-align: center;
          font-size: 20pt;
          vertical-align: middle;
          border-radius: 4rem;

          &[type=textarea] {
            height: 10rem;
            border-radius: 2rem;
            resize: none;
          }
        }
      }
    }
  }
}

.footer {
  height: 300px;
  background: $bg_blue;
  margin-bottom: -5%;

  .content {
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
    text-decoration: none;

    a {
      font-size: 16pt;
      color: $text-color;
    }

    .left {
      flex-grow: 1;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 33.333%;

      .help {
        cursor: help;
      }
    }

    .middle {
      a {
        text-decoration: none;

        &:hover {
        }
      }

      .link {
        img {
          width: 6%;
          padding-right: 1rem;

          &:hover {
            transform: scale(1);
          }
        }
      }

      flex-grow: 1;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 33.333%;
    }

    .right {
      img {
        width: 40%;
      }

      flex-grow: 1;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 33.333%;
    }
  }
}
</style>

<template>
  <div class="background footer">
    <div class="content">
      <div class="left">
        <router-link to="/impress" class="link"><a>Impress</a></router-link>
        <a>Terms of Service</a>
        <router-link to="/datasecurity" class="link"><a>Data protection</a></router-link>
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
export default {};
</script>

<style lang="stylus" scoped>
.background {
  position: relative;
  margin-left: -5%;
  margin-right: -5%;
  height: 720px;
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

    .left {
      flex-grow: 1;
      gap: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 33.333%;

      .link {
        color: $text-color;
        font-size: 16pt;
        text-decoration: none;
      }

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
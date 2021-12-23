<template>
  <div class="topnav">
    <div class="logo">
      <div class="name-logo">
        <a href="/">
          <img
            src="https://s.jlosch.de/logo/logo_johanneslosch_nebeneinander.svg"
          />
        </a>
      </div>
    </div>
    <div class="menu">
      <nav id="hamnav">
        <input id="hamburger" type="checkbox" />
        <label for="hamburger">
          <span />
          <span />
          <span />
        </label>
        <div id="hamitems">
          <a href="/"> Home </a>
          <router-link to="/impress" class="link"><a> Impress </a></router-link>
          <router-link to="/datasecurity" class="link"
            ><a> Data protection </a></router-link
          >
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/_variables.styl';

/* #region menu */
#hamnav label {
  display: flex;
  flex-direction: column;
  width: 50px;
  cursor: pointer;
  position: absolute;
  top: 17px;
  right: 50px;
}

label span {
  background: #000;
  border-radius: 10px;
  height: 4px;
  margin: 5px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1) {
  width: 50%;
}

span:nth-of-type(2) {
  width: 100%;
}

span:nth-of-type(3) {
  width: 75%;
}

input[type='checkbox'] {
  display: none;
}

input[type='checkbox']:checked + label span:nth-of-type(1) {
  transform-origin: bottom;
  transform: rotatez(45deg) translate(5px, 0px);
}

input[type='checkbox']:checked + label span:nth-of-type(2) {
  transform-origin: top;
  transform: rotatez(-45deg);
}

input[type='checkbox']:checked + label span:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(22px, -6px) rotatez(45deg);
}

#hamitems {
  display: flex;
  padding-top: 2rem;
  // border-left: 1px solid $nav_dropdown_border-left-color;
  height: 100vh;
  background-color: rgba(217, 217, 217, 0.2);
  flex-direction: column;
  position: fixed;
  min-width: 300px;
  right: -300px;
  top: $nav_height;
  transition: right 0.3s;
  overflow: hidden;

  a {
    color: $nav_text-color;
    padding: $nav_text_padding;
    font-size: $nav_text_font-size;
    text-align: center;
    text-decoration: none;
    width: 100%;
    box-shadow: 0px 5px 5px -6px $nav_link-shadow-color;

    &:hover {
      background-color: $nav_background-color_hover;
      color: $nav_text-color_hover;
    }

    &:active {
      background-color: $nav_background-color-active;
      color: $nav_text-color-active;
    }
  }
}

#hamnav input:checked ~ #hamitems {
  right: 0;
}

/* #endregion */
.logo {
  display: inline-block;
  position: absolute;
  left: 0%;
  top: 1rem;
  margin-top: 0;
  width: 175px;

  a {
    img {
      height: 150%;
      width: 150%;
    }
  }
}

.topnav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: $nav-background-color;
  max-height: $nav_height;
  z-index: 1;
}
</style>
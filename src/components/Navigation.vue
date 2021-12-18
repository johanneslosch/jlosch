<template>
  <div class="topnav">
    <div class="logo">
      <div class="name-logo">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="232.147"
            height="59.214"
            viewBox="0 0 232.147 59.214"
          >
            <g
              id="logo_johanneslosch_nebeneinander"
              transform="translate(-420 -19.551)"
            >
              <g
                id="Ebene_5"
                data-name="Ebene 5"
                transform="translate(420 19.551)"
              >
                <path
                  id="Pfad_216"
                  data-name="Pfad 216"
                  d="M71.934,145.813s2.043,7.834,5,9.8a5.923,5.923,0,0,0,5.475,1.227s4.262-1.014,5.74-3.27c1.47-.794,3.432-6.173,3.763-7.8a23.641,23.641,0,0,0-.081-7.8s-1.47-12.155-4.652-11.163-4.99,7.114-4.99,7.114-5.938.2-9.392,2.785c-2.7-1.168-10-.933-10-.933S68.818,145.614,71.934,145.813Z"
                  transform="translate(-62.792 -126.743)"
                  fill="#ced3d6"
                />
                <path
                  id="Pfad_217"
                  data-name="Pfad 217"
                  d="M165.662,152.438s3.5,11.67,9.341,15.183,9,2.2,9,2.2l2.1,4.2s3.851,8.642-1.639,8.415-13.316-2.69-13.316-2.69-10.854-2.682-12.14-7.121c-3.388-3.976-3.741-5.49-3.741-5.49s7.349-6.893,6.893-10.164.816-8.76-1.521-13.081S165.662,152.438,165.662,152.438Z"
                  transform="translate(-89.548 -134.198)"
                  fill="#ced3d6"
                />
                <path
                  id="Pfad_218"
                  data-name="Pfad 218"
                  d="M123.255,158.208c1.7-.469,3.505.261,3.674,1.839a30.306,30.306,0,0,0,3.623,11.325,13.426,13.426,0,0,1,1.088,11.168,2.262,2.262,0,0,0,1.58,2.81h0a2.806,2.806,0,0,0,3.123-.919c1.154-1.61,2.69-4.225,2.616-6.631-.11-3.821-2.55-5.072-.14-12.766a1.544,1.544,0,0,1,.059-.17,32.581,32.581,0,0,1,5.923-9.447c1.521-1.656-.47-19.3-9-18.366-7.481.821-26.838-2.08-18.828,17.33a1.986,1.986,0,0,0,.434.7C120.161,160.432,117.435,159.812,123.255,158.208Z"
                  transform="translate(-77.919 -129.716)"
                  fill="#ced3d6"
                />
                <path
                  id="Pfad_219"
                  data-name="Pfad 219"
                  d="M104.277,173.649s-2.366,8.231-3.77,10.6a24.228,24.228,0,0,1-4.9,5.078s-2.366,3.329-2.2,4.2.61,7.349.61,7.349-2.2,4.99-3.417,4.814-2.8-1.749-3.329-4.814.963-11.215.963-11.215l5.085-8.231,1.227-3.16Z"
                  transform="translate(-69.84 -146.481)"
                  fill="#ced3d6"
                />
              </g>
              <g
                id="Ebene_6"
                data-name="Ebene 6"
                transform="translate(505.147 19.551)"
              >
                <g id="Gruppe">
                  <text
                    id="Johannes"
                    transform="translate(0 26)"
                    fill="#5177a2"
                    font-size="24"
                    font-family="LEMONMILK-Bold, LEMON MILK"
                    font-weight="700"
                  >
                    <tspan x="0" y="0">Johannes</tspan>
                  </text>
                  <text
                    id="L"
                    transform="translate(16.935 47.818)"
                    fill="#5177a2"
                    font-size="18"
                    font-family="LEMONMILK-Regular, LEMON MILK"
                    letter-spacing="0.84em"
                  >
                    <tspan x="0" y="0">L</tspan>
                  </text>
                  <text
                    id="osch"
                    transform="translate(43.232 47.818)"
                    fill="#5177a2"
                    font-size="18"
                    font-family="LEMONMILK-Regular, LEMON MILK"
                    letter-spacing="0.88em"
                  >
                    <tspan x="0" y="0">osch</tspan>
                  </text>
                </g>
              </g>
            </g>
          </svg>
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
          <a href="/"> Home Page </a>
          <a href="/"> Studie </a>
          <a href="/profile"> profile </a>
          <a href="/login"> login </a>
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
  border-left: 1px solid $nav_dropdown_border-left-color;
  height: 100vh;
  background-color: $nav_dropdown_background-color;
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
  left: 20%;
  top: 1.3rem;
  margin-top: 0;
  width: 175px;

  .biomex-logo {
    line-height: 0;
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
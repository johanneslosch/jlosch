<template>
  <div>
    <Navigation />
    <div class="all">
      <div class="impressum">
        <div class="content">
          <h1 class="center">Imprint</h1>
          <p>Information according to § 5 TMG</p>
          <p>
            Johannes Losch <br />
            Eschenheimer Landstraße 42<br />
            60322 Frankfurt am Main <br />
          </p>
          <p>
            <strong>Represented by: </strong><br />
            Johannes Losch<br />
          </p>
          <p>
            <strong>Contact:</strong> <br />
            Phone: +49 69 34878486<br />
            E-Mail: <a href="mailto:hi@jlosch.de">hi@jlosch.de</a> <br />
          </p>
          <p>
            <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong
            ><br />
            Johannes Losch <br />
            Eschersheimer Landstraße 42<br />
            60322 Frankfurt am Main <br />
          </p>
          <p>
            <strong>Disclaimer: </strong><br /><br /><strong
              >Liability for contents</strong
            ><br /><br />
            The contents of our pages were created with the utmost care. For the
            correctness, completeness and up-to-dateness of the contents. take over
            no guarantee. As a service provider we are responsible according to § 7
            1 TMG (Telemedia Act) for own contents on these pages according to the
            general responsible for our own content on these pages. According to §§
            8 to 10 TMG we are as a service provider service provider, we are not
            obligated to monitor transmitted or stored to monitor transmitted or
            stored third-party information or to investigate circumstances or to
            investigate circumstances that indicate illegal activity. Obligations to
            remove or block the use of information according to the general laws
            remain unaffected. However, any liability in this respect is only
            possible from the time of knowledge of a concrete violation of the law.
            Upon becoming aware of violations of the law, we will remove this
            content immediately. remove.<br /><br /><strong
              >Liability for links</strong
            ><br /><br />
            Our offer contains links to external websites of third parties, on whose
            contents we have no influence. on whose contents we have no influence.
            Therefore, we can for these foreign for these foreign contents. For the
            contents of the linked the respective provider or operator of the pages
            is always responsible responsible. The linked pages were checked for
            possible legal checked for possible legal violations at the time of
            linking. Illegal contents were not recognizable at the time of linking.
            A permanent control of the contents of the linked pages is not
            reasonable without without concrete evidence of a violation of the law
            is not reasonable. If we become aware of violations of the law, we will
            remove such links immediately.<br /><br /><strong>Copyright</strong
            ><br /><br />
            The contents and works on these pages created by the site operators are
            pages are subject to German copyright law. The duplication, distribution
            and any kind of exploitation outside the limits of the copyright the
            limits of copyright require the written consent of the respective author
            or author or creator. Downloads and copies of this site are only
            permitted for private, non-commercial use. As far as the contents on
            this page were not created by the operator, the copyrights of third
            parties are respected. In particular, contents of third parties are
            marked as such. Should you nevertheless become aware of a copyright
            infringement, please inform us accordingly. appropriate notice. If we
            become aware of any infringements, we will remove the relevant we will
            remove such content immediately.
            <br /><br /><strong>Data protection</strong><br /><br />
            The use of our website is generally possible without providing personal
            data. Insofar as personal data (for example, name, address or e-mail
            addresses) are collected on our pages, this is always done, as far as
            possible, on a voluntary basis. This data will not be passed on to third
            parties without your express consent.<br /><br />
            We point out that data transmission over the Internet (eg communication
            by e-mail) security gaps. Complete protection of data against access by
            third parties is not possible. The use of contact data published within
            the framework of the imprint obligation by third parties for the purpose
            of sending unsolicited advertising and information materials is hereby
            expressly prohibited.<br /><br />
            The operators of the pages expressly reserve the right to take legal
            action in the event of the unsolicited sending of advertising
            information, such as spam e-mails.<br />
          </p>
          <br />
        </div>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";

export default {
  components: {
    Navigation,
    Footer,
  },
  mounted () {
  window.scrollTo(0, 0)
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/_variables.styl';
*
  font-family: 'Coolvetica';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  overflow-y: hidden

div
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  text-align: center;
  margin-bottom: -2rem;
  padding-bottom: 2rem;
  p
    font-size: 13pt;
  @media screen and (min-width 1945px)
    font-size: 20pt;

.all
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  text-align: center;
  margin-left: auto
  margin-right auto;

  .impressum
    background: $bg_blue;
    margin-right: -2rem;
    height: 90rem
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 5rem;
    @media screen and (max-width 960px)
      height: 100rem
    @media screen and (max-width 720px)
      height: 120rem
    @media screen and (max-width 520px)
      height: 140rem
    @media screen and (max-width 400px)
      height: 160rem
    .content
      padding-left: 4rem
      max-width: 90%
      @media screen and (max-width: 1025px)
        padding-left 3rem
      @media screen and (max-width: 960px)
        padding-left 3rem
      @media screen and (max-width: 680px)
        padding-left: 1rem;
      @media screen and (max-width 520px)
        padding-left: 1rem
    .center
      text-align: center

.footer
  margin-top 2rem
  border-top: 0.5rem solid $bg_line;
  @media screen and (min-width: 600px)
    margin-bottom: -6rem;
  @media screen and (max-width: 599px)
    margin-bottom: -5.7rem
  @media screen and (max-width: 510px)
    height 50rem
</style>
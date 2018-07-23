<template>
  <transition name="fade">

    <div>
      <div class="banner contact-banner d-flex">
          <h1 class="display-4">Contact</h1>
      </div>

      <main id="app">
          <section class="contact container">
            <div class="row">
              <h3 class="col-12">Let me know how I can help you. Send me an email and I’ll answer you as soon as possible. <span style="color: #290058;">😉</span></h3>
            </div>

            <div class="row d-flex content-form">

              <!-- Here the form contact -->

              <div class="col col-12 col-md-6">
                <h4>José Daniel Quintero.</h4>
                <h5><font-awesome-icon icon="envelope"></font-awesome-icon> josedanq100@gmail.com.</h5>
                <h5><font-awesome-icon icon="mobile-alt"></font-awesome-icon> +58-4167278362.</h5>
                <h5><font-awesome-icon icon="globe"></font-awesome-icon> Caracas, Venezuela.</h5>
              </div>

              <figure class="asset-container col col-12 col-md-6">
                <CodingAsset />
              </figure>
            </div>
          </section>
      </main>

    </div>
  </transition>
</template>

<script>
  import Nav from '../Nav';
  import CodingAsset from '../../assets/coding.svg';

  export default {
    name: 'Contact',
    components: {
      Nav,
      CodingAsset
    }
  };

</script>

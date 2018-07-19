<template>
  <div>
    <Nav></Nav>

    <div class="banner home-banner d-flex">
        <h1 class="display-4">Hello World!</h1>
    </div>

    <main id="app">
        <section data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" class="about d-flex">
            <div class="wrapper">
                <h1 class="display-4">About Me</h1>
                <div class="content">
                    <p>Hey! My name is José Daniel, and I can help you with your coding problems.</p>

                    <p>Throughout my life I have always been interested in technology and computation. That’s why I decided to dedicate myself to this area, especially in web development.</p>

                    <p>I am a student who in his free time is dedicated to develop solutions to various problems, and automate processes.</p>

                    <p>I do not have a preference approach between the backend and the frontend, because I have dedicated to forming myself as an integral developer able to offer solutions to any type of problems.</p>
                </div>
            </div>
        </section>

        <hr>

        <Skills></Skills>

        <hr>

        <Services></Services>

    </main>
  </div>
</template>

<script>
import Nav from './Nav';
import Skills from './Skills';
import Services from './Services';

export default {
  name: 'Home',
  components: {
    Nav,
    Skills,
    Services
  },
  data: () => {
    return {
    };
  }
};

</script>

<style lang="scss">
  @import '../sass/main.scss';
</style>

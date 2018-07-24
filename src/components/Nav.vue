<template>
  <nav class="navbar navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="/">
        <Logo class="logo"></Logo> Josedan.js
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"                        data-target="#navbarSupportedContent"                                              aria-controls="navbarSupportedContent" aria-expanded="false"                       aria-label="Toggle navigation">
      <font-awesome-icon class="navbar-toggler-icon" icon="bars" />
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li @click="scrollTop" v-bind:key="link" v-for="link in links" >
              <b-link class="nav-link" :to="(link === 'Home') ? '/' : `/${link}`" exact>{{link}}</b-link>
            </li>
        </ul>
    </div>
  </nav>
</template>

<script>
  import Logo from '../assets/jdlogo.svg';

  export default {
    name: 'Nav',
    components: {
      Logo
    },
    data: () => {
      return {
        links: ['Home', 'Portfolio', 'Contact']
      };
    },
    methods: {
      scrollTop () {
        window.scrollTo(0, 0);
      }
    }
  };

</script>

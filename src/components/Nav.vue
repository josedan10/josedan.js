<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="/">
        <img :src="logo" width="30" height="30" class="d-inline-block align-top" alt=""> Josedan.js
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"                        data-target="#navbarSupportedContent"                                              aria-controls="navbarSupportedContent" aria-expanded="false"                       aria-label="Toggle navigation">
      <font-awesome-icon class="navbar-toggler-icon" icon="bars" />
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/Portfolio">Portfolio</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/Contact">Contact</router-link>
            </li>
        </ul>
    </div>
  </nav>
</template>

<script>
  import logo from '../assets/logo-jd.png';

  export default {
    name: 'Nav',
    data: () => {
      return {
        logo: logo
      };
    }
  };

</script>

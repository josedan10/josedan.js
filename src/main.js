// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHeart, faSmileWink, faEnvelope, faMobileAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Styles and animations
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap';

// Vue Components
import App from './App';
import router from './router';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

AOS.init();

Vue.config.productionTip = false;

library.add(faBars, faHeart, faSmileWink, faEnvelope, faMobileAlt, faGlobe);

Vue.component('font-awesome-icon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

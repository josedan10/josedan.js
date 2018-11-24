<template>
  <div class="container design-container d-grid">

    <figure :style='{"backgroundImage": "url(" + component + ")"}' @click="active = index" v-for="(component, index) in components" :key="index" class="container-element d-flex">
      <!-- <component @click="active = index" :is="component.component"></component> -->
      <a href="javascript:;" @click="active = index" class="filter d-flex text-dark">
        <h3>Click to view</h3>
      </a>
    </figure>
  </div>

</template>

<script>
import Oriana from '../../assets/Oriana.svg';
import Pizza from '../../assets/pi-zza.svg';
import Me from '../../assets/meAvatar.svg';
// import Nazly from '../../assets/Nazly.svg';

export default {
  name: 'Design',
  components: {
    Oriana,
    Pizza,
    Me
    // Nazly
  },
  data: () => {
    return {
      // components: [
      //   {
      //     component: Oriana
      //   },
      //   {
      //     component: Pizza
      //   },
      //   {
      //     component: Me
      //   }
      //   // },
      //   // {
      //   //   component: Nazly
      //   // }
      // ],
      components: [
        '../../assets/Oriana.svg',
        '../../assets/pi-zza.svg',
        '../../assets/meAvatar.svg'
      ],
      active: null
    };
  }
};
</script>

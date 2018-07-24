<template>
  <section data-aos="fade-up" data-aos-duration="2000" class="services">

    <h1 class="display-4">Services</h1>

    <Service
      title="Web Design"
      :content="webDesign"
      direction="left">

      <template slot="asset">
        <WebAsset></WebAsset>
      </template>
    </Service>

    <Service
      title="Mobile Apps"
      :content="mobileApps"
      direction="right">

      <template slot="asset">
        <MobileAsset></MobileAsset>
      </template>
    </Service>

    <Service
      title="Modeling data and database deployment"
      :content="database"
      direction="left">

      <template slot="asset">
        <DatabaseAsset></DatabaseAsset>
      </template>
    </Service>

  </section>
</template>

<script>
  import Service from './Service.vue';
  import WebAsset from '../assets/responsive.svg';
  import MobileAsset from '../assets/mobile-SOs.svg';
  import DatabaseAsset from '../assets/databasemodeling.svg';

  export default {
    name: 'Services',
    components: {
      Service,
      DatabaseAsset,
      MobileAsset,
      WebAsset
    },
    data: () => {
      return {
        webDesign: [
          'Using different design techniques and UX / UI I can design a website that meets the requirements you request. Websites completely responsives for a better presentation and professionalism. Through the different mockups you can see how your website will be displayed on different devices.'
        ],
        mobileApps: [
          'You can have your own native apps for Android and iOS.<em>OH, YEAAH!</em> D:',
          'Having an app today is a point in favor for your company. 75% of the world population has a phone with Android or iOS operating system, and having an app installed is much more convenient than trying to access information about its services through the website. So do not wait any longer to have yours.'
        ],
        database: [
          'Good data modeling is important to optimize server resources and expedite requests to the server. A good analysis of relationships can save large amounts of space on your server, avoid duplicate data and optimize the queries.'
        ]
      };
    }
  };
</script>

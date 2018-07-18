<template>
  <section data-aos="fade-up" data-aos-duration="2000" class="services">
    <h1 class="display-4">Services</h1>

    <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500" class="service container">
        <div class="row">

            <div class="content col col-12 col-sm-6">
                <h2>Web Design</h2>
                <p>
                    Using different design techniques and UX / UI I can design a website that meets the requirements you request. Websites completely resposives for a better presentation and professionalism. Through the different mockups you can see how your website will be displayed on different devices.
                </p>
            </div>

        </div>
    </div>

    <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500" class="service container">
        <div class="row">

            <div class="content col col-12 col-sm-6">
                <h2>Mobile Apps</h2>
                <p>
                    You can have your own native apps for Android and iOS. <em>OH, YEAH!</em> D:
                </p>
                <p>Having an app today is a point in favor for your company. 75% of the world population has a phone with Android or iOS operating system, and having an app installed is much more convenient than trying to access information about its services through the website. So do not wait any longer to have yours.</p>
            </div>

        </div>
    </div>

    <Service
      title="Modeling data and databse deployment"
      v-bind:content="['Good data modeling is important to optimize server resources and expedite requests to the server. A good analysis of relationships can save large amounts of space on your server, avoid duplicate data and optimize the queries.', 'Saludo']"
      direction="left">
    </Service>
  </section>
</template>

<script>
  import Service from './Service.vue';

  export default {
    name: 'Services',
    components: {
      Service
    }
  };
</script>

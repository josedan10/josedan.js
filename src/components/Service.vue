<template>
  <div :data-aos="'fade-' + direction" data-aos-duration="1500" data-aos-delay="500" class="service container">
    <div class="row">

      <div class="content col col-12 col-sm-6">
        <h2>{{ title }}</h2>
        <pre>{{ content }}</pre>
        <p :for="paragraph in content">
          {{ paragraph }}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Service',
    props: ['title', 'content', 'direction'],
    methods: {
      getProps () {
        return this.props;
      }
    }
  };
</script>

<template>
  <div :data-aos="'fade-' + direction" data-aos-duration="1500" data-aos-delay="500" class="service flex">
    <div class="container">
      <div v-if="direction === 'right'" class="row">

        <div class="content col col-12 col-md-6">
          <h2>{{ title }}</h2>
          <p :html="paragraph" v-bind:key="index" v-for="(paragraph, index) in content">
            {{ paragraph }}
          </p>
        </div>

        <figure class="col col-12 col-md-6">

          <slot name="asset"></slot>
        </figure>

      </div>
      <div v-else class="row">

        <figure class="col col-12 col-md-6">

          <slot name="asset"></slot>
        </figure>

        <div class="content col col-12 col-md-6">
          <h2>{{ title }}</h2>
          <p :html="paragraph" v-bind:key="index" v-for="(paragraph, index) in content">
            {{ paragraph }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Service',
    props: ['title', 'content', 'direction']
  };
</script>

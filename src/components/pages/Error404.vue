<template>
  <transition name="fade">

    <div class="d-flex error404">

      <h1 class="col col-12 col-md-6"><span class="text-danger">Error 404.</span> Page Not Found</h1>
      <figure class="col col-12 col-md-6">

        <img class="img-fluid " src="../../assets/meBinary.png" alt="">
      </figure>

    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Error404'
  };
</script>

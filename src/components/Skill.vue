<template>
  <div class="container d-flex">

    <div v-if="index % 2" class="row">

      <figure class="d-flex col col-12 col-md-6">
        <slot name="asset"></slot>
      </figure>

      <div class="wrapper d-flex col col-12 col-md-6">
        <h2>{{name}}</h2>
        <span><em v-if="name === 'Design'" class="float-right">Open source software. Yeiii! <font-awesome-icon style="color: red;" icon="heart"></font-awesome-icon></em></span>
        <ul>
          <li v-bind:key="item.name" v-for="item in list">
            {{ item.name }}
            <b v-if="item.lvl === 3" class="text-success">(Advanced)</b>
            <b v-else-if="item.lvl === 2" class="text-primary">(Intermediate)</b>
            <b v-else class="text-warning">(Basic)</b>

            <small class="d-none d-lg-block" v-if="item.small !== undefined">{{ item.small }}</small>
          </li>
        </ul>
      </div>

    </div>

    <div v-else class="row">

      <div class="wrapper d-flex col col-12 col-md-6">
        <h2>{{name}}</h2>
        <em v-if="name === 'Design'" class="float-right">Open source software. Yeiii! ❤️ <i class="fa fa-heart" style="margin-bottom: 30px; color: red;"></i></em>
        <ul>
          <li v-bind:key="item.name" v-for="item in list">
            {{ item.name }}
            <b v-if="item.lvl === 3" class="text-success">(Advanced)</b>
            <b v-else-if="item.lvl === 2" class="text-primary">(Intermediate)</b>
            <b v-else class="text-warning">(Basic)</b>

            <small class="d-none d-lg-block" v-if="item.small !== undefined">{{ item.small }}</small>
          </li>
        </ul>
      </div>

      <figure class="d-flex col col-12 col-md-6">
        <slot name="asset"></slot>
      </figure>

    </div>

  </div>

</template>

<script>
  export default {
    name: 'Skill',
    props: ['name', 'list', 'index'],
    data: () => {
      return {

      };
    }
  };
</script>

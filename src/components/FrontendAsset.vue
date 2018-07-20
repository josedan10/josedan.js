<template>
  <div class="frontend-demo">

    <h4>LIVE DEMO</h4>

    <img :style="`filter: ${filter}`" width="100%" :src="img" alt="frontend-demo">

    <div class="controls">
        <div class="form-group">

          <label for="formControl">Select a filter</label>

          <select v-model="filterName" @change="handleChange" class="form-control" id="formControl">
            <option value="default" selected>None filter selected</option>
            <option value="blur">Blur</option>
            <option value="brightness">Brightness</option>
            <option value="contrast">Contrast</option>
            <option value="opacity">Opacity</option>
            <option value="saturate">Saturate</option>
          </select>
        </div>

        <div class="form-group">
          <input v-model="filterVal" @change="handleChange" class="form-control" type="range" name="points" step="1" min="0" max="200" id="filterValue">
        </div>

        <span id="comment"> {{ comment }} </span>
    </div>
  </div>
</template>

<script>
  import Img from '../assets/frontend.jpg';

  export default {
    name: 'FrontendAsset',
    data: () => {
      return {
        img: Img,
        comment: 'This will do something funny',
        filterVal: 0,
        filterName: 'default',
        filter: ''
      };
    },
    methods: {
      handleChange (_evt) {
        if (this.filterName === 'blur') {
          this.comment = `The ${this.filterName} now is ${this.filterVal}px`;
          this.changeFilter('px');

        } else if (this.filterName !== 'default') {
          this.comment = `The ${this.filterName} now is ${this.filterVal}%`;
          this.changeFilter('%');

        } else {
          this.comment = 'This will do something funny';
          this.changeFilter('');

        }
      },

      changeFilter (type) {
        if (type !== '')
          this.filter = `${this.filterName}(${this.filterVal}${type})`;
        else
          this.filter = 'none';
      }
    }
  };
</script>

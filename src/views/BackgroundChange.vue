<template>
  <div :class="styleObject">
    <h1>Background Changing</h1>
    <div class="button-container">
      <a class="waves-effect waves-light btn-large" @click="changeIt(1)">Button</a>
      <a class="waves-effect waves-light btn-large purple" @click="changeIt(2)">button</a>
      <a class="waves-effect waves-light btn-large green darken-1" @click="changeIt(3)">button</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundChange",
  data() {
    return {
      backColor:''
    }
  },
  computed: {
    styleObject() {
      if (this.backColor == 1) {
        return 'lightGreenBack'
      } else if (this.backColor == 2) {
        return 'purpleBack'
      } else if (this.backColor == 3) {
        return 'greenBack'
      }
      else {
        return 'defaultBack'
      }
    }
},
    methods: {
      changeIt(color) {
        return this.backColor = color
      }
    }

  }
</script>

<style scoped lang="scss">

.button-container {
  display: flex;
  justify-content: space-evenly;
  width: 100vh;
  height: 100vh;
}

.greenBack {
  background: #43a047;
}

.purpleBack {
  background: #9c27b0;
}

.lightGreenBack {
  background: #2bbbad;
}

.defaultBack {
  background: #FFFFFF;
}
</style>
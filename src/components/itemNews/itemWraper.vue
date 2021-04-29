<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="flexContainers">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemWraper",
  props: ['title']
}
</script>

<style scoped>
.flexContainers {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
}

</style>
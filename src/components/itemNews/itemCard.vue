<template>
  <div
      v-if="title && description"
      :class="color"
      class="card">
    <p class="title">{{ title }}</p>
    <p class="info">
      {{description}}
    </p>
    <p v-if="author">{{author}}</p>
  </div>
</template>

<script>

export default {
  name: "itemCard",
  props: ['title', 'description', 'author', 'color']
}
</script>

<style scoped>
.card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  display: block;
  height: 275px;
  width: 100%;
  max-width: 300px;
  background: #f0f5f6;
}
.title {
  font-weight: bold;
  text-align: center;
  color: #474809;
}
.info {
  padding: 0 20px;
  line-height: 1.8;
  color: #bd7e1d;
}
</style>
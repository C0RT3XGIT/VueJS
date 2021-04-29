<template>
  <div id="root">
    <h1>Comments</h1>
    <!--    <p-->
    <!--        v-for="comment in getStateComments"-->
    <!--    >-->
    <!--      {{comment}}-->
    <!--    </p>-->
    <div class="wrapper">
      <div class="container"
           v-for="comment in getStateComments">
        <p class="title">User ID: {{comment.id}}</p>
        <p class="title">E-mail: {{comment.email}}</p>
        <p class="title">Author: {{comment.name}}</p>
        <p class="title">Body: {{comment.body}}</p>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Comments",
  methods: {
    ...mapActions(['getComments']),
  },

  async created() {
    await this.getComments()
  },

  computed: {
    ...mapGetters(['comments']),

    getStateComments() {
      return this.comments
    }
  }
}
</script>

<style scoped>
.container {
  display: block;
  height: 160px;
  width: 100%;

  background: #dae0e0;
}

.title {
  font-weight: bold;
  color: #474809;
}

</style>
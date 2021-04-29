<template>
  <div>
    <itemWraper
        :title="'Blog'"
    >
      <itemCard
          v-for="item in getStatePost"
          :key="item.title"
          :title="item.title"
          :description="item.body"
          :author="item.userId"
          :color="'yellow'"
      />
    </itemWraper>
<!--    <p v-for="post in this.getPosts"-->
<!--       :key="post.title"-->
<!--    >{{ post.title }}</p>-->

  </div>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'

export default {
  name: "News",
  computed: {
    ...mapGetters(['statePosts']),

    getStatePost () {
      return this.statePosts
    }
  },
   async created() {
    await this.getPosts();
  },
  methods: {
    ...mapActions(['getPosts'])
  }
}
</script>

<style scoped>

</style>
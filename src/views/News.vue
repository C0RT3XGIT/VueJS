<template>
  <div>
    <itemWraper
        :title="'News'"
    >
      <itemCard
          v-for="(item, index) in statePosts "
          :key="item.title"
          :title="item.title"
          :description="item.body"
          :author="item.userId"
          :color="'green'"
      />


    </itemWraper>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "News",
  data() {
    return {
      posts: []
    }
  },
  computed: {
    ...mapGetters(['statePosts']),

    getStatePost() {
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
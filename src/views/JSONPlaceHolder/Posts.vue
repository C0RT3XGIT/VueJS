<template>
  <div class="postsPage">
    <br>
    <br>
    <br>
    <br>
    <hr>
    <itemWraper
        :title="'Posts'"
    >
    <itemCard
        v-for="post in getStatePosts"
        :key="post.title"
        :title="post.title"
        :description="post.body"

    />
      </itemWraper>

  </div>
</template>


<script>
import itemCard from "../../components/itemNews/itemCard";
import itemWraper from "../../components/itemNews/itemWraper";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Posts",
  components: {
    itemCard,
    itemWraper
  },
  computed: {
    ...mapGetters(['statePosts']),

    getStatePosts () {
      return this.statePosts // Getter
    }

  },
  async created() {
    await this.getPosts()
  },
  methods: {
    ...mapActions(['getPosts'])
  }
}
</script>


<style scoped>

</style>
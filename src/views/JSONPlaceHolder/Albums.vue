<template>
  <div class="albumsPage">
    <h1>Albums</h1>
    <table class="highlight">
      <thead>
      <tr>
        <th>User ID</th>
        <th>ID</th>
        <th>Title</th>
      </tr>
      </thead>

      <tbody
          v-for="item in getStateAlbums"
          :key="item.id"
      >
      <tr>
        <td>{{item.userId}}</td>
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Albums",
  methods: {
    ...mapActions(['getAlbums'])
  },

  async created() {
    await this.getAlbums()
  },

  computed: {
    ...mapGetters(['albums']),

    getStateAlbums() {
      return this.albums
    }
  }
}
</script>

<style scoped>

</style>
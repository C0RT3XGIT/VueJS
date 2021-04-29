<template>
<div class="photoPage">
<h1>Photos Pages</h1>
  <div class="row"
       v-for="album in statePhotos"
       :key="album.id"
  >
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img :src="album.thumbnailUrl" loading="lazy">
          <span class="card-title">Photo id:{{ album.id }}</span>
        </div>
        <div class="card-content">
          <p>{{album.title}}</p>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
name: "Photos",
  methods: {
  ...mapActions(['getPhotos'])

  },

  async created() {
  await this.getPhotos()
  },

  computed: {
  ...mapGetters(['photos']),

    statePhotos () {
    return this.photos
    }
  }
}
</script>

<style scoped>

</style>
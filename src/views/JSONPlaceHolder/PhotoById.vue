<template>
  <div class="">
    <h1>Photos by ID</h1>
    <div class="row">
      <div class="input-field col s6">
        <input
            ref="input"
            value=""
            id="first_name2"
            type="number"
            class="validate"
            v-model="photoID"
            placeholder="Enter ID"
        >
        <label class="active" for="first_name2">Photo ID</label>
      </div>
    </div>
    <button class="btn waves-effect waves-light" type="submit" name="action" @click.stop="getPhotoSubmit">Submit
      <i class="material-icons right">send</i>
    </button>


    <div class="row"
         v-if="photos !== null"

    >

      <div class="col s12 m7">
        <div class="card">
          <div class="card-image">
            <img :src="photos.thumbnailUrl" loading="lazy">
            <span class="card-title">Photo id:{{photos.id }}</span>
          </div>
          <div class="card-content">
            <p >{{ photos.title }}</p>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "PhotoById",
  data() {
    return {
      photoID: 1,
      photos: null,
      number:['1','2','3','4','5','6','7','8','9'],
    }
  },

   methods: {
    ...mapActions(['getPhotoById']),

     getPhotoSubmit() {
       let inputValue = this.$refs.input.value;
       if (!this.number.includes(inputValue)) {
         inputValue = ''
         alert('Enter a value between 1 and 10')
       } else
         {
        this.getPhotoById(this.photoID).then((response) => {
          this.photos = response
       })}
    },

  },


}
</script>

<style scoped>

</style>
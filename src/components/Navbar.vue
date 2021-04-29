<template>
  <div class="">
    <ul id="dropdown1" class="dropdown-content">
      <router-link
          v-for="(link,i) in this.$router.options.routes"
          v-if="i>3"
          :key="link.path"
          tag="li"
          :to="link.path"
          exact
          active-class="active"
      >
        <a href="#">{{ link.name }}</a>
      </router-link>
    </ul>

    <nav class="green darken-2">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">Taskssss</router-link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <router-link
              v-for="(link,i) in this.$router.options.routes"
              v-if="i<3"
              :key="link.path"
              tag="li"
              :to="link.path"
              exact
              active-class="active"
          >
            <a href="#">{{ link.name }}</a>
          </router-link>
          <li>
            <a class="dropdown-trigger" ref="dropdowntrigger" href="#!" data-target="dropdown1">API Json<i
                class="material-icons right">arrow_drop_down</i></a>
          </li>sd
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>


export default {
  name: "Navbar",
  data() {
    return {
      dropDownMenu: null,
      options: {
        coverTrigger: false
      }
    }
  },
  mounted() {
    this.dropDownMenu = M.Dropdown.init(this.$refs.dropdowntrigger, this.options);
  }

}

</script>

<style scoped>
nav {
  padding: 0 2rem;
  text-transform: capitalize;
}
</style>
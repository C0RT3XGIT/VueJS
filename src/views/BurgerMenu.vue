<template>
  <div>
    <h1>Hello</h1>
    <div class="navBar">
      <ul>
        <li><a href="#">инвесторам</a></li>
        <li><a href="#">предпринимателям</a></li>
        <li><a href="#">о платформе </a></li>
        <li class=""><a href="#">новости </a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu"
}
</script>

<style scoped>
navBar {
  /* list-style-type: none; */
  /* margin: 32px auto; */
  /* padding: 0; */
  overflow: hidden;
  font-size: 14px;
  display: flex;
  justify-content: space-evenly;
}

ul.navBar li {
  /* float: left; */
  display: inline-flex;
}

ul.navBar li a {
  display: block;
  color: black;
  text-align: center;

  text-decoration: none;
  font-size: 14px;
  line-height: 45px;
  margin-left: 16px;
  /* text-indent: 15px;  Отступ текста */
}

ul.navBar li a:hover {
  border-bottom: 2px solid #0ed193;
  height: 32px;
}

ul.navBar li img {
  margin-left: 80px;
}

/* ul.navBar li a:hover:not(.active) {
  background-color: #111;
} */

/* ul.navBar button {
  display: flex;
  justify-content: center;
  padding-top: 2%;
} */

a:hover {
  text-decoration: underline;
  text-decoration-color: #0ed193;
}

</style>
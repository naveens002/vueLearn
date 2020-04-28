<template>
  <div class="hello">
    <div class="content">
    <h1>There are various Food listed below</h1>
    <h2><router-link to="/food/1">Idly</router-link></h2>
    <h2>Sampar</h2>
    <h2>Vada</h2>
    <h2>Curd</h2>
    <router-link to="/">Back to Home</router-link>
    </div>
     <div class="content-image">
      <img v-bind:src="'../assets/' + pic + '.jpg'" v-bind:alt="pic">
   {{ id}} {{ pic}}
   </div>
  </div>
</template>

<script>
export default {
  name: "Welcome home",
  props: {
    msg: String
  },
  data() {
    return {
      id: this.$route.params.id,
      pic: "idly"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
text-align: center;
margin-top: -300px;
}
.content-image {
padding-left: 300px;
margin-top: -205px;
}
.link-image {
  width: 10%;
}

</style>

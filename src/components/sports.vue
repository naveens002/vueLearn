<template>
  <div class="hello">
    <h1>There are various sports listed below</h1>
    <h2>Cricket</h2>
    <h2>FootBall</h2>
    <h2>Hockey</h2>
    <h2>Tennis</h2>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Welcome home",
  props: {
    msg: String
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
</style>

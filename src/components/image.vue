<template>
  <div class="content-image">
    <img class="link-image" v-bind:src="getSourcePath()" />
  </div>
</template>

<script>
export default {
  name: "Welcome home",
  props: {
    msg: String
  },
  methods: {
    getSourcePath: function() {
      return require(`../assets/${this.$route.params.id}.jpg`);
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
.content-image {
  padding-left: 300px;
  margin-top: -130px;
}
.link-image {
  width: 10%;
}
</style>

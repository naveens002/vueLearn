<template>
  <div class="hello">
    <div class="content" id="food">
      <h1>There are various Food listed below</h1>
         <h2> <div v-on:click="showImage(item.name)" v-for="item in items" :key="item.name">
          {{ item.name }}
      </div></h2>

      <router-link to="/">Back to Home</router-link>
    </div>
    <div class="content-image">
      <img class="link-image" v-bind:src="getSourcePath()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome home",
  props: {
    msg: String
  },
  methods: {
    showImage: function(data) {
      this.defaultImage = data;
    },
    getSourcePath: function() {
      return require(`../assets/${this.defaultImage}.jpg`);
    }
  },
  data: function() {
    return {
      defaultImage: "food",
      items: [
      { name: 'idly' },
      { name: 'sambar' },
      { name: 'vada' },
      { name: 'curd' }
    ]
    };
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
  margin-top: -130px;
}
.link-image {
  width: 10%;
}
</style>

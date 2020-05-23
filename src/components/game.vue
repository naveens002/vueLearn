<template>
  <div class="hello">
    <div class="content" id="game">
    <h1>There are various Games listed below</h1>
         <h2><router-link :to="'/game/image/' + item.name" v-for="item in items" :key="item.name">{{ item.name }}<br></router-link></h2>

<router-link to="/">Back to Home</router-link>
    </div>
    <div>
     <router-view />
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
      defaultImage: "game",
      items: [
      { name: 'coc' },
      { name: 'cod' },
      { name: 'pubg' },
      { name: 'mostWanted' }
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
  padding-left: 355px;
  margin-top: -130px;
}
.link-image {
  width: 20%;
}
</style>

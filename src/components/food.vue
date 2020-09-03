<template>
  <div class="hello">
    <div class="content" id="food">
      <h1>There are various Food listed below {{selectedUser}}</h1>
      <h2>
        <router-link :to="'/food/image/' + item.name" v-for="item in items" :key="item.name">
          {{ item.name }}
          <br />
        </router-link>
      </h2>
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
  data: function() {
    return {
      defaultImage: "food",
      items: [
        { name: "idly" },
        { name: "sambar" },
        { name: "vada" },
        { name: "curd" }
      ]
    };
  },
  computed: {
    selectedUser() {
      return this.$store.getters.selectedUser;
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

</style>

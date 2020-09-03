<template>
  <div id="app" class="main-container">
    <div class="list">
      <img alt="Vue logo" src="./assets/logo.png" />
      <h1>Welcome to Vue</h1>
      {{data}}{{selectedUser}}
      
      <h3>Welcome to my Page </h3>
      <router-link to="/food">food</router-link>
      <br />
      <router-link to="/game">Game</router-link>
      <br />
      <router-link to="/sports">Sports</router-link>
      <br />
      <router-link to="/form">form</router-link>
      <br />
      <router-link to="/cricket">Static</router-link>
      <br />
    </div>
    <div class="details">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      data: "Seleceted User is "
    };
  },
  computed: {
    selectedUser() {
      return this.$store.getters.selectedUser;
    }
  }
};
</script>

<style>
.main-container{
display: flex;
}
</style>

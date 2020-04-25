<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1> Welcome to Vue </h1>
    <h3> Welcome to my Page</h3>
    <router-link to="/food">food</router-link><br>
    <router-link to="/game">Game</router-link><br>
    <router-link to="/sports">Sports</router-link>
     <router-view />
  </div>
  
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>

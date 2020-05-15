<template>
  <div id="app">
    <div class="list">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1> Welcome to Vue </h1>
    <h3> Welcome to my Page</h3>
    <router-link to="/food/2">food</router-link><br>
    <router-link to="/game">Game</router-link><br>
    <router-link to="/sports">Sports</router-link>
    </div>
  <div class="details">
     <router-view />
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

.list-item {
  height: 100%;
  width: 50%;
  left: 0;
  
}
.item-details {
  height: 100%;
  width: 50%;
  right: 0;
  
}
</style>

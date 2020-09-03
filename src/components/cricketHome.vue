<template>
  <div class="cricket">
    <div class="heading">Heading one</div>
    <p class="headingContent">Amet minim molit non deserunt ullamco est sinit. Velit officia consequat duis enim velit mollit. Exerciation veniam consequat sunt nostrud amet
    </p>
    <div class="image">
      <img src="../assets/cricket.jpg" alt />
    </div>
    <div class="heading">Heading two</div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <div class="filledSqure">
      <div class="squre filledeBlue"></div>
      <div class="squre filledGreen"></div>
      <div class="squre filledViolet"></div>
    </div>
    <div class="filledSqure">
      <div class="squre borderBlue"></div>
      <div class="squre borderGreen"></div>
      <div class="squre borderViolet"></div>
    </div>
    <div class="heading">Heading three</div>
    <div class="filledSqure">
      <div class="textContent">{{data}}</div>
      <div class="textContent">{{data}}</div>
      <div class="textContent">{{data}}</div>
    </div>
    <div class="filledSqure">
      <div class="textContent">{{data}}</div>
      <div class="textContent">{{data}}</div>
      <div class="textContent">{{data}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      data: "Amit minim mollit non deserunt ullamaco est sit aliqa dolor do amet sint"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}
.cricket {
  padding: 40px;
}
.image {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.squre {
  height: 50px;
  width: 50px;
}
.filledeBlue {
  background-color: rgb(87, 143, 226);
}
.filledGreen {
  background-color: rgb(89, 243, 115);
}
.filledViolet {
  background-color: rgb(41, 11, 58);
}
.borderBlue {
  border: 2px solid rgb(87, 143, 226);
}
.borderGreen {
  border: 2px solid rgb(89, 243, 115);
}
.borderViolet {
  border: 2px solid rgb(41, 11, 58);

}
.filledSqure {
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
}
.textContent {
width: 220px;
text-align: center;
}
.headingContent {
  padding-left: 25%;
  padding-right: 25%;
  text-align: center;
}
</style>

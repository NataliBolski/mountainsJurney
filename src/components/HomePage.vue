<template>
  <div class="mount___layer">
    <h2 class="mount__article">Distant mountains are close</h2>
    <p class="mount__title">Come with us on an unforgettable journey</p>
    <button class="mount__btn">Sign up for a tour</button>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;800&family=Ubuntu:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;800&family=Ubuntu:wght@300;500&display=swap");
.mount___layer {
  background-image: url("~@/assets/HomePage.jpg");
  background-size: cover;
  width: 100%;
  position: relative;
  height: 100vh;
}

.mount__article {
  text-transform: uppercase;
  margin: 0;
  min-height: 100vh;
  padding: 290px 200px;
  font-family: "Ubuntu", sans-serif;
  color: rgb(255, 243, 243);
  font-size: 45px;
  text-shadow: 0 0 10px rgb(15 33 42 / 80%);
  position: absolute;
}

.mount__title {
  text-transform: uppercase;
  margin: 0;
  min-height: 100vh;
  padding: 350px 230px;
  font-family: "Ubuntu", sans-serif;
  color: rgb(255, 243, 243);
  font-weight: 300;
  font-size: 28px;
  text-shadow: 0 0 10px rgb(15 33 42 / 80%);
  position: absolute;
}

@keyframes slideme {
  0% {
    left: -30px;
    margin-left: 0px;
  }
  30% {
    left: 110%;
    margin-left: 80px;
  }
  100% {
    left: 110%;
    margin-left: 80px;
  }
}

.mount__btn {
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  font-size: 20px;
  overflow: hidden;
  position: relative;
  background-color: #3498db00;
  border-radius: 20px;
  border: 2px solid rgb(212, 229, 240);
  text-shadow: 0 0 10px rgb(15 33 42 / 80%);
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin: 400px 410px;
}

.mount__btn:after {
  content: "";
  position: absolute;
  top: 0;
  left: -50px;
  width: 120%;
  height: 100%;
  background-color: #fff;
  filter: blur(30px);
  transform: skewX(30deg) translateZ(0);
  transition: 1s;
  animation-name: slideme;
  animation-duration: 3s;
  animation-delay: 0.5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.mount__btn:hover {
  background-color: #ffffff6e;
}
</style>

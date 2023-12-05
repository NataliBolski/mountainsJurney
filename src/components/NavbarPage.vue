<template>
    <div>
      <nav class="navbar">
        <ul>
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/about"> tours</router-link></li>
          <li><router-link to="/contact"> tour schedule</router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
    
  </template>
  
  <script>
  export default {
    name: "NavigationBar",
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;800&family=Ubuntu:wght@500&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;800&family=Ubuntu:wght@300;500&display=swap');
  .navbar {
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 1000;
    text-transform: uppercase;
    font-family: "Ubuntu", sans-serif;
    font-weight: 300;
    color: rgb(255, 243, 243);
    font-size: 20px;
    display: flex;
    justify-content: end;
    right: 10%;
  }
  
  ul {
    list-style-type: none;
    margin: 15px;
    padding: 0;
    display: flex;
  }
  
  li {
    margin-right: 40px;
    padding-right: 10px;
  }
  
  li:nth-child(4) {
    border-radius: 20px;
    border: 2px solid rgb(212, 229, 240);
    text-shadow: 0 0 10px rgb(15 33 42 / 80%);
    color: white;
    padding: 8px 25px;
    text-align: center;
    margin-top: -10px;
  }
  
  li:nth-child(4):hover{
    background-color: #ffffff6e;
  }
  a {
    text-decoration: none;
    color: white;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  /* Добавляем отступ для контента, чтобы он не перекрывался навбаром */
  router-view {
    margin-top: 60px; /* Выберите подходящее значение в зависимости от высоты вашего навбара */
  }
  </style>
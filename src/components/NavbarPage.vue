<template>
  <div>
    <nav class="navbar">
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/about"> tours</router-link></li>
        <li><router-link to="/contact"> tour schedule</router-link></li>
      </ul>
    <router-view></router-view>
      <button
        class="register__btn"
        v-if="!user"
        type="button"
        @click="googleRegister"
        label="Войти"
        icon="pi pi-user"
        text
      >
        Sign in
      </button>

      <button
        class="register__btn"
        v-else
        type="button"
        @click="googleLogout"
        label="Выйти"
        icon="pi pi-sign-out"
        text
      >
        Sign out
      </button>
  </nav>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useUsers } from "@/composables/useUsers";

export default {
  setup() {
    const { user, googleRegister, googleLogout } = useUsers();

    onMounted(() => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
          }
        });
      });
    });

    return {
      user,
      googleRegister,
      googleLogout,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;800&family=Ubuntu:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;800&family=Ubuntu:wght@300;500&display=swap");
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
  width: 100%;
  top: 0px;
  right: 45px;
}

ul {
  list-style-type: none;
  margin: 15px;
  padding: 0;
  display: flex;
}

li {
  margin-top: 20px;
  margin-right: 40px;
  padding-right: 10px;
  transition: color 0.3s ease;
  cursor: pointer;
}

li:hover{
  color: #333333;
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

li:nth-child(4):hover {
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

.register__btn {
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  position: relative;
  background-color: #3498db00;
  border-radius: 20px;
  border: 2px solid rgb(212, 229, 240);
  text-shadow: 0 0 10px rgba(79, 86, 89, 0.8);
  color: white;
  padding: 0px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  cursor: pointer;
  overflow: hidden;
  margin-right: 40px;
  margin-top: 17px;
  font-size: 20px;
  transition: background-color 0.3s ease;
}

.register__btn:hover {
  background-color: #ffffff6e;

}
</style>

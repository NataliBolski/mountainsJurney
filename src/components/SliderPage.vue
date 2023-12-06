<template>
  <div id="home" class="sliderCont" :class="{ scrolled: isScrolled }">
    <div class="clouds"></div>
    <div class="slider">
      <div
        class="slides"
        :style="{ transform: 'translateX(' + -currentIndex * 100 + '%)' }"
      >
        <div class="slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide" alt="Slide" />
        </div>
      </div>
      <button @click="prevSlide" class="pi pi-chevron-left"></button>
      <button @click="nextSlide" class="pi pi-chevron-right"></button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import "primeicons/primeicons.css";

const isScrolled = ref(false);
const scrollThreshold = 40;
const transformValue = 30;
const handleScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold;

  const transformOffset = isScrolled.value ? transformValue : 0;
  const translateY = `translateY(-${transformOffset}%)`;
  document.querySelector(".sliderCont").style.transform = translateY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const slides = ref([
  "https://img3.akspic.ru/crops/8/3/8/1/5/151838/151838-reki-gory-reka-islandiya-gora-1920x1080.jpg",
  "https://img2.akspic.ru/crops/5/4/8/1/5/151845/151845-gory-islandiya-landmannalaugar-thrsmrk-gora-1920x1080.jpg",
  "https://img2.akspic.ru/crops/3/7/4/9/4/149473/149473-gornyjhrebet-massiv-nebo-sammit-nagore-1920x1080.jpg",
  "https://img2.akspic.ru/crops/0/4/4/0/5/150440/150440-priroda-alpy-prirodnyj_landshaft-gornyj_hrebet-gornyj_relef-1920x1080.jpg",
  "https://img1.akspic.ru/crops/7/9/9/1/21997/21997-oblako-gora-utro-rassvet-otrazhenie-1920x1080.jpg",
  "https://img2.akspic.ru/crops/7/2/3/7/97327/97327-ekosistema-nebo-derevo-pustynya-les-1920x1080.jpg",
  "https://img1.akspic.ru/crops/9/9/4/1/4/141499/141499-priroda-nebo-gora-ledyanaya_forma-prirodnyj_landshaft-1920x1080.jpg",
]);

const currentIndex = ref(0);

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
}

function prevSlide() {
  currentIndex.value =
    currentIndex.value > 0 ? currentIndex.value - 1 : slides.value.length - 1;
}
</script>

<style scoped>
.clouds {
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
  background-image: url(../assets/clouds.png);
  background-size: cover;
  background-repeat: no-repeat;

}

.sliderCont.scrolled {
  transform: translateY(-26%) !important;
  transition: transform 0.7s ease;
}
.sliderCont {
  z-index: 1000;
  margin: 0 auto;
  margin-top: 195px;
  transition: transform 2s ease;
}

.slides {
  width: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider {
  text-align: center;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slide {
  flex: 0 0 100%;
}

img {
  width: 95%;
  height: 95%;
  border-radius: 20px;
  box-shadow: 10 10 10px rgb(15 33 42 / 80%);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.pi {
  margin-left: 50px;
  margin-right: 50px;
}

button {
  overflow: hidden;
  position: relative;
  background-color: #3c474f;
  border-radius: 20px;
  border: 2px solid rgb(212, 229, 240);
  color: white;
  padding: 6px;
  font-size: 30px;
  transition: background-color 0.3s ease;
}

button:active {
  background-color: #2c3e50; /* Новый цвет при нажатии */
}

</style>

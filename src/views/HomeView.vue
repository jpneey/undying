<script setup>

  import Carousel from '@/components/Carousel.vue';

</script>

<template>
  <main class="w-100 position-relative overflow-hidden d-flex align-items-end justify-content-center flex-wrap">
    <div class="d-block w-100">
      <div class="container py-5 position-relative" style="z-index: 2;">
        <div class="row pt-5">
          <div class="col text-white text-md-centser">
            <div class="px-4">
              <h1>Undying.</h1>
              <p>Explore the fascinating world of the dead through in-depth analysis, survival strategies, and the latest trends in zombie culture.</p>
            </div>
          </div>
        </div>
      </div>
      <Carousel dat="movies"></Carousel>
    </div>
  </main>
</template>

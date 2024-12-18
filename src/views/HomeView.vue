<script setup>

  import data from '@/assets/dat.movies.json';
  import Carousel from '@/components/Carousel.vue';
  import Latest from '@/components/Latest.vue';
  
</script>

<template>
  <main class="w-100 position-relative overflow-hidden d-flex align-items-end justify-content-center flex-wrap">
    <div class="d-block w-100 page">
      <div class="container position-relative" style="z-index: 2;">
        <div class="row pb-4">
          <div class="col text-white text-md-centser">
            <h1>Undying.</h1>
            <p>A curated list of the best zombie, infected, and apocalyptic movies and series for your next thrilling binge-watch.</p>
          </div>
        </div>
      </div>
      <Carousel :dat="data"></Carousel>
    </div>
  </main>
  <Latest></Latest>
</template>

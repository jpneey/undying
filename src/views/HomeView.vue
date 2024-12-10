<script setup>

  import Carousel from '@/components/Carousel.vue';
  import Grid from '@/components/Grid.vue';
  import { ref } from 'vue';

  const view = ref( 'view_apps' );

  function changeView( show ) {
    view.value = show;
  }

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
              <span v-if="view == 'grid_view'" @click="changeView( 'view_apps' )" class="change-view material-symbols-outlined">view_apps</span>
              <span v-if="view == false" @click="changeView( 'grid_view' )" class="change-view material-symbols-outlined">grid_view</span>
            </div>
          </div>
        </div>
      </div>
      <Carousel v-if="view == 'view_apps'" dat="movies"></Carousel>
      <Grid v-if="view == false" dat="movies"></Grid>
    </div>
  </main>
</template>

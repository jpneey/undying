<script setup>
  
  import data from '@/assets/dat.movies.json';
  import { ref } from 'vue';
  
  const props = defineProps(['dat']);
  const defImage = ref( data[0].poster );

  function swapImage( image ) {
    defImage.value = image;
  }

</script>

<template>
  <div class="position-absolute banner top-0 start-0 bg-black w-100 h-75" :style="{ backgroundImage: 'url(./poster/' + defImage + ')' }"></div>
  <div class="position-relative container px-4">
    <section class="row position-relative w-100">
      <div v-for="media in data" class="col-12 col-md-4 mb-4 col-lg-3" @mouseover="swapImage( media.poster )">
        <div class="card-grid w-100 position-relative overflow-hidden d-flex align-items-end flex-wrap">
          <div class="image position-absolute top-50 start-50 w-100 h-100" :style="{ backgroundImage: 'url(./poster/' + media.poster + ')' }"></div>
          <div class="content p-4 position-relative w-100 text-white">
            <h5 class="title pt-4">{{ media.title }}</h5>
            <small>{{ media.year }}</small>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import Preview from '@/components/Preview.vue';
  import data from '@/assets/dat.movies.json';
  import { ref } from 'vue';
  
  const props = defineProps(['dat']);
  const defImage = ref( data[0].poster );

  const previewing = ref( false );
  const media = ref( data[0] );

  function swapImage( image ) {
    defImage.value = image;
  }

  function togglePreview( prev ) {
    previewing.value = !prev;
  }

  function setupPreview( data, prev ) {
    media.value = data;
    togglePreview( prev );
  
    console.log( previewing, media );
  }

</script>

<template>
  <div class="position-absolute banner top-0 start-0 bg-black w-100 h-75" :style="{ backgroundImage: 'url(./poster/' + defImage + ')' }">
  </div>
  <section class="carousel position-relative w-100">
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      class="w-100 position-relative pb-5 px-4 overflow-visible"
    >
      <swiper-slide v-for="media in data" class="position-relative overflow-hidden d-flex align-items-end flex-wrap" @mouseover="swapImage( media.poster )" @click="setupPreview( media, previewing )">
          <div class="image position-absolute top-50 start-50 w-100 h-100" :style="{ backgroundImage: 'url(./poster/' + media.poster + ')' }"></div>
          <div class="content p-4 position-relative w-100 text-white">
            <h5 class="title pt-4">{{ media.title }}</h5>
            <small>{{ media.year }}</small>
          </div>
      </swiper-slide>
    </swiper>

    <div :class=" { 'on' : previewing  } " @click="setupPreview( media, true )">
      <Preview :dat="media"></Preview>
    </div>
  </section>
</template>

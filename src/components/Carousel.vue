<script setup>
  
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import Preview from '@/components/Preview.vue';
  // import data from '@/assets/dat.movies.json';
  import { ref } from 'vue';
  
  const props = defineProps(['dat']);
  const data = props.dat
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
  }

</script>

<template>
  <div class="position-absolute banner top-0 start-0 bg-black w-100 h-75" :style="{ backgroundImage: 'url(./poster/' + defImage + ')' }">
  </div>
  <section class="carousel pt-0 spacing position-relative w-100">
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="25"
      :pagination="{
        clickable: true,
      }"
      :effect="'coverflow'"
      :coverflowEffect="{
        rotate: 80,
        depth: -100,
        modifier: .2,
        scale: 1.2,
      }"

      class="w-100 position-relative px-4 overflow-visible"
    >
      <swiper-slide v-for="media in data" class="position-relative overflow-hidden d-flex align-items-end flex-wrap" @mouseover="swapImage( media.poster )" @click="setupPreview( media, previewing )">
          <div class="image position-absolute top-50 start-50 w-100 h-100" :style="{ backgroundImage: 'url(./poster/' + media.poster + ')' }"></div>
          <div class="content p-4 position-relative w-100 text-white">
            <h5 class="title pt-4">{{ media.title }}</h5>
            <div class="d-flex subtitle">
              <small>{{ media.year }}</small>
              <span class="ms-2"></span>
              <small>{{ media.meta.type }}</small>
            </div>
          </div>
      </swiper-slide>
    </swiper>

    <div :class=" { 'on' : previewing  } ">
      <div class="preview-overlay position-fixed w-100 h-100 top-0 start-0" @click="setupPreview( media, true )"></div>
      <Preview :dat="media" @click="setupPreview( media, true )"></Preview>
    </div>
  </section>
</template>

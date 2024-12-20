<script setup>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import data from '@/assets/dat.movies.json';
  import { ref, onMounted, onUpdated } from 'vue';
  import { useRoute } from 'vue-router';
  import Difficulty from '@/components/Difficulty.vue';
  import { addMovie, removeMovie, isInMovie } from '@/assets/watchlist';
import Eyes from '@/components/Eyes.vue';

  const sauce   = ref( data[0] );
  const route   = useRoute();

  const content = ref( false );
  const metas   = ref( false );

  const renderkey = ref(0);

  const prepareProject = () => {
    sauce.value = data.find( item => {
      return item.slug == route.params.slug;
    })
  }

  function addThisMovie( slug ) {
    addMovie( slug );
    renderkey.value++;
  }

  function removeThisMovie( slug ) {
    removeMovie( slug );
    renderkey.value++;
  }

  async function prepareContent() {
    
    const fileName = `./content/content.${route.params.slug}.json`; // Dynamically set your file name here
    
    try {
      const response = await fetch(`/${fileName}`);
      if (!response.ok) {
        throw new Error(`File not found: ${fileName}`);
      }
      const jsonData  = await response.json();
      content.value   = jsonData;
      metas.value     = jsonData.metas;
    } catch (error) {
      content.value   = null;
    }

  }
  
  onMounted(()=> {
    prepareProject();
    prepareContent();
  })

  onUpdated(() => {
    prepareProject();
    prepareContent();
  });

</script>

<template>
<div class="page-wrap">
  <div class="spacing pt-0 position-relative overflow-hidden">
    <div class="page-small sauce d-block bg-black text-white position-relative">
      <div class="position-absolute top-0 start-0 w-100 h-100">
        <div class="bg w-100 position-relative h-100" :style="{ backgroundImage: 'url(./poster/' + sauce.poster + ')' }"></div>
        <div class="sauce-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>
      <div class="container px-0 position-relative">
        <div class="row">
          <div class="col col-12">
            <div class="text-center text-md-start">
              <div class="bg w-100 poster-offset position-relative h-100 maybe-rounded" :style="{ backgroundImage: 'url(./poster/' + sauce.poster + ')' }">
                <div class="content position-absolute bottom-0 start-0 w-100">
                  <div class="container">
                    <div class="row">
                      <div class="col col-12 col-md-6 offset-md-3 pt-5">
                        <p class="mb-0 subtitle">{{ sauce.year }} &mdash; {{ sauce.meta.type }}</p>
                        <h2 class="mb-0 mb-md-4">{{ sauce.title }}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="spacing pt-0 container">
    <div class="row">
      <div class="col col-12 col-md-3 text-md-end mt-4 mt-md-0 order-2 order-md-1">
        <div class="pe-md-4">
          <p class="subtitle mb-3"><small class="d-block opacity-75">Type</small>{{ sauce.meta.type }}</p>
          <p class="subtitle mb-3"><small class="d-block opacity-75">Released</small>{{ sauce.year }}</p>
          <p class="subtitle mb-3"><small class="d-block opacity-75">Director</small>{{ sauce.meta.director }}</p>
          <p class="subtitle mb-0"><small class="d-block opacity-75">Country</small>{{ sauce.meta.country }}</p>
        </div>
      </div>
      <div class="col col-12 col-md-6 mt-4 mt-md-0 order-md-2">
        {{ sauce.content }}
        <template v-if="content">
          <div v-if="content.gallery" class="mt-4">
            <p class="subtitle">Gallery</p>
            <swiper
              :slidesPerView="'auto'"
              :spaceBetween="25"
              class="w-100 position-relative overflow-hidden maybe-rounded"
            >
              <swiper-slide v-for="image in content.gallery" class="w-auto maybe-rounded overflow-hidden position-relative sauce-gallery-item">
                <img :src=" './gallery/' + image " alt="gallery-image">
              </swiper-slide>
            </swiper>
          </div>
        </template>
        <div class="mt-4" :key="renderkey">
              <div class="maybe-rounded border border-dark p-4 position-relative overflow-hidden">
                <div class="row align-items-center position-relative">
                  <div class="col col-12 col-md-4">
                    <div class="box position-relative overflow-hidden maybe-rounded border border-dark">
                      <div class="position-absolute top-50 start-50 translate-middle w-100 h-100 opacity-50">
                        <Eyes :text="'View Trailer.'" :count="6"></Eyes>
                      </div>
                      <div class="play position-absolute top-50 start-50 translate-middle"></div>
                    </div>
                  </div>
                  <div class="col col-12 col-md-8 mt-4 mt-md-0">
                    <div class="ps-md-4">
                      <h5>Watchlist</h5>
                      <template v-if="isInMovie( sauce.slug )">
                        <p class="mb-3"><span>{{ sauce.title }}</span> is added to your watchlist.</p>
                        <RouterLink to="/list/" class="button me-2">View List</RouterLink>
                        <span class="button" @click="removeThisMovie(sauce.slug)">Remove</span>
                      </template>
                      <template v-else>
                        <p class="mb-3">Interested in {{ sauce.title }}? Add it to your list.</p>
                        <span class="button" @click="addThisMovie(sauce.slug)">Add to watch list</span>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div class="col col-12 col-md-3 mt-4 mt-md-0 order-2 order-md-3">
        <div class="ps-md-4">
          <Difficulty
            :metas="metas"
            >
          </Difficulty>
        </div>
      </div>
    </div>
  </div>
  <div class="position-relative overflow-hidden border-top border-dark py-4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-7">

          <div class="row row-cols-3">
            <div class="col col-12 col-md-4">
              <div class="bg-dark mb-4 mb-md-0 box maybe-rounded position-relative overflow-hidden">
                <div class="position-absolute top-50 w-100 h-100 start-50 translate-middle">
                </div>
              </div>
            </div>
            
            <div class="col col-12 col-md-4">
              <div class="bg-dark mb-4 mb-md-0 box maybe-rounded"></div>
            </div>
            
            <div class="col col-12 col-md-4">
              <div class="bg-dark box maybe-rounded"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

</template>
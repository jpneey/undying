<script setup>

  import movies from '@/assets/dat.movies.json';
  import { ref, onMounted } from 'vue';
  import { RouterLink } from 'vue-router';
  import { getMovies, removeMovie } from '@/assets/watchlist';

  const data = ref( movies );
  const inList = getMovies();

  const updateData = () => {
    data.value = movies.filter( item => {
      return inList.includes( item.slug );
    })
  }
  
  function removeThisMovie( slug ) {
    removeMovie( slug );
    window.location.reload();
  }

  onMounted(()=>{
    updateData();
  })

</script>

<template>
  <div class="page-wrap">
    <div class="page directory d-block bg-black text-white h-100">
      <div class="container position-relative">
        <div class="row">
          
          <div class="col col-12">
            <div class="text-center">
              <!-- <Crumbs :links="crumbs"></Crumbs> -->
              <h1>Watch List</h1>
              <p>Build your own curated list.</p>
            </div>
          </div>
          
          <div class="col col-12 spacing">
            <div class="row row-cols-1 row-cols-lg-2">

              <template v-if="data">
              <div class="col mb-4" v-for="media in data">
                  <div class="border border-dark maybe-rounded p-4">
                    <div class="row align-items-center position-relative">
                      <div class="col col-12 col-md-4">
                        <RouterLink :to="'/'+media.slug" class="box d-block position-relative overflow-hidden maybe-rounded">
                          <div class="position-absolute top-50 start-50 translate-middle w-100 h-100 poster" :style="{ backgroundImage: 'url(./poster/' + media.poster + ')' }">
                          </div>
                          <div class="play position-absolute bottom-0 start-0 m-3"></div>
                        </RouterLink>
                      </div>
                      <div class="col col-12 col-md-8 mt-4 mt-md-0">
                        <div class="ps-md-4 text-white">
                          <h5>{{ media.title }}</h5>
                          <p class="subtitle">{{ media.year }} &mdash; {{ media.meta.type }}</p>
                          <span class="button" @click="removeThisMovie( media.slug )">Remove</span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              </template>
              <div class="col mb-4" v-else>
                  <div class="border border-dark maybe-rounded p-4">
                    <div class="row align-items-center position-relative">
                      <div class="col col-12 col-md-4">
                        <div class="box d-block position-relative overflow-hidden maybe-rounded">
                          <div class="position-absolute top-50 start-50 translate-middle w-100 h-100 poster">
                          </div>
                          <div class="play position-absolute bottom-0 start-0 m-3"></div>
                        </div>
                      </div>
                      <div class="col col-12 col-md-8 mt-4 mt-md-0">
                        <div class="ps-md-4 text-white">
                          <h5>aa</h5>
                          <p class="subtitle">aa &mdash; aa</p>
                          <span class="button">Remove</span>
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
</template>